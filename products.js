var display = document.getElementById("products");
var items = [
{name:"Name", description:"description", img:"img/braco-horseriding-in-sea.jpg", price:"$200000000"},
{name:"Name", description:"description", img:"img/braco-horseriding-in-sea.jpg", price:"$200000000"},
{name:"Name", description:"description", img:"img/braco-horseriding-in-sea.jpg", price:"$200000000"},
{name:"Name", description:"description", img:"img/braco-horseriding-in-sea.jpg", price:"$200000000"},

];

for (var i = 0; i < items.length; i++) {
  display.innerHTML += "<img src='"+items[i].img+"'>";
  display.innerHTML+="<p>"+(items[i].name)+"</p>";
  display.innerHTML+="<p>"+(items[i].description)+"</p>";
  display.innerHTML+="<p>"+(items[i].price)+"</p>";
}

