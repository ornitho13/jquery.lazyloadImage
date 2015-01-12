(function(){
    'use strict';
    
    function browsersData () {
        var browsers = {};
        if (typeof window.head === 'undefined') {
            if (document.all ) {
                browsers.ie = true;
                if (!document.querySelector) { // IE6 et IE 7
                    if (window.XMLHttpRequest) {
                        browsers.version = 7;
                    } else {
                        browsers.version = 6;
                    }
                } else {
                    if (!document.addEventListener) { //IE8
                        browsers.version = 8;
                    } else { //IE 9 et 10
                        var div = document.createElement("div");
                        div.innerHTML = "<!--[if IE 9]><i></i><![endif]-->";
                        var isIe9 = (div.getElementsByTagName("i").length === 1);

                        if (isIe9) {
                            browsers.version = 9;
                        } else {
                            browsers.version = 10;
                        }
                    }
                }
            } else {
                browsers.ie = false;
                if (!!window.opera) {
                    browsers.opera = true;
                } else if (typeof document.mozCancelFullScreen !== "undefined") {
                    browsers.firefox = true;
                } else if ((!!window.chrome)){
                    browsers.webkit = true;
                }
            }
        }
        return browsers;
    }
    var browsers = browsersData();
    $.fn.lazyloadImage = function () {
        var $this = $(this);
        $(window).on('load', function(){
            $this.each(function(){
                //get original src
                //get screen height
                var $this = $(this), originalSrc = $this.data('original'), img = $this, 
                    $window = $(window),
                    screenHeight = $(window).height(), 
                    imgPosition = $this.offset(), 
                    loaded = false;
                $this.css('opacity', 0);

			
                if (browsers.ie && parseInt(browsers.version, 10) <= 8) {
                	//change by css class with animation in order to remove this part
					img.attr('src', originalSrc).animate({
						opacity : 1
					}, 'slow');
					loaded = true;
				} else {
                    var htmlBodyTop = $(document).scrollTop() + screenHeight;
					if (imgPosition.top <= htmlBodyTop) {
						//on charge la page 
						img.attr('src', originalSrc).animate({
							opacity : 1
						}, 'slow');
						loaded = true;
					}
					$(document).scroll(function(){
						if (loaded === false) {
							htmlBodyTop = $(this).scrollTop() + screenHeight;
							imgPosition = img.offset();
							if (imgPosition.top <= htmlBodyTop) {
								//on charge la page 
								img.attr('src', originalSrc).animate({
									opacity : 1
								}, 'slow');
								loaded = true;
							}
						}
					});
				}
			});
		});
        
        return $(this);
    }
}());