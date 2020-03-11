// pages/message/message.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        messages: [
            {
                id: '1',
                title: "笔记本狂欢",
                date: "2017-12-12",
                image: "https://m.360buyimg.com/mobilecms/s1125x549_jfs/t14860/139/504394142/191023/ca7c592e/5a2fcd75Ncde0d77d.jpg!q70.jpg",
                desc: "越努力越幸运。"
            },
            {
                id: '2',
                title: "无惧雾霾",
                date: "2018-12-12",
                image: "https://img1.360buyimg.com/da/jfs/t15013/308/338076309/180567/6cd6603d/5a2a466cNff568379.jpg",
                desc: "越努力越幸运。"
            },
            {
                id: '3',
                title: "爱车焕新装",
                date: "2017-12-12",
                image: "https://m.360buyimg.com/mobilecms/s1125x549_jfs/t14023/275/1983074516/150155/84e8e488/5a2f7a69N4292c954.jpg!q70.jpg",
                desc: "越努力越幸运。"
            },
            {
                id: '4',
                title: "年末狂欢",
                date: "2017-10-12",
                image: "https://m.360buyimg.com/mobilecms/s1125x549_jfs/t15328/245/519883024/134960/eedef659/5a2f8103Nb5f6cbab.jpg!q70.jpg",
                desc: "越努力越幸运。"
            },
            {
                id: '5',
                title: "618活动开始了",
                date: "2017-11-09",
                image: "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/26398/24/10412/145515/5c875b21Ef2c61edc/f3d60b7e131ddfd8.jpg!q80.dpg.webp",
                desc: "越努力越幸运。"
            }
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        console.log(this.data.messages)
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

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})