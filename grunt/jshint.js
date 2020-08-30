module.exports = {
  allFiles: [
    '<%= paths.source %>' + 'responsive/javascripts/ecx/**/*.js',
    '<%= paths.source %>' + 'responsive/javascripts/netconomy/**/*.js',
  ],
  options: {
    jshintrc: '.jshintrc'
  }
};