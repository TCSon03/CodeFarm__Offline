const students = [
  { name: "An", score: 85, class: "A" },
  { name: "Binh", score: 90, class: "B" },
  { name: "Cuong", score: 88, class: "A" },
  { name: "Dung", score: 95, class: "B" },
  { name: "E", score: 80, class: "A" },
];
function groupAndExtract(arr, groupKey, extractKey) {
  return arr.reduce((acc, cur) => {
    console.log("cur-class: ", cur[groupKey]);
    
    if (!acc[cur[groupKey]]) {
      acc[cur[groupKey]] = [];
      acc[cur[groupKey]].push(cur[extractKey]);
      console.log(acc[cur[groupKey]]);
      
    }
    else{
        acc[cur[groupKey]].push(cur[extractKey]);
    }
    // console.log("cur-name: ", cur[extractKey]);

    return acc;
  }, {});
}

console.log(groupAndExtract(students, "class", "name"));
