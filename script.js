var res = fetch("https://jsonplaceholder.typicode.com/users");
res.then((data) => data.json()).then((value) => bar(value))
var row = document.getElementById("row");

var container = document.createElement("div");
container.className = "container"
var row = document.createElement("div");
row.className = "row"
container.append(row);

function bar(value) {
  console.log(value)
  for (var i = 0; i < value.length; i++) {
    row.innerHTML += `
    <div class="col-md-4"> 
    <div class="card text-bg-info mb-3" style="max-width: 350px;"><div class="card-body">
  <h5 class="card-title"><h5><b>Name:${value[i].name}</b></h5>
  
    <h5 class="card-title">Email:${value[i].email}</h5>
    <h5 class="card-title"> Street:${value[i].address.street}</h5>
    <h5 class="card-title">City:${value[i].address.city}</h5>
  
</div>
  </div>`







  }
  document.body.append(container)
}