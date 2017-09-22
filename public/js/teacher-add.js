define(["jquery","template"],function($,template){
    //获取编辑按钮对应的id值
    var search = location.search;
    var val = search.substr(1);
    var tcId = null;
    //如果有传过来的id,或取对应的id
    if(val){
        var zhi  =  val.split("&");
        $.each(zhi,function(index,item){
            var k = item.split("=");
            if(k[0] == "tc_id"){
                tcId = k[1];
                return false;
            }
        })
    }

    //判断，有id是编辑功能，
    if(tcId){
        $.ajax({
            type:"get",
            url:"/api/teacher/edit",
            data:{tc_id:tcId},
            dataType:"json",
            success: function (data) {
                data.result.operate = "编辑讲师";
                var html = template("addTpl",data.result);
                $("#teacherAdd").html(html);
                fn("/api/teacher/update");
            }
        })
        //没有是提交功能
    }else{
        var html = template("addTpl",{operate:"添加讲师"});
        $("#teacherAdd").html(html);
        fn("/api/teacher/add");
    }
    //实现表单提交
    function fn(url){
        $("#commit").click(function () {
            $.ajax({
                type:"post",
                url:url,
                data:$("#teachForm").serialize(),
                dataType:"json",
                success: function (data) {

                    if(data.code == 200){
                        location.href = "/teacher/list"
                    }
                }
            })
        })
    }

})
