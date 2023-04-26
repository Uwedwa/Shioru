const https = require("https");

module.exports = (client) => {
    // The following 4 are the actual values that pertain to your account and this specific metric.
    const apiKey = client.config.monitoring.config.apiKey;
    const pageId = client.config.monitoring.config.pageId;
    const metricId = client.config.monitoring.config.metricId;
    const enable = client.config.monitoring.enable;
    
    const apiBase = "https://api.statuspage.io/v1";
    const url = apiBase + "/pages/" + pageId + "/metrics/" + metricId + "/data.json";
    const authHeader = { "Authorization": "OAuth " + apiKey };
    const options = { "method": "POST", "headers": authHeader };

    // Need at least 1 data point for every 5 minutes.
    // Submit random data for the whole day.
    const totalPoints = 60 / 5 * 24;
    const epochInSeconds = Math.floor(new Date() / 1000);

    // This function gets called every second.
    const submitPoint = (count) => {
        count = count + 1;

        if (count > totalPoints) return client.console.succeed("monitor-loading", {
            "text": "Done, the matrix has been updated."
        });

        const currentTimestamp = epochInSeconds - (count - 1) * 5 * 60;
        const randomValue = Math.floor(Math.random() * 1000);

        const data = {
            "timestamp": currentTimestamp,
            "value": randomValue
        };

        const request = https.request(url, options, (response) => {
            if (response.statusMessage === "Unauthorized") {
                return client.console.fail("monitor-loading", {
                    "text": "Error encountered. Please ensure that your page code and authorization key are correct.",
                    "failColor": "yellowBright"
                });
            }
            response.on("data", () => {
                client.console.update("monitor-loading", {
                    "text": "Testing processing submitted point " + count + " of " + totalPoints
                });
            });
            response.on("end", () => {
                setTimeout(() => {
                    submitPoint(count);
                }, 1000);
            });
            response.on("error", (error) => {
                client.console.fail("monitor-loading", {
                    "text": "Error caught: " + error.message,
                    "failColor": "redBright"
                });
            });
        });

        request.end(JSON.stringify({ "data": data }));
    }

    // Initial call to start submitting data.
    if (client.mode === "start" && enable) {
        if (!apiKey) return client.console.fail("monitor-loading", {
            "text": "The monitor API Key was not found in the environment. Opt out of sending performance data.",
        });
        if (!pageId) return client.console.fail("monitor-loading", {
            "text": "The monitor page ID was not found in the environment. Opt out of sending performance data.",
        });
        if (!metricId) return client.console.fail("monitor-loading", {
            "text": "The monitor metric ID was not found in the environment. Opt out of sending performance data.",
        });

        client.console.add("monitor-loading", {
            "text": "Preparing to send data to matrix"
        });
        submitPoint(0);
    }
}