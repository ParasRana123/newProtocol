import { createServer } from "node:net";

const server = createServer((socket) => {
    console.log(`A new TCP Socket connected......`);
    socket.on("data" , (data) => {
        console.log("Data Recieved" , data.toString());
    })
})

server.listen(9001);