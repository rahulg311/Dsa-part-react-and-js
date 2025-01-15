function DateCal(mybirthdays) {
    let currentdate = new Date();
    let mybirthday = new Date(mybirthdays);
    
    let currentdateYear = currentdate.getFullYear();
    let currentdateMonth = currentdate.getMonth() + 1;
    let currentdateDay = currentdate.getDate();
    
    let mybirthdayYear = mybirthday.getFullYear();
    let mybirthdayMonth = mybirthday.getMonth() + 1;
    let mybirthdayDay = mybirthday.getDate();
    
    let yeardiff = currentdateYear - mybirthdayYear;
    let monthdiff = currentdateMonth - mybirthdayMonth;
    let daydiff = currentdateDay - mybirthdayDay;
    
    // Adjust for negative month or day differences
    console.log(yeardiff,monthdiff,daydiff)
    if (daydiff < 0) {
        monthdiff -= 1;
        daydiff += new Date(currentdateYear, currentdateMonth - 1, 0).getDate();
    }
    if (monthdiff < 0) {
        yeardiff -= 1;
        monthdiff += 12;
    }
    
    return `I am ${yeardiff} years, ${monthdiff} months, and ${daydiff} days old`;
}

console.log(DateCal("1996-07-16"));
