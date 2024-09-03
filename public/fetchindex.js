fetch('imagelinks.txt')
  .then(response => {
    if (!response.ok) {
      throw new Error('Response was not ok');
    }
    return response.text();
  })
  .then(onStreamProcessed)
  .catch(onError);

// Create image function
function createImage(src) {
  const image = document.createElement('img');
  image.src = src;
  return image;
}



// Callback function
function onStreamProcessed(text) {
  console.log(text);
  // Split the content line by line
  const urls = text.split('\n');
  let i =1; 
  // Iterate through each URL
  for (const url of urls) {
    // Remove any leading/trailing whitespaces
    const imageUrl = url.trim();
    // Create a new image
    const image = createImage(imageUrl);
    // Grab the element with the id called 'nopov-images'
    const linkImages = document.querySelector('#link-images');
    // Append the new image to this 'nopov-images' container
    linkImages.appendChild(image);
    image.setAttribute('id','goalpage'+i);
    ++i;
  }
}


function clickImage(e) {
    console.log(e.currentTarget); // logs currentTarget value to console (album view section)
    console.log(e.target); // logs Target value to console (img)
    
    if (e.currentTarget !== e.target) { // if the properties are not equal 
    
        if (e.target.id == 'goalpage1'){
            window.location.href='/nopoverty.html'; 

        }
        if (e.target.id == 'goalpage2'){
            window.location.href='/energy.html'
        }

        if (e.target.id =='goalpage3') {
            window.location.href='/climate.html'
        }
       
    }
}
let imagelinks = document.querySelector('#link-images');
imagelinks.addEventListener('click', clickImage);
console.log(imagelinks);



// Error handling function
function onError(error) {
  console.error('Error:', error);
}

function fetchAndDisplay1(file) {
  try {
      //fetch the file
    fetch(file)
      .then(response => {
        if (!response.ok) {
          throw new Error('Response was not ok');
        }
        return response.text();
      })
      .then(text => {
      //call display text function
        displayText(text);
      })
      .catch(onError => {
        console.error(onError); 
      });
  } catch (error) {
    console.error(error);
  }
}

function displayTextDescription(text) {
  const lines = text.split('\n');
  const firstLine1 = lines[0];

  //set the content for the elements
  document.getElementById('desc').innerHTML = firstLine1;
}


function onError(error) {
  console.error('Error:', error);
}

function fetchAndDisplay2(file) {
  try {
      //fetch the file
    fetch(file)
      .then(response => {
        if (!response.ok) {
          throw new Error('Response was not ok');
        }
        return response.text();
      })
      .then(text => {
      //call display text function
        displayTextNewsletter(text);
      })
      .catch(onError => {
        console.error(onError); 
      });
  } catch (error) {
    console.error(error);
  }
}

function displayText(text) {
  const lines = text.split('\n');
  const firstLine1 = lines[0];

  //set the content for the elements
  document.getElementById('desc').innerHTML = firstLine1;
}



function displayTextNewsletter(text) {
  const lines = text.split('\n');
  const firstLine1 = lines[0];
  const secondLine = lines[1];
  const thirdLine = lines[2];

  //set the content for the elements
  document.getElementById('news-heading').innerHTML = firstLine1;
  document.getElementById('news-desc').innerHTML = secondLine;
  document.getElementById('news-button').innerHTML = thirdLine;
}
//displayTextNewsletter('indexnews.txt');


fetchAndDisplay1('sustainabledesc.txt');
fetchAndDisplay2('indexnews.txt');

