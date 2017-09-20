define(["jquery","cookie"],function(){
    $("#loginBtn").click(function(){
        $.ajax({
            type:"post",
            url:"/api/login",
            data: $("#loginForm").serialize(),
            dataType:"json",
            success:function(data){
                if(data.code == 200){
                    //把用户的登录信息存储到cookie中，方便跨页面共享数据。
                    $.cookie("loginInfo",JSON.stringify(data.result),{pash:"/"});
                    location.href = "/main/index";
                }
            }
        });
        return false;
    });
})
