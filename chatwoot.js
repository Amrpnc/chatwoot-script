
	(function(d,t) {
  var BASE_URL="http://chatwoot-rails-api-service:80";
  var CDN_URL="https://chat-widget.hiverhq.com/chat-widget";
  
  console.log('Initializing Chatwoot script');

  var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
  g.src=CDN_URL+"/js/sdk.js";
  g.defer = true;
  g.async = true;
  s.parentNode.insertBefore(g,s);
  
  console.log('Script tag created and inserted into DOM');

  g.onload=function(){
    console.log('SDK script loaded');
    try {
      window.chatwootSDK.run({
        websiteToken: 'agXeQXc3ytYhw3UNZA33QgMw',
        baseUrl: BASE_URL
      });
      console.log('Chatwoot SDK initialized successfully');
    } catch (error) {
      console.error('Error initializing Chatwoot SDK:', error);
    }
  }

  g.onerror = function() {
    console.error('Failed to load Chatwoot SDK script');
  }

  console.log('Script initialization completed');
})(document,"script");
