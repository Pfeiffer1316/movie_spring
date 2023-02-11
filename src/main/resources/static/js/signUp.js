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

// 데이터 정합성 체크
function check_data(){
    let id = document.getElementById("id").value
    let pw = document.getElementById("pw").value
    let nickname = document.getElementById("nickname").value
    let email = document.getElementById("email").value
    let recommender = document.getElementById("recommender").value
    let check = true

    if(email.includes("@")){
        let emailId = email.split("@")[0]
        let emailServer = email.split("@")[1]
        if(!emailId || !emailServer){
            document.getElementById("emailErr").innerHTML="이메일을 정확하게 입력하세요."
            check = false
        }
    }
    else{
        document.getElementById("emailErr").innerHTML="이메일의 형식이 올바르지 않습니다."
    }

    if(!id){
        document.getElementById("idErr").innerHTML="아이디를 입력해주세요."
        check = false
    }
    // 정규표현식(Regular Expression)
    var idRegExp = /^[a-zA-Z0-9]{6,20}$/
    if (!idRegExp.test(id)){
        alert("아이디는 영문 대/소문자와 숫자로 입력해야합니다.")
    }
}

// 이메일 인증번호
$checkEmail.click(function() {
    $.ajax({
       type : "POST",
       url : "login/mailConfirm",
       data : {
          "email" : $memail.val()
       },
       success : function(data){
          alert("인증 코드가 발송되었습니다.")
          console.log("data : "+data);
          chkEmailConfirm(data, $memailconfirm, $memailconfirmTxt);
       }
    })
 })
 
     // 이메일 인증번호 체크 함수
     function chkEmailConfirm(data, $memailconfirm, $memailconfirmTxt){
         $memailconfirm.on("keyup", function(){
             if (data != $memailconfirm.val()) { //
                 emconfirmchk = false;
                 $memailconfirmTxt.html("<span id='emconfirmchk'>인증 코드가 맞지 않습니다.</span>")
                 $("#emconfirmchk").css({
                     "color" : "#FA3E3E",
                     "font-weight" : "bold",
                     "font-size" : "10px"
 
                 })
                 //console.log("중복아이디");
             } else { // 아니면 중복아님
                 emconfirmchk = true;
                 $memailconfirmTxt.html("<span id='emconfirmchk'>인증 완료</span>")
 
                 $("#emconfirmchk").css({
                     "color" : "#0D6EFD",
                     "font-weight" : "bold",
                     "font-size" : "10px"
 
                 })
             }
         })
     }