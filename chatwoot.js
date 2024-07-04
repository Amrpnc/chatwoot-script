(function(d,t){
	var b="http://chatwoot-rails-api-service:80",
	c="https://chat-widget.hiverhq.com/chat-widget",
	g=d.createElement(t),
	s=d.getElementsByTagName(t)[0];
	g.src=c+"/js/sdk.js";
	g.defer=g.async=true;
	s.parentNode.insertBefore(g,s);
	g.onload=function(){
	  window.chatwootSDK.run({
		websiteToken:"agXeQXc3ytYhw3UNZA33QgMw",
		baseUrl:b
	  })
	}
  })(document,"script");
  