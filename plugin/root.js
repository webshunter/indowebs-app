var page = div()
.width('100vw')
.child(
    input().width('100%')
    .padding('10px')
    .css('border-radius', '20px')
    .marginTop('10px')
    .marginBottom('10px')
    .hold('ketik untuk mencari aksesoris atau baju.!!!')
)
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