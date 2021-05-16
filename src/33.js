
//# sourceURL=EXP33_target.js
// declares sparksSSO as global variable and converts from strigified API data, back to JSON object
var sparksSSO = JSON.parse(sessionStorage.getItem('sparksSSO')) || {};
// global variables for use with session storage
var sparksOfferCount = (sparksSSO.totalOffers >= 0) ? sparksSSO.totalOffers : 0 ;
var sparksAllOffers = Number(sparksSSO.allOffers); 

var sparksAddedOffers = Number(sparksSSO.totalAddedOffers);
var sparksTotalOffers = Number(sparksSSO.totalOffers);
var sparksUNaddedOffers = (sparksTotalOffers - sparksAddedOffers); // offers that haven't been added yet
console.log('sparks Un added offers', sparksUNaddedOffers);
  
var sparksAddedRewards = Number(sparksSSO.totalAddedRewards);
var sparksTotalRewards = Number(sparksSSO.totalRewards);
var sparksUNaddedRewards = (sparksTotalRewards - sparksAddedRewards); // rewards that haven't been added yet
console.log('sparks Un added rewards', sparksUNaddedRewards);
  
var sparksAddedStreakOffers = Number(sparksSSO.totalAddedStreakOffers);
var sparksTotalStreakOffers = Number(sparksSSO.totalStreakOffers);
var sparksUNaddedStreakOffers = (sparksTotalStreakOffers - sparksAddedStreakOffers); // offers that haven't been added yet
console.log('sparks Un added streak offers', sparksUNaddedStreakOffers);
  
var derivedSparksTotalOffers = Number(sparksUNaddedOffers + sparksUNaddedRewards + sparksUNaddedStreakOffers) || 0;
console.log('derived total of new offers from session storage', derivedSparksTotalOffers);
var sparksDashImg;
var removeLoginIcon = document.querySelector('.navigation-icon--account-active');

// this api_call function runs once the footer element has been loaded and triggered by the flickerlessly script below
function api_call_exp33() {
  // checks to see if sparksSSO exists in sessionStorage
  if ("sparksSSO" in sessionStorage) {
    // validation message and prints the API data held in sessionStorage
    console.log('API call already made and in session storage | EXP33 API data summary: ', sparksSSO);
    // checks to see if user is logged in by way of looking for the user cookie
    if(document.cookie.indexOf("MS_USER_COOKIE_10151")>-1){
      setTimeout(function(){ 
       // adds class which removes the standard log in icon
      // removeLoginIcon.classList.add('remove_login_icon');
      // adds HTML content into the account icon block that exists in the website header
      document.getElementsByClassName("navigation-icon--account-active")[0].innerHTML =
        `<div id="green_login_pulse_33" class="pulse_green_dot">
          <span>` + derivedSparksTotalOffers + `</span>  
        </div>`;
      
      setTimeout(function(){ 
        if (derivedSparksTotalOffers == 0) {
          console.log('zero sparks offers - empty green notify icon will display');
          var main_notify_number = document.querySelector('.pulse_green_dot span');
          main_notify_number.classList.add('hide');
        }
      }, 1);
          
      if (derivedSparksTotalOffers > 0) {
        setTimeout(function () {
          console.log('additional green dot should be added in the account summary overlay');
          // creates and adds green notification dot to the account summary popout
          function adding_extra_green_dot () {
            var extra_green_dot = document.createElement('div');
            extra_green_dot.setAttribute("id", "green_login_pulse_popout");
            extra_green_dot.setAttribute("class", "pulse_green_dot");
            extra_green_dot.innerHTML = '<span>' + derivedSparksTotalOffers + '</span>';
            var popout_notify = document.querySelector('.navigation-dropdown__list-container-myaccount li:nth-child(3)');
            popout_notify.appendChild(extra_green_dot);
          }
          adding_extra_green_dot();
          // document.getElementById("oc").innerHTML =  data.offersBreakdown.totalOffers.toString();
          document.querySelector('#green_login_pulse_popout span').innerHTML = derivedSparksTotalOffers;
        }, 1000);

        setTimeout(function () {
          // initialises the opacity of the green login dot
          var revealGreenPulseOffers = document.querySelector('#green_login_pulse_33');
          revealGreenPulseOffers.classList.add('reveal_green_pulse');
        }, 1);

      } else { // else IF the offer count is less than 1, ie zero
        setTimeout(function () {
          // initialises the opacity of the green login dot
          var revealGreenPulseNoOffers = document.querySelector('#green_login_pulse_33');
          revealGreenPulseNoOffers.classList.add('reveal_green_pulse');
        }, 1);

      } // end if statements, depending on the number of offers the user has
    }, 500); // closes set timeout function

  } // ends IF user is logged in
  } else { ////////////////////////////////////////////////////////////////////////////////////////
    console.log('API call not yet in sessionStorage | EXP33, sparksSSO to be loaded in shortly IF user is logged in');
    // checks to see if user is logged in by way of looking for the user cookie
    if(document.cookie.indexOf("MS_USER_COOKIE_10151")>-1){
      console.log('User is logged in - API will now load');
      // start of API call
      function readCookie(name) {
        var nameEQ = name + "\x3d";
        var ca = document.cookie.split(";");
        for (var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == " ") c = c.substring(1, c.length);
          if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
      }
      var userCookie = readCookie("MS_USER_COOKIE_10151") || ""; // || "" added to remedy Ireland website bug
      var ssplit = userCookie.split("_");
      var wcsId = ssplit[1].toString();
      var valuetoencode = '{"externalCustomerId":' + '"' + wcsId + '"' + ',"platform":"UK_DIGITAL"}';
      var encodedvalue = btoa(valuetoencode);
      var headers = "MNSSharedSecret 620sSJ|xq-2K3?T" + " " + encodedvalue;
      fetch('https://api.loyalty.marksandspencer.services/loyalty-service/api/aggregatedetails/user/v2', {
        headers: {
          'Authorization': headers
        }
      })
      .then(response => response.json())
      .then(function (data) {
        // takes API JSON data inside offersBreakdown and stores into local variable sparksAPIdata
        var sparksAPIdata = data.offersBreakdown;
        // creates sessionStorage sparksSSO and converts the JSON data into a string
        sessionStorage.setItem('sparksSSO', JSON.stringify(sparksAPIdata));
        // assigns the sessionStorage data into the global variable sparksSSO | declared at the top of this entire script
        var sparksSSO = JSON.parse(sessionStorage.getItem('sparksSSO')) || {};
        // validation message and prints the API data held in sessionStorage
        console.log('sparksAPI now stored into sparksSSO sessionStorage | EXP33 API new data summary: ', JSON.parse(sessionStorage.getItem('sparksSSO')));
        
        // stores the number of offers for the user into a variable for use inside this fetch call function with other scripts
        var sparksOfferCount = Number(sparksSSO.totalOffers);
        var sparksAllOffers = Number(sparksSSO.allOffers);
        
        var sparksAddedOffers = Number(sparksSSO.totalAddedOffers);
        var sparksTotalOffers = Number(sparksSSO.totalOffers);
        var sparksUNaddedOffers = (sparksTotalOffers - sparksAddedOffers); // offers that haven't been added yet
        console.log('sparks Un added offers', sparksUNaddedOffers);

        var sparksAddedRewards = Number(sparksSSO.totalAddedRewards);
        var sparksTotalRewards = Number(sparksSSO.totalRewards);
        var sparksUNaddedRewards = (sparksTotalRewards - sparksAddedRewards); // rewards that haven't been added yet
        console.log('sparks Un added rewards', sparksUNaddedRewards);

        var sparksAddedStreakOffers = Number(sparksSSO.totalAddedStreakOffers);
        var sparksTotalStreakOffers = Number(sparksSSO.totalStreakOffers);
        var sparksUNaddedStreakOffers = (sparksTotalStreakOffers - sparksAddedStreakOffers); // offers that haven't been added yet
        console.log('sparks Un added streak offers', sparksUNaddedStreakOffers);

        var derivedSparksTotalOffers = Number(sparksUNaddedOffers + sparksUNaddedRewards + sparksUNaddedStreakOffers) || 0;
        console.log('derived total of new offers from fresh API call', derivedSparksTotalOffers);
        
        setTimeout(function(){ //allows some time for the API call to load in, before firing scripts which rely upon it
            // adds class which removes the standard log in icon
            // removeLoginIcon.classList.add('remove_login_icon');
            // adds HTML content into the account icon block that exists in the website header
            document.getElementsByClassName("navigation-icon--account-active")[0].innerHTML =
              `<div id="green_login_pulse_33" class="pulse_green_dot">
                <span>` + derivedSparksTotalOffers + `</span>  
              </div>`;
        
        setTimeout(function(){ 
          if (derivedSparksTotalOffers == 0) {
            console.log('zero sparks offers - empty green notify icon will display');
            var main_notify_number = document.querySelector('.pulse_green_dot span');
            main_notify_number.classList.add('hide');
          }
        }, 1);
          
            if (derivedSparksTotalOffers > 0) {
              setTimeout(function () {
                console.log('additional green dot should be added in the account summary overlay');
                // creates and adds green notification dot to the account summary popout
                function adding_extra_green_dot () {
                  var extra_green_dot = document.createElement('div');
                  extra_green_dot.setAttribute("id", "green_login_pulse_popout");
                  extra_green_dot.setAttribute("class", "pulse_green_dot");
                  extra_green_dot.innerHTML = '<span>' + derivedSparksTotalOffers + '</span>';
                  var popout_notify = document.querySelector('.navigation-dropdown__list-container-myaccount li:nth-child(3)');
                  popout_notify.appendChild(extra_green_dot);
                }
                adding_extra_green_dot();
                // document.getElementById("oc").innerHTML =  data.offersBreakdown.totalOffers.toString();
                document.querySelector('#green_login_pulse_popout span').innerHTML = derivedSparksTotalOffers;
              }, 1000);

              setTimeout(function () {
                // initialises the opacity of the green login dot
                var revealGreenPulseOffers = document.querySelector('#green_login_pulse_33');
                revealGreenPulseOffers.classList.add('reveal_green_pulse');
              }, 1);

              setTimeout(function () {
                // makes the grey login text animate outwards
                //var revealGreenDot = document.querySelector('#grey_login_btn_green_pulse');
              }, 1500);

            } else { // else IF the offer count is less than 1, ie zero
              setTimeout(function () {
                // initialises the opacity of the green login dot
                var revealGreenPulseNoOffers = document.querySelector('#green_login_pulse_33');
                revealGreenPulseNoOffers.classList.add('reveal_green_pulse');
              }, 1);

              setTimeout(function () {
                // makes the grey login text animate outwards
                var revealGreenDotNoOffers = document.querySelector('#grey_login_btn_green_pulse');
                //revealGreenDotNoOffers.classList.add('reveal_grey_login_btn_green_pulse_two');
              }, 500);
            } // end if statements, depending on the number of offers the user has
        }, 500); // closes set timeout function that allows the API time to load in
      }); // closes API fetch call
    } // ends IF user is logged in
  } // closes ELSE IF statement if sparksSSO is in session storage
} // apiCall function
  
// script which runs the api_call function after it can see that the website footer has loaded in
Flickerlessly=window.Flickerlessly||{},function(t){"use strict";var e=function(t,e,a,i){var n="atNodeInserted"+t,o="@keyframes "+n+" {from {opacity:0.99} to {opacity:1} }\n";o+=e+"{animation-duration:0.001s;animation-name:"+n+";visibility:hidden}";var s=document.getElementsByTagName("head")[0];if(s){var r=document.createElement("style");r.setAttribute("type","text/css"),r.styleSheet?r.styleSheet.cssText=o:r.appendChild(document.createTextNode(o)),s.insertBefore(r,s.firstChild)}var c=function(t){if(t.animationName===n&&"object"==typeof t.target){var o=!0===i||!1===i&&null===t.target.getAttribute("data-flk-success");console&&console.info&&console.info("Node "+e+" ready! Execute: "+o,t.target),"function"==typeof a&&o&&(a(t.target),t.target.setAttribute("data-flk-success",n)),t.target.style.visibility="visible"}};["animationstart","MSAnimationStart","webkitAnimationStart"].forEach(function(t,e){document.addEventListener(t,c,!1)})};t.onReady=function(){for(var t=0;t<arguments.length;t++){var a=arguments[t],i=a.selector,n=a.success||null,o=a.persist||!1,s=Math.floor(100*Math.random()+1);e(s,i,n,o)}}}(Flickerlessly);
  Flickerlessly.onReady({
  selector: "#progressiveHeaderSection",
  persist: true,
  success: function(el) {
  // code or function call here
    api_call_exp33();
   // }
  }
});
