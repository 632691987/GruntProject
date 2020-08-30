
module.exports = {
  dist: {
    options: {
      browsers: ['last 2 versions']
    },
    files: [{
      expand: true,
      cwd: '<%= paths.destination %>' + 'responsive/theme-' + '<%= themeName %>/css',
      src: '*.min.css',
      dest: '<%= paths.destination %>' + 'responsive/theme-' + '<%= themeName %>/css',
      ext: '.min.css'
    }]
  }
};
