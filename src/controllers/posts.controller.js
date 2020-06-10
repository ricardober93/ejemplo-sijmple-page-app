import view from "../view/post.html";
import { get } from "http";


const getPosts = async () => {
      const res =  await fetch('https://jsonplaceholder.typicode.com/posts')
      return await res.json()
}



export default async() => {
    const divElement = document.createElement('div')
    divElement.innerHTML= view

    let postElement = divElement.querySelector('#posts')
    let totalElement = divElement.querySelector('#total')
    let posts = await getPosts();
    totalElement.innerHTML = `${posts.length    }`
   posts.forEach(el => {
       postElement.innerHTML += `
        <li class="list-group mt-3" >
            <h5>${el.title}</h5>
            <p>${el.body}</p>
        </li>

       `
   });
    return divElement
}