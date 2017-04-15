/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var array = [];

function myFunction(callback){
    $.getJSON("sluzba.json", function(result){
        array = result;  
        callback(array);
        tableMaker(array); 
        //pagination(array);
    });
}

myFunction(function(myArray){
   //pagination(myArray);
   //test(myArray);
   //tableMaker(myArray);
   //console.log(myArray[0].firstName);
   
   //console.log(temp);
   //test1(myArray);


});
function test(myArray){
    document.getElementById("id").onclick = function(myArray)
   {
       var body= document.getElementsByTagName('td1').innerHTML;
       console.log(body);
   }
};
//var temp = console.log(array[0].firstName);

function tableMaker(array){
  var table = document.getElementById('myTable').getElementsByTagName('tbody')[0];
    for(var i=0; i<array.length;i++)
        { 
            var row = table.insertRow(table.rows.length);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);
            var cell6 = row.insertCell(5);

            cell1.innerHTML = "<tr><td1>" +array[i].id +"</td1></tr>";
            cell2.innerHTML = "<tr><td1>" +array[i].firstName+"</td1></tr>";
            cell3.innerHTML = "<tr><td1>" +array[i].lastName+"</td1></tr>";
            cell4.innerHTML = "<tr><td1>" +array[i].dateOfBirth+"</td1></tr>";
            cell5.innerHTML = "<tr><td1>" +array[i].function+"</td1></tr>";
            cell6.innerHTML = "<tr><td1>" +array[i].experience+"</td1></tr>";
        } 
};


myFunction(function(myArray){
   test(myArray);
   //test1(myArray);
});
function parseDate(dateStr) {
    var date = dateStr;
    var temp = String(date).indexOf(' ');
    date = date.substring(0, temp != -1 ? temp : date.length);
    date = String(date).split('.');
    return date;
};



function test1(myArray){
    document.getElementById("sort1").onclick = function()
   {
       //console.log(myArray);
       var temp = sorting(myArray);
       console.log(temp);
       
   }
};

function pagination(array){
$('table.paginated').each(function(){
    
    var currentPage = 0;
    var numPerPage = 5;
    
    var $table = $(this);
            
    $table.bind('repaginate', function(){
        $table.find('tbody tr').hide().slice(currentPage * numPerPage, (currentPage + 1) * numPerPage).show();
    });

    $table.trigger('repaginate');
            
    var numRows = array.length;
    var numPages = Math.ceil(numRows / numPerPage);
            
    var $pager = $('<div class="pager"></div>');
    for (var page = 0; page < numPages; page++) {
        $('<span class="page-number"></span>').text(page + 1).bind('click', {
            newPage: page
        }, function(event) {
            currentPage = event.data['newPage'];
            $table.trigger('repaginate');
            $(this).addClass('active').siblings().removeClass('active');
            }).appendTo($pager).addClass('clickable');
        }
        $pager.insertBefore($table).find('span.page-number:first').addClass('active');
    });
}


function sorting(array){

    var len = array.length;
    for (var i = 0; i < len; i++) {
        var tmp = array[i]; //Copy of the current element. 
        /*Check through the sorted part and compare with the number in tmp. If large, shift the number*/
        for (var j = i - 1; j >= 0 && (array[j].experience > array[i].experience); j--) {
            //Shift the number
            array[j + 1] =array[j];
        }
        //Insert the copied number at the correct position
        //in sorted part. 
        array[j + 1] = tmp;
    }
    return array;
};



    



/***/ })
/******/ ]);