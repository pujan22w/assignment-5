async function fetchJokes() {
    let resposne = await fetch(fetchApi);
  
    let arrayOfData = await resposne.json();

    let DivSelect = document.querySelector(".container");
   
  
    arrayOfData.forEach((jokes) => {
      console.log(jokes);
      let CreatePtag = document.createElement("p");
       
      CreatePtag.innerText = `Jokes ${jokes.id}: ${jokes.setup}  ${jokes.punchline}`;
      
      CreatePtag.classList.add("change");
  
      DivSelect.append(CreatePtag);
    });
  }
  const fetchApi='https://official-joke-api.appspot.com/random_ten';
  
  fetchJokes();