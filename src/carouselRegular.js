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
  let index = -1;
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
    display: flex;
    justify-content: center;
  }

  #carousel--container {
    margin: 0;	
    scroll-behaviour: smooth;
  }
 

  #main-wrapper--exp237 #carousel--container::-webkit-scrollbar {
    display: none;
    height: 0;
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
 
  
  .main-wrapper--exp237 #prev, .main-wrapper--exp237 #next {
    display: none;
  }

  #main-wrapper--exp237 #prev, #main-wrapper--exp237 #next {
    display: none;
  }

  #main-wrapper--exp237 #carousel--wrapper {
    width: 100%;
    margin-left: 0;
    padding: 0 1rem;
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

  .fade {
    -webkit-animation-name: fade;
    -webkit-animation-duration: 1.5s;
    animation-name: fade;
    animation-duration: 1.5s;
  }
  @-webkit-keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
  }
  @keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
  }

  #main-wrapper--exp237 .item {
    max-width: 260px;
    border-radius: 8px;
    height: 70px;
    background: #fff;
    border: 1px solid #d9d9d9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  #main-wrapper--exp237 .item img {
    width: 85px;
    height: auto;
    mix-blend-mode: multiply;
    margin: 11px 0 0 10px;
  }
  #main-wrapper--exp237 .item .heading {
    width: 144px;
    height: 40px;
    margin: 0;
  }
  #main-wrapper--exp237 .item p.heading {
    font-family: 'MS London eText Semibold';
    font-weight: normal;
    color: rgb(0,0,0);
    letter-spacing: 0;
    font-size: 14px;
    height: 40px;
    text-align: left;
    position: relative;
  }
  #main-wrapper--exp237 .item p.heading::after {
    content: '🎉';
    position: absolute;
    letter-spacing: 0;
    line-height: 21px;
    font-size: 14px;
    right: 33px;
  }

  #main-wrapper--exp237 .carousel--dot span {
    display: none;
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
      transition: none;
      transition: all 1s ease .15s;
      display: flex;
      width: 90%;
      justify-content: center;
      align-items: initial;
      flex-wrap: wrap;
      height: 20px;
      margin-top: 7px;
      left: 0%;
      position: absolute;
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
      display: flex;
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
      display: none;
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
     .text-container {
         margin: 0 auto;
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
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
     .carousel__wrapper .carousel--container {
         height: 304px;
         position: relative;
         max-width: 1280px;
         overflow: hidden;
         margin: auto;
         display: flex;
         flex-direction: column;
         width: 100%;
         justify-content: center;
    }
     .carousel__button-wrapper {
         width: 100%;
         max-width: 1005px;
         margin: 0 auto;
         height: 0;
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
    }
     .carousel__inner-wrapper {
         height: 304px;
         width: 100%;
         display: flex;
         flex-direction: row;
         flex-wrap: wrap;
         align-items: center;
         justify-content: space-between;
    }
     .carousel {
         margin: 0;
         list-style: none;
         width: 100%;
         display: flex;
         padding: 10px 10px 10px 14px;
         margin-left: 5.5vw;
         transition: all 1s ease;
    }
     .card {
         flex-direction: column;
         display: flex;
         justify-content: flex-start;
         align-items: center;
         margin-right: 16px;
         padding: 21px 30px 8.53px 30px;
         background-color: #ffffff;
         border-radius: 8px;
         box-shadow: 0 3px 4px 0 rgba(0,0,0,0.14), 0 3px 3px -2px rgba(0,0,0,0.12), 0 1px 8px 0 rgba(0,0,0,0.20);
    }
     .card img {
         padding: 0;
         width: 94px;
         height: auto;
         text-align: center;
         background: radial-gradient(#9ecbef, transparent);
    }
     .card img::before {
         content: 'image goes here';
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
         position: absolute;
         width: 90px;
         height: 120px;
         color: #394043;
         font-size: 12px;
    }
     .card footer img {
         width: 20px;
         height: auto;
         padding: 0;
    }
     button.carousel--button.hide {
         visibility: hidden;
    }
    button.carousel--button {
        transform: translate(5px, -15vh);
        border: none;
        width: 56px;
        height: 56px;
        position: absolute;
        background: #f6f6f6;
    }

   

     

    .carousel__dots .visuallyhidden {
    border: 0;
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
    }

    .carousel--dot {
        background-color: transparent;
    border-radius: 2.5rem;
            cursor: default;
            display: inline-block;
    }



    .carousel--dot span {
    height: .5rem;
        width: .5rem;
        margin: .8rem;
        border-radius: 0.5rem;
        display: inline-block;
        background-color: #ddd;
    }

 
    .carousel--dot span.page {
    cursor: pointer;
    }

    @media only screen and (min-width: 1420px) {
        .carousel__wrapper button.carousel--button:last-child {
          transition: all .3s linear 0ms;
          right: 5vw;
          position: absolute;
        }
      }


    @media only screen and (min-width: 1025px) {
    .carousel__wrapper .carousel {
    margin-left: 9.5vw;
    }
    .welcome--message p {
    margin-left: 10.5vw;
    }
    button.carousel-button:last-child {
    right: 13vw;
    }

    .carousel--dot span {
    height: .8rem;
        width: .8rem;
        margin: .8rem;
        border-radius: 2.5rem;
        display: inline-block;
        background-color: #ddd;
    }

    .carousel--container .carousel__dots {
            transition: margin .3s linear 0ms;
    margin-top: 47px;
    }


    }


    @media only screen and (max-width:1024px) {
         .carousel__wrapper button.carousel--button {
             visibility: hidden;
             display: none;
        }
         .carousel__wrapper button.carousel--button:first-child {
             visibility: hidden;
        }
         .carousel__wrapper button.carousel--button:last-child {
             visibility: hidden;
        }

        .carousel--container .carousel--dots {
            transition: margin .3s linear 0ms;
    margin-top: -10px;
    }

        .carousel__wrapper {
             display: flex;
             width: 100%;
             flex-wrap: wrap;
             height: 100%;
             flex-direction: row;

        }

        .carousel__wrapper .carousel--container {
             height: auto;
             width: 100%;
             display: flex;
             overflow: hidden;
             flex-direction: row;
             flex-wrap: wrap;
        }
         .carousel__wrapper ul.carousel::-webkit-scrollbar {
            /*hide chrome safari opera*/
             display: none;
        }
         .carousel__wrapper ul.carousel {
            /*ie edge firefox */
             -ms-overflow-style: none;
             scrollbar-width: none;
            /* Firefox */
        }
         .carousel__wrapper ul.carousel {
             margin: 0;
        list-style: none;
        min-width: 100%;
        display: flex;
        flex-wrap: nowrap;
        padding: 8px 0 10px 16px;
        margin-bottom: 3rem;
        overflow-x: scroll;
        transition: all 1s ease;
        }


         ul.carousel .card {
             flex-direction: column;
             display: flex;
             max-width: 154px;
             justify-content: flex-start;
             z-index:99;
             align-items: center;
             margin-right: 16px;
             padding: 24px 30px 16px 30px;
             background-color: #ffffff;
             border-radius: 8px;
             box-shadow: 0 3px 4px 0 rgba(0,0,0,0.14), 0 3px 3px -2px rgba(0,0,0,0.12), 0 1px 8px 0 rgba(0,0,0,0.20);
        }

        ul.carousel .card:last-child {
            max-width: 153px;
            border-right: 1px solid #e9e5e5;

        }


         .carousel__footer {
             display: flex;
             width: 100%;
             margin: 2px auto 4px;
             justify-content: space-around;
        }
         .carousel__footer p {
             font-size: 1.4rem;
             margin: 0;
        }
         .card img {
             padding: 7px;
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
      index += d;
      const slides = document.querySelectorAll(
        "#main-wrapper--exp237 #content .item"
      );
      const dots = [
        ...document.querySelectorAll("#main-wrapper--exp237 .carousel__dots")[0]
          .children,
      ];
     
      // const da = Array.from(dots)
      if (index > slides.length - 1) index = 0;

      // dotRatio = Math.floor(slides.length / 3)
      dots.forEach((dot, i) => {
        if (dot.classList.contains("dot--active")) {
          dot.classList.remove("dot--active");
        }
        // let test = index + dotRatio
        if (i === index) {
          dot.classList.add("dot--active");
        }
      });
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
        rmService = document.querySelector(`${handle}`);
        return document.querySelector(`${handle}`) !== null
          ? rmService.parentElement.removeChild(rmService)
          : false;
      }
      rmService = document.querySelector(`${handle}`);
      return document.querySelector(`${handle}`) !== null
        ? rmService.parentElement.removeChild(rmService)
        : false;
    },

    doCarouselSecondAct: function () {
      const gap = 16;
      const carousel = document.getElementById("carousel--container");
      const content = document.getElementById("content");
      const next = document.getElementById("next");
      const prev = document.getElementById("prev");
      next.addEventListener("click", (e) => {
        carousel.scrollBy(+(width + gap), 0);

        if (carousel.scrollLeft !== 0 && window.innerWidth > 1024) {
          prev.style.display = "flex";
          closCarousel237.doDots(+1);
        }

        if (carousel.scrollWidth - width - gap <= carousel.scrollLeft + width + gap) {
          next.style.display = "none";
          closCarousel237.doDots(0);
        }
        return carousel.scrollTop;
      });

      prev.addEventListener("click", (e) => {
        carousel.scrollBy(-(width + gap), 0);

        if (carousel.scrollLeft - width - gap <= 0) {
          prev.style.display = "none";
          closCarousel237.doDots(0);
        }
        if (content.scrollWidth - width - gap <= carousel.scrollLeft + width &&
          window.innerWidth > 1024
        ) {
          next.style.display = "flex";
          closCarousel237.doDots(-1);
        }
        return carousel.scrollTop;
      });

      let width = carousel.offsetWidth;
      window.addEventListener("resize", (e) => (width = carousel.offsetWidth));
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
              <div class="item">
                 <img src="https://donpio.tech/repositories/mtest/images/Card_NEW.png" />
                 <p class="heading">New Sparks offers waiting for you</p>
              </div>
              <div class="item">
                 <img src="https://donpio.tech/repositories/mtest/images/Card_NEW.png" />
                 <p class="heading">New Sparks offers waiting for you</p>
              </div>
              <div class="item">
                 <img src="https://donpio.tech/repositories/mtest/images/Card_NEW.png" />
                 <p class="heading">New Sparks offers waiting for you</p>
              </div>
              <div class="item">
                 <img src="https://donpio.tech/repositories/mtest/images/Card_NEW.png" />
                 <p class="heading">New Sparks offers waiting for you</p>
              </div>
              <div class="item">
                 <img src="https://donpio.tech/repositories/mtest/images/Card_NEW.png" />
                 <p class="heading">New Sparks offers waiting for you</p>
              </div>
              <div class="item">
                 <img src="https://donpio.tech/repositories/mtest/images/Card_NEW.png" />
                 <p class="heading">New Sparks offers waiting for you</p>
              </div>
              <div class="item">
                 <img src="https://donpio.tech/repositories/mtest/images/Card_NEW.png" />
                 <p class="heading">New Sparks offers waiting for you</p>
              </div>
              <div class="item">
                 <img src="https://donpio.tech/repositories/mtest/images/Card_NEW.png" />
                 <p class="heading">New Sparks offers waiting for you</p>
              </div>
              <div class="item">
                 <img src="https://donpio.tech/repositories/mtest/images/Card_NEW.png" />
                 <p class="heading">New Sparks offers waiting for you</p>
              </div>
             
             
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
  const isCrsl = document.querySelectorAll(
    "#main-wrapper--exp237 #carousel--container"
  ), carslides = document.querySelectorAll(
    "#main-wrapper--exp237 #content .item"
  );
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
    const visitNGreet = `${isGreeting} ${visitorName}`;
    insertGreeding.textContent = visitNGreet;
  }

  const sparksOptions = {
    name: "sparksOptions",
    allOffers: allSparks(),
    visitorName:
      getCookie("MS_USER_COOKIE_10151") || "Not available (see status)",
    // visitorStatus
    other: {
      visitorStatus:
        !!this.visitorName && this.visitorName !== undefined
          ? "signed-in"
          : "signed-out",
    },
  };

  try {
    let options = sparksOptions;

    const checkOptions = () => {
        return options &&
          options.name &&
          document.cookie.indexOf("MS_USER_COOKIE_10151") === 0
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
