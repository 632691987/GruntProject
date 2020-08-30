module.exports = {
  allFiles: [
    '<%= paths.source %>' + 'responsive/themes/' + '<%= themeName %>' + '/sass/**/*.scss'
  ],
  options: {
    config: '.scss-lint.yml',
    colorizeOutput: true,
    maxBuffer: 300 * 2048
  }
};