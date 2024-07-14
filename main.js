var nvWidth = 0, isTrue = !0;
var row = document.querySelector('.row')
var row2 = document.getElementById('row2')
var s_results = document.querySelector('.s_results')
var cust_btn = document.getElementById('cust_btn')
//sidebar
$(".strip-toggel-menu").click(function () {
    isTrue ? ($(".nav-tab-menu").addClass("open-menu").removeClass("close-menu"), nvWidth = $(".nav-tab-menu").width() - 10, $(".strip-header-nav").css("left", nvWidth), $(".fa-align-justify").toggleClass("fa-times"), $(".nav-tab-menu .item1").animate({
        opacity: "1",
        paddingTop: "25px"
    }, 1100), $(".nav-tab-menu .item2").animate({
        opacity: "1",
        paddingTop: "25px"
    }, 1200), $(".nav-tab-menu .item3").animate({
        opacity: "1",
        paddingTop: "25px"
    }, 1300), $(".nav-tab-menu .item4").animate({
        opacity: "1",
        paddingTop: "25px"
    }, 1400), $(".nav-tab-menu .item5").animate({
        opacity: "1",
        paddingTop: "25px"
    }, 1500), $(".nav-tab-menu .item6").animate({
        opacity: "1",
        paddingTop: "25px"
    }, 1600), isTrue = !isTrue) : ($(".nav-tab-menu").addClass("close-menu").removeClass("open-menu"), $(".fa-align-justify").toggleClass("fa-times"), $(".strip-header-nav").css("left", 0), $(".nav-tab-menu li").animate({
        opacity: "0",
        paddingTop: "500px"
    }, 500), isTrue = !isTrue)
});
// //show data in home page
homebtn = document.getElementById('home')
homebtn.addEventListener('click', () => {
    fetchRandom()
})
async function fetchRandom() {
    const baseURL = `https://www.themealdb.com/api/json/v1/1/search.php?s=`;
    const response = await fetch(baseURL);
    const RandomData = await response.json();
    displayRandom(RandomData.meals)
    // console.log(data);
}
document.addEventListener('DOMContentLoaded', () => {
    fetchRandom()
})

function displayRandom(results) {
    let box = '';
    results.map(results => {
        box += `<div class="col-sm-6 col-md-3">
        <div class="post">
        <img src="${results.strMealThumb}" alt="" class="w-100">
        <div class="overlay">
        <a class="post-title" href="${results.strSource}" target="_blank">${results.strMeal}</a>
        </div>
        </div>
        </div>`})
    row.innerHTML = box;
}



//meals popup

// function popup() {
//     console.log('click');
//     $(document).on("click", "#cust_btn", function () {
//         $("#myModal").modal("toggle");
//     })
// }


//search
searchbtn = document.getElementById('search');
searchbtn.addEventListener('click', () => {
    search()
})
function search() {
    let box = `<div class="col-sm-6">
        <input type="text" id="search-input-name" class="form-control text-info mb-2"
            placeholder="Search by Name" autofocus>
    </div>
    <div class="col-sm-6">
        <input type="text" id="search-input-letter" class="form-control text-info mb-2"
            placeholder="Search by letter" maxlength="1" autofocus>
    </div>`
    row.innerHTML = box;
    var SearchByNameInput = document.getElementById('search-input-name')
    SearchByNameInput.addEventListener("keyup", () => {
        searchQuery = document.getElementById("search-input-name").value;
        FetchByName();
    });
    var SearchByNameLetter = document.getElementById('search-input-letter')
    SearchByNameLetter.addEventListener("keyup", () => {
        searchQuery = document.getElementById("search-input-letter").value;
        FetchByLetter();
    });
}

async function FetchByName() {
    const baseURL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`;
    const response = await fetch(baseURL);
    const Data = await response.json();
    displaySearch(Data.meals)
    results = [];
}

async function FetchByLetter() {
    const baseURL = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchQuery}`;
    const response = await fetch(baseURL);
    const Data = await response.json();
    displaySearch(Data.meals)
}

function displaySearch(results) {
    let box = '';
    results.map(results => {
        console.log('clicked');
        box += `<div class="col-sm-6 col-md-3 m-1">
        <div class="post">
        <img src="${results.strMealThumb}" alt="" class="w-100">
        <div class="overlay">
        <a class="post-title" href="${results.strSource}" target="_blank">${results.strMeal}</a>
        </div>
        </div>
        </div>`})
    row2.innerHTML = box;
}

//Catagories
// categoriesbtn = document.getElementById('categories')
// categoriesbtn.addEventListener('click', () => {
//     FetchCatagory()
// })

// async function FetchCatagory() {
//     const baseURL = `https://www.themealdb.com/api/json/v1/1/list.php?c=list`;
//     const response = await fetch(baseURL);
//     const Data = await response.json();
//     displayCatagory(Data.meals)
// }

// function displayCatagory(results) {
//     let box = '';
//     for (var i = 0; i < results.length; i++) {
//         box += `<div class="col-sm-6 col-md-3 m-1">
//         <div onclick="filterByCategory('${results[i].strCategory}')"class="post">
//             <img src='${results[i].strCategoryThumb}' alt="" class="w-100">
//             <div class="overlay">
//                 <a class="post-title">${results[i].strCategory}</a>
//             </div>
//         </div>
//     </div>
//     </div>`}
//     row.innerHTML = box;
// }

// async function filterByCategory(category) {
//     const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
//     const Data = await response.json()
//     displayCatagory(Data.meals)
// }

