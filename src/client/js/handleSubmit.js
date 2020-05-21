const validURL = require('./urlChecker');
function handleSubmit(event) {
    event.preventDefault();

    const results = document.getElementById('results');
    var url = document.getElementById('url').value.trim();
    if(!validURL(url)){
        results.innerHTML = `<p class="invalid">Invalid URL</p>`;
        return;
    }

    const callData = async function(url){
        const response = await fetch('http://localhost:3000/article', {
            method: 'POST',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url })
          });
        const data = await response.json();
        return data;
    };

    callData(url).then( data => {
        results.innerHTML = `<p><span>Text : </span>${data.text}</p>
        <p><span>Polarity : </span>${data.polarity}</p>
        <p><span>Polarity_confidence : </span>${data.polarity_confidence}</p>
        <p><span>Subjectivity : </span>${data.subjectivity}</p>
        <p><span>Subjectivity_confidence : </span>${data.subjectivity_confidence}</p>`
    }).catch( err => {
        results.innerHTML = `<span>${err}`;
    });

}

module.exports = handleSubmit;