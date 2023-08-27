const observer = new IntersectionObserver(handleIntersection, { threshold: 0.2 });
const containers = document.querySelectorAll(".container");
const loading = document.querySelector("#loading");

window.onload = function() {
    setTimeout(function() {
        loading.classList.add("hide");
        containers.forEach(function(container) {
            observer.observe(container);
        });
    }, 1000);
}

///////////////
// FUNCTIONS //
///////////////
function handleIntersection(entries, observer) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}