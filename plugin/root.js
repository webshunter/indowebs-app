const rootP = {
    run: function() {
        app.Alert('ok');
        return this;
    },
    runPage: function() {
        return this;
    }
};

rootP.run();