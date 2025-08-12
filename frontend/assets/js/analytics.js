function trackEvent(eventType, pageUrl) {
    fetch("http://analytics-service/api/events", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            event_type: eventType,
            page_url: pageUrl,
            user_agent: navigator.userAgent,
        }),
    }).catch((error) => {
        console.error("Analytics event failed:", error);
    });
}

document.addEventListener("DOMContentLoaded", function () {
    trackEvent("page_view", window.location.href);

    document.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            trackEvent("click", window.location.href);
        });
    });
});
