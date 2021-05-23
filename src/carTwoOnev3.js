/*
  Global

  Working fine mobile/desktop -- refactor, and animations
  
*/
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
const url =
  "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/gsap.min.js?callback=callback";

var closCarousel237 = (function () {
  const removeDshContainer = function (id, e) {
    let goodForRemoval = [],
      ca = document.querySelector(".main-wrapper--exp237"),
      sls = document.querySelector("#content").children;
    //id ck
    id = Number(id);
    if (e.target !== undefined && e.target.className !== "close-card")
      return true;
    if (id === undefined) return true;

    function doRemove() {
      let han = document.querySelector(".main-container");
      setTimeout(() => {
        ca.classList.add("removed");
        han.style.pointerEvents = "auto";
      }, 750);
    }

    // do non-remain
    Array.from(sls).map((c) =>
      c.classList.contains("removed") ? goodForRemoval.push(c) : false
    );

    return goodForRemoval.length === sls.length ? doRemove() : false;
  };

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
	   .below-header img {
		  display: none !important;
	  }
	   .main-wrapper--exp237 {
		   transition: display 3s linear 3s, opacity 3s linear 3s, height 3s linear 3s;
		   margin: 0;
		   margin-top: 16px;
		   box-sizing: border-box;
		   display: flex;
		   justify-content: center;
		   align-items: center;
		   overflow-y: auto;
		   flex-direction: column;
		   height: 170px;
		   background-color: #F1EDEC;
		   width: 100%;
		   font-family: MS London,Helvetica,Arial,sans-serif;
	  }
	   .main-wrapper--exp237.removed {
		   transition: display 3s linear 3s 3s, opacity 3s linear 3s 3s, height 3s linear 3s 3s;
		   display: none;
		   opacity: 0;
		   height: 0;
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
		   margin-bottom: 33px;
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
		  font-weight: 300;
		  color: #333;
		  opacity: 1;
		  cursor: pointer;
		  transform: scale(1.15,0.9) translate(-9px, -22px);
		  position: absolute;
		  top: 23px;
		  right: -8px;
		  width: 25px;
		  text-align: center;
	  }
	   .item.removed {
		   display: none !important;
	  }
	   .account--holder__greet {
		   height: 40px;
		   display: flex;
		   flex-direction: column;
		   justify-content: flex-start;
		   width: 100%;
		   margin-bottom: 4px;
		   margin-top: 15px;
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
		   cursor: move;
		   cursor: grab;
		   cursor: -moz-grab;
		   cursor: -webkit-grab;
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
		   width: 100%;
		   padding: 0;
		   height: 76px;
		   position: relative;
		   max-width: 123px;
		   padding: 0px 0px 0px 0px;
		   transform: rotate(360deg);
	  }
	   #main-wrapper--exp237 img.card-logo.card-spark {
		   max-width: 77px;
		  height: 77px;
		  padding: 12px 10px 10px 15px;
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
		   max-width: 165px;
		   font-weight: 400;
		   font-size: 14px;
		   margin-left: 105px;
		   margin-right: 0;
		   position: relative;
		   display: flex;
		   height: 40px;
		   top: -65px;
		   text-align: left;
		   font-family: "MS London eText";
		   
		   
		   
		   
		   width: 100%;
	  }
	  /* img is of diff width */
	  #main-wrapper--exp237 #content > div:nth-child(2) > .heading {
		  letter-spacing: 0;
		  color: #000000;
		  line-height: 20px;
		  margin: 0;
		  max-width: 157px;
		  font-weight: 400;
		  font-size: 14px;
		  margin-left: 80px;
		  margin-right: 0;
		  position: relative;
		  display: flex;
		  height: 40px;
		  top: -66px;
		  text-align: left;
		  width: 100%;
	  }
	   #main-wrapper--exp237 img.card-confetti {
		   width: 20px;
		  height: 20px;
		  transform: translate(-56px, 0px);
		  align-self: flex-end;
		  object-fit: contain;
		  display: flex;
	  }
	   .grabbable {
		   cursor: move;
		   cursor: grab;
		   cursor: -moz-grab;
		   cursor: -webkit-grab;
	  }
	   .grabbable:active {
		   cursor: grabbing;
		   cursor: -moz-grabbing;
		   cursor: -webkit-grabbing;
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
		  /*/
		  /background: #f5f5f5;
		  */
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
		   margin-bottom: 33px;
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
	   #prev, #next {
		   display: none;
	  }
	   #carousel--wrapper button#next svg {
		   display: none;
	  }
	   #main-wrapper--exp237 .card-notification__wrapper {
		   position: relative;
		   top: -30px;
		   left: -20px;
		   background: rgba(255, 255, 255, 0.35);
	  }
	   #main-wrapper--exp237 .card-notification {
		   height: 21px;
		  width: 21px;
		  border: 1px solid rgb(255 255 255);
		  border-radius: 50%;
		  position: absolute;
		  background-color: #333;
		  color: rgb(255 255 255);
		  line-height: 20px;
		  text-align: center;
		  font-size: 11px;
		  font-weight: normal;
		  z-index: 30;
		  top: -47px;
		  right: 181px;
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
  
	   @media only screen and (min-width: 1025px) {
		   .main-wrapper--exp237 {
			   margin-top: 0;
			   height: 170px;
			   pointer-events: auto;
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
			   margin-bottom: 33px;
		  }
		   #main-wrapper--exp237 #content {
			   display: flex;
			   margin: 0;
			   justify-content: flex-start;
		  }
		   #main-wrapper--exp237 img.card-logo {
			   transition: display 0.45s linear 25ms;
			   width: 100%;
			   padding: 0;
			   height: 76px;
			   position: relative;
			   max-width: 123px;
			   padding: 0px 0px 0px 0px;
			   transform: rotate(360deg);
		  }
		   #main-wrapper--exp237 .item {
			   cursor: pointer;
			   pointer-events: auto;
		  }
		   #main-wrapper--exp237 .heading {
			  letter-spacing: 0;
			  color: #000;
			  line-height: 20px;
			  margin: 0;
			  max-width: 168px;
			  font-weight: normal;
			  font-size: 14px;
			  margin-left: 100px;
			  margin-right: 0;
			  top: -66px;
			  position: relative;
			  display: flex;
			  font-family: "MS London eText";
		  }
		  
		  #main-wrapper--exp237 #content > div:nth-child(2) > .heading {
				  letter-spacing: 0;
				  color: #000000;
				  line-height: 20px;
				  margin: 0;
				  max-width: 157px;
				  font-weight: 400;
				  font-size: 14px;
				  margin-left: 82px;
				  margin-right: 0;
				  position: relative;
				  display: flex;
				  height: 40px;
				  top: -66px;
				  text-align: left;
				  width: 100%;
		  }
		  
		  #main-wrapper--exp237 .card-notification__wrapper {
			  position: relative;
			  top: -30px;
			  left: -20px;
			  background: rgba(255, 255, 255, 0.35);
		  }
		  
		  
		   #main-wrapper--exp237 .card-notification {
			  height: 21px;
			  width: 21px;
			  border: 1px solid rgb(255 255 255);
			  border-radius: 50%;
			  position: absolute;
			  background-color: #333;
			  color: rgb(255 255 255);
			  line-height: 20px;
			  text-align: center;
			  font-size: 11px;
			  font-weight: normal;
			  z-index: 30;
			  top: -47px;
			  right: 181px;
		  }
		   #main-wrapper--exp237 #carousel--wrapper #prev:focus, #carousel--wrapper #next:focus {
			   outline: none;
			   box-shadow: none;
		  }
		   #main-wrapper--exp237 button svg {
			   width: 35px;
			   height: 40px;
			   fill: rgba(255, 255, 255, 0.35);
			   width: 35px;
			   stroke-width: 2px;
			   backdrop-filter: opacity(0.35);
		  }
		   #main-wrapper--exp237 #prev, #main-wrapper--exp237 #next {
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
			   top: 67%;
			   left: 0;
			   left: -75px;
			   transform: translate(50%, -50%) rotate(180deg);
		  }
		   #main-wrapper--exp237 #next {
			   top: 67%;
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
	   @media only screen and (min-width:320px) and (max-width: 1024px) and (device-pixel-ratio: 1) {
		   #prev, #next {
			   display: none;
		  }
		   #carousel--wrapper button#next svg {
			   display: none;
		  }
		  
		  #main-wrapper--exp237::-webkit-scrollbar {
			  display: none;
			  -ms-overflow-style: none; 
			  scrollbar-width: none; 
		  }
		   #carousel--container::-webkit-scrollbar {
					  display: none;
					  -ms-overflow-style: none; 
					  scrollbar-width: none; 
		  }
		 
		   #main-wrapper--exp237 .item {
			   border-radius: 8px;
			   cross-fade: 0%;
			   --webkit-cross-fade: 0%;
			   height: 78px;
			   cursor: move;
			   cursor: grab;
			   cursor: -moz-grab;
			   cursor: -webkit-grab;
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
		   #main-wrapper--exp237 .heading {
			   letter-spacing: 0;
				  color: #000;
				  line-height: 20px;
				  margin: 0;
				  max-width: 168px;
				  font-weight: normal;
				  font-size: 14px;
				  margin-left: 105px;
				  margin-right: 0;
				  position: relative;
				  display: flex;
				  font-family: "MS London eText";
		  }
		
		   #main-wrapper--exp237 #content > div:nth-child(2) > .heading {
			   letter-spacing: 0;
			   color: #000000;
			   line-height: 20px;
			   margin: 0;
			   max-width: 193px;
			   font-weight: 600;
			   font-size: 14px;
			   margin-left: 80px;
			   margin-right: 0;
			   position: relative;
			   display: flex;
			   height: 40px;
			   top: -69px;
			   text-align: left;
			   width: 100%;
		  }
		   #main-wrapper--exp237 .item::after {
			   outline: 12px solid #747474;
			   border-radius:50%;
		  }
		   @media only screen and (min-device-width: 320px) and (max-device-height: 823px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 2) {
			   #prev, #next {
				   display: none;
			  }
			   #carousel--wrapper button#next svg {
				   display: none;
			  }
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
			  
				#main-wrapper--exp237::-webkit-scrollbar {
					  display: none;
					  -ms-overflow-style: none; 
					  scrollbar-width: none; 
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
				   margin-bottom: 33px;
				   scroll-behavior: smooth;
				   -ms-overflow-style: none;
				   scrollbar-width: none;
			  }
			  
			   #carousel--container::-webkit-scrollbar {
					  display: none;
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
				   margin: inherit;
				   box-sizing: border-box;
				   position: relative;
				   overflow-y: hidden;
			  }
			 
				.item span.close-card {
					  transition: all 0.75s linear 250ms;
					  height: auto;
					  font-weight: 300;
					  color: #333;
					  opacity: 1;
					  cursor: pointer;
					  transform: scale(1.15,0.9) translate(-9px, -22px);
					  position: absolute;
					  top: 23px;
					  right: -8px;
					  width: 25px;
					  text-align: center;
				  }
			  
			   #main-wrapper--exp237.item.removed {
				   display: none;
			  }
			   .account--holder__greet {
				   height: 40px;
				   display: flex;
				   flex-direction: column;
				   justify-content: flex-start;
				   width: 100%;
				   margin-bottom: 4px;
				   margin-top: 15px;
			  }
			   .account--holder__greet p {
				   margin: 0;
				   font-weight: 700;
				   font-size: 18px;
				   line-height: 40px;
			  }
			   #main-wrapper--exp237 .item{
				   border-radius: 8px;
				   cross-fade: 0%;
				   --webkit-cross-fade: 0%;
				   cursor: move;
				   cursor: grab;
				   cursor: -moz-grab;
				   cursor: -webkit-grab;
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
				   height: 76px;
				   position: relative;
				   max-width: 123px;
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
			   #prev, #next {
				   display: none;
			  }
			   #prev.hidden, #next.hidden {
				   display: none;
			  }
		  }
		   
  
		`;

  return {
    regClk: 0,
    sparksComplete: {},
    visitor: "",
    greet: document.getElementById("helloText") || "Hello again",
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

    handleAllClickEvts: function (e) {
      e.preventDefault(); //folexit
      e.stopPropagation();
      if (e.target.parentElement.className !== "item") return true;
      let ele = e.target.parentElement;
      let isId = e.target.parentElement.dataset.id;
      let cont = document.getElementById("content").children;
      // d1
      let d1 = closCarousel237.regClk,
        d2 = 0;
      if (d1 === 0) d1 = Math.round(e.timeStamp);
      // d2
      d2 = new Date().getTime();
      d2 = Number(d2.toString().slice(0, 5));
      // abs value
      let absVal = Math.abs(Number(d1) - Number(d2));

      console.log("d2 is ", d2, " d1 is ", d1, " absolute value ", absVal);

      //mobile: check time after 33k
      if (
        e.target.className === "close-card" &&
        absVal > 33000 &&
        window.screen.width <= 1024
      ) {
        closCarousel237.regClk = 0;
        //add delay mobile
        setTimeout(() => {
          let han = document.querySelector(".main-container");
          han.style.pointerEvents = "none";
          ele.dataset.id === isId ? ele.classList.add("removed") : false;
        }, 750);
      }
      // desktop
      else if (
        e.target.className === "close-card" &&
        absVal > 2000 &&
        window.screen.width > 1024
      ) {
        closCarousel237.regClk = 0;
        ele.classList.add("removed");
      }

      return removeDshContainer(isId, e);
    }, // handleAllClickEvts fn

    doCarouselSecondAct: function () {
      //debugger;
      if (!this.cookieDo("MS_USER_COOKIE_10151", "cookieValue")) return;
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

      content.addEventListener("dragstart", (e) => {
        console.log(e.type);
        start = e.clientX;
      });

      content.addEventListener("dragover", (e) => {
        let touch = e.clientX;
        change = start - touch;
      });

      content.addEventListener("dragend", (e) => {
        let touch = e.clientX;
        change = start - touch;
      });

      content.addEventListener("touchstart", (e) => {
        let id = e.target.parentElement.dataset.id;
        if (e.target.className === "close-card") {
          e.target.parentElement.classList.add("removed");
          removeDshContainer(id, e);
        }
        start = e.touches[0].clientX;
      });

      content.addEventListener("touchmove", (e) => {
        let touch = e.touches[0];
        change = start - touch.clientX;
      });
      content.addEventListener("touchend", touchShow);

      function touchShow() {
        let ecards = content.children;
        let lastOne = ecards[ecards.length - 1];
        let firstOne = ecards[0];

        if (change > 0) {
          content.scrollLeft += width;

          return (lastOne) => {
            this.getBounds(lastOne);
          };
        } else {
          content.scrollLeft -= width;
          return (firstOne) => {
            this.getBounds(firstOne);
          };
        }
      }

      next.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

        content.scrollBy(+width + gap, 0);
        content.scrollTop;
        let ecards = content.children;

        //last one!
        let lastOne = ecards[ecards.length - 1];
        this.getBounds(lastOne);

        if (
          content.scrollWidth - width - gap <=
          content.scrollLeft + width + gap
        ) {
          this.showHideArrows("next", true);
        }

        if (content.scrollLeft === 0) {
          this.showHideArrows("prev", false);
        }

        if (window.screen.width > 1024) {
          this.showHideArrows("prev", false);
        }

        return content.scrollTop;
      });

      prev.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

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

      carousel.addEventListener(
        "resize",
        (e) => (width = carousel.offsetWidth)
      );
    },

    doGreet: function (obj) {
      if (obj !== null) {
        let visitor;
        let visitNGreet;
        visitor = obj.visitorName;
        closCarousel237.visitor = visitor;
        let greet = document.getElementById("helloText");
        if (greet) {
          greet = greet.textContent;
          closCarousel237.greet = greet.trim();
          visitNGreet = greet.trim() + " " + visitor;
          return visitNGreet;
        }
      } else {
        return "Hello Default";
      }
    },

    cookieDo: function (cname, nameOrValue = "cookieName") {
      let nmval = nameOrValue;
      const name = cname + "=";
      const decodedCookie = decodeURIComponent(document.cookie);
      const ca = decodedCookie.split(";");
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === " ") {
          c = c.substr(1, c.length);
        }
        if (c.indexOf(name) === 0) {
          const result = c.substr(name.length, c.length);
          let cookieName = result.split(" ")[0];
          let preval = result.split(" ")[1];
          let cookieValue = preval.split("_")[1];
          return nmval === "cookieName" ? cookieName : cookieValue;
        }
      }
    },

    fetchSparks: function () {
      let url =
        "https://api.loyalty.marksandspencer.services/loyalty-service/api/aggregatedetails/user/v2";

      let cookieValue = closCarousel237.cookieDo(
        "MS_USER_COOKIE_10151",
        "cookieValue"
      );

      let composed =
        '{"externalCustomerId":' +
        '"' +
        cookieValue +
        '"' +
        ',"platform":"UK_DIGITAL"}';
      let encodedCookie = btoa(composed);
      let secretParams =
        "MNSSharedSecret 620sSJ|xq-2K3?T" + " " + encodedCookie;
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
          closCarousel237.sparksComplete = res;
          res.visitorName = this.cookieDo("cookieName");
          closCarousel237.visitor = res.visitorName;
          //keep copy in localStorage along with sparksOptions
          window.localStorage.setItem(
            "sparkOptionsComplete",
            JSON.stringify(res)
          );
        });
    },

    doGreetings: function () {
      let welban, visitor, greet;
      setTimeout(() => {
        visitor = this.cookieDo("MS_USER_COOKIE_10151", "cookieName");
        greet = this.greet.trim();
        welban = greet + " " + visitor;

        if (document.querySelector(".account--holder__greet p") && welban) {
          let handleGreet = document.querySelector(".account--holder__greet p");
          handleGreet.textContent = welban;
          handleGreet.hidden = false;
          this.showHideArrows("next", false);
        }
        return welban;
      }, 1850);
    },

    doCarouselFirstAct: function () {
      this.addCSS(mainStyles);
      const cat = getHandle();
      const carsl = document.createElement("div");
      this.doGreetings();

      carsl.className = "main-wrapper--exp237";
      carsl.innerHTML = `
				  <div id="main-wrapper--exp237">
					 <div id="carousel--wrapper">
						<div class="account--holder__greet">
						
						 <p hidden></p>
						
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
      } else if (cat !== undefined) {
        // then add.
        cat.parentElement.insertBefore(carsl, cat);
      } else cat = getHandle();
    },

    removeSiteStripe: function () {
      if (document.querySelector(".page__site-stripe")) {
        const stripe = document.querySelector(".page__site-stripe");
        stripe.style.marginDown = 0;
      }
    },
  };
})();

const extScr = fetch(url);

window.addEventListener("resize", () => {
  //cards update
  let xcards = document.querySelector("#main-wrapper--exp237 #content");
  let content = document.getElementById("content");
  let next = document.getElementById("next");
  let prev = document.getElementById("prev");

  if (window.screen.width <= 1024) {
    closCarousel237.showHideArrows("next", true);
    [prev, next].forEach((itm) => (itm.hidden = true));
  }

  if (window.screen.width > 1024) {
    closCarousel237.showHideArrows("next", false);
  }

  function cardsBeenAdded() {
    let cardsWidth = xcards.offsetWidth;
    let container = document.querySelector(".main-wrapper--exp237");
    let carcontainer = document.getElementById("carousel--container");

    let cardsNum = Math.round(cardsWidth / 300);
    let totalCards = content.children.length;

    if (window.screen.width > 1024 && totalCards > 0) {
      closCarousel237.showHideArrows("next", false);
      closCarousel237.showHideArrows("prev", true);
      carcontainer.classList.add("noflow");
      content.children.scrollIntoView;
    } //if
    else if (window.screen.width <= 1024 && totalCards > 0) {
      carcontainer.classList.remove("noflow");
      closCarousel237.showHideArrows("next", true);
      closCarousel237.showHideArrows("prev", true);
      content.children.scrollIntoView;
    } else if (totalCards === 0) {
      container.classList.add("removed");
    }

    console.log(`
		  ${console.clear()}
		  ResizeObserver:
		  ---------------
		  Total num of cards => ${totalCards}
		  Container width => => ${cardsWidth}
	  `);

    return true;
  } //fn cardsBeenAdded

  //chng
  const doCardUpdates = {
    init: () => {
      setTimeout(() => {
        cardsBeenAdded();
      }, 750);
    },
  };

  new ResizeObserver(doCardUpdates.init).observe(xcards);
}); // resize event

//debugger;
window.addEventListener("load", function () {
  // init activity
  closCarousel237.init();

  // info object
  const sparksOptions = {
    //call api when-disabled
    allFetchedSparks: closCarousel237.fetchSparks(),
    //get em here
    allOffers: closCarousel237.sparksComplete,
    // cookieName
    visitorName:
      closCarousel237.cookieDo("MS_USER_COOKIE_10151", "cookieName") || "",
    //cookieValue
    visitorValue: closCarousel237.cookieDo(
      "MS_USER_COOKIE_10151",
      "cookieValue"
    ),
    other: {
      visitorStatus:
        !!this.visitorName && this.visitorName !== ""
          ? "signed-in"
          : "signed-out",
    },
  };

  // handle click events, touch/dragstart etc
  if (document.getElementById("content") && window.screen.width <= 1024) {
    const content = document.getElementById("content");
    content.addEventListener(
      "click",
      () => {
        setTimeout(() => closCarousel237.handleAllClickEvts, 2200);
      },
      false
    );
  }

  // handle click events, touch/dragstart etc
  if (document.getElementById("content") && window.screen.width > 1024) {
    const content = document.getElementById("content");
    content.addEventListener(
      "click",
      closCarousel237.handleAllClickEvts,
      false
    );
  }

  console.info(`\n [EXP-237] ... \n\n DONE! ....1350ms timeout (Temp)`);
}); // load pg fns

var carouselData = function () {
  const getSparks = () => {
    let optns = JSON.parse(localStorage.getItem("sparkOptionsComplete"));
    return optns || 0;
  };

  return {
    init: function () {
      this.sparkOptionsComplete = getSparks();
      this.doCards();
    },

    sparkCards: [
      {
        id: 0,
        className: "hidden",

        type: "viewBag",
        close: "close-card",
        closeEle: "X",
        footer: "New Sparks offers waiting for you",
        image: "https://donpio.tech/repositories/mtest/images/Card_NEW.png",
        image_mob:
          "https://donpio.tech/repositories/mtest/images/Card_NEW01.png",
        width: 246,
        height: 150,
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
      if (cards) {
        return cards.map(
          (li) => (li.id = Math.floor(1000 + Math.random() * 9000))
        );
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
            this.sparkOptionsComplete.offersBreakdown.allOffers[0].offers[0]
              .imageUrl;
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
      return crds;
    },

    callOut: function (t) {
      return clearTimeout(t);
    },

    doCards: function () {
      let spcrds;
      cids = this.addIds.apply(this.sparkCards);
      this.addIds(this.sparkCards);
      spcrds = this.sparkCards;

      if (spcrds) {
        new Promise((resolve) => {
          resolve(this.compileCards(spcrds));
        })
          .then((data) => {
            let compcards = data;

            if (document.getElementById("content")) {
              document
                .querySelector("#content")
                .insertAdjacentHTML("beforeend", compcards.innerHTML);
            }
          })
          .then((data) => {
            let crs = [];
            if (data) data.forEach((itm) => crs.push(itm));
            let orig = document.querySelectorAll(".item");
            orig.forEach((sl) => crs.push(sl));
            crs.map((crd) => crd.classList.remove("hidden")),
              (crs.hidden = true),
              window.gsap
                ? window.gsap.from(
                    crs,
                    {
                      duration: 2.5,
                      autoAlpha: 1,
                      opacity: 1,
                      stagger: 0.35,
                      rotationY: 100,
                      y: -2200,
                      transformOrigin: "center bottom",
                      delay: 0.1,
                      ease: "power2.inOut",
                    },
                    "+=.45"
                  )
                : "";
          });
      }
    },
  };
};

setTimeout(() => {
  let data = carouselData();
  data.init();
}, 2250);
