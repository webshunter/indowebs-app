// start container app

var page = div()
.width('calc(100vw - 40px)')
.padding('20px')


page.child(
    div().align('center')
    .child(
        span().text('CA Store')
    )
);

// search of product

page.child(
    input().width('100%')
    .padding('10px 20px')
    .css('border-radius', '20px')
    .css('outline', 'none')
    .marginTop('10px')
    .marginBottom('10px')
    .hold('ketik untuk mencari aksesoris atau baju.!!!')
);

// style of menu

var styleMenu = {
    
}

// grid menu of app

page.child(
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