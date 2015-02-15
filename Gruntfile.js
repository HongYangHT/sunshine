/**
 * @version 0.0.1 
 * @author hongyang
 * @description config for grunt less
 * 
 */
/*var Gruntfile = function(grunt){
	grunt.initConfig({
		less:{
			compile: {
				option:{ },
				files: {
					'public/css/pagination.css':'public/less/pagination.less',
					'public/css/notify.css':'public/less/notify.less',
					'public/css/index.css':'public/less/index.less'
				}
			},
			compileMain: {
				options: {
					
				},
				files: {
					
				}
			},
			minify : {
                options : {
                    cleancss : true,
                    report : 'min',
                    compress : true,
                    cleancssOptions : {
                        keepSpecialComments : 0,
                        keepBreaks : false
                    }
                },
                files : {
                	'public/css/pagination.min.css':'public/css/pagination.css',
                	'public/css/notify.min.css':'public/css/notify.css',
                	'public/css/index.min.css':'public/css/index.css'
                }
            }
		},
		
		watch:{
			scripts: {
			   files:['public/less/*.less','public/less/lib/*.less'],
			   tasks:['less']
			} 
		
		}
	});	
	
	grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', [ 'less', 'watch' ]);

};*/

var Gruntfile = function(grunt){
	grunt.initConfig({
		less:{
			dev:{
				files:[{
					expand : true,
					cwd : '/less/',
					src : ['*.less'],
					dest: '/css/',
					ext : '.css'
				}],
			}
		},
		cssmin:{
			deploy:{
				files:[{
					expand : 'true',
					cwd : '/css/',
					src : ['*.css'],
					dest : '/css/',
					ext : '.min.css'
				}]
			}
		},
		uglify:{
			dev:{
				files:[{
					expand:true,
					cwd : '/js/',
					src : ['*.js'],
					dest: '/js/',
					ext : '.min.js'
				}]
			}
		},
		imagemin : {
			dev : {
				files:[{
					expand:true,
					cwd:'/images/',
					src:['*.[png,jpg]'],
					dest:'/images/'
				}]
			}
		},
		watch:{
			less:{
				files:['/less/*.less'],
				tasks:['less']
			},
			uglify:{
				files:['/js/*.js'],
				tasks:['uglify']
			},
			cssmin:{
				files:['/css/*.css'],
				tasks:['cssmin'],
			},
			imagemin:{
				files:['/images/*.[png,jpg]'],
				tasks:['imagemin']
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	grunt.resgisterTask('default',['less','cssmin','uglify','watch']);
	grunt.resgisterTask('gruntAll',['less','cssmin','uglify','imagemin','watch']);
};


module.exports = Gruntfile;