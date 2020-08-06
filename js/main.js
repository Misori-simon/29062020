//this function is to hide and show content based on the payement method choosen on the sell page
function populate(ls1, ls2){

  var l1 = document.getElementById(ls1);
  var l2 = document.getElementById(ls2);

  var allThem = document.getElementsByName('meth');
  for(var them of allThem){
  them.style.display= "none";
  }

  var ele = l1.value;
  var show = document.getElementById(ele);
  show.style.display="block";
}
