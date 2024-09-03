// Fetch the content of 'images.txt'
fetch('nopovertyimages2.txt')
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

function onStreamProcessed(text) {
console.log(text);
  const urls = text.split('\n');
  let i=1;
  const noPoverty = document.querySelector('#nopov-images');
  for (const url of urls) {
    const imageUrl = url.trim();
    const image = createImage(imageUrl);
    noPoverty.appendChild(image);
    image.setAttribute('id','povsource'+i);
    ++i;
  }
}

function clickImage(e) {
  console.log(e.currentTarget); // logs currentTarget value to console (album view section)
  console.log(e.target); // logs Target value to console (img)
  
  if (e.currentTarget !== e.target) { // if the properties are not equal 
  
      if (e.target.id == 'povsource1'){
          window.location.href='https://eca.unwomen.org/sites/default/files/Headquarters/Images/Sections/News/In%20Focus/SDGs/infographics-2018/UNW17011_SOCIAL_MEDIA_MESSAGES_EN_2.png?h=350&w=350';
      }
      if (e.target.id == 'povsource2'){
          window.location.href='https://www.un.org/sustainabledevelopment/poverty/'
      }

      if (e.target.id =='povsource3') {
          window.location.href='https://pbs.twimg.com/media/FBw_K5zWUAMnqrb?format=jpg&name=medium'
      }
     
  }
}
let imagelinks = document.querySelector('#nopov-images');
imagelinks.addEventListener('click', clickImage);
console.log(imagelinks);

// Error handling function
function onError(error) {
  console.error('Error:', error);
}
