function countDayLive(){
    const now = Date.now();
    const lastYear = new Date("2003-08-30T00:00:00.000Z")
    console.log(lastYear.getTime());
    console.log(now);
    
    console.log((now - lastYear.getTime()) / (1000 * 60 * 60 * 24));
    
}
countDayLive()