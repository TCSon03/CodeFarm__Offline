function clock() {
  const now = new Date();
  const hour = String(now.getHours()).padStart(2, "0")
  const mimute = String(now.getMinutes()).padStart(2, "0")
  const secon = String(now.getSeconds()).padStart(2, "0")
  const timeNow = `${hour}:${mimute}:${secon}`
  // console.log(timeNow);
  document.querySelector('#clock').innerHTML = timeNow
}

setInterval(clock, 1000);