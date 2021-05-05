

var carouselData = (function () {
    return {
      init: function () {
        this.doCards()
      },

      animation: function() {
        let done = false;
        return new Promise(resolve => {
          function grabElems() {
            if(document.querySelector('#content') && window.gsap) {
              done = true;
              resolve(done)
            }
          }
        grabElems();
        })
      },

      sparkCards: [
        {
          className: 'last-year',
          inline: 'difference',
          type: 'viewBag',
          footer: 'It\"s time to join the POTTY.',
          image:
            'https://donpio.tech/repositories/mtest/images/Card_NEW.png',
          width: 85,
          height: 57
          
        },
        {
          className: 'black-friday',
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
          cardsContent += '<div class="item">'
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
  
      doCards: function () {
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
        })

        let grabAni = this.animation();
        grabAni.then((ddon) => {
          debugger;
          if(ddon) {
            console.log(ddon)
            let crs = document.querySelectorAll('.item');
            window.gsap.to(crs, {
              duration:2,
              opacity: 1,
              stagger: 0.2,
              y: - 1000
            })

          }
        })

      

      }
    }
  })()
  
  carouselData.init() 

  


  