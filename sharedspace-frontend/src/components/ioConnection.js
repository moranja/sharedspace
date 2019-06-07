import socketIO from 'socket.io-client'

let io = null

const initSocket = () => {
  if (!io) {
    io = socketIO('http://35.224.230.154:80', {
      transportOptions: {
        polling: {
          extraHeaders: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        }
      }
    })
  }
}

const resetIO = () => {
  io = null
}
export  {io, initSocket, resetIO}
