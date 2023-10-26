const flowRateElement = document.getElementById('flow-rate');
const alertsElement = document.getElementById('alerts');
const startButton = document.getElementById('start-fountain');
const stopButton = document.getElementById('stop-fountain');

// Simulate real-time data
function simulateData() {
    setInterval(() => {
        const flowRate = (Math.random() * 10).toFixed(2); // Replace with actual data retrieval
        flowRateElement.textContent = flowRate + ' LPM';

        const hasAlert = Math.random() > 0.9; // Simulate malfunction alerts
        if (hasAlert) {
            alertsElement.textContent = 'Malfunction Detected!';
            alertsElement.style.color = 'red';
        } else {
            alertsElement.textContent = 'No alerts';
            alertsElement.style.color = 'green';
        }
    }, 2000); // Update data every 2 seconds (adjust as needed)
}

// Event listener for starting the fountain
startButton.addEventListener('click', () => {
    // Implement logic to start the fountain here
    alertsElement.textContent = 'Fountain Started';
    alertsElement.style.color = 'green';
});

// Event listener for stopping the fountain
stopButton.addEventListener('click', () => {
    // Implement logic to stop the fountain here
    alertsElement.textContent = 'Fountain Stopped';
    alertsElement.style.color = 'red';
});

// Start simulating data
simulateData();

