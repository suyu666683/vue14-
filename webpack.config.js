//const是常量
const path = require('path');
const HtmlWP = require('html-webpack-plugin');
//对外暴露一个配置对象
module.exports = {
    //配置打包入口
    entry: path.resolve(__dirname, './src/main.js'),
    //配置输出
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },

    // 插件配置
    plugins: [
        new HtmlWP({
            template: './src/index.html',         // 源代码文件名
            filename: 'index.html',               // 处理后的文件名
        }),
    ],
    module: {
        rules: [
            //添加css处理模块,css-loder的作用是打包css,style-loader的作用是执行css
            {
                test: /\.css$/,    //配置要打包的文件类型
                use: ['style-loader', 'css-loader'],//执行, 打包
            },
            //添加less模块的处理
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader']
            },
            //添加html与tpl 模块的处理
            {
                test: /\.(html|tpl)$/,
                use: ['html-loader']
            },
            //添加静态资源的打包处理
            {
                test: /\.(png|jpg|gif|jpeg|svg)$/,
                use: ['url-loader']
                // options: {limit: 11192, name: '[name]_[hash:8].[ext]'} // 小于8kb的文件转为base64, 文件名称使用6位hash
            },
            //添加转换js语法
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/  // 注意绝对路径
            },
            //Vue 文件的解析

            {
                // test: /\.vue$/,
                // use: ['vue-loader']
                test: /\.vue$/,
                use: ['vue-loader']
            }


        ]
    },

    devServer: {
        open: true,         // 服务启动后自动打开浏览器
        port: 8020,         // 服务端口
        contentBase: 'dist' // 开启服务的目录
    }


};

