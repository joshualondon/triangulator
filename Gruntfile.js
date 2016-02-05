module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		watch: {
			css: {
				files: 'assets/scss/**/*.scss',
				tasks: ['sass']
			},

			scripts: {
				files: 'assets/js/**/*.js'
			}
		},

		sass: {
			options: {
		        sourcemap: 'auto'
		      },

			dist: {
				files: {
					'assets/css/triangulator.css' : 'assets/scss/triangulator.scss'
				}
			}
		},

		autoprefixer: {
            dist: {
                files: {
                    'assets/css/triangulator.css' : 'assets/css/triangulator.css'
                }
            }
        },



        browserSync: {
            dev: {

                bsFiles: {

                    src : [
                        'assets/css/*.css',
						'assets/images/**/*',
                        '*.html'
                    ]
                },

                options: {
					watchTask: true,

					server: {
			            baseDir: "./"
			        },

                    port: '9966'
                }
            }
        }
	});

	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');

	// run everything
	grunt.registerTask('default', ['browserSync', 'watch']);

	// run just the watch without browserSync
	grunt.registerTask('build', ['sass', 'watch']);
}
