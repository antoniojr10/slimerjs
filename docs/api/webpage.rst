.. index:: webpage

=======
webpage
=======

This module provide a ``create()`` function that returns a webpage object. This
object allows to load and manipulate a web page.


.. code-block:: javascript

   var page = require("webpage").create();

In the ``page`` variable, you have then an object with many properties and
methods. See below.

Note: almost properties and methods are implemented, but some are not documented yet.
Please help us to document them ;-).


Webpage object
==============

Properties list:

:ref:`clipRect <webpage-clipRect>` :ref:`canGoBack <webpage-canGoBack>` :ref:`canGoForward <webpage-canGoForward>`
:ref:`content <webpage-content>` :ref:`cookies <webpage-cookies>` :ref:`customHeaders <webpage-customHeaders>`
:ref:`event <webpage-event>` :ref:`focusedFrameName <webpage-focusedFrameName>` :ref:`frameContent <webpage-frameContent>`
:ref:`frameName <webpage-frameName>` :ref:`framePlainText <webpage-framePlainText>` :ref:`frameTitle <webpage-frameTitle>`
:ref:`frameUrl <webpage-frameUrl>` :ref:`framesCount <webpage-framesCount>` :ref:`framesName <webpage-framesName>`
:ref:`libraryPath <webpage-libraryPath>` :ref:`navigationLocked <webpage-navigationLocked>`
:ref:`offlineStoragePath <webpage-offlineStoragePath>` :ref:`offlineStorageQuota <webpage-offlineStorageQuota>`
:ref:`ownsPages <webpage-ownsPages>` :ref:`pages <webpage-pages>` :ref:`pagesWindowName <webpage-pagesWindowName>`
:ref:`paperSize <webpage-paperSize>` :ref:`plainText <webpage-plainText>` :ref:`scrollPosition <webpage-scrollPosition>`
:ref:`settings <webpage-settings>` :ref:`title <webpage-title>` :ref:`url <webpage-url>`
:ref:`viewportSize <webpage-viewportSize>` :ref:`windowName <webpage-windowName>` :ref:`zoomFactor <webpage-zoomFactor>`

Functions list:

:ref:`addCookie() <webpage-addCookie>` :ref:`childFramesCount() <webpage-childFramesCount>` :ref:`childFramesName() <webpage-childFramesName>` 
:ref:`clearCookies() <webpage-clearCookies>` :ref:`close() <webpage-close>` :ref:`currentFrameName() <webpage-currentFrameName>` 
:ref:`deleteCookie() <webpage-deleteCookie>` :ref:`evaluateJavaScript() <webpage-evaluateJavaScript>` :ref:`evaluate() <webpage-evaluate>` 
:ref:`evaluateAsync() <webpage-evaluateAsync>` :ref:`getPage() <webpage-getPage>` :ref:`go() <webpage-go>` 
:ref:`goBack() <webpage-goBack>` :ref:`goForward() <webpage-goForward>` :ref:`includeJs() <webpage-includeJs>` 
:ref:`injectJs() <webpage-injectJs>` :ref:`open() <webpage-open>` :ref:`openUrl() <webpage-openUrl>` 
:ref:`release() <webpage-release>` :ref:`reload() <webpage-reload>` :ref:`render() <webpage-render>` 
:ref:`renderBase64() <webpage-renderBase64>` :ref:`sendEvent() <webpage-sendEvent>` 
:ref:`setContent() <webpage-setContent>` :ref:`stop() <webpage-stop>` :ref:`switchToFocusedFrame() <webpage-switchToFocusedFrame>` 
:ref:`switchToFrame() <webpage-switchToFrame>` :ref:`switchToChildFrame() <webpage-switchToChildFrame>` 
:ref:`switchToMainFrame() <webpage-switchToMainFrame>`
:ref:`switchToParentFrame() <webpage-switchToParentFrame>` :ref:`uploadFile() <webpage-uploadFile>`

Callbacks list:

:ref:`onAlert <webpage-onAlert>` :ref:`onAuthPrompt <webpage-onAuthPrompt>`  :ref:`onCallback <webpage-onCallback>` :ref:`onClosing <webpage-onClosing>` 
:ref:`onConfirm <webpage-onConfirm>` :ref:`onConsoleMessage <webpage-onConsoleMessage>` :ref:`onError <webpage-onError>` 
:ref:`onFilePicker <webpage-onFilePicker>` :ref:`onInitialized <webpage-onInitialized>` :ref:`onLoadFinished <webpage-onLoadFinished>` 
:ref:`onLoadStarted <webpage-onLoadStarted>` :ref:`onNavigationRequested <webpage-onNavigationRequested>` :ref:`onPageCreated <webpage-onPageCreated>` 
:ref:`onPrompt <webpage-onPrompt>` :ref:`onResourceRequested <webpage-onResourceRequested>` :ref:`onResourceReceived <webpage-onResourceReceived>` 
:ref:`onUrlChanged <webpage-onUrlChanged>`

Internal methods to trigger callbacks:

:ref:`closing() <webpage-closing>` :ref:`initialized() <webpage-initialized>` 
:ref:`javaScriptAlertSent() <webpage-javaScriptAlertSent>` :ref:`javaScriptConsoleMessageSent() <webpage-javaScriptConsoleMessageSent>`
:ref:`loadFinished() <webpage-loadFinished>` 
:ref:`loadStarted() <webpage-loadStarted>` :ref:`navigationRequested() <webpage-navigationRequested>` :ref:`rawPageCreated() <webpage-rawPageCreated>` 
:ref:`resourceReceived() <webpage-resourceReceived>` :ref:`resourceRequested() <webpage-resourceRequested>` :ref:`urlChanged() <webpage-urlChanged>` 



.. _webpage-clipRect:

clipRect
-----------------------------------------

This is an object indicating the coordinates of an area to capture, used
by the ``render()`` method. It contains four properties: ``top``, ``left``, ``width``, ``height``.

To modify it, set an entire object on this property.

.. code-block:: javascript

    page.clipRect = { top: 14, left: 3, width: 400, height: 300 };

.. _webpage-canGoBack:

canGoBack
-----------------------------------------

Indicates if there is a previous page in the navigation history. This is a boolean.
Read-only.

.. _webpage-canGoForward:

canGoForward
-----------------------------------------

Indicates if there is a next page in the navigation history. This is a boolean.
Read-only.

.. _webpage-content:

content
-----------------------------------------

This property contain the source code of the actual webpage.
You can set this property with the source code of an HTML page
to replace the content of the current web page.

.. _webpage-cookies:

cookies
-----------------------------------------


This is an array of all :doc:`Cookie objects <cookie>` stored in the current
profile, and which corresponds to the current url of the webpage.

When you set an array of Cookie to this property, cookies will be set
for the current url: their domain and path properties will be changed.

Note: modifying an object in the array won't modify the cookie. You should
retrieve the array, modify it, and then set the ``cookies`` property with this array.
Probably you would prefer to use the ``addCookie()`` method to modify a cookie.

If cookies are disabled, modifying this property does nothing.

Be careful about `the inconsistent behavior of the expiry property <cookies.html#expires>`_.

.. _webpage-customHeaders:

customHeaders
-----------------------------------------

.. index:: customHeaders

This property is an object defining additionnal HTTP headers that will be send
with each HTTP request, both for pages and resources.

Example:

.. code-block:: javascript

    webpage.customHeaders = {
        "foo": "bar"
    }


To define user agent, prefer to use ``webpage.settings.userAgent``

.. _webpage-event:

event
-----------------------------------------

This is an object (read only) that hosts some constants
to use with ``sendEvent()``.

There is a ``modifier`` property containing constants
for key modifiers:

.. code-block:: javascript

    page.event.modifier.shift
    page.event.modifier.ctrl
    page.event.modifier.alt
    page.event.modifier.meta
    page.event.modifier.keypad

There is also a ``key`` property containing constants
for key codes.


.. _webpage-focusedFrameName:

focusedFrameName
-----------------------------------------



.. _webpage-frameContent:

frameContent
-----------------------------------------

This property contain the source code of the current frame.
You can set this property with the source code of an HTML page
to replace the content of the current frame.


.. _webpage-frameName:

frameName
-----------------------------------------



.. _webpage-framePlainText:

framePlainText
-----------------------------------------



.. _webpage-frameTitle:

frameTitle
-----------------------------------------



.. _webpage-frameUrl:

frameUrl
-----------------------------------------



.. _webpage-framesCount:

framesCount
-----------------------------------------



.. _webpage-framesName:

framesName
-----------------------------------------



.. _webpage-libraryPath:

libraryPath
-----------------------------------------



.. _webpage-navigationLocked:

navigationLocked
-----------------------------------------

This is a property to lock navigation. If it is ``true``, clicking on a link in
the web page to load a new page, submitting a form etc, will not have effect.

.. _webpage-offlineStoragePath:

offlineStoragePath
-----------------------------------------

Indicates the path of the sqlite file where content of window.localStorage is stored. Read only.

Note: in PhantomJS, this is the path of a directory. The storage is different than in Gecko.
Contrary to PhantomJS, this property cannot be changed with the ``--local-storage-path`` flag
from the command line.


.. _webpage-offlineStorageQuota:

offlineStorageQuota
-----------------------------------------

Contains the maximum size of data for a page, stored in window.localStorage.
The number is in Bytes. Default is 5 242 880 (5MB).  Read only.

To change this number, use the ``--local-storage-quota`` flag in the command line.


.. _webpage-ownsPages:

ownsPages
-----------------------------------------

This boolean indicates if pages opening by the webpage (by `window.open()`)
should be children of the webpage (true) or not (false). Default is true.

When it is true, child pages appears in the `pages` property.

.. _webpage-pages:

pages
-----------------------------------------

This is the list of child pages that the page has currently opened with `window.open()`.

If a child page is closed (by `window.close()` or by `webpage.close()`),
the page is automatically removed from this list.

You should not keep a strong reference to this array since you obtain
only a copy, so in this case you won't see changes.
 
If "ownsPages" is "false", this list won't owns the child pages.


.. _webpage-pagesWindowName:

pagesWindowName
-----------------------------------------

list of window name (strings) of child pages.

The window name is the name given to `window.open()`.

The list is only from child pages that have been created when
ownsPages was true.

.. _webpage-paperSize:

paperSize
-----------------------------------------



.. _webpage-plainText:

plainText
-----------------------------------------

Contains the content of the web page as text. For html pages, you'll have
only texts of the page.

Read only.

.. _webpage-scrollPosition:

scrollPosition
-----------------------------------------

This property contains an object indicating the scrolling position. You can read or
modify it. The object contains two properties: ``top`` and ``left``

Example:

.. code-block:: javascript

    page.scrollPosition = { top: 100, left: 0 };


.. _webpage-settings:

settings
-----------------------------------------

.. index:: settings

This property allows to set some options for the load of a page.
Changing them after the load has no effect.

- ``javascriptEnabled``: ``false`` to deactivate javascript in web pages (default is ``true``)
- ``javascriptCanCloseWindows``  (not supported yet)
- ``javascriptCanOpenWindows``  (not supported yet)
- ``loadImages``: ``false`` to deactivate the loading of images (default is ``true``)
- ``localToRemoteUrlAccessEnabled``  (not supported yet)
- ``maxAuthAttempts``: indicate the maximum of attempts of HTTP authentication.
- ``password``: password to give to HTTP authentication
- ``userAgent``: string to define the user Agent in HTTP requests. By default, it is
  something like ``"Mozilla/5.0 (X11; Linux x86_64; rv:21.0) Gecko/20100101 SlimerJS/0.7"``
  (depending of the version of Firefox/XulRunner you use)
- ``userName``: username to give to HTTP authentication
- ``XSSAuditingEnabled``  (not supported yet)
- ``webSecurityEnabled``  (not supported yet)

.. code-block:: javascript

    page.settings.userAgent = "My Super Agent / 1.0"

.. _webpage-title:

title
-----------------------------------------

It allows to retrieve the title of the loaded page. (Readonly)

.. _webpage-url:

url
-----------------------------------------

This property contains the current url of the page. If nothing
is loaded yet, this is an empty string.
Read only.

.. _webpage-viewportSize:

viewportSize
-----------------------------------------



.. _webpage-windowName:

windowName
-----------------------------------------



.. _webpage-zoomFactor:

zoomFactor
-----------------------------------------



.. _webpage-addCookie:

addCookie(cookie)
-----------------------------------------

Add a cookie in the cookies storage of the current profile, for the
current url. The parameter is :doc:`a Cookie object <cookie>`.
The domain and the path of the cookie will be set to the domain
and the path of the current url.

It returns true if the cookie has been really added. If cookies are
disabled, the cookie is not added into the cookie database.

Be careful about `the inconsistent behavior of the expiry property <cookies.html#expires>`_.


.. _webpage-childFramesCount:

childFramesCount()
-----------------------------------------



.. _webpage-childFramesName:

childFramesName()
-----------------------------------------

 

.. _webpage-clearCookies:

clearCookies()
-----------------------------------------

Delete all cookies corresponding to the current url.


.. _webpage-close:

close()
-----------------------------------------

Close the web page. It means that it closes the window displaying the web page.
After the close, some methods cannot be used and you should call ``open()`` or ``openUrl()``
to be able to reuse the webpage object.


.. _webpage-currentFrameName:

currentFrameName()
-----------------------------------------

 

.. _webpage-deleteCookie:

deleteCookie(cookiename)
-----------------------------------------

It deletes all cookies that have the given name and corresponding
to the current url.

It returns true if some cookies have been deleted.
It works only if cookies are enabled.

.. _webpage-evaluateJavaScript:

evaluateJavaScript(src)
-----------------------------------------

Evaluate the current javascript source (in a string), into the context of the
loaded web page. It returns the result of the evaluation.

.. _webpage-evaluate:

evaluate(func, arg1, arg2...)
-----------------------------------------

It executes the given function in the context of the loaded web page. It means
that the code of the function cannot access to objects and variables of your script.
For example, in this function, the ``document`` and ``window`` objects are belongs
to the loaded page, not to your script. In other terms, you cannot use closures.

.. code-block:: javascript

    var page = require('webpage').create();
    page.open("http://example.com", function (status) {
        var someContent = page.evaluate(function () {
            return document.querySelector("#aDiv").textContent;
        });
        console.log('The introduction: ' + someContent);
        slimer.exit()
    });

You can give additionnal parameters to ``evaluate()``. This will be the parameters
for the function. For example, here the function will receive "#aDiv" as parameter:

.. code-block:: javascript

    var someContent = page.evaluate(function (selector) {
        return document.querySelector(selector).textContent;
    }, "#aDiv");

Parameters can only some basic javascript objects or literal values. You cannot pass
some objects like DOM elements. In other terms, you cannot pass parameters on which you
cannot call a ``toString()`` or you cannot serialize as a JSON value.

``evaluate()`` returns the value returned by the function.

.. _webpage-evaluateAsync:

evaluateAsync(func)
-----------------------------------------

It is equivalent to ``evaluate()``, but with some differences:

- the function is executed asynchronously. It means that the call of ``evaluateAsync()``
  does not wait after the execution of the given function to return. It does not
  block your current script.
- you cannot return values inside the given function
- you cannot pass parameters.


.. _webpage-getPage:

getPage(windowName)
-----------------------------------------

This methods returns the child page that matches the given "window.name".

Only children opened when ownsPage was true are checked.

.. _webpage-go:

go(indexIncrement)
-----------------------------------------

This method allows to navigate into the navigation history.
The parameter, an integer, indicates how far to move forward or backward in the navigation history.

.. code-block:: javascript

    webpage.go(-3);
    webpage.go(-1); // equivalent to webpage.goBack()
    webpage.go(1);  // equivalent to webpage.goForward()
    webpage.go(4);

.. _webpage-goBack:

goBack()
-----------------------------------------

Displays the previous page in the navigation history.

.. _webpage-goForward:

goForward()
-----------------------------------------

Displays the next page in the navigation history.


.. _webpage-includeJs:

includeJs(url, callback)
-----------------------------------------

It loads into the current web page, the javascript file stored
at the given url.

When the load is done, the given callback is called.

.. _webpage-injectJs:

injectJs(filename)
-----------------------------------------

It loads and executes the given javascript file into
the context of the current script. So the loaded script
has access to all variable of the current module.

If the given filename is a relative path, SlimerJS tries
to resolve the full path from the current working directory
(that is the directory from which SlimerJS has been launched).
If the file is not found, SlimerJS tries to resolve with
the libraryPath.

Note: there is a limitation in SlimerJS. If the loaded script
wants to modify a variable of the current script/module, it should
call ``window.myvariable = '..'`` instead of ``myvariable = '..'``.

.. _webpage-open:

open(url...)
-----------------------------------------

.. index:: open, promise

This method allows to open a page into a virtual browser.

Since this operation is asynchronous, you cannot do something on
the page after the call of ``open()``. You should provide a callback
or you should use the returned promise (not compatible with PhantomJS),
to do something on the loaded page. The callback or the promise receives
a string "success" if the loading has been succeded.

Example with a callback function:

.. code-block:: javascript

   page.open("http://slimerjs.org", function(status){
        if (status == "success") {
            console.log("The title of the page is: "+ page.title);
        }
        else {
            console.log("Sorry, the page is not loaded");
        }
   })

Example with the returned promise (not compatible with PhantomJS):

.. code-block:: javascript

   page.open("http://slimerjs.org")
       .then(function(status){
            if (status == "success") {
                console.log("The title of the page is: "+ page.title);
            }
            else {
                console.log("Sorry, the page is not loaded");
            }
       })


To load two pages, one after an other, here is how to do:

.. code-block:: javascript

   page.open("http://example.com/page1", function(status){
        // do something on the page...
        
        page.open("http://example.com/page2", function(status){
            // do something on the page...
        })
   })

With the promise, it's better in term of code (not compatible with PhantomJS):

.. code-block:: javascript

   page.open("http://example.com/page1")
       .then(function(status){
           // do something on the page...
           
           return page.open("http://example.com/page2")
       })
       .then(function(status){
           // do something on the page...
           
           // etc...
           return page.open("http://example.com/page3")
       })

**Other arguments:**

The ``open()`` method accepts several arguments:

- ``open(url)``
- ``open(url, callback)``
- ``open(url, httpConf)``
- ``open(url, httpConf, callback)``
- ``open(url, operation, data)``
- ``open(url, operation, data, callback)``
- ``open(url, operation, data, headers, callback)``

Remember that in all cases, the method returns a promise.

``httpConf`` is an object. See :ref:`webpage.openUrl <webpage-openUrl>` below.
``operation``, ``data`` and ``headers`` should have same type of values
as you can find in ``httpConf``.

Note that ``open()`` call in fact ``openUrl()``.


.. _webpage-openUrl:

openUrl(url, httpConf, settings, callback)
-------------------------------------------

.. index:: openUrl, promise

Like ``open()``, it loads a webpage. The only difference is the number
and the type of arguments.
 
``httpConf`` is an object with these properties:

- ``httpConf.operation``: the http method. Allowed values: ``'get'`` or ``'post'`` (other methods are not supported in SlimerJS)
- ``httpConf.data``: the body. Useful only for ``'post'`` method
- ``httpConf.headers``: the headers to send. An object like :ref:`webpage.customHeaders <webpage-customHeaders>`, but it
  doesn't replace ``webpage.customHeaders``. It allows you to specify additionnal headers
  for this specific load.

``httpConf`` is optional and you can give ``null`` instead of an object.
The default method will be ``'get'``, without data and without specific headers.s

``settings`` is an object like :ref:`webpage.settings <webpage-settings>`. In
fact the given value changes ``webpage.settings``. You can indicate ``null`` if
you don't want to set new settings.

``callback`` is a callback function, called when the page is loaded.

``openUrl()`` returns a promise.

.. _webpage-release:

release()
-----------------------------------------

Similar to :ref:`close() <webpage-close>`.
This method is deprecated in PhantomJS.  ``webpage.close()`` should
be used instead.

.. _webpage-reload:

reload()
-----------------------------------------

Reload the current web page.

.. _webpage-render:

render(filename, options)
-----------------------------------------

This method takes a screenshot of the web page and stores it into the given file.
You can limit the area to capture by setting the ``clipRect`` property.

By default, it determines the format of the file by inspecting its extension.
It supports only jpg and png format (PDF and gif probably in future version).

The second parameter is an object containing options. Here are its possible properties:

- ``format``: indicate the file format (ignore then the file extension). possible
  values: ``jpg``, ``png``, ``jpeg``.
- ``quality``: the compression quality. A number between 0 and 1.
- ``ratio``: (SlimerJS only), a number between 0 and 1, indicating the "zoom level" of the capture.
- ``onlyViewport``: (SlimerJS only), set to true if you only want to take a screenshot of
  the current viewport. By default, it is false, and screenshot has the size of the content,
  except when webpage.clipRect is set.
 
.. _webpage-renderBase64:

renderBase64(format)
-----------------------------------------

This method takes a screenshot of the web page and returns it as a string containing the
image in base64. The format indicates the format of the image: ``jpg``, ``png``, ``jpeg``.

You can limit the area to capture by setting the ``clipRect`` property.

Instead of giving the format, you can give an object containing options (SlimerJS only).
See the ``render()`` function.

.. _webpage-sendEvent:

sendEvent(eventType, arg1, arg2, button, modifier)
---------------------------------------------------

It sends hardware-like events to the web page, through the
browser window, like a user does when he types on a keyboard or
uses his mouse. Then the browser engine (Gecko) translates these events
into DOM events into the web page.

So this method does not synthetize directly DOM events. This is why
you cannot indicate a DOM element as target.

With this method, you can generate keyboard events and mouse events.
Arguments depends which type of event you want to generate.

The event type is given as the first argument.

**Mouse events**

You should indicate 'mouseup', 'mousedown', 'mousemove', 'doubleclick'
or 'click' as event type. 

Arguments arg1 and arg2 should represent the mouse position on the window.
arg1 is the horizontal coordinate (x) and arg2 is the vertical coordinate (y).
These arguments are optional. In this case, give null as value.

The fourth argument is the pressed button. Indicates 'left', 'middle' or 'right'.

The "modifier" argument is a combination of keyboard modifiers, i.e., a code
indicating if a key like 'ctrl' or 'alt' is pressed. Codes are available
on the ``webpage.event.modifier`` object:

- ``webpage.event.modifier.ctrl``
- ``webpage.event.modifier.shift``
- ``webpage.event.modifier.alt``
- ``webpage.event.modifier.meta``
- ``webpage.event.modifier.keypad``

If no modifiers key, just use 0 as value.

.. code-block:: javascript

    // we send a click with ctrl+shift and the left button
    var mod = page.event.modifier.ctrl | page.event.modifier.shift;
    page.sendEvent('click', null, null, 'left', mod);

- with 'mouseup', the web page will receive a mouseup and a click DOM event.
- with 'mousedown', the web page will receive a mousedown and a click DOM event.
- with 'mousemove', the web page will receive a simple mousemove DOM event.
- with 'doubleclick' and 'click', the web page will receive a mousedown
  and a mouseup DOM events, followed by a click DOM event. And
  followed by a dblclick DOM event in the case of 'doubleclick'.

The targeted DOM element is the DOM element under the indicated coordinates.

Note that if coordinates are outside the viewport of the window,
the webpage will not receives DOM events.

**Keyboard events**

You should indicate 'keyup', 'keypress' or 'keydown' as event type.

The second parameter is a key code (from webpage.event.key), or a string
of one or more characters.

You can also indicate a modifier key as fifth argument. See above for mouse events.

Third and fourth argument are not taken account for keyboard events.
Just give null for them.

.. code-block:: javascript

    page.sendEvent('keypress', page.event.key.B);
    page.sendEvent('keypress', "C");
    page.sendEvent('keypress', "abc");
    
    var mod = page.event.modifier.ctrl | page.event.modifier.shift;
    page.sendEvent('keypress', page.event.key.A, null, null, mod);

When you give a string as a second parameter, if its length is more
than one character:

- for keyup and keydown, only the first character is used
- for keypress, it will generates a keydown+keypress+keyup DOM events
  for each characters.

The targeted DOM element is the DOM element that has the focus.

.. _webpage-setContent:

setContent(content, url)
-----------------------------------------

This method allows to replace the content of the current page
with the given HTML source code. The URL indicates the address
assigned to this new content.


.. _webpage-stop:

stop()
-----------------------------------------

It stops the loading of the page.

.. _webpage-switchToFocusedFrame:

switchToFocusedFrame()
-----------------------------------------

 

.. _webpage-switchToFrame:

switchToFrame()
-----------------------------------------



.. _webpage-switchToChildFrame:

switchToChildFrame()
-----------------------------------------


.. _webpage-switchToMainFrame:

switchToMainFrame()
-----------------------------------------



.. _webpage-switchToParentFrame:

switchToParentFrame()
-----------------------------------------



.. _webpage-uploadFile:

uploadFile(selector, filename)
-----------------------------------------

A form may content an ``<input type="file">`` element. Of course, because
SlimerJs is a scriptable browser, you cannot manipulate the file picker
opened when you click on this element. ``uploadFile()`` allows you to set the
value of such elements.

Arguments are the CSS selector of the input element, and the full path of the file.
The file must exist. You can also indicate an array of path, if the input element
accepts several files.

Note that a virtual file picker is opened when calling ``uploadFile()``, and
so the ``onFilePicker`` callback is called. If this callback exists and
returns a filename, the filename given to ``uploadFile()`` is ignored.

.. _webpage-onAlert:

onAlert
-----------------------------------------



.. _webpage-onAuthPrompt:

onAuthPrompt
-----------------------------------------

This is a callback called when a webpage needs an HTTP authentication.
(SlimerJS only: not available in PhantomJS).

The callback accepts four arguments:

- ``type``: its value is ``'http'``
- ``url``: the url of the page that needs authentication
- ``realm``: the message indicating the realm
- ``credentials``: an object containing two properties, ``username`` and
  ``password``. You should modify these properties to indicate the username
  and the password.

The callback should return ``true`` if it accepts to authenticate, else
``false``.

To know more, see  :doc:`doc about http authentication with SlimerJS <../manual/http-authentication>`.

.. _webpage-onCallback:

onCallback
-----------------------------------------



.. _webpage-onClosing:

onClosing
-----------------------------------------

 

.. _webpage-onConfirm:

onConfirm
-----------------------------------------



.. _webpage-onConsoleMessage:

onConsoleMessage
-----------------------------------------



.. _webpage-onError:

onError
-----------------------------------------

 

.. _webpage-onFilePicker:

onFilePicker
-----------------------------------------

This callback is called when the browser needs to open a file picker.
This is the case when a click is made on an ``<input type="file">`` element.

The callback receives the previous selected file, and should return
the path of the new selected file. If the target element accepts
several files, you can return an array of file path.

.. _webpage-onInitialized:

onInitialized
-----------------------------------------

This should be a function that is called when the loading of the page is initialized,
So before the content is loaded (before onLoadStarted).
It receives no arguments.

Note: It seems that it is not called at the same opening step as PhantomJS. In PhantomJS, its
implementation is a bit obscure. In PhantomJS, sometimes it is called twice, sometimes never,
and sometime only one time. We don't know why. We will try to match the same behavior
in future versions. For the moment, in SlimerJS, it is called twice: one time when the
browser is ready to load the page (webpage.url gives nothing), and one time when the content
of the page is loaded (webpage.url is set but resources are not loaded yet).

.. _webpage-onLoadFinished:

onLoadFinished
-----------------------------------------

This callback is called when the loading of the page is finished (including its resources
like images etc). It is called also after each the loading of a frame is finished.

It receives a string as argument. Its value is `"success"` if the loading is a success
else it receives `"fail"` if a network error occured.

The loading is considered as a success when a correct HTTP response is received, with a
status code etc. It means that it receives `"success"` even in case of a 404 http error for
example.


.. code-block:: javascript

    page.onLoadFinished = function(status) {
        console.log('Status: ' + status);
        // Do other things here...
    };

In SlimerJS, you can receive additionnal arguments (that you don't have in PhantomJS):

- the URL of the content that is loaded
- a boolean indicating if it is a frame (true) or the main content (false)


.. code-block:: javascript

    page.onLoadFinished = function(status, url, isFrame) {
        console.log('Loading of '+url+' is a '+ status);
        if (!isFrame) {
           // this is the main content
        }
    };


.. _webpage-onLoadStarted:

onLoadStarted
-----------------------------------------

This callback is called when the loading of the page is starting or when an frame
inside the page is loading. In SlimerJS, it receives arguments contrary to PhantomJS:

- the URL of the content that is loaded
- a boolean indicating if it is a frame (true) or the main content (false)

.. code-block:: javascript

    page.onLoadStarted = function(url, isFrame) {
        console.log('Loading of '+url+' starts.');
        if (!isFrame) {
           // this is the main content
        }
    };

Note: It seems that it is not called at the same opening step as PhantomJS. In PhantomJS, its
implementation is a bit obscure and PhantomJS's documentation does not match the real
behavior. It seems it is called before the onInitialized call, before the
network process starts. We will try to match the same behavior in future versions.

.. _webpage-onNavigationRequested:

onNavigationRequested
-----------------------------------------

This callback is called when a navigation event happens in the page (a click on a link
or when a form is submitted, for example). It receives these arguments:

- ``url``: The target URL of this navigation event
- ``type``: indicate where the event comes from. Theorically, possible values are:
    'Undefined', 'LinkClicked', 'FormSubmitted', 'BackOrForward', 'Reload',
    'FormResubmitted', 'Other'
- ``willNavigate``: true if navigation will happen, false if it is locked (by :ref:`navigationLocked <webpage-navigationLocked>`)
- ``main``: Theorically, true if this event comes from the main frame, false if it comes from an
   iframe of some other sub-frame.

Because of lack of information in some API of XulRunner, SlimerJS cannot give you
the ``type`` and the ``main`` value. They are always respectively ``'Undefined'`` and ``true``

Example:

.. code-block:: javascript

    page.onNavigationRequested = function(url, type, willNavigate, main) {
        console.log('Navigate to: ' + url);
    }
 

.. _webpage-onPageCreated:

onPageCreated
-----------------------------------------

 

.. _webpage-onPrompt:

onPrompt
-----------------------------------------


.. _webpage-onResourceReceived:

onResourceReceived
-----------------------------------------
This callback is invoked when the browser received a part of a resource. It can
be called several times with multiple chunk of data, during the load of this resource.
A resource can be the web page itself, or any other resources like
images, frames, css files etc.

The unique parameter received by the callback is an object containing these
informations:
 
- ``id``: the number of the requested resource
- ``url``:  the url of the resource
- ``time``: a Date object
- ``headers``: the list of headers (list of objects ``{name:'', value:''}``)
- ``bodySize``: the size of the received content (may increase during multiple call of the callback)
- ``contentType``: the content type of the resource
- ``contentCharset``: the charset used for the content of the resource
- ``redirectURL``: if the request has been redirected, this is the redirected url
- ``stage``: "start", "end" or "" for intermediate chunk of data
- ``status``: the HTTP response code (200..)
- ``statusText``: the HTTP response text for the status ("Ok"...)
- ``referrer``: the referer url (slimerjs only)
- ``body``: the content, it may change during multiple call for the same request (slimerjs only).


.. code-block:: javascript

    page.onResourceReceived = function(response) {
        console.log('Response (#' + response.id + ', stage "' + response.stage + '"): ' + JSON.stringify(response));
    };




.. _webpage-onResourceRequested:

onResourceRequested
-----------------------------------------

This callback is invoked when the browser starts to load a resource.
A resource can be the web page itself, or any other resources like
images, frames, css files etc.

The callback may accept two parameters :

- ``requestData``, a metadata object containing informations about the resource
- ``networkRequest``, an object to manipulate the network request.

.. code-block:: javascript

    page.onResourceRequested = function(requestData, networkRequest) {
        console.log('Request (#' + requestData.id + '): ' + JSON.stringify(requestData));
    };

Properties of ``requestData`` are:

- ``id``: the number of the requested resource
- ``method``: the http method ("get", "post"..)
- ``url``: the url of the resource
- ``time``: a Date object
- ``headers``: the list of headers (list of objects ``{name:'', value:''}``)

The ``networkRequest`` object has two methods:

- ``abort()``: call it to cancel the request. ``onResourceReceived`` and ``onLoadFinished``
   will be called.
- ``changeUrl(url)``: abort the current request and do an immediate redirection to
   the given url.


.. _webpage-onUrlChanged:

onUrlChanged
-----------------------------------------

This callback is invoked when the main URL of the browser changes, so when a new document
will be loaded. The only argument to the callback is the new URL.

Example:

.. code-block:: javascript

    page.onUrlChanged = function(targetUrl) {
        console.log('New URL: ' + targetUrl);
    };

To retrieve the old URL, use the onLoadStarted callback.

.. _webpage-closing:

closing(page)
-----------------------------------------

Call the callback :ref:`onClosing <webpage-onClosing>`  with given
parameters, if the callback has been set.

.. _webpage-initialized:

initialized()
-----------------------------------------

Call the callback :ref:`onInitialized <webpage-onInitialized>` if it has been set.
 

.. _webpage-javaScriptAlertSent:

javaScriptAlertSent(message)
-----------------------------------------

Call the callback  :ref:`onAlert <webpage-onAlert>` with given
parameters, if the callback has been set.



.. _webpage-javaScriptConsoleMessageSent:

javaScriptConsoleMessageSent(message, lineNumber, fileName)
------------------------------------------------------------

Call the callback  :ref:`onConsoleMessage <webpage-onConsoleMessage>` with given
parameters, if the callback has been set.


.. _webpage-loadFinished:

loadFinished(status, url, isFrame)
-----------------------------------------
Call the callback :ref:`onLoadFinished <webpage-onLoadFinished>` with given
parameters, if the callback has been set.


.. _webpage-loadStarted:

loadStarted(url, isFrame)
-----------------------------------------

Call the callback :ref:`onLoadStarted <webpage-onLoadStarted>` with given
parameters, if the callback has been set.


.. _webpage-navigationRequested:

navigationRequested(url, navigationType, willNavigate, isMainFrame)
--------------------------------------------------------------------

Call the callback  :ref:`onNavigationRequested <webpage-onNavigationRequested>` with given
parameters, if the callback has been set.

.. _webpage-rawPageCreated:

rawPageCreated(page)
-----------------------------------------

Call the callback :ref:`onPageCreated <webpage-onPageCreated>` with given
parameters, if the callback has been set.


.. _webpage-resourceReceived:

resourceReceived(response)
-----------------------------------------

Call the callback :ref:`onResourceReceived <webpage-onResourceReceived>`  with given
parameters, if the callback has been set.


.. _webpage-resourceRequested:

resourceRequested(requestData, networkRequest)
----------------------------------------------

Call the callback :ref:`onResourceRequested <webpage-onResourceRequested>` with given
parameters, if the callback has been set.


.. _webpage-urlChanged:

urlChanged(url)
-----------------------------------------

Call the callback :ref:`onUrlChanged <webpage-onUrlChanged>` with given
parameters, if the callback has been set.

 



