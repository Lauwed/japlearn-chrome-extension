chrome.runtime.onMessage.addListener(
    function(request,sender, sendResponse) {
        if(request.message == "clicked_browser_action") {
            const href = document.querySelector('a[href^="http"').getAttribute('href');
            alert(href);

            // Send the URL to the background.js
            chrome.runtime.sendMessage(
                {
                    "message": "open_new_tab",
                    "url": href
                }
            );
        }
    }
);
