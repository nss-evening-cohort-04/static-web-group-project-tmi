var products = document.getElementById("products");
var tripSection = [
{price:"$100", description:"This package is for the real adventurous type that doesn't really plan well. Comes complete with the Family Truckster. Dirt jump not included.", image:"img/vacation1.jpg"},
{price:"$200", description:"This package is for those of you that have a family member that you'd like to take out to the middle of nowhere and leave for dead. Staple gun included. ", image:"img/vacation2.jpg"},
{price:"$300", description:"This is for the family that does everything together. Whatever that may be. To be honest you should probably look elsewhere to plan  trip", image:"img/vacation3.jpg"},
{price:"$400", description:"This package is basically for the boring peeps that like to stand around in front of fountains and look at the stars.", image:"img/vacation4.jpg"},
{price:"$400", description:"This package is for the family that likes to go on vacation and disregard any responsibility or morals they may have.", image:"img/vacation5.png"},
{price:"$400", description:"This package is for the family that wants to forget who they are. Package includes fake id and the super spa treatment.", image:"img/vacation6.png"},
{price:"$400", description:"At this point in time, TMI Travel has given you enough information. You can tell us how to build your trip and we'll make it happen", image:"img/vacation7.png"},
{price:"$400", description:"At this point in time, TMI Travel has given you enough information. You can tell us how to build your trip and we'll make it happen", image:"img/vacation7.png"},
{price:"$400", description:"At this point in time, TMI Travel has given you enough information. You can tell us how to build your trip and we'll make it happen", image:"img/vacation7.png"}
];



for (var i = 0; i < tripSection.length; i++) {
  var destinationCard = "";
  destinationCard += "<div class='destinationCard'><img class='cardImg' src='"+tripSection[i].image+"'><p>"+(tripSection[i].price)+"</p><p>"+(tripSection[i].description)+"</p><p>"+"</p></div>";
  products.innerHTML += destinationCard

  console.log()
}
