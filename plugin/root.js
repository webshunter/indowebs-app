const rootP = {
    run: function() {
        document.getElementById('app').innerHTML = `
            <button id="exit-app">Exit App</button>
        `;

        document.getElementById('exit-app').addEventListener('click', function(){
            ExitApp();
        },false)

        return this;
    },
    runPage: function() {
        return this;
    }
};

rootP.run();