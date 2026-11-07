'use strict';

// Prevent returning to the thank you page via Back button
history.pushState(null, null, location.href);

window.addEventListener("popstate", function () {
    window.location.replace("https://ruban-edward.github.io/");
});

// Automatic redirect after 3 seconds
setTimeout(() => {
    window.location.replace("https://ruban-edward.github.io/");
}, 3000);
