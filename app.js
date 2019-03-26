const argv = require ('./Config/yargs-config').argv   
const {getLatLng, getTemperature} = require('./Places-n-Weather/places-n-weather.js');

//Color
const colors = require('colors');

//Spinner
const { LogFrame } = require('log-frame');
const { Spinner } = require('logf-spinner');

const spinner = new Spinner('weather');
const frame =  new LogFrame();



const location = argv.temp;

const getData = async () =>{

    const result = await getLatLng(location);
    
    const data = await getTemperature(result.lat, result.lon, result.name);

    console.log(`The temperature of ${ result.name } is: `.cyan, colors.bgBlue(data) + '°C'.bgBlue);

}

getData()
    .then (() => {
        frame.view = spinner; 
        spinner.text = 'Congrats, now you know the weather... :) \n'.green;
        spinner.start(); 
        setTimeout (() => spinner.stop(), 3000);
        
        })
    .catch(err => console.log('ERROR'.red, colors.yellow(err.message)));
