const intervalId = setInterval(() => {
    console.log('sending analytics data... ')
}, 2000);

document.getElementById('stop-analytics-button')
    .addEventListener('click', () => {
        clearInterval(intervalId);
})