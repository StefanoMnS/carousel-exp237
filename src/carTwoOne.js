
var closCarousel237 = (function () {
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
	  
	  * {
		  box-sizing: border-box;
		  scroll-behavior: smooth;
	  }
	  .below-header img {display: none !important;}
	  
		.main-wrapper--exp237 {
				margin: 0;
				margin-top: 16px;
				box-sizing: border-box;
				display: flex;
				justify-content: center;
				align-items: center;
				overflow-y: auto;
				flex-direction: column;
				height: 140px;
			    background-color: #F1EDEC;
				width: 100%;
				font-family: mns-london,Helvetica,Arial,sans-serif;
			}
			
		#main-wrapper--exp237 {
		
				width: 100%;
				max-width: 1280px;
				height: 100%;
				margin: 0 auto;
				flex-direction: column;
				display: flex;
				justify-content: space-around;
				overflow-y: hidden;
				background-color:#F1EDEC;
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
			
		#carousel--container.noflow {
				overflow: hidden;
			}
			
		#main-wrapper--exp237 #carousel--wrapper {
				width: 100%;
				margin: 0;
				padding: 0 1rem;
				display: flex;
				flex-wrap: wrap;
				background-color: #F1EDEC;
			}
			
		#main-wrapper--exp237 #content {
				display: grid;
				grid-gap: 16px;
				grid-auto-flow: column;
				margin: auto;
				box-sizing: border-box;
				position: relative;
				overflow-y: hidden;
		}
		
		#main-wrapper--exp237 #content {
			display: flex;
			margin: 0;
			justify-content: flex-start;
			z-index:0;
		}
			
		.item span.close-card {
				transition: all 0.75s linear 250ms;
			    height: auto;
			    font-weight: 600;
			    color: #999;
			    opacity: 1;
			    cursor: pointer;
			    transform: scaleX(1.4) translate(-9px, -22px);
			    position: absolute;
			    top: 24px;
			    right: -9px;
			    width: 30px;
			    text-align: center;
			}
		
		.item.closed {
			display: none !important;
		}

			
		.account--holder__greet {
				height: 40px;
			    display: flex;
			    flex-direction: column;
			    justify-content: flex-start;
			    width: 100%;
			    margin-bottom: 4px;
			    margin-top: 16px;
			}
			
		.account--holder__greet p {
			margin: 0;
		    line-height: 40px;
		    font-size: 18px;
		    font-weight: 700;
		}
			
		#main-wrapper--exp237 .item {
		    border-radius: 8px;
		    cross-fade: 0%;
		    --webkit-cross-fade: 0%;
		    height: 78px;
		    width: 300px;
		    background-color: #fff;
		    border: 1px solid #d9d9d9;
		    flex-direction: row;
		    justify-content: space-between;
		    align-items: center;
		    flex-wrap: nowrap;
		    min-width: 300px;
		    transition: all 2.5s 750ms;
		    z-index: -1;
		    position: relative;
		}
		  

		  
		 #main-wrapper--exp237 .item::after {
			  outline: 12px solid #747474;
			  border-radius:50%;
		}	 
		
		#main-wrapper--exp237 .item.removed {
			opacity: 0;
			display: none;
		}
			
		#main-wrapper--exp237 .item.hidden {
				display: none;
				opacity:0;
			}
			
		#main-wrapper--exp237 img.card-logo {
			transition: display 0.45s linear 25ms;
		    height: auto;
		    width: 100%;
		    padding: 0;
		    position: relative;
		    max-width: 123px;
		    transform: rotate(360deg);
		}
		
		#main-wrapper--exp237 img.card-logo.card-spark {
			max-width: 75px;
			height: auto;
		    padding: 12px 5px 10px 15px;
			width: 100%;
	    }
	    
	    #main-wrapper--exp237 .heading a {
	    	display: contents;
		    width: 67px;
		    text-decoration: none;
		    font-weight: 700;
	    }
				
			
		#main-wrapper--exp237 .heading {
				letter-spacing: 0;
			    color: #000000;
			    line-height: 20px;
			    margin: 0;
			    width: 175px;
			    font-weight: 600;
			    font-size: 14px;
			    margin-left: 100px;
			    position: relative;
			    display: flex;
			    justify-content: right;
			    height: 40px;
			    top: -66px;
			}
			
		#main-wrapper--exp237 img.card-confetti {
				width: 22px;
			    height: 22px;
			    transform: translate(-45px, 2px);
			    align-self: flex-end;
			    object-fit: contain;
			    display: flex;
			   
			}
			
		.heading img.card-confetti::before {
				width: 22px;
				height: 22px;
				display: inline-block;
				object-fit: contain;
				align-self: flex-end;
				content: "\\1F389";
			
		}
			
		.welcome--message {
				width: 100%;
				display: flex;
				margin: 0.3rem 0 0 0;
				justify-content: flex-start;
			}
			
		.welcome--message p {
				margin: 0;
				margin-left: 6.5vw;
		}
			
			
		#carousel--wrapper {
				width: 90%;
				margin-left: 10%;
				position: relative;
				padding-top: 60px;
				padding-bottom: 33px;
				//background: #f5f5f5;
			}
			
		#carousel--container {
				height: 78px;
				margin: 0;
				scroll-behavior: smooth;
				margin: 0;
				-ms-overflow-style: none;
				scrollbar-width: none;
				display: flex;
			    margin-left: 0;
			    margin-bottom: 4px;
			    justify-content: flex-start;
			}
		
		.card-notification__wrapper {
				position: relative;
			    top: -66px;
			    left: -1px;
			    background: rgba(255, 255, 255, 0.35);
		}
			
			
		.welcome--message {
				width: 100%;
				display: flex;
				margin: 0.3rem 0 0 0;
				justify-content: flex-start;
		  }
		  
		.welcome--message p {
				margin: 0;
				margin-left: 6.5vw;
			}
			
			
		#carousel--wrapper {
				width: 90%;
				margin-left: 10%;
				position: relative;
				padding-top: 60px;
				padding-bottom: 33px;
				background: #fff;
			}
			
		
			
			
		#main-wrapper--exp237 .card-notification__wrapper {
				position: relative;
				top: -30px;
				left: -20px;
				background: rgba(255, 255, 255, 0.35);
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
			    z-index: 30;
			    top: -45px;
			    right: 182px;
			}
			
			
			
		@keyframes bounce {
				70% {
					transform: translateY(0%);
				}
				80% {
					transform: translateY(-15%);
				}
				90% {
					transform: translateY(0%);
				}
				95% {
					transform: translateY(-7%);
				}
				97% {
					transform: translateY(0%);
				}
				99% {
					transform: translateY(-3%);
				}
				100% {
					transform: translateY(0);
				}
		}
			
		.item.bounce {
			 animation: bounce 0.75s ease 0ms;
		}
			
			
			
		/*
		
		MediaQueries bellow
		--------------------
		(320 < |-| > 823), LT-1024 -2X,  GT-1025 
		
		*/
			
			
		@media only screen and (min-width: 1025px) {
		    .main-wrapper--exp237 {
		    	margin-top: 0;
		    }
				#main-wrapper--exp237 #carousel--wrapper {
					width: 90%;
					margin-left: 10%;
					position: relative;
				
				}
				
				#carousel--container {
						display: flex;
					    margin-left: 0;
					    justify-content: flex-start;
				}
				
				#main-wrapper--exp237 #content {
					display: flex;
					margin: 0;
					justify-content: flex-start;
				}
				
			
				
			
				#main-wrapper--exp237 #carousel--wrapper #prev:focus,
				#carousel--wrapper #next:focus {
					outline: none;
					box-shadow: none;
				}
				#main-wrapper--exp237 button svg {
					width: 35px;
					height: 40px;
					fill: rgba(255, 255, 255, 0.35);
					width: 35px;
					fill: rgba(255, 255, 255, 0.35);
					stroke-width: 2px;
					backdrop-filter: opacity(0.5);
				}
				#main-wrapper--exp237 #prev,
				#main-wrapper--exp237 #next {
					justify-content: center;
					align-content: center;
					width: 35px;
					height: 40px;
					fill: rgba(255, 255, 255, 0.35);
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
				.account--holder__greet {
					display: flex;
					margin-left: 0;
					justify-content: flex-start;
				}
				.account--holder__greet p {
					margin: 0;
					padding: 0 5px;
					font-weight: 600;
					letter-spacing: 0;
					width: 213px;
					font-size: 18px;
					color: #000;
					font-family: "MS London eText Demibold";
				}
			}
			
			
			
		@media only screen and (max-width: 1024px) {
			  #prev,
			  #next {
					display: none;
			  }
			 
		}
			
			
			
		@media only screen and (min-device-width: 320px) and (max-device-height: 823px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 2) {
				.main-wrapper--exp237 {
					margin: 0;
					margin-top: 16px;
					box-sizing: border-box;
					display: flex;
					justify-content: center;
					align-items: center;
					overflow-y: auto;
					flex-direction: column;
					height: 140px;
				
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
					margin-bottom: 4px;
					scroll-behavior: smooth;
					-ms-overflow-style: none;
					scrollbar-width: none;
					
					
					
				}
				#carousel--container.noflow {
					overflow: hidden;
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
					overflow-y: hidden;
				
				}
				.item span.close-card {
					transition: all 0.75s linear 250ms;
				    height: auto;
				    font-weight: 600;
				    color: #999;
				    opacity: 1;
				    cursor: pointer;
				    transform: scaleX(1.4) translate(-9px, -22px);
				    width: 100%;
				    max-width: 30px;
				    text-align: center;
				    position: absolute;
				    right: -7px;
				    top: 24px;
				}
				
				#main-wrapper--exp237.item.closed {
				    display: none;
				}
				.account--holder__greet {
					height: 40px;
				    display: flex;
				    flex-direction: column;
				    justify-content: flex-start;
				    width: 100%;
				    margin-bottom: 4px;
				    margin-top: 16px;
				}
				.account--holder__greet p {
					margin: 0;
					font-weight: 700;
					font-size: 18px;
					line-height: 40px;
				}
				#main-wrapper--exp237 .item {
					border-radius: 8px;
				    cross-fade: 0%;
				    --webkit-cross-fade: 0%;
				    height: 78px;
				    width: 300px;
				    background-color: #fff;
				    border: 1px solid #d9d9d9;
				    flex-direction: row;
				    justify-content: space-between;
				    align-items: center;
				    flex-wrap: nowrap;
				    min-width: 300px;
				    transition: all 2.5s 750ms;
				    z-index: -1;
				    position: relative;
				}
				#main-wrapper--exp237 .item.hidden {
					display: none;
				}
				#main-wrapper--exp237 img.card-logo {
					transition: display 0.45s linear 25ms;
					width: 100%;
					padding: 0;
					height: auto;
					position: relative;
					max-width: 124px;
					transform: rotate(360deg);
				}
				#main-wrapper--exp237 .item .heading {
					letter-spacing: 0;
					color: #000000;
					font-family: "MS London eText Semibold";
					text-align: left;
					display: flex;
					line-height: 20px;
					margin: 0;
					width: 160px;
					font-size: 14px;
					margin-left: -40px;
				}
				#main-wrapper--exp237 img.card-confetti {
					width: 22px;
				    height: 22px;
				    transform: translate(-43px, 2px);
				    align-self: flex-end;
				    object-fit: contain;
				    display: flex;
				}
				.item img.card-confetti::before {
					width: 20px;
					height: 20px;
					display: inline-block;
					object-fit: contain;
					align-self: flex-end;
				}
				#main-wrapper--exp237 .carousel--dot span {
					display: none;
				}
				#prev,
				#next {
					display: none;
				}
				#prev.hidden,
				#next.hidden {
					display: none;
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

    showHideArrows: function (ele, val) {
      const arrow = document.getElementById(ele);
      arrow.hidden = val;
    },

    removeXhandle: function (hndl) {
      let rmService;
      let handle = hndl;
      rmService = document.querySelector(handle);
      return document.querySelector(handle) !== null
        ? rmService.parentElement.removeChild(rmService)
        : false;
    },

    getBounds: function (elem) {
      if (elem !== undefined) {
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
      }
    },

    doCarouselSecondAct: function () {
      const gap = 16;
      const carousel = document.getElementById("carousel--container");
      let width = carousel.offsetWidth;
      const content = document.getElementById("content");
      const next = document.getElementById("next");
      const prev = document.getElementById("prev");

      window.screen.width > 1024
        ? carousel.classList.add("noflow")
        : carousel.classList.remove("noflow");

      let start;
      let change;

      window.screen.width > 1024
        ? carousel.classList.add("noflow")
        : carousel.classList.remove("noflow");

      carousel.addEventListener("dragstart", (e) => {
        start = e.clientX;
      });

      carousel.addEventListener("dragover", (e) => {
        //e.preventDefault();
        let touch = e.clientX;
        change = start - touch;
      });

      carousel.addEventListener("dragend", (e) => {
        //e.preventDefault();
        let touch = e.clientX;
        change = start - touch;
      });

      carousel.addEventListener("touchstart", (e) => {
        if (e.target.className === "close-card") {
          e.target.parentElement.classList.add("closed");
        }

        start = e.touches[0].clientX;
      });

      carousel.addEventListener("touchmove", (e) => {
        //e.preventDefault();
        let touch = e.touches[0];
        change = start - touch.clientX;
      });

      carousel.addEventListener("touchend", touchShow);

      function touchShow() {
        let ecards = content.children;
        let lastOne = ecards[ecards.length - 1];
        let firstOne = ecards[0];

        if (change > 0) {
          content.scrollLeft += width;
          closCarousel237.getBounds(lastOne);
          //console.log((content.scrollLeft += width));
        } else {
          content.scrollLeft -= width;
          closCarousel237.getBounds(firstOne);
          //console.log((content.scrollLeft -= width));
        }
      }

      next.addEventListener("click", (e) => {
        e.preventDefault();
        carousel.scrollBy(+width + gap, 0);
        carousel.scrollTop;
        let ecards = content.children;

        //last one!
        let lastOne = ecards[ecards.length - 1];
        this.getBounds(lastOne);

        if (
          carousel.scrollWidth - width - gap <=
          carousel.scrollLeft + width + gap
        ) {
          this.showHideArrows("next", true);
        }

        if (carousel.scrollLeft === 0) {
          this.showHideArrows("prev", false);
        }

        if (window.screen.width > 1024) {
          this.showHideArrows("prev", false);
        }

        return carousel.scrollTop;
      });

      prev.addEventListener("click", (e) => {
        e.preventDefault();
        carousel.scrollBy(-width + gap, 0);
        let ecards = content.children;
        carousel.scrollTop;

        //firstOne!
        let firstOne = ecards[0];
        this.getBounds(firstOne);

        if (carousel.scrollLeft - width - gap <= 0) {
          this.showHideArrows("prev", true);
        }

        if (content.scrollWidth - width - gap <= carousel.scrollLeft) {
          this.showHideArrows("next", false);
        }

        return carousel.scrollTop;
      });

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
  // carousel cards updated
  let xcards = document.querySelector("#main-wrapper--exp237 #content");
  let vcards = document.querySelector('.main-wrapper--exp237');
  // set both arrows to none
  if (window.screen.width <= 1024) {
    [prev, next].forEach((itm) => (itm.hidden = true));
  }
  let tc=0;
  
  //opens up container
  
  vcards.scrollTop;
  vcards.scrollIntoView;
  vcards.style.display = "flex";

  function cardsBeenAdded() {
    let cardsWidth = xcards.offsetWidth;
    let carcontainer = document.getElementById("carousel--container");
    let content = document.getElementById("content");
    cardsNum = Math.round(cardsWidth / 300);
    let totalCards = content.children.length;
    
    Array.from(content.children).forEach(itm => {
    	if(itm.className === "item closed") {
    		tc--
    	} else if(itm.className === "item") {
    		tc++
    	}
    	
    	if(tc === 1) {
    		insertGreeding.hidden = true;
    		dashboard.style.display = "none";
    	}
    	return tc;
    })

    console.log(
      "resize called: resizedObserver - cards before: ", cardsNum,
      ' what is xcards ',xcards, ' total num of cards ',totalCards,
      'container width => ', cardsWidth, ' total num of cards => ',tc
    );

    // resized num cards
    closCarousel237.doCarouselSecondAct();

  
    if (cardsNum) {//resize arrows
      //arrows
      if (window.screen.width > 1024) {
        closCarousel237.showHideArrows("next", false);
        closCarousel237.showHideArrows("prev", true);
        carcontainer.classList.add("noflow");
        content.children.scrollIntoView;
        
        if (cardsNum ===0) {
          carcontainer.parentElement.removeChild(carcontainer);
        }

        if (cardsNum < 4) {
          closCarousel237.showHideArrows("next", true);
          closCarousel237.showHideArrows("prev", true);
        }
      }//if

      if (window.screen.width < 1024) {
        carcontainer.classList.remove("noflow");
        closCarousel237.showHideArrows("next", true);
        closCarousel237.showHideArrows("prev", true);
        content.children.scrollIntoView;
        
        if (cardsNum ===0) {
          carcontainer.parentElement.removeChild(carcontainer);
        }
        
        if (cardsNum < 4) {
          carcontainer.classList.remove("noflow");
          closCarousel237.showHideArrows("next", true);
          closCarousel237.showHideArrows("prev", true);
        }
      }
    }
  }

  // total offers in cards
  const doCardUpdates = {
    init: () => {
      cardsBeenAdded();
    },
  };

  
  new ResizeObserver(doCardUpdates.init).observe(xcards);
  
  
}); // resize event

window.addEventListener("load", function () {
  // init activity

  closCarousel237.init();

  let times = 0, tc = 0, ct=0;
  let spkObj; //called cardsBeenAdded
  

  // carousel cards updated
  let xcards = document.querySelector("#main-wrapper--exp237 #content");
  let cardsNum = 0;

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

  function doGreet(obj) {
    if (obj !== null) {
      let visitor;
      let visitNGreet;
      visitor = obj.visitorName;
      let greet = document.getElementById("helloText");
      if (greet) {
        greet = greet.textContent;
        visitNGreet = greet.trim() + " " + visitor;
        return visitNGreet;
      }
    } else {
      return "Hello Default";
    }
  }

  function cardsBeenAdded() {
  	tc = 0;
    let cardsWidth = xcards.offsetWidth;
    let dashboard = document.querySelector(".main-wrapper--exp237");
    let carcontainer = document.getElementById("carousel--container");
    let content = document.getElementById("content");
    let totcards = content.children.length;
    let insertGreeding = document.querySelector(".account--holder__greet p");
    let container = document.querySelector('.main-wrapper--exp237');
    
    spkObj = JSON.parse(window.localStorage.getItem("sparkOptionsComplete"));
    visitor = spkObj === null ? "Default" : spkObj.visitorName;
    
    // Array.from(content.children).forEach(itm => {
    // 	if(itm.className === "item closed") {
    // 		tc--
    // 	} else if(itm.className === "item") {
    // 		tc++
    // 	}
    // 	return tc <= 0 ? container.style.display = "none" : false;
    // })

    // console.log(
    //   'container width =>', cardsWidth,
    //   ' total num of cards => ',tc
    // );

    // resized num cards
    closCarousel237.doCarouselSecondAct();

    // if (tc === 1) {
    //   insertGreeding.hidden = true;
    //   dashboard.style.display = "none";
    // }

    if (totcards) {
      //arrows
      if (window.screen.width > 1024) {
      
        insertGreeding.textContent = doGreet(spkObj);

        closCarousel237.showHideArrows("next", false);
        closCarousel237.showHideArrows("prev", true);
        carcontainer.classList.add("noflow");

        content.children.scrollIntoView;

        let time2 = setTimeout(() => {
          insertGreeding.hidden = false;
        }, 1000);

        content.children.scrollIntoView;
        //next.hidden = false;

        if (totcards < 4) {
          dashboard.hidden = false;
          carcontainer.classList.add("noflow");
          insertGreeding.hidden = false;
          closCarousel237.showHideArrows("next", true);
          closCarousel237.showHideArrows("prev", true);
          insertGreeding.hidden = false;
        }
      } //if

      if (window.screen.width < 1024) {
        insertGreeding.textContent = doGreet(spkObj);

        insertGreeding.hidden = false;
        carcontainer.classList.remove("noflow");
        closCarousel237.showHideArrows("next", true);
        closCarousel237.showHideArrows("prev", true);
        content.children.scrollIntoView;
      }
    }
  }

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
        "Access-Control-Request-Method": "GET",
        "Access-Control-Request-Headers": "X-Custom-Header",
        Authorization: secretParams,
      },
    })
      .then((data) => data.json())
      .then((res) => {
        res.visitorName = sparksOptions.visitorName;
        //keep copy in localStorage along with sparksOptions
        window.localStorage.setItem(
          "sparkOptionsComplete",
          JSON.stringify(res)
        );
      });
  }

  // info object
  const sparksOptions = {
    allOffers: allSparks(),
    //call api when-disabled
    allFetchedSparks:
      fetchSparks(),
    
    // cookieName
    visitorName: getCookie("MS_USER_COOKIE_10151", "cookieName") || "",
    //cookieValue
    visitorValue: getCookie("MS_USER_COOKIE_10151", "cookieValue"),
    other: {
      visitorStatus:
        !!this.visitorName && this.visitorName !== ""
          ? "signed-in"
          : "signed-out",
    },
  };

  const dobounce = () => {
    if (document.querySelector("#content")) {
      let lst = document.querySelector("#content").children.lastElementChild;
      closCarousel237.getBounds(lst);
    }
  };
  
  
  window.addEventListener("click", function (e) {
  	e.preventDefault(); //cars slides 
  	console.log('ct is ',ct)
      let ele = e.target.parentElement;
          cont = document.getElementById('content').children;
    if (e.target.className === "close-card" && ct <= 1) {//pushng mob evts
      Array.from(cont).map(itm=> // match data-id, add remove
    	 ele.dataset.id === itm.dataset.id 
    		? ele.classList.add('removed') : false);
      ct++;
      return
    	
    }
    
    
    
    
  },false);
  
   //bring first slide into view
  if (document.querySelector("#main-wrapper--exp237 .item") !== null) {
    let fist = document.querySelector("#main-wrapper--exp237 .item");
    fist.scrollIntoView();
  }
  
  
  

  // total offers in cards
  const doCardUpdates = {
    init: () => {
      cardsBeenAdded();
    },
    boundInit: () => {
      dobounce();
    },
  };

 

  //check num of cards
  setTimeout(() => {
  	new ResizeObserver(doCardUpdates.init).observe(xcards);
  },1350);
    
 

  

  console.log(
    `\n [EXP-237] ... Sparks Options in Local Storage, Cookie checked. Fetched disabled  \n\n DONE! `
  );
}); // load page event






var carouselData = function () {
	

    const getSparks = () => {
      let optns = JSON.parse(localStorage.getItem("sparkOptionsComplete"));
      console.log('sparkOptionsComplete', optns);
      return optns || 0;
    };
  
    return {
      init: function () {
        this.sparkOptionsComplete = getSparks();
        this.doCards();
      },
  
      sparkCards: [
        //sample id#s 9019, 6883
        {
          //ids passed into html as datasets: 'data-id'
  
          id: 0,
          className: "hidden",
  
          type: "viewBag",
          close: "close-card",
          closeEle: "X",
          footer: "New Sparks offers waiting for you",
          image: "https://donpio.tech/repositories/mtest/images/Card_NEW.png",
          image_mob:
            "https://donpio.tech/repositories/mtest/images/Card_NEW01.png",
          width: 144,
          height: 90,
          showNotification: true,
          tcards: 0,
          emjIcon: true,
        },
        {
          id: 0,
          className: "hidden",
  
          type: "viewOrder",
          close: "close-card",
          closeEle: "X",
          footer: 'You have items in your bag. <a href="#">View bag.</a>',
          image: "https://donpio.tech/repositories/mtest/images/Card_NEW.png",
          image_mob:
            "https://donpio.tech/repositories/mtest/images/Card_NEW01.png",
          width: 600,
          height: 600,
          showNotification: false,
          tcards: 0,
          emjIcon: false,
        },
      ],
  
      // returns 4 digit int
      addIds: (cards) => {
      	let cids;
      	if(cards) {
         return cards.map(li =>  li.id = Math.floor(1000 + Math.random() * 9000))
      	}
      		
      	},
  
      compileCards: function (cards) {
        let isNotifi;
        if (this.sparkOptionsComplete) {
          isNotifi = this.sparkOptionsComplete.offersBreakdown.totalOffers;
        }
  
        const crds = document.createElement("div");
        let cardsContent = "";
        for (let c = 0; c < cards.length; c++) {
          cardsContent +=
            '<div data-id="' +
            cards[c].id +
            '" class="item ' +
            cards[c].className +
            '">';
  
          if (c === 0) {
            cardsContent +=
              '<img  class="card-logo" style="" width="' +
              parseInt(cards[c].width) +
              '" height="' +
              parseInt(cards[c].height) +
              '" src="' +
              cards[c].image +
              '"/>';
          }
  
          if (c === 1) {
            let img =
              this.sparkOptionsComplete.offersBreakdown.allOffers[0].offers[0].imageUrl;
            cardsContent +=
              '<img  class="card-logo card-spark" style="" width="' +
              parseInt(cards[c].width) +
              '" height="' +
              parseInt(cards[c].height) +
              '" src="' +
              img +
              '"/>';
          }
  
          cardsContent += `<div class="card-notification__wrapper">`;
          cardsContent += cards[c].showNotification
            ? '<span class="card-notification">' + isNotifi + "</span>"
            : "";
  
          cardsContent += "</div>";
  
          cardsContent += `<p class="heading">${cards[c].footer}`;
  
          cardsContent += cards[c].emjIcon
            ? '<img class="card-confetti" src="https://donpio.tech/repositories/mtest/images/confetti.png" />'
            : '<img src=""/>';
  
          cardsContent += "</p>";
  
          cardsContent += `<span onclick="void(0)" class="${cards[c].close}">${cards[c].closeEle}</span></div>`;
        }
  
        crds.innerHTML = cardsContent;
		console.log('cards content ',cardsContent);
		console.log('crds ', crds);
        return crds;
      },
  
      callOut: function (t) {
        return clearTimeout(t);
      },
      
  
      doCards: function () {
        let spcrds;
        cids = this.addIds.apply(this.sparkCards)
        this.addIds(this.sparkCards);
        spcrds = this.sparkCards;
  
        if (spcrds) {
        new Promise(resolve => {
            resolve(this.compileCards(spcrds))
          }).then(data => {
            let compcards = data;
            console.log('what is compcards ', compcards)
            
            if (document.getElementById('content')) {
            
              document
                .querySelector('#content')
                .insertAdjacentHTML('beforeend', compcards.innerHTML)
            }
          }).then((data) => {
          	
           let crs = [];
              if (data) data.forEach(itm => crs.push(itm)); 
                let orig = document.querySelectorAll('.item');
                orig.forEach(sl => crs.push(sl));
                crs.map(crd => crd.classList.remove('hidden')),
                  crs.hidden = true,
                  window.gsap ? window.gsap.from(crs, {
                    duration: 2.5,
                    autoAlpha: 1,
                    opacity: 1,
                    stagger: 0.35,
                    rotationY: 100,
                    y: -2200,
                    transformOrigin: 'center bottom',
                    delay: 0.1,
                    ease: 'power2.inOut'
                  },'+=.45') : ''
          });
  
        }
      },
    }
    
 
 
};


setTimeout(() => {
	let data = carouselData();
	data.init();
	
},700)


