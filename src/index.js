"use strict"

var array = [];

function myFunction(callback){
    $.getJSON("sluzba.json", function(result){
        array = result;  
        callback(array);
         
        tableMaker(array);
    });
}

myFunction(function(myArray){
   
   filtFF(myArray);
   sortId(myArray);
   sortExp(myArray);
   sortName(myArray);
   sortLastName(myArray);
   sortFunction(myArray);
   sortDate(myArray);
 

   var arr = [];
   arr = parseHour(myArray[2].dateOfBirth);
   console.log(arr);
   var arr = [];
   arr = parseHour(myArray[10].dateOfBirth);
   console.log(arr);

   var arr1 = [];
   arr1 = parseDate(myArray[0].dateOfBirth);
   console.log(arr1);

});


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
    //pagination(array);
};

//SORTWANIE
function sortId(myArray){
    document.getElementById("id").onclick = function()
   {
       deleterow(arr1);
       var arr=[];
       arr = myArray;
       console.log(arr);
       var arr1 = bubbleSortId(arr);
       console.log(arr1);
       tableMaker(arr1);
   }
};

function sortExp(myArray){
    document.getElementById("experience").onclick = function()
   {
       deleterow(arr1);
       var arr=[];
       arr = myArray;
       console.log(arr);
       var arr1 = bubbleSortExp(arr);
       console.log(arr1);
       tableMaker(arr1);
   }
};

function sortName(myArray){
   document.getElementById("name").onclick = function()
   {
       deleterow(arr1);
       var arr=[];
       arr = myArray;
       console.log(arr);
       var arr1 = bubbleSortName(arr);
       console.log(arr1);
       tableMaker(arr1);
   } 
};

function sortLastName(myArray){
   document.getElementById("lastName").onclick = function()
   {
       deleterow(arr1);
       var arr=[];
       arr = myArray;
       console.log(arr);
       var arr1 = bubbleSortSurname(arr);
       console.log(arr1);
       tableMaker(arr1);
   } 
};

function sortFunction(myArray){
   document.getElementById("function").onclick = function()
   {
       deleterow(arr1);
       var arr=[];
       arr = myArray;
       console.log(arr);
       var arr1 = bubbleSortFunction(arr);
       console.log(arr1);
       tableMaker(arr1);
   } 
};

function sortDate(myArray){
   document.getElementById("birthDate").onclick = function()
   {
       deleterow(arr1);
       var arr=[];
       arr = myArray;
       console.log(arr);
       var arr1 = bubbleSortDate(arr);
       console.log(arr1);
       tableMaker(arr1);
   } 
};

function sortHour(myArray){
   document.getElementById("hourPicker").onclick = function()
   {
       deleterow(arr1);
       var arr=[];
       arr = myArray;
       console.log(arr);
       var arr1 = bubbleSortHour(arr);
       console.log(arr1);
       tableMaker(arr1);
   } 
};



function deleterow(array){
    var tableHeaderRowCount = 1;
    var table = document.getElementById('myTable');
    var rowCount = table.rows.length;
    for (var i = tableHeaderRowCount; i < rowCount; i++) {
        table.deleteRow(tableHeaderRowCount);
}
};


//FUNKCJE SORTUJĄCE
function bubbleSortId(array) {  
    var length = array.length;
     for (var i = (length - 1); i > 0; i--) {
        //Number of passes
        for (var j = (length - i); j > 0; j--) {
            //Compare the adjacent positions
            if (array[j].id < array[j - 1].id) {
                //Swap the numbers
                var tmp = array[j];
                array[j] = array[j - 1];
                array[j - 1] = tmp;
            }
        }
    }
    return array;
}

function bubbleSortExp(array) {  
    var length = array.length;
    for (var i = (length - 1); i > 0; i--) {
        //Number of passes
        for (var j = (length - i); j > 0; j--) {
            //Compare the adjacent positions
            if (array[j].experience < array[j - 1].experience) {
                //Swap the numbers
                var tmp = array[j];
                array[j] = array[j - 1];
                array[j - 1] = tmp;
            }
        }
    }
    return array;
}   

function bubbleSortName(array) {  
    var length = array.length;
    //debugger;
    for (var i = (length - 1); i > 0; i--) {
        //Number of passes
        for (var j = (length - i); j > 0; j--) {
            //Compare the adjacent positions
            if (array[j].firstName.toLowerCase() < array[j - 1].firstName.toLowerCase()) {
                //Swap the numbers
                var tmp = array[j];
                array[j] = array[j - 1];
                array[j - 1] = tmp;
            }
        }
    }
    return array;
} 

function bubbleSortSurname(array) {  
    var length = array.length;
    //debugger;
    for (var i = (length - 1); i > 0; i--) {
        //Number of passes
        for (var j = (length - i); j > 0; j--) {
            //Compare the adjacent positions
            if (array[j].lastName.toLowerCase() < array[j - 1].lastName.toLowerCase()) {
                //Swap the numbers
                var tmp = array[j];
                array[j] = array[j - 1];
                array[j - 1] = tmp;
            }
        }
    }
    return array;
} 

function bubbleSortFunction(array) {  
    var length = array.length;
    //debugger;
    for (var i = (length - 1); i > 0; i--) {
        //Number of passes
        for (var j = (length - i); j > 0; j--) {
            //Compare the adjacent positions
            if (array[j].function.toLowerCase() < array[j - 1].function.toLowerCase()) {
                //Swap the numbers
                var tmp = array[j];
                array[j] = array[j - 1];
                array[j - 1] = tmp;
            }
        }
    }
    return array;
} 



function parseDate(dateStr) {
    var date = dateStr;
    var temp = String(date).indexOf(' ');
    date = date.substring(0, temp != -1 ? temp : date.length);
    date = String(date).split('.');
    return date;
};

function bubbleSortDate(array) {  
    var length = array.length;
    var date = [];
    var date1 = [];
     for (var i = (length - 1); i > 0; i--) {
        //Number of passes
        for (var j = (length - i); j > 0; j--) {
            //Compare the adjacent positions
            date = parseDate(array[j].dateOfBirth);
            date1 = parseDate(array[j-1].dateOfBirth);
            if (date[2] < date1[2] || 
               (date[2]==date1[2]&& date[1]<date1[1]) || 
               (date[2]==date1[2]&& date[1]==date1[1]&&date[0]<date1[0]))
            {
                //Swap the numbers
                var tmp = array[j];
                array[j] = array[j-1];
                array[j-1]= tmp;
            }
        }
    }
    return array;
}

function parseHour(hourStr) {
    var hour = hourStr;
    var temp = String(hour).indexOf(' ');
    hour = hour.substring(temp+1, temp!=-1 ? hour.length : hour.length-1);
    hour = String(hour).split(':');
    return hour;
};

function bubbleSortHour(array) {  
    var length = array.length;
    var hour = [];
    var hour1 = [];
     for (var i = (length - 1); i > 0; i--) {
        //Number of passes
        for (var j = (length - i); j > 0; j--) {
            //Compare the adjacent positions
            hour = parseHour(array[j].dateOfBirth);
            hour1 = parseHour(array[j-1].dateOfBirth);
            if (hour[0] < hour1[0] ||
                (hour[0] == hour1[0] && hour[1] < hour1[1]))
            {
                //Swap the numbers
                var tmp = array[j];
                array[j] = array[j-1];
                array[j-1]= tmp;
            }
        }
    }
    return array;
};



function filtFF(array)
{
    document.getElementById("filtr").onclick = function(){
    if(document.getElementById("select").value === "FUN")
        {
            var txt = document.getElementById("textField").value;
            console.log(txt);
            var arr = [];
            for(var i = 0; i<array.length;i++)
            {
                if(txt==array[i].function)
                {
                    arr.push(array[i]);
                    console.log(arr);
                }
            }
            deleterow(arr);
            tableMaker(arr);
        }
        else if(document.getElementById("select").value === "NAME")
        {
            var txt = document.getElementById("textField").value;
            console.log(txt);
            var arr = [];
            debugger;
            for(var i = 0; i<array.length;i++)
            {
                if(txt == array[i].firstName)
                {
                    arr.push(array[i]);
                    console.log(arr);
                }
            }
            deleterow(arr);
            tableMaker(arr);
        }/*else if(document.getElementById("select").value === "NAME")
        {
            var txt = document.getElementById("textField").value;
            console.log(txt);
            var arr = [];
            for(var i = 0; i<array.length;i++)
            {
                if(txt==array[i].lastName)
                {
                    arr.push(array[i]);
                    console.log(arr);
                }
            }
            deleterow(arr);
            tableMaker(arr);
        }*/
    };
    
}
