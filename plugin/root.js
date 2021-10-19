const rootP = {
    run: function() {

        var page = div().text('element app here');


        document.getElementById('app').innerHTML = '';
        document.getElementById('app').appendChild(page.get())

        return this;
    },
    runPage: function() {
        return this;
    }
};

rootP.run();