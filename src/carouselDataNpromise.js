var carouselData = (function () {
  return {
    init: function () {
      this.doCards()
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
        height: 57,
        svg: `<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="24pt" height="24pt" viewBox="0 0 348.000000 348.000000"
            preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,348.000000) scale(0.100000,-0.100000)"fill="#000000" stroke="none"><path d="M1722 2987 l-52 -53 53 -52 53 -52 52 53 52 53 -53 52 -53 52 -52
            -53z"/><path d="M1230 2831 c0 -39 1 -71 3 -71 2 0 30 -5 62 -11 100 -18 160 -60 201
            -139 14 -27 19 -64 22 -159 4 -118 3 -124 -14 -116 -191 79 -304 72 -334 -21
            -79 -238 397 -818 802 -978 84 -33 177 -36 225 -6 63 38 67 149 10 275 l-25
            53 41 5 c86 11 381 -1 443 -17 137 -35 234 -106 234 -173 0 -22 3 -23 70 -23
            l70 0 0 33 c0 58 -55 153 -116 198 -152 115 -443 158 -699 104 -44 -10 -85
            -18 -91 -19 -7 0 -34 29 -60 65 -27 36 -64 83 -82 103 l-32 37 -107 -36 c-59
            -20 -136 -51 -172 -70 -36 -19 -66 -33 -68 -31 -10 9 123 130 190 174 l78 49
            -68 60 c-37 33 -94 79 -125 102 -32 24 -58 45 -58 47 0 1 5 15 10 30 22 56 31
            168 20 244 -29 204 -161 329 -376 356 l-54 6 0 -71z"/>
            <path d="M2880 2189 l-52 -51 53 -54 54 -54 55 55 54 55 -49 50 c-27 27 -52
            50 -56 50 -4 0 -30 -23 -59 -51z"/>
            <path d="M485 1680 l-49 -50 54 -51 53 -50 53 52 52 52 -49 48 c-28 27 -53 49
            -57 49 -4 0 -30 -22 -57 -50z"/>
            <path d="M1665 870 l-70 -70 73 -73 72 -72 72 72 73 73 -70 70 c-38 38 -72 70
            -75 70 -3 0 -37 -32 -75 -70z"/>
            <path d="M2337 920 c-14 -11 -57 -82 -96 -157 -100 -194 -120 -215 -136 -143
            -7 30 -7 30 -76 30 -65 0 -69 -1 -69 -22 0 -48 23 -102 60 -142 37 -40 41 -41
            102 -41 47 0 69 5 89 20 39 29 88 98 134 187 24 44 45 76 47 72 3 -5 9 -31 13
            -58 22 -154 69 -226 148 -226 39 0 46 5 142 105 141 147 170 142 198 -30 l12
            -75 67 0 68 0 0 40 c0 99 -48 230 -101 274 -50 42 -96 51 -165 31 -50 -14 -69
            -28 -136 -95 -43 -43 -78 -76 -78 -75 0 21 -43 202 -56 233 -33 83 -110 116
            -167 72z"/>
            <path d="M1142 597 l-52 -53 53 -52 53 -52 52 53 52 53 -53 52 -53 52 -52 -53z"/>
            </g></svg>`
      },
      {
        className: 'black-friday',
        inline: 'luminosity',
        type: 'viewOrder',
        footer: '20% Off your next purchase.',
        image:
          'https://donpio.tech/repositories/mtest/images/Card_NEW.png',
        width: 85,
        height: 57,
        svg: `<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="24pt" height="24pt" viewBox="0 0 348.000000 348.000000"
            preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,348.000000) scale(0.100000,-0.100000)"fill="#000000" stroke="none"><path d="M1722 2987 l-52 -53 53 -52 53 -52 52 53 52 53 -53 52 -53 52 -52
            -53z"/><path d="M1230 2831 c0 -39 1 -71 3 -71 2 0 30 -5 62 -11 100 -18 160 -60 201
            -139 14 -27 19 -64 22 -159 4 -118 3 -124 -14 -116 -191 79 -304 72 -334 -21
            -79 -238 397 -818 802 -978 84 -33 177 -36 225 -6 63 38 67 149 10 275 l-25
            53 41 5 c86 11 381 -1 443 -17 137 -35 234 -106 234 -173 0 -22 3 -23 70 -23
            l70 0 0 33 c0 58 -55 153 -116 198 -152 115 -443 158 -699 104 -44 -10 -85
            -18 -91 -19 -7 0 -34 29 -60 65 -27 36 -64 83 -82 103 l-32 37 -107 -36 c-59
            -20 -136 -51 -172 -70 -36 -19 -66 -33 -68 -31 -10 9 123 130 190 174 l78 49
            -68 60 c-37 33 -94 79 -125 102 -32 24 -58 45 -58 47 0 1 5 15 10 30 22 56 31
            168 20 244 -29 204 -161 329 -376 356 l-54 6 0 -71z"/>
            <path d="M2880 2189 l-52 -51 53 -54 54 -54 55 55 54 55 -49 50 c-27 27 -52
            50 -56 50 -4 0 -30 -23 -59 -51z"/>
            <path d="M485 1680 l-49 -50 54 -51 53 -50 53 52 52 52 -49 48 c-28 27 -53 49
            -57 49 -4 0 -30 -22 -57 -50z"/>
            <path d="M1665 870 l-70 -70 73 -73 72 -72 72 72 73 73 -70 70 c-38 38 -72 70
            -75 70 -3 0 -37 -32 -75 -70z"/>
            <path d="M2337 920 c-14 -11 -57 -82 -96 -157 -100 -194 -120 -215 -136 -143
            -7 30 -7 30 -76 30 -65 0 -69 -1 -69 -22 0 -48 23 -102 60 -142 37 -40 41 -41
            102 -41 47 0 69 5 89 20 39 29 88 98 134 187 24 44 45 76 47 72 3 -5 9 -31 13
            -58 22 -154 69 -226 148 -226 39 0 46 5 142 105 141 147 170 142 198 -30 l12
            -75 67 0 68 0 0 40 c0 99 -48 230 -101 274 -50 42 -96 51 -165 31 -50 -14 -69
            -28 -136 -95 -43 -43 -78 -76 -78 -75 0 21 -43 202 -56 233 -33 83 -110 116
            -167 72z"/>
            <path d="M1142 597 l-52 -53 53 -52 53 -52 52 53 52 53 -53 52 -53 52 -52 -53z"/>
            </g></svg>`
      }
    ],

    compileCards: function (cards) {
      const crds = document.createElement('div')
      let cardsContent = ''
      for (let c = 0; c < cards.length; c++) {
        cardsContent += '<div class="item" data-target="card">'
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
      let spcrds = this.sparkCards
      new Promise(resolve => {
        resolve(this.compileCards(spcrds))
      }).then(data => {
        let compcards = data

        if (document.getElementById('content')) {
          document
            .querySelector('#content')
            .insertAdjacentHTML('beforeend', compcards.innerHTML)
        }
      })
    }
  }
})()

carouselData.init() 
