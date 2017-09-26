define(["jquery","template","unit","datepicker","language","validate","form"],function($,template,unit){
//    获取页面跳转传递的id"validate",
    var tcid = unit.qs("tc_id");
   //判断,有id的是编辑页面，没id的是添加页面
    if(tcid){
    //    编辑页面
        $.ajax({
            type:"get",
            url:"/api/teacher/edit",
            data:{tc_id:tcid},
            dataType:"json",
            success:function(data){
                var html = template("addTpl",data.result);
                $("#teacherModel").html(html);
            //    点击提交按钮，返回页面
                fn("/api/teacher/update")
            }
        })
        //    添加页面
    }else{

        var html = template("addTpl",{});
        $("#teacherModel").html(html);
        //点击按钮事件
         fn("/api/teacher/add")
    }
//  封装表单提交验证函数
    function fn(url){
        $("#teacherForm").validate({
            sendForm:false,
            valid: function () {
                $(this).ajaxSubmit({
                    type:"post",
                    url:url,
                    dataType:"json",
                    success: function (data) {
                        if(data.code == 200){
                           location.href = "/teacher/list"
                        }
                    }
                })
            },
            description:{
                name:{
                    required:"请输入姓名"
                },
                pass:{
                    required:"请输入密码"
                },
                joinData:{
                    required:"请输入日期"
                }
            }
        })
    }
})
