// Que1
function fetchData(url, callback) {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
      
        callback(data);
      })
      .catch((error) => {
        console.error('Fetch Error:', error);
      });
  }
  function processData(data) {

    console.log('Received Data:', data);
  }
 const apiUrl = 'https://official-joke-api.appspot.com/random_ten';
  fetchData(apiUrl, processData);
  
