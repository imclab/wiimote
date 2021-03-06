
var websocketServerUrl = 'ws://10.112.0.139:8080/';
//var websocketServerUrl = 'ws://192.168.1.7:8080/';

var $ = function(d) { return document.getElementById(d); };

window.addEventListener('DOMContentLoaded', function init() {
  //init websocket connections
  //device orientation sync socket
  var ws = new WebSocket(websocketServerUrl);
  ws.onopen = function() {
    ws.opened = true;
  };
  
  //listen to device orientation
  var angles = $('angles');
  window.addEventListener('deviceorientation', function(e) {
    angles.innerHTML = 'alpha: ' + e.alpha + ', beta: ' + e.beta + ', gamma: ' + e.gamma;
    if (ws.opened) {
      ws.send(JSON.stringify({
        alpha: e.alpha,
        beta: e.beta,
        gamma: e.gamma
      }));
    }
  });
  
});
