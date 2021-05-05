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
    return {
      init: function () {
        this.doCards()
      },

      sparkCards: [
        {
          className: 'hidden',
          inline: 'difference',
          type: 'viewBag',
          footer: 'It\"s time to join the POTTY.',
          image:
            'https://donpio.tech/repositories/mtest/images/Card_NEW.png',
          width: 85,
          height: 57
          
        },
        {
          className: 'hidden',
          inline: 'luminosity',
          type: 'viewOrder',
          footer: '20% Off your next purchase.',
          image:
            'https://donpio.tech/repositories/mtest/images/Card_NEW.png',
          width: 85,
          height: 57
         
        },

        {
          className: 'hidden',
          inline: 'difference',
          type: 'viewBag',
          footer: 'It\"s time to join the POTTY.',
          image:
            'https://donpio.tech/repositories/mtest/images/Card_NEW.png',
          width: 85,
          height: 57
          
        },
        {
          className: 'hidden',
          inline: 'luminosity',
          type: 'viewOrder',
          footer: '20% Off your next purchase.',
          image:
            'https://donpio.tech/repositories/mtest/images/Card_NEW.png',
          width: 85,
          height: 57
         
        },

        {
          className: 'hidden',
          inline: 'difference',
          type: 'viewBag',
          footer: 'It\"s time to join the POTTY.',
          image:
            'https://donpio.tech/repositories/mtest/images/Card_NEW.png',
          width: 85,
          height: 57
          
        },
        {
          className: 'hidden',
          inline: 'luminosity',
          type: 'viewOrder',
          footer: '20% Off your next purchase.',
          image:
            'https://donpio.tech/repositories/mtest/images/Card_NEW.png',
          width: 85,
          height: 57
         
        }
      ],

      addIds: (spks) => spks.map((itm,idx) => itm.id = idx),
  
      compileCards: function (cards) {
        const crds = document.createElement('div')
        let cardsContent = ''
        for (let c = 0; c < cards.length; c++) {
          cardsContent += '<div class="item ' + cards[c].className + '">'
          cardsContent +=
            '<img style="mix-blend-mode:' + cards[c].inline + '" width="' +
            parseInt(cards[c].width) +
            '" height="' +
            parseInt(cards[c].height) +
            '" src="' +
            cards[c].image +
            '"/>'
         
          cardsContent += `<p class="heading">${cards[c].footer}</p></section>`
          cardsContent += '</div>'
        }
        crds.innerHTML = cardsContent
        return crds
      },

      callOut: function(t) {
        return clearTimeout(t);
      },
  
      doCards: function () {
        let timeout;
        this.addIds(this.sparkCards);
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
  


  