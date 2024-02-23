var questions = document.querySelectorAll('.question-container');
var answers = document.querySelectorAll('.answer-container');
var addButtons = document.querySelectorAll('.fa-circle-plus');
var minusButtons = document.querySelectorAll('.fa-circle-minus');

var i = 0;
questions.forEach((item) => {
    item.addEventListener('click', hideOrShow, false);
    item.myParam = i++;
});

function hideOrShow(e) {
    var j = e.currentTarget.myParam;
    answers[j].classList.toggle('display-none');
    minusButtons[j].classList.toggle('display-none');
    addButtons[j].classList.toggle('display-none');
}









