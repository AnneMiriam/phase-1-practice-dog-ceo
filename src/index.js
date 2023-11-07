console.log('%c HI', 'color: firebrick')

// Starting code, on page load //
let dogList = [];
document.addEventListener('DOMContentLoaded', () => {
    getDogs();
    fetchBreeds();
    
});

let dogBreedList;

//  Challenge 1 Globals //
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const imgContainer = document.getElementById('dog-image-container');

//  Challenge 1 functions //
function getDogs(){
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(dogImg => {
        dogImg.message.forEach(dog => renderImg(dog));
    });
};
function renderImg(imgUrl) {
    const picture = document.createElement('img');
    picture.src = imgUrl;
    imgContainer.append(picture);
};

//  Challenge 2 & 3 Globals //
const breedURL = "https://dog.ceo/api/breeds/list/all";
const breedDropdown = document.getElementById('breed-dropdown');
const dogBreeds = document.getElementById('dog-breeds');

//  Challenge 2 functions //
function fetchBreeds() {
    fetch(breedURL)
    .then(resp => resp.json())
    .then(dogObj => {
        dogBreedList = Object.keys(dogObj.message);
        renderBreeds(dogBreedList)
    })
};

function renderBreeds(breedArr) {
    dogBreeds.innerHTML = ""
    breedArr.forEach(makeListItem)
}
function makeListItem(dogName) {
    // console.log(dogName);
    const breedList = document.createElement('li');
    breedList.textContent = dogName;
    dogBreeds.appendChild(breedList);
    breedList.addEventListener('click', highlight);
   
}
function highlight(name){
    name.target.style.color = "purple";
    // if (name.target.style.color === "purple"){
    //     name.target.style.color = "black"
    // } else {
    //     name.target.style.color = "purple"
    // }
    let nameColor = name.target.style.color;
    if (nameColor === "purple"){
        nameColor.className.remove("activate-color")                      
    } else {
        nameColor.className.add("activate-color");
    }
}

//  Challenge 4 - use drop down to see select breeds by first letter
breedDropdown.addEventListener('change', (e) => {
    console.log(e.target.value);
    renderBreeds(dogBreedList.filter(str => str.startsWith(e.target.value)))
    




    // const chooseBreeds = (array, letter) => {
    //     letter = letter.toLowerCase();
    //     return array.filter(breed => breed.toLowerCase().startsWith(letter));
    // }
    // console.log(chooseBreeds);
})
