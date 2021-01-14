/* eslint-disable import/no-commonjs */
// 获取 gulp
const gulp = require('gulp');
// 获取 uglify 模块（用于压缩 JS）
const uglify = require('gulp-uglify');

// 压缩 js 文件
// 在命令行使用 gulp script 启动此任务
gulp.task('script', function() {
  // 1\. 找到文件
  gulp.src('src/echarts-taro3-react/ec-canvas/echarts.js')
  // 2\. 压缩文件
      .pipe(uglify())
  // 3\. 另存压缩后的文件
      .pipe(gulp.dest('echarts/js')).on('end', () => {
        console.log('压缩完成')
      });
})