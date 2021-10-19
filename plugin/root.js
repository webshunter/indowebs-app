const rootP = {
    run: function() {
        document.getElementById('app').innerHTML = 'text pertama dari auto update file';
        return this;
    },
    runPage: function() {
        return this;
    }
};

rootP.run();