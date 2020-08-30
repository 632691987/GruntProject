
module.exports = {
  sassFiles: {
    // Watch Stylesheet (mondi) files
    files: ['<%= paths.source %>' + '/**/sass/**/*.scss'],
    tasks: ['sass', 'concat:css', 'rtlcss', 'scsslint']
  },
  lessFiles: {
    // Watch Stylesheet LESS (accelerator) files
    files: ['<%= paths.source %>' + '/**/less/**/*.less'],
    tasks: ['less', 'concat:css', 'rtlcss']
  },
  javaScriptFiles: {
    // Watch JavaScript files
    files: ['<%= paths.source %>' + '/**/javascripts/**/*.js', '<%= paths.source %>' + '/**/lib/**/*.js'],
    tasks: ['sync:javaScript', 'jshint']
  },
  addonJavaScriptFiles: {
    files: ['<%= paths.commonJavaScriptSource %>' + '**/*.js'],
    tasks: ['sync:addonJavaScript']
  },
  svgIcons: {
    // Watch .svg files for building font-icons
    files: ['<%= paths.source %>' + '/**/responsive/icons/svg/**/*.svg'],
    tasks: ['webfont']
  }
};
