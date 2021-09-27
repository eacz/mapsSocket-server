const Markers = require("./markers")

class Sockets {
  constructor(io) {
    this.io = io
    this.markers = new Markers()
    this.socketEvents()
  }

  socketEvents() {
    this.io.on('connection', (socket) => {
        //active markers event
        socket.emit('active-markers', this.markers.actives )
        //new marker event
        socket.on('new-marker', marker => {
          this.markers.addMarker(marker)
          socket.broadcast.emit('new-marker', marker)
        })
        //TODO: update marker event
    })
  }
}

module.exports = Sockets
