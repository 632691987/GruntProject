module.exports = function(grunt) {

    // Load Plugins
    require('load-grunt-tasks')(grunt);

    var options = {
        config: {
            src: 'grunt/*.js'
        },
        paths: {
            source: 'src/',
            destination: 'build/',
            commonJavaScriptSource: 'web/webroot/_ui/addons/mondicommonstorefrontaddon/responsive/shared/javascript/',
            commonJavaScriptDestination: '../mondicommonstorefrontaddon/acceleratoraddon/web/webroot/_ui/responsive/shared/javascript/',
        },
        themeName: 'coffee'
    };

    var configs = require('load-grunt-configs')(grunt, options);
    grunt.initConfig(configs);


    // Grunt Default
    grunt.registerTask('default', ['lessToSass', 'webfont', 'sass', 'less', 'concat:css', 'rtlcss', 'sync:javaScript', 'string-replace:dev', 'scsslint', 'jshint', 'watch']);

    // Grunt Build
    grunt.registerTask('build', ['string-replace:prod', 'cssmin', 'webfont', 'concat', 'autoprefixer', 'uglify']);

    grunt.registerTask('task1', ['lessToSass']);
};