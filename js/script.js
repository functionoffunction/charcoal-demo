function isExpandedCC() {
    return document.getElementById('cc').getAttribute('aria-expanded')
}

function charcoalChecked() {
    return document.getElementById('charcoal').checked
}

function handleSubmit(e) {
    document.getElementById('card-alert').classList.remove("show")
    if (isExpandedCC() == "true"){
        document.getElementById('card-alert').classList.add("show")
    }

    if (charcoalChecked()) {
        window.location.replace("/charcoal.html");
    }
}