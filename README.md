# Carousel-exp237


### dashboard that can carousel multiple cards


#### Exp-237 Carousel

Made out of  2 or possibly 3 depending on what works out to be more of a user friendly approach.    
One experiment to be a container for cards.    
The other experiment to pass the cards.    
Offers are out.         
Separation of UI/ data - third party passing data. 

ATM it passes data to Carousel injected from console via a self exec function/ slides object.
Another does it all together

----

- Targets these page(s):  DLP, PLP, PDP
- About experiment:

   - Scrolls sideways, touch/drag under `1025px`, over it shows `left/right` arrows

   - Shows right arrow, margin-left - check dots some of these things are linked to last one myb not needed hr 

   - Needs to be a container for the homepage dashboard that can hold multiple cards - each card needs to have it's own rules/logic.

   - No cards carousel container shown - Greeting  and username signed-in

   - Card X close to remove individual messages - if all messages have been removed by a user, then dashboard should disappear  (checkout what messages these are)


- Assets:
   • Link to [fonts](https://marksandspencer.invisionapp.com/console/Dashboard-ckniwy5k402qu010l4zea617m/ckniwy7b602qy010lfhcrf0wj/inspect).
   • Link to [design](https://marksandspencer.invisionapp.com/console/Dashboard-ckniwy5k402qu010l4zea617m/ckniwy7b602qy010lfhcrf0wj/inspect).


<br /><br />

<kbd>Screenshot 1</kbd>
![Carousel](./src/images/s1.png)

<br />

<kbd>Old design</kbd>
![Carousel](./src/images/sc.png)


#### live link

!(demo)[https://donpio.tech/repositories/mtest/index.html]


<br/><br/>








# AT Mbox (Global/Regular) Admin Panel

> These also can be managed/ combined to work together with mParticle and Akami or Tealium
 and produce accurate reporting data/impressions across activities and avoid false reporting  in cases in which they do overlap.

- name used to refer to the single server call made at the top of each web page in AT

- by default name `target-global-mbox`

- regular mbox typically wraps around content  with a <div> tag

- global mbox is 'empty' and does not wrap around any content

- regular mbox content from only one activity

- content from multiple activities can be delivered in one response to a global mbox



## Passing params

- `targetPageParams` function used to pass parameters to the global mbox in AT

- ex: recommendations activity: params to represent current product or category

- call js fn must come before global mbox on the page

- add params to all mbox in a page with `targetPageParamsAll` fn

- pass arrays, json objects, ampersand-delimited list

- aecloud debugger to verify passing params

- mbox to target/get impressions working that span across multiple pages and locations

- activity impression responses for a particular activity - prevent overlapping regions with
  regional mboxes.

- two activities targeting same selector will not be overlap

- regional mboxes are needed in order to accurately track impressions for overlapping offers
  especially important when u have multiple teams working on a site.



<kbd>sc1</kbd>
```

   // Add class with jQuery
   
   $(“div[data-mbox-id=’homepage-secondary-1′]”).addClass(“mbox-name-homepage-secondary-1”);
   
   
   // Call Target for regional mbox content and apply to the appropriate selector
   
   adobe.target.getOffer({
      “mbox”: “homepage-secondary-1”,
      “success”: function(offer) {
         adobe.target.applyOffer({
            “mbox”: “homepage-secondary-1”,
            “selector”: “div[data-mbox-id=’homepage-secondary-1′]”,
            “offer”: offer
            
         });
      
      },
      
      “error”: function(status, error) {
         console.log(‘Error’, status, error);
         
      }});
      
     


```



###  Call getOffers() for all views  &nbsp;<kbd>sc2</kbd>
```

adobe.target.getOffers({
    request: {
      prefetch: {
        views: [{}]
    }
  }
});


```



### Call getOffers() to retrieve latest views with passed-in parameters and profile params  &nbsp;<kbd>sc3</kbd>

```
   adobe.target.getOffers({
  request: {
    "prefetch": {
      "views": [
        {
          "parameters": {
            "ad": "1"
          },
          "profileParameters": {
            "age": 23
          }
        }
      ]
    }
  }
});

```




### Call getOffers to retrieve mboxes with params and profile params passed-in  &nbsp; <kbd>sc4</kbd>

```
   adobe.target.getOffers({
  request: {
    execute: {
      mboxes: [
        {
          index: 0,
          name: "first-mbox"
        },
        {
          index: 1,
          name: "second-mbox",
          parameters: {
            a: 1
          },
          profileParameters: {
            b: 2
          }
        }
      ]
    }
  }
});


```





### Call getOffers() to perform a pageLoad &nbsp; <kbd>sc5</kbd>

```
   adobe.target.getOffers({
    request: {
        execute: {
            pageLoad: {
                parameters: {}
            }
        }
    }
});


```