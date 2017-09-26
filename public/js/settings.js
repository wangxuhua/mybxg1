define(["jquery", "template", "region","ckeditor","uploadify", "datepicker", "language"], function ($, template , region , CKEDITOR,uploadify) {
    $.ajax({
        type: "get",
        url: "/api/teacher/profile",
        dataType: "json",
        success: function (data) {
            //模板渲染个人中心
            var html = template("myself", data.result);
            $("#myselfBox").html(html)
            //三级联动下拉插件
            $("#pcd").region({
                url: "/public/assets/jquery-region/region.json"
            })
            //文本域插件
            CKEDITOR.replace("editor",{
                toolbarGroups : [
                    { name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
                    { name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] }
                ]
            });
            //头像上传插件
             $("#upfile").uploadify({
                 itemTemplate:"<span></span>",
                 buttonText:"",
                 width:120,
                 height:120,
                 swf:"/public/assets/uploadify/uploadify.swf",
                 uploader:"/api/uploader/avatar",
                 fileObjName:"tc_avatar",
                 onUploadSuccess: function (a,b,c) {
                     console.log(b)
                     //var obj = JSON.parse(b);
                     //$('.preview img').attr('src',obj.result.path);
                 }
             })
            //点击保存按钮事件
            var p = $("#p").find("option:selected").text();
            var c = $("#c").find("option:selected").text();
            var d = $("#d").find("option:selected").text();
            var home = p+"|"+c+"|"+d;
            //console.log(home);
          $("#baocun").click(function () {
              //获取省市县的数据

              $.ajax({
                  type:"post",
                  url:"/api/teacher/modify",
                  data:$("#myForm").serialize(),
                  dataType:"json",
                  success: function (data) {
                      if(data.code = 200){
                          location.reload();
                      }
                  }
              })
          })
        }
    })
})
