
// Switching between minified file based on dev or production environment

module.exports = {
  dev: {
    files: {
      'web/webroot/WEB-INF/tags/responsive/template/javaScript.tag': 'web/webroot/WEB-INF/tags/responsive/template/javaScript.tag',
      'web/webroot/WEB-INF/tags/responsive/template/styleSheets.tag': 'web/webroot/WEB-INF/tags/responsive/template/styleSheets.tag',
      '../mondiserviceportal/web/webroot/WEB-INF/tags/template/javaScript.tag': '../mondiserviceportal/web/webroot/WEB-INF/tags/template/javaScript.tag',
      '../mondiserviceportal/web/webroot/WEB-INF/tags/template/styleSheets.tag': '../mondiserviceportal/web/webroot/WEB-INF/tags/template/styleSheets.tag',
    },
    options: {
      replacements: [{
        pattern: 'var="useMinifiedJS" value="true"',
        replacement: 'var="useMinifiedJS" value="false"'
      }, {
        pattern: 'var="useMinifiedCSS" value="true"',
        replacement: 'var="useMinifiedCSS" value="false"'
      }]
    }
  },
  prod: {
    files: {
      'web/webroot/WEB-INF/tags/responsive/template/javaScript.tag': 'web/webroot/WEB-INF/tags/responsive/template/javaScript.tag',
      'web/webroot/WEB-INF/tags/responsive/template/styleSheets.tag': 'web/webroot/WEB-INF/tags/responsive/template/styleSheets.tag',
      '../mondiserviceportal/web/webroot/WEB-INF/tags/template/javaScript.tag': '../mondiserviceportal/web/webroot/WEB-INF/tags/template/javaScript.tag',
      '../mondiserviceportal/web/webroot/WEB-INF/tags/template/styleSheets.tag': '../mondiserviceportal/web/webroot/WEB-INF/tags/template/styleSheets.tag',
    },
    options: {
      replacements: [{
        pattern: 'var="useMinifiedJS" value="false"',
        replacement: 'var="useMinifiedJS" value="true"'
      }, {
        pattern: 'var="useMinifiedCSS" value="false"',
        replacement: 'var="useMinifiedCSS" value="true"'
      }]
    }
  }
};
