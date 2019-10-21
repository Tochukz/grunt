
// The wrapper function
/*global module: false*/
module.exports = function(grunt) {
    // Project configuration
    grunt.initConfig({
        // A Task configuration
        // grunt-contrib-sass plugin for compiling of SCSS to CSS
        sass: {
            // A target
            dist: { // Note that 'dist' is just a target name, you can call it whatever you like.
                options: {
                    style: 'expanded',
                },
                files: {
                    'app/css/main.css': 'build/styles/main.scss',
                }
            }

        },
        // grunt-bower-install plugin for JavaScript and CSS injection into HTML document.
        bowerInstall: {
          dist: {
              src: ['app/**/*html'],
              dependencies: true,
              devDependencies: true,
              exclude: []
          }
        },
        // grunt-recess plugin for CSS linting and LESS compiling
        recess: {
          dist: {
              options: {
                  complie: false, // RECESS is able to compile LESS and CSS.
                  noIDs: true,
              },
              files: {
                  //'src': 'css/main.css',
                  'src': 'app/css/**/*.css', // This will match all css files in the 'css' directory and subdirectory.
              }
          }
        },
        // grunt-autoprefixer plugin to prefix CSS property with browser specify prefixes
        autoprefixer: {
            dist: {
                options: {
                    diff: true, // Generates a patch file that contains the difference between the source CSS and the CSS produces by autoprefixer.
                },
                src: 'app/css/main.css',
            }
        },
        // grunt-contrib-mincss plugin for minimization of CSS documents. 
        cssmin: {
            dist: {
                optons: {
                    report: 'gzip'
                },
                files: {
                    //output-file-path: input-file-path
                    'dist/css/main.css': 'app/css/main.css'
                }
            }
        },
        // grunt-uncss plugin for removin used CSS from styles
        uncss: {
            dist: {
                files: {
                    'app/css/main.css': ['app/index.html'],
                }
            }
        },
        // For copying file and folder from a place to another in the project directory. 
        copy: {
            dist: {
                expand: true,
                cwd: 'app/',
                src: 'index.html',
                dest: 'dist/'
            }
        },
        // prepare file to be used by usemin
        useminPrepare: {
            dist: {
                src: 'app/index.html',
                dest: 'dist'
            }
        },
        // usemin plugin includes two tasks -  useminPrepare and usemin
        usemin: {
            html: 'dist/index.html'
        },
        // grunt-rev for versioning of assets
        rev: {
            dist: {
                src: 'dist/css/main.css'
            }
        }
    });

    // These plugin provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-bower-install');
    grunt.loadNpmTasks('grunt-recess');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-rev');

    // Default task.
    grunt.registerTask('default', [
                                    'useminPrepare',
                                    'sass', 
                                    'bowerInstall', 
                                    'autoprefixer',
                                    'recess', 
                                    //'uncss', // It is throwing errors saying: Could not load script with reference to JQuery bower component files.
                                    'copy',
                                    'cssmin',
                                    'rev',
                                    'usemin'
                                ]
                       );
}

/*
The grunt-contrib-sass task wraps the Sass command and exposes some of the flags that the Sass command accepts to alter the CSS output.
For example the options.style is a flag that can have four possible values - nested(default), expanded, compact or compressed.
Run sass --help to see other options available.

The grunt-bower-install plugin is used to automate te injection of frontend JavaScript and CSS files that have been installed by Bower into ypur HTML.
To achieve this, grunt-bower-install relies on wiredep, a Node module.

The grunt-recess plugin is used for linting CSS. It can also compile LESS

The grunt-autoprefixer plugin adds vendor specific prexies to css properties where applicable.

The grunt-uncss plugin is used to remove unused CSS from your style sheet.

The grunt-usemin plugin has two tasks - useminPrepare and usemin. 
userminPrepare task is used to ready your files for the usemin task to update your HTML file with the correct referemce to the static asses, such as CSS. 
grunt-usemin generates configuration for your tasks such as concatenation and minification. 
Therefore, we can remove the cssmin configuration fron Gruntfile as usemin will auto-generate it for us.

The grunt-contrib-copy plugin is used to copy files and folder from one place to another within the project.  

The grunt-rev plugin is used for assets versioning. 
*/
