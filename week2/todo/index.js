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

// 1. 코드를 가독성을 높이는 법. 
// 2. 변수 설정하는 법. 중요
// 3. 함수 설정하는 법. 중요
// 4. 반복문 설정하는 법.
// 5. js가 브라우저를 어떻게 다루는지.
// 6. defer 그냥 외워..!
// 7. 자바스크립트가 돔을 어떻게 다루는지 물어보면 좋을거 같다^^*;;


var button = document.getElementById('add-today','add-tomorrow');
var input = document.getElementById('input-today','input-tomorrow');
var list = document.getElementById('list-today','list-tomorrow');

button.addEventListener('click', clickButton);


var cnt = 1;

function clickButton() {
  var temp = document.createElement('li');
  temp.setAttribute("class", "list-group-item");
  temp.setAttribute("id", "li"+cnt);
  temp.innerHTML = input.value;
  temp.innerHTML += "<button style='float: right;' class='btn btn-outline-secondary' type='button' onclick='remove("+cnt+")'>삭제</button>";
  list.appendChild(temp);
  cnt++;
}
function remove(cnt) {
    var li = document.getElementById('li'+cnt);
    list.removeChild(li);
  }