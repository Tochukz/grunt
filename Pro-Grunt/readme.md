# Pro Grunt.js  
[Source Code](https://github.com/apress/pro-grunt.js)
## Chapter 1: Introducing Grunt  
#### Open source CI environment:  
* [Travis CI](https:travis-ci.org)  
* Hudson  
* Jenkins  
#### Alternatives to Grunt:  
* __Apache Ant__ or just __Ant__. Java Based, uses xml for configuration  
* __Rake__ . Ruby's answer to _make_ files. Uses Ruby syntax.  
* __Gulp__. Defined tasks in conde instead of configuration.    
Grunt combines tasks in which the output of one task produces a temporary file that is picked up by  
the next task for processing. Gulp doesn’t produce these temporary files; files are piped between each task.  

## Chapter 2: How to Use Grunt in Your Project  
Each Grunt plug-in is a Node.js package that can be installed using npm.  

To search for a package on the terminal do    
`$ npm search keyword`  e.g   
`$ npm search grunt`  will return all packages that contain the word 'grunt'.  
You can search using tag  
`$ npm searhc gruntplugin`  
To search to grunt plugin associated with PHP for example  
`$ npm seach gruntplugin php`     

Node.js packages can be installed from  
* Registry using packag ename
* Tarball file store locally
* Tarball URL
* From a folder

Node.js will attempt to load a module from a folder, using the following rules:
* Form main property pf the package.json in the folder
* index.js files
* index.node file

Grunt package is separated into three packages:  
* grunt-cli
* grunt
* grunt-init

Installing grunt-cli  
`$ npm install -g grunt-cli`  
Checking if grunt-cli was successfully installed    
`$ grunt --version`  

Installing the grunt package in the Project  
`$ npm install grunt --save-dev`  
Running `grunt --version` will now display version for both `grunt-cli` and `grunt` package.  

Install grunt-concat plugin
`$ npm install grunt-contrib-concat --save-dev`
Install grunt-mocha-test test runner plugin   
`$ npm install grunt-mocha-test --save-dev`  
Install mocha packake  
`$ npm install mocha --save-dev`  

### Running grunt tasks and targets
Run all grunt tasks    
`$ grunt`  
Run all targets in a task called 'concat'    
`$ grunt concat`  
Run specify target called 'test' in a task called 'concat'  
`$ grunt concat:test`      

## Chapter 3: Using Grunt with HTML and CSS  
### Setup for SASS
T0 be able to install sass you will have to install Ruby and RubyGems onto your machine.  
Check if ruby is installed  
`$ ruby --version`  
RubyGems is Ruby's package manager. Each Ruby package is bundled as a gem.  
`$ gem --version`  
Install sass  
`$ gem install sass`  
Check SASS version  
`$ sass --version`  
Compiling a SCSS file to CSS  
`$ sass input.scss output.css`  
When using the __@import__ directive in Sass, the contents of the file merge into the files that import the partial.   
With CSS imports, each file remains separate, and the browser makes a separate HTTP call for each file.  

Plugins that begin with 'grunt-contrib' are plugins that are officially supported by the core Grunt team.  

Installing local grunt
`$ npm install grunt --save-dev`  

#### grunt=contrib-sass
The grunt-contrib-sass task wraps the Sass command and exposes some of the flags that the Sass command accepts to alter the CSS output.
For example the options.style is a flag that can have four possible values - nested(default), expanded, compact or compressed.
Run sass --help to see other options available.
Installing grunt-contrib-sass  
`$ npm install grunt-contrib-sass --save-dev`  

### Bower
Bower is a frontend(HTML, CSS, JavaScript) package manager. Bower packages are install via Git.  
It requires a flat dependency tree, unlike npm which does a nested dependency tree.  
Learn more about the difference between Bower and npm - [geeksprogrammings](https://geeksprogrammings.blogspot.com/2016/07/difference-between-bower-and-npm.html) , [stackoverflow](https://stackoverflow.com/questions/18641899/what-is-the-difference-between-bower-and-npm)

Installing Bower  
`$ npm install -g bower`  
Check Bower version  
`$ bower --version`  

NB: At the time of reading this book npm recommends not to use Bower for new projects but to use Yarn and Webpack or Parcel.   
[How to migrate Legacy project from Bower)](https://bower.io/blog/2017/how-to-migrate-away-from-bower/)  

Installing bower packages defined in _bower.json_ file  
`$ bower install`  

Installing a specific bower package  
`$ bower install backbone -S`  
The name of the package, backbone in this case, ,ay be replaces by the Git repository, svn repository, zip file or tar file.   

Searching for bower packages   
`$ bower search twitter-bootstrap`  

TO configure directory where bower packages should be stored (default is _bower_components_)
__.bowerrc__ file  
```
{
  "directory": "build/bower_components"
}
```
#### grunt=bower-install
The grunt-bower-install plugin is used to automate te injection of frontend JavaScript and CSS files that have been installed by Bower into your HTML.  
To achieve this, grunt-bower-install relies on wiredep, a Node module.  

Installing _grunt-bower-install_  
`$ npm install grunt-bower-install --dave-dev`  
NB: _grunt-bower-install_ is deprecated. Use _grunt-wiredep_ instead.

Running the _bower-install_ task  
`$ grunt bowerInstall`  
This will inject the JavaScript and CSS bower packages into the HTML defined in the bower-install target.

#### grunt-recess  
The grunt-recess plugin is used for linting CSS. It can also compile LESS.  
Installing the _grunt-recess_  
`$ npm install grunt-recess --save-dev`   
Running the _recess_ task  
`$ grunt recess`   

#### grunt-autoprefixer
The _grunt-autoprefixer_ plugin adds vendor specific prefixes to  CSS properties where applicable.  
Install _grunt-autoprefixer_  
`$ npm install -D grunt-autoprefixer`  

#### grunt-contrib-cssmin
The _grunt-contrib-cssmin_ is for CSS minification  
Installing the _grunt-contrib-cssmin_    
`$ npm install -D grunt-contrib-cssmin`  

#### grunt-uncss  
The _grunt-uncess_ is used to remove unused CSS from your style sheet.  
Installing _grunt-uncss_  
`$ npm install --save-dev grunt-uncss`  

#### grunt-usemin
The grunt-usemin plugin has two tasks - useminPrepare and usemin.
userminPrepare task is used to ready your files for the usemin task to update your HTML file with the correct referemce to the static asses, such as CSS.   
grunt-usemin generates configuration for your tasks such as concatenation and minification.   
Therefore, we can remove the cssmin configuration fron Gruntfile as usemin will auto-generate it for us.  
Installing _grunt-usemin_  
`$ npm install grunt-usemin --save-dev`  

#### grunt-contrib-copy  
The grunt-contrib-copy plugin is used to copy files and folder from one place to another within the project.    
Installing _grunt-contrib-copy_  
`$ npm install grunt-contrib-copy  --save-dev`  

#### grunt-rev  
The _grunt-rev_ plugin is used for the versioning of asseets  
Installing _grunt-rev_ plugin  
`$ npm install grunt-rev --save-dev`  

## Chpater 4: Using Grunt with JavaScript  
Installing backbone   
`$ bower install backbone --save-dev`   

#### Asynchronous Module Definition (AMD)  
There are two fundamental concepts - _define_ and _require_ functions
It is best practice to not name modules and each AMD module should be defined in its own file.  
The improves the portability of modules.
There are tow popula JavaScript frameworks that implement AMD module loading: __require.js__ and __curl.js__ .  
An alternative to AMD type modules is __CommonJS__. In this module implementation, modules are not loaded asynchronously. __CommonJS__ is intended for use in the server side and not within the browser.  
Yet another module implementation is __Browserify__. It is a universal module loader. It also allows __CommonJS__ nd AMD modules to be loaded into the same application.

Installing _require.js_  
`$ bower install requirejs --save-dev`   

#### Combining Grunt.js and JavaScript Modules
* Add _require.js_ library, a config file(_path.js_) and you _main.js_ file using script tags in the HTML document.    
* In _path.js_ - `requirejs.config({})`  
* Install the _grunt-bower-requirejs_ plugins  
  `$ npm install grunt-bower-requirejs --save-dev`   
* Integrate the _grunt-bower-requirejs_ plugin in the _Gruntfile.js_
* run `grunt bower` task, and the  path.js config file will be updated with bower components defiend in _bower.json_.  
* This will allow us to use bower components within our AMD modules.   
Learn more about [Require.js](https://requirejs.org/)

#### grunt-contrib-require
The _grunt-conrib-requirejs_ plugin is used to automate the running of the _require.js_ optimizer.   The _require.js_ optimizer is designed to parse a JavaScript application that is using AMD modules and combine the modules into a single file. In addition to this, the optimizer can also minify the combined JavaScript, using the library know as _Uglify_.
Installing _grunt-contrib-require_  
`$ npm install grunt-contrib-requirejs --save-dev`  

#### grunt-contrib-clean  
The _grunt-contrib-clean_ plugin is used to remove particular files or recursively clean a directory.
Installing _grunt-contrib-clean_  
`$ npm install grun-contrib-clean --save-dev`  

## grunt-contrib-handlebars  
The grunt-contrib-handlebars plugin loads templates from a directory and compile them into a sinle AMD module.  
The template can then be used within an AMD module as a dependency.
Installing _grunt-contrib-handlebars_  
`$ npm install grunt-contrib-handlebars --dave-dev`  

Installing _handlebars_ bower component  
`$ bower install handlerbars --save-dev`  
Once installed, the non-AMD version of the handlebars library is included by _grunt-bower-requirejs_. Therefore, we have to add a shim in order for require.js to export it as global.  
__file:__ config.js   
```
requirejs.config({
  shim: {
    handlebars: {
      exports: 'Handlebars'
    }
  },
  ...
})
```

#### grunt-contrib-jshint  
The _grunt-contrib-jshint_ plugin is used to lint JavaScript - check for code quality, detect errors and potentiaol problems in JavaScript application.
JShint should come before _handlebars_ task as the output from _handlebars_ task willnot pass all the JShint rules.

Installing _grunt-contrib-jshint_  
`$ npm install grunt-contrib-jshint --save-dev`   

#### grunt-modernizr
The _grunt-modernizr_ plugin is used for feature support detection in web browers ... learn more.

Installing _grunt-modernizr_  
`$ npm install grunt-modernizr --save-dev`

#### grunt-contrib-uglify  
The grunt-contrib-uglify is used for the minification and obfuscation of JavaScript code.
It would be a good practice to run the Uglify task over the file output from the concat task.

Installing _grunt-contrib-uglify_  
`$ npm install grunt-contrib-uglify --save-dev`  
The _grunt-contrib-uglify_ is used for the minification and obfuscation of JavaScript code.  
It would be a good practice to run the Uglify task over the file output from the concat task.   


#### grunt-contrib-concat   
The _grunt-contrib-concat_ is used to concatinate multiple javascript files.   

Installing _grunt-contrib-concat_  
`$ npm install grunt-contrib-concat --save-dev`  
