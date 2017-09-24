define(["jquery", "template", "datepicker", "language", "validate", "teacherForm"], function ($, template) {
    //获取编辑按钮对应的id值
    var search = location.search;
    var val = search.substr(1);
    var tcId = null;
    //如果有传过来的id,或取对应的id
    if (val) {
        var zhi = val.split("&");
        $.each(zhi, function (index, item) {
            var k = item.split("=");
            if (k[0] == "tc_id") {
                tcId = k[1];
                return false;
            }
        })
    }

    //判断，有id是编辑功能，
    if (tcId) {
        $.ajax({
            type: "get",
            url: "/api/teacher/edit",
            data: {tc_id: tcId},
            dataType: "json",
            success: function (data) {
                data.result.operate = "编辑讲师";
                var html = template("addTpl", data.result);
                $("#teacherAdd").html(html);
                fn("/api/teacher/update");
            }
        })
        //没有是提交功能
    } else {
        var html = template("addTpl", {operate: "添加讲师"});
        $("#teacherAdd").html(html);
        fn("/api/teacher/add");
    }
    //实现表单提交

    function fn(url) {
        $("#teacherForm").validate({
            sendForm: false,
            valid: function () {
                console.log(11)
                $(this).ajaxSubmit({
                    type: "post",
                    url: url,
                    dataType:"json",
                    success: function (data) {
                        if (data.code == 200) {
                            location.href = "/teacher/list"
                        }
                    }
                })
            },
            description: {
                tcName: {
                    required: "用户名不能是空"
                },
                tcPass: {
                    required: "密码不能是空",
                    pattern: "密码格式不正确"
                },
                joinDate: {
                    required: "日期不能是空"
                }
            },
        })
    }

    //function fn(url){
    //    $("#commit").click(function () {
    //        $.ajax({
    //            type:"post",
    //            url:url,
    //            data:$("#teacherForm").serialize(),
    //            dataType:"json",
    //            success: function (data) {
    //
    //                if(data.code == 200){
    //                    location.href = "/teacher/list"
    //                }
    //            }
    //        })
    //    })
    //}

})
