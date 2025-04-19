function countMinutesToNewYear() {
  const now = Date.now();
  const newYear = new Date("2026-01-01T00:00:00.000Z");
  console.log(now);
  console.log(newYear.getTime());
  console.log((newYear.getTime() - now) / (1000 * 60 * 60 * 24));
  
}
countMinutesToNewYear();
