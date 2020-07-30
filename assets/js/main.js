$(document).ready(function(){
    console.log("tu");
    $(window).scroll(function(){
        let top = $(this)[0].scrollY;
            if(top > 500){
                $("#scrollTop").show();
            } else {
                $("#scrollTop").hide();
            }
    });
    $(".sidenav").sidenav();
    $(".carousel").carousel();
    $('.materialboxed').materialbox();
    $('select').formSelect();
    $('input#input_text, textarea#textarea1').characterCounter();
    $("#btnSend").click(function(){
        $("#myToast").toast({ 
            // autohide: false,
            delay: 3000 
        });
        $("#myToast").toast('show');
        document.getElementById("#formContact").reset();
        window.location.reload();
    }); 
       // modali
       var linkAutor=document.getElementById("autor");
       var zatvori=document.getElementById("zatvori0");
       linkAutor.addEventListener("click",otvoriModal);
       zatvori.addEventListener("click",zatvoriModal);
     
  
     document.getElementById("otvoriNoviTab").addEventListener("click", function(){
         window.open("https://portfolio-anjatomic.netlify.com/", "_blank");
     });
   //modal - autor
function otvoriModal(){
    document.getElementById("modal0").style.display="block"
}
function zatvoriModal(){
    document.getElementById("modal0").style.display="none"
}

var modal = document.getElementById('modal0');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


});

$("#myModal").on("shown.bs.modal",function(){
    $("#myInput").trigger("focus")
});

$('#pills-tab a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
})