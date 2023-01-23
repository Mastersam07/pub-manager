var tags = document.getElementsByClassName("detail-tags-and-like");

var button = document.createElement("button")

button.innerText = "Add to favourite"
button['id'] = 'inserted'

button.onclick = function() {
    chrome.runtime.sendMessage({type: "notification", options: { 
        url: window.location.href,
        title: "Add to bookmark",
        package: window.location.href.split( '/' ).pop()
    }});
}

tags[0].appendChild(button)

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    if (msg.action == 'success_alert') {
      alert("Added to favourites. Check your bookmarks tab!");
    }
  });
