document.addEventListener("DOMContentLoaded", function() {
  
  const buttons = document.querySelectorAll(".percent");
  const custom = document.getElementById("percent-custom");
  const reset = document.getElementById("reset");
  let clickedvalue = "";
  var number = "";
  const jsamt=document.getElementById("jsamt");
  const jstotalamt=document.getElementById("jstotalamt");
  buttons.forEach(button => {
      button.addEventListener("click", function() {
        buttons.forEach(btn => btn.style.backgroundColor = "");
        if(custom.value===""){
          buttons.forEach(btn => btn.style.backgroundColor = "");
            button.style.backgroundColor = "hsl(172, 67%, 45%)";
            clickedvalue = button.innerHTML;

            var percentText = button.innerHTML;
            number="";

          for (var i = 0; i < percentText.length; i++) {
              if (!isNaN(percentText[i])) {
                  number += percentText[i];
              }
          }
        } else{
            custom.addEventListener("click",function(){
              var percentText = button.innerHTML;
            number="";

          for (var i = 0; i < percentText.length; i++) {
              if (!isNaN(percentText[i])) {
                  number += percentText[i];
              }
          }
            })
        }

        
      });
  });
  custom.addEventListener("focus", function(){
    custom.style.borderColor = "1px solid hsl(172, 67%, 45%)";
    custom.style.textAlign = "right";
  });

  reset.addEventListener("click", function(){
    var bill = document.getElementById("bill");
    var result = bill.value;
    console.log(result);
    console.log(number);
    const people = document.getElementById("people");
    if (people.value === "") {
      console.log("empty");
    } else {
      console.log(people.value);
    }

    var tipamt= (result*(number/100))/people.value;
    var tiptotalamt=(result/people.value)+tipamt ;
    jsamt.innerHTML=tipamt.toFixed(2);
    jstotalamt.innerHTML=tiptotalamt.toFixed(2);
    console.log(tipamt);
    console.log(tiptotalamt);

  });
   
  var bill = document.getElementById("bill");
  var result = bill.value;
  console.log(result);
  console.log(number);
  
  
  const people = document.getElementById("people");
  people.addEventListener("input", function(){
    if (people.value === "") {
      console.log("empty");
    } else {
      console.log(people.value);
    }
  });

});
