document.addEventListener('keydown', function (event) {
    if (event.key === 'F12' || (event.ctrlKey && event.shiftKey && event.key === 'I')) {
        event.preventDefault();
    }
});

document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
});

document.addEventListener('keydown', function (event) {
    if ((event.ctrlKey && event.shiftKey && (event.key === 'I' || event.key === 'J')) || 
        (event.ctrlKey && event.key === 'U')) {
        event.preventDefault();
    }
});

const devtools = () => {
    const element = new Image();
    Object.defineProperty(element, 'id', {
        get: function () {
            alert('DevTools đang được mở!');
        }
    });
    console.log(element);
};

setInterval(devtools, 1000);
