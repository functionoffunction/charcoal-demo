
function isExpandedCC() {
    return getAriaExpanded("cc") == "true"
}

function getAriaExpanded(id) {
    return document.getElementById(id).getAttribute('aria-expanded');
}

function charcoalChecked() {
    return getAriaExpanded("charcoal") == "true"
}

function handleSubmit(e) {
    document.getElementById('card-alert').classList.remove("show")
    if (isExpandedCC()){
        document.getElementById('card-alert').classList.add("show")
    }
    
    if (charcoalChecked()) {
        window.location.replace("./charcoal.html");
    }
}


setTimeout(function () {
    // "Pay &#8358;7,500 with Charcoal <img class="icon" src="images/charcoal.png" alt="">"
    let charcoalPricingContent= document.createElement("span")
    let charcoalLogo = document.createElement("img")
    charcoalLogo.classList = "icon"
    charcoalLogo.src = "images/charcoal.png"
    const charcoalText = "Pay &#8358;7,500 with Charcoal"
    charcoalPricingContent.innerHTML = charcoalText
    charcoalPricingContent.appendChild(charcoalLogo)
    document.getElementById("charcoal-text").appendChild(charcoalPricingContent)
}, 1000);
