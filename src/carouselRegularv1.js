function externalScripts() {
  [
    "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/gsap.min.js",
  
  ].forEach(function(src) {
    var script = document.createElement('script');
    script.src = src;
    script.async = true;
    document.head.appendChild(script);
});
  
}
externalScripts()


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
      // already exist
      if (document.querySelector('.main-wrapper--exp237')) {
        let ele = document.querySelector('.main-wrapper--exp237');
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

window.addEventListener("resize", () => { // screen resize
  // update arrows, carousel scroll top and cards into view
  const isCrsl = document.querySelectorAll("#main-wrapper--exp237 #carousel--container"), 
		prev = document.querySelector("button#prev"),
		next = document.querySelector("button#next"),
		carslides = document.querySelectorAll("#main-wrapper--exp237 #content .item");
    // set both arrow to none
    [prev,next].forEach(itm => itm.style.display = "none");
    // update next arrow within fn
    closCarousel237.doCarouselSecondAct();
    index = 0;
  //bring first slide into view
  const fi = document.querySelector('#main-wrapper--exp237 .item');
  fi.scrollIntoView();
  //top
  isCrsl.scrollTop;
  return carslides.scrollTop;
    
  
}); // resize event






  


window.addEventListener("load", function () { // load page event
  // init activity
  closCarousel237.init();
  let times = 0;

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
    console.log('resize observer called - cards been updated')
    let cardsWidth = xcards.offsetWidth;
    cardsNum = Math.round(cardsWidth/ 260);
    //arrows
    prev = document.querySelector("button#prev"),
	next = document.querySelector("button#next"),
    console.log('cards before: ',cardsNum, cardsWidth);
    cardsNum < 6 ? closCarousel237.showHideArrows('next',true) : closCarousel237.showHideArrows('next',false);
  }

  new ResizeObserver(cardsBeenAdded).observe(xcards)

  //card-close event
  window.addEventListener('click', function(e) {
    if (document.querySelector('#main-wrapper--exp237 #content') && 
      (e.target.classList.contains('close-card'))) {
          e.preventDefault();
          times++;
          let el = e.toElement.parentElement;
          if (times === 1 ) {
            el.parentElement.removeChild(el)
            times = 0;
          } 
      }
  });

  try {
    let options = sparksOptions;

    const checkOptions = () => {
        return options &&
          options.name && //test changed to not
          document.cookie.indexOf("MS_USER_COOKIE_10151") !== -1
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

}); // load page event