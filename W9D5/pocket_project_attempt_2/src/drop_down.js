
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};


function dogLinkCreator(){
  return Object.entries(dogs).map( (dog)=>{

    let li = document.createElement("li");
    li.classList.add("dog-link"); 
    let a = document.createElement("a");
    a.innerHTML = dog[0];
    a.href = dog[1]; 
    li.appendChild(a);
    return li;
  }); 
}

function attachDogLinks(){
  const dropDown = document.querySelector(".drop-down-dog-list"); 
    dropDown.classList.add('hidden');
    dogLinkCreator().forEach( link =>{
    dropDown.appendChild(link); 
  }); 

}
attachDogLinks(); 

let dogLinkBar = document.querySelector(".drop-down-dog-nav"); 
dogLinkBar.addEventListener("mouseenter", handleEnter);
dogLinkBar.addEventListener("mouseleave", handleLeave);

 
function handleEnter(){
  document.querySelector('.drop-down-dog-list').classList.remove('hidden'); 
}

function handleLeave(){
  document.querySelector('.drop-down-dog-list').classList.add('hidden'); 
}