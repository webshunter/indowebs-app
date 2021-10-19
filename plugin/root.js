const rootP = {
    run: function() {
        document.getElementById('app').innerHTML = 'update ke dua';
        return this;
    },
    runPage: function() {
        return this;
    }
};

rootP.run();