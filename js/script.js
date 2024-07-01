fetch("https://restcountries.com/v3.1/all")
.then((response)=>response.json())
.then(data=>{
    console.log(data)
})
const cardContainer=document.createElement("div")
cardContainer.classList.add("container")
const title=document.createElement("h1")

title.textContent="Countries"
cardContainer.appendChild(title)
 const row=document.createElement("div")
 row.classList.add("row","g-3")
 cardContainer.appendChild(row)

 document.body.appendChild(cardContainer)
  fetch("https://restcountries.com/v3.1/all")
  .then((response)=>response.json())
  .then((data)=>
  {
    const card=document.querySelector(".row");
    for(let i=0;i<data.length;i++)
        {
            const name=data[i].name.common;
            const flags=data[i].flags.png; 
            const capital=data[i].capital;
            const region=data[i].region;
            const countryCode=data[i].cca3;
            const lat=data[i].latlng[0];
            const lon=data[i].latlng[1];

            const column=document.createElement("div")
            column.classList.add("col-sm-6","col-md-4")
            card.appendChild(column);

            const cardItem=document.createElement("div")
            cardItem.classList.add("card", "h-100")
            column.appendChild(cardItem);

            const cardHeader=document.createElement("div")
            cardHeader.classList.add("card-header")
            cardHeader.innerText=name;
            cardItem.appendChild(cardHeader);

            const img=document.createElement("img")
            
            img.classList.add("card-img-top")
            img.src=flags;
            img.alt="Card image cap";
            cardItem.appendChild(img);

            const cardBody=document.createElement("div")
            cardBody.classList.add("card-body","countryDetails")
            cardItem.appendChild(cardBody);

            const cardText=document.createElement("p")
            cardText.classList.add("card-text")
            cardText.innerHTML=`Capital: ${capital}<br>
              Region: ${region}<br>
              Country Code: ${countryCode}<br> 
              Latitude: ${lat}<br> 
              Longitude: ${lon}`;
              cardBody.appendChild(cardText);

              const button=document.createElement("button")
              button.classList.add("btn", "btn-primary","button")
              button.innerText="Click for Weather";
              button.addEventListener("click",()=>weather(capital,region,i))
              cardBody.appendChild(button);

              const weatherReport=document.createElement("div");
              weatherReport.id=`weatherReport${i}`;
              cardBody.appendChild(weatherReport);
                


        }
  }
    )
.catch((error)=>{
    console.log(error)
})
function weather(capital,region,i){
    const weatherReport=document.querySelector(`#weatherReport${i}`);
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${capital},${region}&appid=9e490ec817f11749a4e03f96ba02bbbb`)
    
    .then((response)=>response.json())
    .then((data)=>{
        
        weatherReport.innerHTML = `<span class="weather-report">${data.weather[0].description}</span>`;

    })
    .catch((error)=>
    console.log(error));
}
