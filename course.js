const nameInput = document.querySelector('#input-name');
const ratingInput = document.querySelector('#input-rating');
const cancelBtn = document.querySelector('#btn-cancel');
const confirmBtn = document.querySelector('#btn-confirm');
const courseList = document.querySelector('#course-list');
const averageRatingOutput = document.querySelector('#average-rating');

let ratingsTotal = 0;
let totalCoursesRated = 0;

const clear = () => {
    nameInput.value = '';
    ratingInput.value = '';
}

function presentAlert() {
    const alert = document.createElement('ion-alert');
    alert.header = 'Alert';
    alert.subHeader = 'Invalid entry';
    alert.message = 'Please enter valid data';
    alert.buttons = ['OK'];
  
    document.body.appendChild(alert);
    return alert.present();
  }

cancelBtn.addEventListener('click', clear);

confirmBtn.addEventListener('click', () => {
    const enteredName = nameInput.value;
    const enteredRating = ratingInput.value;

    if (
        enteredName.trim().length <= 0 ||
        enteredRating.trim().length <= 0 ||
        enteredRating < 1 ||
        enteredRating > 5
    ) {
        presentAlert();
        return; 
    } else {
        const newItem = document.createElement('ion-item');
        newItem.textContent = enteredName + ': ' + enteredRating;
        courseList.appendChild(newItem);
        ratingsTotal += +enteredRating;
        totalCoursesRated ++;
        averageRatingOutput.textContent = Math.round(((ratingsTotal/totalCoursesRated) + Number.EPSILON) * 100) / 100;
        clear();
    }
})