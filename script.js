// Solving problems using array functions on rest countries data

// Get all the countries from Asia continent/region using Filter function
let asia = [];
let xhr = new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function(){
    const data = JSON.parse(xhr.response);
    asia = data.filter((a)=>{
        return a.region === 'Asia';
    }).map((a)=>{
        return a.name.common;
    }); 
    console.log(asia);
};

// Get all the countries with a population of less than 2 lakhs using Filter function
let countries = [];
let xhr1 = new XMLHttpRequest();
xhr1.open("GET","https://restcountries.com/v3.1/all");
xhr1.send();
xhr1.onload = function(){
    const data = JSON.parse(xhr1.response);
    countries = data.filter((p)=>{
        return p.population < 200000;
        }).map((p)=>{
        return p.name.common;
    });
    console.log(countries);
};

// Print the following details name, capital, flag, using forEach function

let xhr2 = new XMLHttpRequest();
xhr2.open("GET","https://restcountries.com/v3.1/all");
xhr2.send();
xhr2.onload = function(){
    const data = JSON.parse(xhr2.response);
    data.forEach(d => {
        console.log(`${d.name.common}, ${d.capital}, ${d.flag}`)
    });
};

// Print the total population of countries using reduce function

 let xhr3 = new XMLHttpRequest();
 xhr3.open("GET","https://restcountries.com/v3.1/all");
 xhr3.send();
 xhr3.onload = function(){
    const data = JSON.parse(xhr3.response);
    const population = data.reduce((t,p)=>{
        return t += p.population;
    },0);
        console.log(population);
}

// Print the country that uses US dollars as currency.

let currency = [];
let xhr4 = new XMLHttpRequest();
xhr4.open("GET","https://restcountries.com/v3.1/all");
xhr4.send();
xhr4.onload = function(){
    const data = JSON.parse(xhr4.response);
    currency = data.filter((c)=>{
        return c.currencies?.USD?.name === "United States dollar";
    }).map((c)=>{
        return c.name.common;
    });
    console.log(currency);
}
