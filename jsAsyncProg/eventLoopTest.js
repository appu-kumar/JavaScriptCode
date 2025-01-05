/*
DOM and Events APIs
Document Object Model (DOM) API

Manipulate HTML and XML documents.
Examples: document.getElementById(), querySelector()
Event API

Handle user interactions and other events.
Examples: addEventListener(), removeEventListener()
Fetch and Network APIs
Fetch API

Make HTTP requests.
Example: fetch(url)
XMLHttpRequest

Older way to make HTTP requests.
WebSocket

Enable two-way communication between client and server.
Example: new WebSocket(url)

Storage APIs
LocalStorage
Store key-value pairs persistently.
Example: localStorage.setItem(key, value)

SessionStorage
Store key-value pairs for the session.
Example: sessionStorage.setItem(key, value)

IndexedDB
For larger, structured storage of data.
Example: indexedDB.open(dbName)

Cookies
Read, write, and manage cookies.
Graphics and Multimedia APIs
Canvas API

Create and manipulate 2D and 3D graphics.
Example: canvas.getContext('2d')
WebGL
Render 3D graphics.
Example: canvas.getContext('webgl')
Web Audio API
Process and synthesize audio.
Example: AudioContext
MediaDevices

Access camera and microphone.
Example: navigator.mediaDevices.getUserMedia()
Device and Sensors APIs
Geolocation API

Get user location.
Example: navigator.geolocation.getCurrentPosition()
Battery Status API

Get battery level and status.
Example: navigator.getBattery()
Vibration API

Trigger device vibration.
Example: navigator.vibrate(pattern)
Orientation and Motion API

Detect device orientation and motion.
Examples: DeviceOrientationEvent, DeviceMotionEvent
Notifications and Communication APIs
Notification API

Display system-level notifications.
Example: new Notification(title, options)
Push API

Push notifications to users.
Example: PushManager.subscribe()
BroadcastChannel API

Communicate between browsing contexts.
Example: new BroadcastChannel(name)
Performance and Optimization APIs
Performance API

Measure performance.
Example: performance.now()
Web Workers

Run JavaScript in background threads.
Example: new Worker(scriptURL)
Cache API

Manage caching for web apps.
Example: caches.open(name)
Security and Permissions APIs
Permissions API

Query and manage permissions.
Example: navigator.permissions.query(permissionName)
Credential Management API

Manage user credentials.
Example: navigator.credentials.get(options)
Other Browser APIs
WebRTC

Real-time communication (audio, video, and data).
Example: RTCPeerConnection
Clipboard API

Read from and write to the clipboard.
Examples: navigator.clipboard.readText(), writeText(text)
File API

Interact with files on the user’s device.
Example: FileReader
Drag and Drop API

Enable drag-and-drop functionality.
Example: ondragstart, ondrop
History API

Manage browser session history.
Examples: history.pushState(), history.replaceState()
Fullscreen API

Enable full-screen mode for elements.
Example: element.requestFullscreen()
Gamepad API

Access connected game controllers.
Example: navigator.getGamepads()
Payment Request API

Handle online payments.
Example: new PaymentRequest(methodData, details)
These APIs empower developers to create interactive, efficient, and feature-rich web applications. Let me know if you'd like detailed explanations or examples for any specific API!


*/
console.log("start");

// // SetTimeout web api example
/* setTimeout(()=>{                     // this callback will be put inside the callstack by the eventloop program, it will be executed after 3 seconds

     console.log('inside settime out')

 },3000)   */

// dom web api example   // again eventloop will put the cb inside the callstack
document.getElementById("clickMe").addEventListener("click", () => {
  console.log("clicked");
});

/// Location web api
// console.log(location);
// console.log(location.pathname);
// console.log(location.protocol);
// console.log(location.origin);
// console.log(location.port);

/// this will do network call and it will be put inside the micro task queue it is like callback queue but eventLoop gives more priority over microtask queue
function showTodos() {
  document.getElementById("clickMe").addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);   // data is object okay conver into array then use array methods.
        const todosShow = document.getElementById("show");
        const ul = document.createElement("ul");
        ul.classList.add('todos');
        Object.entries(data).forEach((todo, idx) => {

          const li = document.createElement("li");
          const span1 = document.createElement('span');
          const span2 = document.createElement('span');
          console.log('todo', todo)
        //   console.log(todo.title);
          span1.textContent = todo[0]
          span2.textContent = todo[1]
          li.append(span1,span2)
          ul.appendChild(li);
        });

        todosShow.appendChild(ul);
      });
  });
}
showTodos();

console.log("end");
