const apiNaruto = async () => {
    let url = "https://dattebayo-api.onrender.com/characters";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    // ALL
    const all = document.querySelector(".all");
    data.characters.slice(17).forEach((item) => {
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
        all.appendChild(divItem);
    });
};


apiNaruto();
