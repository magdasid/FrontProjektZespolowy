function sign_in(){
    $(".signup").hide();
    $(".signin").show(); 
    $(".forgot").hide();
}

function sign_up() {
    $(".signin").hide();
    $(".signup").show();
    $(".forgot").hide();
    
    $('.ul li').click(function(){
    $('.ul li').removeClass('active');

    $(this).addClass('active');

});

}
function forgot() {
    $(".signin").hide();
    $(".signup").hide();
    $(".forgot").show();
}

window.onload = function(){
    
    $(".signup").hide();
    $(".signin").show();
    $(".forgot").hide();

}