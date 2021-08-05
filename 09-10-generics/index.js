"use strict";
fetch('http://jsonplaceholder.typicode.com/photos?_start=0&_limit=3')
    .then(res => res.json())
    .then(data => {
    console.log(data.map);
});
async function newFetch(url) {
    const res = await fetch(url);
    const data = await res.json();
    return data;
}
