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
  
  //slicing each line and separating by target and then the rest of the text under each target section
  function displayText(text) {
    const lines = text.split('\n');
    const firstLine1 = lines[0]; //this is the header
    //pattern - intervals of 5 and range of 3 
    const target1 = lines.slice(5,8).join('<br>');
    const target2 = lines.slice(10,13).join('<br>');
    const target3 = lines.slice(15,18).join('<br>');
    const target4 = lines.slice(20,23).join('<br>');
    const target5 = lines.slice(25,28).join('<br>');
    //pattern - intervals of 5 and range of 1
    const restOfText1 = lines.slice(1,4).join('<br>');
    const restOfText2 = lines.slice(8,9).join('<br>')
    const restOfText3 = lines.slice(13,14).join('<br>');
    const restOfText4 = lines.slice(18,19).join('<br>');
    const restOfText5 = lines.slice(23,24).join('<br>');
    const restOfText6 = lines.slice(28,29).join('<br>');
 
   
   

    //set the content for the elements
    document.getElementById('energy-title').innerHTML = firstLine1;
    document.getElementById('intro-one').innerHTML = restOfText1;

    document.getElementById('target-one').innerHTML = target1;
    document.getElementById('para1').innerHTML = restOfText2;

    document.getElementById('target-two').innerHTML = target2;
    document.getElementById('para2').innerHTML = restOfText3

    document.getElementById('target-three').innerHTML = target3;
    document.getElementById('para3').innerHTML = restOfText4

    document.getElementById('target-four').innerHTML = target4;
    document.getElementById('para4').innerHTML = restOfText5

    document.getElementById('target-five').innerHTML = target5;
    document.getElementById('para5').innerHTML = restOfText6


  }
  fetchAndDisplay('energy.txt');