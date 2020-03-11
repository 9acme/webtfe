App({
  onLaunch: function(){
      console.log("当小程序初始化完成时");
  },

    onShow: function (options){
      console.log("当小程序切前台时");
  },

  onHide: function(){
      console.log("当小程序切后台时");
  },

  onError: function(){
      console.log("当小程序发生错误时");
  },

  onPageNotFound: function(){
      console.log("当页面找不到时");
  }
})