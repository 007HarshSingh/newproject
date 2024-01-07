const btnEl =document.getElementById("btn");
const jokeEl =document.getElementById("joke");
const apiKey ="4dj/akOJex3hxj2KNUESzA==j3aagKUAqxr94OAX";
const options ={
     method : "GET",
     headers: {
        "X-Api-Key" : apiKey,
     },
};
const apiURL ="https://api.api-ninjas.com/v1/dadjokes?limit=1";

 async function getjoke(){
    try {
        jokeEl.innerText ="Updating...";
        btnEl.disabled =true;
        btnEl.innerText="Loding...";
        const response = await fetch(apiURL,options);
        const data = await response.json();
        btnEl.disabled =false;
        btnEl.innerText ="Tell me a joke";
      jokeEl.innerText=data[0].joke;
    } catch (error) {
        joke.innerText="OOPS Check your internet connection !!";
        btnEl.disabled =false;
        btnEl.innerText ="Tell me a joke";
    }
  
  
  
  
  
  
  
 
  

}
btnEl.addEventListener("click",getjoke);