function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function turnoff(){
    chrome.storage.sync.get(['key'], function(result) {
    if (result.key == "on"){
        chrome.storage.sync.set({key: 'off'});
        console.log("HUGEBLOCK: off")
        document.getElementById("status").innerHTML = "Off"
        chrome.storage.sync.set({color: 'red'});
    } else {
        chrome.storage.sync.set({key: 'on'});
        console.log("HUGEBLOCK: on")
        document.getElementById("status").innerHTML = "On"
        chrome.storage.sync.set({color: 'DodgerBlue'});
    }
    });
}

document.getElementById("turn").addEventListener("click", turnoff);
document.querySelector('#go-to-options').addEventListener('click', function() {
  if (chrome.runtime.openOptionsPage) {
    chrome.runtime.openOptionsPage();
  } else {
    window.open(chrome.runtime.getURL('options.html'));
  }
});


function turnsus() {
    chrome.storage.sync.get(['iremove'], function(result) {
    if (result.iremove == "on"){
        chrome.storage.sync.set({iremove: 'off'});
        console.log("HUGEBLOCK: iremove off")
        document.getElementById("istat").innerHTML = "Off"
    } else {
        chrome.storage.sync.set({iremove: 'on'});
        console.log("HUGEBLOCK: iremove on")
        document.getElementById("istat").innerHTML = "On"
    }
    });
}

document.getElementById("sus").addEventListener("click", turnsus);

window.setInterval(function () {
    chrome.storage.sync.get(['key', 'color', 'iremove'], function(result) {
        document.getElementById("status").innerHTML = capitalizeFirstLetter(result.key)
        document.getElementById("turn").style= `font-size: 150px; color: ${result.color}; cursor: pointer;`
        document.getElementById("istat").innerHTML = capitalizeFirstLetter(result.iremove)
    });
}, 300)

var query = { active: true, currentWindow: true };

function callback(tabs) {
  var currentTab = tabs[0];
  console.log("Connecting to "+currentTab.url);
  const extension = new URL(currentTab.url).origin.split("://")[0]
  document.getElementById("extension").textContent = extension + "://"
  document.getElementById("url").textContent = new URL(currentTab.url).hostname
}

chrome.tabs.query(query, callback);
