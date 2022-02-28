let counter = 0;
process.on('message', (msg) => {
    counter = 0;
    console.log('Message from parent:', msg);
});
function sendResponse() {
    setTimeout(() => {
        if (counter <= 10) {
            process.send({ counter: counter++ });
            sendResponse();
        }
    }, 1000);
}
sendResponse();
//# sourceMappingURL=child.js.map