let btn = document.getElementById('btn');
let rates = document.querySelectorAll('#list li');
const card_1 = document.querySelector('.card-1');
const card_2 = document.querySelector('.card-2');
const ratings = document.querySelector('ul');
const ratingList = document.querySelectorAll('.rating');
const selectedRating = document.querySelector('#selected-ratings');


// Submit Button functionality
btn.addEventListener('mouseover', mouse_over);
btn.addEventListener('mouseout', mouse_out);
btn.addEventListener('click', rating_input);
btn.addEventListener('click', display_card_2);

function mouse_over (){
    btn.style.backgroundColor = 'hsl(0, 0%, 100%)';
    btn.style.color = 'hsl(25, 97%, 53%)'
}

function mouse_out (){
    btn.style.backgroundColor = 'hsl(25, 97%, 53%)';
    btn.style.color = 'hsl(0, 0%, 100%)'
}

// Displays card 2 and hide card 1
function display_card_2 (){
    card_1.style.display = "none";
    card_2.style.display = "block"
}



let rating = 1;
function rating_input (){
    card_2.classList.add('active');
    selectedRating.innerHTML = rating;
}

ratings.addEventListener('click', e => {
    if (e.target.tagName === 'LI') {
        ratingList.forEach(element => {
            if (element.classList.contains('rating-clicked')) {
                element.classList.remove('rating-clicked')
            }
        });
        rating = e.target.innerText;
        e.target.classList.add('rating-clicked');
    }
});

