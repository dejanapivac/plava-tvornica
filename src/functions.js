$(function(){
    var slider = $('.slider-inner'),
        items = slider.find('img'),
        len = items.length,
        current = 1,
        imgwidth = $('img').last().width(),
        arrows = $('button');
		
    var array = $(".slider-inner").html().split("<br>");
    var toprow = array[0];
    var bottomrow = array[1];
    var lasttop = $(".slider-inner br").prev();
    var lastbottom = $(".slider-inner img").last();
    console.log(lasttop, 'dafawd');
    console.log(lastbottom);
    var widthtoadd = 1400;

    arrows.on('click', function () {
    	$(lasttop).after(toprow);
        $(lastbottom).after(bottomrow);
        slider.width(slider.width() + widthtoadd);
        if (slider.is(':not(:animated)')) {                
            var cycle = false,
                delta = (this.id === "prev") ? -1 : 1;                    
            slider.animate({ left: "+=" + (imgwidth * delta) }, function () {
                current += delta;
                cycle = !!(current === 0 || current > len);
                if (cycle) {
                    current = (current === 0) ? len : 1;
                    slider.css({ right: imgwidth });
                }
            });
        }
    });
})


