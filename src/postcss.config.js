module.exports = {
    plugins: {
        "autoprefixer": true,
        "postcss-normalize": true,
        "postcss-each": true,
        "postcss-mixins": {
            "mixinsDir": "src/Static/Styles/Mixins"
        },
        "postcss-custom-media": {
            "preserve": false,
            "importFrom": "src/Static/Styles/media.css"
        },
        "postcss-custom-properties": {
            "preserve": false,
            "importFrom": "src/Static/Styles/variables.css",
        },
        "postcss-color-function" : true,
        "postcss-inline-svg": {
            "path": "src/Static/Images/"
        },
        "postcss-nesting": true,
        "lost": true,
        "cssnano": {
            preset: ['default', {
                svgo: {
                    plugins: [
                        {removeAttrs: {attrs: 'path:(stroke|fill|fill-rule)'}}
                    ],
                },
            }],
        }
    }
}
