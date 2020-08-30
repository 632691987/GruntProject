
module.exports = {
  options: {
    sourceMap: true
  },
  build: {
    files: [{
      expand: true,
      cwd: '<%= paths.source %>',
      src: '**/themes/**/sass/**.scss',
      dest: '<%= paths.destination %>',
      ext: '.css',
      rename: function (dest, src) {
        var nsrc = src.replace(new RegExp("/themes/(.*)/sass"), "/theme-$1/css");
        return dest + nsrc;
      }
    }]
  }
};
