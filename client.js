import { createConnection } from "node:net";

// const client = createConnection({
//     host: "localhost",
//     port: 9001,
// })
// const message = "Hello World";
// client.write(Buffer.from(message));

class MyProtocol {

    constructor() {
        this.client = createConnection({
            host: "localhost",
            port: 9001,
        });

        this.ready = false;

        console.log("Connection Established....");
        this.ready = true;

        this.client.on('end' , () => {
            this.ready = false;
            console.log(`Retry connection 3-4 times`)
        })

    }

    send(data) {
        const payload = `[SOF]${data}[EOF]`;
        this.client.write(Buffer.from(payload));
    }

}

const c = new MyProtocol();
c.send('Hello World');