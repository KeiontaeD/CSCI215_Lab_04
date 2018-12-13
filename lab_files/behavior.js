// use console.log when needed
//remember to set all attributes
// every var must =
console.log("start");
var I = [];
I[0]='http://munsellb.people.cofc.edu/img/pound.jpeg';
I[1]='http://munsellb.people.cofc.edu/img/euro.jpeg';
I[2]='http://munsellb.people.cofc.edu/img/kroon.jpeg';
I[3]='http://munsellb.people.cofc.edu/img/canadian.jpeg';
I[4]='http://munsellb.people.cofc.edu/img/yuan.jpeg';

// -----------------------------------
// Global Variables Go Here
// note, to keep all together


function convert() {
    var dollar = document.getElementsByName("dollars")[0].value;
    var selectElement = document.getElementById('currency');
    var exchangeRate = selectElement.value;
    var index = selectElement.selectedIndex;
    var currency = selectElement.options[index].text;

    updateExchange(dollar, exchangeRate, currency, index);
}

// -----------------------------------
// Convert Function Goes Here
// remember to close all functions

function calculate(dollar, exchangeRate) {
    return (dollar * exchangeRate);

}


// -----------------------------------
// Functions that are given
// Do not modify
// if not modified the stay the same

function updateImage( index ) {

    var url = 'url(' + I[index] + ')';
    document.getElementById('bill_img').style.backgroundImage=url;

}

function updateExchange( dollar, exchangeRate, currency, index ) {

    document.getElementsByName("exchange")[0].value = calculate( dollar, exchangeRate ).toPrecision(4) + ' ' + currency;

    updateImage( index );

}
//-- close everything
//make sure all is in quotations.

