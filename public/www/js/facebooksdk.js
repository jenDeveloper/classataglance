//Do not remove--Set up for Facebook SDK
        
window.fbAsyncInit = function() {
  FB.init({
    appId      : '834933146573494',
    xfbml      : true,
    version    : 'v2.3'
  });
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
       
//End of Set up for Facebook SDK