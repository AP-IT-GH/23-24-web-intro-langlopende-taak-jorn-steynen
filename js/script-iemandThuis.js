fetch('https://randomuser.me/api/?results=1')
    .then(function(response) {
        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject(response.status);
        }
    })
    .then(function(response) {
        console.log(response);
        let html = '<section class="row justify-content-center">';
        for (let i = 0; i < response.results.length; i++) {
            const user = response.results[i];
            html += `
                <div class="card text-center">
                    <div class="card-body">
                        <div class="text-container text-center">
                            <p class="card-title fs-6">Wie is er thuis?</p>
                            <img src="${user.picture.large}" class="card-img-top rounded-circle mt-3" alt="foto van ${user.name.first} ${user.name.last}" style="width: 200px; height: auto;">
                            <p class="card-title fs-6">Voornaam: ${user.name.first}<br>Achternaam: ${user.name.last}</p>
                        </div>
                       
                    </div>
                </div>`;
        }
        html += '</section>';
        document.getElementById("clients").innerHTML = html;
    })
    .catch(function(error) {
        console.error("Error with message: " + error);
    });