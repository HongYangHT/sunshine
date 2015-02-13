/**
 * this is proxy to handle to message model
 */
var Message = require('../models/message');
var Creator = Message.Creator;
var MessageHandle = {};
/**
 * 关于回复的操作包括查找、显示等的操作
 *
 */
/**查找信息的内容
 * @param (ObjectId)receive_id 收到信息人的_id
 * @param cb callback function
 * @return (String[])content
 * */
MessageHandle.getContent = function(receive_id,sender_id,cb){
	Creator.find({sender_id:sender_id,receive_id:receive_id}).populate('contents').match(is_read:false).exec(function(err,docs){
		var result = {};
		if(err){
			result.type = 'error';
			result.message = '发送失败或者没有该用户，请重新发送!';
			return result;
		}else{
			if(docs.length){
				docs.each(function(i,item){
					item.update(is_read,true);
				});
				result.type = 'success';
				result.message = '发送成功!';
				result.content = docs;
				return result;
			}else{
				result.type = 'error';
				result.message = '发送失败或者没有该用户，请重新发送!';
				return result;
			}
			
		}
	});
};

/**查找获取信息的条数
 * 
 * */
MessageHandle.countMessage = function(receive_id,cb){
	var len = Creator.find({receive_id:receive_id}).populate('contents').count(cb);
	return len;
};

/**
 * 存储message
 * @param content(json)
 * 		sender 	   
 *		sender_id  
 *		receiver   
 *		receive_id 
 *		contents	 
 * */
MessageHandle.saveContent = function(content,cb){
	Creator.findOne({sender_id:content.sender_id,receive_id:content.receive_id}).exec(function(err,doc){
		var result = {};
		if(err){
			result.type = 'error';
			result.message = '发送失败或者没有该用户，请重新发送!';
			return result;
		}else{
			if(doc){
				doc.contents.push(content.contents);
				result.type = 'success';
				result.message = '发送成功!';
				result.content = [];
				return result;
			}else{
				result.type = 'error';
				result.message = '发送失败或者没有该用户，请重新发送!';
				return result;
			}
			
		}
		
	});
};

module.exports = MessageHandle;