/**
 *  closCarousel237 fn
 *  goes
 */

 function externalScripts() {
  const scripts = [
    "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/gsap.min.js",
  ];
  let src, script;
  const firstScript = document.scripts[0];
  while ((src = scripts.shift())) {
    if ("async" in firstScript) {
      script = document.createElement("script");
      script.async = true;
      script.src = src;
      document.head.appendChild(script);
    }
  }       
}
//externalScripts()
const closCarousel237 = (function () {
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
  to  { 
	opacity: 1; 
  	
  }
  }
 
  


  #main-wrapper--exp237 #carousel--wrapper {
    width: 100%;
    margin-left: 0;
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
    height: 70px;
    background: #fff;
    border: 1px solid #d9d9d9;
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
  }
  #main-wrapper--exp237 .item img {
    width: 85px;
    height: auto;
    mix-blend-mode: multiply;
    margin: 11px 13px 0 16px;
  }
  #main-wrapper--exp237 .item .heading {
    font-family: 'MS London eText Semibold';
    font-weight: normal;
    color: rgb(0,0,0);
    letter-spacing: 0;
    font-size: 14px;
    height: 40px;
    text-align: left;
    line-height: 20px;
    width: 144px;
    margin: 10px 0;
  }
 
  #main-wrapper--exp237 .item p.heading::after {
    position: absolute;
    letter-spacing: 0;
    line-height: 21px;
    font-size: 14px;
    right: 33px;
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
	  height: 70px;
      margin: 0;
      scroll-behavior: smooth;
      scrollbar-width: none;
      margin: 0;
      -ms-overflow-style: none;  /* IE and Edge */
     scrollbar-width: none;  /* Firefox */
  }
  
   #main-wrapper--exp237 #carousel--wrapper .carousel__dots {
    display: none !important;
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
    #main-wrapper--exp237 #carousel--wrapper .carousel__dots {
      transition: all 1s ease .15s;
      display: flex;
      width: 90%;
      justify-content: center;
      align-items: initial;
      height: 15px;
      margin: 0 auto;
      bottom: 1px;
      margin: 5px 0;
      position: absolute;
      display: none;
    }

    #main-wrapper--exp237 button svg {
      width: 35px;
      height: 40px;
      fill: #19322F;
    }

    #main-wrapper--exp237 #carousel--wrapper .carousel--dot {
      cursor: pointer;
      height: 6px;
      width: 6px;
      margin: 5px 5px;
      background-color: rgb(0 0 0 / 12%);
      border-radius: 50%;
      display: inline-block;
      transition: background-color 1s ease 100ms;
      animation: fader 3s ease 100ms;
    }
    
  
    #main-wrapper--exp237 #carousel--wrapper .carousel__dots .carousel--dot.dot--active span {
      animation-name: fader;
      animation-duration: 1s;
      z-index: 20;
      background-color: rgb(0 0 0 / 77%);
     
    }

    #main-wrapper--exp237 #carousel--wrapper .carousel__dots .carousel--dot.dot--active:nth-of-type(1) {
      animation-delay: 0.15s;
      background-color: rgb(0 0 0 / 27%);
    }
    #main-wrapper--exp237 #carousel--wrapper .carousel__dots .carousel--dot.dot--active:nth-of-type(2) {
      animation-delay: 0.15s;
      background-color: rgb(0 0 0 / 27%);
    }
    #main-wrapper--exp237 #carousel--wrapper .carousel__dots .carousel--dot.dot--active:nth-of-type(n+3) {
      animation-delay: 0.15s;
      background-color: rgb(0 0 0 / 27%);
    }
   

    #main-wrapper--exp237 #prev,
    #main-wrapper--exp237 #next {
      
      justify-content: center;
      align-content: center;
      background: white;
      border: none;
      padding: 1px;
      border-radius: 0;
      outline: 0;
      cursor: pointer;
      position: absolute;
      background-color: hsl(0deg 0% 96% / 55%);
    }
    #main-wrapper--exp237 #prev {
      top: 57%;
      left: 0;
      left: -75px;
      transform: translate(50%, -50%) rotate(180deg);
     
    }
    #main-wrapper--exp237 #next {
      top: 57%;
      right: 16%;
      transform: translate(-50%, -50%);
    }

    #main-wrapper--exp237 .account--holder__greet {
      display: flex;
      margin-left: 0;
      justify-content: flex-start;
    }

    #main-wrapper--exp237 .account--holder__greet p {
      margin: 0;
      padding: 0 5px;
      font-weight: normal;
    }
 
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
    	console.log(index)
    	
    index+=d;
     
     
     	
     	
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
     
	
	 	console.log(index)

    },
    
    showHideArrows: (ele,val) =>  {
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

    doCarouselSecondAct: function () {
      const gap = 16;
      const carousel = document.getElementById("carousel--container");
      const content = document.getElementById("content");
      const next = document.getElementById("next");
      const prev = document.getElementById("prev");
      
      window.screen.size > 1024 ? this.showHideArrows('next',false) : this.showHideArrows('next', true)

      next.addEventListener("click", (e) => {
        carousel.scrollBy(+(width + gap), 0);
        carousel.scrollTop;
        
        
        if (carousel.scrollLeft === 0) {
           closCarousel237.doDots(+0);
        }
        
         if (carousel.scrollLeft !== 0) {
           closCarousel237.doDots(+1);
        }
        
        if (window.innerWidth > 1024 ) {
        	prev.classList.remove('hidden');
        	this.showHideArrows('prev', false);
        }
        
        

        if (carousel.scrollWidth - width - gap <= carousel.scrollLeft + width + gap) {
        	this.showHideArrows('next',true)
            closCarousel237.doDots(0);
        }
        return carousel.scrollTop;
      });

      prev.addEventListener("click", (e) => {
        carousel.scrollBy(-(width + gap), 0);
      

        if (carousel.scrollLeft - width - gap <= 0) {
        	this.showHideArrows('prev',true);
            closCarousel237.doDots(-1);
        }
        if (content.scrollWidth - width - gap <= carousel.scrollLeft) {
        		this.showHideArrows('next', false);
        		closCarousel237.doDots(-1);
        }
        
        return carousel.scrollTop;
      });
      
      if (window.innerWidth > 1024) {
        	this.showHideArrows('next', true);
      }

      let width = carousel.offsetWidth;
      window.addEventListener("resize", (e) => (width = carousel.offsetWidth));
      
      window.screen.size > 1024 ? this.showHideArrows('prev',false) : this.showHideArrows('prev', true)
      
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
        <button id="prev">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path fill="none" border="none" stroke="#333" d="M16 11l9 9-9 9"/>
           </svg>
        </button>
        <button id="next">
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
  const isCrsl = document.querySelectorAll("#main-wrapper--exp237 #carousel--container"), 
		prev = document.querySelector("button#prev"),
		next = document.querySelector("button#next"),
		carslides = document.querySelectorAll("#main-wrapper--exp237 #content .item");
    // set both arrow to none
    [prev,next].forEach(itm => itm.style.display = "none");
    // update next arrow within fn
    closCarousel237.doCarouselSecondAct();
    index = 0;
    debugger;
   // carousel cards updated
  let xcards = document.querySelector('#main-wrapper--exp237 #content')
  let cardsNum = 0
  function cardsBeenAdded () {
    let cardsWidth = xcards.offsetWidth;
    cardsNum = Math.round(cardsWidth/ 260);
    console.log('cards before: ',cardsNum, cardsWidth);
  }
  
  console.log('cards after: ',cardsNum); 

 
  new ResizeObserver(cardsBeenAdded).observe(xcards)

 
   
  
  //first slide
  const fi = document.querySelector('#main-wrapper--exp237 .item');
  fi.scrollIntoView();
  //top
  isCrsl.scrollTop;
  return carslides.scrollTop;
  
  
  
  
});


window.addEventListener("load", function () {
  closCarousel237.init();

  const allSparks = function () {
    const data = {};
    if ("sparksSSO" in window.sessionStorage) {
      const session = JSON.parse(window.sessionStorage.getItem("sparksSSO"));
      data.addedOffers = session.totalAddedOffers;
      data.allOffers = session.totalOffers;
      data.newOffers = data.allOffers - data.addedOffers;
      data.allCards = session.allOffers[0].offers;
      return data;
    }
  };

  function getCookie(cname) {
    const name = cname + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        const result = c.substring(name.length, c.length);
        const output = result.slice(0, result.indexOf(" ") + 2);
        return output;
      }
    }
  }

  function doGreed(options) {
    const { visitorName } = options;
    const greet = document.getElementById("helloText");
    const insertGreeding = document.querySelector(".account--holder__greet p");
    const isGreeting = greet.textContent.trim();
    const visitNGreet = isGreeting + ' ' + visitorName;
    insertGreeding.textContent = visitNGreet;
  }

  const sparksOptions = {
    name: "sparksOptions",
    allOffers: allSparks(),
    visitorName:
      getCookie("MS_USER_COOKIE_10151") || "",
    // visitorStatus
    other: {
      visitorStatus:
        !!this.visitorName && this.visitorName !== ""
          ? "signed-in"
          : "signed-out",
    },
  };
  
  
   // carousel cards updated
  let xcards = document.querySelector('#main-wrapper--exp237 #content')
  let cardsNum = 0
  function cardsBeenAdded () {
    let cardsWidth = xcards.offsetWidth;
    cardsNum = Math.round(cardsWidth/ 260);
    //arrows
    prev = document.querySelector("button#prev"),
	next = document.querySelector("button#next"),
    console.log('cards before: ',cardsNum, cardsWidth);
    cardsNum < 6 ? closCarousel237.showHideArrows('next',true) : closCarousel237.showHideArrows('next',false);
  }

  new ResizeObserver(cardsBeenAdded).observe(xcards)

  try {
    let options = sparksOptions;

    const checkOptions = () => {
        return options &&
          options.name && //test changed to -1 ------> change to not
          document.cookie.indexOf("MS_USER_COOKIE_10151") === -1
          ? doGreed(options)
          : false;
      },
      checkStorage = () => {
        return window.localStorage.getItem("sparksOptions") === null
          ? window.localStorage.setItem(
              "sparkOptions",
              JSON.stringify(sparksOptions)
            )
          : false;
      };

    if (checkOptions() !== false && checkStorage() !== false) {
      console.clear();
      console.log(
        `\n [EXP-237] ... Sparks Options in Local Storage, Cookie checked. \n\n DONE! `
      );
    }
  } catch (err) {
    console.log("TRY again: " + err);
  }
});