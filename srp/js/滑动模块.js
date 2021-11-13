window.onload = function () {
    var mybody = document.getElementById("body")


    //滑动处理

    var startX, startY, moveEndX, moveEndY, X, Y;

    mybody.addEventListener('touchstart', function (e) {

        startX = e.touches[0].pageX;

        startY = e.touches[0].pageY;

    });

    mybody.addEventListener('touchmove', function (e) {


        moveEndX = e.changedTouches[0].pageX;

        moveEndY = e.changedTouches[0].pageY;

        X = moveEndX - startX;

        Y = moveEndY - startY;

        if (X > 0 && Math.abs(X) > Math.abs(Y)) {

            console.log('向右');

        } else if (X < 0 && Math.abs(X) > Math.abs(Y)) {

            console.log('向左');

        } else if (Y > 0 && Math.abs(Y) > Math.abs(X)) {

            console.log('向下');

        } else if (Y < 0 && Math.abs(Y) > Math.abs(X)) {

            console.log('向上');

        } else {

            alert('没滑动');

        }

    });
}