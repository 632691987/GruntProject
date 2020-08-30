
module.exports = {
  default: {
    options: {
      sourceMap: true,
      sourceMapURL: 'style.css.map'
    },
    files: [{
      expand: true,
      cwd: '<%= paths.source %>',
      src: '**/themes/**/less/style.less',
      dest: '<%= paths.destination %>',
      ext: '.css',
      rename: function (dest, src) {
        var nsrc = src.replace(new RegExp("/themes/(.*)/less"), "/theme-$1/css");
        return dest + nsrc;
      }
    }]
  }
};
