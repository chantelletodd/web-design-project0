function loadTextFile(file) {
    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch ${file}`);
            }
            return response.text();
        })
        .then(text => {
            // Get the element with desc ID and add the text content from the file to that element
            document.getElementById('desc').textContent = text;
        })
        .catch(error => {
            console.error(error);
        });
}

loadTextFile('sustainabledesc2.txt');