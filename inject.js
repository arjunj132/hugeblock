// Source code of Hugeblock for chrome - licensed with MIT license


console.log("HUGEBLOCK AD REMOVAL - Chrome extension")


chrome.storage.sync.get(['key'], function(result) {
  console.log('HUGEBLOCK: Value currently is ' + result.key);
   if (result.key == "on") {
    console.log("HUGEBLOCK: starting adblocker")
       // This folllowing code is edited (a lot) from https://gist.github.com/kbauer/b524f6475c153e759dc28314175cd6a7 (AdBlock Simple)
console.log("========== hugeblock ==========")
console.log("A iframe-based adblocker")
 
    var origins = ["googleads.g.doubleclick.net"];
fetch('https://proxy.arjunjakkipally.repl.co/pgl.yoyo.org/adservers/serverlist.php?hostformat=nohtml&showintro=0&mimetype=plaintext')
  .then((response) => response.text())
  .then((data) => {
    origins.push(...data.split("\n"))
});
function remIF(e){
    // Edited AdBlock Simple
    if (origins.includes(e.src.replace("https://", "").replace("http://", "").replace("www.", ""))){
        console.log("removing " + e.src.replace("https://", "").replace("http://", "").replace("www.", ""))
        chrome.storage.sync.get(['curimg'], function(result) {
        e.src = `${result.curimg}`;
        });
    }
}
function remIFs(){
    chrome.storage.sync.get(['iremove'], function(result) {
        if (result.iremove == "on") {
  for(var e of document.getElementsByTagName('iframe')){
    remIF(e);
  }
  }
    });
    chrome.storage.sync.get(['tags'], function(result) {
        if (result.tags == 'on') {
    // This code is based upon Ad-B-Gone (https://gist.github.com/wernsey/a69341cffe3efcec2aacec6d9d18d7a4)
    var selectors = [
    '#advert', '#xrail', '#middle-article-advert-container',
    '#sponsored-recommendations', '#around-the-web', '#sponsored-recommendations',
    '#taboola-content', '#taboola-below-taboola-native-thumbnails', '#inarticle_wrapper_div',
    '#rc-row-container', '#ads', '#at-share-dock', '#at4-share', '#at4-follow', '#right-ads-rail',
    'div#ad-interstitial', 'div#advert-article', 'div#ac-lre-player-ph',
    '.ad', '.avert', '.avert__wrapper', '.middle-banner-ad', '.advertisement',
    '.GoogleActiveViewClass', '.advert', '.cns-ads-stage', '.teads-inread', '.ad-banner',
    '.ad-anchored', '.js_shelf_ads', '.ad-slot', '.antenna', '.xrail-content',
    '.advertisement__leaderboard', '.ad-leaderboard', '.trc_rbox_outer', '.ks-recommended',
    '.article-da', 'div.sponsored-stories-component', 'div.addthis-smartlayers',
    'div.article-adsponsor', 'div.signin-prompt', 'div.article-bumper', 'div.video-placeholder',
    'div.top-ad-container', 'div.header-ad', 'div.ad-unit', 'div.demo-block', 'div.OUTBRAIN',
    'div.ob-widget', 'div.nwsrm-wrapper', 'div.announcementBar', 'div.partner-resources-block',
    'div.arrow-down', 'div.m-ad', 'div.story-interrupt', 'div.taboola-recommended',
    'div.ad-cluster-container', 'div.ctx-sidebar', 'div.incognito-modal', '.OUTBRAIN', '.subscribe-button',
    '.ads9', '.leaderboards', '.GoogleActiveViewElement', '.mpu-container', '.ad-300x600', '.tf-ad-block',
    '.sidebar-ads-holder-top', '.ads-one', '.FullPageModal__scroller',
    '.content-ads-holder', '.widget-area', '.social-buttons', '.ac-player-ph',
    'aside#sponsored-recommendations', 'aside[role="banner"]',
    'amp-ad', 'span[id^=ad_is_]', 'div[class*="indianapolis-optin"]', 'div[id^=google_ads_iframe]',
    'div[data-google-query-id]', 'section[data-response]', 'ins.adsbygoogle', 'div[data-google-query-id]',
    'div[data-test-id="fullPageSignupModal"]', 'div[data-test-id="giftWrap"]' , "ytd-ad-slot-renderer"];
    for(let i in selectors) {
        let nodesList = document.querySelectorAll(selectors[i]);
        for(let i = 0; i < nodesList.length; i++) {
            let el = nodesList[i];  
            if(el && el.parentNode) {
                chrome.storage.sync.get(['curimg'], function(result) {
                el.innerHTML = `<img src="${result.curimg}">`;
                });
            }
        }
    }
        }
    });
}
       

window.setInterval(remIFs,500);

   }
});
