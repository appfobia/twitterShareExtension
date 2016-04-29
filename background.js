var contextsList = ["selection","link","image","page"];

for(var i=0;i<contextsList.length;i++) {
    var context= contextsList[i];
    var titleX = "share this " + context + " on your profile";
    chrome.contextMenus.create({title: titleX , contexts: [context] , onclick: myFunction , id: context});
}

function myFunction(data,tab) {
    switch(data.menuItemId) {
        case 'selection' :
            chrome.tabs.create({url: "https://twitter.com/intent/tweet?text="+encodeURIComponent(data.selectionText)});
            break;
        case 'link' :
            chrome.tabs.create({url: "https://twitter.com/intent/tweet?text="+encodeURIComponent(data.linkUrl)});
            break;
        case 'image' :
            chrome.tabs.create({url: "https://twitter.com/intent/tweet?text="+encodeURIComponent(data.srcUrl)});
            break;
        case 'page' :
            chrome.tabs.create({url: "https://twitter.com/intent/tweet?text="+encodeURIComponent(tab.title) + "&url=" + data.pageUrl});
            break;
    }
    
}