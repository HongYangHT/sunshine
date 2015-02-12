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
 * @field (String) permission 用户权限 001 用户 002 admin 003
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
	signupDate:	{ type:Date,default:Date.now}, //注册时间，系统默认
	permission: { type:String,default:'000'}
});

module.exports = mongoose.model('User', UserSchema);

/*
可以这样，在 ArticleSchema 增加 tags: [{ type: Schema.Types.ObjectId, ref: ‘Tag’ }]
取数据的时候这样，
Article.find({}).populate(‘tags’).exec(callback);
这样就直接可以从tag表中找出对应得tag._id数据，放到查询结果中了。

这里需要注意的是：ref的 Tag 对应的是 mongoose.model('Tag’, TagSchema); 的名称

article.tags.push(); 就可以，和JS数组的操作方式一样。
操作完以后，article.save(); 一下就保存了

*/