import socketIO from 'socket.io-client'

// const io = socketIO('http://10.185.1.139:8080')

const io = socketIO('http://localhost:8080', {
      transportOptions: {
        polling: {
          extraHeaders :{
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        }
      }
    })

export default io