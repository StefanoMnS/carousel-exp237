function externalScripts() {
  ["https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/gsap.min.js"].forEach(
    function (src) {
      var script = document.createElement("script");
      script.src = src;
      script.async = true;
      document.head.appendChild(script);
    }
  );
}
externalScripts();

var closCarousel237 = (function () {
  let index = 0;

  // const dotRatio = 0
  const getHandle = function () {
    if (document.querySelector(".main-container") !== null) {
      return document.querySelector(".main-container");
    } else if (document.querySelector(".container") !== null) {
      return document.querySelector(".container");
    } else if (document.querySelector(".full-width-container") !== null) {
      return document.querySelector(".full-width-container");
    } else if (window.location.pathname.indexOf("l") === 1) {
      return document.querySelector(".container");
    }
  };

  const mainStyles = `
  .main-wrapper--exp237 {
    margin: 0;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: auto;
    flex-direction: column;
    height: 170px;
    background-color: #F1EDEC;
    width: 100%;
}
	#main-wrapper--exp237 {
	    box-sizing: border-box;
	    background-color: transparent;
	    width: 100%;
	    max-width: 1280px;
	    height: 100%;
	    margin: 0 auto;
	    flex-direction: column;
	    display: flex;
	    justify-content: space-around;
	}
	#main-wrapper--exp237 #carousel--container::-webkit-scrollbar {
	    display: none;
	    height: 0;
	}
	#carousel--container {
	    margin: 0;
	    display: flex;
	    flex-direction: column;
	    width: 100%;
	    overflow-y: scroll;
	}
	@keyframes fader {
	    from {
	        opacity: 0.5;
	        transform: translateX(10%) 
	   }
	    to {
	        opacity: 1;
	   }
	}
	#main-wrapper--exp237 #carousel--wrapper {
	    width: 100%;
	    margin: 0;
	    padding: 0 1rem;
	    display: flex;
	    flex-wrap: wrap;
	}
	#main-wrapper--exp237 #content {
	    display: grid;
	    grid-gap: 16px;
	    grid-auto-flow: column;
	    margin: auto;
	    box-sizing: border-box;
	    position: relative;
	}
	.item span.close-card {
	    transition: all .75s linear 250ms;
	    color: inherit;
	    font-weight: 300;
	    display: flex;
	    height: auto;
	    opacity: 1;
	    cursor: pointer;
	    transform: scaleX(1.4) translate(-9px, -22px);
	}
	#main-wrapper--exp237 .account--holder__greet {
	    height: 40px;
	    display: flex;
	    flex-direction: column;
	    justify-content: flex-start;
	    width: 100%;
	}
	#main-wrapper--exp237 .account--holder__greet p {
	    margin: 0;
	    font-weight: normal;
	    line-height: 40px;
	}
	#main-wrapper--exp237 .item {
	    border-radius: 8px;
	    height: 78px;
	    width: 300px;
	    background: #fff;
	    border: 1px solid #d9d9d9;
	    display: flex;
	    flex-direction: row;
	    justify-content: space-between;
	    align-items: center;
	    flex-wrap: nowrap;
	}
	#main-wrapper--exp237 .item.hidden {
	    display: none;
	}
	#main-wrapper--exp237 .item img.card-logo {
	    transition: display .45s linear 25ms;
	    height: auto !important;
	    width: 100%;
	    padding: 0;
	    position: relative;
	    max-width: 112px;
	    transform: rotate(360deg);
	}
	#main-wrapper--exp237 .item .heading {
	    letter-spacing: 0;
	    color: #000000;
	    font-family: 'MS London eText Semibold';
	    text-align: left;
	    display: flex;
	    line-height: 20px;
	    margin: 0;
	    width: 160px;
	    font-size: 14px;
	    margin-left: -70px;
	    
	}
	#main-wrapper--exp237 img.card-confetti {
	    width: 20px;
	    height: 20px;
	    transform: translate(-40px, 20px);
	    object-fit: contain;
	    align-self: auto;
	}
	.item .heading img.card-confetti::before {
	    width: 20px;
	    height: 20px;
	    display: inline-block;
	    object-fit: contain;
	    align-self: flex-end;
	}
	@media only screen and (max-width: 1024px) {
	    #main-wrapper--exp237 .carousel--dot span {
	        display: none;
	   }
	    button#prev, button#next {
	        display: none;
	   }
	    button#prev.hidden, button#next.hidden {
	        display: none;
	   }
	}
	.welcome--message {
	    width: 100%;
	    display: flex;
	    margin: 0.3rem 0 0 0;
	    justify-content: flex-start;
	}
	.welcome--message p {
	    margin: 0;
	    margin-left: 6.50vw;
	}
	.carousel__wrapper.hidden {
	    visibility: hidden;
	}
	.carousel__wrapper {
	    transition: all 0.45s linear 150ms;
	    width: 100%;
	    display: flex;
	    flex-direction: column;
	    justify-content: center;
	    background-color: #f2f2f2;
	    position: relative;
	}
	.main-wrapper--exp236 {
	    margin: 0;
	    display: flex;
	    justify-content: center;
	    align-items: center;
	    flex-direction: column;
	    height: 170px;
	    background-color: #F1EDEC;
	    width: 100%;
	}
	#carousel--wrapper {
	    width: 90%;
	    margin-left: 10%;
	    position: relative;
	    padding-top: 60px;
	    padding-bottom: 33px;
	    background: #F1EDEC;
	}
	#carousel--container {
	    height: 78px;
	    margin: 0;
	    scroll-behavior: smooth;
	    margin: 0;
	    -ms-overflow-style: none;
	   /* IE and Edge */
	    scrollbar-width: none;
	   /* Firefox */
	}
	#main-wrapper--exp237 #carousel--wrapper .carousel__dots {
	    display: none !important;
	}
	#main-wrapper--exp237 .card-notification__wrapper {
	    position: relative;
	    top: -30px;
	    left: -24px;
	    background: rgba(255,255,255,.35);
	}
	#main-wrapper--exp237 .card-notification {
	    height: 22px;
	    width: 22px;
	    border: 1px solid rgb(255 255 255);
	    border-radius: 50%;
	    position: absolute;
	    background-color: #333;
	    color: rgb(255 255 255);
	    line-height: 20px;
	    text-align: center;
	    font-size: 12px;
	    top: 0px;
	    right: 29px;
	   
	}
	@media only screen and (min-width: 1025px) {
	    #main-wrapper--exp237 #carousel--wrapper {
	        width: 90%;
	        margin-left: 10%;
	        position: relative;
	        padding-top: 22px;
	        padding-bottom: 31px;
	        background: #F1EDEC;
	   }
	    #main-wrapper--exp237 .carousel--dot span {
	        display: none;
	   }
	    #main-wrapper--exp237 #carousel--wrapper button#prev:focus,#carousel--wrapper button#next:focus {
	        outline: none;
	        box-shadow: none;
	   }
	   
	    #main-wrapper--exp237 button svg {
	        width: 35px;
	        height: 40px;
	        fill: rgba(255,255,255,.35);
	        width: 35px;
		    fill: rgba(255,255,255,.35);
		    stroke-width: 2px;
		    backdrop-filter: opacity(0.5);
	   }
	    #main-wrapper--exp237 #prev, #main-wrapper--exp237 #next {
	        justify-content: center;
	        align-content: center;
	        width: 35px;
		    height: 40px;
		    fill: rgba(255,255,255,.35);
		    stroke-width: 2px;
		    backdrop-filter: opacity(0.5);
	        border: none;
	        padding: 1px;
	        border-radius: 0;
	        outline: 0;
	        cursor: pointer;
	        position: absolute;
	        line-height: 0.5;
	   }
	    #main-wrapper--exp237 #prev {
	        top: 60%;
	        left: 0;
	        left: -75px;
	        transform: translate(50%, -50%) rotate(180deg);
	   }
	    #main-wrapper--exp237 #next {
	        top: 60%;
	        right: 16%;
	        transform: translate(-50%, -50%);
	        background-color: initial; 
	   }
	    #main-wrapper--exp237 .account--holder__greet {
	        display: flex;
	        margin-left: 0;
	        justify-content: flex-start;
	   }
	    #main-wrapper--exp237 .account--holder__greet p {
	        margin: 0;
		    padding: 0 5px;
		    font-weight: 600;
		    letter-spacing: 0;
		    width: 213px;
		    font-size: 18px;
		    font-family: 'MS London eText';
	   }
}

	.item.bounce {
	  animation: bounce 0.75s ease 0ms;
	}
	
	@keyframes bounce {
	    70% { transform:translateY(0%); }
	    80% { transform:translateY(-15%); }
	    90% { transform:translateY(0%); }
	    95% { transform:translateY(-7%); }
	    97% { transform:translateY(0%); }
	    99% { transform:translateY(-3%); }
	    100% { transform:translateY(0); }
	}

  `;

  return {
    addCSS: function (css) {
      const head = document.getElementsByTagName("head")[0];
      const s = document.createElement("style");
      s.setAttribute("type", "text/css");
      s.appendChild(document.createTextNode(css));
      head.appendChild(s);
    },
    init: function () {
      this.doCarouselFirstAct();
      this.doCarouselSecondAct();
    },

    doDots: function (d) {
      // console.log(index)
      index += d;
      const slides = document.querySelectorAll(
        "#main-wrapper--exp237 #content .item"
      );
      const dots = [
        ...document.querySelectorAll("#main-wrapper--exp237 .carousel__dots")[0]
          .children,
      ];

      if (index > slides.length - 1) index = 0;

      dots.forEach((dot, i) => {
        if (dot.classList.contains("dot--active")) {
          dot.classList.remove("dot--active");
        }

        if (i === index) {
          dot.classList.add("dot--active");
        }
      });
    },

    showHideArrows: function (ele, val) {
      const arrow = document.getElementById(ele);
      arrow.hidden = val;
    },

    removeXhandle: function (hndl) {
      let rmService;
      let handle = hndl;

      // testing only remove before inserting to AT
      if (
        document.location.href ===
        "https://donpio.tech/repositories/mtest/index.html"
      ) {
        handle = ".main-wrapper--exp236";
        rmService = document.querySelector(handle);
        return document.querySelector(`${handle}`) !== null
          ? rmService.parentElement.removeChild(rmService)
          : false;
      }

      rmService = document.querySelector(handle);
      return document.querySelector(handle) !== null
        ? rmService.parentElement.removeChild(rmService)
        : false;
    },

    doScroll: {
      disableScroll: function () {
        // Get the current page scroll position
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        (scrollLeft =
          window.pageXOffset || document.documentElement.scrollLeft),
          // if any scroll is attempted, set this to the previous value
          (window.onscroll = function () {
            window.scrollTo(scrollLeft, scrollTop);
          });
      },

      enableScroll: function () {
        window.onscroll = function () {};
      },
    },

    getBounds: function (elem) {
      var bounding = elem.getBoundingClientRect();
      var myElementHeight = elem.offsetHeight;
      var myElementWidth = elem.offsetWidth;

      if (
        bounding.top >= -myElementHeight &&
        bounding.left >= -myElementWidth &&
        bounding.right <=
          (window.innerWidth || document.documentElement.clientWidth) +
            myElementWidth &&
        bounding.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) +
            myElementHeight
      ) {
        elem.classList.add("bounce");
      } else {
        elem.classList.remove("bounce");
      }
    },

    doCarouselSecondAct: function () {
      const gap = 16;
      let width;
      let scrollSeg = 1500;
      const carousel = document.getElementById("carousel--container");
      const content = document.getElementById("content");
      const next = document.getElementById("next");
      const prev = document.getElementById("prev");

      window.screen.size > 1024
        ? this.showHideArrows("next", false)
        : this.showHideArrows("prev", true);

      next.addEventListener("click", (e) => {
        this.doScroll.disableScroll();
        carousel.scrollBy(+width, 0);
        carousel.scrollTop;
        carousel.scrollLeft;
        let ecards = content.children;
        //last one!
        let lastOne = ecards[ecards.length - 1];
        this.getBounds(lastOne);

        console.log(
          `scrolled left ${carousel.scrollLeft}  scroll width ${carousel.scrollWidth} `
        );

        if (scrollSeg < carousel.scrollLeft) {
          this.showHideArrows("next", true);
        }

        if (carousel.scrollLeft === 0) {
          this.showHideArrows("prev", false);
        }

        return carousel.scrollTop;
      });

      prev.addEventListener("click", (e) => {
        this.doScroll.disableScroll();
        carousel.scrollBy(-width, 0);
        let ecards = content.children;
        carousel.scrollLeft;
        carousel.scrollTop;
        //firstOne!
        let firstOne = ecards[0];
        this.getBounds(firstOne);

        console.log(`scrolled left: ${carousel.scrollLeft}
        	          scroll width: ${carousel.scrollWidth} 
        	          entire content scrollWidth: ${content.scrollWidth}`);

        if (carousel.scrollLeft - scrollSeg <= 0) {
          this.showHideArrows("prev", true);
        }

        if (
          content.scrollWidth - carousel.scrollLeft - scrollSeg <=
          scrollSeg
        ) {
          this.showHideArrows("next", false);
        }

        return carousel.scrollTop;
      });

      if (window.innerWidth > 1024) {
        this.showHideArrows("next", true);
      }

      width = carousel.offsetWidth;
      window.addEventListener("resize", (e) => (width = carousel.offsetWidth));
      //window.screen.width > 1024 ? this.showHideArrows('prev',false) : this.showHideArrows('prev', true)
    },

    doCarouselFirstAct: function () {
      this.addCSS(mainStyles);
      const cat = getHandle();
      const carsl = document.createElement("div");
      carsl.className = "main-wrapper--exp237";
      carsl.innerHTML = `
  <div id="main-wrapper--exp237">
     <div id="carousel--wrapper">
       
           <div class="account--holder__greet">
              <p></p>
           </div>
           <div id="carousel--container">
           <div id="content">
           
           </div>
           <div class="carousel__dots">
              <a class="carousel--dot">
              <span class="hidden">Slide 1</span>
              <span class="page"> </span>
              </a>
              <a class="carousel--dot">
              <span class="hidden">Slide 2</span>
              <span class="page"> </span>
              </a>
              <a class="carousel--dot">
              <span class="hidden">Slide 3</span>
              <span class="page"> </span>
              </a>
           </div>
        </div>
        <button hidden id="prev">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path fill="none" border="none" stroke="#333" d="M16 11l9 9-9 9"/>
           </svg>
        </button>
        <button hidden id="next">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path fill="none" stroke="#333" d="M16 11l9 9-9 9"/>
           </svg>
        </button>
     </div>
  </div>
  `;
      // makes sure not there already
      this.removeXhandle(".main-wrapper-exp237");
      this.removeSiteStripe();
      // already exist
      if (document.querySelector(".main-wrapper--exp237")) {
        let ele = document.querySelector(".main-wrapper--exp237");
        ele.parentElement.removeChild(ele);
      }
      // then add.
      cat.parentElement.insertBefore(carsl, cat);
    },

    removeSiteStripe: function () {
      if (document.querySelector(".page__site-stripe")) {
        const stripe = document.querySelector(".page__site-stripe");
        stripe.style.marginDown = 0;
      }
    },
  };
})();

window.addEventListener("resize", () => {
  // screen resize
  // update arrows, carousel scroll top and cards into view
  const isCrsl = document.querySelectorAll(
    "#main-wrapper--exp237 #carousel--container"
  );
  const prev = document.querySelector("button#prev");
  const next = document.querySelector("button#next");
  const carslides = document.querySelectorAll(
    "#main-wrapper--exp237 #content .item"
  );
  // set both arrow to none
  [prev, next].forEach((itm) => (itm.style.display = "none"));
  // update next arrow within fn
  closCarousel237.doCarouselSecondAct();
  index = 0;
  let fi;

  //bring first slide into view
  if (document.querySelector("#main-wrapper--exp237 .item") !== null) {
    fi = document.querySelector("#main-wrapper--exp237 .item");
    fi.scrollIntoView();
  }

  //top
  isCrsl.scrollTop;
  carslides.scrollTop;
}); // resize event

function externalScripts() {
  ["https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/gsap.min.js"].forEach(
    function (src) {
      var script = document.createElement("script");
      script.src = src;
      script.async = true;
      document.head.appendChild(script);
    }
  );
}
externalScripts();

var closCarousel237 = (function () {
  let index = 0;

  // const dotRatio = 0
  const getHandle = function () {
    if (document.querySelector(".main-container") !== null) {
      return document.querySelector(".main-container");
    } else if (document.querySelector(".container") !== null) {
      return document.querySelector(".container");
    } else if (document.querySelector(".full-width-container") !== null) {
      return document.querySelector(".full-width-container");
    } else if (window.location.pathname.indexOf("l") === 1) {
      return document.querySelector(".container");
    }
  };

  const mainStyles = `
  .main-wrapper--exp237 {
    margin: 0;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: auto;
    flex-direction: column;
    height: 170px;
    background-color: #F1EDEC;
    width: 100%;
}
	#main-wrapper--exp237 {
	    box-sizing: border-box;
	    background-color: transparent;
	    width: 100%;
	    max-width: 1280px;
	    height: 100%;
	    margin: 0 auto;
	    flex-direction: column;
	    display: flex;
	    justify-content: space-around;
	}
	#main-wrapper--exp237 #carousel--container::-webkit-scrollbar {
	    display: none;
	    height: 0;
	}
	#carousel--container {
	    margin: 0;
	    display: flex;
	    flex-direction: column;
	    width: 100%;
	    overflow-y: scroll;
	}
	@keyframes fader {
	    from {
	        opacity: 0.5;
	        transform: translateX(10%) 
	   }
	    to {
	        opacity: 1;
	   }
	}
	#main-wrapper--exp237 #carousel--wrapper {
	    width: 100%;
	    margin: 0;
	    padding: 0 1rem;
	    display: flex;
	    flex-wrap: wrap;
	}
	#main-wrapper--exp237 #content {
	    display: grid;
	    grid-gap: 16px;
	    grid-auto-flow: column;
	    margin: auto;
	    box-sizing: border-box;
	    position: relative;
	}
	.item span.close-card {
	    transition: all .75s linear 250ms;
	    color: inherit;
	    font-weight: 300;
	    display: flex;
	    height: auto;
	    opacity: 1;
	    cursor: pointer;
	    transform: scaleX(1.4) translate(-9px, -22px);
	}
	#main-wrapper--exp237 .account--holder__greet {
	    height: 40px;
	    display: flex;
	    flex-direction: column;
	    justify-content: flex-start;
	    width: 100%;
	}
	#main-wrapper--exp237 .account--holder__greet p {
	    margin: 0;
	    font-weight: normal;
	    line-height: 40px;
	}
	#main-wrapper--exp237 .item {
	    border-radius: 8px;
	    height: 78px;
	    width: 300px;
	    background: #fff;
	    border: 1px solid #d9d9d9;
	    display: flex;
	    flex-direction: row;
	    justify-content: space-between;
	    align-items: center;
	    flex-wrap: nowrap;
	}
	#main-wrapper--exp237 .item.hidden {
	    display: none;
	}
	#main-wrapper--exp237 .item img.card-logo {
	    transition: display .45s linear 25ms;
	    height: auto !important;
	    width: 100%;
	    padding: 0;
	    position: relative;
	    max-width: 112px;
	    transform: rotate(360deg);
	}
	#main-wrapper--exp237 .item .heading {
	    letter-spacing: 0;
	    color: #000000;
	    font-family: 'MS London eText Semibold';
	    text-align: left;
	    display: flex;
	    line-height: 20px;
	    margin: 0;
	    width: 160px;
	    font-size: 14px;
	    margin-left: -70px;
	    
	}
	#main-wrapper--exp237 img.card-confetti {
	    width: 20px;
	    height: 20px;
	    transform: translate(-40px, 20px);
	    object-fit: contain;
	    align-self: auto;
	}
	.item .heading img.card-confetti::before {
	    width: 20px;
	    height: 20px;
	    display: inline-block;
	    object-fit: contain;
	    align-self: flex-end;
	}
	@media only screen and (max-width: 1024px) {
	    #main-wrapper--exp237 .carousel--dot span {
	        display: none;
	   }
	    button#prev, button#next {
	        display: none;
	   }
	    button#prev.hidden, button#next.hidden {
	        display: none;
	   }
	}
	.welcome--message {
	    width: 100%;
	    display: flex;
	    margin: 0.3rem 0 0 0;
	    justify-content: flex-start;
	}
	.welcome--message p {
	    margin: 0;
	    margin-left: 6.50vw;
	}
	.carousel__wrapper.hidden {
	    visibility: hidden;
	}
	.carousel__wrapper {
	    transition: all 0.45s linear 150ms;
	    width: 100%;
	    display: flex;
	    flex-direction: column;
	    justify-content: center;
	    background-color: #f2f2f2;
	    position: relative;
	}
	.main-wrapper--exp236 {
	    margin: 0;
	    display: flex;
	    justify-content: center;
	    align-items: center;
	    flex-direction: column;
	    height: 170px;
	    background-color: #F1EDEC;
	    width: 100%;
	}
	#carousel--wrapper {
	    width: 90%;
	    margin-left: 10%;
	    position: relative;
	    padding-top: 60px;
	    padding-bottom: 33px;
	    background: #F1EDEC;
	}
	#carousel--container {
	    height: 78px;
	    margin: 0;
	    scroll-behavior: smooth;
	    margin: 0;
	    -ms-overflow-style: none;
	   /* IE and Edge */
	    scrollbar-width: none;
	   /* Firefox */
	}
	#main-wrapper--exp237 #carousel--wrapper .carousel__dots {
	    display: none !important;
	}
	#main-wrapper--exp237 .card-notification__wrapper {
	    position: relative;
	    top: -30px;
	    left: -24px;
	    background: rgba(255,255,255,.35);
	}
	#main-wrapper--exp237 .card-notification {
	    height: 22px;
	    width: 22px;
	    border: 1px solid rgb(255 255 255);
	    border-radius: 50%;
	    position: absolute;
	    background-color: #333;
	    color: rgb(255 255 255);
	    line-height: 20px;
	    text-align: center;
	    font-size: 12px;
	    top: 0px;
	    right: 29px;
	   
	}
	@media only screen and (min-width: 1025px) {
	    #main-wrapper--exp237 #carousel--wrapper {
	        width: 90%;
	        margin-left: 10%;
	        position: relative;
	        padding-top: 22px;
	        padding-bottom: 31px;
	        background: #F1EDEC;
	   }
	    #main-wrapper--exp237 .carousel--dot span {
	        display: none;
	   }
	    #main-wrapper--exp237 #carousel--wrapper button#prev:focus,#carousel--wrapper button#next:focus {
	        outline: none;
	        box-shadow: none;
	   }
	   
	    #main-wrapper--exp237 button svg {
	        width: 35px;
	        height: 40px;
	        fill: rgba(255,255,255,.35);
	        width: 35px;
		    fill: rgba(255,255,255,.35);
		    stroke-width: 2px;
		    backdrop-filter: opacity(0.5);
	   }
	    #main-wrapper--exp237 #prev, #main-wrapper--exp237 #next {
	        justify-content: center;
	        align-content: center;
	        width: 35px;
		    height: 40px;
		    fill: rgba(255,255,255,.35);
		    stroke-width: 2px;
		    backdrop-filter: opacity(0.5);
	        border: none;
	        padding: 1px;
	        border-radius: 0;
	        outline: 0;
	        cursor: pointer;
	        position: absolute;
	        line-height: 0.5;
	   }
	    #main-wrapper--exp237 #prev {
	        top: 60%;
	        left: 0;
	        left: -75px;
	        transform: translate(50%, -50%) rotate(180deg);
	   }
	    #main-wrapper--exp237 #next {
	        top: 60%;
	        right: 16%;
	        transform: translate(-50%, -50%);
	        background-color: initial; 
	   }
	    #main-wrapper--exp237 .account--holder__greet {
	        display: flex;
	        margin-left: 0;
	        justify-content: flex-start;
	   }
	    #main-wrapper--exp237 .account--holder__greet p {
	        margin: 0;
		    padding: 0 5px;
		    font-weight: 600;
		    letter-spacing: 0;
		    width: 213px;
		    font-size: 18px;
		    font-family: 'MS London eText';
	   }
}

	.item.bounce {
	  animation: bounce 0.75s ease 0ms;
	}
	
	@keyframes bounce {
	    70% { transform:translateY(0%); }
	    80% { transform:translateY(-15%); }
	    90% { transform:translateY(0%); }
	    95% { transform:translateY(-7%); }
	    97% { transform:translateY(0%); }
	    99% { transform:translateY(-3%); }
	    100% { transform:translateY(0); }
	}

  `;

  return {
    addCSS: function (css) {
      const head = document.getElementsByTagName("head")[0];
      const s = document.createElement("style");
      s.setAttribute("type", "text/css");
      s.appendChild(document.createTextNode(css));
      head.appendChild(s);
    },
    init: function () {
      this.doCarouselFirstAct();
      this.doCarouselSecondAct();
    },

    doDots: function (d) {
      // console.log(index)
      index += d;
      const slides = document.querySelectorAll(
        "#main-wrapper--exp237 #content .item"
      );
      const dots = [
        ...document.querySelectorAll("#main-wrapper--exp237 .carousel__dots")[0]
          .children,
      ];

      if (index > slides.length - 1) index = 0;

      dots.forEach((dot, i) => {
        if (dot.classList.contains("dot--active")) {
          dot.classList.remove("dot--active");
        }

        if (i === index) {
          dot.classList.add("dot--active");
        }
      });
    },

    showHideArrows: function (ele, val) {
      const arrow = document.getElementById(ele);
      arrow.hidden = val;
    },

    removeXhandle: function (hndl) {
      let rmService;
      let handle = hndl;

      // testing only remove before inserting to AT
      if (
        document.location.href ===
        "https://donpio.tech/repositories/mtest/index.html"
      ) {
        handle = ".main-wrapper--exp236";
        rmService = document.querySelector(handle);
        return document.querySelector(`${handle}`) !== null
          ? rmService.parentElement.removeChild(rmService)
          : false;
      }

      rmService = document.querySelector(handle);
      return document.querySelector(handle) !== null
        ? rmService.parentElement.removeChild(rmService)
        : false;
    },

    doScroll: {
      disableScroll: function () {
        // Get the current page scroll position
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        (scrollLeft =
          window.pageXOffset || document.documentElement.scrollLeft),
          // if any scroll is attempted, set this to the previous value
          (window.onscroll = function () {
            window.scrollTo(scrollLeft, scrollTop);
          });
      },

      enableScroll: function () {
        window.onscroll = function () {};
      },
    },

    getBounds: function (elem) {
      var bounding = elem.getBoundingClientRect();
      var myElementHeight = elem.offsetHeight;
      var myElementWidth = elem.offsetWidth;

      if (
        bounding.top >= -myElementHeight &&
        bounding.left >= -myElementWidth &&
        bounding.right <=
          (window.innerWidth || document.documentElement.clientWidth) +
            myElementWidth &&
        bounding.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) +
            myElementHeight
      ) {
        elem.classList.add("bounce");
      } else {
        elem.classList.remove("bounce");
      }
    },

    doCarouselSecondAct: function () {
      const gap = 16;
      let width;
      let scrollSeg = 1500;
      const carousel = document.getElementById("carousel--container");
      const content = document.getElementById("content");
      const next = document.getElementById("next");
      const prev = document.getElementById("prev");

      window.screen.size > 1024
        ? this.showHideArrows("next", false)
        : this.showHideArrows("prev", true);

      next.addEventListener("click", (e) => {
        this.doScroll.disableScroll();
        carousel.scrollBy(+width, 0);
        carousel.scrollTop;
        carousel.scrollLeft;
        let ecards = content.children;
        //last one!
        let lastOne = ecards[ecards.length - 1];
        this.getBounds(lastOne);

        console.log(
          `scrolled left ${carousel.scrollLeft}  scroll width ${carousel.scrollWidth} `
        );

        if (scrollSeg < carousel.scrollLeft) {
          this.showHideArrows("next", true);
        }

        if (carousel.scrollLeft === 0) {
          this.showHideArrows("prev", false);
        }

        return carousel.scrollTop;
      });

      prev.addEventListener("click", (e) => {
        this.doScroll.disableScroll();
        carousel.scrollBy(-width, 0);
        let ecards = content.children;
        carousel.scrollLeft;
        carousel.scrollTop;
        //firstOne!
        let firstOne = ecards[0];
        this.getBounds(firstOne);

        console.log(`scrolled left: ${carousel.scrollLeft}
        	          scroll width: ${carousel.scrollWidth} 
        	          entire content scrollWidth: ${content.scrollWidth}`);

        if (carousel.scrollLeft - scrollSeg <= 0) {
          this.showHideArrows("prev", true);
        }

        if (
          content.scrollWidth - carousel.scrollLeft - scrollSeg <=
          scrollSeg
        ) {
          this.showHideArrows("next", false);
        }

        return carousel.scrollTop;
      });

      if (window.innerWidth > 1024) {
        this.showHideArrows("next", true);
      }

      width = carousel.offsetWidth;
      window.addEventListener("resize", (e) => (width = carousel.offsetWidth));
      //window.screen.width > 1024 ? this.showHideArrows('prev',false) : this.showHideArrows('prev', true)
    },

    doCarouselFirstAct: function () {
      this.addCSS(mainStyles);
      const cat = getHandle();
      const carsl = document.createElement("div");
      carsl.className = "main-wrapper--exp237";
      carsl.innerHTML = `
  <div id="main-wrapper--exp237">
     <div id="carousel--wrapper">
       
           <div class="account--holder__greet">
              <p></p>
           </div>
           <div id="carousel--container">
           <div id="content">
           
           </div>
           <div class="carousel__dots">
              <a class="carousel--dot">
              <span class="hidden">Slide 1</span>
              <span class="page"> </span>
              </a>
              <a class="carousel--dot">
              <span class="hidden">Slide 2</span>
              <span class="page"> </span>
              </a>
              <a class="carousel--dot">
              <span class="hidden">Slide 3</span>
              <span class="page"> </span>
              </a>
           </div>
        </div>
        <button hidden id="prev">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path fill="none" border="none" stroke="#333" d="M16 11l9 9-9 9"/>
           </svg>
        </button>
        <button hidden id="next">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path fill="none" stroke="#333" d="M16 11l9 9-9 9"/>
           </svg>
        </button>
     </div>
  </div>
  `;
      // makes sure not there already
      this.removeXhandle(".main-wrapper-exp237");
      this.removeSiteStripe();
      // already exist
      if (document.querySelector(".main-wrapper--exp237")) {
        let ele = document.querySelector(".main-wrapper--exp237");
        ele.parentElement.removeChild(ele);
      }
      // then add.
      cat.parentElement.insertBefore(carsl, cat);
    },

    removeSiteStripe: function () {
      if (document.querySelector(".page__site-stripe")) {
        const stripe = document.querySelector(".page__site-stripe");
        stripe.style.marginDown = 0;
      }
    },
  };
})();

window.addEventListener("resize", () => {
  // screen resize
  // update arrows, carousel scroll top and cards into view
  const isCrsl = document.querySelectorAll(
    "#main-wrapper--exp237 #carousel--container"
  );
  const prev = document.querySelector("button#prev");
  const next = document.querySelector("button#next");
  const carslides = document.querySelectorAll(
    "#main-wrapper--exp237 #content .item"
  );
  // set both arrow to none
  [prev, next].forEach((itm) => (itm.style.display = "none"));
  // update next arrow within fn
  closCarousel237.doCarouselSecondAct();
  index = 0;
  let fi;

  //bring first slide into view
  if (document.querySelector("#main-wrapper--exp237 .item") !== null) {
    fi = document.querySelector("#main-wrapper--exp237 .item");
    fi.scrollIntoView();
  }

  //top
  isCrsl.scrollTop;
  carslides.scrollTop;
}); // resize event

window.addEventListener("load", function () {
  // load page event
  // init activity
  closCarousel237.init();
  let times = 0;
  let allOffers; //user sparks total
  // carousel cards updated
  let xcards = document.querySelector("#main-wrapper--exp237 #content");
  let cardsNum = 0;
  let insertGreeding = document.querySelector(".account--holder__greet p");

  const allSparks = function () {
    const data = {};
    if ("sparksSSO" in window.sessionStorage) {
      const session = JSON.parse(window.sessionStorage.getItem("sparksSSO"));
      data.addedOffers = session.totalAddedOffers;
      data.allOffers = session.totalOffers;
      data.newOffers = data.allOffers - data.addedOffers;

      data.allCards = session.allOffers[0].offers;
      // spaks offers user
      allOfers = data.allOffers;
      return data;
    }
  };

  function getCookie(cname, nameOrValue = "cookieName") {
    let nmval = nameOrValue;
    const name = cname + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1, c.length);
      }
      if (c.indexOf(name) === 0) {
        const result = c.substring(name.length, c.length);
        let cookieName = result.split(" ")[0];
        let preval = result.split(" ")[1];
        let cookieValue = preval.split("_")[1];
        return nmval === "cookieName" ? cookieName : cookieValue;
      }
    }
  }

  /*
	Handy information to have:
	-------------------------
	name: MS_LOGIN_COOKIE_10151,val: [-1,R,L,,]
	name: MS_USER_COOKIE_10151, val: [Default 1_529516839]
	
	// root api
	url = 'https://api.loyalty.marksandspencer.services/loyalty-service/api/aggregatedetails/user/v2';
  
  */

  function fetchSparks() {
    let url =
      "https://api.loyalty.marksandspencer.services/loyalty-service/api/aggregatedetails/user/v2";
    let cookieValue = getCookie("MS_USER_COOKIE_10151", "cookieValue");
    let composed =
      '{"externalCustomerId":' +
      '"' +
      cookieValue +
      '"' +
      ',"platform":"UK_DIGITAL"}';
    let encodedCookie = btoa(composed);
    let secretParams = "MNSSharedSecret 620sSJ|xq-2K3?T" + " " + encodedCookie;
    //get data
    fetch(url, {
      headers: {
        Authorization: secretParams,
      },
    })
      .then((data) => data.json())
      .then((res) => {
        console.log("sparks options ", res);
        //keep copy in localStorage along with sparksOptions
        localStorage.setItem(
          "sparkOptionsComplete",
          JSON.stringify(res.offersBreakdown)
        );
      });
  }

  function doGreed(options) {
    const { visitorName } = options;
    const greet = document.getElementById("helloText");

    insertGreeding.hidden = true;
    const isGreeting = greet.textContent.trim();
    const visitNGreet = isGreeting + " " + visitorName;
    insertGreeding.textContent = visitNGreet;
  }

  // info object
  const sparksOptions = {
    name: "sparksOptions",
    //fetch from session first
    allOffers: allSparks(),
    //not in session call api -disabled below
    //allFetchedSparks: fetchSparks(),
    // cookieName
    visitorName: getCookie("MS_USER_COOKIE_10151", "cookieName") || "",
    //cookieValue
    visitorValue: getCookie("MS_USER_COOKIE_10151", "cookieValue"),
    other: {
      //visitorStatus
      visitorStatus:
        !!this.visitorName && this.visitorName !== ""
          ? "signed-in"
          : "signed-out",
    },
  };

  function cardsBeenAdded() {
    let cardsWidth = xcards.offsetWidth;
    cardsNum = Math.round(cardsWidth / 300);
    console.log("resizedObserver - cards before: ", cardsNum, cardsWidth);

    if (
      document.getElementById("content").outerText !== "" &&
      document.getElementById("content").children[0].dataset.id.length === 4
    ) {
      //pgload
      insertGreeding.hidden = false;
      //arrows
      prev = document.querySelector("button#prev");
      next = document.querySelector("button#next");
      cardsNum < 6
        ? closCarousel237.showHideArrows("next", true)
        : closCarousel237.showHideArrows("next", false);
    }
    //remove greeding
    if (cardsNum < 6) {
      insertGreeding.hidden = true;
      closCarousel237.showHideArrows("next", true);
      closCarousel237.showHideArrows("prev", true);
    }
  }

  // total offers in cards
  const doCardUpdates = {
    init: () => {
      cardsBeenAdded();
      //insertGreeding.hidden = false;
    },
  };

  //check num of cards
  new ResizeObserver(doCardUpdates.init).observe(xcards);

  //card-close event
  window.addEventListener("click", function (e) {
    if (
      document.querySelector("#main-wrapper--exp237 #content") &&
      e.target.classList.contains("close-card")
    ) {
      e.preventDefault();
      times++;
      let el = e.toElement.parentElement;
      if (times === 1) {
        el.parentElement.removeChild(el);
        times = 0;
      }
    }
  });

  try {
    let options = sparksOptions,
      cstorage,
      coptions;
    console.log("sparksOptions ", options);

    const checkOptions = () => {
        return options &&
          options.name && //test changed to not
          document.cookie.indexOf("MS_USER_COOKIE_10151") !== -1
          ? doGreed(options)
          : false;
      },
      checkStorage = (label) => {
        return window.localStorage.getItem(label) === null
          ? window.localStorage.setItem("sparkOptions", JSON.stringify(label))
          : false;
      };
    checkStorage(sparksOptions);
    checkOptions();

    console.clear();
    console.log(
      `\n [EXP-237] ... Sparks Options in Local Storage, Cookie checked. \n\n DONE! `
    );
  } catch (err) {
    console.log("TRY again: " + err);
  }
}); // load page event

window.addEventListener("load", function () {
  // load page event
  // init activity
  closCarousel237.init();
  let times = 0;
  let allOffers; //user sparks total
  // carousel cards updated
  let xcards = document.querySelector("#main-wrapper--exp237 #content");
  let cardsNum = 0;
  let insertGreeding = document.querySelector(".account--holder__greet p");

  const allSparks = function () {
    const data = {};
    if ("sparksSSO" in window.sessionStorage) {
      const session = JSON.parse(window.sessionStorage.getItem("sparksSSO"));
      data.addedOffers = session.totalAddedOffers;
      data.allOffers = session.totalOffers;
      data.newOffers = data.allOffers - data.addedOffers;

      data.allCards = session.allOffers[0].offers;
      // spaks offers user
      allOfers = data.allOffers;
      return data;
    }
  };

  function getCookie(cname, nameOrValue = "cookieName") {
    let nmval = nameOrValue;
    const name = cname + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1, c.length);
      }
      if (c.indexOf(name) === 0) {
        const result = c.substring(name.length, c.length);
        let cookieName = result.split(" ")[0];
        let preval = result.split(" ")[1];
        let cookieValue = preval.split("_")[1];
        return nmval === "cookieName" ? cookieName : cookieValue;
      }
    }
  }

  /*
	Handy information to have:
	-------------------------
	name: MS_LOGIN_COOKIE_10151,val: [-1,R,L,,]
	name: MS_USER_COOKIE_10151, val: [Default 1_529516839]
	
	// root api
	url = 'https://api.loyalty.marksandspencer.services/loyalty-service/api/aggregatedetails/user/v2';
  
  */

  function fetchSparks() {
    let url =
      "https://api.loyalty.marksandspencer.services/loyalty-service/api/aggregatedetails/user/v2";
    let cookieValue = getCookie("MS_USER_COOKIE_10151", "cookieValue");
    let composed =
      '{"externalCustomerId":' +
      '"' +
      cookieValue +
      '"' +
      ',"platform":"UK_DIGITAL"}';
    let encodedCookie = btoa(composed);
    let secretParams = "MNSSharedSecret 620sSJ|xq-2K3?T" + " " + encodedCookie;
    //get data
    fetch(url, {
      headers: {
        Authorization: secretParams,
      },
    })
      .then((data) => data.json())
      .then((res) => {
        console.log("sparks options ", res);
        //keep copy in localStorage along with sparksOptions
        localStorage.setItem(
          "sparkOptionsComplete",
          JSON.stringify(res.offersBreakdown)
        );
      });
  }

  function doGreed(options) {
    const { visitorName } = options;
    const greet = document.getElementById("helloText");

    insertGreeding.hidden = true;
    const isGreeting = greet.textContent.trim();
    const visitNGreet = isGreeting + " " + visitorName;
    insertGreeding.textContent = visitNGreet;
  }

  // info object
  const sparksOptions = {
    name: "sparksOptions",
    //fetch from session first
    allOffers: allSparks(),
    //not in session call api -disabled below
    //allFetchedSparks: fetchSparks(),
    // cookieName
    visitorName: getCookie("MS_USER_COOKIE_10151", "cookieName") || "",
    //cookieValue
    visitorValue: getCookie("MS_USER_COOKIE_10151", "cookieValue"),
    other: {
      //visitorStatus
      visitorStatus:
        !!this.visitorName && this.visitorName !== ""
          ? "signed-in"
          : "signed-out",
    },
  };

  function cardsBeenAdded() {
    let cardsWidth = xcards.offsetWidth;
    cardsNum = Math.round(cardsWidth / 300);
    console.log("resizedObserver - cards before: ", cardsNum, cardsWidth);

    if (
      document.getElementById("content").outerText !== "" &&
      document.getElementById("content").children[0].dataset.id.length === 4
    ) {
      //pgload
      insertGreeding.hidden = false;
      //arrows
      prev = document.querySelector("button#prev");
      next = document.querySelector("button#next");
      cardsNum < 6
        ? closCarousel237.showHideArrows("next", true)
        : closCarousel237.showHideArrows("next", false);
    }
    //remove greeding
    if (cardsNum < 6) {
      insertGreeding.hidden = true;
      closCarousel237.showHideArrows("next", true);
      closCarousel237.showHideArrows("prev", true);
    }
  }

  // total offers in cards
  const doCardUpdates = {
    init: () => {
      cardsBeenAdded();
      //insertGreeding.hidden = false;
    },
  };

  //check num of cards
  new ResizeObserver(doCardUpdates.init).observe(xcards);

  //card-close event
  window.addEventListener("click", function (e) {
    if (
      document.querySelector("#main-wrapper--exp237 #content") &&
      e.target.classList.contains("close-card")
    ) {
      e.preventDefault();
      times++;
      let el = e.toElement.parentElement;
      if (times === 1) {
        el.parentElement.removeChild(el);
        times = 0;
      }
    }
  });

  try {
    let options = sparksOptions,
      cstorage,
      coptions;
    console.log("sparksOptions ", options);

    const checkOptions = () => {
        return options &&
          options.name && //test changed to not
          document.cookie.indexOf("MS_USER_COOKIE_10151") !== -1
          ? doGreed(options)
          : false;
      },
      checkStorage = (label) => {
        return window.localStorage.getItem(label) === null
          ? window.localStorage.setItem("sparkOptions", JSON.stringify(label))
          : false;
      };
    checkStorage(sparksOptions);
    checkOptions();

    console.clear();
    console.log(
      `\n [EXP-237] ... Sparks Options in Local Storage, Cookie checked. \n\n DONE! `
    );
  } catch (err) {
    console.log("TRY again: " + err);
  }
}); // load page event
