module.exports = function(grunt) {

  var config = {

    // Load data from package.json
    pkg: grunt.file.readJSON('package.json'),

    // Execute Metalsmith
    exec: {
      sass: {
        cmd: 'npm run-script sass'
      },
      test: {
        cmd: 'npm run test'
      }
    },

    // Watch files and run tasks when changed
    watch: {
      all: {
        files: [
          'styles/**/*',
          'components/**/*',
          '**/*.twig'
        ],
        tasks: ['sass', 'test'],
        options: {
          spawn: false,
          interupt: true,
          livereload: 8001
        }
      }
    }
  };

  grunt.initConfig(config);

  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('sass', ['exec:sass']);
  grunt.registerTask('test', ['exec:test']);
  grunt.registerTask('default', ['sass', 'watch']);
};
