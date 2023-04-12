// Question No 1

// function createAdder(numberToAdd) {

//     return function(number) {
//       return number + numberToAdd;
//     }
//   }
  
//   const addFive = createAdder(5);
//   const result = addFive(10);
//   console.log(result); // Output: 15
  


        

// question no 2


// const myArray = [1, 2, 3, 4, 5];

// function searchArray() {
//   var searchValue = prompt("Enter value to search for:");

//   var result = recursiveSearchArray(myArray, searchValue);
//   alert(result ? "Value found!" : "Value not found.");
// }
// function recursiveSearchArray(arr, value) {

//   if (arr.length === 0) {
//     return false;
//   }


//   if (arr[0] === parseInt(value)) {
//     return true;
//   }

//   return recursiveSearchArray(arr.slice(1), value);
// }










// Question No 3


// function addParagraph() {
   
//     var newParagraph = document.createElement("p");
  
//     var textInput = prompt("Enter text for the new paragraph:");
  
//     newParagraph.textContent = textInput;
  
//     document.body.appendChild(newParagraph);
//   }
















// question no 4



// function addListItem() {
    
//     var listItemText = prompt("Enter text for new list item:");
  
//     var newListItem = document.createElement("li");
  
//     newListItem.textContent = listItemText;
  
//     var myList = document.getElementById("myList");
  
//     myList.appendChild(newListItem);
//   }
  











// Question no 5


// function changeBackgroundColor(element, color) {

//     var myElement = document.getElementById(element);
  
//     myElement.style.backgroundColor = color;
//   }
  
  





// question No 6



// function saveToLocalStorage() {
//     var key = "myObject";
//     var myObject = { name: "John", age: 30, city: "New York" };
  
//     var objectString = JSON.stringify(myObject);
  
//     localStorage.setItem(key, objectString);
  
//     console.log("Object saved to localStorage successfully!");
//   }
  






















// question no 7

// function getObjectFromLocalStorage(key) {
//     try {
//       const serializedObject = localStorage.getItem(key);
  

//       if (!serializedObject) {
//         return null;
//       }
  
//       const object = JSON.parse(serializedObject);
//       return object;
//     } catch (error) {

//       console.error(`Error retrieving object from localStorage: ${error}`);
//       return null;
//     }
//   }













// question no 8


// function saveObjectToLocalStorage(object) {
//     try {
//       for (const property in object) {
//         if (object.hasOwnProperty(property)) {
          
//           localStorage.setItem(property, JSON.stringify(object[property]));
//         }
//       }
//     } catch (error) {
//       console.error(`Error saving object to localStorage: ${error}`);
//     }
//   }
  
//   function getObjectFromLocalStorage() {
//     try {
//       const retrievedObject = {};

//       for (let i = 0; i < localStorage.length; i++) {
//         const key = localStorage.key(i);

//         retrievedObject[key] = JSON.parse(localStorage.getItem(key));
//       }

//       return retrievedObject;
//     } catch (error) {
//       console.error(`Error retrieving object from localStorage: ${error}`);
//       return null;
//     }
//   }
  










