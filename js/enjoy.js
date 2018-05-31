//分享给朋友
wx.onMenuShareAppMessage({
    title: 'PalletOne团队招聘', // 分享标题
    desc: '与众不同的你 在哪？', // 分享描述
    link: 'https://studyzy.github.io/', // 分享链接
    imgUrl: 'img/favicon.ioc', // 分享图标
    type: '', // 分享类型,music、video或link，不填默认为link
    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
    success: function () {
        // 用户确认分享后执行的回调函数
    },
    cancel: function () {
        // 用户取消分享后执行的回调函数
    }
});
//分享到朋友圈
wx.onMenuShareTimeline({
    title: 'PalletOne团队招聘', // 分享标题
    link: '与众不同的你 在哪？', // 分享链接
    imgUrl: 'img/favicon.ioc', // 分享图标
    success: function () {
        // 用户确认分享后执行的回调函数
    },
    cancel: function () {
        // 用户取消分享后执行的回调函数
    }
});

//QQ分享
wx.onMenuShareQQ({
    title: 'PalletOne团队招聘', // 分享标题
    desc: '与众不同的你 在哪？', // 分享描述
    link: 'https://studyzy.github.io/', // 分享链接
    imgUrl: 'img/favicon.ioc', // 分享图标
    success: function () {
        // 用户确认分享后执行的回调函数
    },
    cancel: function () {
        // 用户取消分享后执行的回调函数
    }
});