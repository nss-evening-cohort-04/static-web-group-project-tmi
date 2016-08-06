var first = document.getElementById("product1");
var num1 = [
{name:"Name", description:"description", image:"img/braco-horseriding-in-sea.jpg", price:"$200000000"},
];

var second = document.getElementById("product2")
var num2 = [
{name:"Name", description:"description", image:"img/braco-horseriding-in-sea-2.png", price:"$50"},
];

var third = document.getElementById("product3")
var num3 = [
{name:"Name", description:"description", image:"img/braco-horseriding-in-sea.jpg", price:"$499"},
];

var fourth = document.getElementById("product4")
var num4 = [
{name:"Name", description:"description", image:"img/braco-horseriding-in-sea.jpg", price:"$99"}
];

var fifth = document.getElementById("product1")
var num5 = [
{name:"Name", description:"description", image:"img/braco-horseriding-in-sea.jpg", price:"$99"}
];

var sixth = document.getElementById("product2")
var num6 = [
{name:"Name", description:"description", image:"img/braco-horseriding-in-sea.jpg", price:"$99"}
];

var seventh = document.getElementById("product3")
var num7 = [
{name:"Name", description:"description", image:"img/braco-horseriding-in-sea.jpg", price:"$99"}
];

var eigth = document.getElementById("product4")
var num8 = [
{name:"Name", description:"description", image:"img/braco-horseriding-in-sea.jpg", price:"$99"}
];

for (var i = 0; i < num1.length; i++) {
  first.innerHTML += "<img src='"+num1[i].image+"'>";
  first.innerHTML+="<p>"+(num1[i].name)+"</p>";
  first.innerHTML+="<p>"+(num1[i].description)+"</p>";
  first.innerHTML+="<p>"+(num1[i].price)+"</p>";
  console.log(first)
}

for (var i = 0; i < num2.length; i++) {
  second.innerHTML += "<img src='"+num2[i].image+"'>";
  second.innerHTML+="<p>"+(num2[i].name)+"</p>";
  second.innerHTML+="<p>"+(num2[i].description)+"</p>";
  second.innerHTML+="<p>"+(num2[i].price)+"</p>";
  console.log(second)
}

for (var i = 0; i < num3.length; i++) {
  third.innerHTML += "<img src='"+num3[i].image+"'>";
  third.innerHTML+="<p>"+(num3[i].name)+"</p>";
  third.innerHTML+="<p>"+(num3[i].description)+"</p>";
  third.innerHTML+="<p>"+(num3[i].price)+"</p>";
  console.log(third)
}
for (var i = 0; i < num4.length; i++) {
  fourth.innerHTML += "<img src='"+num4[i].image+"'>";
  fourth.innerHTML+="<p>"+(num4[i].name)+"</p>";
  fourth.innerHTML+="<p>"+(num4[i].description)+"</p>";
  fourth.innerHTML+="<p>"+(num4[i].price)+"</p>";
  console.log(fourth)
}

for (var i = 0; i < num5.length; i++) {
  fifth.innerHTML += "<img src='"+num5[i].image+"'>";
  fifth.innerHTML+="<p>"+(num5[i].name)+"</p>";
  fifth.innerHTML+="<p>"+(num5[i].description)+"</p>";
  fifth.innerHTML+="<p>"+(num5[i].price)+"</p>";
  console.log(fifth)
}
for (var i = 0; i < num6.length; i++) {
  sixth.innerHTML += "<img src='"+num6[i].image+"'>";
  sixth.innerHTML+="<p>"+(num6[i].name)+"</p>";
  sixth.innerHTML+="<p>"+(num6[i].description)+"</p>";
  sixth.innerHTML+="<p>"+(num6[i].price)+"</p>";
  console.log(sixth)
}
for (var i = 0; i < num7.length; i++) {
  seventh.innerHTML += "<img src='"+num7[i].image+"'>";
  seventh.innerHTML+="<p>"+(num7[i].name)+"</p>";
  seventh.innerHTML+="<p>"+(num7[i].description)+"</p>";
  seventh.innerHTML+="<p>"+(num7[i].price)+"</p>";
  console.log(seventh)
}
for (var i = 0; i < num8.length; i++) {
  eigth.innerHTML += "<img src='"+num8[i].image+"'>";
  eigth.innerHTML+="<p>"+(num8[i].name)+"</p>";
  eigth.innerHTML+="<p>"+(num8[i].description)+"</p>";
  eigth.innerHTML+="<p>"+(num8[i].price)+"</p>";
  console.log(eigth)
}

