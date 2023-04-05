
var obs = new MutationObserver(function (mutations, observer) {
    const doge = document.getElementsByClassName("css-1dbjc4n r-dnmrzs r-1vvnge1");
    doge[0].remove()
    obs.disconnect();
});
obs.observe(document.body, { childList: true, subtree: true, attributes: false, characterData: false });
