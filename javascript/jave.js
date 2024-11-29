// ====================drop list=============//
function toggleList() {
    let listElement = document.getElementById('drop');
    
    if (listElement.style.display === "none") {
      listElement.style.display = "block";

    } else {
      listElement.style.display = "none";
    }
  }
  // ====================change theme=============// 
  let replacebutton = document.getElementById("replace");
  let theme1 =document.getElementById("theme1");
let theme2 =document.getElementById("theme2");

replacebutton.addEventListener('click', function () {
  if(theme2.hasAttribute('disabled')) {
      theme2.removeAttribute('disabled');
      theme1.setAttribute('disabled','disabled');
  }
  else {
      theme2.setAttribute('disabled','disabled');
      theme1.removeAttribute('disabled');
  }
});