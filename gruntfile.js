module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON ("package.json"),
        less: {
            dist: {
                files: {
                    "dist/css/style.css" : "less/style.less"
                }
            }
        },
        cssmin: {
            minify: {
                src: "dist/css/style.css",
                dest: "dist/css/minified/style.min.css"
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        "dist/css/minified/style.min.css",
                        "*.html"
                    ]
                },
                options: {
                    watchTask: true,
                    server: "./"
                }
            }
        },
        watch: {
            css: {
                files: "less/style.less",
                tasks: ["less", "cssmin"]
            }
        }    
    });
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-cssmin")
    grunt.registerTask("default", ["watch"]);
}