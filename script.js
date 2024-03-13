// Solving problems using array functions on rest countries data

// XML Http Request:

let xhr = new XMLHttpRequest();
console.log(xhr);
xhr.open("GET","https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function(){
    const data = JSON.parse(xhr.response);
    for(i=0;i<this.length;i++){
    all.push(data[i]);
    }
    console.log(data);
};

let all = [];
console.log(all);
 
// Get all the countries from Asia continent/region using Filter function

const asia = all.filter((...a)=>{
        return a;
    });
console.log(asia);