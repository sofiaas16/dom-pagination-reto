// 1. Se crea una función ASÍNCRONA que se llama apiNaruto, para conectarme al API de Naruto
const apiNaruto = async () => {

    // Guardo la URL de la API en una variable
    let url = "https://dattebayo-api.onrender.com/characters";

    // Uso fetch para hacer la petición a la API (como pedirle los datos al servidor)
    const response = await fetch(url);

    // Se transformaa la response a JSON
    const data = await response.json();
    console.log(data);

    // En este caso, elegí el contenedor all para almacenar todos los personajes
    const all = document.querySelector(".all");
    data.characters.slice(0,8).forEach((item) => {
        const divItem = document.createElement('div');
        divItem.innerHTML = `
            <div class="container">
                <div class="img-container">
                    <img src="${item.images?.[0] || 'imagen-defecto.png'}" alt="${item.name}">
                </div>
                <div class="data">
                    <h2>Nombre: ${item.name}</h2>
                    <span>Clan: ${item.clan || "Desconocido"}</span><br>
                    <span>Aldea: ${item.affiliation?.[0] || "Desconocida"}</span><br>
                    <span>Habilidades: ${item.jutsu?.slice(0, 3).join(", ") || "No disponibles"}</span>
                </div>
            </div>
        `;

        // Meto ese div que acabo de crear dentro del contenedor principal (.all)
        all.appendChild(divItem);
    });
};

// Que NO SE ME OLVIDE llamar a la función para que se ejecute al cargar la página y se muestren los personajes
apiNaruto();
