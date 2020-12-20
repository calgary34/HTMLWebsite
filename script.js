function btnClick(str){
  let test=document.getElementById('test')
  test.innerHTML=str
}
function spinclick(){
  let pizza=document.getElementById('pizza')
  if (pizza.className=='pizza1'){
    pizza.className='pizza'
  }
  else{
    pizza.className='pizza1'
  }
  let donut=document.getElementById('donut')
  if (donut.className=='donut1'){
    donut.className='donut'
  }
  else{
    donut.className='donut1'
  }
}
