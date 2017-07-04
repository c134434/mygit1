

//gulp对象
//var gulp = require("gulp");
//gulp.src("src/html/*.html") //设置要处理的文件位置
//.pipe(gulp.dest("dest/html")); //设置处理后的文件存放位置


//task() : 定义任务

//var gulp = require("gulp");
//gulp.task("default",function(){
//	console.log("default任务")
//});  
////one
//gulp.task("one", function(){
//	console.log("one-task");
//});
//	setTimeout(function(){
//		console.log("timeout");
//	}, 3000);
//})

//two
//gulp.task("two", function(){
//	console.log("two-task");
//})

//three
//gulp.task("three", function(){
//	console.log("three-task");
//})

//default任务默认执行
//第一个参数： 任务名称
//第二个参数： 当前任务所依赖的其他任务，所依赖的其他任务会先执行
//gulp.task("default", ["one", "two","three"], function(){ 
//	console.log("default-task!");
//});



//gulp.src()
//gulp.dest()
//.pipe()
//gulp.task()


//gulp-htmlmin插件的参数对象
//var obj = {
//	removeComments: true, //清除HTML注释
//	collapseWhitespace: true, //压缩HTML
//	collapseBooleanAttributes: true,//省略布尔属性的值<input checked="true"/> ==> <input checked/>
//	removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
//	removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
//	removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
//	minifyJS: true, //压缩页面JS
//	minifyCSS: true //压缩页面CSS
//}
//var gulp = require("gulp");  //gulp对象
//var htmlmin = require("gulp-htmlmin"); //导入插件
//gulp.task("htmlTask", function(){
//	gulp.src("html/*") 
//	.pipe(htmlmin(obj)) //使用插件
//	.pipe(gulp.dest("dest/html"));
//});
//gulp.task("default", ["htmlTask"]);

//var gulp = require("gulp");
//var uglify = require("gulp-uglify"); //js 压缩插件
//gulp.task("jsTask", function(){
//gulp.src("js/*") 
//.pipe(uglify())
//.pipe(gulp.dest("dest/js")); 
//});
//gulp.task("default", ["jsTask"]);
//var gulp = require("gulp");
//var minifyCss = require("gulp-clean-css");
//gulp.task("cssTask", function(){ 
//gulp.src("css/*")
//.pipe(minifyCss())
//.pipe(gulp.dest("dest/css"));   
//});
//gulp.task("default", ["cssTask"]);
//var gulp = require('gulp');
//var jsmin = require('gulp-jsmin');
//var rename = require('gulp-rename');
// 
//gulp.task('default', function () {
//  gulp.src('js/*.js')
//      .pipe(jsmin())
//      .pipe(rename({suffix: '.min'}))
//      .pipe(gulp.dest('dest/js')); 
//});  
var gulp = require('gulp');
var babel = require('gulp-babel'); //es6转es5
var uglify = require('gulp-uglify'); //js压缩插件

gulp.task('jsTask', function(){
	gulp.src('js/*')
	.pipe(babel({presets:['es2015']})) //es6转es5
	.pipe(uglify()) //js压缩
	.pipe(gulp.dest('dest/js'));
});
gulp.task('default', ['jsTask']); 