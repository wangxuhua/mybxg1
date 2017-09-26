 require.config({
     baseUrl:"/public/assets",
     paths:{
         bootstrap:"bootstrap/js/bootstrap",//框架插件
         jquery:"jquery/jquery",
         cookie:"jquery-cookie/jquery.cookie",
         template:"artTemplate/template-web",//模板插件
         common:"../js/common",
         login:"../js/login",
         teacherlist:"../js/teacher-list",
         teacheradd:"../js/teacher-add",
         unit:"../js/unit",  //获取URL数据文件
         datepicker:"bootstrap-datepicker/js/bootstrap-datepicker",//日期插件
         language:"bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min",//日期语言插件
         validate:"validate/jquery-validate.min",//表单验证插件
         form:"jquery-form/jquery.form",//表单提交插件
         settings:"../js/settings",
         region:"jquery-region/jquery.region",//三级下拉插件
         ckeditor : 'ckeditor/ckeditor',//文本域插件
         uploadify:"uploadify/jquery.uploadify",//头像上传插件
     },
     shim:{
         bootstrap:{
            deps :["jquery"]
         },
         unit:{
             deps:["jquery"]
         },
         datepicker:{
             deps:["jquery"]
         },
         language:{
             deps:["jquery","datepicker"]
         },
         validate:{
             deps:["jquery"]
         },
         form:{
             deps:["jquery"]
         },
         region:{
             deps:["jquery"]
         },
         ckeditor : {
             exports : 'CKEDITOR'
         },
         uploadify:{
             deps:["jquery"]
         }
     }
 })
