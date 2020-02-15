
document.addEventListener('DOMContentLoaded', () => {
    const mat = document.querySelectorAll('.mat');
    const ikkeMat = document.querySelectorAll('.ikke-mat');

    for(const matAvfall of mat) {
        matAvfall.addEventListener('click', (e) => {
            e.preventDefault();
            e.target.style.display = 'none';

            // This will return true if there is no more display is none
            if(Array.prototype.every.call(mat, ({ style }) => style.display === "none")) {
                alert('Woohooo! Du er så flink!')
            }
        })
    }

    for(const ikkeMatAvfall of ikkeMat) {
        ikkeMatAvfall.addEventListener('click', (e) => {
            e.preventDefault();
            alert('FEEEEIL!!!!')
        });
    }

});


