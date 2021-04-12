'use strict';
let peopleAdjustable = people
//Start of Starter Code //

function searchByName(){
    // Grabbing the values from our nameForm form and inputs.
    let firstNameInput = document.forms['nameForm']['fname'].value;
    let lastNameInput = document.forms['nameForm']['lname'].value;

    // "people" is coming from the data.js file. We have access to it within this JavaScript file.
    let filteredPeople = peopleAdjustable.filter(function (person) {
        if(person.firstName === firstNameInput && person.lastName === lastNameInput){
            return true;
        }
        return false;
    });
    
    // Rather than console logging, you need to append the filteredPeople to a table.
    // if(filteredPeople.length > 0){
    //     console.log(filteredPeople);
    // }else{
    //     console.log('Sorry, looks like there is no one with that name.');
    // }
    peopleAdjustable = filteredPeople
    buildTheGrid(filteredPeople)
    readyToFindDescendants()
}

// End of Starter Code //


function buildTheGrid(peopleAdjustable){
    let output = '';
    let test = peopleAdjustable.map(function(el){
       return output +=
        `<tr>
        <td>${el.id}</td>
        <td id ="firstName">${el.firstName}</td>
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
document.getElementById("mainTable").innerHTML = output
}

// function buildTheNextMenu(){
//     let eyeColor = `<label for="eyeColor">Choose an Eye Color:</label>
//                    <input type="text:" id="eyeColor" name="eyeColor" value="">`
    
//                    document.getElementById("eyeColorForm").innerHTML=eyeColor
// }


function getPeopleByGender(){
        let genderChoice = document.forms["genderForm"]["gender"].value
    let peopleByGender = peopleAdjustable.filter(function(el){
        if ( genderChoice == el.gender){
            return true;
            
        }
        else{
        
        } 
        

    })

peopleAdjustable = peopleByGender
buildTheGrid(peopleAdjustable)
readyToFindDescendants()
}

function getPeopleByEyeColor(){
    let peopleByEyeColor = []
    let eyeChoice = document.forms["eyeForm"]["colorEye"].value
    if (eyeChoice == "brown"||eyeChoice == "black"||eyeChoice == "hazel"||eyeChoice == "blue"||eyeChoice == "green" ){
                 peopleByEyeColor = peopleAdjustable.filter(function(el){
            if (eyeChoice == el.eyeColor){
                return true;
            }else{
                return false;
            }
            
        })
    }else {
        invalidEntry("That is Not a Valid Eye Color Try again", "invalidEntry3")
    }

peopleAdjustable = peopleByEyeColor
buildTheGrid(peopleAdjustable)
readyToFindDescendants()
 
}

function getPeopleByHeightandWeight(){
    let peopleByHeightandWeight = []
    let heightChoice = document.forms["heightAndWeight"]["height"].value
    let weightChoice = document.forms["heightAndWeight"]["weight"].value
    heightChoice = parseInt(heightChoice)
    weightChoice = parseInt(weightChoice)
    peopleByHeightandWeight = peopleAdjustable.filter(function(el){
        if(el.height >= 70 && heightChoice === 3){
            if (el.weight >= 200 && weightChoice ===3){
                return true;
            } else if (el.weight < 200 && el.weight >= 150 && weightChoice === 2){
                return true;
            } else if ( el.weight < 150 && weightChoice === 1){
                return true;
            }
            
        } else if (el.height < 70 && el.height >= 64 && heightChoice === 2){
            if (el.weight >= 200 && weightChoice ===3){
                return true;
            } else if (el.weight < 200 && el.weight >= 150 && weightChoice === 2){
                return true;
            } else if ( el.weight < 150 && weightChoice === 1){
                return true;
            }
        } else if(el.height < 64 && heightChoice === 1){
            if (el.weight >= 200 && weightChoice ===3){
                return true;
            } else if (el.weight < 200 && el.weight >= 150 && weightChoice === 2){
                return true;
            } else if ( el.weight < 150 && weightChoice === 1){
                return true;
            }
         }else{
            return false;
        }

    })
    peopleAdjustable = peopleByHeightandWeight
    buildTheGrid(peopleAdjustable)
    readyToFindDescendants()
}

function resetThePage(){
    peopleAdjustable = people
    buildTheGrid(peopleAdjustable)
    readyToFindDescendants()
}

function invalidEntry(string,string1 ){
    let x = string
    let y = string1
document.getElementById(y).innerHTML = x;
return x;
}


function readyToFindDescendants(){
    if (peopleAdjustable.length > 1){
        
    }else{
       let output;
        output = 
        `<thead>
        <th>ID</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Gender</th>
        <th>D.O.B</th>
        <th>Height</th>
        <th>Weight</th>
        <th>EyeColor</th>
        <th>Occupation</th>
        <th>Parents</th>
        <th>Current Spouse</th>
      </thead>
      <tbody id ="secondTable">
      </tbody>`
        
    
        
        document.getElementById("secondTableHeader").innerHTML = output
        findTheDescendants()
    }
    
}

function buildTheDescendantGrid(peopleAdjustable){
    let output1 = '';
    let test = peopleAdjustable.map(function(el){
       return output1 +=
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
document.getElementById("secondTable").innerHTML = output1
}

function findTheDescendants (){
    let x = peopleAdjustable[0].id
    let familyDescendants = people.filter(function(el){
        if ( x == el.parents[0] || x == el.parents[1] ){
            return true;
        }else{
            return false;
        }
    })
 buildTheDescendantGrid(familyDescendants)
 let fName = document.getElementById("firstName").textContent
 document.getElementById("descendantTable").innerHTML = `${fName}'s Descendants`
 if (familyDescendants.length == 0){
     document.getElementById("noDescendants").innerHTML = `${fName} Does not have any children`
 }
listNewFamilyMemberType("spouse") 

}








function listNewFamilyMemberType(type){
    let fName = document.getElementById("firstName").textContent
    let x = `
    
    <h1 id =${type}> ${fName}'s ${type}</h1>`
    
    document.getElementById("secondTable").innerHTML += x
}










function readyToFindSpouse(){
    if (peopleAdjustable.length > 1){
        
    }else{
       let output;
        output = 
        `<thead>
        <th>ID</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Gender</th>
        <th>D.O.B</th>
        <th>Height</th>
        <th>Weight</th>
        <th>EyeColor</th>
        <th>Occupation</th>
        <th>Parents</th>
        <th>Current Spouse</th>
      </thead>
      <tbody id ="secondTable">
      </tbody>`
        
    
        
        document.getElementById("thirdTableHeader").innerHTML = output
        // findTheDescendants()
    }
    
}



 














buildTheGrid(peopleAdjustable)

