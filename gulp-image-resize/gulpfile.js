// Если редактор показывает сообщение о ошибке в данном файле, выствите совместимость с ES6.
// Внимание! В системе должен быть установлен ImageMagick.
//
var gulp = require('gulp');
var imageResize = require('gulp-image-resize');
var rename = require('gulp-rename');

gulp.task('default', ['images:resize-one-image']);

//
// Пример таска для одного конкретного изображения.
//
gulp.task('images:resize-one-image', function () {
    gulp.src('./images/one/heart.png')
        .pipe(imageResize({
            imageMagick: true,
            width: 320
        }))
        .pipe(rename(path => path.basename += '-small')
    )
    .pipe(gulp.dest('./img/one'));
});

// Пример таска для группы изображений.
var paths = {
    sprite: 'sprite/*@2x.png'
};