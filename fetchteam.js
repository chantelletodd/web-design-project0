function fetchAndDisplay(file) {
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
  
  function displayText(text) {
    const lines = text.split('\n');
    const firstLine1 = lines[0];
    const restOfText1 = lines.slice(1,5).join('<br>');
  
    //set the content for the elements
    document.getElementById('name-one').innerHTML = firstLine1;
    document.getElementById('desc-one').innerHTML = restOfText1;

    const firstLine2 = lines[5];
    const restOfText2 = lines.slice(6,10).join('<br>');
  
    document.getElementById('name-two').innerHTML = firstLine2;
    document.getElementById('desc-two').innerHTML = restOfText2;

    const firstLine3 = lines[10];
    const restOfText3 = lines.slice(11,14).join('<br>');
  
    document.getElementById('name-three').innerHTML = firstLine3;
    document.getElementById('desc-three').innerHTML = restOfText3;

    const firstLine4 = lines[15];
    const restOfText4 = lines.slice(16,19).join('<br>');
  
    document.getElementById('name-four').innerHTML = firstLine4;
    document.getElementById('desc-four').innerHTML = restOfText4;
  }

  
  
  fetchAndDisplay('teamstext.txt');
  