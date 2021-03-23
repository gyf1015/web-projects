function animate(obj, target) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {   
         var step = (target - window.pageYOffset) / 10;
        step = step < 0 ? Math.floor(step) : Math.ceil(step);
        if (window.pageYOffset == target) {
            clearInterval(obj.timer);
        } else {
            window.scroll(0, window.pageYOffset + step);
        }
    }, 15)
}