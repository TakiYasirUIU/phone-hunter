// search the  phone
const searchPhone = () => {
    const searchField = document.getElementById('phone-search-field');
    const searchText = searchField.value ;
    // error handling 
    const errorHandlingNoData = document.getElementById('error-nodata');
    if(searchText == 0){
        errorHandlingNoData.style.display = 'block';
    }
    else{
        errorHandlingNoData.style.display = 'none';

    }
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
    const phoneDetailsClear = document.getElementById('phone-details');

    // clear single phone details data 
    phoneDetailsClear.textContent = '';
    // clear phone display data 
    searchResult.textContent = '';
    
    // error handling phones 
    const errorHandlingNoData = document.getElementById('error-nodata');
    if(phones.length == 0){
        errorHandlingNoData.style.display = 'block';
    }
    else{
        errorHandlingNoData.style.display = 'none';

    }
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
    // console.log(phoneId);
    const url = ` https://openapi.programming-hero.com/api/phone/${phoneId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhoneDetail(data.data));

}
    


// display single phone detail 
 const displayPhoneDetail = phone => {
    //  console.log(phone);
    const phoneDetails = document.getElementById('phone-details');
    // clear single phone details data 
    phoneDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${phone.image}" class="card-img-top w-50 detail-image-margin" alt="...">
    <div class="card-body text-center">
        <h3 class="card-title">phone Name: ${phone.name}</h3>
        <h5 class="card-title">release: ${phone.releaseDate}</h5>
        
        <h4 class ="mt-2 text-decoration-underline">Main Features :</h4>
        <div class= "text-start feature-margin-left mb-2">
        <p class="card-text">Storage: ${phone.mainFeatures.storage}</p>
        <p class="card-text">Display: ${phone.mainFeatures.displaySize}</p>
        <p class="card-text">Chipset: ${phone.mainFeatures.chipSet}</p>
        <p class="card-text"> Memory: ${phone.mainFeatures.memory}</p>
        <p class="card-text">Sensors: ${phone.mainFeatures.sensors}</p>
        </div>
        
        <h4 class ="mt-2 text-decoration-underline">Others :</h4>
        <div class= "text-start feature-margin-left mb-2" >
        <p class="card-text">Bluetooth: ${phone.others.Bluetooth}</p>
        <p class="card-text">  GPS: ${phone.others.GPS}</p>
        <p class="card-text">  NFC: ${phone.others.NFC}</p>
        <p class="card-text">Radio: ${phone.others.Radio}</p>
        <p class="card-text">  USB: ${phone.others.USB}</p>
        <p class="card-text">  WLAN: ${phone.others.WLAN}</p>
        </div>
        
    </div>
    `;
    phoneDetails.appendChild(div);
 }