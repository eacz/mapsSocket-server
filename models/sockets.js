const Markers = require("./markers")

class Sockets {
  constructor(io) {
    this.io = io
    this.marker = new Markers()
    this.socketEvents()
  }

  socketEvents() {
    this.io.on('connection', (socket) => {
        //TODO: active markers event

        //TODO: new marker event
        
        //TODO: update marker event
    })
  }
}

module.exports = Sockets
