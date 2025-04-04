const animails = ["dog", "cat", "mouse", "viruss", "dom dom"];

animails.forEach((item, index, array) => console.log(item));

function printAnimal(animails) {
  let content = `<table  border = 1>
        <thead>
            <tr>
                <th>Id</th>
                <th>Tên</th>
            </tr>
        </thead>
        <tbody>`;
  Array.isArray(animails) && 
    animails.forEach((item, index, array) => {
      console.log(item);
      content += `<tr>
                <td>${index}</td>
                <td>${item}</td>
            </tr>`;
    });
  content += `</tbody>
    </table>`;
  document.write(content);
}
printAnimal(animails);
