define(["jquery", "template","bootstrap"], function ($, template) {
    $.ajax({
        type: "get",
        url: "/api/teacher",
        dataType: "json",
        success: function (data) {
            //模板渲染讲师列表
            var html = template("teacherTpl",{list:data.result});
            $("#teacherInfo").html(html);

            //点击查看按钮功能
            $(".teacherLook").click(function () {
                //点击按钮获取的数据
                var td = $(this).parent();
                var tcId = td.attr("tcId");
                var tcStatus = td.attr("tcStatus");
                //前后台交互
                $.ajax({
                    type:"get",
                    url:"/api/teacher/view",
                    data:{tc_id:tcId},
                    dataType:"json",
                    success: function (data) {
                        console.log(data);
                        var html = template("look",data.result);
                        $("#lookModel").html(html);
                        $("#teacherModal").modal();
                    }
                })
            })
            //  注销启用功能
            $(".cao").click(function () {
                var that = this;
                var td = $(this).parent()
                var tcid = td.attr("tcid");
                var tcStatus =td.attr("tcStatus");
                $.ajax({
                    type:"post",
                    url:"/api/teacher/handle",
                    data:{tc_id:tcid,tc_status:tcStatus},
                    dataType:"json",
                    success: function (data) {
                        //如果成功个，改变td的状态
                       td.attr("tcStatus",data.result.tc_status)
                        if(td.attr("tcStatus") == 1){
                            $(that).html("启用")
                        }else{
                            $(that).html("注销")
                        }
                    }
                })
            })
             //    编辑添加功能
        }
    })
})
