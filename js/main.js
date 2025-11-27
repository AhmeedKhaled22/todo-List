let data = document.getElementById("floatingInput");
let btn = document.getElementById("addBtn");
let productContainer = [];
let mood = "create";
let tmp;
if (localStorage.getItem("displayData") == null) {
  productContainer = [];
} else {
  productContainer = JSON.parse(localStorage.getItem("displayData"));
  displayData();
}
let globalvar;
// add
function addTask() {
  let add = {
    name: data.value,
  };
  console.log(add);
  if (mood === "create") {
    productContainer.push(add);
  } else {
    productContainer[tmp] = add;
    mood = "create";
    btn.innerHTML = "addData";
  }
  displayData();
  localStorage.setItem("displayData", JSON.stringify(productContainer));
  clear();
}
// data
function displayData() {
  let da = "";
  for (let i = 0; i < productContainer.length; i++) {
    da += `
          <tr>
            <td>${productContainer[i].name}</td>
            <td><i class="fa-solid fa-pen" onclick=editData(${i})></i></td>
            <td><i class="fa-solid fa-trash text-danger" onclick="deletData(${i})"></i></td>
          </tr>
    `;
  }

  document.getElementById("demo").innerHTML = da;
}
// clear
function clear() {
  data.value = "";
}
// delet
function deletData(trim) {
  productContainer.splice(trim, 1);
  localStorage.setItem("displayData", JSON.stringify(productContainer));
  displayData();
}
// edit
function editData(i) {
  data.value = productContainer[i].name;
  btn.innerHTML = "update";
  mood = "update";
  tmp = i;
}
