class Weather{
    constructor(API_KEY){
        this.API_KEY = API_KEY;
        this.initialize();
    } 
 
 initialize() {
     this.getMyLocation();
     this.getCharacter();
 }
 getMyLocation(){
   //console.log("get location"); 
   navigator.geolocation.getCurrentPosition(position => {
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
     });
 }
 
 getCharacter(){
    
    var characterId = Math.floor((Math.random() * 349) + 1);
    let url = `https://rickandmortyapi.com/api/character/${characterId}`;
        fetch(url)
        
        .then(Response =>{
            return Response.json();
            console.log("json");
        })
        .then(json =>{
            console.log(json);
                document.querySelector("body").innerHTML += `<img src="${json.image}"></img>`;
        });
 } 
  
 }
 
 let app = new Weather('964a633d1ef98cb97f017557bb3702d1');

