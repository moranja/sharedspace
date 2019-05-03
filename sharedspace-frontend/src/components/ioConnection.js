import socketIO from 'socket.io-client'

const io = socketIO('http://localhost:8080')

export default io

// {
//   transportOptions: {
//     polling: {
//       extraHeaders :{
//         'Authorization' : `Bearer ${localStorage.getItem('token')}`
//       }
//     }
//   }
// }
