'use strict';

module.exports = function (grunt) {
  // Load all grunt tasks
  require('load-grunt-tasks')(grunt);
  // Show elapsed time at the end
  require('time-grunt')(grunt);

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*!\n' +
      '* <%= pkg.name %> - for jQuery 1.7+\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '*\n' +
      '* Copyright <%= grunt.template.today("yyyy") %>, <%= pkg.author.name %> (http://clivewalkden.co.uk)\n' +
      '*\n' +
      '* @package <%= pkg.description %>\n' +
      '* @author <%= pkg.author.name %> (<%= pkg.author.url %>)\n' +
      '* @version <%= pkg.version %>\n' +
      '* @license <%= pkg.license %>\n' +
      '* @copyright Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %> (<%= pkg.author.url %>)\n' +
      '* @date: <%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '*/\n\n',
    // Task configuration.
    clean: {
      files: ['dist']
    },
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      js: {
        src: ['src/<%= pkg.name %>.js'],
        dest: 'dist/jquery.<%= pkg.name %>.js'
      },
      css: {
        src: ['src/<%= pkg.name %>.css'],
        dest: 'dist/jquery.<%= pkg.name %>.css'
      },
    },
    uglify: {
      options: {
        banner: '<%= banner %>',
        compress: {
          drop_console: true
        }
      },
      my_target: {
        files: {
          'dist/jquery.<%= pkg.name %>.min.js': ['<%= concat.js.dest %>']
        }
      }
    },
    cssmin: {
      add_banner: {
        files: {
          'dist/jquery.<%= pkg.name %>.min.css': ['<%= concat.css.dest %>']
        }
      }
    },
    qunit: {
      all: {
        options: {
          urls: ['1.7.0','1.7.2','1.8.0','1.8.3','1.9.0','1.9.1','1.10.2','1.11.3','1.12.0','2.0.3','2.1.4','2.2.0'].map(function(version) {
            return 'http://localhost:<%= connect.server.options.port %>/test/<%= pkg.name %>.html?jquery=' + version;
          })
        }
      }
    },
    jshint: {
      options: {
        reporter: require('jshint-stylish')
      },
      gruntfile: {
        options: {
          jshintrc: '.jshintrc'
        },
        src: 'Gruntfile.js'
      },
      src: {
        options: {
          jshintrc: 'src/.jshintrc'
        },
        src: ['src/**/*.js']
      },
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/**/*.js']
      }
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      src: {
        files: '<%= jshint.src.src %>',
        tasks: ['jshint:src', 'qunit']
      },
      test: {
        files: '<%= jshint.test.src %>',
        tasks: ['jshint:test', 'qunit']
      }
    },
    connect: {
      server: {
        options: {
          //hostname: '*',
          port: 8085
        }
      }
    },
    bump: {
      options: {
        files: ['package.json','bower.json','cw_charcount.jquery.json'],
        updateConfigs: [],
        commit: true,
        commitMessage: 'Release v%VERSION%',
        commitFiles: ['-a'], // '-a' for all files
        createTag: true,
        tagName: 'v%VERSION%',
        tagMessage: 'Version %VERSION%',
        push: false,
        pushTo: 'upstream',
        gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d' // options to use with '$ git describe'
      }
    }
  });

  grunt.loadNpmTasks('grunt-bump');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task.
  grunt.registerTask('default', ['jshint', 'connect', 'qunit', 'clean', 'concat', 'uglify']);
  grunt.registerTask('minify', ['jshint', 'clean', 'concat', 'uglify', 'cssmin']);
  //grunt.registerTask('bump'); // Options for bump are grunt bump :patch :minor :major :build :git
  grunt.registerTask('server', ['connect', 'watch']);
  grunt.registerTask('test', ['jshint', 'connect', 'qunit']);

  grunt.registerTask('launch', ['clean','concat','uglify','cssmin']);
};
