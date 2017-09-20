define(["jquery","cookie"],function(){
    $("#loginBtn").click(function(){
        $.ajax({
            type:"post",
            url:"/api/login",
            data: $("#loginForm").serialize(),
            dataType:"json",
            success:function(data){
                if(data.code == 200){
                    //���û��ĵ�¼��Ϣ�洢��cookie�У������ҳ�湲�����ݡ�
                    $.cookie("loginInfo",JSON.stringify(data.result),{pash:"/"});
                    location.href = "/main/index";
                }
            }
        });
        return false;
    });
})
