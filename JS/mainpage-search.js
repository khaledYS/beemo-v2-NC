// // search engine ||  created by me *-*)
// all leciense are reserved to my website beemo
// my hate for google custome search engine has been gone so far 
// starting from that u need to publish your website
// and waiting until google index it 
// and if its a big website and having a lot of files 
// then u will need to wait maybe a decate 
// or two -:)
// ending of that u need to import it manually 
// wich is suks if u have a shop website and a lots of items
// and u should to import it by hand one by one
// wich what i will do if i was a damn nerd man 
// so iam from here 
// from this simple place 
// i say....
// fk google custom search engine 
// and as a problem solver i solved this major problem
// by creating really simple search engine 
// and iam looking to make this vs google
// insted of waiting a decate or maybe 100 yr 
// theres supposed to be diffrent there 
// but that doesnt matter 
// //// real programing lang 
// var timeWasted = new Time();
// timeWasted.hours = 10;
// timeWasted.mins = 00;

import { getObjectLength, getSelectedWord } from './functionsIndeed.js';

var moviesData ;

fetch('JS/moviesData.json').then(
    (res) => {
        return res.json();
    }
    ).then(
        (d) => {
    moviesData = d;
});

const input = document.querySelector('.searchinput');
const div = document.querySelector(".printres");

input.addEventListener("input", e => search(e.target.value));

function search(value){
    var toPrint = "";
    var Scounter = [];
    if(value == ""){value = undefined; clearResz(div)}; 
    if( value !== undefined){
        for(let i in moviesData){
            var toReg = new RegExp(value, "gi");
            var res = i.search(toReg);
            if(res >= 0){
                Scounter.push([res, {"name" : i}]);
            }
        }
        Scounter = Scounter.sort();
        toPrint += `<ul class="searchresz" style="">`;
        for(let l in Scounter){
            toPrint += `<a href="${moviesData[Scounter[l][1]['name']][2]}"><img src="${moviesData[Scounter[l][1]['name']][0]}" alt=""><p>${getSelectedWord(moviesData[Scounter[l][1]['name']][1], value)}</p></a>`;            
        }
        printResaults(toPrint);
        toPrint +=`</ul>`;
    }
}
function clearResz(div){
    div.innerHTML = "";
};
function printResaults(resaults){
    div.innerHTML = "";
    div.innerHTML = resaults;
}

