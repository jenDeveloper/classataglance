App Name: Class at a Glance
Members: Jeanine, Maria, Leonardo, Andy, and Melannye

Web App Info: It is a web application that makes students' life easier. It focus on schedule, to-do, tasks and upcoming events based on needs of students, such as homeworks' deadlines and classes schedules, for example.




























# classataglance

Setup the Facebook SDK for JavaScript

The following snippet of code will give the basic version of the SDK where the options are set to their most common defaults. 
You should insert it directly after the opening <body> tag on each page you want to load it:

<script>
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
</script>
