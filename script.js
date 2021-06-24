const searchBtn = document.getElementById('search-btn');
const cookieList = document.getElementById('cookie');
const cookieCloseBtn = document.getElementById('cookie-close-btn');
const cookieDetailsContent = document.querySelector('.cookie-details-content');

searchBtn.addEventListener('click',getCookieList);

     function getCookieList(){
    let searchInputTxt =document.getElementById('search-input').value.trim();
    // searchInputTxt=fetch('https://www.fnp.com/cakes')
     fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
    //  var myRequest = new Request('https://www.findbanquet.com/services/bakery?page=3.php');
    //  fetch(`https://www.findbanquet.com/services/bakery?page=3.php?i=${searchInputTxt}`)
        //searchInputTxt
        .then(response => response.json())
        .then(data => {
           // console.log(data);
           let html = "";
           if(data.meals){
                data.meals.forEach(cookie => {
                    html += `
                    <div  class = "cookie-item" data-id = "${cookie.idMeal}">
                    <div class = "cookie-img">
                        <img src = "${cookie.strMealThumb}" alt = "food">
                    </div>
                    <div class = "cookie-name">
                        <h3>${cookie.strMeal}</h3>
                        <a href = "#" class = "recipe-btn">click here</a>
                    </div>
                </div>
                   `;
                                       
                });
                // cookieList.innerHTML= html;
           }
        cookieList.innerHTML= html;

    });
}

