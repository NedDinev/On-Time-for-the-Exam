function examTime(input) {
  let examHour = Number(input[0]);
  let examMinutes = Number(input[1]);
  let arrivalHour = Number(input[2]);
  let arrivalMin = Number(input[3]);

  let totalExamMin = examHour * 60 + examMinutes; 
  let totalArrivalMin = arrivalHour * 60 + arrivalMin;
  let differenceInTime = Math.abs(totalExamMin - totalArrivalMin);
  let hourDiff = Math.floor(differenceInTime / 60);

  let minDiff = differenceInTime % 60;
  if (minDiff === 0 || (minDiff < 10 && hourDiff > 0)) {
    minDiff = `0${minDiff}`;
  }

  if (totalArrivalMin === totalExamMin) {
    console.log("On time");
  } else if (totalArrivalMin > totalExamMin && differenceInTime < 60) {
    console.log("Late");
    console.log(`${minDiff} minutes after the start`);
  } else if (totalArrivalMin > totalExamMin && differenceInTime >= 60) {
    console.log("Late");
    console.log(`${hourDiff}:${minDiff} hours after the start`);
  } else if (differenceInTime <= 30) {
    console.log("On time");
    console.log(`${minDiff} minutes before the start`);
  } else if (differenceInTime > 30 && differenceInTime < 60) {
    console.log("early");
    console.log(`${minDiff} minutes before the start`);
  } else {
    console.log("Early");
    console.log(`${hourDiff}:${minDiff} hours before the start`);
  }
}

examTime(["11", "30", "10", "55"]);
