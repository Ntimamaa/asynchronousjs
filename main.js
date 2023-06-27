function getData(){
    fetch('http://localhost:3000/movies')
    .then(resp => resp.json())
    .then((movies)=>{
        console.log(movies)
    })}
    //patch
    function postData(){
    document.querySelector('form').addEventListener('submit',(e)=>{
        e.preventDefault()
        const title = document.querySelector('#title').value
        const summary = document.querySelector('#summary').value
        const userInput = {
            title : title,
            summary: summary
        }
        fetch("http://localhost:3000/movies", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: JSON.stringify(userInput)
          })
    })
}
getData(postData())

function deleteData() {
    fetch('http://localhost:3000/movies')
        .then(resp => resp.json())
        .then(movies => {
            movies.forEach(movie => {
                const div = document.createElement('div');
                div.innerHTML = `
                <h2>${movie.title}</h2>
                <span>${movie.summary}</span>
                <button class="delete">Delete</button>
                `;
                document.body.appendChild(div);

                div.querySelector('.delete').addEventListener('click', () => {
                    fetch(`http://localhost:3000/movies/${movie.id}`, {
                        method: 'DELETE',
                        headers: {
                            "Content-Type": "application/json",
                            Accept: "application/json"
                        }
                    }).then(() => {
                        div.remove();
                    });
                });
            });
        });
}

deleteData();

