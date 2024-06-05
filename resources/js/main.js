
// const url = 'https://jsonplaceholder.typicode.com/comments'

// fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         let element = document.getElementById('elem')
//         element.innerHTML = ` 
//         <p>${data.name}</p>
//         <p>${data.email}</p>
//         <p>${data.body}</p>
//     `})
//     .catch(err => console.log(err));


// ------------------------------------------------
  
function cargarDatos() {
  return fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response) => response.json())
    .then(data => {
                let comentarios = document.getElementById('container')
                comentarios.innerHTML = ` 
                <p>${data.name}</p>
                <p>${data.email}</p>
                <p>${data.body}</p>
            `})
    .catch((err) => {
      console.log(err);
    });
}

cargarDatos();
