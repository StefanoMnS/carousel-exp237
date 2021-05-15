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
  

  var carouselData = (function () {
      const  getSparks = () => {
        let optns = JSON.parse(localStorage.getItem('sparkOptionsComplete'));
        console.log('sparkOptionsComplete', optns);
        return optns || 0;
      }
      
      return {
        init: function () {
          this.sparkOptionsComplete = getSparks();
          this.doCards();
        },
       
        sparkCards: [//sample id#s 9019, 6883 
          { //ids passed into html as datasets: 'data-id'
            
            id: 0,
            className: 'hidden',
           
            type: 'viewBag',
            close: 'close-card',
            closeEle: 'X',
            footer: 'New Sparks offers waiting for you 1',
            image: 'https://donpio.tech/repositories/mtest/images/Card_NEW.png',
            image_mob: 'https://donpio.tech/repositories/mtest/images/Card_NEW01.png',
            width: 144,
            height: 90,
            showNotification: true,
            tcards:0,
            emjIcon: true,
          },
          {
            id: 0,
            className: 'hidden',
           
            type: 'viewOrder',
            close: 'close-card',
            closeEle: 'X',
            footer: '20% Off your next purchase. 2',
            image: 'https://donpio.tech/repositories/mtest/images/Card_NEW.png',
            image_mob: 'https://donpio.tech/repositories/mtest/images/Card_NEW01.png',
            width: 144,
            height: 90,
            showNotification: false,
            tcards:0,
            emjIcon: true,
          },
  
          {
            id: 0,
            className: 'hidden',
           
            type: 'viewBag',
            close: 'close-card',
            closeEle: 'X',
            footer: 'New Sparks offers waiting for you 3',
            image: 'https://donpio.tech/repositories/mtest/images/Card_NEW.png',
            image_mob: 'https://donpio.tech/repositories/mtest/images/Card_NEW01.png',
            width: 144,
            height: 90,
            showNotification: false,
            tcards:0,
            emjIcon: false,
            
          },
          {
            id: 0,
            className: 'hidden',
           
            type: 'viewOrder',
            close: 'close-card',
            closeEle: 'X',
            footer: '20% Off your next purchase. 4',
            image: 'https://donpio.tech/repositories/mtest/images/Card_NEW.png',
            image_mob: 'https://donpio.tech/repositories/mtest/images/Card_NEW01.png',
            width: 144,
            height: 90,
            showNotification: false,
            tcards:0,
            emjIcon: false,
          },
  
          {
            id: 0,
            className: 'hidden',
            inline: '',
            type: 'viewBag',
            close: 'close-card',
            closeEle: 'X',
            footer: 'It\"s time to join the POTTY. 5',
            image: 'https://donpio.tech/repositories/mtest/images/Card_NEW.png',
            image_mob: 'https://donpio.tech/repositories/mtest/images/Card_NEW01.png',
            width: 144,
            height: 90,
            showNotification: false,
            tcards:0,
            emjIcon: false,
          },
          {
            id: 0,
            className: 'hidden',
            inline: '',
            type: 'viewBag',
            close: 'close-card',
            closeEle: 'X',
            footer: 'New Sparks offers waiting for you 6',
            image: 'https://donpio.tech/repositories/mtest/images/Card_NEW.png',
            image_mob: 'https://donpio.tech/repositories/mtest/images/Card_NEW01.png',
            width: 144,
            height: 90,
            showNotification: false,
            tcards:0,
            emjIcon: false,
            
          },
          {
            id: 0,
            className: 'hidden',
            inline: '',
            type: 'viewOrder',
            close: 'close-card',
            closeEle: 'X',
            footer: '20% Off your next purchase. 7',
            image: 'https://donpio.tech/repositories/mtest/images/Card_NEW.png',
            image_mob: 'https://donpio.tech/repositories/mtest/images/Card_NEW01.png',
            width: 144,
            height: 90,
            showNotification: false,
            tcards:0,
            emjIcon: false,
          },
  
          {
            id: 0,
            className: 'hidden',
            
            type: 'viewBag',
            close: 'close-card',
            closeEle: 'X',
            footer: 'It\"s time to join the POTTY. 8',
            image: 'https://donpio.tech/repositories/mtest/images/Card_NEW.png',
            image_mob: 'https://donpio.tech/repositories/mtest/images/Card_NEW01.png',
            width: 144,
            height: 90,
            showNotification: false,
            tcards:0,
            emjIcon: false,
          },
          {
            id: 0,
            
           
            type: 'viewBag',
            close: 'close-card',
            closeEle: 'X',
            footer: 'New Sparks offers waiting for you 9',
            image: 'https://donpio.tech/repositories/mtest/images/Card_NEW.png',
            image_mob: 'https://donpio.tech/repositories/mtest/images/Card_NEW01.png',
            
            width: 144,
            height: 90,
            showNotification: false,
            tcards:0,
            emjIcon: false,
            
          },
          {
            id: 0,
            className: 'hidden',
           
            type: 'viewBag',
            close: 'close-card',
            closeEle: 'X',
            footer: 'It\"s time to join the POTTY. 10',
            image: 'https://donpio.tech/repositories/mtest/images/Card_NEW.png',
            image_mob: 'https://donpio.tech/repositories/mtest/images/Card_NEW01.png',
            width: 144,
            height: 90,
            showNotification: false,
            tcards:0,
            emjIcon: false,
          },

          {
            id: 0,
            className: 'hidden',
           
            type: 'viewBag',
            close: 'close-card',
            closeEle: 'X',
            footer: 'New Sparks offers waiting for you 9',
            image: 'https://donpio.tech/repositories/mtest/images/Card_NEW.png',
            image_mob: 'https://donpio.tech/repositories/mtest/images/Card_NEW01.png',
            width: 144,
            height: 90,
            showNotification: false,
            tcards:0,
            emjIcon: false,
            
          },
          {
            id: 0,
            className: 'hidden',
           
            type: 'viewBag',
            close: 'close-card',
            closeEle: 'X',
            footer: 'It\"s time to join the POTTY. 10',
            image: 'https://donpio.tech/repositories/mtest/images/Card_NEW.png',
            image_mob: 'https://donpio.tech/repositories/mtest/images/Card_NEW01.png',
            width: 144,
            height: 90,
            showNotification: false,
            tcards:0,
            emjIcon: false,
          },
        
  
         
      
        ],
  
        // returns 4 digit int
        addIds: () =>  carouselData.sparkCards.map(li =>  li.id = Math.floor(1000 + Math.random() * 9000)),
    
        compileCards: function (cards) {
          //let isNotif = this.sparkOptionsComplete.totalOffers;
          let isNotif; 
         
          const crds = document.createElement('div')
          let cardsContent = ''
          for (let c = 0; c < cards.length; c++) {
            cardsContent += '<div data-id="' + cards[c].id + '" class="item ' + cards[c].className + '">'
            cardsContent +=
              '<img  class="card-logo" style="" width="' +
              parseInt(cards[c].width) +
              '" height="' +
              parseInt(cards[c].height) +
              '" src="' + cards[c].image   + 
              '"/>';
            
              cardsContent += `<div class="card-notification__wrapper">`;
              cardsContent += 
  
              cards[c].showNotification ? '<span class="card-notification">'+ isNotif + '</span>' : '';
  
              cardsContent += '</div>';
  
            cardsContent += `<p class="heading">${cards[c].footer}`;
            
            cardsContent += cards[c].emjIcon ? '<img class="card-confetti" src="https://donpio.tech/repositories/mtest/images/confetti.png" />' : '<img src=""/>';
  
            cardsContent += '</p>';
            
            cardsContent += `<span class="${cards[c].close}">${cards[c].closeEle}</span></div>`
          }
  
          crds.innerHTML = cardsContent



          return crds;
  
        },
  
        callOut: function(t) {
          return clearTimeout(t);
        },
    
        doCards: function () {
        
          this.addIds();
          let spcrds = this.sparkCards
          new Promise(resolve => {
            resolve(this.compileCards(spcrds))
          }).then(data => {
            let compcards = data;
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
            
          
          })
        
        }
      }
    })()
    
  
    carouselData.init();
    
  
  
    
  