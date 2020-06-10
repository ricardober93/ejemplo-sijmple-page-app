import views from '../view/home.html'

export default () => {

    const divE = document.createElement('div');
    divE.innerHTML = views

    let btn = divE.querySelector('#btnClick')
    btn.addEventListener('click', () => {
        alert('click')
    })

    return divE;
}