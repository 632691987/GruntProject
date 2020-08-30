// Convert Shared LESS files to SASS (generated variables from Hybris)

module.exports = {
    convert: {
        files: [{
            expand: true,
            cwd: '/src/less/',
            src: '*.less',
            dest: '/build/scss/',
            ext: '.scss'
        }]
    }
};