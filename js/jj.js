const searchPhone = () => {
    const searcField = document.getElementById('search-field');
    const searchText = searcField.value;
    // console.log(searchText);
    searcField.value = '';
    // if (searcField == '') {
        
    // }
    const url=`https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayPhone(data.data[1]))
    // console.log(url)
}

const displayPhone = phones => {
    // console.log(phones)
    const container = document.getElementById('phone');
    // container.textContent = '';
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
    
}

// const loadPhoneDetail = phoneId => {
//     const searcField = document.getElementById('search-field');
//     const searchText = searcField.value;
//     // console.log(searchText);
//     // searcField.value = '';
//     // if (searcField == '') {
        
//     // }
//     const url=`https://openapi.programming-hero.com/api/phones?search=${searchText}`
//     // console.log(phoneId)
//     fetch(url)
//         .then(res => res.json())
//         .then(data => {
//             const allPhone = data.data;
//             const singlePhone = allPhone.find(phone => phone.slug === phoneId)
//             console.log(singlePhone)
//         });

// }
const loadPhoneDetail = phoneId => {

    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data.data[1]))
}
const displayPhoneDetails = phone => {
    console.log(phone)
    const phoneDetails = document.getElementById('phone-detils');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${phone.image}</h5>
                <h5 class="card-title">${phone}</h5>
                
            </div>`;
    phoneDetails.appendChild(div)

}