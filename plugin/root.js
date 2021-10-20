
var page = div()
.width('100%')
.child(
    div()
    .css('display', 'grid')
    .css('grid-template-columns', 'auto auto auto')
    .child(
        btn().text("xs").padding('5px')
    )
    .child(
        btn().text("xz")
    )
    .child(
        btn().text("xz")
    )
)

document.getElementById('app').innerHTML = '';

document.getElementById('app').appendChild(page.get());