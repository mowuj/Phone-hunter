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
    .then(data=>displayPhone(data.data))
    // console.log(url)
}

