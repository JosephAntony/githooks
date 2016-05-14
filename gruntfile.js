module.exports = function(grunt){

  grunt.initConfig({

    karma:{
      unit:{
        configFile: 'karma.conf.js'
      },
      continuous: {
        singleRun: true,
        browsers: ['Chrome']
      },
    }

  });

  grunt.loadNpmTasks('grunt-karma');
  grunt.registerTask('build', ['karma']);
  grunt.registerTask('install-hook', function(){
    var fs = require('fs');
    grunt.file.copy('hooks/pre-commit', '.git/hooks/pre-commit')
    fs.chmodSync('.git/hooks/pre-commit', '755');
  })

  grunt.task.run('install-hook');

}
