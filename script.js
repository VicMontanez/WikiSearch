/* global axios */
const response = ["apple", "banana", "orange"];




//Click handler
function handleClick() {
    console.log("Button is clicked");
    makeAPIcall()
}

function makeAPIcall() {
    const input = document.getElementById("input").value 
    console.log(input);
    const url = `https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&search=${input}&limit=10&namespace=0&format=json`
    
// Make a request for a user with a given ID
axios.get(url)
  .then(function (response) {
    // handle success
    displayResults(response.data[1], response.data[2], response.data[3]);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

    
    // fetch(url)
    // .then(function(response){
    //     return response.json()
    // }) .then(function(response){
    //     console.log(response)
    //     displayResults(response[1], response[3]);
    // })
}

//This function displays results(a array) on the page as a list
function displayResults(titles, links) {
    
    const newResponse = titles.map(function(item, index) {
    console.log(item);
    return `<li><a href=${links[index]}>${item}</a></li>`;
        
    });

const joinedResponse = newResponse.join("\n");
console.log(joinedResponse);

document.getElementById('results').innerHTML = joinedResponse;
}
    
