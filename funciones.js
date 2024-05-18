document.getElementById("btn-cargar").addEventListener("click", function() {
    var artistId = "1"; // ID del artista que deseas mostrar
    cargarInformacionArtista(artistId);
});

function cargarInformacionArtista(id) {
    var url = `https://deezerdevs-deezer.p.rapidapi.com/artist/${id}`;

    var options = {
        method: 'GET',
        headers: {
            'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
            'x-rapidapi-key': '8595c445eamsha9fd3791034cc10p1bf34djsnc1e862b9e0ee'
        }
    };

    fetch(url, options)
        .then(response => {
            if (!response.ok) {
                throw new Error('La red devolvió un error');
            }
            return response.json();
        })
        .then(data => {
            if (data) {
                var html = `
                    <div class="card bg-secondary text-white">
                        <div class="card-body">
                            <h2 class="card-title">${data.name}</h2>
                            <p class="card-text">Seguidores: ${data.nb_fan}</p>
                            <div class="bg-light p-3 rounded">
                                <img src="${data.picture_big}" class="card-img-top rounded" alt="${data.name}">
                            </div>
                            <a href="${data.link}" target="_blank" class="btn btn-info">Ver en Deezer</a>
                        </div>
                    </div>
                `;
                document.getElementById("informacion-artista").innerHTML = html;
                document.getElementById("informacion-artista").style.display = "block";
            } else {
                document.getElementById("informacion-artista").innerHTML = "<p>No se pudo cargar la información del artista.</p>";
            }
        })
        .catch(error => {
            console.error("Error al cargar la información del artista:", error);
            document.getElementById("informacion-artista").innerHTML = "<p>Error al cargar la información del artista.</p>";
        });
}