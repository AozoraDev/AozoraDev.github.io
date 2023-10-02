const observer = new IntersectionObserver(handleIntersection, { threshold: 0.2 });
const containers = document.querySelectorAll(".container-md");
const loading = document.querySelector("#loading");

document.body.style.overflow = "hidden";
window.onload = function() {
    // Why timeout? because f#ck you.
    setTimeout(function() {
        loading.classList.add("hide");
        document.body.style = "";
        
        // This for observing the section
        containers.forEach(function(container) {
            observer.observe(container);
        });
        
        // This for the waifu section
        new IntersectionObserver(waifuObserver, { threshold: 0.7 })
        .observe(document.querySelector("#waifu"));
    }, 1000);
}

///////////////
// FUNCTIONS //
///////////////

// Handle section
function handleIntersection(entries, observer) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            const target = entry.target;
            target.classList.add("show");
            
            if (target.id == "skills") {
                const progresses = target.querySelectorAll(".progress");
                progresses.forEach(progressAnimate);
            }
            
            observer.unobserve(target);
        }
    });
}

// Handle waifu
function waifuObserver ([entry], observe) {
    const target = entry.target.querySelector("img");
    
    if (entry.isIntersecting) {
        target.classList.add("animate");
        // observe.unobserve(target);
    } else {
        target.classList.remove("animate");
    }
}

function progressAnimate(progress, index) {
    const value = progress.getAttribute("aria-valuenow");
    const bar = progress.firstElementChild;
    
    setTimeout(function() {
        bar.style = "width: " + value + "%;";
    }, 100 * (index + 1));
}