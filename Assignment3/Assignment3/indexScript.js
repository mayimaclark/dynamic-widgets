var total = 1;
var active = 1;

function displayCount(inputNumber){
    var visibleElements = document.getElementsByClassName("visible");
    if(inputNumber == 0) {
        var visibleChildren = visibleElements[0].childNodes;
        var myTDElements = visibleChildren[1].childNodes;
        var myLabelElements = myTDElements[1].childNodes;
        visibleChildren[3].innerHTML = myLabelElements[1].value.length;
    }
    else{
        var visibleChildren2 = visibleElements[inputNumber].childNodes;
        var myTDElements2 = visibleChildren2[0].childNodes;
        var myLabelElements2 = myTDElements2[0].childNodes;
        visibleChildren2[1].innerHTML = myLabelElements2[0].value.length;
    }
}

function add() {
    if(active < total){
        var hiddenElements = document.getElementsByClassName("hidden");
        hiddenElements[0].setAttribute("class","visible");
        active++;
    }
    else {
        var myTable = document.getElementById("myTable");
        var tableBody = myTable.childNodes[1];
        var newRow = document.createElement("tr");
        var newCell1 = document.createElement("td");
        var newLabel = document.createElement("label");
        var newInput = document.createElement("input");
        var newCell2 = document.createElement("td");

        newRow.setAttribute("class", "visible");
        newInput.setAttribute("onkeyup","displayCount(" + total + ")");
        newLabel.appendChild(newInput);
        newCell1.appendChild(newLabel);
        newRow.appendChild(newCell1);
        newRow.appendChild(newCell2);
        tableBody.appendChild(newRow);
        active++;
        total++;
    }
}

function hide(){
    if(active != 1){
        var visibleElements = document.getElementsByClassName("visible");
        visibleElements[visibleElements.length-1].setAttribute("class","hidden");
        active--;
    }
}

function sortVisible(){
    if(active != 1){
        var visibleElements = document.getElementsByClassName("visible");
        var strings = [];
        for(var i = 0; i < visibleElements.length; i++){
            if(i == 0) {
                var visibleChildren = visibleElements[i].childNodes;
                var myTDElements = visibleChildren[1].childNodes;
                var myLabelElements = myTDElements[1].childNodes;
                strings.push(myLabelElements[1].value);
            }
            else{
                var visibleChildren2 = visibleElements[i].childNodes;
                var myTDElements2 = visibleChildren2[0].childNodes;
                var myLabelElements2 = myTDElements2[0].childNodes;
                strings.push(myLabelElements2[0].value);
            }
        }

        strings.sort();

        for(i = 0; i < visibleElements.length; i++){
            if(i == 0) {
                var visibleChildren3 = visibleElements[i].childNodes;
                var myTDElements3 = visibleChildren3[1].childNodes;
                var myLabelElements3 = myTDElements3[1].childNodes;
                myLabelElements3[1].value = strings[i];
                displayCount(0);
            }
            else{
                var visibleChildren4 = visibleElements[i].childNodes;
                var myTDElements4 = visibleChildren4[0].childNodes;
                var myLabelElements4 = myTDElements4[0].childNodes;
                myLabelElements4[0].value = strings[i];
                displayCount(i);
            }
        }
    }
}
