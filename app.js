'use strict';
let peopleAdjustable = people
function searchByName(){
    // Grabbing the values from our nameForm form and inputs.
    let firstNameInput = document.forms['nameForm']['fname'].value;
    let lastNameInput = document.forms['nameForm']['lname'].value;

    // "people" is coming from the data.js file. We have access to it within this JavaScript file.
    let filteredPeople = people.filter(function (person) {
        if(person.firstName === firstNameInput && person.lastName === lastNameInput){
            return true;
        }
        return false;
    });
    
    // Rather than console logging, you need to append the filteredPeople to a table.
    if(filteredPeople.length > 0){
        console.log(filteredPeople);
    }else{
        console.log('Sorry, looks like there is no one with that name.');
    }
}


function buildTheGrid(peopleAdjustable){
    let output = '';
    let test = peopleAdjustable.map(function(el){
       return output +=
        `<tr>
        <td>${el.id}</td>
        <td>${el.firstName}</td>
        <td>${el.lastName}</td>
        <td>${el.gender}</td>
        <td>${el.dob}</td>
        <td>${el.height}</td>
        <td>${el.weight}</td>
        <td>${el.eyeColor}</td>
        <td>${el.occupation}</td>
        <td>${el.parents}</td>
        <td>${el.currentSpouse}</td>
        </tr>`  

})
document.getElementById("test").innerHTML = output
}

// function buildTheNextMenu(){
//     let eyeColor = `<label for="eyeColor">Choose an Eye Color:</label>
//                    <input type="text:" id="eyeColor" name="eyeColor" value="">`
    
//                    document.getElementById("eyeColorForm").innerHTML=eyeColor
// }


function getPeopleByGender(){
        let genderChoice = document.forms["genderForm"]["gender"].value
    let peopleByGender = people.filter(function(el){
        if ( genderChoice == el.gender){
            return true;
            
        }
        else{
            return false;
        } 
        

    })
buildTheGrid(peopleByGender)

peopleAdjustable = peopleByGender


}

function getPeopleByEyeColor(){
    let peopleByEyeColor = []
    let eyeChoice = document.forms["eyeForm"]["colorEye"].value
    if (eyeChoice === "brown"||"black"||"hazel"||"blue"||"green" ){
         peopleByEyeColor = peopleAdjustable.filter(function(el){
            if (eyeChoice == el.eyeColor){
                return true;
            }else{
                return false;
            }
            
        })
    }else{
        prompt(`${eyeChoice} Is not a Vaild Choice Trying Again`)
    }

peopleAdjustable = peopleByEyeColor
buildTheGrid(peopleByEyeColor)
  


}

function getPeopleByHeightandWeight(){
    let peopleByHeightandWeight = []
    let heightChoice = document.forms["heightAndWeight"]["height"].value
    let weightChoice = document.forms["heightAndWeight"]["weight"].value
    heightChoice = parseInt(heightChoice)
    weightChoice = parseInt(weightChoice)
    peopleByHeightandWeight = peopleAdjustable.filter(function(el){
        if(el.height > 200 && heightChoice === 3){
            return true;
        }else{
            return false;
        }
        
       
    })
    peopleAdjustable = peopleByHeightandWeight
    buildTheGrid(peopleByHeightandWeight)
}








buildTheGrid(people)