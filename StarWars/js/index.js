
// let itemsList=[]


const fullUri=`https://www.swapi.tech/api/people/?name=`;

function getApi (name){
    
    fetch (`${fullUri}${name}`)
    .then (res => res.json())
    .then (data =>
        {
            infoArea.innerHTML=`<div>
            <h5>Height: ${data.result[0].properties.height}</h5>
            <h5>Mass: ${data.result[0].properties.mass}</h5>
            <h5>Gender: ${data.result[0].properties.gender}</h5>
            <h5>Hair color: ${data.result[0].properties.hair_color}</h5>
        </div>`; 
            return data;
        })
        .catch(err => console.log(err))
}

const giveMeInfo=document.querySelector("#giveMeInfo");
const inputStarWarPerson=document.querySelector("#starWarPerson");
giveMeInfo.addEventListener("click",()=>{
    const data = getApi(inputStarWarPerson.value);
    // alert(`Got it`);
});

  