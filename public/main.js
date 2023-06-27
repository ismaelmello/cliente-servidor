const domMovieList = document.querySelector("ul.movie-list")
    
async function listarTodosOsFilmes() {
  const response = await fetch("/movies")
  const movies = await response.json()
  movies.forEach(movie => {
    domMovieList.innerHTML += `  
      <li>
        <strong>title</strong>
        ${movie.title}
        <ul>
          <li>
            <strong>source</strong>
            ${movie.source}
          </li>
          <li>
            <strong>thumb</strong>
            ${movie.thumb}
          </li>
          <li>
            <strong>description</strong>
            ${movie.description}
          </li>
        </ul>
      </li>
    `
  });
}

listarTodosOsFilmes()