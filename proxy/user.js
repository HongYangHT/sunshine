/**
 * this is proxy to handle to user model
 */
var User = require('../models/user');

var UserHandle = {};
/**
 * 关于用户的操作包括查找、更新、删除、权限分配等的操作
 * UserHandle.find();
 */

/**
 * @param  _id
 * @return object
 * */
UserHandle.findById = function(_id){
	User.findById(_id,function(err,doc){
		var result = {};
		if(err){
			result.type = 'error';
			result.message = '查找出错!';
			return result;
		}else{
			if(doc){
				result.type = 'success';
				result.message = '查找成功!';
				result.content = doc;
				return result;
			}else{
				result.type = 'error';
				result.message = '没有该用户!';
				return result;
			}
		}
	});
};

/**
 * @param  (object)query {search by conditions}
 * @return object
 * */
UserHandle.findOne = function(query){
	User.findOne(query,function(err,doc){
		var result = {};
		if(err){
			result.type = 'error';
			result.message = '查找出错!';
			return result;
		}else{
			if(doc){
				result.type = 'success';
				result.message = '查找成功!';
				result.content = doc;
				return result;
			}else{
				result.type = 'error';
				result.message = '没有该用户!';
				return result;
			}
		}
	});
};
/**
 * 查找指定条件的用户
 * @param [query](optional)
 * 
 * */
UserHandle.find = function(query){
	User.find(query,function(err,docs){
		var result = {};
		if(err){
			result.type = 'error';
			result.message = '查找出错!';
			return result;
		}else{
			if(doc){
				result.type = 'success';
				result.message = '查找成功!';
				result.content = doc;
				return result;
			}else{
				result.type = 'error';
				result.message = '没有该用户!';
				return result;
			}
		}
	});
};
/**
 * 查找指定条件的指定键
 * @param condition [optional]
 * @param query ['username','signupDate']
 * */
UserHandle.findQuery = function(condition,query){
	User.find(condition,query,function(err,docs){
		var result = {};
		if(err){
			result.type = 'error';
			result.message = '查找出错!';
			return result;
		}else{
			if(doc){
				result.type = 'success';
				result.message = '查找成功!';
				result.content = doc;
				return result;
			}else{
				result.type = 'error';
				result.message = '没有该用户!';
				return result;
			}
		}
	});
};

/**
 * document update 更新多个
 *@param [conditions](object)
 *@param [query](object)
 *@param cb (function)	
 * */
UserHandle.update = function(conditions,query,cb){
	User.find(conditions).update(query,cb);
};

/**
 * document update 更新单个
 *@param conditions(object)
 *@param [query](object)
 *@param cb (function)	
 * */
UserHandle.updateOne = function(conditions,query,cb){
	User.findOneAndUpdate(conditions,query,cb);
};

/**
 * documents remove 删除多个满足条件
 * @param conditions(object)
 * @param [cb](function)
 * */
UserHandle.remove = function(conditions,cb){
	User.remove(conditions,cb);
};

/**
 * document remove 删除单个满足条件
 * @param conditions(object)
 * @param [cb](function)
 * */
UserHandle.removeOne = function(conditions,cb){
	User.findOneAndRemove(conditions,cb);
};

module.exports = UserHandle;