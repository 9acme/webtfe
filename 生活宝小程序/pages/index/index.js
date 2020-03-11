// pages/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        sliders: [
            {
                "id": 1,
                "image": "http://ww1.sinaimg.cn/mw690/006ThXL5ly1fj7zx3w751j30u00dmgy3.jpg",
                "link": ""
            },
            {
                "id": 2,
                "image": "http://ww1.sinaimg.cn/mw690/006ThXL5ly1fj6ckx9tlwj30u00fqk8n.jpg",
                "link": "/pages/list/list?cat=10"
            }
        ],
        navs: [
            {
                "id": 1,
                "name": "美食",
                "icon": "http://ww1.sinaimg.cn/large/006ThXL5ly1fj8w5i2onyj302u02umwz.jpg"
            },
            {
                "id": 2,
                "name": "洗浴足疗",
                "icon": "http://ww1.sinaimg.cn/large/006ThXL5ly1fj8w5i2j4dj302u02umwy.jpg"
            },
            {
                "id": 3,
                "name": "结婚啦",
                "icon": "http://ww1.sinaimg.cn/large/006ThXL5ly1fj8w5i56i0j302u02u744.jpg"
            },
            {
                "id": 4,
                "name": "卡拉OK",
                "icon": "http://ww1.sinaimg.cn/large/006ThXL5ly1fj8w5i2uzvj302u02udfo.jpg"
            },
            {
                "id": 5,
                "name": "找工作",
                "icon": "http://ww1.sinaimg.cn/large/006ThXL5ly1fj8w5i2rnlj302u02umwz.jpg"
            },
            {
                "id": 6,
                "name": "辅导班",
                "icon": "http://ww1.sinaimg.cn/large/006ThXL5ly1fj8w5i2zloj302u02udfn.jpg"
            },
            {
                "id": 7,
                "name": "汽车保养",
                "icon": "http://ww1.sinaimg.cn/large/006ThXL5ly1fj8w5i69eij302u02ua9w.jpg"
            },
            {
                "id": 8,
                "name": "租房",
                "icon": "http://ww1.sinaimg.cn/large/006ThXL5ly1fj8w5i6j2lj302u02u0sj.jpg"
            },
            {
                "id": 9,
                "name": "装修",
                "icon": "http://ww1.sinaimg.cn/large/006ThXL5ly1fj8w5i6z1pj302u02ua9u.jpg"
            }
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {
        console.log(this.data.messages)
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})