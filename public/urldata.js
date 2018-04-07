if(chrome.tabs != undefined) {
	chrome.tabs.query({
    active: true,
    currentWindow: true
}, function(tabs) {
    var tabURL = tabs[0].url;
    tabURL = tabURL.replace('http://','').replace('https://','').split(/[/?#]/)[0]; 
    var firstDotIndex = tabURL.indexOf(".");
    tabURL = tabURL.substr(firstDotIndex+1); // eslint-disable-line 
    // match tabURL with domain column in database to get ID in server.js file?
    // serve up that results page and send that results page to popup.html
    document.getElementById("url").innerHTML = tabURL;
});
}