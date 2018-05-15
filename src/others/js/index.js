xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {
  console.log('change: ', xhr.readyState, xhr.status);
}
console.log('before open: ', xhr.status);
xhr.open('GET', 'http://localhost:9000/user', true);
console.log('after open: ', xhr.status);
xhr.send();
console.log('after send', xhr.status);
