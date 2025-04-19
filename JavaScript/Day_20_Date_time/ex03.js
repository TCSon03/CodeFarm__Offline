const now = new Date();
const day = now.getDate();
const month = now.getMonth() + 1;
const year = now.getFullYear();
console.log(day);
console.log(month);
console.log(year);
document.writeln(`Hôm nay Ngày ${day} Tháng ${month} Năm ${year} <hr>`);
document.writeln(`Hôm nay Ngày ${now.getDate()} Tháng ${now.getMonth() + 1} Năm ${now.getFullYear()}`);
// document.writeln("Hôm này Ngày: " + day)
