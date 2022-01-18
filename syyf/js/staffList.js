function HengxiangGundong(params,step) {
    params.onwheel = function (event) {
        //禁止事件默认行为（此处禁止鼠标滚轮行为关联到"屏幕滚动条上下移动"行为）  
        event.preventDefault();
        if (event.deltaY < 0) {
          //向上滚动鼠标滚轮，屏幕滚动条左移  
          this.scrollLeft -= step;
        } else {
          //向下滚动鼠标滚轮，屏幕滚动条右移  
          this.scrollLeft += step;
        }
    }
  }