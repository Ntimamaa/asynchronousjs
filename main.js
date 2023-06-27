function getData(){
    fetch('http://localhost:3000/movies')
    .then(resp => resp.json())
    .then(movies=>{
        console.log(movies)
    })}
    //post
    //delete
    //patch
    function postData(){
    document.querySelector('form').addEventListener('submit',(e)=>{
        e.preventDefault()
        
        const userInput = {
            movietitle : document.querySelector('#title').value,
            moviesummary: document.querySelector('#summary').value
    
        }
    })
    }