$(function () {
    var c = document.getElementById("myCanvas");
    var pen = c.getContext("2d"); // 返回一个用于在画布上绘图的环境

    pen.clearRect(0,0,400,400);



    //绘制文字
    pen.font="16px Arial";
    pen.fillText("Hello",20,20);

    //复制 - 将画布1中的内容复制到画布2中
    //获取画布1中，指定坐标区域的内容
    var imgData = pen.getImageData(0,0,400,400);
    var c2 = document.getElementById("myCanvas2");


    var pen2 = c2.getContext("2d");
    //将图像数据放回画布2  0,0坐标
    pen2.putImageData(imgData,0,0);

})