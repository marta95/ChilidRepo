"use strict"

var array = [];
//reading Json file -> creating array of data
function myFunction(callback){
    $.getJSON("sluzba.json", function(result){
        array = result;  
        callback(array);
        tableMaker(array);
    });
};

myFunction(function(myArray){
   filtrFunction(myArray);
   sortId(myArray);
   sortExp(myArray);
   sortName(myArray);
   sortLastName(myArray);
   sortFunction(myArray);
   sortDate(myArray);
});

//creating a table and invoking pagination 
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
        pagination(array);
};

//removes rows with data
function deleterow(){
    var tableHeaderCount = 1;
    var table = document.getElementById('myTable');
    var rowCount = table.rows.length;
    for (var i = tableHeaderCount; i < rowCount; i++){
        table.deleteRow(tableHeaderCount);
    }
};

//Invoking sorting functions ->creating new tables
function sortId(array){
    document.getElementById("id").onclick = function()
   {
       deleterow();
       var arr = bubbleSortId(array);
       tableMaker(arr);
   }
};
function sortExp(array){
    document.getElementById("experience").onclick = function()
   {
       deleterow();
       var arr = bubbleSortExpAsc(array);
       tableMaker(arr);
   }
};
function sortName(array){
   document.getElementById("name").onclick = function()
   {
       deleterow();
       var arr = bubbleSortName(array);
       tableMaker(arr);
   } 
};
function sortLastName(array){
   document.getElementById("lastName").onclick = function()
   {
       deleterow();
       var arr1 = bubbleSortSurname(array);
       tableMaker(arr1);
   } 
};
function sortFunction(array){
   document.getElementById("function").onclick = function()
   {
       deleterow();
       var arr = bubbleSortFunction(array);
       tableMaker(arr);
   } 
};
function sortDate(array){
   document.getElementById("birthDate").onclick = function()
   {
       deleterow();
       var arr = bubbleSortDate(array);
       tableMaker(arr);
   } 
};

//sorting functions -> bubble sort for every attribute
function bubbleSortId(array) {  
    var length = array.length;
     for (var i = (length - 1); i > 0; i--) {
        for (var j = (length - i); j > 0; j--) {
            if (array[j].id < array[j - 1].id) {
                var tmp = array[j];
                array[j] = array[j - 1];
                array[j - 1] = tmp;
            }
        }
    }
    return array;
};
function bubbleSortExpAsc(array) {  
    var length = array.length;
    for (var i = (length - 1); i > 0; i--) {
        for (var j = (length - i); j > 0; j--) {
            if (array[j].experience < array[j - 1].experience) {
                var tmp = array[j];
                array[j] = array[j - 1];
                array[j - 1] = tmp;
            }
        }
    }
    return array;
};
function bubbleSortName(array) {  
    var length = array.length;
    for (var i = (length - 1); i > 0; i--) {
        for (var j = (length - i); j > 0; j--) {
            if (array[j].firstName.toLowerCase() < array[j - 1].firstName.toLowerCase()) {
                var tmp = array[j];
                array[j] = array[j - 1];
                array[j - 1] = tmp;
            }
        }
    }
    return array;
}; 
function bubbleSortSurname(array) {  
    var length = array.length;
    for (var i = (length - 1); i > 0; i--) {
        for (var j = (length - i); j > 0; j--) {
            if (array[j].lastName.toLowerCase() < array[j - 1].lastName.toLowerCase()) {
                var tmp = array[j];
                array[j] = array[j - 1];
                array[j - 1] = tmp;
            }
        }
    }
    return array;
}; 
function bubbleSortFunction(array) {  
    var length = array.length;
    for (var i = (length - 1); i > 0; i--) {
        for (var j = (length - i); j > 0; j--) {
            if (array[j].function.toLowerCase() < array[j - 1].function.toLowerCase()) {
                var tmp = array[j];
                array[j] = array[j - 1];
                array[j - 1] = tmp;
            }
        }
    }
    return array;
};

//function for data parsing
function parseDate(dateString) {
    var date = dateString;
    var temp = String(date).indexOf(' ');
    date = date.substring(0, temp != -1 ? temp : date.length);
    date = String(date).split('.');
    var day = date[0];var month = date[1];var year = date[2];
    //created array -> into Date format
    return new Date(year, month, day);
};

function bubbleSortDate(array) {  
    var length = array.length;
    var date = [];
    var date1 = [];
     for (var i = (length - 1); i > 0; i--) {
        for (var j = (length - i); j > 0; j--) {
            date = parseDate(array[j].dateOfBirth);
            date1 = parseDate(array[j-1].dateOfBirth);
            if (date < date1){
                var tmp = array[j];
                array[j] = array[j-1];
                array[j-1]= tmp;
            }
        }
    }
    return array;
};

//filtr functions for every atribute
function filtrFunction(array)
{
    document.getElementById("filtr").onclick = function(){
        var txt = document.getElementById("textField").value;
        var txt1 =document.getElementById("textField1").value;
        var arr = [];
        if(document.getElementById("select").value === "id")
        {
            for(var i = 0; i<array.length;i++){
                if(txt <= array[i].id && txt1 >= array[i].id){
                    arr.push(array[i]);
                    deleterow(arr);
                    tableMaker(arr);
                }
            }
        }else if(document.getElementById("select").value === "name")
        {
            for(var i = 0; i<array.length;i++){
                if(txt === array[i].firstName){
                    arr.push(array[i]);
                    deleterow(arr);
                    tableMaker(arr);
                }
            }
        }else if(document.getElementById("select").value === "surname")
        {
            for(var i = 0; i<array.length;i++){
                if(txt === array[i].lastName){
                    arr.push(array[i]);
                    deleterow(arr);
                    tableMaker(arr);
                }
            }
        }else if(document.getElementById("select").value === "function")
        {
            for(var i = 0; i<array.length;i++)
            {
                if(txt === array[i].function){
                    arr.push(array[i]);
                    deleterow(arr);
                    tableMaker(arr);
                }
            }
        }else if (document.getElementById("select").value === "experience")
        {
            for(var i = 0; i<array.length;i++)
            {
                if(txt <= array[i].experience && txt1 >= array[i].experience){
                    arr.push(array[i]);
                    deleterow(arr);
                    tableMaker(arr);
                }
            }
        }else if (document.getElementById("select").value === "birthDate")
        {
            var dateTxt = parseDate(String(txt));
            var dateTxt1 = parseDate(String(txt1));
            for (var j = (array.length-1); j >= 0; j--) 
            {
                var date = parseDate(array[j].dateOfBirth);
                if(dateTxt <= date && dateTxt1 >= date){
                    arr.push(array[j]);
                    deleterow(arr);
                    tableMaker(arr);
                }
            }      
        } 
    };
};

//pagination function
function pagination(array){
$('table.paginated').each(function() {
    
    var current = 0;
    var numPerPage = 5; //number of displayed objects
    var $table = $(this);

    //hides all rows -> displays only the current sliced group
    $table.bind('pagination', function() {
        $table.find('tbody tr').hide().slice(current * numPerPage, (current + 1) * numPerPage).show();
    });

    $table.trigger('pagination');
    //removes pagination buttons before making new ones
    var pager;
    if(pager = document.getElementsByClassName("pager"))
    {
        $('#pager').find('span').remove();
    } 
    //counting number of pages 
    var numRows = $table.find('tbody tr').length;
    var numPages = Math.ceil(numRows / numPerPage);

    //loop for creating all the paggination buttons
    var $pager = $('<div class="pager" id="pager"></div>');
    for (var page = 0; page < numPages; page++) {
        $('<span class="pageNumber"></span>').text(page + 1).bind('click', {
            newPage: page }, function(event) {
            current = event.data['newPage'];
            $table.trigger('pagination');
            $(this).addClass('active').siblings().removeClass('active');
        }).appendTo($pager).addClass('clickable');
    };
    //insert newly made buttons under the table
    $pager.insertAfter($table).find('span.pageNumber:first').addClass('active');
});
};