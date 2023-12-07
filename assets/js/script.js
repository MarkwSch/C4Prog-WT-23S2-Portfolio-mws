document.getElementById('submitButton').addEventListener('click', function(){

    // Retrieve the inputted word
    var word = document.getElementById('wordInput').value;
    // Get the tag where the results will be outputted
    var resultP = document.getElementById('result');
    var url = 'https://api.api-ninjas.com/v1/dictionary?word=' + word;
     // Make the API call
     const result = fetch(url, {
        method: 'GET',
        headers: {
          'X-Api-Key': 'rFXNl/iLr9XfX+7F1f51ag==cgw1tl3gsL0kszcn',
          'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        // Set def as the definition
        var def = data.definition
        // If the definition is null or empty, print "No definition found."
        if(def == "") {
            var formattedDef = "No definition found."
        }
        // Else break up the definition at "1." so every new meaning is on a separate line.
        else {
            var formattedDef = def.split('\n1.').join('<br><br>1.');
        }
        resultP.innerHTML = formattedDef
    })
}); 