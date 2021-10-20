const rootP = {
    run: function() {

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
        document.getElementById('app').appendChild(page.get())
 
        return this;
    },
    runPage: function() {
        return this;
    }
};

rootP.run();