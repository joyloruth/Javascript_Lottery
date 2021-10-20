
function random(max){
  return Math.floor(Math.random(max) * max);
 }
  const counter = document.querySelector('.counter');
  const speed = 200;
 
  const updateCount = () => {
    const target = +counter.getAttribute('data-target') * random(30) ;
    const count = +counter.innerText;
    const inc = target/speed;
    
    if(count<target)
    {
      counter.innerText = count + inc;
      setTimeout(updateCount, 9);
    }
 
    else
    {
      count.innerText =  target;
    }
 
    switch(true)
      {
        case (0 <= count && count <= 1000):
          setTimeout(function(){ document.getElementById('alert-win').style.display = 'block'; }, 1000);
          setTimeout(function(){ document.getElementById('alert-lose').style.display = 'none'; }, 1000);
          break;
       case (count >= 1000):
           setTimeout(function(){ document.getElementById('alert-lose').style.display = 'block'; }, 1000);
           setTimeout(function(){ document.getElementById('alert-win').style.display = 'none'; }, 1002);
          break;
 
      }
    }
 
 function closeAlert(){
   var alertbox = document.getElementById("alert-lose");
   alertbox.remove();
   window.location.reload(true); 
 }
 function closeAlertWin(){
   var alertboxWin = document.getElementById("alert-win");
   alertboxWin.remove();
   window.location.reload(true); 
 }
 
 