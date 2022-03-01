// Shearch Phone Text
const searchPhone = () => {
    const searcField = document.getElementById('search-field');
    const searchText = searcField.value;
    toggleSpinner('block');
    toggleSearchResult('none');
    searcField.value = '';
    // if (searcField == '') {
        
    // }
    // Search Data 
    const url=`https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayPhone(data.data))
}
// Spinner 
const toggleSpinner = displayStyle => {
    document.getElementById('spinner').style.display=displayStyle;
}
const toggleSearchResult = displayStyle => {
    document.getElementById('phones').style.display=displayStyle;
}
// Display Search Phone 
const displayPhone = phones => {
    // console.log(phones)
    const container = document.getElementById('phone');
    container.textContent = '';
    phones.forEach(phone => {
        // console.log(phone.slug)
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
                <img src="${phone.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${phone.brand}</h5>
                    <h5 class="card-title">${phone.phone_name}</h5>
                    <h5 class="card-title">${phone.slug}</h5>
                </div>
                <button onclick="loadPhoneDetail('${phone.slug}')">More Info</button>
            </div>
        `
        // console.log(phone.slug)
        container.appendChild(div)
    });
    toggleSpinner('none');
    toggleSearchResult('block')
}
// More Details 
const loadPhoneDetail = phoneId => {

    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhoneDetails(data.data))
}
// display More Info 
const displayPhoneDetails = phone => {
    console.log(phone)
    const phoneDetails = document.getElementById('phone-detils');
    phoneDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${phone.slug}</h5>
                <h5 class="card-title">${phone.brand}</h5>
                <h5 class="card-title">${phone.name}</h5>
                <h5 class="card-title">${phone.releaseDate}</h5>
                <button onclick="loadPhoneMoreDetail('${phone.slug}')">More Info</button>
            </div>`;
    phoneDetails.appendChild(div)

}
// Other Info 
const loadPhoneMoreDetail = phoneId => {

    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhoneMoreDetails(data.data))
}
// Display Other Info 
const displayPhoneMoreDetails = phone => {
    console.log(phone)
    const phoneMoreDetails = document.getElementById('more_details');
    phoneMoreDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('col-md-8');
    div.innerHTML = `
            <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${phone.image}" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Phone Info</h5>
                                
                                <p class="card-text">Brand:${phone.brand}</p>
                                <p class="card-text">${phone.mainFeatures.storage}</p>
                                <p class="card-text">${phone.mainFeatures.displaySize}</p>
                                <p class="card-text">${phone.mainFeatures.chipSet}</p>
                                <p class="card-text">${phone.mainFeatures.memory}</p>
                            </div>
                            <button onclick="loadOtherDetail('${phone.slug}')">More Info</button>
                        </div>
                    </div>
`;
    phoneMoreDetails.appendChild(div)

}
const loadOtherDetail = phoneId => {

    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayOtherDetails(data.data))
}
const displayOtherDetails = phone => {
    console.log(phone)
    const otherDetails = document.getElementById('other_details');
    otherDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('col-md-8');
    div.innerHTML = `
            <div class="row g-0">
                        <div class="col-md-6">
                            <img src="${phone.image}" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-6">
                            <div class="card-body">
                                <h5 class="card-title">Phone Info</h5>
                                <p class="card-text">Brand:${phone.brand}</p>
                                <p class="card-text">${phone.mainFeatures.sensors[0]}</p>
                                <p class="card-text">${phone.mainFeatures.sensors[1]}</p>
                                <p class="card-text">${phone.mainFeatures.sensors[2]}</p>
                                <p class="card-text">${phone.mainFeatures.sensors[3]}</p>
                                <p class="card-text">${phone.mainFeatures.sensors[4]}</p>
                                <p class="card-text">${phone.mainFeatures.sensors[5]}</p>
                                <h5 class="card-title">Other Info</h5>
                                <p class="card-text">${phone.others.WLAN}</p>
                            </div>
                            <button onclick="loadOtherDetail('${phone.slug}')">More Info</button>
                        </div>
                    </div>
`;
    
    otherDetails.appendChild(div)
}