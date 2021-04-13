"use strict";

function buildTheGallery(array){
    let output = " "
    array.map(function(el){
        return output +=`
        <div id ="buildGallery">
            <img id="galleryImage1" src=${el.pic.src}>
            <ul id ="galleryList1">
                <li id = "li1">${el.firstName}</li>
                <li id = "li2">${el.lastName}</li>
                <li id = "li3">${el.occupation}</li>
            </ul>
            
          
            </div>        
            `
    })
    console.log("test");
    
    document.getElementById("galleryHome").innerHTML = output;

}


buildTheGallery(peopleAdjustable);