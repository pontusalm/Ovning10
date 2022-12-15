
const fullUri=`https://deckofcardsapi.com/api/deck/new/draw/?count=1`;

function getDrawCard (){
    fetch (fullUri)
    .then (res => res.json())
    .then (data =>
        {
            imageArea.innerHTML=`<img src=${data.cards[0].images.png}>` 
        }) 
        .catch(err => console.log(err))
}
const getCharacterName= ()=>{
    getApi();
    // alert(`Got it`);
} 

const displayList= ()=>{
    const itemsRef=document.querySelector(`#itemsList`);
    itemsRef.innerHTML=``
    for (let item in itemsList)
    {
        const itemID=`itemCode`;
        itemsRef.innerHTML +=`
        <li id=${itemID}> ${itemsList[item]} </li>`
    }
}

