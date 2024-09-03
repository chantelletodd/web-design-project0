// Fetch the content of 'images.txt'
fetch('energyimages2.txt')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
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
    const affordableEnergy = document.querySelector('#energy-images');
    affordableEnergy.appendChild(image);
    image.setAttribute('id','energysource'+i);
    ++i;
  }
}

function clickImage(e) {
  console.log(e.currentTarget); // logs currentTarget value to console (album view section)
  console.log(e.target); // logs Target value to console (img)
  
  if (e.currentTarget !== e.target) { // if the properties are not equal 
  
      if (e.target.id == 'energysource1'){
          window.location.href='https://www.unwomen.org/sites/default/files/Headquarters/Images/Sections/News/In%20Focus/SDGs/infographics-2018/UNW17011_SOCIAL_MEDIA_MESSAGES_EN_16.png?h=350&w=350'; 

      }
      if (e.target.id == 'energysource2'){
          window.location.href='https://www.un.org/sustainabledevelopment/energy/'
      }

      if (e.target.id =='energysource3') {
          window.location.href='https://pbs.twimg.com/media/F03NWqdXgAA-47P?format=jpg&name=medium'
      }
     
  }
}
let imagelinks = document.querySelector('#energy-images');
imagelinks.addEventListener('click', clickImage);
console.log(imagelinks);

// Error handling function
function onError(error) {
  console.error('Error:', error);
}
