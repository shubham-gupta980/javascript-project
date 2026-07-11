// let body = document.querySelector('body');
// let h1 = document.querySelectorAll('#h1');
// document.getElementById('gray').addEventListener('click', ()=> {
//     body.style.background = 'gray'
//     h1.forEach((val)=> {
//         val.style.color = "white";
//     })
// })
// document.getElementById('white').addEventListener('click', ()=> {
//     body.style.background = 'white'
//     h1.forEach((val)=> {
//         val.style.color = "black";
//     })
// })
// document.getElementById('blue').addEventListener('click', ()=> {
//     body.style.background = 'blue'
//     h1.forEach((val)=> {
//         val.style.color = "white";
//     })
// })
// document.getElementById('yellow').addEventListener('click', ()=> {
//     body.style.background = 'yellow'
//     h1.forEach((val)=> {
//         val.style.color = "white";
//     })
// })

let body = document.querySelector('body');
let btn = document.querySelectorAll('.button');
btn.forEach(function (btncolor) {
    // console.log(btncolor);
    btncolor.addEventListener('click', (e)=>{
        console.log(e);
        console.log(e.target)
        if(e.target.id === 'gray') {
            body.style.background = e.target.id;
        }
        if(e.target.id === 'white') {
            body.style.background = e.target.id;
        }
        if(e.target.id === 'blue') {
            body.style.background = e.target.id;
        }
        if(e.target.id === 'yellow') {
            body.style.background = e.target.id;
        }
        if(e.target.id === 'purple') {
            body.style.background = e.target.id;
        }
    })
})