fetch("https://rickandmortyapi.com/api/character")
  .then((response) => {
    return response.json();
  })

  .then((data) => {
    const $container = document.getElementById("grid-item");
    const personajes = data.results;

    for (let i = 0; i < personajes.length; i++) {
      $container.innerHTML += `
      <div class="tarjetas">
        <img src="${personajes[i].image}">
        <p class="nombre-personaje">${personajes[i].name}</p>
        <p>Gender: ${personajes[i].gender}</p>
        <p>Species: ${personajes[i].species}</p>
        <p>Status: ${personajes[i].status}</p>
      </div>
      `;
    }
  });
