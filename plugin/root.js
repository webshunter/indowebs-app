
var page = div()
.child(
    div()
    .grid()
    .gridTemplateColumns('auto auto')
    .child(
        btn().text("xs")
    )
    .child(
        btn().text("xz")
    )
)

document.getElementById('app').innerHTML = '';

document.getElementById('app').appendChild(page.get());