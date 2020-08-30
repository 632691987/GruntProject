
module.exports = {
  options: {
    shorthandCompacting: false,
    roundingPrecision: -1,
    keepSpecialComments: 0
  },
  target: {
    files: [{
      expand: true,
      cwd: '<%= paths.destination %>' + 'responsive/theme-' + '<%= themeName %>/css',
      src: ['*.css', '!*.min.css'],
      dest: '<%= paths.destination %>' + 'responsive/theme-' + '<%= themeName %>/css',
      ext: '.min.css'
    }]
  }
};
