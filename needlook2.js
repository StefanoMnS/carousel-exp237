<script>
        void function variation() {
    var $ = document.querySelectorAll.bind(document);
    if (!($(".new-hero-banner__large-wrapper")[0])) return setTimeout(variation, 25);

        //START OF USER INPUT
        var changeP1 = true;
        var changeP2 = true;
        var changeP3 = true;
        var changeImage = true;
        var changeText = true;
        var changeHidden = true;
 
        var HiddenName;
        var P1Name;
        var P2Name;
        var P3Name;
        var ImgParam;
    
        var slotLarge;
        var newBtnHtml;
        var slotLargeImg;
      
        var imgSrcDomain = "https://asset2.cxnmarksandspencer.com/is/image/mands/";
     
        if (matchMedia) {
        var mq = window.matchMedia('(min-width: 768px)');
        mq.addListener(WidthChange);
        WidthChange(mq);
        }
      
      function WidthChange(mq) {
            if (mq.matches) {
                HiddenName = "1315-20200716_HP_Hero1_ww_FULLBLEED";
                P1Name = "1105-20200716_HP_Hero1_ww_FULLBLEED";
                P2Name = "1105-20200716_HP_Hero2_mw_FULLBLEED";
                P3Name = "2230-20200716_HP_Hero3_furn_FULLBLEED";
                ImgParam = "?wid=1800&qlt=80&fmt=pjpeg";
            } else {
                HiddenName = "1315-20200716_HP_Hero1_ww_1000x1000";
                P1Name = "1315-20200716_HP_Hero1_ww_1000x1000";
                P2Name = "1315-20200716_HP_Hero2_mw_1000x1000";
                P3Name = "1315-20200716_HP_Hero3_furn_1000x1000";
                ImgParam = "?wid=768&qlt=80&fmt=pjpeg";
            }		 

        //Hidden Elements: 
        var HiddenNewImgSrc = imgSrcDomain + HiddenName + ImgParam;
        
        //P1 Elements: 
        var P1newURL = "https://www.marksandspencer.com/l/women/dresses#intid=hp_hp-herocar1_160720_img_wwdresses";
        var P1newText = '<span class="new-hero-banner__caption2">Your summer dress refresh</span>';
        var P1btnText = "Shop all dresses";
        var P1newImgSrc = imgSrcDomain + P1Name + ImgParam;  
        
        //P2 Elements
        var P2newURL = "https://www.marksandspencer.com/l/men/shorts#intid=hp_hp-herocar2_160720_img_mwshorts";
        var P2newText = '<span class="new-hero-banner__caption2">Shorts for Summer</span>';
        var P2btnText = "Shop now";
        var P2newImgSrc = imgSrcDomain + P2Name + ImgParam;
 
        //P3 Elements
        var P3newURL = "https://www.marksandspencer.com/c/furniture#intid=hp_hp-herocar3_160720_img_furniture";
        var P3newText = '<span class="new-hero-banner__caption2">Same great quality, for less</span>'; 
        var P3btnText = "Shop furniture";
        var P3newImgSrc = imgSrcDomain + P3Name + ImgParam;

 //END OF USER INPUT

        //DO NOT CHANGE ANYTHING FROM THIS POINT ONWARDS
        var selector1, selector2, selector3;
        var links = $(".new-hero-banner__link:not(.cloned)");
        selector1 = links[0].href;
        selector2 = links[1].href;
        selector3 = links[2].href; 
             console.log("Here 5 What size" + P1Name);

        if (changeHidden) {
            console.log("Inside hidden" + P1Name);
           var slotHidden = $('.new-hero-banner__large .new-hero-banner__hidden picture *');

               if(changeHidden){
                 slotHidden.forEach(function(el){
                    changeImgSrc(el, HiddenNewImgSrc);
                });       
            } 
        }

            console.log("This is hidden slot " + P1Name);
  
        
        if (changeP1) {
            slotLarge = $(".new-hero-banner__large a[href='" + selector1 + "']");
            newBtnHtml = P1btnText + '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 14" class="arrow-icon"> <g id="Layer_2" data-name="Layer 2"> <g id="Layer_1-2" data-name="Layer 1"> <path d="M17.86,6.67,11.43.15a.52.52,0,0,0-.71,0,.47.47,0,0,0,0,.68l5.64,5.71H.5A.48.48,0,0,0,0,7a.49.49,0,0,0,.5.48H16.34L10.7,13.19a.47.47,0,0,0,0,.68.52.52,0,0,0,.71,0l6.43-6.52A.45.45,0,0,0,17.86,6.67Z" fill=""></path> </g> </g> </svg>';
            slotLargeImg = $(".new-hero-banner__large a[href='" + selector1 + "'] picture *");      
            console.log("This is slot 1 " + P1Name);

               if(changeImage){
                 slotLargeImg.forEach(function(el){
                     changeImgSrc(el, P1newImgSrc);
                });       
            }             

            if(changeText){
                changeLargeBannerText(slotLarge, P1newURL, P1newText, newBtnHtml);
            }            
        }

        if (changeP2) {
            slotLarge = $(".new-hero-banner__large a[href='" + selector2 + "']");
            newBtnHtml = P2btnText + '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 14" class="arrow-icon"> <g id="Layer_2" data-name="Layer 2"> <g id="Layer_1-2" data-name="Layer 1"> <path d="M17.86,6.67,11.43.15a.52.52,0,0,0-.71,0,.47.47,0,0,0,0,.68l5.64,5.71H.5A.48.48,0,0,0,0,7a.49.49,0,0,0,.5.48H16.34L10.7,13.19a.47.47,0,0,0,0,.68.52.52,0,0,0,.71,0l6.43-6.52A.45.45,0,0,0,17.86,6.67Z" fill=""></path> </g> </g> </svg>';
            slotLargeImg = $(".new-hero-banner__large a[href='" + selector2 + "'] picture *");      
            console.log("This is slot 2 " + P2Name);

               if(changeImage){
                 slotLargeImg.forEach(function(el){
                     changeImgSrc(el, P2newImgSrc);
                });       
            }             

            if(changeText){
                changeLargeBannerText(slotLarge, P2newURL, P2newText, newBtnHtml);
            }            
        }

        if (changeP3) {
            slotLarge = $(".new-hero-banner__large a[href='" + selector3 + "']");
            newBtnHtml = P3btnText + '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 14" class="arrow-icon"> <g id="Layer_2" data-name="Layer 2"> <g id="Layer_1-2" data-name="Layer 1"> <path d="M17.86,6.67,11.43.15a.52.52,0,0,0-.71,0,.47.47,0,0,0,0,.68l5.64,5.71H.5A.48.48,0,0,0,0,7a.49.49,0,0,0,.5.48H16.34L10.7,13.19a.47.47,0,0,0,0,.68.52.52,0,0,0,.71,0l6.43-6.52A.45.45,0,0,0,17.86,6.67Z" fill=""></path> </g> </g> </svg>';
            slotLargeImg = $(".new-hero-banner__large a[href='" + selector3 + "'] picture *");      
            console.log("Inside slot 3 " + P3Name);

               if(changeImage){
                 slotLargeImg.forEach(function(el){
                     changeImgSrc(el, P3newImgSrc);
                });       
            }             

            if(changeText){
                changeLargeBannerText(slotLarge, P3newURL, P3newText, newBtnHtml);
            }            
        }
                        
        function changeLargeBannerText(slotLarge, newURL, newText, newBtnHtml) {
            slotLarge.forEach(function (el) {
                el.setAttribute("href", newURL);
                el.querySelectorAll(".new-hero-banner__text .new-hero-banner__description")[0].innerHTML = newText;
                el.querySelectorAll(".new-hero-banner__text .new-hero-banner__button")[0].innerHTML = newBtnHtml;
                var mobile_link = el.querySelectorAll(".new-hero-banner__button.visible-mobile")[0];
                if (mobile_link) {
                    mobile_link.innerHTML = newBtnHtml;
                }
            });
        }
        
        function changeImgSrc(el, newSrc) {
            var attr = el.attributes;
            for (var i = 0; i < attr.length; i++) {
                if (attr[i].name.indexOf("src") > -1) {
                    el.setAttribute(attr[i].name, newSrc);
                }
            }
        }
    } 
}();
</script>
<style>
  .new-hero-banner__small {
    display: none!important;
}

.hp-components .new-hero-banner__large.no-outline {
    margin: 0;
}
@media screen and (max-width:767px) {
 .new-hero-banner__icon-wrapper {
  bottom:11rem; 
 }
}
.new-hero-banner__large-wrapper {
  min-height:auto;
  height:auto;
}
@media screen and (min-width:768px) {
    .new-hero-banner__pagination.no-outline {
        margin-top: 6rem;
    }
}  
@media screen and (min-width:1280px) {
  .new-hero-banner__large-wrapper {
     min-height:auto;
     height:auto;
   }
}  
</style>





