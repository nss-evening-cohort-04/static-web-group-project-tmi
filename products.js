var products = document.getElementById("products");
var tripSection = [
{name:"Name", description:"Lorem lean startup ipsum product market fit customer development acquihire technical cofounder. User engagement A/B testing shrink a market venture capital pitch deck. Social bookmarking group buying crowded market pivot onboarding freemium prototype ping pong. Early stage disruptive ecosystem community outreach dynamic location based strategic investor.", image:"img/vacation1.jpg", price:"$99"},
{name:"Name", description:"Lorem lean startup ipsum product market fit customer development acquihire technical cofounder. User engagement A/B testing shrink a market venture capital pitch deck. Social bookmarking group buying crowded market pivot onboarding freemium prototype ping pong. Early stage disruptive ecosystem community outreach dynamic location based strategic investor.", image:"img/vacation2.jpg", price:"$100"},
{name:"Name", description:"Lorem lean startup ipsum product market fit customer development acquihire technical cofounder. User engagement A/B testing shrink a market venture capital pitch deck. Social bookmarking group buying crowded market pivot onboarding freemium prototype ping pong. Early stage disruptive ecosystem community outreach dynamic location based strategic investor.", image:"img/vacation3.jpg", price:"$200"},
{name:"Name", description:"Lorem lean startup ipsum product market fit customer development acquihire technical cofounder. User engagement A/B testing shrink a market venture capital pitch deck. Social bookmarking group buying crowded market pivot onboarding freemium prototype ping pong. Early stage disruptive ecosystem community outreach dynamic location based strategic investor.", image:"img/vacation4.jpg", price:"$300"},
{name:"Name", description:"Lorem lean startup ipsum product market fit customer development acquihire technical cofounder. User engagement A/B testing shrink a market venture capital pitch deck. Social bookmarking group buying crowded market pivot onboarding freemium prototype ping pong. Early stage disruptive ecosystem community outreach dynamic location based strategic investor.", image:"img/vacation4.jpg", price:"$300"},
{name:"Name", description:"Lorem lean startup ipsum product market fit customer development acquihire technical cofounder. User engagement A/B testing shrink a market venture capital pitch deck. Social bookmarking group buying crowded market pivot onboarding freemium prototype ping pong. Early stage disruptive ecosystem community outreach dynamic location based strategic investor.", image:"img/vacation4.jpg", price:"$300"},
{name:"Name", description:"Lorem lean startup ipsum product market fit customer development acquihire technical cofounder. User engagement A/B testing shrink a market venture capital pitch deck. Social bookmarking group buying crowded market pivot onboarding freemium prototype ping pong. Early stage disruptive ecosystem community outreach dynamic location based strategic investor.", image:"img/vacation4.jpg", price:"$300"},
{name:"Name", description:"Lorem lean startup ipsum product market fit customer development acquihire technical cofounder. User engagement A/B testing shrink a market venture capital pitch deck. Social bookmarking group buying crowded market pivot onboarding freemium prototype ping pong. Early stage disruptive ecosystem community outreach dynamic location based strategic investor.", image:"img/vacation4.jpg", price:"$300"},
{name:"Name", description:"Lorem lean startup ipsum product market fit customer development acquihire technical cofounder. User engagement A/B testing shrink a market venture capital pitch deck. Social bookmarking group buying crowded market pivot onboarding freemium prototype ping pong. Early stage disruptive ecosystem community outreach dynamic location based strategic investor.", image:"img/vacation4.jpg", price:"$300"}
];



for (var i = 0; i < tripSection.length; i++) {
  var destinationCard = "";
  destinationCard += "<div class='destinationCard'><img class='cardImg' src='"+tripSection[i].image+"'><p>"+(tripSection[i].name)+"</p><p>"+(tripSection[i].description)+"</p><p>"+(tripSection[i].price)+"</p></div>";
  products.innerHTML += destinationCard

  console.log()
}
