// use strict
let callBacks = {
  connected: () => { console.log("Connected!") },
  disconnected: () => { console.log("Disconnected!") },
  rejected: () => { console.log("Rejected!") },
  received: (data) => {
    let elt = document.createElement("div");
    elt.classList.add("line");
    elt.innerHTML = `
      <div class="time">${(moment(data.time).format("h:mm:ss"))}</div>
      <div class="message">${data.message}</div>
    `;
    $("#chat").append(elt);
  }
};
App.chatChannel = App.cable.subscriptions.create({channel: "ChatChannel"}, callBacks);

