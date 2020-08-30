
module.exports = {
  build: {
    files: {
      'web/webroot/_ui/responsive/common/js/app.min.js': ['<%= paths.destination %>' + 'responsive/common/js/app.js'],
      'web/webroot/_ui/responsive/common/js/app-serviceportal.min.js': ['<%= paths.destination %>' + 'responsive/common/js/app-serviceportal.js']
    }
  }
};
