/**
 * message change schema 
 * @description 用于聊天，回复
 * MessageCreatorSchema
 * @field (String)sender 发送人
 * @field (ObjectId)send_id 发送人的id
 * @field (String)receiver 接收人
 * @field (ObjectId)receive_id 接收人id
 * @field (subDoc)content message内容
 * 
 */

var mongoose = require('mongoose'),
	Schema 	 = mongoose.Schema ,
	ObjectId = Schema.ObjectId;

var CreatorSchema = new Schema({
	sender 	   : { type:String, required:true },
	sender_id  : { type:ObjectId, required:true },
	receiver   : { type:String, required:true },
	receive_id : { type:ObjectId, required:true },
	content    : [{ type:Schema.Types.ObjectId, ref:'Content'}]//外键  _id 
});

/* 虚拟属性*/

CreatorSchema.virtual('sender.full').get(function(){
	return this.sender+','+this.sender_id;
});

CreatorSchema.virtual('sender.full').set(function(send){
	var senderinfo = send.split(',');
	this.sender = senderinfo[0] ;
	this.sender_id = senderinfo[1];
});

CreatorSchema.virtual('receiver.full').get(function(){
	return this.receiver+','+this.receiver_id;
});

CreatorSchema.virtual('sender.full').set(function(receive){
	var receiveinfo = receive.split(',');
	this.sender = receiveinfo[0] ;
	this.sender_id = receiveinfo[1];
});

/* add CreatorSchema methods*/
/**
 * @params (Function)callback
 * return [content]
 * */
CreatorSchema.methods.findContent = function(callback){
	return this.content;
};

CreatorSchema.methods.getContent = function(options){
	var content = this.find({receive_id : options.receive_id})
				    .populate('content')
				    .where('is_read',false)
				    .exec();
	return content;
};

/**
 * message content schema 
 * @description 用于聊天，回复 内容体
 * MessageContentSchema
 * @field _creator 连接一个MessageSchema
 * @field (Date)send_time 发送时间
 * @field (String)send_content 发送内容
 * @field (Boolean)is_read 是否已读
 * @field (Number)type 接收类型 0 send 1 receive 
 *  
 */

var ContentSchema = new Schema({
	_creator     : { type:Schema.Types.ObjectId, ref: 'Creator' },//匹配
	send_time    : { type:String, required:true },
	send_content : { type:String },
	is_read      : { type:Boolean, default:false},
	type         : { type:Number, default:0 }
});

/**
 * 分页查询
 * @params options
 * 	 @params pageNumber
 *   @params pageSize
 * return docments 
 * */
ContentSchema.methods.page = function(options){
	var result = {};
	result.content = this.find({is_read:false})
		.sort('send_time')
		.skip((options.pageNumber-1)*options.pageSize)
		.limit(options.pageSize)
		.exec();
	result.totalpage = this.find({is_read:false})/options.pageSize;
	return result;
};

var Creator = mongoose.model('Relation', CreatorSchema);
var Content  = mongoose.model('Content', ContentSchema);

exports.Creator = mongoose.model('Relation', CreatorSchema);
exports.Content  = mongoose.model('Content', ContentSchema);
