console.log('Background running!')

chrome.runtime.onMessage.addListener(function (request, sender) {
    if (request.type == "notification") {
        chrome.bookmarks.create(
            { 'parentId': '1', 'title': 'Flutter/Dart Packages' },
            function (newFolder) {
                chrome.bookmarks.create({
                    'parentId': newFolder.id,
                    'url': request.options.url,
                    'title': request.options.package
                });
                console.log("added folder: " + newFolder.title);
            },
        );
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: "success_alert" });
        });

    }
});