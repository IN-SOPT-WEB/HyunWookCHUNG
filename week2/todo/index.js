document.getElementsByClassName('nav-goToday')[0].addEventListener('click',function(){
    document.getElementsByClassName('right')[0].classList.add('hidden');
    document.getElementsByClassName('left')[0].classList.remove('hidden');

})

document.getElementsByClassName('nav-goTomorrow')[0].addEventListener('click',function(){
    document.getElementsByClassName('left')[0].classList.add('hidden');
    document.getElementsByClassName('right')[0].classList.remove('hidden');

})


document.getElementsByClassName('go-togeter')[0].addEventListener('click',function(){
    document.getElementsByClassName('left')[0].classList.remove('hidden');
    document.getElementsByClassName('right')[0].classList.remove('hidden');

})