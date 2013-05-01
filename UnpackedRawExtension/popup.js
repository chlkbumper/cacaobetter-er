chrome.tabs.onUpdated.addListener(function(tabId, changeInfo) {
  if (changeInfo.url.indexOf("127.0.0") != -1) {
  chrome.tabs.executeScript(null,
    {code:
        "var jqueryScript = document.createElement('script');" +
        "jqueryScript.setAttribute('src', '//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js');" +
        "jqueryScript.setAttribute('type','text/javascript');" +
        "document.getElementsByTagName('head')[0].appendChild(jqueryScript);"
	});
  chrome.tabs.executeScript(null,
    {code:
        "var fontLink = document.createElement('link');" +
        "fontLink.setAttribute('href', 'http://fonts.googleapis.com/css?family=Roboto+Condensed');" +
        "fontLink.setAttribute('type','text/css');" +
        "fontLink.setAttribute('rel','stylesheet');" +
        "document.getElementsByTagName('head')[0].appendChild(fontLink);"
	});
	chrome.tabs.executeScript(null,
    {code:
        "var patchCssLink = document.createElement('link');" +
        "patchCssLink.setAttribute('href', 'http://ajax.chlkbumper.tk/CHBCacaoPatchCss.css');" +
        "patchCssLink.setAttribute('type','text/css');" +
        "patchCssLink.setAttribute('rel','stylesheet');" +
        "document.getElementsByTagName('head')[0].appendChild(patchCssLink);"
	});
    chrome.tabs.executeScript(null,
	    {code:
        "var styleTag = document.createElement('style');" +
        "styleTag.setAttribute('type','text/css');" +
        "document.getElementsByTagName('head')[0].appendChild(styleTag);"
	});
  chrome.tabs.executeScript(null,
    {code:
        "var patchScript = document.createElement('script');" +
        "patchScript.setAttribute('src', '//ajax.chlkbumper.tk/CHBCacaoPatch.js');" +
        "patchScript.setAttribute('type','text/javascript');" +
        "document.getElementsByTagName('head')[0].appendChild(patchScript);"
  	});
	}  
}); 