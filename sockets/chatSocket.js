
const ChatSocketHelper = {
  users: [],

  onConnection(socketIO) {
    socketIO.on('connection', (socket) => {
      console.log('connection establishment is in progress...');
      
      socket.on('join', (socketData) => { 
        socket.join(socketData);
        const {id} = socket;

        this.users.push({id, userName: socketData});
        let sockets = [];

        Object.keys(socketIO.sockets.sockets).forEach((userId) => {
          sockets = this.users.filter((user) => user.id === userId)      
        })

        socketIO.sockets.emit('users', sockets)
      })

      socket.on('send', (socketData) => {
        socketIO.sockets.to(socketData.receiver).emit('receiver', socketData)
      })
    })
  }

};

export default ChatSocketHelper;
