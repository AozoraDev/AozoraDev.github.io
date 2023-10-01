const observer = new IntersectionObserver(handleIntersection, { threshold: 0.2 });
const containers = document.querySelectorAll(".container-md");
const loading = document.querySelector("#loading");

document.body.style.overflow = "hidden";
window.onload = function() {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach(function(ele) {
        const tooltip = new bootstrap.Tooltip(ele);
        const token = ele.getAttribute("data-address");
        
        ele.addEventListener("show.bs.tooltip", function() {
            navigator.clipboard.writeText(token);
            setTimeout(function() {
                tooltip.hide();
            }, 1000);
        });
    });
    
    setTimeout(function() {
        loading.classList.add("hide");
        document.body.style = "";
        
        containers.forEach(function(container) {
            observer.observe(container);
        });
        
        new IntersectionObserver(waifuObserver, { threshold: 0.7 })
        .observe(document.querySelector("#waifu"));
    }, 1000);
}

///////////////
// FUNCTIONS //
///////////////
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

function waifuObserver ([entry], observe) {
    const target = entry.target.querySelector("img");
    
    if (entry.isIntersecting) {
        target.classList.add("animate");
        observe.unobserve(target);
    }
}

function progressAnimate(progress, index) {
    const value = progress.getAttribute("aria-valuenow");
    const bar = progress.firstElementChild;
    
    setTimeout(function() {
        bar.style = "width: " + value + "%;";
    }, 100 * (index + 1));
}