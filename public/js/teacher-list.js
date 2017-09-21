define(["jquery", "template"], function ($, template) {
    $.ajax({
        type: "get",
        url: "/api/teacher",
        dataType: "json",
        success: function (data) {
            //var html = template("teacherTpl", data);
            //$("#teacherInfo").html(html);
            var html = template("teacherTpl", {list: data.result});
            $("#teacherInfo").html(html);


            //注销，启用功能。 讲师页面渲染成功了，才执行
            $(".clearoropen").click(function () {
                var that = this;
                //获取点击的按钮对应的数据
                var td = $(this).parent();
                var tcId = td.attr("tcId");
                var tcStatus = td.attr("tcStatus");
                //前后端交互
                $.ajax({
                    type: "post",
                    url: "/api/teacher/handle",
                    data: {
                        tc_id:tcId,
                        tc_status:tcStatus
                    },
                    dataType: "json",
                    success: function (data) {
                       if(data.code == 200){
                           //如果成功，改变按钮的状态
                           td.attr("tcStatus",data.result.tc_status);
                           //通过按钮的状态改变按钮的内容
                           if(td.attr("tcStatus") == 1){
                               $(that).html("启用");
                           }else{
                               $(that).html("注销");
                           }
                       }
                    }
                })
            })
        }
    })
})
