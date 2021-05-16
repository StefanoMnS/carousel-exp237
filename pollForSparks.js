<script>
(function() {
    console.log('Blank1');
    var msBlank = {
        init: function() {
            this.addCookie();
        },
        
        addCookie: function(x){
          
          setTimeout(function(){
            //console.log("add cookie");
            if(parseInt(document.querySelector(".totalsparks").innerHTML) > 4999){
                document.cookie="sparksPremium=true;path=/;";
                //console.log("Premium cookie added");
                adobe.target.trackEvent({mbox:'sparksPremium'});

                if (typeof(Storage) !== "undefined") {
                    localStorage.setItem("sparksPremium", "true");
                    //console.log("Premium LS added");
                } 
            } else {
            	document.cookie="sparksPremium=false;path=/;";
            }
         }, 3000);

        }
       
       

    };

    (function pollForSpark() {
        if (document.getElementsByClassName("totalsparks")[0] != null || document.getElementsByClassName("totalsparks")[0] != undefined) {
            try {
          // console.log("run init");
                msBlank.init();
            } catch (err) {
               console.log('TRY ERROR: '+ err);
            }
        } else {
            setTimeout(pollForSpark, 25);
        }
    })();

})();

</script>