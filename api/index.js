#! /usr/bin/env node
var js = require('jsearch');
js.google( escape(process.argv),10,function(response){
    console.log(response) // for Google results 

})
