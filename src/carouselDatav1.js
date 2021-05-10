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
    let sparkOptionsComplete = {};
    const  getSparks = () => {
      let optns = JSON.parse(localStorage.getItem('sparkOptionsComplete'));
      console.log('sparkOptionsComplete', optns);
      return optns;
    }
    
    return {
      init: function () {
        sparkOptionsComplete = getSparks();
        this.doCards();
      },
     
      sparkCards: [//sample id#s 9019, 6883 
        { //ids passed into html as datasets: 'data-id'
          
          id: 0,
          className: 'hidden',
          inline: '',
          type: 'viewBag',
          close: 'close-card',
          closeEle: 'X',
          footer: 'New Sparks offers waiting for you',
          image: 'https://donpio.tech/repositories/mtest/images/Card_NEW.png',
          width: 246,
          height: 150,
          showNotification: true,
          tcards:0,
          emjIcon: true,
        },
        {
          id: 0,
          className: 'hidden',
          inline: '',
          type: 'viewOrder',
          close: 'close-card',
          closeEle: 'X',
          footer: '20% Off your next purchase.',
          image: 'https://donpio.tech/repositories/mtest/images/Card_NEW.png',
          width: 246,
          height: 150,
          showNotification: false,
          tcards:0,
          emjIcon: true,
        },

        {
          id: 0,
          className: 'hidden',
          inline: '',
          type: 'viewBag',
          close: 'close-card',
          closeEle: 'X',
          footer: 'New Sparks offers waiting for you',
          image: 'https://donpio.tech/repositories/mtest/images/Card_NEW.png',
          width: 246,
          height: 150,
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
          footer: '20% Off your next purchase.',
          image: 'https://donpio.tech/repositories/mtest/images/Card_NEW.png',
          width: 246,
          height: 150,
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
          footer: 'It\"s time to join the POTTY.',
          image: 'https://donpio.tech/repositories/mtest/images/Card_NEW.png',
          width: 246,
          height: 150,
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
          footer: 'New Sparks offers waiting for you',
          image: 'https://donpio.tech/repositories/mtest/images/Card_NEW.png',
          width: 246,
          height: 150,
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
          footer: '20% Off your next purchase.',
          image: 'https://donpio.tech/repositories/mtest/images/Card_NEW.png',
          width: 246,
          height: 150,
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
          footer: 'It\"s time to join the POTTY.',
          image: 'https://donpio.tech/repositories/mtest/images/Card_NEW.png',
          width: 246,
          height: 150,
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
          footer: 'New Sparks offers waiting for you',
          image: 'https://donpio.tech/repositories/mtest/images/Card_NEW.png',
          width: 246,
          height: 150,
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
          footer: '20% Off your next purchase.',
          image: 'https://donpio.tech/repositories/mtest/images/Card_NEW.png',
          width: 246,
          height: 150,
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
          footer: 'It\"s time to join the POTTY.',
          image: 'https://donpio.tech/repositories/mtest/images/Card_NEW.png',
          width: 246,
          height: 150,
          showNotification: false,
          tcards:0,
          emjIcon: false,
        }
    
      ],

      // returns 4 digit int
      addIds: () =>  carouselData.sparkCards.map(li =>  li.id = Math.floor(1000 + Math.random() * 9000)),
  
      compileCards: function (cards) {

        let isNotif = sparkOptionsComplete.totalOffers;
        const crds = document.createElement('div')
        let cardsContent = ''
        for (let c = 0; c < cards.length; c++) {
          cardsContent += '<div data-id="' + cards[c].id + '" class="item ' + cards[c].className + '">'
          cardsContent +=
            '<img class="card-logo" style="mix-blend-mode:' + cards[c].inline + '" width="' +
            parseInt(cards[c].width) +
            '" height="' +
            parseInt(cards[c].height) +
            '" src="' +
            cards[c].image + 
            '"/>';
          
            cardsContent += `<div class="card-notification__wrapper">`;
            cardsContent += 

            cards[c].showNotification ? '<span class="card-notification">'+ isNotif + '</span>' : '';

            cardsContent += '</div>';

          cardsContent += `<p class="heading">${cards[c].footer}`;
          
          cardsContent += cards[c].emjIcon ? '<img class="card-confetti" src="https://donpio.tech/repositories/mtest/images/confetti2.png" />' : '<img src=""/>';

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
        
        let timeout;
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
           timeout = setTimeout(function() {
            let crs = [];
            if (data) data.forEach(itm => crs.push(itm)); 
              let orig = document.querySelectorAll('.item');
              orig.forEach(sl => crs.push(sl));
              crs.map(crd => crd.classList.remove('hidden'));
             
                window.gsap ? window.gsap.from(crs, {
                  duration: 1,
                  autoAlpha: 1,
                  opacity: 1,
                  stagger: 0.35,
                  rotationY: 100,
                  y: -200,
                  transformOrigin: 'center bottom',
                  delay: 0.1,
                  ease: 'power2.inOut'
                },'+=.45') : '';
          
          },1000)
        })
        //clear timeout
        this.callOut(timeout)
      }
    }
  })()
  

  carouselData.init();
  


  
  