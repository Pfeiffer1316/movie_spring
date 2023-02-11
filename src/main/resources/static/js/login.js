$(function(){

    $("#btnEye").on("click",function(){
        $("#pwd").toggleClass('active');
        if($("#pwd").hasClass('active')){
            $('#pwd').prop('type',"text");
            $('#btnEye').prop('src',"../static/icons/eye-slash-regular.svg");
        }
        else{
            $('#pwd').prop('type',"password");
            $('#btnEye').prop('src',"../static/icons/eye-regular.svg");
        }
    });
});
