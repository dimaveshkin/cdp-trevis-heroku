var resrever = require('resrever');
//jquery first
window.$ = window.jQuery = require('jquery');
require('bootstrap');

$('#btn-hello-world').click(function () {
    console.log(resrever('Hello, world!'));
});
