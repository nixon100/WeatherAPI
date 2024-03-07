let api = "https://restcountries.com/v3.1/all"
let fetching = fetch(api)
.then((res)=>res.json())
.then((data) => {

data.map((ele)=>{
let countryEle={
    name: ele.name.common,
    capital:ele.capital,
    region:ele.region,
    flag:ele.flags.png,
    country_codes:ele.cioc,
    latitude:ele.latlng[0],
    longitude:ele.latlng[1]
}

countrytag(countryEle);
// console.log(countryEle);
})
})

function countrytag (countryEle){

const card = document.createElement("div");
card.className = "card";
card.style.width = "18rem";

const img = document.createElement("img");
img.className = "card-img-top";
img.alt = "...";
img.src = countryEle.flag;

const cardBody = document.createElement("div");
cardBody.className = "card-body";

const h5 = document.createElement("h5");
h5.className = "card-title";
h5.textContent = countryEle.name;

const p1 = document.createElement("p");
p1.className = "card-text";
p1.innerHTML = `<span>Region :</span>${countryEle.region}`;

const p2 = document.createElement("p");
p2.className = "card-text";
p2.innerHTML = `<span>Capital :</span>${countryEle.capital}`;

const p3 = document.createElement("p");
p3.className = "card-text";
p3.innerHTML = `<span>Latitude :</span>${countryEle.latitude}`;

const p4 = document.createElement("p");
p4.className = "card-text";
p4.innerHTML = `<span>Longitude :</span>${countryEle.longitude}`;

const p5 = document.createElement("p");
p5.className = "card-text";
p5.innerHTML = `<span>Country Code :</span>${countryEle.country_codes}`;

const a = document.createElement("a");
  a.className = "btn btn-primary";
  a.href = "#";
  a.textContent = "Click for Weather";
  a.onclick = () => wetherApi(countryEle.latitude, countryEle.longitude, countryEle.name);

  cardBody.appendChild(h5);
  cardBody.appendChild(p1);
  cardBody.appendChild(p2);
  cardBody.appendChild(p3);
  cardBody.appendChild(p4);
  cardBody.appendChild(p5);
  cardBody.appendChild(a);

  card.appendChild(img);
  card.appendChild(cardBody);

  document.body.appendChild(card);
 
}

function wetherApi(lat,lon,name) {
  console.log(lat,lon)
  const api2 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b8072b3f4b8697d7f188229f1fb7ece9`
  console.log(name)
   fetch(api2)
   .then((res)=>res.json())
   .then((data)=>{
    console.log(data);
    alert(
      `      ${name}  
      Current Humidity :${data.main.humidity}
      Current Pressure :${data.main.pressure}  
      Current Temperature :${data.main.temp}
    ` ) })
}

document.addEventListener('click', (event)=>event.preventDefault())



