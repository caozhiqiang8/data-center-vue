const {defineConfig} = require('@vue/cli-service')

var webpack = require('webpack')

module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    devServer: {
        client: {
            overlay: {
                runtimeErrors: false,
            },
        },
        //跨域
        proxy:'http://192.168.10.122:8080/'
    }
})
