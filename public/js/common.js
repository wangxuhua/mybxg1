NProgress.start();

NProgress.done();

$('.navs ul').prev('a').on('click', function () {
    $(this).next().slideToggle();
});

//ʵ���˳�����
$("#logoutBtn").click(function () {
    $.ajax({
        type: "post",
        url: "/api/logout",
        dataType: "json",
        success: function (data) {
            if (data.code == 200) {
                location.href = "/main/login";
            }
            ;
        }
    })
});

//�ж��Ƿ��¼
   //1.��ȡcookid��id
var flag = $.cookie("PHPSESSID");
   //2.�ж��Ƿ��¼����û��cookidֵ
if(!flag){
    location.href = "/main/login";
}
//��Ⱦͷ��

    //1.��ȡ����
 var loginInfo = $.cookie("loginInfo");
   //���ݾ�ת��
 loginInfo = loginInfo && JSON.parse(loginInfo);
 //2.��Ⱦҳ��
 $(".aside .profile img").attr("src",loginInfo.tc_avatar);
 $(".aside .profile h4").html(loginInfo.tc_name);


