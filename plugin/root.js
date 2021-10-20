// start container app

var page = div()
.width('calc(100vw - 40px)')
.padding('20px')

// search of product

.child(
    input().width('100%')
    .padding('10px')
    .css('border-radius', '20px')
    .css('outline', 'none')
    .marginTop('10px')
    .marginBottom('10px')
    .hold('ketik untuk mencari aksesoris atau baju.!!!')
)

// grid menu of app

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