// Fetch the content of 'images.txt'
fetch('climateimages2.txt')
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
  const urls = text.split('\n');
  let i =1; 
  for (const url of urls) {
    const imageUrl = url.trim();
    const image = createImage(imageUrl);
    const climateAction = document.querySelector('#climate-images');
    climateAction.appendChild(image);
    image.setAttribute('id','source'+i);
    ++i;
  }
}

function clickImage(e) {
  console.log(e.currentTarget); // logs currentTarget value to console (album view section)
  console.log(e.target); // logs Target value to console (img)
  
  if (e.currentTarget !== e.target) { // if the properties are not equal 
  
      if (e.target.id == 'source1'){
          window.location.href='https://pbs.twimg.com/media/F8u16_wWwAArINF?format=jpg&name=medium'; 

      }
      if (e.target.id == 'source2'){
          window.location.href='https://www.un.org/sustainabledevelopment/climate-change/'
      }

      if (e.target.id =='source3') {
          window.location.href='https://www.un.org/sites/un2.un.org/files/every-warming-matters.jpg'
      }
     
  }
}
let imagelinks = document.querySelector('#climate-images');
imagelinks.addEventListener('click', clickImage);
console.log(imagelinks);


// Error handling function
function onError(error) {
  console.error('Error:', error);
}
