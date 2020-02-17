fetch('https://ghibliapi.herokuapp.com/films')
    .then((response) => {
    return response.json();
  })
  .then((data) => {
    const movies = document.getElementById('root')
    const logocont = document.getElementById('logo')
    const logo = document.createElement('img')
    logo.className = "logo"
    logo.src = 'logo.png'
    
    logocont.append(logo)
    data.forEach(movie => {
        let titleDiv = document.createElement('div')
        
        titleDiv.className = "container"

        titleDiv.innerHTML = '<div class="title">' + movie.title + '</div><div class="description">' + movie.description + '</div>'
        movies.append(titleDiv)

    });
  });

  // ================================== 
