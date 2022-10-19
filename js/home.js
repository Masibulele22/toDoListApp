
function toDo(toDoText) {
    var toDoText = document.getElementById("toDoText").value;
    console.log(toDoText);
    var toDoType = document.getElementById("toDoType").value;

    if(toDoType == "appointments") {
        document.getElementById("appointmentsDisplay").innerHTML += "<li>" + toDoText + "<br/>";
    } 

    else if(toDoType == "errands") {
        document.getElementById("errandsDisplay").innerHTML += "<li>" + toDoText + "<br/>";    
    } 

    else if(toDoType == "deadlines") {
        document.getElementById("deadlinesDisplay").innerHTML += "<li>" + toDoText + "<br/>";        
    } 

    else if(toDoText == "") {
        document.getElementById("errorMessage").innerHTML = "Enter valid To Do items in the text field!"
    }

    else {
        document.getElementById("errorMessage").innerHTML = "Make a valid To Do type selection!";
    }
};

