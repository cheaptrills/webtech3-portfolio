class Weather{
    constructor(API_KEY){
        this.API_KEY = API_KEY;
        this.initialize();
    } 
 
 initialize() {
     this.getMyLocation();
     //this.getPokemon();
 }
 getMyLocation(){
   //console.log("get location"); 
   navigator.geolocation.getCurrentPosition(position => {
     //console.log("found you");
     //console.log (position);
     let lat = position.coords.latitude;
     let long = position.coords.longitude;
 
     this.getWeather(lat, long);
   }, err => {
     console.log(err);
   });
 }
 getWeather(lat, long){
     let url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${this.API_KEY}/${lat},${long}?units=si`;
     fetch(url)
     .then(Response =>{
         return Response.json();
     })
     .then(json =>{
         let temp = document.createElement("h1");
         temp.innerHTML = `Today is ${json.currently.summary} at your location`;
         document.querySelector("body").appendChild(temp);
         let summ = json.currently.summary;
         this.getNumber(summ);
     });
 }
 
 getNumber(summ){
    console.log(summ);
    var type = "";
    if (summ.indexOf("Breezy" )!= -1||summ.indexOf("Windy" )!= -1||summ.indexOf("Flurries" )!= -1) {
        type = "1";
        document.body.style.backgroundColor = "lightblue";
    }
    else if(summ.indexOf("Drizzle" )!= -1||summ.indexOf("Overcast" )!= -1 ){
        type = "2";
        document.body.style.backgroundColor = "lemongreen";
    }
    else if(summ.indexOf("Rain" )!= -1){
        type = "3";
        document.body.style.backgroundColor = "lightblue";
    }
    else if(summ.indexOf("sun" )!= -1){
        type = "4";
        document.body.style.backgroundColor = "orange";
    }
    else if(summ.indexOf("Storm" )!= -1){
        type = "5";
        document.body.style.backgroundColor = "red";
    }
    if(summ.indexOf("Clear")!= -1|| summ.indexOf("Humid")!= -1){
        type = "6";
        document.body.style.backgroundColor = "lightbrown";
    }
    let url = `https://rickandmortyapi.com/api/character/=${number}`;
        fetch(url)
        .then(Response =>{
            return Response.json();
        })
        .then(json =>{
            json.cards = json.cards.map(x => x.imageUrl);
            console.log(json.cards);
            for(let index = 0; index < json.cards.length; ++index){
                document.querySelector("body").innerHTML += `<img src="${json.cards[index]}"></img>`;
            }
        });
 } 
  
 }
 
 let app = new Weather('964a633d1ef98cb97f017557bb3702d1');