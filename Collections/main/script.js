// Every time the document is loaded, do the following:::
document.addEventListener('DOMContentLoaded', function() {
    let imageBoxes = document.querySelectorAll('.box'); // Select all image containers and store them in a refrencing variable.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// RANDOMIZE IMAGE POSITION INTERACTION
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
    // 1. STORE EACH ELEMENT IN A NEW ARRAY

    // Empty array.
    let imageArray = [];
    for (let counter = 0; counter < imageBoxes.length; counter++) { // Make a counter and as long as its value is less than the total amount of images, increment the counter.
        // The cycle will store each images array position in the counter until the counter matches its value to the total number of all images. 
        // The counter matches the total number of images.
        imageArray.push(imageBoxes[counter]);// The total number of images will get stored into the new array.
        // Image Array has the value of every images array position because counter is all the images array positions. Counted until the last one.
        // Counter has every array position.
        // Image Array recieves counters count.
        
        // ELEMENT COUNTER IS STORED INTO NEW ARRAY.
    }

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
    // 2. SHUFFLE THE ARRAY USING THE FISHER YATES SHUFFLE ALGORITHM
    for (let increment = imageArray.length - 1; increment > 0; increment--) { // Loop backwards through the array from the last element to the second element.
    let j = Math.floor(Math.random() * (increment + 1)); // Generate a random index 'j' between 0 and the current value of 'increment' (inclusive).
    let temp = imageArray[increment]; // Temporarily store the element at the current 'increment' position.
    imageArray[increment] = imageArray[j]; // Replace the element at 'increment' with the element at the random index 'j'
    imageArray[j] = temp; // Place the temporarily stored element into the position 'j', completing the swap.

}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
    // 3. APPLY THE SHUFFLED ORDER USING THE CSS ORDER PROPERTY
    for (let counter = 0; counter < imageArray.length; counter++) { // Make a counter and as long as its value is less than the total amount of images, increment the counter.
        imageArray[counter].style.order = counter; // Apply the shuffled order to all counted images.
    }

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ENLARGE IMAGE INTERACTION
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
    let images = document.querySelectorAll(' img'); // Select all images and refrence them with a variable.
    for (let allImages = 0; allImages < images.length; allImages++) {  // allImages counts and stores all images until it reaches the total number of images.
        // For all images, do the following {
        // 1. All images will wait for the mouse go onto it, then does the following {
        images[allImages].addEventListener('mouseover', function() {
            // 1. Transforms the images style to 1.5 scale.
            images[allImages].style.transform = 'scale(1.5)';
        });
        // }
        
        // 1. All images will wait for the mouse go off of it, then does the following {
        images[allImages].addEventListener('mouseout', function() {
            // 1. Reset the image scale on mouse out
            images[allImages].style.transform = 'scale(1)';
        });
        // }
    }

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CLICK IMAGE TO SHOW DESCRIPTION OVERLAY INTERACTION
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

    let descriptions = document.querySelectorAll('.box'); // Select all elements with class 'box' and reference them with a variable.
    for (let count = 0; count < descriptions.length; count++) { // Count all selected elements.
        // Do the following for each count.
        descriptions[count].addEventListener('click', function() { // Add a click event listener and function to each element.
            let overlay = descriptions[count].querySelector('.overlay'); // Select all elements with class 'overlay' and reference them with a variable.
            // Toggle the overlay's visibility on click
            if (overlay.style.opacity === '1') {
                overlay.style.opacity = '0';
            } else {
                overlay.style.opacity = '1';
            }
        });

        // Add mouseout event listener to reset the overlay's visibility
        descriptions[count].addEventListener('mouseout', function() {
            let overlay = descriptions[count].querySelector('.overlay');
            overlay.style.opacity = '0';
        });
    }

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
});