let currentPosition = 0;  // The current positition of an item will be considered 0 for now
const gap = 10; // There is a gap of 10px between the photos
const slideWidth = 400; // The width of each image is 400px

const items = document.querySelectorAll('.carousel-item'); // Defining an element called "items", which searches for the items in the html that are in the "carousel-item" class
const totalSlides = items.length; // Defining an element called "totalSlides", and it is the number of things found in the items constant defined above

function moveForward() { // Make a function and call it "moveForward"
  if (currentPosition >= totalSlides - 2) { // if the current position is greater than or equal to the totalSlides value minus 2....
    currentPosition = 0; // ...then make the position 0 
  } else { // if line 9 is NOT greater than or equal to totalSlides-2 ..
    currentPosition++; // ..Then add one to current position
  }
  updateCarouselPosition(); // now run the function updateCarouselPosition (which is defined in line 26), with the current position value changing based on the result of the above if function 
}

function moveBackward() { // Make a function and call it "moveBackward"
  if (currentPosition <= 0) { // if the current position is less then or equal to 0 ..
    currentPosition = totalSlides - 2; // then set the current position to a value equal to totalSlides - 2
  } else { // if the current position is NOT less than or equal to 0 ..
    currentPosition--; // ..Then subtract one from the current position 
  }
  updateCarouselPosition(); // now run the function updateCarouselPosition (which is defined in line 26), with the current position value changing based on the result of the above if function
}

function updateCarouselPosition() { // Make a function and call it "updateCarouselPosition"
  const items = document.querySelectorAll('.carousel-item'); // Defining an element called "items", which searches for the items in the html that are in the "carousel-item" class
  const offset = (slideWidth + gap) * currentPosition; // Defining an element that we'll call "offset", which is a number equal to: (the slideWidth plus the gap) multiplied by the currentPosition value

  for (const item of items) { // When you run this function, for all the items contained in the "items" element we defined...
    item.style.transform = `translateX(-${offset}px)`; //... change the style of the item via a transform that translates (shifts) all the items based on the offset calculation defined earlier in line 28
  }
}
