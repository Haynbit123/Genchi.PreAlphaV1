document.addEventListener('DOMContentLoaded', function() {
    const webhookUrl = 'https://discord.com/api/webhooks/1308783365817765928/0e9gMELASsfPUDjrB-XX4pJNASPpeQh6koXfqI71CMaNHEjBpOOyrLqUrh1ASk3yWmUE'; // Replace with your webhook URL

    function openRatingModal() {
        const rating = prompt("Please rate us from 1 to 5 stars:");
        if (rating) {
            sendRating(rating);
        }
    }

    function sendRating(rating) {
        fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                content: `Rating: ${rating} stars`
            })
        });
    }

    window.openRatingModal = openRatingModal; // Expose the function to the global scope
});
