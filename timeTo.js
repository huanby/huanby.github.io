function TimeTo(dd) {
    var t = new Date(dd), //取得指定时间的总毫秒数  
        n = new Date().getTime(), //取得当前毫秒数  
        c = t - n; //得到时间差
    //w = (t - n)*1000;//得到时间差
    if (c <= 0) { //如果差小于等于0  也就是过期或者正好过期，则推出程序  
        document.getElementById('js').innerHTML = document.getElementById('hj').innerHTML;
        document.getElementById('js1').innerHTML = document.getElementById('hj').innerHTML;
        clearInterval(window['ttt']); //清除计时器  
        return; //结束执行  
    }

    d = parseInt(c / 1000 / 60 / 60 / 24), //总毫秒除以一天的毫秒 得到相差的天数  
        h = parseInt(c / 1000 / 60 / 60 - (24 * d)), //然后取完天数之后的余下的毫秒数再除以每小时的毫秒数得到小时 
        m = parseInt(c / 1000 / 60 - (24 * 60 * d) - (60 * h)), //减去天数和小时数的毫秒数剩下的毫秒，再除以每分钟的毫秒数，得到分钟数 
        s = parseInt(c / 1000 - (24 * 60 * 60 * d) - (60 * 60 * h) - (60 * m)); //得到最后剩下的毫秒数除以1000 就是秒数，再剩下的毫秒自动忽略即可
        hm = Math.floor((c - (24 * 60 * 60 * 1000 * d) - (60 * 60 * 1000 * h) - (60 * 1000 * m) - (s * 1000)) / 10);
        if (hm < 10) {
            hm = "0" + hm;
        }
        if (s < 10) {
            s = "0" + s;
        }
        if (m < 10) {
            m = "0" + m;
        }
        if (h < 10) {
            h = "0" + h;
        }

    // document.getElementById('timer').innerHTML = '距离2118年10月1日还有：' + d + '天' + h + '小时' + m + '分钟' + s + '秒' + hm + '毫秒'; //最后这句讲定义好的显示 更新到 ID为 timer的 div中
    document.getElementById('timer').innerHTML = d + '天' + h + '小时' + m + '分钟' + s + '秒' + hm + '毫秒'; //最后这句讲定义好的显示 更新到 ID为 timer的 div中

}
(function() {
    window['ttt'] = setInterval(function() {
        TimeTo('2022/12/30 11:00:00:00'); //定义倒计时的结束时间，注意格式  
    }, 50); //定义计时器，每隔1000毫秒 也就是1秒 计算并更新 div的显示  
})();
