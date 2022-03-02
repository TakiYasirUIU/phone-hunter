// search the  phone
const searchPhone = () => {
    const searchField = document.getElementById('phone-search-field');
    const searchText = searchField.value ;
    // console.log(searchText);
    searchField.value = '';
    const url = ` https://openapi.programming-hero.com/api/phones?search=${searchText}`;

    
    // fetch data 
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.data.slice(0,20)));
     
}

// display search search 

const displaySearchResult = phones => {
    const searchResult = document.getElementById('phone-search-result');
    phones.forEach(phone =>{
        // console.log(phone);
        const div = document.createElement('div');
        div.classList.add('col');
            div.innerHTML=`
        <div class="card h-100 mt-5 bg-light rounded-5 m-5">
            <img src="${phone.image}" class="card-img-top mb-3" alt="...">
            <div class="card-body text-center">
                <h5 class="card-title mt-3">Phone Name: ${phone.phone_name}</h5>
                <p class="card-text">Brand : ${phone.brand}</p>
                <a onclick="loadPhoneDetail('${phone.slug}')" class="btn btn-primary">See Details</a>
    </div>
            </div>
        </div>
        `;
        searchResult.appendChild(div);
        
    })

}

// load phone details

const loadPhoneDetail = phoneId => {
    console.log(phoneId);
    const url = ` https://openapi.programming-hero.com/api/phone/${phoneId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data.data));

}
    


// display single phone detail 
 /* const displayPhoneDetail = phone => {
     console.log(phone);
    const mealDetails = document.getElementById('meal-details');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${phone.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${phone.strMeal}</h5>
        <p class="card-text">${phone.strInstructions.slice(0, 150)}</p>
        <a href="${phone.strYoutube}" class="btn btn-primary">Go somewhere</a>
    </div>
    `;
    mealDetails.appendChild(div);
} */