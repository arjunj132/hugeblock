// background.js
// default image provided by pexels

chrome.runtime.onInstalled.addListener(() => {
// empty url: https://upload.wikimedia.org/wikipedia/commons/5/59/Empty.png
  let color = 'on';
var image = 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
var iframeremove = 'on'
  chrome.storage.sync.set({key: color});
  chrome.storage.sync.set({iremove: iframeremove});
  chrome.storage.sync.set({curimg: image});
  chrome.storage.sync.set({prv: image});
  chrome.storage.sync.set({tags: 'on'});
  chrome.storage.sync.set({color: 'DodgerBlue'});
  console.log('Default settings set to on');
});