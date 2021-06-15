
var SELECT = 0;

$(function(){

    
    $('button').click(function(){
        var i = $(this).parents('tr').index();
        SELECT = i;
        $('.modal').toggle();
    });

    $('.modal .remove').click(function(event){
        event.preventDefault();
        $('tbody > tr').eq(SELECT).hide();
        console.log(SELECT);
        $('.modal').hide();

    });

});