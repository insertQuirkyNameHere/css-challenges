const button = document.querySelector('.submit-btn');

button.addEventListener('click', ()=>{
    const thankYou = document.querySelector('.thankYou-section');
    const ratingSection = document.querySelector('.rating-section');
    const radio = document.querySelector('input[type="radio"]:checked');

    if(radio){
        const selectionInfo = document.querySelector('.selection-info');
        let number = radio.value;
        selectionInfo.textContent = `You selected ${number} out of 5`
        thankYou.style.display = 'flex';
        ratingSection.style.display = 'none';

        document.getElementById('back').addEventListener('click', ()=>{
            thankYou.style.display = 'none';
            ratingSection.style.display = 'flex';
        })
    }
})