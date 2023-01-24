let h1 = document.getElementsByTagName('h1')[0];

let list = document.querySelectorAll('.list');   
list[0].addEventListener('click', () => {
    h1.innerText = 'Hey There';
})

list[1].addEventListener('click', () => {
    h1.innerText = 'About-Me';
})

list[2].addEventListener('click', () => {
    h1.innerText = 'Projects';
})

list[3].addEventListener('click', () => {
    h1.innerText = 'Contact';
    let contact = document.getElementById('contact')
    contact.classList.toggle('active')
})

for(let i=0; i<list.length; i++)
{
   list[i].addEventListener("click",() =>{
        
        let j = 0;
        while(j < list.length)
        {
            list[j++].className = 'list';
        }
        list[i].className = 'list active';
   })
}

let btnInfo = document.querySelector('.btninfo').addEventListener('click', () => {
    let info = document.querySelector('.moreinfo');
    info.classList.toggle('active');
})


const center = document.querySelector('.center')

function cenblock(){
    for(var i = 1; i<=5; i++){
            const blocks = document.createElement('div')
            blocks.classList.add('block');
            center.appendChild(blocks);
        }
}
cenblock();
