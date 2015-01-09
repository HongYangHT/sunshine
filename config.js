/**
 * configuration for sunshine project
 * 
 */
var path = require('path');

var config = {
	name:'sunshine',
	description:'sunshine project',
	
	keywords:'node /express /ejs /mongodb /',
	
	/*db configuration*/
	host:'localhost',
	dbpath:'mongodb://localhost/sunshine',
	dbname:'sunshine',
	
	/*session configuration*/
	session_sercret:'sunshie_sercret',
	sessionpath:'mongodb://localhost/sunshine',
	
	/*port setting */
	port:'3000',
	
	/*favicon setting*/
	favicon:'/public/images/favicon.ico'
};

exports.config = config;