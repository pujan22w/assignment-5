// Que2
async  function fetchData(Url){
let FetchApi=  await fetch(Url);
let convert= await FetchApi.json();
console.log(convert);
return convert;

}
const apiUrl2 = 'https://official-joke-api.appspot.com/random_ten';
  fetchData(apiUrl2);