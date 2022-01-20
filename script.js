const months=[31,28,31,30,31,30,31,31,30,31,30,31];

function ageCalculator(){

    let today = new Date();
    let inputDate = new Date(document.getElementById("date-input").value);

    let birthMonth ,birthDate ,birthyear ;

    let birthDetails = {
        date:inputDate.getDate(),
        month:inputDate.getMonth()+1,
        year:inputDate.getFullYear()
    }
    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth()+1;
    let currentDate = today.getDate();

    leapChecker(currentYear);

    if(
        birthDetails.year > currentYear || 
        ( birthDetails.month > currentMonth && birthDetails.year == currentDate &&
             birthDetails.month == currentMonth && birthDetails.year == currentYear )
    ){
        alert("Not Born Yet");
        displayResult("-","-","-");
        return;
    }

    birthyear = currentYear - birthDetails.year;

    if(currentMonth >= birthDetails.month){
        birthMonth = currentMonth - birthDetails.month;
    }
    else{
        birthyear--;
        birthMonth = 12 + currentMonth - birthDetails.month;
    }

    if(currentDate >= birthDetails.date){
        birthDate = currentDate - birthDetails.date;
    }
    else{
        birthMonth--;
        let days = months[currentMonth - 2];
        birthDate = days + currentDate - birthDetails.date;
        if(birthMonth < 0){
            birthMonth = 11;
            birthyear--;
        }
    }
    displayResult(birthDate,birthMonth,birthyear);


function displayResult(bDate,bMonth,bYear){
    document.getElementById("years").textContent = bYear;
    document.getElementById("months").textContent = bMonth;
    document.getElementById("days").textContent = bDate;
}

function leapChecker(year){
    if(year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)){
        months[1] = 29;
    }
    else{
        months[1] =28;
    }
}

}
