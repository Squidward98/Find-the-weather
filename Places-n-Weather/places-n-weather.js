const axios = require ('axios'); 
const colors = require('colors');

const getLatLng = async direction => {
    
    const location = encodeURI(direction);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${location}`,
        headers: {'X-RapidAPI-Key': 'YrIv9XHJxmmshCBitpg1YTAnahQSp1KbdHhjsnSBU1hvMDMlzK'}
        });


    const response = await instance.get();

    if(response.data.Results.length === 0){
        throw new Error ('Location not found'.red);    
    }

    const {name, lat, lon } = response.data.Results[0];
    
    return {
        name,
        lat,
        lon
    } 
}

const getTemperature = async (lat, lng, location) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=9233c05c5ade24a98079e0e7a9059bc0&units=metric`);
    const data = response.data.main.temp 
    return data;
}


module.exports = {
    getLatLng,
    getTemperature
}