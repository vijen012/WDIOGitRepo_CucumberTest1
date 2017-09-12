/**
 * Created by vmalav on 6/11/2017.
 */
var gulp = require('gulp');
const Launcher = require('webdriverio/build/lib/launcher');
const path = require('path');

gulp.task('APITest', function() {
    const wdio = new Launcher(path.join(__dirname, './src/conf/wdio.conf.js'));
    return wdio.run(function(code){
        process.exit(code);
    }, function(error) {
        console.error('Launcher failed to start the test', error.stacktrace);
        process.exit(1);
    });
});


gulp.task('UITest', function() {
    const wdio = new Launcher(path.join(__dirname, './src/conf/wdio.web.conf.js'));
    return wdio.run(function(code){
        process.exit(code);
    }, function(error) {
        console.error('Launcher failed to start the test', error.stacktrace);
        process.exit(1);
    });
});