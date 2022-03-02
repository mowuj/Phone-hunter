// Shearch Phone Text
const searchPhone = () => {
    const searcField = document.getElementById('search-field');
    const searchText = searcField.value;

    toggleSpinner('block');
    toggleSearchResult('none');
    searcField.value = '';
    searcField.textContent = '';
    
    // Search Data 
    const url=`https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
    .then(res=>res.json())
        .then(data => displayPhone(data.data.slice(0, 20)))
    
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
    const searchResult = document.getElementById('phone');
    const errorHandle = document.getElementById('error');
    searchResult.textContent = '';
    if (phones.length == 0) {
        console.log('no result')
        errorHandle.style.display = 'block'
        const div = document.createElement('div');
        div.classList.add('text-center');
        div.innerHTML = `<h3>No Result Found</h3> `;
        errorHandle.appendChild(div);
    }
    phones?.forEach(phone => {

        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100 rounded">
                <img src="${phone.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Brand:${phone.brand}</h5>
                    <h5 class="card-title">Phone Name:${phone.phone_name}</h5>
                    
                    
                </div>
                <button class="btn btn-primary" onclick="loadPhoneDetail('${phone.slug}')">Explore More</button>
            </div>
        `;

        searchResult.appendChild(div)
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
    const phoneDetails = document.getElementById('phone-detils');
    phoneDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
            <div class="row g-0 ">
                        <div class="col-md-6 p-5 d-flex flex-column justify-content-center align-items-center">
                            <div><img src="${phone.image}" class="img-fluid my-4 rounded-start" alt="..."></div>
                            <div>
                            <h5 class="card-title">Brand:${phone.brand}</h5>
                    <h5 class="card-title">Phone Name:${phone.name}</h5>
                    <h5 class="card-title">Slug:${phone.slug}</h5>
                    <h5 class="card-title">ReleaseDate:${phone.releaseDate?phone.releaseDate:'Not Avaiable Right Now'}</h5>
                    </div>
                    
                        </div>
                        <div class="col-md-6 my-3 ">
                            <div class="card-body">
                                <h5 class="card-title">Main Features</h5>
                                
                                
                                <p class="card-text">Storage:${phone.mainFeatures.storage}</p>
                                <p class="card-text">DisplaySize${phone.mainFeatures.displaySize}</p>
                                <p class="card-text">ChipSet:${phone.mainFeatures.chipSet}</p>
                                <p class="card-text">Memory:${phone.mainFeatures.memory}</p>
                                
                                <h5 class="card-title">sensors</h5>
                                <p class="card-text">${phone.mainFeatures.sensors[0]},
                                ${phone.mainFeatures.sensors[1]},
                                ${phone.mainFeatures.sensors[2]},
                                ${phone.mainFeatures.sensors[3]},
                                ${phone.mainFeatures.sensors[4]},
                                ${phone.mainFeatures.sensors[5]},
                                <h5 class="card-title">Others</h5>
                                <p>WLAN:${phone.others.WLAN},
                                <p>Bluetooth:${phone.others.Bluetooth}</p>
                                <p>GPS:${phone.others.GPS}</p>
                                <p>USB:${phone.others.USB}</p>
                                </p>
                                
                                </p>
                            </div>
                            
                        </div>
                    </div>`;
    phoneDetails.appendChild(div);
}
