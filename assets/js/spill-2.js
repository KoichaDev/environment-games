
document.addEventListener('DOMContentLoaded', () => {
    const mat = document.querySelectorAll('.mat');
    const ikkeMat = document.querySelectorAll('.ikke-mat');

    for(const matAvfall of mat) {
        matAvfall.addEventListener('click', (e) => {
            e.preventDefault();
            e.target.style.display = 'none';
            alert('RIKTIG!!!')
        })
    }

    for(const ikkeMatAvfall of ikkeMat) {
        ikkeMatAvfall.addEventListener('click', (e) => {
            e.preventDefault();
            alert('FEEEEIL!!!!')
            
        });
    }

});


