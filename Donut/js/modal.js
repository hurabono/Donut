let modalBtns = document.querySelectorAll(".detail");

modalBtns.forEach(function(btn){

      btn.onclick = function (){
            let modal = btn.getAttribute("data-modal");

            document.getElementById(modal).style.display = "block";
      };

});

let closeBtn = document.querySelectorAll(".close");

closeBtn.forEach(function(btn){
      btn.onclick = function(){
            let modal = (btn.closest(".bg-modal").style.display = "none");
      };
});