
// Transform main css file to RTL (right to left) version of it

module.exports = {
  reverseCss:{
    options: {
      opts: {
        // will remove comments for RTL stuff
        clean: true,
        // will activate stringMap
        autoRename: false,
        stringMap: [
          {
            name: "prev-next",
            search:   ["prev", "Prev", "PREV"],
            replace:  ["next", "Next", "NEXT"],
            options: {
              ignoreCase: false
            }
          }
        ]
      }
    },
    src: ['<%= paths.destination %>' + 'responsive/theme-' + '<%= themeName %>' + '/css/main.css'],
    dest: '<%= paths.destination %>' + 'responsive/theme-' + '<%= themeName %>' + '/css/main-rtl.css'
  }
};
