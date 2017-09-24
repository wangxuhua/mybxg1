define(["jquery", "template", "uploadify", "region"], function ($, template) {
    $.ajax({
        type: "post",
        url: "/api/teacher/profile",
        dataType: "json",
        success: function (data) {

            if (data.code == 200) {
                var html = template("settings", data.result);
                $("#peoperCenter").html(html);
                //处理头像上传
                $('#upfile').uploadify({
                    width : 120,
                    height : 120,
                    buttonText : '',
                    itemTemplate : '<span></span>',
                    swf : '/public/assets/uploadify/uploadify.swf',
                    uploader : '/api/uploader/avatar',
                    fileObjName : 'tc_avatar',
                    onUploadSuccess : function(a,b){
                        console.log(b);
                        var obj = JSON.parse(b);
                        $('.preview img').attr('src',obj.result.path);
                    }
                });
                //    三级联动
                $("#pcd").region({
                    url: "/public/assets/jquery-region/region.json"
                })
            }
        }
    })
})
