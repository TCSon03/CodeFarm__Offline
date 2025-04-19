setInterval(() => {
  let newHour = new Date();
  document.close();
  document.write(
    newHour.getHours() + ":" + newHour.getMinutes() + ":" + newHour.getSeconds()
  );
}, 1000);

window.getHours()
