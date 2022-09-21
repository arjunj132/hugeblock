function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

var input = document.querySelector('input');

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
function turntag() {
    chrome.storage.sync.get(['tags'], function(result) {
        if (result.tags == "on"){
            chrome.storage.sync.set({tags: 'off'});
            console.log("HUGEBLOCK: tags off")
            document.getElementById("istatt").innerHTML = "Off"
        } else {
            chrome.storage.sync.set({tags: 'on'});
            console.log("HUGEBLOCK: tags on")
            document.getElementById("istatt").innerHTML = "On"
        }
    });
}
function turnimg() {
    chrome.storage.sync.get(['curimg'], function(result) {
        if (result.curimg != "https://upload.wikimedia.org/wikipedia/commons/5/59/Empty.png"){
            chrome.storage.sync.set({curimg: 'https://upload.wikimedia.org/wikipedia/commons/5/59/Empty.png'});
            console.log("HUGEBLOCK: img off")
            document.getElementById("istattt").innerHTML = "On"
            input.value = "https://upload.wikimedia.org/wikipedia/commons/5/59/Empty.png"
        } else {
            chrome.storage.sync.get(['prv'], function(result) {
                chrome.storage.sync.set({curimg: result.prv});
                console.log("HUGEBLOCK: img on")
                document.getElementById("istattt").innerHTML = "Off"
                input.value = result.prv
            });
        }
    });
}
document.getElementById("sus").addEventListener("click", turnsus);
document.getElementById("tag").addEventListener("click", turntag);
document.getElementById("img").addEventListener("click", turnimg);


window.setInterval(function () {
    chrome.storage.sync.get(['iremove'], function(result) {
        document.getElementById("istat").innerHTML = capitalizeFirstLetter(result.iremove)
    });
    chrome.storage.sync.get(['tags'], function(result) {
        document.getElementById("istatt").innerHTML = capitalizeFirstLetter(result.tags)
    });
    
}, 300)

chrome.storage.sync.get(['curimg'], function(result) {
        if (result.curimg != "https://upload.wikimedia.org/wikipedia/commons/5/59/Empty.png") {
            document.getElementById("istattt").innerHTML = 'Off'
        } else {
            document.getElementById("istattt").innerHTML = 'On'
        }
        input.value = result.curimg
    });


fetch('version.json')
  .then((response) => response.json())
  .then((data) => document.getElementById("version").innerHTML = data[0]);


function updateValue(e) {
  currentval = e.target.value;
  chrome.storage.sync.set({curimg: currentval});
  chrome.storage.sync.set({prv: currentval});
  document.getElementById("istattt").innerHTML = "Off"
}

input.addEventListener('input', updateValue);