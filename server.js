const {exec} = require('child_process');
setTimeout(() => {
console.log('I DID IT FR')
}, 5000);
let lag = new Date().getTime();
let lag2 = 0;
let amt = 0;
let avgserverspeed = 944;
let serverspeed = "";
let newFileID = "";
let newFileName = "";
/* Thanks to google AI for this function! */
function lagg(intensity) {
  if (intensity <= 1) return 1;
  return lagg(intensity - 1) + lagg(intensity - 2);
}
/* This is all; the code below is coded by me! :trust: */
setInterval(() => {
  if (amt !== 944) {
    amt += 1;
  }
}, 0);
/*setInterval(() => {
  serverspeed = ((100 * amt) / avgserverspeed).toFixed(1) + "%";
  console.log(serverspeed);
  //console.log(amt);
  if (amt > avgserverspeed) {
    avgserverspeed = amt;
  }
  amt = 0;
}, 1000);*/
setInterval(() => {
  serverspeed = ((100 * amt) / avgserverspeed).toFixed(1) + "%";
  console.log(serverspeed);
  amt = 0;
}, 1000);
const http = require("http");
const WebSocket = require("ws");
let views = require("./views.js");
let mess = require("./messages.js");
let questions = ``;
let logs = ``;
exec;
let users = [];
let view;
let updateCount = () => {};
let startTime = new Date();
let time = ["00", "00", "00"];
/*let time = ["00", "00", "00", "00"];
let realtime = "00:00:00:00";
setInterval(() => {
  time[3] = String(
    `${
      String(Number(time[3])).length === 1 && String(Number(time[3])) !== "9"
        ? "0" + String(Number(time[3]) + 1)
        : String(Number(time[3]) + 1)
    }`
  );
  if (time[3] === "60") {
    time[2] = String(
      `${
        String(Number(time[2])).length === 1 && String(Number(time[2])) !== "9"
          ? "0" + String(Number(time[2]) + 1)
          : String(Number(time[2]) + 1)
      }`
    );
    time[3] = "00";
  }
  if (time[2] === "60") {
    time[1] = String(
      `${
        String(Number(time[1])).length === 1 && String(Number(time[1])) !== "9"
          ? "0" + String(Number(time[1]) + 1)
          : String(Number(time[1]) + 1)
      }`
    );
    time[3] = "00";
    time[2] = "00";
  }
  if (time[1] === "24") {
    time[0] = String(
      `${
        String(Number(time[0])).length === 1 && String(Number(time[0])) !== "9"
          ? "0" + String(Number(time[0]) + 1)
          : String(Number(time[0]) + 1)
      }`
    );
    time[3] = "00";
    time[2] = "00";
    time[1] = "00";
  }
  realtime = time.join(":");
}, 1000);*/
/*setInterval(() => {
  let timingnow = new Date();
  let hrsnow = timingnow.getHours();
  let minsnow = timingnow.getMinutes();
  let secsnow = timingnow.getSeconds();
  let hrs = startTime.getHours();
  let mins = startTime.getMinutes();
  let secs = startTime.getSeconds();
  time[0] = `${
    String(hrsnow - hrs).length === 1
      ? "0" + String(hrsnow - hrs)
      : String(hrsnow - hrs)
  }`;
  time[1] = `${
    String(minsnow - mins).length === 1
      ? "0" + String(minsnow - mins)
      : String(minsnow - mins)
  }`;
  time[2] = `${
    String(secsnow - secs).length === 1
      ? "0" + String(secsnow - secs)
      : String(secsnow - secs)
  }`;
  //console.log(String(hrsnow - hrs)+':'+String(minsnow - mins)+':'+String(secondsnow - seconds))
}, 1000);*/
view = views.views;
const fs = require("fs");
/*process.on("uncaughtException", () => {
  console.log("error!");
});*/
let videothing = "";
let files = {};
let ids = [];
// --- HTTP Server ---
const server = http.createServer((req, res) => {
  let sn = new Date();
  let a = sn.getDate();
  let b = sn.getMonth();
  // works?
/*function dbs() {
let dab = new WebSocket("ws://fi11.bot-hosting.net:20604/");
dab.on('open', () => {
let g = Number(Math.floor(Date.now() - startTime.getTime())) / 1000;
          let days = 0;
          let hrs = 0;
          let mins = 0;
          let secs = 0;
          for (let i = 0; i < g; i++) {
            secs += 1;
            if (secs === 60) {
              mins += 1;
              secs = 0;
            }
            if (mins === 60) {
              hrs += 1;
              mins = 0;
            }
            if (hrs === 24) {
              days += 1;
              hrs = 0;
            }
          }
          let date =
            String(startTime).split(" ")[0] +
            ", " +
            String(startTime).split(" ")[1] +
            " " +
            String(startTime).split(" ")[2] +
            ", " +
            String(startTime).split(" ")[3];

setInterval(() => {
dab.send(JSON.stringify({ type: "ping", data: `I HAVE BEEN UP FOR ${
                days > 0
                  ? `${days > 9 ? String(days) : "0" + String(days)}:`
                  : ``
              }${hrs > 9 ? String(hrs) : "0" + String(hrs)}:${
                mins > 9 ? String(mins) : "0" + String(mins)
              }:${secs > 9 ? String(secs) : "0" + String(secs)}` }));
}, 5000);
})
dab.on('close', () => {
dbs()
})
}
dbs()*/
  if (req.url.startsWith('/alive')) {
  res.end('YES BRO IM ALIVE')
  } else if (req.url.startsWith("/file:")) {
    // CREDITS TO GEMINI FOR HELPING ME FIX THE FORWARD-SCRUBBING ISSUE.
    const fileKey = req.url.substring(6);
    const file = files[fileKey];

    if (!file) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      return res.end("File not found");
    }

    const buffer = file.data;
    const fileSize = buffer.length;
    const range = req.headers.range;

    // IF THE BROWSER REQUESTS A SPECIFIC CHUNK (Seeking/Rewinding)
    if (range) {
      const parts = range.replace(/bytes=/, "").split("-");
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
      const chunkSize = end - start + 1;
      console.log(chunkSize);

      // Slice out the exact section of the video from memory
      const chunk = buffer.slice(start, end + 1);

      res.writeHead(206, {
        "Content-Range": `bytes ${start}-${end}/${fileSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": chunkSize,
        "Content-Type": file.type,
      });

      res.write(chunk);
      return res.end();
    } else {
      // IF THE BROWSER WANTS THE WHOLE FILE
      res.writeHead(200, {
        "Content-Length": fileSize,
        "Content-Type": file.type,
      });
      res.write(buffer);
      return res.end();
    }

    /* THIS WAS MY CODE (MY IDEA):
  res.writeHead(200, { "Content-Type": files[req.url.substring(6)].type });
  res.write(files[req.url.substring(6)].data);
  res.end();
  IT'S MAJOR FLAW: IT DIDN'T ENABLE USER TO FORWARD-BACKWARD.*/
  } else if (req.url === "/onlineusers") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<!DOCTYPE html>
    <head>
    <meta charset="UTF-8">
  <meta name="viewport" content="initial-scale=1.0, width=device-width">
    <style>
    td, th {
      border: 1px solid;
      border-color: grey;
      background-color: lightgrey;
      }
      body {
      font-family: sans-serif;
      }
    </style>
    </head>
    <body>
    <table>
<tr> <th>Name</th> <th>IP Address</th> <th>Timing</th> </tr>
${users.join("")}
</table>
<small>Users online will be visible here.</small>
<br>
<small>Please note that users online only show clients who have entered the chatroom with a name.</small>
<br>
<small>IP addresses are considered sensitive information, as it is NEVER recommended to share someone's ip without their permission, not even to the person himself.</small>
    </body>`);
  } else if (req.url.startsWith("/savedchats")) {
    let id = req.url.substring(12);
    if (id === "savedchat-1") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(`<html><head>
    <meta charset="UTF-8">
    <meta name="viewport" content="initial-scale=1.0, width=device-width">
    <style>
    body {
    font-family: sans-serif;
    overflow-x: 'hidden';
    }
    .confetti {
      animation: confett linear;
      background-color: red;
      position: absolute;
      top: -10px;
      left: -10px;
      width: 10px;
      height: 10px;
      transform: rotate(0deg);
      }
      @keyframes confett {
      to {
      transform: translateY(100vh);
      opacity: 0;
      }
      }
      #chat {
      overflow-y: scroll;
      overflow-wrap: break-word;
      }
    </style>
    </head>
    <body>
    <span style="position: fixed; font-family: sans-serif; user-select: none; transition: 0.5s; opacity: 0; transform: translate(-50%, -50%) scale(1.5); text-align: center; top: 50%; left: 50%; z-index: 100;" id="intro" hidden=""><b style="font-size: 30px;">Chat room - <span id="county" style="transition: 0.3s">189</span> Visits</b><br><span id="okay">You have been muted. Please wait.</span> <span id="limit" style="transition: 0.5s;">(?/25)</span><br><input placeholder="Name..." id="name" maxlength="25" size="15" disabled=""><button id="join">Join</button><button id="spectate" hidden="">Spectate</button></span>
    <div id="rest" style="transition: 0.5s; opacity: 1;">
    <center><big><big><big><big><b>Chat Room - <span id="county2" style="transition: 0.3s">189</span> Visits</b></big></big></big></big></center>
    <div id="chat">
    <div id="messages"><span style="opacity: 1; transition: 0.3s;"><br><span style="color: green;"><b>Chat Room Broadcast</b></span><span>: <b>Esclippy990</b> has joined the chat! Total users: 1</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:35:21">10:35</span></small></small></span></span><span style="opacity: 1; transition: 0.3s;"><br><span style="color: green;"><b>Chat Room Broadcast</b></span><span>: <b>Satej Prabhupatkar </b> has joined the chat! Total users: 2</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:37:30">10:37</span></small></small></span></span><span id="434502339717612" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: asd</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:37:31">10:37</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span id="7487170032523103" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: basssssssss</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:37:34">10:37</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span id="14283012785116211" style="opacity: 1; transition: 0.3s;"><br><span><b>Satej Prabhupatkar </b></span><span>: Hi</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:37:36">10:37</span></small></small></span></span><span id="3407075163045121" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: now i'll check the logs</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:37:39">10:37</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span id="8201701205080876" style="opacity: 1; transition: 0.3s;"><br><span><b>Satej Prabhupatkar </b></span><span>: Ich bin hier</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:37:42">10:37</span></small></small></span></span><span id="94980531460899" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: stay for 1 sec</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:37:45">10:37</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span id="879252644151119" style="opacity: 1; transition: 0.3s;"><br><span><b>Satej Prabhupatkar </b></span><span>: Ja</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:37:50">10:37</span></small></small></span></span><span id="5616524955125857" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: ja ich weisse</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:37:51">10:37</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span id="8675425875875686" style="opacity: 1; transition: 0.3s;"><br><span><b>Satej Prabhupatkar </b></span><span>: Ich weiß</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:38:04">10:38</span></small></small></span></span><span id="9725281787841866" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: it works</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:38:09">10:38</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span id="24415339174466966" style="opacity: 1; transition: 0.3s;"><br><span><b>Satej Prabhupatkar </b></span><span>: Good</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:38:14">10:38</span></small></small></span></span><span id="07953224432111439" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: yea there isn't the 'SSET'</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:38:18">10:38</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span id="4345406619303591" style="opacity: 1; transition: 0.3s;"><br><span><b>Satej Prabhupatkar </b></span><span>: Prima Aditya</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:38:28">10:38</span></small></small></span></span><span id="7234922360308005" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: ?</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:38:36">10:38</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span id="2847373033512717" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: Prima..?</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:38:39">10:38</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span id="14531896490670637" style="opacity: 1; transition: 0.3s;"><br><span><b>Satej Prabhupatkar </b></span><span>: Du hast toll gemacht</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:38:51">10:38</span></small></small></span></span><span id="05248729918262063" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: 2a02:8108:950a:f001:d8e8:b536:638c:3f66 is your ip</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:38:51">10:38</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span id="44442967772626174" style="opacity: 1; transition: 0.3s;"><br><span><b>Satej Prabhupatkar </b></span><span>: Prima bhul gaya?</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:39:01">10:39</span></small></small></span></span><span id="8183605285190039" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: yes</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:39:05">10:39</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span id="9036710593220181" style="opacity: 1; transition: 0.3s;"><br><span><b>Satej Prabhupatkar </b></span><span>: Super excellent</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:39:08">10:39</span></small></small></span></span><span id="43259565178665715" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: actually uhhhhhh yea</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:39:09">10:39</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span id="001624171393585172" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: ohhhhhhhhh</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:39:11">10:39</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span id="8350764192059736" style="opacity: 1; transition: 0.3s;"><br><span><b>Satej Prabhupatkar </b></span><span>: Tuze woh Herr kandel ne bola tha</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:39:31">10:39</span></small></small></span></span><span id="42848249902554825" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: uhh yeah</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:39:40">10:39</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span id="22730535374720606" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: i remember now</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:39:47">10:39</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span id="311207782555041" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: hey did you know</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:39:52">10:39</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span id="5537779295694214" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: https://chatroom-toz6.onrender.com//logs</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:39:55">10:39</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span id="8488634951068894" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: it shows all the info about what you do</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:40:03">10:40</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span id="6937820785986195" style="opacity: 1; transition: 0.3s;"><br><span><b>Satej Prabhupatkar </b></span><span>: Ho gaya Tera kam?</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:40:07">10:40</span></small></small></span></span><span id="5569635509776876" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: highlight the link and open it in new tab</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:40:11">10:40</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span id="24495482525499046" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: it's rly cool</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:40:14">10:40</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span id="47705242503472967" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: this</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:40:39">10:40</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span><span><br><details style="user-select: none;"><summary>Screenshot 2026-03-08 104020.png</summary><sub><img src="https://raw.githubusercontent.com/Esclippy990/yayayx/refs/heads/main/f1ac659b-eba0-4030-8065-1e85b36a7379.png" style="width: 250px;"><br><br><small>We are not responsible for any harm caused to your device by downloading any files.<br><br><a download="Screenshot 2026-03-08 104020.png" href="https://raw.githubusercontent.com/Esclippy990/yayayx/refs/heads/main/f1ac659b-eba0-4030-8065-1e85b36a7379.png">Download file</a></small></sub></details></span></span><span id="5289646107691812" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: elo?</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:40:50">10:40</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span id="8107426402976396" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: hello?*</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:40:55">10:40</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span id="8529042688626767" style="opacity: 1; transition: 0.3s;"><br><span><b>Satej Prabhupatkar </b></span><span>: Ohh yes</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:41:02">10:41</span></small></small></span></span><span id="4247096150119589" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: why is it so small :((</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:41:11">10:41</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span id="14629299361881176" style="opacity: 1; transition: 0.3s;"><br><span><b>Satej Prabhupatkar </b></span><span>: I see it who joined or left </span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:41:13">10:41</span></small></small></span></span><span id="7526820345761973" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: yea</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:41:17">10:41</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span id="42866260203317075" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: that's the new feature i wanted to try out</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:41:27">10:41</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span id="2678069964126255" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: everytime i had to retrieve a person's ip,</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:41:34">10:41</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span id="8333948833958664" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: i would have to go into the server logs</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:41:39">10:41</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span id="8958839720858982" style="opacity: 1; transition: 0.3s;"><br><span><b>Satej Prabhupatkar </b></span><span>: Could be because of the size</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:41:40">10:41</span></small></small></span></span><span id="0663310442959173" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: but now i can retrieve it easily from there</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:41:49">10:41</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span id="951428297068563" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: also when a ip is detected as a VPN, it gets blocked</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:42:04">10:42</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span id="9755318289823687" style="opacity: 1; transition: 0.3s;"><br><span><b>Satej Prabhupatkar </b></span><span>: Ye</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:42:05">10:42</span></small></small></span></span><span id="24418904850531553" style="opacity: 1; transition: 0.3s;"><br><span><b>Satej Prabhupatkar </b></span><span>: Ohh </span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:42:12">10:42</span></small></small></span></span><span id="22923898583459978" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: like server IP's, VPN's, known abusers' ips</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:42:24">10:42</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span id="2786221818523773" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: attackers' ips</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:42:30">10:42</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span id="5813195978718313" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: there's this thing named IPdata</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:42:43">10:42</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span id="347662466059516" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: hey you know what happens when you spam..?</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:42:51">10:42</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span id="9107841425438077" style="opacity: 1; transition: 0.3s;"><br><span><b>Satej Prabhupatkar </b></span><span>: 👍</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:42:51">10:42</span></small></small></span></span><span id="7196248807308636" style="opacity: 1; transition: 0.3s;"><br><span><b>Satej Prabhupatkar </b></span><span>: No</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:43:06">10:43</span></small></small></span></span><span id="9183116825408997" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: when you spam here</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:43:07">10:43</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span id="3399750013624949" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: w</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:43:08">10:43</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span id="8179594788152238" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: w</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:43:08">10:43</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span id="4388650610133469" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: w</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:43:08">10:43</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span style="opacity: 1; transition: 0.3s;"><br><span style="color: orange;"><b>Moderation Bot</b></span><span>: <b>Esclippy990</b> has been muted for 20 seconds. Reason: Potential spam.</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:43:08">10:43</span></small></small></span></span><span id="478111130814014" style="opacity: 1; transition: 0.3s;"><br><span><b>Satej Prabhupatkar </b></span><span>: Ohhh</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:43:18">10:43</span></small></small></span></span><span id="17115403801435813" style="opacity: 1; transition: 0.3s;"><br><span><b>Satej Prabhupatkar </b></span><span>: Super</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:43:28">10:43</span></small></small></span></span><span id="8761155242037706" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: yeah</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:43:32">10:43</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span id="14840578212957944" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: now if i spam again,</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:43:37">10:43</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span id="23151215467086605" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: it will mute me for 30 seconds</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:43:42">10:43</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span id="6672335105124476" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: then 40 seconds</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:43:45">10:43</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span id="8303542458923068" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: the count goes up by 10 every time</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:43:54">10:43</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span id="8367920706040655" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: and i can mute you too</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:44:06">10:44</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span id="8808613881305509" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: you know that..?</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:44:12">10:44</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span id="30206566812574565" style="opacity: 1; transition: 0.3s;"><br><span><b>Satej Prabhupatkar </b></span><span>: Ohh ok</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:44:14">10:44</span></small></small></span></span><span id="8980695350105197" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: wanna see how</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:44:18">10:44</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span id="2995611298894387" style="opacity: 1; transition: 0.3s;"><br><span><b>Satej Prabhupatkar </b></span><span>: Nope</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:44:19">10:44</span></small></small></span></span><span id="613852286920203" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: "/mute &lt;user id&gt;&amp;r=&lt;reason&gt;&amp;d=&lt;duration&gt;"</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:44:34">10:44</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><br><span>ID = <span style="user-select: all">012980269435038716</span>.</span><br><span><b style="color: green;">Eval Output [1772963106685]: </b><span>[object Object],[object Object],[object Object],[object Object],[object Object]</span><small style="color: grey; cursor: pointer;">&nbsp;• Dismiss</small></span><span id="21336673527956762" style="opacity: 1; transition: 0.3s;"><br><span><b>Satej Prabhupatkar </b></span><span>: But to mute it need to talk first isn't  it?</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:45:21">10:45</span></small></small></span></span><br><span><b style="color: green;">Eval Output [1772963122925]: </b><span>undefined</span><small style="color: grey; cursor: pointer;">&nbsp;• Dismiss</small></span><span id="8855111939098412" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: uhh no</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:45:34">10:45</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span id="9801851728751612" style="opacity: 1; transition: 0.3s;"><br><span><b>Satej Prabhupatkar </b></span><span>: In chat how can you mute</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:45:39">10:45</span></small></small></span></span><span id="7885757469296342" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: also there's /broadcast i think</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:45:42">10:45</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span id="888301350370724" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: i think it's there</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:45:48">10:45</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span style="opacity: 1; transition: 0.3s;"><br><span style="color: green;"><b>Chat Room Broadcast</b></span><span>: works?</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:45:53">10:45</span></small></small></span></span><span id="6982372515923763" style="opacity: 1; transition: 0.3s;"><br><span><b>Satej Prabhupatkar </b></span><span>: Ok</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:45:54">10:45</span></small></small></span></span><span id="4751334378859866" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: it works! :D</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:45:59">10:45</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span id="0883271533549197" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: but why isn't muting you working</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:46:14">10:46</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span id="4238334911618611" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: wait a minute</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:46:22">10:46</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span id="20463517983083213" style="opacity: 1; transition: 0.3s;"><br><span><b>Satej Prabhupatkar </b></span><span>: Ok</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:46:28">10:46</span></small></small></span></span><span style="opacity: 1; transition: 0.3s;"><br><span style="color: green;"><b>Chat Room Broadcast</b></span><span>: <b>Test</b> has joined the chat! Total users: 3</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:46:35">10:46</span></small></small></span></span><br><span>ID = <span style="user-select: all">4719964415822675</span>.</span><span style="opacity: 1; transition: 0.3s;"><br><span style="color: orange;"><b>Moderation Bot</b></span><span>: <b>Test</b> has been muted for 9 seconds. Reason: Test</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:46:59">10:46</span></small></small></span></span><span id="34446967607293777" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: like that</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:47:03">10:47:03</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span id="8654541957469062" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: it works like that</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:47:07">10:47</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span id="26499793234672153" style="opacity: 1; transition: 0.3s;"><br><span><b>Satej Prabhupatkar </b></span><span>: Ok</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:47:14">10:47</span></small></small></span></span><span id="6925577144497272" style="opacity: 1; transition: 0.3s;"><br><span><b>Satej Prabhupatkar </b></span><span>: I see now</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:47:19">10:47</span></small></small></span></span><br><span>ID = <span style="user-select: all">6324274594298849</span>.</span><span id="08102391945444842" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: ohh got it</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:47:31">10:47</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span id="12349423506303547" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: got your id</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:47:33">10:47</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span id="8649647041729374" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: wanna see how i can mute you</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:47:43">10:47</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span id="6673735865253807" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: and how it look like</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:47:47">10:47</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span id="5956046505873283" style="opacity: 1; transition: 0.3s;"><br><span><b>Satej Prabhupatkar </b></span><span>: Yes</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:47:48">10:47</span></small></small></span></span><span id="5856439654265784" style="opacity: 1; transition: 0.3s;"><br><span><b>Satej Prabhupatkar </b></span><span>: Ghh</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:47:58">10:47</span></small></small></span></span><span id="935867057185005" style="opacity: 1; transition: 0.3s;"><br><span><b>Satej Prabhupatkar </b></span><span>: Hv</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:48:02">10:48</span></small></small></span></span><span style="opacity: 1; transition: 0.3s;"><br><span style="color: orange;"><b>Moderation Bot</b></span><span>: <b>Satej Prabhupatkar </b> has been muted for 5 seconds. Reason: Daddy!</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:48:02">10:48</span></small></small></span></span><span id="91379375177785" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: after 5 seconds you will be able to chat again</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:48:17">10:48</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span id="8026388636847517" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: it works?</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:48:28">10:48</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span id="7784696686394812" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: i hope it does</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:48:31">10:48</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><br><br><span style="opacity: 1; transition: 0.3s;"><br><span style="color: green;"><b>Chat Room Broadcast</b></span><span>: <b>Test</b> has left the chat! Total users: 2</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:48:52">10:48</span></small></small></span></span><span id="6188119148610292" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: helo?</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:48:53">10:48</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span style="opacity: 1; transition: 0.3s;"><br><span style="color: green;"><b>Chat Room Broadcast</b></span><span>: <b>Test</b> has joined the chat! Total users: 3</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:48:58">10:48</span></small></small></span></span><span style="opacity: 1; transition: 0.3s;"><br><span style="color: green;"><b>Chat Room Broadcast</b></span><span>: <b>Test</b> has left the chat! Total users: 2</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:49:02">10:49</span></small></small></span></span><span id="1936330854902213" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: hello?</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:49:06">10:49</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span id="4413286309529201" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: uh daddy?</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:49:09">10:49</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span id="4285346478560197" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: reload the page if you aren't able to chat</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:49:15">10:49</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span style="opacity: 1; transition: 0.3s;"><br><span style="color: green;"><b>Chat Room Broadcast</b></span><span>: <b>Satej Prabhupatkar </b> has left the chat! Total users: 1</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:49:29">10:49</span></small></small></span></span><span style="opacity: 1; transition: 0.3s;"><br><span style="color: green;"><b>Chat Room Broadcast</b></span><span>: <b>Satej Prabhupatkar </b> has joined the chat! Total users: 2</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:50:00">10:50</span></small></small></span></span><span id="9012952051036611" style="opacity: 1; transition: 0.3s;"><br><span><b>Satej Prabhupatkar </b></span><span>: Hi</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:50:06">10:50</span></small></small></span></span><span id="3703903079127464" style="opacity: 1; transition: 0.3s;"><br><span><b>Satej Prabhupatkar </b></span><span>: Now</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:50:10">10:50</span></small></small></span></span><span id="5310486851235241" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: it works</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:50:10">10:50</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span id="5928622851617318" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: yeah something went wrong i think</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:50:17">10:50</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span id="9148781271695097" style="opacity: 1; transition: 0.3s;"><br><span><b>Satej Prabhupatkar </b></span><span>: Unmute nahi hua</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:50:18">10:50</span></small></small></span></span><span id="3235842209086708" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: you weren't able to click the message box?</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:50:30">10:50</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span id="49807224021592056" style="opacity: 1; transition: 0.3s;"><br><span><b>Satej Prabhupatkar </b></span><span>: I could</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:50:38">10:50</span></small></small></span></span><span id="3038502189428245" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: and were you able to send messages</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:50:50">10:50</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span id="9077293696616648" style="opacity: 1; transition: 0.3s;"><br><span><b>Satej Prabhupatkar </b></span><span>: But message were not getting posted</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:50:56">10:50</span></small></small></span></span><span id="066821063262402" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: ohhhhhhhhhhhhhhhhhh</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:51:10">10:51</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span id="21461591848255046" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: very likely just network issues</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:51:21">10:51</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span id="9007999605691916" style="opacity: 1; transition: 0.3s;"><br><span><b>Satej Prabhupatkar </b></span><span>: Chal ab mera kam hua?</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:51:30">10:51</span></small></small></span></span><span id="4204861800232136" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: that only happens when there's network issues</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:51:30">10:51</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span id="8874093806719874" style="opacity: 1; transition: 0.3s;"><br><span><b>Satej Prabhupatkar </b></span><span>: Ok</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:51:37">10:51</span></small></small></span></span><span id="35318551347086524" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: yes you're good to go</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:51:39">10:51</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span id="442836258609449" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: ho gaya</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:51:44">10:51</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span id="8399802428885883" style="opacity: 1; transition: 0.3s;"><br><span><b>Satej Prabhupatkar </b></span><span>: Good job</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:51:48">10:51</span></small></small></span></span><span id="9115131269463312" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: the ip logging works</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:51:52">10:51:52 (edited)</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span id="6032021810451" style="opacity: 1; transition: 0.3s;"><br><span><b>Satej Prabhupatkar </b></span><span>: Das sieht gut aus </span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:52:03">10:52:03</span></small></small></span></span><span id="3651100612559772" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: O_O</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:52:19">10:52</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span id="09555588635445522" style="opacity: 1; transition: 0.3s;"><br><span><b>Satej Prabhupatkar </b></span><span>: Großartige arbeit</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:52:21">10:52:21</span></small></small></span></span><span id="49176194933122774" style="opacity: 1; transition: 0.3s;"><br><span><b>Satej Prabhupatkar </b></span><span>: Ciao</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:52:27">10:52</span></small></small></span></span><span id="08835380666310733" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: Ja...? uhhhhhhhhh</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:52:32">10:52</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span id="8050367410406833" style="opacity: 1; transition: 0.3s;"><br><span><b>Esclippy990</b></span><span>: ciao</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:52:34">10:52</span></small></small></span>&nbsp;&nbsp;<span style="opacity: 0; transition: 0.3s;"><button>Delete</button><button>Edit</button></span></span><span style="opacity: 1; transition: 0.3s;"><br><span style="color: green;"><b>Chat Room Broadcast</b></span><span>: <b>Satej Prabhupatkar </b> has left the chat! Total users: 1</span><span>&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at 10:52:52">10:52</span></small></small></span></span><br><span><b style="color: green;">Eval Output [1772963708743]: </b><span>0.6078133929990432</span><small style="color: grey; cursor: pointer;">&nbsp;• Dismiss</small></span></div>
    <b id="a" hidden=""><font id="typing"></font></b>
    </div>
    <small><br>This is a preserved chat, it is not real-time.<br>Saved at 11:32:13 AM (DE time)<br>Live chat is <a href="https://chatroom-toz6.onrender.com//">here</a>.</small>
    <font color="red" id="o" hidden="">Internet connection lost. Please wait while we try to reconnect.<br></font>
    <font color="red" id="rip" hidden="">The connection was closed. Please wait while we try to reconnect.<br></font>
    </div>
    <script>
  window.onresize = () => {
    document.getElementById('chat').style.width = window.innerWidth-30+"px"
  document.getElementById('chat').style.height = window.innerHeight-150+"px"
    document.getElementById('message').size = window.innerWidth / 13
    document.getElementById('name').size = window.innerWidth / 30
    }
    document.getElementById('chat').style.width = window.innerWidth-30+"px"
    document.getElementById('chat').style.height = window.innerHeight-150+"px"
      document.getElementById('message').size = window.innerWidth / 13
      document.getElementById('name').size = window.innerWidth / 30
    </script>
    </body>
    </html>`);
    } else {
      res.writeHead(404);
      res.end();
    }
  } else if (req.url === "/logs") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<!DOCTYPE html>
    <head>
    <meta charset="UTF-8">
  <meta name="viewport" content="initial-scale=1.0, width=device-width">
    <style>
    td, th {
      border: 1px solid;
      border-color: grey;
      background-color: lightgrey;
      }
      body {
      font-family: sans-serif;
      }
    </style>
    </head>
    <body>
    <table>
<tr> <th>Name</th> <th>IP Address</th> <th>Timing</th> <th>Action</th> </tr>
${logs}
</table>
<small>These are automatically logged by the server.</small>
<br>
<small>Please note that Logs are usually cleared up simply by a server restart.</small>
<br>
<small>IP addresses are considered sensitive information, as it is NEVER recommended to share someone's ip without their permission, not even to the person himself.</small>
    </body>`);
  } else if (req.url === "/submit") {
    if (req.method === "POST") {
      /*db.send(
        "<@1193882484727885884> IP " +
          req.headers["x-forwarded-for"] +
          " has a QUESTION: " +
          req.headers.content
      );*/
      questions += `
      ${questions.length > 0 ? "<hr></sub></details>" : ""}
      <details>
      <summary><b><font size="5">${req.headers.content
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")}</font></b></summary>
      <sub><font size="5"><i>Answer is still pending!</i></font>
      `;
      res.writeHead(200);
      res.end();
    } else {
      res.writeHead(403);
      res.end();
    }
  } else if (req.url === "/faq" || req.url === "/qna") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<!DOCTYPE html>
  <head>
  <meta charset="utf-8">
  <meta name="viewport" content="initial-scale=1.0">
  <style>
  body {
  font-family: sans-serif;
  user-select: none;
  }
  a {
  color: black;
  }
  summary {
  cursor: pointer;
  }
  </style>
  </head>
  <body>
  <font size="7">Questions and Answers</font>
  <br><br>
  <hr>
  <details>
  <summary><font size="5"><b>Should i use my real name?</b></font></summary>
  <sub><font size="5">
  <u><i>No, you should not use your real name.</i></u><br>
  Your real-life name / "pet" name is personal data of yours, and using it in the chatroom is as good as sharing it publically.<br>
  Using personal names and hints of your personal names which you should not share could be:<br>
  <ul>
  <li>Your personal name (firstname, lastname)</li>
  <li>Your pet name (which your relatives call you at home, especially parents)</li>
  <li>Your last name, which is also not recommended to share.</li>
  </ul><br>
  In short, <u>NO, you should NOT use your real-life name.</u>
  </font><hr></sub>
  </details>
  <details>
  <summary><font size="5"><b>Where do messages go when sent?</b></font></summary>
  <sub><font size="5">Messages are sent through <font color="black"><a href="https://en.wikipedia.org/wiki/WebSocket">WebSocket</a></font> traffic, as JSON.<br>The EXACT data sent is as follows:<br>
  <ul>
  <li>The name you send the message through</li>
  <li>The message you provided</li>
  <li>Any embed (true/false)</li>
  </ul>
  But before that, checkings are done, such as:
  <ul>
  <li>Does it start with a '/', and register it as a command?</li>
  <li>If not, is it not a blank message?</li>
  <li>Do you already have a name to be chatting with?</li>
  </ul>
  If the conditions are satisfactory, the message is sent to the server, where it is sent to others.
  </font><hr></sub>
  </details>
  <details>
  <summary><font size="5"><b>What happens to the messages when they reach the server?</b></font></summary>
  <sub><font size="5">Once the message completes it's journey to reach the server, it's checked for the following:
  <ul>
  <li>Are you muted?</li>
  <li>If not, is the message blank?</li>
  <li>Is the last message sent under 200ms? (If yes, that's spam)</li>
  <li>Does the message contain any innapropriate words/slurs?</li>
  <li>Does the message contain any embed? (true/false)</li>
  </ul>
  If the conditions are satisfactory, the message is sent to the other clients.
  </font><hr></sub>
  </details>
  <details>
  <summary><b><font size="5">How does the client interpret the message?</font></b></summary>
  <sub><font size="5">
  Usually, it's JSON. But then, the client breaks it down into 3 parts:
  <ul>
  <li>The username</li>
  <li>The actual message</li>
  <li>The message ID (generated by the server)</li>
  </ul>
  If it has an embed (true/false), it isn't shown right away.
  <br>
  The client holds that message, and when the server sends the embed of the file,
  <br>
  the message appends the embed (video/image/audio/link).
  <br>
  Then, it's put straight into a html code arranging and assembling the parts.
  <br>
  After that, the message is displayed in the chat!
  </font><hr></sub>
  </details>
  <details>
  <summary><font size="5"><b>How are my embeds sent? Is anyone seeing my (video/audio/image/etc.)?</b></font></summary>
  <sub><font size="5">
  Absolutely not! There isn't anyone seeing your embed at all, indeed.
  <br>
  Firstly, the file type is configured. Then, the embed is sent over the server. From there,<br>
  it's broadcasted to all the clients. Afterward, the client loads the file (e.g mp4, jpg, png, mp3, etc.) as a <br>temporary "blob" file.<br>
  The servers i own are usually not that capable to "store" files.<br><br>
  The files sent through the server are directly sent to the client to load. There is <i>NOTHING</i> in between<br>that could actually "store" or "see" the files you send.
  </font><hr></sub>
  </details>
  <details>
  <summary><font size="5"><b>Is there any "admin/mod" or a way to join membership with the dev?</b></font></summary>
  <sub><font size="5">No. There is no "admin/mod" for the chatroom, as i am the dev and "mod/admin".<br>Sorry, but I do not wish to join any membership with anyone else. I am rather comfortable coding<br> and developing this chatroom alone. But thanks for being generous enough to ask, if you did! :D</font><hr></sub>
  </details>
  <details>
  <summary><font size="5"><b>Is the chatroom 'open-source'?</b></font></summary>
  <sub><font size="5">No, this chatroom is not open-source.</font></sub>
  ${questions[0] ? "<hr>" : ""}
  </details>
  ${questions + `</sub></details>`}
  <hr>
  <font size="5">Start chatting now! Any questions? If they feel important, they will be added to this list too along with the answers!</font>
  <br>
  <input placeholder="Question?" id="question"><button id="submit">Submit</button>
  <font size="3" color="green" id="submitt" hidden><br>Your question has been submitted.</font>
  <script>
  document.getElementById('submit').onclick = () => {
  if (document.getElementById('question').value.replaceAll(' ', '').length > 0) {
  fetch('https://chatroom-toz6.onrender.com//submit', {
    method: 'POST',
    headers: {
    'Content': String(document.getElementById('question').value)
    }
  }).then(res => res.text())
  .then(data => {
    document.getElementById('submitt').hidden = false;
    document.getElementById('submit').disabled = true;
    document.getElementById('question').disabled = true;
  })
  }
  }
  document.getElementById('question').oninput = () => {
    if (document.getElementById('question').value.replaceAll(' ', '').length > 0) {
      document.getElementById('submit').disabled = false;
    } else {
      document.getElementById('submit').disabled = false;
    }
  }
  </script>
  </body>`);
  } else {
    view += 1;
    updateCount();
    fs.writeFile("./views.js", "exports.views = " + view, (err) => {});
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<!DOCTYPE html>
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="initial-scale=1.0, width=device-width">
  <style>
  body {
  font-family: sans-serif;
  overflow-x: 'hidden';
  user-select: none;
  }${
    b === 11
      ? `
      .santa {
      animation: b 5s infinite;
      }
      @keyframes b {
        0% { color: red; }
        25% { color: orange; }
        50% { color: red; }
        75% { color: orange; }
        100% { color: red; }
      }
      .grinch {
        animation: a 5s infinite;
        cursor: pointer;
        user-select: none;
        }
        @keyframes a {
        0% { color: lightgreen; }
        25% { color: darkgreen; }
        50% { color: lightgreen; }
        75% { color: darkgreen; }
        100% { color: lightgreen; }
        }
  .snowflake {
    position: absolute;
    top: -10px;
    width: 10px;
    height: 10px;
    background-color: black;
    border-radius: 100%;
    opacity: 0.8;
    animation: fall linear infinite;
    }
    @keyframes fall {
    to {
    transform: translateY(100vh) translateX(20vh);
    opacity: 0;
    }
    }
  `
      : ""
  }
  .confetti {
    animation: confett linear;
    background-color: red;
    position: absolute;
    top: -10px;
    left: -10px;
    width: 10px;
    height: 10px;
    transform: rotate(0deg);
    }
    @keyframes confett {
    to {
    transform: translateY(100vh);
    opacity: 0;
    }
    }
    #chat {
    overflow-y: scroll;
    overflow-wrap: break-word;
    }${
      b === 0
        ? `
    .part {
      border-radius: 50%;
      background-color: black;
      width: 10px;
      height: 10px;
      position: fixed;
      }
    @keyframes pa {
      to {
      transform: translateY(30vh);
      opacity: 0;
      }
      }
      @keyframes pb {
      to {
      transform: translateY(-30vh);
      opacity: 0;
      }
      }
      @keyframes pc {
      to {
      transform: translateX(30vh);
      opacity: 0;
      }
      }
      @keyframes pd {
      to {
      transform: translateX(-30vh);
      opacity: 0;
      }
      }
      @keyframes pe {
      to {
      transform: translateX(30vh) translateY(-30vh);
      opacity: 0;
      }
      }
      @keyframes pf {
      to {
      transform: translateX(-30vh) translateY(30vh);
      opacity: 0;
      }
      }
      @keyframes pg {
      to {
      transform: translateX(30vh) translateY(30vh);
      opacity: 0;
      }
      }
      @keyframes ph {
      to {
      transform: translateX(-30vh) translateY(-30vh);
      opacity: 0;
      }
      }`
        : ""
    }
    .editprompt {
      position: fixed;
      transform: translate(-50%, -50%);
      top: 50%;
      left: 50%;
      color: white;
      font-size: 30px;
      z-index: 100;
      }
      .editblack {
      position: fixed;
      transform: translate(-50%, -50%);
      top: 50%;
      left: 50%;
      width: 100%;
      height: 100%;
      background-color: black;
      opacity: 0.5;
      z-index: 30;
      }
      .editpromptinput {
      font-size: 20px;
      }
      .editpromptbutton {
      font-size: 20px;
      }
  </style>
  </head>
  <body>
  <span style="position: fixed; font-family: sans-serif; user-select: none; transition: 0.5s; opacity: 1; transform: translate(-50%, -50%) scale(1.5); text-align: center; top: 50%; left: 50%; z-index: 100;" id="intro"><b style="font-size: 30px;">Chat room - <span id="county" style="transition: 0.3s;">${String(
    Math.floor(view / 2)
  )}</span> Visits <small><small>(<span id="speed"></span>)</small></small></b><br><span id="okay">Connecting...</span> <span id="limit" style="transition: 0.5s;">(?/25)</span><br><input placeholder="Name..." id="name" maxlength="25" disabled><button id="join" disabled>Join</button><button id="spectate" hidden>Spectate</button></span>
  <div id="rest" style="transition: 0.5s; opacity: 0;">
  <center><big><big><big><big><b>Chat Room - <span id="county2" style="transition: 0.3s;">${String(
    Math.floor(view / 2)
  )}</span> Visits</b><small><small>(<span id="speed2"></span>)</small></small></big></big></big></big></center>
  <div id="chat">
  <div id="connection">
  <font size="6" color="grey">Connecting...</font>
  </div>
  <div id="messages"></div>
  <b id="a" hidden=""><font id="typing"></font></b>
  </div>
  <font color="red" id="o" hidden>Internet connection lost. Please wait while we try to reconnect.<br></font>
  <font color="red" id="rip" hidden>The connection was closed. Please wait while we try to reconnect.<br></font>
  <br>
  <span id="chatinput"><input size="30" placeholder="Message" id="message" maxlength="75" disabled><button id="send" disabled>Send</button>
  <br><input id="e" type="file"></span>
  <button id="back" hidden>Back</button>
  </div>
  </body>
  <script>
  let namesubmitted = false;${
    b === 11
      ? `
  let max = ${a === 25 && b === 11 ? "100" : "50"};
  let snowing = false;
  function confetti() {
    for (let i = 0; i < 50; i++) {
      setTimeout(() => {
      let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']
      colors = colors[Math.floor(Math.random()*colors.length)]
      let s = document.createElement('span');
      s.className = 'confetti';
      s.style = "left: "+Math.random()*100+"%; background-color: "+colors+"; animation-duration: "+Number(Number(Math.random() * Math.random())*3+2)+"s;"
      document.body.appendChild(s)
      s.onanimationiteration = () => {
      s.parentNode.removeChild(s)
      }
      }, Math.random() * 5000);
      }
  }
  function onesnow() {
    for (let i = 0; i < max; i++) {
      setTimeout(() => {
      let div = document.createElement('div');
      div.className = "snowflake";
      div.style = "left: "+Math.random()*100+"%; animation-duration: "+Number(Number(Math.random() * Math.random())*5+5)+"s;"
      document.body.appendChild(div)
      console.log(true)
      setTimeout(() => {
      div.onanimationiteration = () => {
        div.parentNode.removeChild(div)
        }
      }, 50);
      }, Math.random() * 5000);
      }
  }
  function snow(what) {
  if (what === true) {
    document.body.style.overflow = 'hidden'
for (let i = 0; i < max && namesubmitted === false && document.getElementsByClassName('snowflake').length < max; i++) {
setTimeout(() => {
if (namesubmitted === false) {
let div = document.createElement('div');
div.className = "snowflake";
div.style = "left: "+Math.random()*100+"%; animation-duration: "+Number(Number(Math.random() * Math.random())*5+5)+"s;"
document.body.appendChild(div)
console.log(true)
}
}, Math.random() * 10000);
}
} else {
  document.body.style.overflow = ''
  for (let i of document.getElementsByClassName('snowflake')) {
    i.onanimationiteration = () => {
    i.parentNode.removeChild(i)
    }
    }
}
}
${b === 11 ? "snow(true)" : ""}
`
      : ""
  }${
      b === 0
        ? `
  window.onmousedown = (e) => {
    let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
    let col = colors[Math.floor(Math.random() * colors.length)]
    let a = document.createElement('span');
    a.className = "part";
    a.style = "animation: pa linear .5s; top: "+e.clientY+"px; left: "+e.clientX+"px; background-color: "+col+";";
    
    let b = document.createElement('span');
    b.className = "part";
    b.style = "animation: pb linear .5s; top: "+e.clientY+"px; left: "+e.clientX+"px; background-color: "+col+";";
    
    let c = document.createElement('span');
    c.className = "part";
    c.style = "animation: pc linear .5s; top: "+e.clientY+"px; left: "+e.clientX+"px; background-color: "+col+";";
    
    let d = document.createElement('span');
    d.className = "part";
    d.style = "animation: pd linear .5s; top: "+e.clientY+"px; left: "+e.clientX+"px; background-color: "+col+";";
    
    let g = document.createElement('span');
    g.className = "part";
    g.style = "animation: pe linear .7s; top: "+e.clientY+"px; left: "+e.clientX+"px; background-color: "+col+";";
    
    let h = document.createElement('span');
    h.className = "part";
    h.style = "animation: pf linear .7s; top: "+e.clientY+"px; left: "+e.clientX+"px; background-color: "+col+";";
    
    let i = document.createElement('span');
    i.className = "part";
    i.style = "animation: pg linear .7s; top: "+e.clientY+"px; left: "+e.clientX+"px; background-color: "+col+";";
    
    let j = document.createElement('span');
    j.className = "part";
    j.style = "animation: ph linear .7s; top: "+e.clientY+"px; left: "+e.clientX+"px; background-color: "+col+";";
    
    document.body.appendChild(a)
    document.body.appendChild(b)
    document.body.appendChild(c)
    document.body.appendChild(d)
    document.body.appendChild(g)
    document.body.appendChild(h)
    document.body.appendChild(i)
    document.body.appendChild(j)
    
    setTimeout(() => {
    a.parentNode.removeChild(a);
    b.parentNode.removeChild(b);
    c.parentNode.removeChild(c);
    d.parentNode.removeChild(d);
    g.parentNode.removeChild(g);
    h.parentNode.removeChild(h);
    i.parentNode.removeChild(i);
    j.parentNode.removeChild(j);
    }, 500);
    }
  `
        : ""
    }let namee = ""
  let typings = 0;
  let stopAnim = false;
  let focus = false;
  let offline = false;
  let connected = false;
  let wscrollY
  let editmode = false;
  let replymode = false;
  let replymsg = "";
  let replyname = "";
  let replyID = "";
  let editID = "";
  let editOrigin = "";
  let spectate = false;
  window.onoffline = () => {
  offline = true;
  if (namesubmitted === false) {
    document.getElementById('name').disabled = true;
    document.getElementById('join').disabled = true;
    document.getElementById('okay').innerText = 'Internet connection lost.'
    }
  }
  document.getElementById('message').size = window.innerWidth / 13
    document.getElementById('name').size = window.innerWidth / 30
  window.onresize = () => {
    document.getElementById('chat').style.width = window.innerWidth-30+"px"
  document.getElementById('chat').style.height = window.innerHeight-150+"px"
    document.getElementById('message').size = window.innerWidth / 13
    document.getElementById('name').size = window.innerWidth / 30
    }
    document.getElementById('chat').style.width = window.innerWidth-30+"px"
  document.getElementById('chat').style.height = window.innerHeight-150+"px"
  
  window.ononline = () => {
  if (namesubmitted === false) {
      document.getElementById('name').disabled = false;
      document.getElementById('join').disabled = false;
      document.getElementById('okay').innerText = 'Please enter a name.'
      }
  offline = false;
  document.getElementById('o').hidden = true;
  }
  document.getElementById('message').onfocus = () => {
  focus = true;
  }
  document.getElementById('message').onblur = () => {
  focus = false;
  }
  document.getElementById('back').onclick = () => {
    if (muted === false) {
      document.getElementById('join').hidden = false;
      document.getElementById('spectate').hidden = true;
    }
    spectate = false;
    namesubmitted = false;
    ${b === 11 ? "snow(true)" : ""}
    document.getElementById('join').disabled = false;
    document.getElementById('rest').style.opacity = 0;
        setTimeout(() => {
          document.getElementById('rest').hidden = true;
        document.getElementById('intro').hidden = false;
        setTimeout(() => {
          document.getElementById('chatinput').hidden = false;
          document.getElementById('back').hidden = true;
        document.getElementById('intro').style.opacity = 1;
        }, 10);
        }, 500);
  }
  window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && spectate === true) {
  spectate = false;
  document.getElementById('join').disabled = false;
  document.getElementById('chatinput').hidden = false;
  document.getElementById('back').hidden = true;
  document.getElementById('rest').style.opacity = 0;
      setTimeout(() => {
        document.getElementById('rest').hidden = true;
      document.getElementById('intro').hidden = false;
      setTimeout(() => {
      document.getElementById('intro').style.opacity = 1;
      }, 10);
      }, 500);
  } else if (e.key === 'Enter' && document.getElementById('intro').hidden === false) {
  document.getElementById('join').click()
  } else if (e.key === 'Enter' && focus === true) {
  document.getElementById('send').click()
  document.getElementById('message').click();
  }
  })
  console.log('e')
  let ws;
  let reconn = false;
  let muted = false;
  function recon() {
  ws = new WebSocket('https://chatroom-toz6.onrender.com//');
  ws.onopen = () => {
    connected = true;
    document.getElementById('rip').hidden = true;
    //ws.send(JSON.stringify({ type: "ping" })) (This does not do anything to the randomly closing WebSocket problem, where reconnecting is impossible and you have to reload.)
  document.getElementById('name').disabled = false;
  document.getElementById('okay').innerText = 'Please enter a name.';
  document.getElementById('limit').innerText = '('+document.getElementById('name').value.length+'/25)'
  if (document.getElementById('name').value.length > 0) {document.getElementById('join').disabled = false}
  console.log('YEA')
  if (reconn === true) {
    if (document.getElementById('connection')) {} else {
      let sp = document.createElement('span')
    sp.innerHTML += "<hr><center>You were reconnected</center><hr>"
    document.getElementById('messages').appendChild(sp)
    }
    if (document.getElementById('name').value.length > 0 && namesubmitted === true) {
      document.getElementById('name').disabled = true;
      document.getElementById('message').disabled = false;
      ws.send(JSON.stringify({type: 'name', data: document.getElementById('name').value}));
      } else {
        if (namesubmitted === false) {
          document.getElementById('name').disabled = false;
          document.getElementById('join').disabled = false;
          document.getElementById('okay').innerText = 'Please enter a name.'
          }
      }
    } else {
      document.getElementById('connection').innerHTML = ${"`"}
      <font size="6" color="grey">No messages!</font><br>
      <font size="4">It looks like there are no messages recieved yet, or there aren't any. Say hi! 
      ${"`"}
      console.log('oe')
    }
  }
  let msg = false;
  let thing = '';
  fileID = '';
  let thename = '';
  let embed = '';
  ws.onmessage = (msg) => {
  let dat
  try {
  dat = JSON.parse(msg.data)
  } catch (error) {
  console.log(msg)
  console.log(thing);
  console.log(thing.split('/')[1])
  console.log(msg.data)
  /*let m = new File([msg.data], String(Math.random()).substring(2)+thing.split('/')[1], {
    lastModified: Date.now(),
    type: thing
    })*/
    console.log('YES')
    //let k = URL.createObjectURL(m)
    let k = 'https://chatroom-toz6.onrender.com/file:'+fileID
    let img;
  if (thing.includes('video')) {
  img = document.createElement('video');
  img.controls = true;
  img.autoplay = false;
  img.style.width = "300px";
  } else if (thing.includes('audio')) {
    img = document.createElement('audio');
    img.controls = true;
    img.autoplay = false;
    } else if (thing.includes('image')) {
      img = new Image();
  img.style.width = "250px";
    } else {
    img = document.createElement('a');
    img.innerText = String(Math.random()).substring(2)+'.'+thing.split('/')[1];
    img.href = k;
    }
  img.src = k;
  let sp = document.createElement('span')
  let br = document.createElement('br');
  sp.appendChild(br);
  let aa = document.createElement('details');
let ab = document.createElement('summary');
let ac = document.createElement('sub');
if (thing.includes('video') || thing.includes('audio')) {
  ab.innerText = 'Loading...'
  console.log(987654321)
  img.onerror = () => {
    let form = thing.split('/')[0]
    //BRO ITS MODIFIED HERE
  ab.innerText = 'Unable to play '+form
  //img.outerHTML = '<span style="color: grey">Sorry! This '+form+' cannot be played.<br>This could be because:<br>- The file type does not match.<br>- Your browser/device has compatibility issues with the '+form+'.<br>You can try downloading the file to check if it plays in the local video player of your device.<br>File name: '+thename+'<br>File type: '+thing+'</span>'
  }
  img.onloadeddata = () => {
    ab.innerText = thename;
    console.log(123456789);
  }
} else {
ab.innerText = thename;
  }
  console.log(Object.getPrototypeOf(img))
ac.appendChild(img);
if (!thing.includes('image') && !thing.includes('video') && !thing.includes('audio')) {
let g = document.createElement('small');
    g.onclick = () => {
    window.open(k);
    }
    g.style.color = 'red'
    g.style.cursor = 'pointer';
    g.innerHTML = '<u> • Open in new tab</u>';
ac.appendChild(g)
  }
let br2 = document.createElement('br');
let disc = document.createElement('small');
disc.innerText = 'We are not responsible for any harm caused to your device by downloading any files.'
let br3 = document.createElement('br');
let download = document.createElement('a');
download.innerText = 'Download file';
download.download = thename;
download.href = k;
disc.appendChild(br3);
disc.appendChild(download);
ac.appendChild(br2);
ac.appendChild(disc);
aa.appendChild(ab);
aa.appendChild(ac);
aa.style.userSelect = 'none';
  sp.appendChild(aa);
  embed.appendChild(sp);
  embed.style.opacity = "0";
  embed.style.transition = "0.3s";
  document.getElementById('messages').appendChild(embed)
  setTimeout(() => {
  embed.style.opacity = 1;
  embed = "";
  fileID = "";
  }, Math.random());
  document.getElementById('chat').scrollTo(0, document.getElementById('chat').innerHeight*2)
document.getElementById('chat').scrollTo(document.getElementById('chat').scrollX, document.getElementById('chat').scrollHeight);
  }
  if (dat.type !== "addtyping" && dat.type !== "remtyping" && document.getElementById('connection')) {
  document.getElementById('connection').parentNode.removeChild(document.getElementById('connection'))
  }
  if (dat.type === "updatespeed") {
  document.getElementById('speed').innerText = dat.data+" ms";
  document.getElementById('speed2').innerText = dat.data+" ms";
  } else if (dat.type === "thing") {
  thing = dat.data;
  fileID = dat.ide;
  console.log(dat)
  console.log(dat.name)
  thename = dat.name;
  console.log(thing)
  } else if (dat.type === "plus") {
  document.getElementById('county').innerText = dat.data;
  document.getElementById('county2').innerText = dat.data;
  document.getElementById('county').style.color = "green";
  document.getElementById('county2').style.color = "green";
  setTimeout(() => {
    document.getElementById('county').style.color = "";
    document.getElementById('county2').style.color = "";
  }, 1300);
  } else if (dat.type === "name") {
  let p = document.createElement('span');
  let a = document.createElement('span');
  a.innerText = dat.data;
  a.innerHTML = '<b>'+a.innerHTML+'</b>';
  p.appendChild(a)
  p.innerHTML += " has <i>"+dat.what+"</i> the chat!"
  document.getElementById('chat').innerHTML += "<br>"
  p.innerHTML += '&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at '+String(Date()).substring(16, 24)+'">'+String(Date()).substring(16, 21)+'</span></small></small>'
  if (!stopAnim) {
    p.style.opacity = "0";
    p.style.transition = "0.3s";
    }
  document.getElementById('messages').appendChild(p);
  if (!stopAnim) {
    setTimeout(() => {
    p.style.opacity = "1";
    }, Math.random());
  }
  } else if (dat.type === "delete") {
  let d = document.getElementById(dat.data);
  console.log('yooo')
  if (d) {
    for (let e of document.getElementsByTagName('span')) {
      if (e.id.includes(d.id)) {
      e.innerText = "(Replying to a deleted message)"
      }
      }
  if (d.id === editID) {
  editID = "";
  editmode = false;
  document.getElementById('send').innerText = 'Send';
  }
  d.style.opacity = 0;
  if (d.getElementsByTagName('video')[0]) {
    URL.revokeObjectURL(d.getElementsByTagName('video')[0].src);
  setTimeout(() => {
    d.getElementsByTagName('video')[0].src = null
    d.getElementsByTagName('video')[0].parentNode.removeChild(d.getElementsByTagName('video')[0])
  d.parentNode.removeChild(d);
  }, 300);
} else if (d.getElementsByTagName('img')[0]) {
  URL.revokeObjectURL(d.getElementsByTagName('img')[0].src);
setTimeout(() => {
  d.getElementsByTagName('img')[0].src = null
  d.getElementsByTagName('img')[0].parentNode.removeChild(d.getElementsByTagName('img')[0])
d.parentNode.removeChild(d);
}, 300);
} else if (d.getElementsByTagName('audio')[0]) {
  URL.revokeObjectURL(d.getElementsByTagName('audio')[0].src);
  d.getElementsByTagName('audio')[0].pause();
setTimeout(() => {
  d.getElementsByTagName('audio')[0].src = null
  d.getElementsByTagName('audio')[0].parentNode.removeChild(d.getElementsByTagName('audio')[0])
d.parentNode.removeChild(d);
}, 300);
} else {
  setTimeout(() => {
  d.parentNode.removeChild(d);
  }, 300);
}
  }
  } else if (dat.type === "edit") {
    console.log(dat)
  let d = document.getElementById(dat.id);
  f = d;
  d.innerText = ': '+dat.data;
  /*d.getElementsByTagName('span')[1].innerText = ': '+dat.data;
  if (!d.getElementsByTagName('span')[3].innerText.includes('(edited)')) {
  d.getElementsByTagName('span')[3].innerText += ' (edited)'
  }*/
  } else if (dat.type === "message") {
  let p = document.createElement('span');
  console.log(dat)
  if (dat.replymsg) { 
  // You replied to a message, not just sent..
  // well we need to mention that!
  let ag = document.createElement('span');
  let nexttime = '';
  let agh = document.createElement('span');
  console.log('configured agh')
  agh.style.fontSize = "12px";
  agh.style.color = "grey";
  agh.onmouseenter = () => {
  agh.style.color = "black";
  document.getElementById(dat.replyID).style.backgroundColor = 'lightblue';
  document.getElementById(dat.replyID).style['border-radius'] = '8px';
  }
  agh.onmouseleave = () => {
  agh.style.color = "grey";
  document.getElementById(dat.replyID).style.backgroundColor = '';
      document.getElementById(dat.replyID).style['border-radius'] = '';
  }
  agh.innerText = \`(Replying to "\$\{dat.replyname}\$\{dat.replymsg}")\`;
  agh.id = String(Math.floor(Math.random() * 10000))+"_"+dat.replyID
  agh.style['user-select'] = 'none';
  agh.style['cursor'] = 'pointer';
  let br =  document.createElement('br');
  /*agh.onclick = () => {
    console.log(dat)
    console.log('fucking works why it no work')
    document.getElementById(dat.replyID).style.backgroundColor = 'lightblue';
    document.getElementById(dat.replyID).style['border-radius'] = '8px';
   // nexttime = new Date().getTime() + 1500;
    setTimeout(() => {
    //if (new Date().getTime() > nexttime) {
      document.getElementById(dat.replyID).style.backgroundColor = '';
      document.getElementById(dat.replyID).style['border-radius'] = '';
   // }
    }, 1500);
  }*/
  console.log('Agh is configuredd! :D')
  console.log(agh.onclick)
  ag.appendChild(agh);
  ag.appendChild(br);
  p.appendChild(ag);
  console.log('YEAH IT WORKED BABY WOO REPLIED');
  //console.log('Lets see the lucky text:'+dat.replyname+dat.replymsg)
  }
  let a = document.createElement('span');
  let b = document.createElement('span');
  b.id = String(Math.floor(Math.random() * 10000))
  let timing = new Date()
  a.innerText = dat.name;
  a.innerHTML = '<b>'+a.innerHTML+'</b>'
  b.innerText = ': '+dat.data;${
    b === 11
      ? `
      if (b.innerText.toLowerCase().includes('merry christmas')) {
      onesnow();
      }
      if (b.innerText.toLowerCase().includes('happy new year')) {
      confetti()
      }`
      : ""
  }
  p.appendChild(a);
  b.innerHTML = b.innerHTML.replaceAll('@Chat Room Broadcast', '<font color="green">@Chat Room Broadcast</font>');
  b.innerHTML = b.innerHTML.replaceAll('@Moderation Bot', '<font color="orange">@Moderation Bot</font>');
  p.appendChild(b);
  if (document.getElementById('chat').innerHTML !== "") {
    let brr = document.createElement('br');
  p.prepend(brr)
  //p.innerHTML = "<br>"+p.innerHTML;
  }
  let time = document.createElement('span');
  let timea = document.createElement('span');
  let space = document.createElement('span');
  timea.style = "user-select: none; cursor: pointer; font-size: 11px;"
  timea.title = "Today, at "+String(timing).substring(16, 24)
  timea.innerText = String(timing).substring(16, 21);
  space.innerHTML = "&nbsp;&nbsp;"
  time.id = String(Math.floor(Math.random() * 1000))
  //time.innerHTML = '&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at '+String(timing).substring(16, 24)+'">'+String(timing).substring(16, 21)+'</span></small></small>'
time.appendChild(space);
time.appendChild(timea)
time.onclick = () => {
  console.log('time was clicked..')
if (timea.innerText.split(' ')[0] === String(timing).substring(16, 21)) {
timea.innerText = timea.innerText.replaceAll(String(timing).substring(16, 21), String(timing).substring(16, 24));
} else {
  timea.innerText = timea.innerText.replaceAll(String(timing).substring(16, 24), String(timing).substring(16, 21));
}
}
console.log('Configured time.')
console.log(time.onclick)
  p.appendChild(time);
  //CHECKPOINT
  l = time;
  if (!stopAnim) {
  p.style.opacity = "0";
  p.style.transition = "0.3s";
  }
  if (dat.author === true) {
  // You're the one who sent the message
  // in this case, you're the author!
  // give our fellow user the rights to edit/delete their message
  // just in case ;)
  let del = document.createElement('button');
  del.innerText = 'Delete';
  let edit = document.createElement('button');
  edit.innerText = 'Edit'
  del.onclick = () => {
  ws.send(JSON.stringify({ type: 'delete', data: dat.id }))
  }
  let space2 = document.createElement('span');
  space2.innerHTML = \`&nbsp;&nbsp;\`
  p.appendChild(space2)
  edit.onclick = () => {
  let editWindow = document.createElement('div');
  let editblack = document.createElement('div');
  editblack.className = "editblack";
  let editprompt = document.createElement('div');
  editprompt.className = "editprompt";
  let aa = document.createElement('span');
  aa.innerText = "Edit your message"
  let br1 = document.createElement('br');
  let br2 = document.createElement('br');
  let editInput = document.createElement('input');
  editInput.className = "editpromptinput";
  editInput.placeholder = "Hello there!";
  editInput.maxLength = document.getElementById('message').maxLength;
  editInput.value = document.getElementById(b.id).innerText.substring(2);//p.getElementsByTagName('span')[1].innerText.substring(2);

  let editnow = document.createElement('button');
  editnow.className = "editpromptbutton"
  editnow.innerText = "Cancel";
  let ab = document.createElement('span');
  ab.innerHTML = "<small><small><small>The change cannot be blank.</small></small></small>";
  editInput.oninput = () => {
  if (editInput.value !== p.getElementsByTagName('span')[1].innerText.substring(2) && editInput.value.replaceAll(' ', '').length > 0) {
  editnow.innerText = "Edit";
  } else {
  editnow.innerText = "Cancel"
  }
  }
  editnow.onclick = () => {
    editWindow.parentNode.removeChild(editWindow);
    if (editInput.value !== p.getElementsByTagName('span')[1].innerText.substring(2) && editInput.value.replaceAll(' ', '').length > 0) {
    ws.send(JSON.stringify({ type: 'edit', data: editInput.value, id: b.id, msg: dat.id }));
    }
  }
  editWindow.appendChild(editblack);
  editprompt.appendChild(aa);
  editprompt.appendChild(br1);
  editprompt.appendChild(editInput);
  editprompt.appendChild(editnow);
  editprompt.appendChild(br2);
  editprompt.appendChild(ab);
  editWindow.appendChild(editprompt);
  document.body.appendChild(editWindow);

  /*editmode = true;
  document.getElementById('send').disabled = false;
  editID = dat.id;
  editOrigin = p.getElementsByTagName('span')[1].innerText.substring(2);
  document.getElementById('message').value = p.getElementsByTagName('span')[1].innerText.substring(2);
  document.getElementById('send').innerText = 'Cancel';
  */
  }
  let controls = document.createElement('span');
  controls.style.opacity = 0;
  controls.style.transition = "0.3s";
  controls.appendChild(del);
  controls.appendChild(edit);
  p.appendChild(controls);
  p.lastclicked = 0;
  controls.hidden = true;
  setTimeout(() => {
  p.onclick = () => {
  if (p.lastclicked === 0) {
  p.lastclicked = new Date().getTime();
  setTimeout(() => {
  p.lastclicked = 0;
  }, 1000);
  } else {
  p.lastclicked = 0;
  controls.hidden = false;
  setTimeout(() => {
  controls.style.opacity = 1;
  }, 50);
  }
  }
  p.onmouseleave = () => {
  if (controls.hidden === false) {
  controls.style.opacity = 0;
  setTimeout(() => {
  controls.hidden = true;
  }, 300 + Math.random());
  }
  }
  /*p.onmouseenter = () => {
    controls.hidden = false;
    setTimeout(() => {
    controls.style.opacity = 1;
    }, 50);
    //p.getElementsByTagName('span')[3].innerText = p.getElementsByTagName('span')[3].innerText.replaceAll(String(timing).substring(16, 21), String(timing).substring(16, 24));
    }
    p.onmouseleave = () => {
    controls.style.opacity = 0;
    setTimeout(() => {
    controls.hidden = true;
    }, 300 + Math.random());
    //p.getElementsByTagName('span')[3].innerText = p.getElementsByTagName('span')[3].innerText.replaceAll(String(timing).substring(16, 24), String(timing).substring(16, 21));
    }*/
  }, 1);
  } else {
    // You aren't the author of the message
    // let's have secondary controls for the fellow user!
    console.log('Noo im not the author :(')
    let controls = document.createElement('span');
    controls.style.opacity = 0;
    controls.style.transition = "0.3s";
    let reply = document.createElement('button');
    reply.innerText = 'Reply';
    reply.onclick = () => {
    document.getElementById('send').innerText = 'Reply';
    replymode = true;
    replyname = a.innerText
    replymsg = b.innerText
    replyID = dat.id;
    }

    controls.appendChild(reply);
    controls.hidden = true;
    p.onmouseenter = () => {
      controls.hidden = false;
      setTimeout(() => {
      controls.style.opacity = 1;
      }, 50);
    }
    p.onmouseleave = () => {
      controls.style.opacity = 0;
      setTimeout(() => {
      controls.hidden = true;
      }, 300 + Math.random());
    }
    let space = document.createElement('span');
  space.innerHTML = \`&nbsp;&nbsp;\`
  p.appendChild(space)
    p.appendChild(controls);
    //CHECKPOINT
}
  p.id = dat.id;
  if (dat.emb) {
  console.log('yeas')
  embed = p;
  } else {
  document.getElementById('messages').appendChild(p);
  }
  if (!stopAnim) {
  setTimeout(() => {
  stopAnim = true;
  p.style.opacity = "1";
  stopAnim = false;
  }, Math.random());
}
document.getElementById('chat').scrollTo(0, document.getElementById('chat').innerHeight*2)
document.getElementById('chat').scrollTo(document.getElementById('chat').scrollX, document.getElementById('chat').scrollHeight);
  //window.scrollTo(0, window.innerHeight*2)
  } else if (dat.type === "dcmsg") {
    let p = document.createElement('span');
    let a = document.createElement('span');
    let b = document.createElement('span');
    let timing = new Date()
    a.innerText = dat.name;
    a.innerHTML = '<b><font color="blue">[DISCORD] - </font>'+a.innerHTML+'</b>'
    b.innerText = ': '+dat.data;${
      b === 11
        ? `
        if (b.innerText.toLowerCase().includes('merry christmas')) {
        onesnow();
        }
        if (b.innerText.toLowerCase().includes('happy new year')) {
        confetti()
        }`
        : ""
    }p.appendChild(a);
    p.appendChild(b);
    b.innerHTML = b.innerHTML.replaceAll('@Chat Room Broadcast', '<font color="green">@Chat Room Broadcast</font>');
    b.innerHTML = b.innerHTML.replaceAll('@Moderation Bot', '<font color="orange">@Moderation Bot</font>');
    if (document.getElementById('chat').innerHTML !== "") {
    p.innerHTML = "<br>"+p.innerHTML;
    }
    let time = document.createElement('span');
    time.innerHTML = '&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at '+String(timing).substring(16, 24)+'">'+String(timing).substring(16, 21)+'</span></small></small>'
    p.appendChild(time);
    l = time;
    if (!stopAnim) {
    p.style.opacity = "0";
    p.style.transition = "0.3s";
    }
  p.getElementsByTagName('span')[3].onclick = () => {
    if (p.getElementsByTagName('span')[3].innerText.split(' ')[0] === String(timing).substring(16, 21)) {
    p.getElementsByTagName('span')[3].innerText = p.getElementsByTagName('span')[3].innerText.replaceAll(String(timing).substring(16, 21), String(timing).substring(16, 24));
    } else {
      p.getElementsByTagName('span')[3].innerText = p.getElementsByTagName('span')[3].innerText = p.getElementsByTagName('span')[3].innerText.replaceAll(String(timing).substring(16, 24), String(timing).substring(16, 21));
    }
  }
    p.id = dat.id;
    document.getElementById('messages').appendChild(p);
    if (!stopAnim) {
    setTimeout(() => {
    stopAnim = true;
    p.style.opacity = "1";
    stopAnim = false;
    }, Math.random());
  }
  document.getElementById('chat').scrollTo(0, document.getElementById('chat').innerHeight*2)
  document.getElementById('chat').scrollTo(document.getElementById('chat').scrollX, document.getElementById('chat').scrollHeight);
    //window.scrollTo(0, window.innerHeight*2)
    } else if (dat.type === "evaloutput") {
  if (dat.error === true) {
  let evo = document.createElement('span');
  let br = document.createElement('br');
  let stamp = document.createElement('b');
  stamp.style.color = 'red';
  stamp.innerText = "Error Output ["+Date.now()+"]: "
  let errs = document.createElement('span');
  errs.innerText = dat.data;
  let dismiss = document.createElement('small');
    dismiss.innerHTML = '&nbsp;• Dismiss';
    dismiss.style.color = "grey";
    dismiss.style.cursor = "pointer";
  evo.appendChild(stamp);
  evo.appendChild(errs);
  evo.appendChild(dismiss);
  document.getElementById('messages').appendChild(br);
  document.getElementById('messages').appendChild(evo);
  dismiss.onclick = () => {
  evo.parentNode.removeChild(evo);
  }
  } else {
    let evo = document.createElement('span');
    let br = document.createElement('br');
    let stamp = document.createElement('b');
    stamp.style.color = 'green';
    stamp.innerText = "Eval Output ["+Date.now()+"]: "
    let output = document.createElement('span');
    output.innerText = dat.data;
    let dismiss = document.createElement('small');
    dismiss.innerHTML = '&nbsp;• Dismiss';
    dismiss.style.color = "grey";
    dismiss.style.cursor = "pointer";
    evo.appendChild(stamp);
    evo.appendChild(output);
    evo.appendChild(dismiss);
    document.getElementById('messages').appendChild(br);
    document.getElementById('messages').appendChild(evo);
    dismiss.onclick = () => {
    evo.parentNode.removeChild(evo);
    br.parentNode.removeChild(br)
    }
  }
  } else if (dat.type === "html") {
  /*document.getElementById('chat').innerHTML += "<br>";
  document.getElementById('chat').innerHTML += dat.data;*/
  let html = document.createElement('span');
  let br = document.createElement('br');
  html.innerHTML = dat.data;
  document.getElementById('messages').appendChild(br);
  document.getElementById('messages').appendChild(html);
  document.getElementById('chat').scrollTo(0, document.getElementById('chat').innerHeight*2)
document.getElementById('chat').scrollTo(document.getElementById('chat').scrollX, document.getElementById('chat').scrollHeight);
  } else if (dat.type === 'addtyping') {
  let p = document.createElement('span');
  p.id = dat.data;
  p.innerText = dat.name + ' is typing...'
  typings += 1;
  //if (document.getElementById('a').hidden === false) {
  let br = document.createElement('br');
  //p.innerHTML = p.innerHTML;
  p.appendChild(br)
  //}
  document.getElementById('a').hidden = false;
  p.style.opacity = "0";
  p.style.transition = "0.3s";
  document.getElementById('typing').appendChild(p);
  setTimeout(() => {
  p.style.opacity = "1";
  }, Math.random());
  document.getElementById('chat').scrollTo(0, document.getElementById('chat').innerHeight*2)
document.getElementById('chat').scrollTo(document.getElementById('chat').scrollX, document.getElementById('chat').scrollHeight);
  } else if (dat.type === 'remtyping') {
  typings -= 1;
  //document.getElementById(dat.data).style.opacity = "0";
  //setTimeout(() => {
  document.getElementById('typing').removeChild(document.getElementById(dat.data))
  if (document.getElementById('typing').innerHTML === "") {
  document.getElementById('a').hidden = true;
  }
//}, 200);
  } else if (dat.type === 'scream') {
    let g = new Audio()
    g.src = "https://www.myinstants.com//media/sounds/screaming-beaver.mp3";
    g.play()
    setTimeout(() => {
    g.pause()
    }, 5000);
  } else if (dat.type === 'helpmenu') {
  let menu = dat.data;
  let a = document.createElement('div');
  let closeButton = document.createElement('button');
  let menuspan = document.createElement('span');
  let helptext = menu.join('<br>');
  let br = document.createElement('br');
  menuspan.innerHTML = "<b>Help menu:</b><br>"+helptext;
  closeButton.innerText = 'Close';
  closeButton.onclick = () => {
    a.style.opacity = "0";
    setTimeout(() => {
    a.parentNode.removeChild(a);
    }, 305 + Math.random());
    }
  a.appendChild(menuspan);
  a.appendChild(br);
  a.appendChild(closeButton);
  a.style = "border: solid 1px; border-color: grey; border-radius: 3px;"
  if (!stopAnim) {
    a.style.opacity = "0";
    a.style.transition = "0.3s";
    }
    document.getElementById('messages').appendChild(a);
  document.getElementById('chat').scrollTo(0, document.getElementById('chat').innerHeight*2)
document.getElementById('chat').scrollTo(document.getElementById('chat').scrollX, document.getElementById('chat').scrollHeight);
if (!stopAnim) {
  setTimeout(() => {
  a.style.opacity = "1";
  }, Math.random());
}
  } else if (dat.type === 'broadcast') {
    console.log('OOOOO')
  let p = document.createElement('span');
  let a = document.createElement('span');
  let b = document.createElement('span');
  //CHECKPOINT
  ${
    b === 11
      ? `if (dat.whom === "santa") {
    a.innerHTML = '<b>Santa Claus</b>';
    a.className = 'santa'
  } else if (dat.whom === "grinch") {
    a.innerHTML = '<b>The Grinch</b>';
    a.className = 'grinch';
  } else `
      : ""
  }
  if (dat.whom === "mod") {
    a.innerHTML = '<b>Moderation Bot</b>';
    a.style.color = "orange";
  } else {
  a.innerHTML = '<b>Chat Room Broadcast</b>';
  a.style.color = "green";
  }
  b.innerText = ': '+dat.data;
  p.appendChild(a); p.appendChild(b);

  //b.innerHTML = b.innerHTML.replaceAll('**', '[boldend]');
  //b.innerHTML = b.innerHTML.replaceAll('*', '[boldstart]');
  b.innerHTML = b.innerHTML.replace('[b]', '<b>');
  b.innerHTML = b.innerHTML.replace('[/b]', '</b>');
  let timing = new Date()
  p.innerHTML = "<br>"+p.innerHTML;
  let time = document.createElement('span');
  time.innerHTML = '&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at '+String(timing).substring(16, 24)+'">'+String(timing).substring(16, 21)+'</span></small></small>'
  p.appendChild(time);
  //p.innerHTML += '&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at '+String(Date()).substring(16, 24)+'">'+String(Date()).substring(16, 21)+'</span></small></small>'
  if (!stopAnim) {
    p.style.opacity = "0";
    p.style.transition = "0.3s";
    }
    p.getElementsByTagName('span')[3].onclick = () => {
      if (p.getElementsByTagName('span')[3].innerText.split(' ')[0] === String(timing).substring(16, 21)) {
      p.getElementsByTagName('span')[3].innerText = p.getElementsByTagName('span')[3].innerText.replaceAll(String(timing).substring(16, 21), String(timing).substring(16, 24));
      } else {
        p.getElementsByTagName('span')[3].innerText = p.getElementsByTagName('span')[3].innerText = p.getElementsByTagName('span')[3].innerText.replaceAll(String(timing).substring(16, 24), String(timing).substring(16, 21));
      }
    }
  document.getElementById('messages').appendChild(p);
  document.getElementById('chat').scrollTo(0, document.getElementById('chat').innerHeight*2)
document.getElementById('chat').scrollTo(document.getElementById('chat').scrollX, document.getElementById('chat').scrollHeight);
  if (!stopAnim) {
    setTimeout(() => {
    p.style.opacity = "1";
    }, Math.random());
  }
  } else ${
    b === 11
      ? `
  if (dat.type === 'santa') {
    console.log('OOOOO')
  let p = document.createElement('span');
  let a = document.createElement('span');
  let b = document.createElement('span');
  a.innerHTML = '<b>Santa Claus</b>';
  a.className = 'santa'
  b.innerText = ': '+dat.data;
  p.appendChild(a); p.appendChild(b);

  //b.innerHTML = b.innerHTML.replaceAll('**', '[boldend]');
  //b.innerHTML = b.innerHTML.replaceAll('*', '[boldstart]');
  b.innerHTML = b.innerHTML.replace('[b]', '<b>');
  b.innerHTML = b.innerHTML.replace('[/b]', '</b>');
  let timing = new Date()
  p.innerHTML = "<br>"+p.innerHTML;
  let time = document.createElement('span');
  time.innerHTML = '&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at '+String(timing).substring(16, 24)+'">'+String(timing).substring(16, 21)+'</span></small></small>'
  p.appendChild(time);
  //p.innerHTML += '&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at '+String(Date()).substring(16, 24)+'">'+String(Date()).substring(16, 21)+'</span></small></small>'
  if (!stopAnim) {
    p.style.opacity = "0";
    p.style.transition = "0.3s";
    }
    p.getElementsByTagName('span')[3].onclick = () => {
      if (p.getElementsByTagName('span')[3].innerText.split(' ')[0] === String(timing).substring(16, 21)) {
      p.getElementsByTagName('span')[3].innerText = p.getElementsByTagName('span')[3].innerText.replaceAll(String(timing).substring(16, 21), String(timing).substring(16, 24));
      } else {
        p.getElementsByTagName('span')[3].innerText = p.getElementsByTagName('span')[3].innerText = p.getElementsByTagName('span')[3].innerText.replaceAll(String(timing).substring(16, 24), String(timing).substring(16, 21));
      }
    }
  document.getElementById('messages').appendChild(p);
  if (!stopAnim) {
    setTimeout(() => {
    p.style.opacity = "1";
    }, Math.random());
  }
  document.getElementById('chat').scrollTo(0, document.getElementById('chat').innerHeight*2)
document.getElementById('chat').scrollTo(document.getElementById('chat').scrollX, document.getElementById('chat').scrollHeight);
  } else if (dat.type === 'grinch') {
    console.log('OOOOO')
  let p = document.createElement('span');
  let a = document.createElement('span');
  let b = document.createElement('span');
  a.innerHTML = '<b>The Grinch</b>';
  a.className = 'grinch';
  b.innerText = ': '+dat.data;
  p.appendChild(a); p.appendChild(b);

  //b.innerHTML = b.innerHTML.replaceAll('**', '[boldend]');
  //b.innerHTML = b.innerHTML.replaceAll('*', '[boldstart]');
  b.innerHTML = b.innerHTML.replace('[b]', '<b>');
  b.innerHTML = b.innerHTML.replace('[/b]', '</b>');
  let timing = new Date()
  p.innerHTML = "<br>"+p.innerHTML;
  let time = document.createElement('span');
  time.innerHTML = '&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at '+String(timing).substring(16, 24)+'">'+String(timing).substring(16, 21)+'</span></small></small>'
  p.appendChild(time);
  //p.innerHTML += '&nbsp;&nbsp;<small><small><span style="user-select: none; cursor: pointer;" title="Today, at '+String(Date()).substring(16, 24)+'">'+String(Date()).substring(16, 21)+'</span></small></small>'
  if (!stopAnim) {
    p.style.opacity = "0";
    p.style.transition = "0.3s";
    }
    p.getElementsByTagName('span')[3].onclick = () => {
      if (p.getElementsByTagName('span')[3].innerText.split(' ')[0] === String(timing).substring(16, 21)) {
      p.getElementsByTagName('span')[3].innerText = p.getElementsByTagName('span')[3].innerText.replaceAll(String(timing).substring(16, 21), String(timing).substring(16, 24));
      } else {
        p.getElementsByTagName('span')[3].innerText = p.getElementsByTagName('span')[3].innerText = p.getElementsByTagName('span')[3].innerText.replaceAll(String(timing).substring(16, 24), String(timing).substring(16, 21));
      }
    }
  document.getElementById('messages').appendChild(p);
  if (!stopAnim) {
    setTimeout(() => {
    p.style.opacity = "1";
    }, Math.random());
  }
  document.getElementById('chat').scrollTo(0, document.getElementById('chat').innerHeight*2)
document.getElementById('chat').scrollTo(document.getElementById('chat').scrollX, document.getElementById('chat').scrollHeight);
  } else`
      : ""
  } if (dat.type === 'Chooseanothername') {
    namesubmitted = false;
    ${b === 11 ? "snow(true)" : ""}
    document.getElementById('name').disabled = false;
    document.getElementById('message').disabled = true;
    document.getElementById('send').disabled = true;
    document.getElementById('okay').innerText = dat.data;
    document.getElementById('okay').style.color = "red";
    document.getElementById('join').disabled = true;
    setTimeout(() => {
    document.getElementById('okay').innerText = 'Please enter a name.'
    document.getElementById('okay').style.color = "";
    if (document.getElementById('message').value.replaceAll(' ', '').length > 0) {
    document.getElementById('join').disabled = false;
    }
    }, 3000);
    document.getElementById('rest').style.opacity = 0;
      setTimeout(() => {
        document.getElementById('rest').hidden = true;
      document.getElementById('intro').hidden = false;
      setTimeout(() => {
      document.getElementById('intro').style.opacity = 1;
      }, 10);
      }, 500);
  } else if (dat.type === 'stopAnim') {
    stopAnim = true;
  } else if (dat.type === 'resAnim') {
    stopAnim = false;
  } else if (dat.type === "mute") {
    document.getElementById('message').disabled = true;
    document.getElementById('name').disabled = true;
    document.getElementById('send').disabled = true;
    document.getElementById('okay').innerText = 'You have been muted. Please wait.'
    document.getElementById('limit').innerText = '(?/25)'
    muted = true;
    console.log('lol')
    document.getElementById('join').hidden = true;
    document.getElementById('spectate').hidden = false;
} else if (dat.type === "unmute") {
  console.log('ah')
  if (document.getElementById('name').value.replaceAll(' ', '').length > 0) {
    console.log('aha')
  document.getElementById('message').disabled = false;
  document.getElementById('send').disabled = false;
  document.getElementById('join').hidden = false;
  document.getElementById('spectate').hidden = true;
  
} else if (dat.type === 'file') {
  //CHECKPOINT
  console.log('YEAH IT WORKED FRFR')
      let img;
    if (thing.includes('video')) {
    img = document.createElement('video');
    img.controls = true;
    img.autoplay = false;
    img.style.width = "300px";
    } else if (thing.includes('audio')) {
      img = document.createElement('audio');
      img.controls = true;
      img.autoplay = false;
      } else if (thing.includes('image')) {
        img = new Image();
    img.style.width = "250px";
      } else {
      img = document.createElement('a');
      img.innerText = String(Math.random()).substring(2)+'.'+thing.split('/')[1];
      img.href = dat.data;
      }
    img.src = dat.data;
    let sp = document.createElement('span')
    let br = document.createElement('br');
    sp.appendChild(br);
    let aa = document.createElement('details');
  let ab = document.createElement('summary');
  let ac = document.createElement('sub');
  if (thing.includes('video') || thing.includes('audio')) {
    ab.innerText = 'Loading...'
    console.log(987654321)
    img.onerror = () => {
    //BRO ITS MODIFIED HERE
      let form = thing.split('/')[0]
      //BRO ITS MODIFIED HERE
    ab.innerText = 'Unable to play '+form
   //img.outerHTML = '<span style="color: grey">Sorry! This '+form+' cannot be played.<br>This could be because:<br>- The file type does not match.<br>- Your browser/device has compatibility issues with the '+form+'.<br>You can try downloading the file to check if it plays in the local video player of your device.<br>File name: '+thename+'<br>File type: '+thing+'</span>'
    }
    img.onloadeddata = () => {
      ab.innerText = thename;
      console.log(123456789);
    }
  } else {
  ab.innerText = thename;
    }
    console.log(Object.getPrototypeOf(img))
  ac.appendChild(img);
  if (!thing.includes('image') && !thing.includes('video') && !thing.includes('audio')) {
  let g = document.createElement('small');
      g.onclick = () => {
      window.open(k);
      }
      g.style.color = 'red'
      g.style.cursor = 'pointer';
      g.innerHTML = '<u> • Open in new tab</u>';
  ac.appendChild(g)
    }
  let br2 = document.createElement('br');
  let disc = document.createElement('small');
  disc.innerText = 'We are not responsible for any harm caused to your device by downloading any files.'
  let br3 = document.createElement('br');
  let download = document.createElement('a');
  download.innerText = 'Download file';
  download.download = thename;
  download.href = k;
  disc.appendChild(br3);
  disc.appendChild(download);
  ac.appendChild(br2);
  ac.appendChild(disc);
  aa.appendChild(ab);
  aa.appendChild(ac);
  aa.style.userSelect = 'none';
    sp.appendChild(aa);
    embed.appendChild(sp);
    embed.style.opacity = "0";
    embed.style.transition = "0.3s";
    document.getElementById('messages').appendChild(embed)
    setTimeout(() => {
    embed.style.opacity = 1;
    embed = "";
    }, Math.random());
    document.getElementById('chat').scrollTo(0, document.getElementById('chat').innerHeight*2)
  document.getElementById('chat').scrollTo(document.getElementById('chat').scrollX, document.getElementById('chat').scrollHeight);
  
} else if (dat.type === "lol") {
  let m = new File([dat.data], "theia.png", {
lastModified: Date.now(),
type: 'image/png'
})
console.log('AHA IT WORKED LOLOLOL')
// CHECKPOINT
//console.log(URL.createObjectURL(m))
  } else {
    console.log('ahe')
  document.getElementById('name').disabled = false;
  document.getElementById('okay').innerText = 'Please enter a name.'
  document.getElementById('limit').innerText = '('+document.getElementById('name').value.length+'/25)'
  }
  muted = false;
}
  }
  ws.onclose = () => {
  console.log('closed')
  reconn = true;
  connected = false;
  document.getElementById('rip').hidden = false;
  document.getElementById('send').disabled = true;
  document.getElementById('message').disabled = true;
  fetch('https://chatroom-toz6.onrender.com/')
  setTimeout(() => {
  recon()
  }, 2000+Number(Math.random()*2));
  if (namesubmitted === false) {
  document.getElementById('name').disabled = true;
  document.getElementById('join').disabled = true;
  document.getElementById('okay').innerText = 'Reconnecting...'
  }
  typings = 0;
  document.getElementById('typing').innerHTML = ""
  document.getElementById('a').hidden = true;
  typinglol = false;
  }
}
recon()
let typinglol = false;
let reader = new FileReader();
document.getElementById('e').oninput = () => {
  //ws.send(JSON.stringify({ type: "thing", data: document.getElementById('e').files[0].type, name: document.getElementById('e').files[0].name }))
  reader.readAsArrayBuffer(document.getElementById('e').files[0]);
}
  document.getElementById('send').onclick = () => {
  if (offline === true) {
  document.getElementById('o').hidden = false;
  }
  if (connected === false) {
    document.getElementById('rip').hidden = false;
    document.getElementById('send').disabled = true;
    document.getElementById('message').disabled = true;
  }
  if (editmode === true) {
    if (document.getElementById('message').value === editOrigin || document.getElementById('message').value.replaceAll(' ').length === 0) {
    editmode = false;
    document.getElementById('send').innerText = 'Send';
    editID = "";
    document.getElementById('message').value = "";
    } else {
    editmode = false;
    ws.send(JSON.stringify({ type: 'edit', data: document.getElementById('message').value, id: editID }));
    document.getElementById('send').innerText = 'Send';
    document.getElementById('message').value = "";
    editID = "";
    }
  } else if (document.getElementById('message').value.replaceAll(' ', '').length > 0) {
  if (typinglol === true) {typinglol = false; ws.send(JSON.stringify({type: 'stoptyping'}))}
  if (document.getElementById('message').value.startsWith('/')) {
  console.log('oo')
  ws.send(JSON.stringify({type: 'cmd', data: document.getElementById('message').value}))
  if (!document.getElementById('message').value.startsWith('/eval')) {
  document.getElementById('message').value = ""
  document.getElementById('send').disabled = true;
  }
  } else {
    console.log('aw')
    if (document.getElementById('e').files[0]) {
      //reader.onload = () => {
        console.log('whoop')
      console.log('whip')
      let ide = Math.floor(Math.random() * 10000)
      ws.send(JSON.stringify({ type: 'thing', data: document.getElementById('e').files[0].type, name: document.getElementById('e').files[0].name, ide: ide }))
      let no = new FileReader()
      no.readAsArrayBuffer(document.getElementById('e').files[0]);
      ws.send(JSON.stringify({type: 'message', data: document.getElementById('message').value, emb: true}))
      no.onload = () => {
  ws.send(no.result);
  document.getElementById('message').value = ""
  document.getElementById('e').value = ""
  document.getElementById('send').disabled = true;
      };
      //}
    } else {
      if (replymode === true) {
        // OH SHES SWEET BUT A PSYCO CHECKPOINT REPLYS
        ws.send(JSON.stringify({type: 'message', data: document.getElementById('message').value, reply: true, replymsg: String(replymsg), replyname: String(replyname), replyID: String(replyID)}))
        document.getElementById('send').innerText = 'Send';
        replymode = false;
        replymsg = ""
        replyname = "";
        replyID = "";
      } else {
      ws.send(JSON.stringify({type: 'message', data: document.getElementById('message').value}))
      }
      console.log('whip')
  document.getElementById('message').value = ""
  document.getElementById('send').disabled = true;
    }
}
  } else {
  if (editmode === false) {
  document.getElementById('send').disabled = true;
  }
  }
  }
  document.getElementById('message').oninput = () => {
  if (editmode === true) {
  if (document.getElementById('message').value === editOrigin || document.getElementById('message').value.replaceAll(' ').length === 0) {
  document.getElementById('send').innerText = 'Cancel';
  } else {
  document.getElementById('send').innerText = "Edit";
  }
  } else {
  if (document.getElementById('message').value.startsWith('/')) {
    document.getElementById('message').maxLength = 10000;
  } else {
    document.getElementById('message').maxLength = 75;
    if (document.getElementById('message').value.length > 75) {
    document.getElementById('message').value = document.getElementById('message').value.substring(0, 75)
    }
  }
  if (document.getElementById('message').value.replaceAll(' ', '').length > 0) {
  document.getElementById('send').disabled = false;
  } else {
  document.getElementById('send').disabled = true;
  }
  if (document.getElementById('message').value.replaceAll(' ', '').length > 0 && typinglol === false && editmode === false) {
  typinglol = true;
  ws.send(JSON.stringify({type: 'starttyping'}))
  } else if (typinglol === true && document.getElementById('message').value.replaceAll(' ', '').length === 0) {
  typinglol = false;
  ws.send(JSON.stringify({type: 'stoptyping'}))
  }
}
  }
  document.getElementById('name').oninput = () => {
  if (document.getElementById('name').value.replaceAll(' ', '').length === 0 || document.getElementById('name').value.length > 25) {
    document.getElementById('join').disabled = true;
    document.getElementById('limit').innerText = '('+document.getElementById('name').value.length+'/25)';
  } else {
  document.getElementById('join').disabled = false;
  document.getElementById('limit').innerText = '('+document.getElementById('name').value.length+'/25)'
  }
  }
  
  document.getElementById('spectate').onclick = () => {
    spectate = true;
    namesubmitted = true;
    ${b === 11 ? "snow(false)" : ""}
    document.getElementById('join').disabled = true;
    document.getElementById('chatinput').hidden = true;
    document.getElementById('back').hidden = false;
    document.getElementById('intro').style.opacity = 0;
    setTimeout(() => {
      document.getElementById('intro').hidden = true;
    document.getElementById('rest').hidden = false;
    setTimeout(() => {
    document.getElementById('rest').style.opacity = 1;
    let span = document.createElement('span');
    span.innerHTML = '&nbsp;&nbsp;Press ESC to return to homescreen&nbsp;&nbsp;';
    span.style = "background-color: grey; opacity: 0; transition: 0.5s; border-radius: 3px; color: white; font-family: sans-serif; transform: translate(-50%, -50%); top: 90%; left: 50%; position: fixed; z-index: 500;"
    document.body.appendChild(span);
    setTimeout(() => {
    span.style.opacity = 1;
    }, 50);
    setTimeout(() => {
    span.style.opacity = 0;
    setTimeout(() => {
    span.parentNode.removeChild(span);
    }, 500);
    }, 4500);
    }, 10);
    }, 500);
  }
  document.getElementById('join').onclick = () => {
    if (document.getElementById('name').value.length > 25) {
      document.getElementById('okay').innerText = 'Your name is over 25 characters!'
      document.getElementById('okay').style.color = "red";
      setTimeout(() => {
      document.getElementById('okay').innerText = 'Please enter a name.'
      document.getElementById('okay').style.color = "";
      }, 2000);
      document.getElementById('join').disabled = true;
    } else if (document.getElementById('name').value.replaceAll(' ', '').length > 0) {
      ${b === 11 ? "snow(false)" : ""}
      namesubmitted = true;
      document.getElementById('name').disabled = true;
      document.getElementById('message').disabled = false;
      document.getElementById('send').disabled = false;
      ws.send(JSON.stringify({type: 'name', data: document.getElementById('name').value}));
      document.getElementById('intro').style.opacity = 0;
      setTimeout(() => {
        document.getElementById('intro').hidden = true;
      document.getElementById('rest').hidden = false;
      setTimeout(() => {
      document.getElementById('rest').style.opacity = 1;
      }, 10);
      }, 500);
      } else {
      if (document.getElementById('name').value.replaceAll(' ', '').length === 0) {
      document.getElementById('okay').innerText = "You did not enter a name yet!"
    document.getElementById('okay').style.color = "red";
    setTimeout(() => {
    document.getElementById('okay').innerText = 'Please enter a name.'
    document.getElementById('okay').style.color = "";
    }, 2000);
  }
    document.getElementById('join').disabled = true;
      }
  }
  </script>`);
  }
});

// --- WebSocket Server ---
const wss = new WebSocket.Server({ 
  server, 
maxPayload: 500 * 1024 * 1024 
});
let match = false;
let number = "";
let timeout = "";
let websockets = [];
let clientCount = 0;
let storage = 0;
let messages = [];
let mutedIPS = [];
let names = [];
let settings = {
  CHAT_HISTORY_SAVE: false,
};
let OIQWUEIQUWEMXOIQJWS = require("./sett.js");
settings = []; //JSON.parse(JSON.stringify(OIQWUEIQUWEMXOIQJWS.settings));
messages = []; //JSON.parse(JSON.stringify(mess.messages));
if (messages.length > 30) {
  messages = [];
  messages.push(
    JSON.stringify({
      type: "html",
      data: '<font color="red"><b>Messages before these were deleted due to storage limitations.</b></font>',
    })
  );
  fs.writeFile("./messages.js", `exports.messages = []`, (err) => {});
}
let typings = "";
function broadcast(message, exclude) {
  if (exclude) {
    for (let ws of websockets) {
      if (ws.id !== exclude) {
        ws.send(message);
      }
    }
  } else {
    for (let ws of websockets) {
      ws.send(message);
    }
  }
}
let nextTick = new Date().getTime();
setInterval(() => {
  lag2 = Date.now() - lag;
  if (lag2 > 2) {
    broadcast(JSON.stringify({ type: "updatespeed", data: lag2 }));
    nextTick = new Date().getTime() + 1000;
    /*console.log("Okay it lagged. Recorded lag: " + lag2);
    broadcast(
      JSON.stringify({
        type: "broadcast",
        data: "Chatroom lagged! Total recorded lag: " + lag2 + " ms",
      })
    );*/
  }
  lag = new Date().getTime();
}, 0);
setInterval(() => {
  if (Date.now() > nextTick) {
    broadcast(JSON.stringify({ type: "updatespeed", data: lag2 }));
    nextTick = new Date().getTime() + 1000;
  }
}, 0);
updateCount = () => {
  broadcast(JSON.stringify({ type: "plus", data: Math.floor(view / 2) }));
};
/*function recox() {
  db = new WebSocket("fi2.bot-hosting.net:20905");
  db.on("open", () => {
    console.log("NICE IT WORKED ESCLIPPY!");
    db.on("message", (msg) => {
      console.log("so it works, but something still wrong..");
      console.log(msg);
      let msgg = JSON.parse(msg);
      console.log(msgg);
      broadcast(
        JSON.stringify({
          type: "dcmsg",
          name: msgg.name,
          data: msgg.contwnt,
        })
      );
    });
    db.on("close", () => {
      recox();
    });
  });
}
db.on("open", () => {
  console.log("NICE IT WORKED ESCLIPPY!");
  db.on("message", (msg) => {
    console.log("so it works, but something still wrong..");
    console.log(msg);
    let msgg = JSON.parse(msg);
    console.log(msgg);
    broadcast(
      JSON.stringify({
        type: "dcmsg",
        name: msgg.name,
        data: msgg.contwnt,
      })
    );
  });
  db.on("close", () => {
    recox();
  });
});*/
wss.on("connection", (ws, req) => {
  wss.lastmessage = new Date().getTime();
  // ws.send(JSON.stringify({ type: "plus", data: Math.floor(view / 2) }));
  ws.ip = req.headers["x-forwarded-for"];
  console.log(ws.ip.split(",")[0]);
  const fetch = require("node-fetch");
  let threats = [];
  let IPs = [];
  if (
    !IPs.includes(ws.ip.split(",")[0]) &&
    !threats.includes(ws.ip.split(",")[0])
  ) {
    fetch(
      `https://api.ipdata.co/${
        ws.ip.split(",")[0]
      }?api-key=fb4e79724a5ae24387736e41788054acb0338be745675279b03ce10a`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("noice");
        if (
          data.threat.is_tor === true ||
          data.threat.is_icloud_relay === true ||
          data.threat.is_proxy === true ||
          //data.threat.is_datacenter === true ||
          data.threat.is_anonymous === true ||
          data.threat.is_known_attacker === true ||
          data.threat.is_known_abuser === true ||
          data.threat.is_threat === true ||
          data.threat.is_bogon === true ||
          data.threat.is_tor === "true" ||
          data.threat.is_icloud_relay === "true" ||
          data.threat.is_proxy === "true" ||
          data.threat.is_datacenter === "true" ||
          data.threat.is_anonymous === "true" ||
          data.threat.is_known_attacker === "true" ||
          data.threat.is_known_abuser === "true" ||
          data.threat.is_threat === "true" ||
          data.threat.is_bogon === "true"
        ) {
          logs += `<tr>
          <td>[No name yet]</td>
          <td>${ws.ip}</td>
          <td>${Date.now()}</td>
          <td>Detected as an unsafe ip.</td>
          </tr>`;
          console.log("e");
          //ws.pause();
          threats.push(ws.ip);
        } else {
          console.log("o");
          IPs.push(ws.ip);
        }
      });
  }
  if (threats.includes(ws.ip.split(",")[0])) {
    console.log("ea");
    //ws.pause();
    threats.push(ws.ip);
  }
  if (IPs.includes(ws.ip.split(",")[0])) {
    console.log("oa");
  }
  /*for (let i = 0; i < messages.length; i++) {
    if (messages.length > 0) {
      ws.send(JSON.stringify({ type: "stopAnim" }));
      ws.send(messages[i]);
      ws.send(JSON.stringify({ type: "resAnim" }));
    }
  }*/
  console.log("Client connected");
  if (!websockets.includes(ws)) {
    websockets.push(ws);
  }
  if (mutedIPS.includes(ws.ip)) {
    ws.send(JSON.stringify({ type: "mute" }));
    //ws.pause();
    ws.muted = true;
    ws.send(
      JSON.stringify({
        type: "broadcast",
        whom: "mod",
        data: "You are currently muted. Please wait to be unmuted.",
      })
    );
    let m = setInterval(() => {
      if (ws.closed === true) {
        clearInterval(m);
      }
      if (!mutedIPS.includes(ws.ip)) {
        clearInterval(m);
        ws.send(JSON.stringify({ type: "unmute" }));
        ws.muted = false;
        ws.resume();
      }
    }, 0);
  }
  ws.on("message", (msg) => {
    try {
      let dat = JSON.parse(msg.toString());
      console.log(dat);
      if (dat.type === "name" && !ws.name) {
        let taken = false;
        for (let i = 0; i < names.length; i++) {
          if (names[i] === dat.data.substring(0, 25) && taken === false) {
            taken = true;
            console.log(names[i]);
            console.log(dat.data.substring(0, 25));
            console.log(names[i] === dat.data.substring(0, 25));
            console.log(String(dat.data.substring(0, 25)) === String(names[i]));
          }
        }
        if (
          dat.data.toLowerCase().includes("nigg") ||
          dat.data.toLowerCase().includes("slut") ||
          dat.data.toLowerCase().includes("pussy") ||
          dat.data.toLowerCase().includes("sex") ||
          dat.data.toLowerCase().includes("penis") ||
          dat.data.toLowerCase().includes("testicles") ||
          dat.data.toLowerCase().includes("chat room broadcast") ||
          dat.data.toLowerCase().includes("moderation bot") ||
          dat.data.toLowerCase().includes("broadcast") ||
          dat.data.toLowerCase().includes("moderation") ||
          dat.data.toLowerCase().includes("moderator") ||
          dat.data.toLowerCase().includes("ban") ||
          dat.data.toLowerCase().includes("\x7f") ||
          dat.data.toLowerCase().includes("ㅤ") ||
          dat.data.toLowerCase().includes("‎")
        ) {
          /*ws.send(
            JSON.stringify({
              type: "html",
              data: `<font color="red"><b>Sorry! Please choose another name.</b></font>`,
            })
          );*/
          ws.send(
            JSON.stringify({
              type: "Chooseanothername",
              data: "Sorry! Please choose another name.",
            })
          ); //(CH-oose AN-other NA-me)
        } else if (names.includes(dat.data.substring(0, 25))) {
          console.log("YES YES YES YES YES");
          ws.send(
            JSON.stringify({
              type: "Chooseanothername",
              data: "Sorry! This name is already taken.",
            })
          );
        } else if (dat.data.replaceAll(" ", "").length > 0) {
          console.log(names.indexOf(dat.data.substring(0, 25)));
          ws.id = Math.random().toString().substring(2);
          ws.name = dat.data.substring(0, 25);
          console.log("what? how?!");
          ws.typing = false;
          clientCount++;
          names.push(ws.name);
          broadcast(
            /*JSON.stringify({
              type: "name",
              data: String(ws.name),
              what: "joined",
            })*/
            JSON.stringify({
              type: "broadcast",
              data:
                "[b]" +
                ws.name +
                "[/b] has joined the chat! Total users: " +
                names.length,
            })
          );
         /* db.send(
            `**${ws.name} has joined the chat! Total users: ${names.length}**`
          );*/
          ws.lastmessage = Date.now() - 100;
          ws.mute = 20;
          ws.messages = [];
          ws.cooldownho = false;
          ws.muted = false;
          messages.push(
            /*JSON.stringify({
              type: "name",
              data: String(ws.name),
              what: "joined",
            })*/
            JSON.stringify({
              type: "broadcast",
              data: "[b]" + ws.name + "[/b] has joined the chat!",
            })
          );
          logs += `<tr>
          <td>${ws.name}</td>
          <td>${ws.ip}</td>
          <td>${Date.now()}</td>
          <td>Joined</td>
          </tr>`;
          ws.jointime = Date.now();
          users.push(`<tr>
          <td>${ws.name}</td>
          <td>${ws.ip}</td>
          <td>${ws.jointime}</td>
          </tr>`);
          if (dat.data.length > 25) {
            ws.send(
              JSON.stringify({
                type: "html",
                data: `<font color="red"><b>Your name cannot be longer than 25 characters!<${"/"}b><${"/"}font>`,
              })
            );
          }
        } else {
          /*ws.send(
            JSON.stringify({
              type: "html",
              data: `<font color="red"><b>Please enter a valid username!<${"/"}b><${"/"}font>`,
            })
          );*/
          ws.send(
            JSON.stringify({
              type: "Chooseanothername",
              data: "Please enter a valid username!",
            })
          );
        }
      } /*else if (dat.type === "ping") {
        ws.send(JSON.stringify({ type: "pong" }));
        (Does not do a thing)
      } */ else if (!ws.name) {
        ws.send(
          JSON.stringify({
            type: "Chooseanothername",
            data: "You can't send a message without a name!",
          })
        );
      } else if (dat.type === "thing") {
        newFileID = dat.ide;
        newFileName = dat.name;
        ids.push(String(newFileID));
        files[newFileID] = {
          data: "",
          type: dat.data,
        };
        // CHECKPOINT
        broadcast(
          JSON.stringify({
            type: "thing",
            data: dat.data,
            name: dat.name,
            ide: dat.ide,
          })
        );
        console.log(dat.name);
      } else if (dat.type === "starttyping" && ws.muted === false) {
        if (ws.typing === false) {
          ws.typing = true;
          broadcast(
            JSON.stringify({ type: "addtyping", data: ws.id, name: ws.name })
          );
        }
      } else if (dat.type === "stoptyping") {
        if (ws.typing === true) {
          ws.typing = false;
          broadcast(
            JSON.stringify({ type: "remtyping", data: ws.id, name: ws.name })
          );
        }
      } else if (dat.type === "cmd") {
        let command = String(dat.data).substring(1);
        if (command.startsWith("broadcast")) {
          broadcast(
            JSON.stringify({
              type: "broadcast",
              data: command.substring(10),
            })
          );
        } else if (command.startsWith("restart")) {
          broadcast(
            JSON.stringify({
              type: "broadcast",
              data: `Restarting server... This may take 2 seconds.`,
            })
          );
          broadcast(
            JSON.stringify({
              type: "broadcast",
              data: `Disconnecting all...`,
            })
          );
          exec("node server");
          process.exit(0);
        } else if (command.startsWith("eval")) {
          try {
            ws.send(
              JSON.stringify({
                type: "evaloutput",
                error: false,
                data: eval(command.substring(5)),
              })
            );
          } catch (error) {
            ws.send(
              JSON.stringify({
                type: "evaloutput",
                error: true,
                data: error.message,
              })
            );
          }
        } else if (command.startsWith("ip")) {
          ws.send(
            JSON.stringify({
              type: "html",
              data: `Your IP address is <a href="https://api.ipdata.co/${ws.ip}?api-key=fb4e79724a5ae24387736e41788054acb0338be745675279b03ce10a">${ws.ip}</a>.`,
            })
          );
        } else if (command.startsWith("id")) {
          for (let wsa of websockets) {
            if (wsa.name === command.substring(3)) {
              ws.send(
                JSON.stringify({
                  type: "html",
                  data:
                    `ID = <span style="user-select: all">` +
                    wsa.id +
                    `</span>.`,
                })
              );
            }
          }
          if (command.substring(3) === "Moderation Bot") {
            ws.send(
              JSON.stringify({
                type: "html",
                data: `ID = <span style="user-select: all">1110289370885137</span>.`,
              })
            );
          } else if (command.substring(3) === "Chat Room Broadcast") {
            ws.send(
              JSON.stringify({
                type: "html",
                data: `ID = <span style="user-select: all">1238712932811282</span>.`,
              })
            );
          }
        } else if (command.startsWith("storage")) {
          ws.send(
            JSON.stringify({
              type: "html",
              data: `<b>Storage space</b>: <span style="user-select: all">The current file storage is <u>${storage.toFixed(2)} MB</u></span>.`,
            })
          );
        } else if (command.startsWith("lag")) {
          ws.send(
            JSON.stringify({
              type: "html",
              data: `<b>Lag Monitor</b>: <span style="user-select: all">The current lag is <i><u>${lag2} ms</u>, with ${serverspeed} server speed</i></span>.`,
            })
          );
        } else if (command.startsWith("uptime")) {
          /*let g = Number(
            String(Date.now() - startTime.getTime()).substring(0, 3)
          );*/
          let g = Number(Math.floor(Date.now() - startTime.getTime())) / 1000;
          let days = 0;
          let hrs = 0;
          let mins = 0;
          let secs = 0;
          for (let i = 0; i < g; i++) {
            secs += 1;
            if (secs === 60) {
              mins += 1;
              secs = 0;
            }
            if (mins === 60) {
              hrs += 1;
              mins = 0;
            }
            if (hrs === 24) {
              days += 1;
              hrs = 0;
            }
          }
          let date =
            String(startTime).split(" ")[0] +
            ", " +
            String(startTime).split(" ")[1] +
            " " +
            String(startTime).split(" ")[2] +
            ", " +
            String(startTime).split(" ")[3];

          ws.send(
            JSON.stringify({
              type: "html",
              data: `<b>Chat Room Uptime</b>: <span style="user-select: all">The chatroom started on <u>${date}</u> and has been up for <u>
              ${
                days > 0
                  ? `${days > 9 ? String(days) : "0" + String(days)}:`
                  : ``
              }${hrs > 9 ? String(hrs) : "0" + String(hrs)}:${
                mins > 9 ? String(mins) : "0" + String(mins)
              }:${secs > 9 ? String(secs) : "0" + String(secs)}</u></span>.`,
            })
          );
        } else if (command.startsWith("mute")) {
          let who = command.substring(5).split("&r=")[0];
          let reason = command
            .substring(5)
            .split("&r=")[1]
            .replaceAll(command.substring(5).split("&d=")[1], "")
            .replaceAll("&d=", "");
          let duration = command.substring(5).split("&d=")[1];
          for (let wsa of websockets) {
            if (wsa.id === String(who)) {
              console.log("aaa");
              wsa.muted = true;
              broadcast(
                JSON.stringify({
                  type: "broadcast",
                  whom: "mod",
                  data:
                    "[b]" +
                    wsa.name +
                    "[/b] has been muted for " +
                    duration +
                    ` seconds. Reason: ${reason ? reason : "Unspecified."}`,
                })
              );
             /* db.send(
                `**${ws.name} has been muted for ${duration} seconds. Reason: ${
                  reason ? reason : "Unspecified."
                }**`
              );*/
              logs += `<tr>
          <td>${ws.name}</td>
          <td>${ws.ip}</td>
          <td>${Date.now()}</td>
          <td>Manually muted for ${Number(duration)} seconds.</td>
          </tr>`;
              wsa.muted = true;
              wsa.send(
                JSON.stringify({
                  type: "mute",
                })
              );
              mutedIPS.push(wsa.ip);
              setTimeout(() => {
                ws.muted = false;
                mutedIPS.splice(wsa.ip);
                wsa.send(
                  JSON.stringify({
                    type: "unmute",
                  })
                );
              }, Number(String(duration + "000")));
            }
          }
        } else if (command.startsWith("scream")) {
          broadcast(
            JSON.stringify({
              type: "broadcast",
              data: `Oh fuck.... AAAAAAAAH`,
            })
          );
          broadcast(
            JSON.stringify({
              type: "scream",
            })
          );
        } else if (command.startsWith("race")) {
        broadcast(
              JSON.stringify({
                type: "broadcast",
                data: ws.name + " has started a number match!",
              })
          )
          setTimeout(() => {
          broadcast(
              JSON.stringify({
                type: "broadcast",
                data: "Type out the number in words as fast as you can.",
              })
          )
          }, 2000);
          setTimeout(() => {
          broadcast(
              JSON.stringify({
                type: "broadcast",
                data: "3.. 2... 1.... GO!",
              })
          )
          }, 4000);
          // This is where the match starts!
          setTimeout(() => {
          let a; let b; let c;
          let w = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
          let nums = [];
          let sr = "";
          if (command.substring(5) && Number(command.substring(5)) > 1) {
          for (let i = 0; i < Number(command.substring(5)); i++) {
          let buh = Math.floor(Math.random() * 9)
          nums.push(w[Number(buh)]);
          sr += String(buh);
          number = nums.join(' ');
          }
          broadcast(
              JSON.stringify({
                type: "broadcast",
                data: "Number: [b]"+sr+"[/b].",
              })
          );
          } else {
          a = String(Math.floor(Math.random() * 9));
          b = String(Math.floor(Math.random() * 9));
          c = String(Math.floor(Math.random() * 9));
            broadcast(
              JSON.stringify({
                type: "broadcast",
                data: "Number: [b]"+a+b+c+"[/b].",
              })
          );
          number = w[Number(a)]+' '+w[Number(b)]+' '+w[Number(c)]; // the number in words!
          }
          match = true;
          timeout = new Date().getTime();
          }, 6000);
          
        } else if (command.startsWith("rolldice")) {
          // /rolldice 5
          let dicesides = Number(command.substring(9));
          if (isNaN(dicesides) === true) {
            // If the person rolling the dice is stupid and chooses a NaN number,
            // The server has more patience than I do! XD
            ws.send(
              JSON.stringify({
                type: "html",
                data: `<font color="red"><b>Please enter a valid dice number! (The dice number cannot be NaN)<${"/"}b><${"/"}font>`,
              })
            );
            // u stoopid for rolling NaN fr
          } else if (String(command).replaceAll(" ", "") === "rolldice") {
            // dw i won't call u stupid for this lmfao
            ws.send(
              JSON.stringify({
                type: "html",
                data: `<font color="green">Syntax: /rolldice (sides of the dice). (e.g /rolldice 6)<${"/"}font>`,
              })
            );
          } else {
            let chosenside = Math.floor(Math.random() * dicesides);
            if (chosenside === 0) {
              // There's nothing like a "0" on a dice side, right? lmao
              chosenside = 1;
            }
            // Hooray! Now broadcast it frfr
            broadcast(
              JSON.stringify({
                type: "broadcast",
                data:
                  ws.name +
                  " has rolled a dice with " +
                  String(dicesides) +
                  " sides! The dice landed on: " +
                  String(chosenside) +
                  ".",
              })
            );
          }
        } else if (command.startsWith("flipcoin")) {
          let chances = ["heads", "tails", "upright"];
          let chosen = Math.floor(Math.random() * 2.1);
          if (chosen === 2) {
            broadcast(
              JSON.stringify({
                type: "broadcast",
                data:
                  ws.name + " has flipped a coin. The coin stood on it's side!",
              })
            );
          } else {
            broadcast(
              JSON.stringify({
                type: "broadcast",
                data:
                  ws.name +
                  " has flipped a coin. The coin landed on: " +
                  chances[chosen] +
                  "!",
              })
            );
          }
        } else if (command.startsWith("help")) {
          let commands = [
            "/help: Shows help menu.",
            "/flipcoin: Flips a coin. (Heads/Tails)",
            "/rolldice: Rolls a dice. (You can choose the number of sides)",
            "/uptime: Shows how long the chatroom server has stayed on for.",
            "/scream: Plays a sound of a marmot screaming. (Volume warning)",
            "/id: Shows the ID of a present user. (Most helpful in muting)",
            "/eval: Uses javascript to execute custom lines of code on the server.",
            "/broadcast: Broadcasts a message to all users present.",
          ];
          ws.send(JSON.stringify({ type: "helpmenu", data: commands }));
        } else {
          let id = String(Math.random()).substring(2);
          console.log;
          broadcast(
            JSON.stringify({
              type: "message",
              name: String(ws.name),
              data: String(dat.data).replaceAll("\n", "").substring(0, 75),
              id: id,
              author: false,
            }),
            ws.id
          );
          ws.send(
            JSON.stringify({
              type: "message",
              name: String(ws.name),
              data: String(dat.data).replaceAll("\n", "").substring(0, 75),
              id: id,
              author: true,
            })
          );
          (ws.lastmsg = String(dat.data).replaceAll("\n", "").substring(0, 75)),
            (ws.lastmsgid = id);
          ws.send(
            JSON.stringify({
              type: "html",
              data: `<font color="red"><b>Command doesn't exist.<${"/"}b><${"/"}font>`,
            })
          );
        }
      } else if (dat.type === "delete") {
        if (ws.messages.includes(dat.data)) {
          broadcast(
            JSON.stringify({
              type: "delete",
              data: dat.data,
            })
          );
        } else {
          ws.send(
            JSON.stringify({
              type: "html",
              data: "You cannot delete a message you did not send!",
            })
          );
        }
      } else if (dat.type === "edit") {
        if (ws.messages.includes(dat.msg)) {
          broadcast(
            JSON.stringify({
              type: "edit",
              data: dat.data.substring(0, 75),
              id: dat.id,
            })
          );
        } else {
          ws.send(
            JSON.stringify({
              type: "html",
              data: "You cannot edit a message you did not send!",
            })
          );
        }
      } else if (dat.type === "message") {
        if (
          String(dat.data).replaceAll(" ", "").length > 0 &&
          ws.muted === false
        ) {
          if (Number(Date.now() - ws.lastmessage) < 200) {
            broadcast(
              JSON.stringify({
                type: "broadcast",
                whom: "mod",
                data:
                  "[b]" +
                  ws.name +
                  "[/b] has been muted for " +
                  ws.mute +
                  " seconds. Reason: Potential spam.",
              })
            );
            /*db.send(
              `**${ws.name} has been muted for ${ws.mute} seconds. Reason: Potential spam.**`
            );*/
            logs += `<tr>
          <td>${ws.name}</td>
          <td>${ws.ip}</td>
          <td>${Date.now()}</td>
          <td>Automatically muted for ${Number(ws.mute)} seconds.</td>
          </tr>`;
            ws.muted = true;
            ws.send(
              JSON.stringify({
                type: "mute",
              })
            );
            mutedIPS.push(ws.ip);
            setTimeout(() => {
              ws.muted = false;
              mutedIPS.splice(ws.ip);
              ws.send(
                JSON.stringify({
                  type: "unmute",
                })
              );
            }, Number(String(ws.mute + "000")));
            ws.mute += 10;
          } /*else if (String(dat.data).toLowerCase().includes("nigg")) {
            broadcast(
              JSON.stringify({
                type: "broadcast",
whom: "mod",
                data:
                  "[b]" +
                  ws.name +
                  "[/b] has been muted for " +
                  ws.mute +
                  " seconds. Reason: No, no, no :)",
              })
            );
            ws.muted = true;
            ws.send(
              JSON.stringify({
                type: "mute",
              })
            );
            mutedIPS.push(ws.ip);
            setTimeout(() => {
              ws.muted = false;
              mutedIPS.splice(ws.ip);
              ws.send(
                JSON.stringify({
                  type: "unmute",
                })
              );
            }, Number(String(ws.mute + "000")));
            ws.mute += 20;
          }*/ else {
            let prohibitedwords = [
              "nigg",
              "pussy",
              "slut",
              "cock",
              "penis",
              "sex",
              "porn",
              "naked",
              "cum",
            ]; // Uhhhhh if u seeing dat, i dont swear :')
            let slurdetected = false;
            for (let word of prohibitedwords) {
              if (
                String(dat.data).includes(word) ||
                String(ws.lastmsg + dat.data).includes(word)
              ) {
                if (String(ws.lastmsg + dat.data).includes(word)) {
                  broadcast(
                    JSON.stringify({
                      type: "delete",
                      data: ws.lastmsgid,
                    })
                  );
                }
                slurdetected = true;
                broadcast(
                  JSON.stringify({
                    type: "broadcast",
                    whom: "mod",
                    data:
                      "[b]" +
                      ws.name +
                      "[/b] has been muted for " +
                      ws.mute +
                      " seconds. Reason: Slurring/Offensive language.",
                  })
                );
               /* db.send(
                  `**${ws.name} has been muted for ${ws.mute} seconds. Reason: Slurring/Offensive language.**`
                );*/
                ws.muted = true;
                ws.send(
                  JSON.stringify({
                    type: "mute",
                  })
                );
                mutedIPS.push(ws.ip);
                setTimeout(() => {
                  ws.muted = false;
                  mutedIPS.splice(ws.ip);
                  ws.send(
                    JSON.stringify({
                      type: "unmute",
                    })
                  );
                }, Number(String(ws.mute + "000")));
              }
            }
            if (slurdetected === false) {
              let id = String(Math.random()).substring(2);
              if (match === true) { // Check if a match is happening
              if (dat.data.includes(number)) {
              // YEA BOIIII WE GOT A WINNER LESGOOOO!!! :3
              setTimeout(() => {
              match = false;
              broadcast(
              JSON.stringify({
                type: "broadcast",
                data: ws.name + " has WON the match, by typing the number in "+(Date.now() - timeout) / 1000+" seconds!",
              })
          )
                // wtf someone won the match?! time to wind up fr...
                timeout = "";
                number = "";
              }, 10); // delay so both messages don't overlap each other!
              }
              }
            /*  db.send(
                `**${ws.name}**: ${dat.data
                  .replaceAll("\n", "")
                  .substring(0, 75)}`
              );*/
              ws.messages.push(id);
              if (dat.emb) {
                broadcast(
                  JSON.stringify({
                    type: "message",
                    name: String(ws.name),
                    data: String(dat.data)
                      .replaceAll("\n", "")
                      .substring(0, 75),
                    id: id,
                    emb: dat.emb,
                    author: false,
                  }),
                  ws.id
                );
                ws.send(
                  JSON.stringify({
                    type: "message",
                    name: String(ws.name),
                    data: String(dat.data)
                      .replaceAll("\n", "")
                      .substring(0, 75),
                    id: id,
                    emb: dat.emb,
                    author: true,
                  })
                );
                (ws.lastmsg = String(dat.data)
                  .replaceAll("\n", "")
                  .substring(0, 75)),
                  (ws.lastmsgid = id);
              } else {
                if (dat.reply === true) {
                  console.log("YEAH IT WORKS FROM HERE ALL GOOD FR");
                  broadcast(
                    JSON.stringify({
                      type: "message",
                      name: String(ws.name),
                      data: String(dat.data)
                        .replaceAll("\n", "")
                        .substring(0, 75),
                      id: id,
                      author: false,
                      replymsg: String(dat.replymsg),
                      replyname: String(dat.replyname),
                      replyID: String(dat.replyID),
                    }),
                    ws.id
                  );
                  ws.send(
                    JSON.stringify({
                      type: "message",
                      name: String(ws.name),
                      data: String(dat.data)
                        .replaceAll("\n", "")
                        .substring(0, 75),
                      id: id,
                      author: true,
                      replymsg: String(dat.replymsg),
                      replyname: String(dat.replyname),
                      replyID: String(dat.replyID),
                    })
                  );
                } else {
                  broadcast(
                    JSON.stringify({
                      type: "message",
                      name: String(ws.name),
                      data: String(dat.data)
                        .replaceAll("\n", "")
                        .substring(0, 75),
                      id: id,
                      author: false,
                    }),
                    ws.id
                  );
                  ws.send(
                    JSON.stringify({
                      type: "message",
                      name: String(ws.name),
                      data: String(dat.data)
                        .replaceAll("\n", "")
                        .substring(0, 75),
                      id: id,
                      author: true,
                    })
                  );
                }
                (ws.lastmsg = String(dat.data)
                  .replaceAll("\n", "")
                  .substring(0, 75)),
                  (ws.lastmsgid = id);
              }
              if (
                dat.data.toLowerCase().includes("ho ho ho") &&
                ws.cooldownho === false &&
                String(Date()).includes("December")
              ) {
                ws.cooldownho = true;
                setTimeout(() => {
                  ws.cooldownho = false;
                }, 10000);
                let messa = [
                  "Ho Ho Ho!",
                  "Ho HO ho!",
                  "ho ho ho!",
                  "HO HO HO!",
                  "Ho ho ho! :)",
                  "ho ho ho! :D",
                ];
                let messag = [
                  "eh eh eh!",
                  "He HE he!",
                  "eh eh eh!",
                  "OH OH EH!",
                  "Oh eh oh! >:)",
                  "oh oh oh! >:D",
                  "ooooooh :<",
                ];
                messag = messag[Math.floor(Math.random() * messag.length)];
                let mess = "";
                setTimeout(() => {
                  broadcast(
                    JSON.stringify({
                      type: "broadcast",
                      whom: "santa",
                      data: "Ho Ho Ho!",
                    })
                  );
                  mess = messa[Math.floor(Math.random() * messa.length)];
                }, 1000);
                setTimeout(() => {
                  broadcast(
                    JSON.stringify({
                      type: "broadcast",
                      data: mess,
                    })
                  );
                  mess = messa[Math.floor(Math.random() * messa.length)];
                }, 2000);
                setTimeout(() => {
                  broadcast(
                    JSON.stringify({
                      type: "broadcast",
                      whom: "mod",
                      data: mess,
                    })
                  );
                  mess = messa[Math.floor(Math.random() * messa.length)];
                }, 3000);
                setTimeout(() => {
                  broadcast(
                    JSON.stringify({
                      type: "broadcast",
                      whom: "grinch",
                      data: messag,
                    })
                  );
                }, 4000);
              }
              ws.lastmessage = Date.now();
              messages.push(
                JSON.stringify({
                  type: "message",
                  name: String(ws.name),
                  data: String(dat.data).replaceAll("\n", "").substring(0, 75),
                })
              );
              if (dat.data.includes("@Chat Room Broadcast")) {
                setTimeout(() => {
                  broadcast(
                    JSON.stringify({
                      type: "broadcast",
                      data: "Bruh why you not leave me alone :(",
                    })
                  );
                }, 300);
              }
              if (dat.data.includes("@Moderation Bot")) {
                setTimeout(() => {
                  broadcast(
                    JSON.stringify({
                      type: "broadcast",
                      whom: "mod",
                      data: "Bro shut up i ain't helping you/your friend who is muted >:(",
                    })
                  );
                }, 400);
              }
            }
          }
          if (dat.data.length > 75) {
            ws.send(
              JSON.stringify({
                type: "html",
                data: `<font color="red"><b>Your message cannot over 75 characters!<${"/"}b><${"/"}font>`,
              })
            );
          }
        }
      }
    } catch (error) {
      broadcast("new file!");
      files[newFileID].data = msg;
      storage += files[newFileID].data.length / (1024*1024)
      console.log(newFileID + " THIS IS THE ID");
      console.log("broadcasting itttt");
      /*broadcast(
        JSON.stringify({
          type: "file",
          data: newFileID,
        })
      );*/
      console.log("broadcasted yay");
      // CHECKPOINT
      newFileID = "";
      newFileName = "";
      // console.log(msg);
      //console.error(error);
      // console.log(msg.data);
      /*ws.send(
        JSON.stringify({
          type: "html",
          data: '<b><font color="red">Something went wrong while parsing the message. Sorry!</font></b>',
        })
      );*/
    }
    fs.writeFile(
      "./messages.js",
      `exports.messages = ${JSON.stringify(messages)}`,
      (err) => {}
    );
  });

  ws.on("close", () => {
    console.log(ws.name + " disconnected");
    if (ws.name) {
      if (clientCount !== 0 && ws.closed === false) {
        ws.closed = true;
        clientCount -= 1;
      }

      names.splice(names.indexOf(ws.name), 1);
      users.splice(
        users.indexOf(`<tr>
          <td>${ws.name}</td>
          <td>${ws.ip}</td>
          <td>${ws.jointime}</td>
          </tr>`),
        1
      );
      broadcast(
        /*JSON.stringify({
          type: "name",
          data: String(ws.name),
          what: "left",
        })*/
        JSON.stringify({
          type: "broadcast",
          data:
            "[b]" +
            ws.name +
            "[/b] has left the chat! Total users: " +
            names.length,
        })
      );
     // db.send(`**${ws.name} has left the chat! Total users: ${names.length}**`);
      logs += `<tr>
          <td>${ws.name}</td>
          <td>${ws.ip}</td>
          <td>${Date.now()}</td>
          <td>Left</td>
          </tr>`;
      messages.push(
        /*JSON.stringify({
          type: "name",
          data: String(ws.name),
          what: "left",
        })*/
        JSON.stringify({
          type: "broadcast",
          data: "[b]" + ws.name + "[/b] has left the chat!",
        })
      );
      if (ws.typing === true) {
        broadcast(
          JSON.stringify({ type: "remtyping", data: ws.id, name: ws.name })
        );
        ws.typing = false;
      }
      ws.name = "Unknown_User_" + ws.id;
    }
  });
});

// Start server
server.listen(8080, () => {
  console.log("HTTP + WS server running on http://localhost:8080");
});
