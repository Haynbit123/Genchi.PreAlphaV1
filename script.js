document.addEventListener('DOMContentLoaded', function() {
    const webhookUrl = 'https://discord.com/api/webhooks/1308783365817765928/0e9gMELASsfPUDjrB-XX4pJNASPpeQh6koXfqI71CMaNHEjBpOOyrLqUrh1ASk3yWmUE'; // Your Discord webhook URL

    function openRatingModal() {
        const name = prompt("Please enter your name:");
        if (name) {
            const rating = prompt("Please rate us from 1 to 5 stars:");
            if (rating) {
                sendRating(name, rating);
            }
        }
    }

    function sendRating(name, rating) {
        fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                embeds: [{
                    title: "New Rating Received",
                    description: `${name} rated ${rating} stars`,
                    color: 15258703 // You can choose any hex color
                }]
            })
        });
    }

    window.openRatingModal = openRatingModal; // Expose the function to the global scope
});
