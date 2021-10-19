const rootP = {
    run: function() {
        document.getElementById('app').innerHTML = `
            <p>selamat datang di update live app for android with droid script</p>
            <p>selamat datang di update live app for android with droid script</p>
            <p>selamat datang di update live app for android with droid script</p>
            <p>selamat datang di update live app for android with droid script</p>
            <p>selamat datang di update live app for android with droid script</p>
            <p>selamat datang di update live app for android with droid script</p>
            <p>selamat datang di update live app for android with droid script</p>
            <p>selamat datang di update live app for android with droid script</p>
            <p>selamat datang di update live app for android with droid script</p>
            <p>selamat datang di update live app for android with droid script</p>
            <p>selamat datang di update live app for android with droid script</p>
            <p>selamat datang di update live app for android with droid script</p>
            <p>selamat datang di update live app for android with droid script</p>
            <p>selamat datang di update live app for android with droid script</p>
            <p>selamat datang di update live app for android with droid script</p>
            <p>selamat datang di update live app for android with droid script</p>
            <p>selamat datang di update live app for android with droid script</p>
            <p>selamat datang di update live app for android with droid script</p>
            <p>selamat datang di update live app for android with droid script</p>
            <p>selamat datang di update live app for android with droid script</p>
            <p>selamat datang di update live app for android with droid script</p>
            <p>selamat datang di update live app for android with droid script</p>
            <p>selamat datang di update live app for android with droid script</p>
            <p>selamat datang di update live app for android with droid script</p>
            <p>selamat datang di update live app for android with droid script</p>
            <input type="text" class="form-control" placeholder="hold app" />
            <button id="exit-app">Exit App 2</button>
        `;

        setTimeout(function() {
            document.getElementById('exit-app').addEventListener('click', function(){
                ExitApp();
            },false)
        },100)


        return this;
    },
    runPage: function() {
        return this;
    }
};

rootP.run();