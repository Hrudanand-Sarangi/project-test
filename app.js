// function one(){
//     return 1;
// }

// function two(){
//     return one() + one();
// }

// function three(){
//     let ans= two() + one();
//     console.log(ans)
// }

// three();

// let hed= document.querySelector("h1");
// let btn= document.querySelector("button");
// let type= document.querySelector("type");

// btn.addEventListener("submit", function(){
    
//     console.log(type);

// })

// Select the necessary elements
// const header = document.querySelector('h1'); // Select the <h1> element
// const inputField = document.querySelector('input'); // Select the <input> element
// const submitButton = document.querySelector('button'); // Select the <button> element

// // Add an event listener to the button
// submitButton.addEventListener('click', () => {
//     const color = inputField.value.trim(); // Get the value of the input and trim any extra spaces
//     if (color) {
//         header.style.color = color; // Change the color of the <h1> element
//     } else {
//         alert('Please enter a valid color!'); // Alert if no color is entered
//     }
// });

// callback hell//

function savetoDb(data,success,failure){
    let internatSpeed = Math.floor(Math.random() * 10)+1;
    if (internatSpeed >= 4){
        success();
    }else{
        failure();
    }
}

savetoDb("apna collage",
    ()=>{
        console.log("Success: your data1 was saved")
    },
    ()=>{
        console.log("failure: weak connection,Try again")
    }
);
