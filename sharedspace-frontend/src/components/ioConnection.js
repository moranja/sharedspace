import socketIO from 'socket.io-client'

// const io = socketIO('http://10.185.5.173:8080')

let io = null

const initSocket = () => {
  if (!io) {
    io = socketIO('http://localhost:8080', {
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
