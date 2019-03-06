// 获取 gulp
var gulp = require('gulp');

// 获取 uglify 模块（用于压缩 JS）
var uglify = require('gulp-uglify');
var cssUglify = require('gulp-minify-css');
var imageMin = require('gulp-imagemin');
var sass = require('gulp-sass');
var refresh = require('gulp-refresh');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var nodemon = require('gulp-nodemon');

// 压缩 js 文件
// 在命令行使用 gulp script 启动此任务
gulp.task('script', function() {
    // 1. 找到文件
    gulp.src('public/javascripts/*.js')
    // 2. 压缩文件
        .pipe(uglify({ mangle: false }))
        // 3. 另存压缩后的文件
        .pipe(gulp.dest('dist/js'))
})

gulp.task('auto',function(){
    gulp.watch('public/javascripts/*.js',['script']);
    gulp.watch('public/stylesheets/*.css', ['css']);
    gulp.watch('public/images/*.*', ['image'])
})

gulp.task('css',function(){
    gulp.src('public/stylesheets/*.css')
        .pipe(cssUglify())
        .pipe(gulp.dest('dist/css'))
})

gulp.task('image',function(){
    gulp.src('public/images/*.*')
        .pipe(imageMin({progressive: true}))
        .pipe(gulp.dest('dist/images'))
})

//这个可以让express启动
gulp.task("node", function() {
    nodemon({
        script: './bin/www',
        ext: 'js html',
        env: {
            'NODE_ENV': 'development'
        }
    })
});


gulp.task('server', ["node"], function() {
    var files = [
        'views/**/*.html',
        'views/**/*.ejs',
        'views/**/*.jade',
        'public/**/*.*'
    ];

    //gulp.run(["node"]);
    browserSync.init(files, {
        proxy: 'http://localhost:3000',
        browser: 'chrome',
        notify: false,
        port: 3001 //这个是browserSync对http://localhost:3000实现的代理端口
    });

    gulp.watch(files).on("change", reload);
});

gulp.task('default',['script','image','css']
)
