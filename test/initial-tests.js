/*

this is a simple test file.
Since we cannot load external file yet, tests are very very basic
*/
console.log('Initial tests');

function assertExists(arg, title) {
    if (arg) {
        console.log(title+"\tOK");
    }
    else
        console.log(title+"\t\t-----> FAIL!!!");
}

function assertEquals(expected, result, title) {
    if (expected == result) {
        console.log(title+"\tOK");
    }
    else{
        console.log(title+"\t\t-----> FAIL!!! given result: "+result+"");
    }
}
function assertNotEquals(expected, result, title) {
    if (expected != result) {
        console.log(title+"\tOK");
    }
    else{
        console.log(title+"\t\t-----> FAIL!!! given result: "+result);
    }
}

assertExists(window, "has window object? ");
assertExists(document, "has document object? ");
assertExists(window.document, "has window.document object? ");
assertExists(console, "has console object? ");
assertExists(alert, "has alert object? ");
assertExists(confirm, "has alert object? ");
console.log('Message console should be "log ok": ');
console.log('log ok');

assertExists(phantom, "has phantom object? ");

if ("slimer" in this) {
    assertExists(slimer, "has slimer object? ");
    assertExists(slimer.version, "has slimer.version object? ");
    assertEquals("0", slimer.version.major, "slimer has the good major version");
    assertEquals("0", slimer.version.minor, "slimer has the good minor version");
    assertEquals("3", slimer.version.patch, "slimer has the good patch version");
}
else
    console.warn("==> No slimer object!")
assertEquals("1", phantom.version.major, "phantom has the good major version");
assertEquals("7", phantom.version.minor, "phantom has the good minor version");
assertEquals("0", phantom.version.patch, "phantom has the good patch version");


var ex = require('./requiredexample');
assertExists(ex, "is 'ex' defined? ");
assertEquals("foo", ex.myExample, "value of ex.myExample");
assertEquals(5, ex.myCalcFunc(2), "value of ex.myCalcFunc(2)");

var m = require('./a/b');
assertEquals("Laurent", m.identity.firstName, "value of m.identity.firstName");

var fs = require("fs");

var system = require("system");

console.log("os.architecture="+system.os.architecture);
console.log("os.name="+system.os.name);
console.log("os.version="+system.os.version);

console.log("\n------ check yourself if following values are ok")

console.log("--- Environment variable:")
console.log("  HOME="+system.env['HOME']);
console.log("  LOGNAME="+system.env['LOGNAME']);

console.log("--- Command line arguments:")
system.args.forEach(function(arg, i){
    console.log("   "+i+": "+arg);
});

console.log('\n------ test webserver');

var webserver = require("webserver").create();

var service = webserver.listen(8082, function(request, response) {
    response.statusCode = 200;
    response.write('<html><head><title>hello world</title></head><body>Hello!</body></html>');
    response.close();
});


console.log('\n------ tests on webpage:');
var webpage = require("webpage").create();
var url = "http://127.0.0.1:8082/";

setTimeout(function(){ // wait after the webserver init process

    webpage.open(url, function(success){
        assertEquals("success", success, "Webpage loaded");
        assertEquals(url, webpage.url, "browser should have the right url");
        assertEquals("title: hello world", webpage.evaluate(function(prefix){
                        return prefix+document.title;
                    }, "title: "), "retrieve title page");

        webpage.close();
        webserver.close();
        console.log('\n------------------- END of tests');
        slimer.exit()
    })
}, 200);