//first we want to wait for PhoneGap to load
document.addEventListener("deviceready", loaded, false)

//PhoneGap is loaded
function loaded(){
	startWatch();
}

function startWatch() {

// Update acceleration every 3 seconds
var options = { frequency: 3000 };

watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
}

// Stop watching the acceleration
function stopWatch() {
    if (watchID) {
        navigator.accelerometer.clearWatch(watchID);
        watchID = null;
    }
}

//Get the current Acceleration data if Successful
function onSuccess(acceleration){  
	var element = document.getElementById('accelerometer');
    element.innerHTML = 'Acceleration X: ' + acceleration.x + '<br />' +
                        'Acceleration Y: ' + acceleration.y + '<br />' +
                        'Acceleration Z: ' + acceleration.z + '<br />' +
                        'Timestamp: '      + acceleration.timestamp + '<br />';
}

// alert if there is an error
function onError(){
	alert("Error");
}