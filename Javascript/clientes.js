
document.getElementById('myBtn').addEventListener('click', getData);

function getData() {
    // console.log('test');

    fetch('https://randomuser.me/api/?results=100')
        .then(res => res.json())
        .then(data => {
            //console.log(data);

            let author = data.results;
            //console.log(author);

            let output = "<h2><center>Son los siguientes: </center></h2>";

            author.forEach(function (lists) {
                output += `
                    <div class="container">
                        <div class="card mt-4 bg-dark">
                            <ul class="list-group">
                                <li class="list-group-item"><h2>Nombre: ${lists.name.first}</h2></li>
                                <li class="list-group-item"><img src="${lists.picture.large}"></li>
                                <li class="list-group-item"><h2>Teléfono: ${lists.cell}</h2></li>
                            </ul>
                        </div>
                    </div> `;
            });
            document.getElementById('output').innerHTML = output;
        });
};