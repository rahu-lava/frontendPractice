let dobb = 30;
let dobm = 08;
let doby = 2021;

const date = new Date();
const year = date.getFullYear();
const day = date.getDate();
const month = date.getMonth() + 1;

const body = document.body;
let dobDay = document.querySelector("#Day");
let dobMonth = document.querySelector("#Month");
let dobYear = document.querySelector("#Year");
let ageDisplayDay = document.querySelector(".ageDayValue");
let ageDisplayMonth = document.querySelector(".ageMonthValue");
let ageDisplayYear = document.querySelector(".ageYearValue");
let dayError = document.querySelector("#dayTargeted");
let monthError = document.querySelector("#monthTargeted");
let yearError = document.querySelector("#yearTargeted");
let redFontError = document.querySelectorAll("label");
let button=document.querySelector("button")

var mediaQuery=window.matchMedia("(width<600px)")

const buttonPlacementAfterError=()=>{
  if(mediaQuery.matches){
    button.style.top="84%"
  }
  else{
    button.style.top="105%"
  }
}

const buttonPlacementNoError=()=>{
  if(mediaQuery.matches){
    button.style.top="80%"
  }
  else{
    button.style.top="105%"
  }
}


const headLabelRed = () => {
  redFontError[0].style.color = "hsl(0, 100%, 67%)";
  redFontError[2].style.color = "hsl(0, 100%, 67%)";
  redFontError[4].style.color = "hsl(0, 100%, 67%)";
};

const headLabelRevert = () => {
  redFontError[0].style.color = "hsl(0, 1%, 44%";
  redFontError[2].style.color = "hsl(0, 1%, 44%";
  redFontError[4].style.color = "hsl(0, 1%, 44%";
};
headLabelRevert();

// console.log(Dob_day,Dob_month,Dob_year)
document.querySelector(".button").addEventListener("click", (event) => {
  event.preventDefault();
  dobb = dobDay.value;
  dobm = dobMonth.value;
  doby = dobYear.value;
  ageCalculator(day, month, year, dobb, dobm, doby);
});

// const dob=new Date("2004/02/31")

console.log("Today:", year + "/" + month + "/" + day);
console.log("DOB:", doby + "/" + dobm + "/" + dobb);

let ageCalculator = (day, month, year, dobb, dobm, doby) => {
  var monthPicker = (dobm, doby) => {
    if (
      dobm == 1 ||
      dobm == 3 ||
      dobm == 5 ||
      dobm == 7 ||
      dobm == 8 ||
      dobm == 10 ||
      dobm == 12
    ) {
      return 31;
    } else if (dobm == 4 || dobm == 6 || dobm == 9 || dobm == 11) {
      return 30;
    } else if (dobm == 2) {
      if (doby % 4 == 0) {
        return 29;
      } else {
        return 28;
      }
    } else {
      return 31;
    }
  };
  var monthLimit = monthPicker(dobm, doby);

  const correctValueAfterWrong = (dobb, doby, monthLimit, year) => {
    if (dobb <= monthLimit) {
      dayError.textContent = "";
    }
    if (month < 13) {
      monthError.textContent = "";
    }
    if (doby <= year) {
      yearError.textContent = "";
    }
  };
  correctValueAfterWrong(dobb, doby, monthLimit, year);

  var daysCalculator = (day, dobb, doby) => {
    if (day > dobb) {
      return day - dobb;
    } else {
      var previousMonthPicker = monthPicker(month - 1, doby);
      return previousMonthPicker - dobb + day;
    }
  };

  if ((doby == year && dobm >= month) || (doby == year && dobm < month)) {
    if (dobm > month && dobb > monthLimit) {
      dayError.textContent = "Must be a valid date";
      monthError.textContent = "Must be in past";
      headLabelRed();
      ageDisplayDay.textContent = "--";
      ageDisplayMonth.textContent = "--";
      ageDisplayYear.textContent = "--";
      buttonPlacementAfterError()
      console.log("month and Date is targeted");
    } else if (dobm <= month && dobb > monthLimit) {
      dayError.textContent = "Must be a valid date";
      headLabelRed();
      ageDisplayDay.textContent = "--";
      ageDisplayMonth.textContent = "--";
      ageDisplayYear.textContent = "--";
      buttonPlacementAfterError()
      console.log("only date is targeted");
    } else if (dobm == month && dobb >= day) {
      if (dobb == day) {
        console.log("Age is Zero");

        ageDisplayDay.textContent = 0;
        ageDisplayMonth.textContent = 0;
        ageDisplayYear.textContent = 0;
        dayError.textContent = "";
        monthError.textContent = "";
        yearError.textContent = "";
        headLabelRevert();
        buttonPlacementNoError()
      } else {
        dayError.textContent = "Must be in past";
        headLabelRed();
        ageDisplayDay.textContent = "--";
        ageDisplayMonth.textContent = "--";
        ageDisplayYear.textContent = "--";
        buttonPlacementAfterError()
        console.log("Date is Targeted");
      }
    } else if (dobm > month && dobb <= monthLimit ) {
      if(dobm > 12){
        monthError.textContent = "Must be a valid month";
        headLabelRed();
      ageDisplayDay.textContent = "--";
      ageDisplayMonth.textContent = "--";
      ageDisplayYear.textContent = "--";
      buttonPlacementAfterError()
      }else{

        monthError.textContent = "Must be in past";
        headLabelRed();
        ageDisplayDay.textContent = "--";
        ageDisplayMonth.textContent = "--";
        ageDisplayYear.textContent = "--";
        buttonPlacementAfterError()
        console.log("only month is targeted", "must be in past");
      }
    } else if (doby == year) {
      let cuurYearMonth = month - dobm - 1;
      if (dobb < day) {
        cuurYearMonth += 1;
      }
      let cuurYear = year - doby;
      let cuurYearDays = daysCalculator(day, dobb, doby);

      console.log(
        cuurYear,
        "Years",
        cuurYearMonth,
        "Months",
        cuurYearDays,
        "Days"
      );

      ageDisplayDay.textContent = cuurYearDays;
      ageDisplayMonth.textContent = cuurYearMonth;
      ageDisplayYear.textContent = cuurYear;
      dayError.textContent = "";
      monthError.textContent = "";
      yearError.textContent = "";
      headLabelRevert();
      buttonPlacementNoError()
    }
  } else if (
    dobb > monthLimit ||
    dobm > 12 ||
    doby > year ||
    dobb < 1 ||
    dobm < 1 ||
    doby < 1
  ) {
    if (dobb > monthLimit || dobb < 1) {
      dayError.textContent = "Must be a valid date";
      headLabelRed();
      ageDisplayDay.textContent = "--";
      ageDisplayMonth.textContent = "--";
      ageDisplayYear.textContent = "--";
      buttonPlacementAfterError()
      console.log("Must be a valid Date");
    }
    if (dobm > 12 || dobm < 1) {
      monthError.textContent = "Must be a valid month";
      headLabelRed();
      ageDisplayDay.textContent = "--";
      ageDisplayMonth.textContent = "--";
      ageDisplayYear.textContent = "--";
      console.log("Must be a valid Month");
      buttonPlacementAfterError()
    }
    if (doby > year || doby < 1) {
      if (doby < 1) {
        yearError.textContent = "Must be a valid year";
        headLabelRed();
        ageDisplayDay.textContent = "--";
        ageDisplayMonth.textContent = "--";
        ageDisplayYear.textContent = "--";
        buttonPlacementAfterError()
      } else {
        yearError.textContent = "Must be in past";
        headLabelRed();
        ageDisplayDay.textContent = "--";
        ageDisplayMonth.textContent = "--";
        ageDisplayYear.textContent = "--";
        buttonPlacementAfterError()
        console.log("Must be in past Year");
      }
    }
  } else {
    let ageYear = year - 1 - doby;
    let remainingMonth = 12 - dobm + month;
    let ageDays = daysCalculator(day, dobb, doby);
    if (remainingMonth > 12) {
      remainingMonth -= 12;
      ageYear += 1;
    }
    if (dobb > day) {
      remainingMonth -= 1;
      if (remainingMonth < 0) {
        remainingMonth = 11;
      }
    }
    ageDisplayDay.textContent = ageDays;
    ageDisplayMonth.textContent = remainingMonth;
    ageDisplayYear.textContent = ageYear;
    dayError.textContent = "";
    monthError.textContent = "";
    yearError.textContent = "";
    headLabelRevert();
    buttonPlacementNoError()
    console.log(ageYear, "Years", remainingMonth, "Months", ageDays, "Days");
  }
};
