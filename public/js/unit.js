define(["jquery"],function ($) {
    return{
        //获取URL中的数据
        qs:function(a){
            var  search = location.search.substr(1);
            var key = search.split("&");
            //定义一个变量存值
            var value = null;
            $.each(key, function (index,item) {
                var zhi = item.split("=");
                if(zhi[0]== a){
                    value = zhi[1];
                }
            })
            return value;
        }
    }


})
