// 3

for (var i = 0; i < 10; i++)
    console.log (
        " ".repeat (10 - i) + "*".repeat (i * 2 + 1)
    );

for (var i = 10; -1 < i; i--)
    console.log (
        " ".repeat (10 - i) + "*".repeat (i * 2 + 1)
    );

function doSomethingEvil(url) {
    console.log('log something')
    window.location.href = url
}