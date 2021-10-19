const rootP = {
    run: function() {

        var page = div()
        .child(
            div().text("fell like a hmmm")
        )
        .child(
            btn().text("btn exit")
            .click(function(){
                ExitApp()
            })
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