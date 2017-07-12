/**
 * Created by vmalav on 6/11/2017.
 */
var gulp = require('gulp');
const Launcher = require('webdriverio/build/lib/launcher');
const path = require('path');
//const wdio = new Launcher(path.join(__dirname, 'wdio.conf.js'));

// gulp.task('APITest', function() {
//     return wdio.run(function(code){
//             process.exit(code);
// }, function(error) {
//         console.error('Launcher failed to start the test', error.stacktrace);
//         process.exit(1);
//
//     });
// });


gulp.task('APITest', function() {
    const wdio = new Launcher(path.join(__dirname, 'wdio.conf.js'));
    return wdio.run(function(code){
        process.exit(code);
    }, function(error) {
        console.error('Launcher failed to start the test', error.stacktrace);
        process.exit(1);
    });
});


gulp.task('UITest', function() {
    const wdio = new Launcher(path.join(__dirname, 'wdio.web.conf.js'));
    return wdio.run(function(code){
        process.exit(code);
    }, function(error) {
        console.error('Launcher failed to start the test', error.stacktrace);
        process.exit(1);
    });
});