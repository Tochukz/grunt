# Pro Grunt.js  
## Chapter 1: Introducing Grunt  
Open source CI environment:  
* [Travis CI](https:travis-ci.org)  
* Hudson  
* Jenkins  
Alternatives to Grunt:  
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
