var products = document.getElementById("products");
var tripSection = [
{name:"Name", description:"description", image:"img/horseriding.jpg", price:"$99"},
{name:"Name", description:"description", image:"img/images.jpg", price:"$100"},
{name:"Name", description:"description", image:"img/images-1.jpg", price:"$200"},
{name:"Name", description:"description", image:"img/images-2.jpg", price:"$300"},
{name:"Name", description:"description", image:"img/images-3.jpg", price:"$400"},
{name:"Name", description:"description", image:"img/images-4.jpg", price:"$500"},
{name:"Name", description:"description", image:"img/images-5.jpg", price:"$600"},
{name:"Name", description:"description", image:"img/images-6.jpg", price:"$700"}
];



for (var i = 0; i < tripSection.length; i++) {
  var destinationCard = "";
  destinationCard += "<div class='destinationCard'><img class='cardImg' src='"+tripSection[i].image+"'><p>"+(tripSection[i].name)+"</p><p>"+(tripSection[i].description)+"</p><p>"+(tripSection[i].price)+"</p></div>";
  products.innerHTML += destinationCard

  console.log()
}
