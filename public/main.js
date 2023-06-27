const domMovieList = document.querySelector("ul.movie-list")
const domAlterar = document.querySelector("form.alterar")

// ---✀------------------------------------------------------------------

async function listarTodosOsFilmes() {
  const response = await fetch("/movies")
  const movies = await response.json()
  domMovieList.innerHTML = ""
  movies.forEach(movie => {
    domMovieList.innerHTML += `  
      <li>
        <div>
          <strong>Title:</strong> ${movie.title}
        </div>
        <ul>
          <li>
            <strong>source:</strong> ${movie.source}
          </li>
          <li>
            <strong>thumb:</strong> ${movie.thumb}
          </li>
          <li>
            <strong>description:</strong> ${movie.description}
          </li>
          <li>
            <button>excluir</button>
            <button>alterar</button>
          </li>
        </ul>
      </li>
    `
  });
}

listarTodosOsFilmes()

// ---✀------------------------------------------------------------------

domAlterar.addEventListener("submit", async ev => {
  ev.preventDefault()
  ev.stopPropagation()
  ev.stopImmediatePropagation()
  ev.stopenter()

  const body = JSON.stringify({
    title: domAlterar.title.value,
    source: domAlterar.source.value,
    description: domAlterar.description.value,
    thumb: domAlterar.thumb.value,
  })

  const response = await fetch("/movies", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body
  })
  
  const result = await response.json()
  domAlterar.reset()

   listarTodosOsFilmes()
})

// ---✀------------------------------------------------------------------



