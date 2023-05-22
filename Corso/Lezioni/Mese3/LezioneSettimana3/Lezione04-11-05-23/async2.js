/* 
Approccio classico: fetch/then

Esempio di codice che recupera dati da un'API utilizzando sia il metodo fetch con .then() (approccio classico con Promises) 

API di esempio: https://jsonplaceholder.typicode.com/posts/1
*/
function fetchDataWithThen() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Data fetched with .then():', data);
      })
      .catch(error => {
        console.log('Error with .then():', error);
      });
}
  
fetchDataWithThen();

/* 
Approccio moderno con async/await e try-catch:
*/
async function fetchDataWithAsyncAwait() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log('Data fetched with async/await:', data);
    } catch (error) {
      console.log('Error with async/await:', error);
    }
}
  
fetchDataWithAsyncAwait();
/* 
Entrambi gli approcci recuperano dati dall'API, 
ma il codice che utilizza async/await e try-catch è più leggibile e simile al 
codice sincrono. 
Inoltre, la gestione degli errori con try-catch è più semplice e intuitiva rispetto all'uso di 
.catch() nel caso delle Promises.
*/  