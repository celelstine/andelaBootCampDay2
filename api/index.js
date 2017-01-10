/**
 *  A function expect an input which is the keyword to search and it returns a list of URL related to the keyword 
 * @Author okorocelstine@gmail.com (Okoro Celestine)
 */
#! /usr/bin/env node
// use the jsearch module to search
var js = require('jsearch');
js.google( escape(process.argv),10,function(response){
    console.log(response) // for Google results 

})
