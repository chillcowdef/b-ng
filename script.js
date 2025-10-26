document.getElementById("open-button").addEventListener("click", function() {
    document.getElementById("intro-section").classList.add("hidden");
    document.getElementById("envelope-section").classList.remove("hidden");
    document.getElementById("envelope-section").classList.add("active");
});

document.getElementById("envelope").addEventListener("click", function() {
    document.getElementById("envelope-section").classList.add("hidden");
    document.getElementById("letter-section").classList.remove("hidden");
    document.getElementById("letter-section").classList.add("active");
});