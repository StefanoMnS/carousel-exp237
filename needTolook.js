<script>
  void function variation() {
    var $ = document.querySelectorAll.bind(document);
    if (!($(".new-hero-banner")[0])) return setTimeout(variation, 25);

        //START OF USER INPUT
        var changeP1 = true;
        var changeP2 = false;
        var changeP3 = true;
        var changeImage = true;
        var changeText = true;
        
        //P1 Elements: 
        var P1newURL = "https://www.marksandspencer.com/l/men/trousers#intid=hp_hp-herocar1_110320_mwtest";
        var P1newText = "Fresh style, new fits";
        var P1btnText = "Shop men’s trousers";
        var P1smallBannerTitle = "MEN";
        var P1newImgSrc = "https://asset2.cxnmarksandspencer.com/is/image/mands/1315_20200227_HP_Hero3.jpg";
        
        //P2 Elements
        var P2newURL = "/c/women";
        var P2newText = "P2 NEW TEXT";
        var P2btnText = "P2 NEW BTN TEXT";
        var P2smallBannerTitle = "P2 new small title";
        var P2newImgSrc = "https://asset2.cxnmarksandspencer.com/is/image/mands/20191007_PerUna_HP_Hero2.jpg";
        
        //P3 Elements
        var P3newURL = "c/men";
        var P3newText = "P3 NEW TEXT"; 
        var P3btnText = "P3 NEW BTN TEXT";
        var P3smallBannerTitle = "P3 new small title";
        var P3newImgSrc = "https://asset2.cxnmarksandspencer.com/is/image/mands/20191010_HP_Hero2_Sleepwear.jpg";
        
        //END OF USER INPUT

        //DO NOT CHANGE ANYTHING FROM THIS POINT ONWARDS
        var selector1, selector2, selector3;
        var links = $(".new-hero-banner__link:not(.cloned)");
        selector1 = links[0].href;
        selector2 = links[1].href;
        selector3 = links[2].href;
        
        if (changeP1) {
            var slotLarge = $(".new-hero-banner__large a[href='" + selector1 + "']");
            var slotSmall = $(".new-hero-banner__small a[href='" + selector1 + "']")[0];
            var newBtnHtml = P1btnText + '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 14" class="arrow-icon"> <g id="Layer_2" data-name="Layer 2"> <g id="Layer_1-2" data-name="Layer 1"> <path d="M17.86,6.67,11.43.15a.52.52,0,0,0-.71,0,.47.47,0,0,0,0,.68l5.64,5.71H.5A.48.48,0,0,0,0,7a.49.49,0,0,0,.5.48H16.34L10.7,13.19a.47.47,0,0,0,0,.68.52.52,0,0,0,.71,0l6.43-6.52A.45.45,0,0,0,17.86,6.67Z" fill=""></path> </g> </g> </svg>';
            var slotLargeImg = $(".new-hero-banner__large a[href='" + selector1 + "'] picture *");
            var slotSmallImg = $(".new-hero-banner__small a[href='" + selector1 + "'] .new-hero-banner__small-image img")[0];
        
            if(changeImage){
                slotLargeImg.forEach(function(el){
                    changeImgSrc(el, P1newImgSrc);
                })        
            } 
            
            if(changeText){
                changeLargeBannerText(slotLarge, P1newURL, P1newText, newBtnHtml);
        
                if (slotSmall) {
                    //Code to change small banner on the right:
                    changeSmallBannerText(slotSmall, P1smallBannerTitle, P1newText, P1btnText, P1newURL);
                    if (changeImage) {
                        changeImgSrc(slotSmallImg, P1newImgSrc);
                    }
                }
            }            
        }
        
        if (changeP2) {
            var slotLarge = $(".new-hero-banner__large a[href='" + selector2 + "']");
            var slotSmall = $(".new-hero-banner__small a[href='" + selector2 + "']")[0];
            var newBtnHtml = P2btnText + '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 14" class="arrow-icon"> <g id="Layer_2" data-name="Layer 2"> <g id="Layer_1-2" data-name="Layer 1"> <path d="M17.86,6.67,11.43.15a.52.52,0,0,0-.71,0,.47.47,0,0,0,0,.68l5.64,5.71H.5A.48.48,0,0,0,0,7a.49.49,0,0,0,.5.48H16.34L10.7,13.19a.47.47,0,0,0,0,.68.52.52,0,0,0,.71,0l6.43-6.52A.45.45,0,0,0,17.86,6.67Z" fill=""></path> </g> </g> </svg>';
            var slotLargeImg = $(".new-hero-banner__large a[href='" + selector2 + "'] picture *");
            var slotSmallImg = $(".new-hero-banner__small a[href='" + selector2 + "'] .new-hero-banner__small-image img")[0];
        
            if(changeImage){
                slotLargeImg.forEach(function(el){
                    changeImgSrc(el, P2newImgSrc);
                })        
            } 
        
            if(changeText){
                changeLargeBannerText(slotLarge, P2newURL, P2newText, newBtnHtml);
        
                if (slotSmall) {
                    //Code to change small banner on the right:
                    changeSmallBannerText(slotSmall, P2smallBannerTitle, P2newText, P2btnText, P2newURL);
                    if (changeImage) {
                        changeImgSrc(slotSmallImg, P2newImgSrc);
                    }
                }
            }
           
        }
        
        if (changeP3) {
            console.log("IN CHANGE P3")
            var slotLarge = $(".new-hero-banner__large a[href='" + selector3 + "']");
            var slotSmall = $(".new-hero-banner__small a[href='" + selector3 + "']")[0];
            var newBtnHtml = P3btnText + '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 14" class="arrow-icon"> <g id="Layer_2" data-name="Layer 2"> <g id="Layer_1-2" data-name="Layer 1"> <path d="M17.86,6.67,11.43.15a.52.52,0,0,0-.71,0,.47.47,0,0,0,0,.68l5.64,5.71H.5A.48.48,0,0,0,0,7a.49.49,0,0,0,.5.48H16.34L10.7,13.19a.47.47,0,0,0,0,.68.52.52,0,0,0,.71,0l6.43-6.52A.45.45,0,0,0,17.86,6.67Z" fill=""></path> </g> </g> </svg>';
            var slotLargeImg = $(".new-hero-banner__large a[href='" + selector3 + "'] picture *");
            var slotSmallImg = $(".new-hero-banner__small a[href='" + selector3 + "'] .new-hero-banner__small-image img")[0];
            
            if(changeImage){
                slotLargeImg.forEach(function(el){
                    changeImgSrc(el, P3newImgSrc);
                })        
            } 
            
            if(changeText){
                changeLargeBannerText(slotLarge, P3newURL, P3newText, newBtnHtml);
        
                if (slotSmall) {
                    //Code to change small banner on the right:
                    changeSmallBannerText(slotSmall, P3smallBannerTitle, P3newText, P3btnText, P3newURL);
                    if (changeImage) {
                        changeImgSrc(slotSmallImg, P3newImgSrc);
                    }
                }
            }            
        }
        
        
        function changeLargeBannerText(slotLarge, newURL, newText, newBtnHtml) {
            slotLarge.forEach(function (el) {
                el.setAttribute("href", newURL);
                el.querySelectorAll(".new-hero-banner__text .new-hero-banner__description .new-hero-banner__caption2")[0].innerText = newText;
                el.querySelectorAll(".new-hero-banner__text .new-hero-banner__button")[0].innerHTML = newBtnHtml;
                var mobile_link = el.querySelectorAll(".new-hero-banner__button.visible-mobile")[0];
                if (mobile_link) {
                    mobile_link.innerHTML = newBtnHtml;
                }
            })
        }
        
        function changeSmallBannerText(slotSmall, newTitle, newText, newBtnText, newURL) {
            slotSmall.querySelectorAll(".new-hero-banner__small-content .new-hero-banner__small-content-title")[0].innerText = newTitle;
            slotSmall.querySelectorAll(".new-hero-banner__small-content .new-hero-banner__small-content-description")[0].innerText = newText;
            slotSmall.querySelectorAll(".new-hero-banner__small-content .new-hero-banner__small-content-button")[0].innerText = newBtnText;
            slotSmall.setAttribute("href", newURL);
        }
        
        function changeImgSrc(el, newSrc) {
            var attr = el.attributes;
            for (var i = 0; i < attr.length; i++) {
                if (attr[i].name.indexOf("src") > -1) {
                    el.setAttribute(attr[i].name, newSrc + "?wid=750&qlt=70&fmt=pjpeg")
                }
            }
        }
}();
</script>




<script>
  void
function variation() {
    var $ = document.querySelectorAll.bind(document);

    if ($(".newinplus-component__tile--image")[0].src.indexOf("image/mands/") == -1) return setTimeout(variation, 25);

    //START OF USER INPUT
    var change_images = true;
    var change_text_and_link = true;
    var pages = {
        "product1": ["https://www.marksandspencer.com/floral-print-waisted-jumpsuit/p/clp60374075?color=NAVYMIX", "https://asset2.cxnmarksandspencer.com/is/image/mands/0900_20200303_MW_1"],
        "product2": ["https://www.marksandspencer.com/leather-stud-flatform-brogue-shoes/p/clp60369787?color=BLACK", "https://asset2.cxnmarksandspencer.com/is/image/mands/0900_20200303_MW_2"],
        "product3": ["https://www.marksandspencer.com/printed-pleated-relaxed-midi-dress/p/clp60374055?color=IVORYMIX", "https://asset2.cxnmarksandspencer.com/is/image/mands/0900_20200303_MW_6"],
        "product4": ["https://www.marksandspencer.com/soft-touch-striped-v-neck-jumper/p/clp60428607?color=WHITEMIX", "https://asset2.cxnmarksandspencer.com/is/image/mands/0900_20200303_MW_7"],
        "product5": ["https://www.marksandspencer.com/wool-blend-straight-leg-trousers/p/clp60437527?color=INDIGO", "https://asset2.cxnmarksandspencer.com/is/image/mands/0900_20200303_MW_8"],
        "product6": ["https://www.marksandspencer.com/double-breasted-trench-coat/p/clp60370585?color=SOFTKHAKI#intid=prodColourId-60376444", "https://asset2.cxnmarksandspencer.com/is/image/mands/0900_20200303_MW_3"]
    }
    //Link URL
    var linkUrl = 'https://www.marksandspencer.com/l/women/all-new-in#intid=hp_prodcar_140220_img_wwnewin';
    //Link Text
    var linkText = 'Shop all new';
  	var title_text_one = "Don't miss";
    var title_text_two = "New Arrivals";
    //END OF USER INPUT

    //DO NOT CHANGE ANYTHING FROM THIS POINT ONWARDS
    var image_id;

    var images = $(".newinplus-component__container--left a img");
    for (var i = 0; i < images.length; i++) {
        var src = $(".newinplus-component__tile--image")[i].src.toLowerCase();
        var start, sub;
        if (src.indexOf("product") > -1) {
            start = src.indexOf("product");
            sub = src.substring(start, start + 8);
        } else {
            start = src.indexOf("p");
            sub = src.substring(start, start + 1);
        }
        images[i].id = sub;
    }

    if (change_text_and_link) {
        $(".newinplus-component__tile-link")[0].innerHTML = '<a class="newin_link" href="' + linkUrl + '">' + linkText + ' <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 14" class="arrow-icon"> <g id="Layer_2" data-name="Layer 2"> <g id="Layer_1-2" data-name="Layer 1"> <path d="M17.86,6.67,11.43.15a.52.52,0,0,0-.71,0,.47.47,0,0,0,0,.68l5.64,5.71H.5A.48.48,0,0,0,0,7a.49.49,0,0,0,.5.48H16.34L10.7,13.19a.47.47,0,0,0,0,.68.52.52,0,0,0,.71,0l6.43-6.52A.45.45,0,0,0,17.86,6.67Z" fill=""></path> </g> </g> </svg></a>';
		
      	$(".newinplus-component__content h3")[0].innerText = title_text_one;
        $(".newinplus-component__content h2")[0].innerText = title_text_two;
      
        function change_url() {
            var image_id = $(".newinplus-component__tile--image")[0].id;

            for (key in pages) {
                if (key === image_id) {
                    $(".newinplus-component__container--left a")[0].href = pages[key][0];
                }
            }
        }

        var target = $(".newinplus-component__newintiles")[0];
        var config = {
            attributes: true,
            childList: true
        };
        var observer = new MutationObserver(function () {
            change_url();
        });
        observer.observe(target, config);
    }

    if (change_images) {
        for (var i = 0; i < images.length; i++) {
            image_id = images[i].id;
            for (key in pages) {
                if (key === image_id) {
                    changeImgSrc(images[i], pages[key][1])
                }
            }
        }
    }

    function changeImgSrc(el, newSrc) {
        var attr = el.attributes;
        for (var i = 0; i < attr.length; i++) {
            if (attr[i].name.indexOf("src") > -1) {
                el.setAttribute(attr[i].name, newSrc + "?wid=470&qlt=70&fmt=pjpeg");
            }
        }
    }
}();
</script>




page DELIVERY

https/www.marksspencer/com/

