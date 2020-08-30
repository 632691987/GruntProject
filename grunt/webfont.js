module.exports = {
  webfont: {
    src: '<%= paths.source %>' + 'responsive/icons/svg/*.svg',
    dest: '<%= paths.destination %>' + '/responsive/icon-font',
    destCss: '<%= paths.destination %>' + '/responsive/icon-font',
    destScss: '<%= paths.source %>' + '/shared/scss',
    options: {
      font: '<%= themeName %>' + 'IconFont',
      stylesheets: ['css', 'scss'],
      normalize: true,
      htmlDemoTemplate: '<%= paths.source %>' + '/responsive/icons/templates/template.html',
      template: '<%= paths.source %>' + '/responsive/icons/templates/template.css',
      customOutputs: [
        {
          template: '<%= paths.source %>' + '/responsive/icons/templates/template.scss',
          dest: '<%= paths.source %>' + '/shared/scss/_' + '<%= themeName %>' + 'IconFont.scss'
        }
      ],
      templateOptions: {
        baseClass: '<%= themeName %>' + '-icon',
        classPrefix: 'icon-'
      }
    }
  }
};