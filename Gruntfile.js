/**
 * @version 0.0.1 
 * @author hongyang
 * @description config for grunt less
 * 
 */
var Gruntfile = function(grunt){
	grunt.initConfig({
		less:{
			compile: {
				option:{ },
				files: {
					'public/css/pagination.css':'public/less/pagination.less',
					'public/css/notify.css':'public/less/notify.less'
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
                	'public/css/notify.min.css':'public/css/notify.css'
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

};

module.exports = Gruntfile;