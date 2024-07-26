function timeConversion(s) {
    const AMPM = s.substring(8, 10);
    const hour = s.substring(0, 2);
    let newHour = "";
    const time = s.substring(2, 8);
    
    if(AMPM === "AM" && hour === "12") {
        newHour = "00"
    } else if(AMPM === "PM" && hour !== "12") {
        let hourNum = Number(hour) + 12;
        newHour = hourNum.toString();
    } else {
        newHour = hour;
    }
    
    return (newHour + time);
};