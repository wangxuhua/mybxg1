NProgress.start();

NProgress.done();

$('.navs ul').prev('a').on('click', function () {
    $(this).next().slideToggle();
});

//实现退出功能
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

//判断是否登录
   //1.获取cookid的id
var flag = $.cookie("PHPSESSID");
   //2.判断是否登录，有没有cookid值
if(!flag){
    location.href = "/main/login";
}
//渲染头像

    //1.获取数据
 var loginInfo = $.cookie("loginInfo");
   //数据局转换
 loginInfo = loginInfo && JSON.parse(loginInfo);
 //2.渲染页面
 $(".aside .profile img").attr("src",loginInfo.tc_avatar);
 $(".aside .profile h4").html(loginInfo.tc_name);


