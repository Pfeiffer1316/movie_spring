// 비밀번호 가림 옵션

$(function(){

    $("#btnEye1").on("click",function(){
        $("#pwd1").toggleClass('active');
        if($("#pwd1").hasClass('active')){
            $('#pwd1').prop('type',"text");
            $('#btnEye1').prop('src',"icons/eye-slash-regular.svg");
        }
        else{
            $('#pwd1').prop('type',"password");
            $('#btnEye1').prop('src',"icons/eye-regular.svg");
        }
    });
});

$(function(){

    $("#btnEye2").on("click",function(){
        $("#pwd2").toggleClass('active');
        if($("#pwd2").hasClass('active')){
            $('#pwd2').prop('type',"text");
            $('#btnEye2').prop('src',"icons/eye-slash-regular.svg");
        }
        else{
            $('#pwd2').prop('type',"password");
            $('#btnEye2').prop('src',"icons/eye-regular.svg");
        }
    });
});

// 체크박스 전체 선택
$(".checkbox_group").on("click", "#check_all", function () {
    $(this).parents(".checkbox_group").find('input').prop("checked", $(this).is(":checked"));
});

// 체크박스 개별 선택
$(".checkbox_group").on("click", ".normal", function() {
    var is_checked = true;

    $(".checkbox_group .normal").each(function(){
        is_checked = is_checked && $(this).is(":checked");
    });

    $("#check_all").prop("checked", is_checked);
});

