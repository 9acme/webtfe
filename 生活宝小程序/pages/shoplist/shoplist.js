// pages/shoplist/shoplist.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        shops: [],
        page: 0,
        limit: 20,
        cardId: 1,
        hasMore: true
    },

    /**
     * 自定义函数,用于加载数据
     */
    loadMore: function () {
        //如果没有更多数据，就直接返回
        if(!this.data.hasMore) return
        //请求数据
        wx.request({
            url: "https://locally.uieee.com/categories/" + this.data.cardId + "/shops",
            data: {
                _page: ++this.data.page,
                _limit: this.data.limit
            },

            success: (res) => {
                var newshops = this.data.shops.concat(res.data);
                var count = parseInt(res.header['X-Total-Count']);
                var flag = this.data.page*this.data.limit < count; 
                this.setData({
                    shops: newshops,
                    hasMore: flag
                })
                console.log(newshops)
            }
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        //通过传过来的值设置页面标题
        if(options.title){
            wx.setNavigationBarTitle({
                title: options.title,
            })
        }
        this.setData({
            cardId: options.cat
        })
        this.loadMore();
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
        this.loadMore();
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})