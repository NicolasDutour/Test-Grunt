module.exports = function(grunt) {

  // Load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
    require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({

    jshint: {
      all: ['src/js/**/*.js']
    },

    uglify: {
      options: {
        mangle: false
      },
      dist: {
        files: {
          'dist/js/min.js': ['src/js/main.js', 'src/js/test1.js']
        }
      }
    },

    sass: {
      dist: {
        files: {
          'src/styles/css/main.css': 'src/styles/sass/main.scss',
          'src/styles/css/test1.css': 'src/styles/sass/test1.scss'
        }
      }
    },

    cssmin: {
      dist: {
        files: {
          'dist/css/min.css': ['src/styles/css/main.css', 'src/styles/css/test1.css']
        }
      }
    },

    imagemin: {
        dist: {
            files: [{
                expand: true,
                cwd: 'src/assets/img',
                src: ['**/*.{png,jpg,gif}'],
                dest: 'dist/assets/img/'
            }]
        }
    },

    watch: {
      js: {
        files: ['src/js/**/*.js' ],
        tasks: ['jshint', 'uglify'],
        options: { spawn: false },
      },

      css: {
        files: ['src/styles/**/*.scss', 'src/styles/**/*.css' ],
        tasks: ['sass', 'cssmin'],
        options: { spawn: false },
      },
    }

  });


  // Default task(s).
  grunt.registerTask('default', ['jshint', 'uglify', 'sass', 'cssmin', 'imagemin']);

};
