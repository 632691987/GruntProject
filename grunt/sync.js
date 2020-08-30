
module.exports = {
  javaScript: {
    files: [
      // Sync hybris accelerator JavaScript implementation
      {
        cwd: '<%= paths.source %>' + 'responsive/lib/',
        src: '**/*.js',
        dest: '<%= paths.destination %>' + 'responsive/common/js/ybase/'
      },
      // Sync ecx JavaScript implementation
      {
        cwd: '<%= paths.source %>' + 'responsive/javascripts/',
        src: '**/*.js',
        dest: '<%= paths.destination %>' + 'responsive/common/js/' + '<%= themeName %>/'
      }
    ],
    pretend: false,
    verbose: true,
    updateAndDelete: true,
    failOnError: true,
    compareUsing: "md5"
  },
  // Common JavaScript files Sync Task
  addonJavaScript: {
    files: [
      {
        cwd: '<%= paths.commonJavaScriptSource %>',
        src: '**/*.js',
        dest: '<%= paths.commonJavaScriptDestination %>'
      }
    ],
    pretend: false,
    verbose: true,
    updateAndDelete: true,
    failOnError: true,
    compareUsing: "md5"
  }
};
