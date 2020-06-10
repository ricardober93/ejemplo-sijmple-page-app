import {pages} from "../controllers/index";

let content = document.getElementById('root');
       
const router = async route =>{
    content.innerHTML = '';
    switch (route) {
        case '#/':{
           return content.appendChild(pages.home())
        }
        case '#/posts':
            return content.appendChild(await pages.posts())
        default:
            content.appendChild(pages.notFound())
            break;
    }
    console.log(route)
}


export { router }