const Markers = require('./markers')

class Sockets {
  constructor(io) {
    this.io = io
    this.markers = new Markers()
    this.socketEvents()
  }

  socketEvents() {
    this.io.on('connection', (socket) => {
      console.log('Client connected')
      //active markers event
      socket.emit('active-markers', this.markers.actives)
      //new marker event
      socket.on('new-marker', (marker) => {
        this.markers.addMarker(marker)
        socket.broadcast.emit('new-marker', marker)
      })
      //update marker event
      socket.on('updated-marker', (marker) => {
        this.markers.updateMarker(marker)
        socket.broadcast.emit('updated-marker', marker)
      })
    })
  }
}

module.exports = Sockets
