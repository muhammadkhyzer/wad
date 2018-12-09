var AccountDetails=[{
    AccountTitle:'Muhammad Khyzer Naeem',
    AvailibleBalance:1000000,
    AccountCurrency:'PKR',
    IBAN:"pkn123456789"
}];


document.getElementById("title").innerHTML=AccountDetails[0].AccountTitle;
document.getElementById("balance").innerHTML=AccountDetails[0].AvailibleBalance;
document.getElementById("currency").innerHTML=AccountDetails[0].AccountCurrency;
document.getElementById("IBAN").innerHTML=AccountDetails[0].IBAN;

document.getElementById("deposit").addEventListener("keyup", deposit);


var deposi=document.getElementById("deposit");
function deposit() {
    var temp=deposi.value;
    document.getElementById("balance").innerHTML=AccountDetails[0].AvailibleBalance-temp;

}