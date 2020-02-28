

function getinfo(){
fetch('http://www.boredapi.com/api/activity/')
    .then((response) => {
    return response.json()
  })
  .then((data) => {
    console.log(data)
            
            titleDiv = document.createElement('div')
            bored = document.getElementById('root')
            titleDiv.className = "container"
            titleDiv.innerHTML = '<div class="title">' + data.activity
            bored.append(titleDiv)   

  });
}
const button = document.getElementById('boredButton')
button.addEventListener("click", getinfo);
  
