var ham = document.querySelector('.hamburger')
let active = false;

ham.addEventListener('click', ()=>{
    var menu = document.querySelector('.onPhone nav ul')
    var searchBar = document.querySelector('.logo')
    if(active){
        menu.style.top = '-100%'
        searchBar.style.display = 'none'
        active = false;
    }
    else{
        menu.style.top = '60px'
        searchBar.style.display = 'flex'
        active = true;
    }
})


var buttons = document.querySelectorAll('.onPhone nav ul li a')

buttons.forEach(element => {
    element.addEventListener('click', ()=> {
        var menu = document.querySelector('.onPhone nav ul')
        var searchBar = document.querySelector('.logo')

        menu.style.top = '-100%'
        searchBar.style.display = 'none'
        active = false;
    })
});

// search bar js


// Get references to the search input and button
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

// Add an event listener to the search button
searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === "home") {
      window.location.href = "index.html";
    } else if (searchTerm === "about") {
      window.location.href = "about.html";
    } else if (searchTerm === "music") {
      window.location.href = "music.html";
    } else if (searchTerm === "contact") {
      window.location.href = "contact.html";
    } else {
      alert("Page not found!");
    }
  });

