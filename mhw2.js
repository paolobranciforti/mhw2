//funzione per cambiare momentaneamente l'immagine dei piloti quando si passa con il mouse sopra
function changepilota(event) {
    // per trovare il data-index del div su cui è avvenuto l'evento
    const index = event.target.getAttribute('data-index');
    // per ottenere l'immagine all'interno del div
    const img = event.target.querySelector('img');
    console.log(index);
    switch(index){
        case '0':
            img.src = "https://resources.motogp.pulselive.com/photo-resources/2024/03/19/97518882-02b5-4102-9a9f-040a262b73fa/_LGZ1807.jpg?width=800&height=450";
            break;
        
        case '1':
            img.src = "https://resources.motogp.pulselive.com/photo-resources/2024/03/08/6c0d7fab-381a-4ca8-a8e4-4baae319fb42/_LG94128.jpg?width=800&height=450";
            break;

        case '2':
            img.src = "https://resources.motogp.pulselive.com/photo-resources/2024/03/24/6a38784f-105f-4abf-a64c-9f98e698824f/DS_05974-1-.jpg?width=800&height=450";
            break;

        case '3':
            img.src = "https://resources.motogp.pulselive.com/photo-resources/2023/08/20/7bd2635f-5e1d-4e22-96c5-4a0eca9eb4d5/_LG96079.jpg?height=510&width=800";
            break;
        
        default:
            console.log(`Non ho trovato l'indice`);
    }
}

function restorepilota(event) {
    const index = event.target.getAttribute('data-index');
    // Ottieni l'immagine all'interno del div
    const img = event.target.querySelector('img');
    switch(index){
        case '0':
            img.src = "https://resources.motogp.pulselive.com/photo-resources/2024/03/07/46c65a83-f2bf-42cc-afe3-727ad13f9759/01-bagnaia-profile-card.png?width=280&height=420";
            break;
        
        case '1':
            img.src = "https://resources.motogp.pulselive.com/photo-resources/2024/03/07/7ad40c9e-1a2b-490a-ab50-69dd1a52acd3/89-martin-profile-card.png?width=280&height=420";
            break;

        case '2':
            img.src = "https://resources.motogp.pulselive.com/photo-resources/2024/03/07/0ca47f8a-953f-41fc-9afe-d99acadb3773/mgp-card-riders-profile-31-PAacp.png?width=280&height=420";
            break;

        case '3':
            img.src = "https://resources.motogp.pulselive.com/photo-resources/2024/03/07/de854d5c-f948-4cb1-9472-fc985c7b908e/72-bezzecchi-profile-card.png?width=280&height=420";
            break;
        
        default:
            console.log(`Non ho trovato l'indice`);
    }
}
// prende tutti i div con classe ".piloti"
const pilotiDivs = document.querySelectorAll('.pilota');
// Aggiungi event listeners a ciascun div
pilotiDivs.forEach(div => {
    div.addEventListener('mouseenter', changepilota);
    div.addEventListener('mouseleave', restorepilota);
});





//funzione per cambiare l'immagine del fantasy motogp quando si clicca sull'immagine
function changeFantasy(event){
    const imageFantasy = event.currentTarget;
    imageFantasy.removeEventListener('click',changeFantasy)
    const fantasyOne = document.querySelector('.fantasy-widget-foto');
    const fantasyTwo = document.querySelector('#fantasy-second-image');
    fantasyOne.classList.add('hidden');
    fantasyTwo.classList.remove('hidden');
}
const imageFantasy=document.querySelector('.fantasy-widget-foto img');
imageFantasy.addEventListener('click',changeFantasy);





//funzione per cambiare l'immagine e il testo della promo widget quando si clicca sul bottone rosso
function scopriPWC(event) {
    const nuovo_h2 = document.createElement('h2');
    nuovo_h2.textContent = '';
    const nuovo_h3 = document.createElement('h3');
    nuovo_h3.textContent = 'F.Bagnaia è caduto e ha vinto J.Martin, seguito da E.Bastianini e il mitico P.Acosta';
    const nuova_img = document.createElement('img');
    nuova_img.src = 'https://resources.motogp.pulselive.com/photo-resources/2024/03/24/aa27bf97-607a-43e1-a6f0-bc63b1ee66b6/report_MGP-RACE.jpg?width=800&height=450';
    const nuovo_pwc_container = document.querySelector('.promo-widget-container');
    nuovo_pwc_container.innerHTML = '';
    nuovo_pwc_container.appendChild(nuovo_h2);
    nuovo_pwc_container.appendChild(nuovo_h3);
    nuovo_pwc_container.appendChild(nuova_img);
}
const nuovoPWC = document.querySelector('.promo-widget-text a');
nuovoPWC.addEventListener('click', scopriPWC);





//funzione per cambiare immagine e testo del single promo quando si clicca sul bottone rosso
function scopriSPC(event) {
    const nuovo_h2_spc = document.createElement('h2');
    nuovo_h2_spc.textContent = '';

    const nuovo_h3_spc  = document.createElement('h3');
    nuovo_h3_spc.textContent = 'Loro sono i campioni di Valencia 2022';

    const nuova_img_spc  = document.createElement('img');
    nuova_img_spc.src = 'https://resources.motogp.pulselive.com/photo-resources/2023/03/30/529bcb84-c456-4257-970d-b94689da910a/g29RxTCj.jpg?width=2880&height=1620';

    const nuovo_spc_container = document.querySelector('.single-promo-container');
    nuovo_spc_container.innerHTML = '';
    
    nuovo_spc_container.appendChild(nuovo_h2_spc);
    nuovo_spc_container.appendChild(nuovo_h3_spc);
    nuovo_spc_container.appendChild(nuova_img_spc);
}

const nuovoSPC = document.querySelector('.single-promo-text a');
nuovoSPC.addEventListener('click', scopriSPC);





// funzione per zoomare momentaneamente sulle immagini del tickets quando si passa con il mouse sopra
const immaginez = document.getElementById('.tickets-element img');
immaginez.addEventListener('mouseover', () => {
    immaginez.style.transform = 'scale(1.5)';
});

immaginez.addEventListener('mouseout', () => {
    immaginez.style.transform = 'scale(1)';
});




