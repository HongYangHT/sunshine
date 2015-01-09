/**
 * @description 用于用户记录 message
 * UserSchema
 * @field (String) username
 * @field (String) password
 * @field (String) email (as login account)
 * @field (Number) gender 性别
 * @field (String) profile_image_url 头像url
 * @field (Date)   birthDate
 * @field (Date)   signupDate 注册时间
 * 
 * */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema ,
	ObjectId = Schema.ObjectId;

var UserSchema = new Schema({
	username  : { type:String,required:true },
	password  : { type:String,required:true },
	email	  : { type:String,required:true },
	gender	  : { type:Number,default:0},//type: 0 表示男,1表示女
	profile_image_url : {type:String,default:'../images/head-m.gif'},//默认头像
	birthDate : { type:Date,default:Date.now},//生日
	signupDate:	{ type:Date,default:Date.now} //注册时间，系统默认
});

//UserSchema.add({ signupDate:{type:Date,default:Date.now}});

module.exports = mongoose.model('User', UserSchema);