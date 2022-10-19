const input = document.getElementById('input')
console.log(input)
function addingEventListener(){
    function clickAlert(){
    alert('I was clicked!!')
}
input.addEventListener('click', clickAlert);
  
}
addingEventListener();
