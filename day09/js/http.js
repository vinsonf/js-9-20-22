console.log('http.js loaded');


fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    headers:{
        "Content-Type": "text/html"
    },
    body: 'Hello World'
}).then(
    function(response) {
        return response.json();
    }
).then(
    function(data) {
        console.log(data);
    }
).catch();