import io  from 'socket.io-client';
export class PubSubService {
    url:string = "http://[::1]:3000"
    socket:any;

    constructor(){
        this.socket = io(this.url);
        console.log('this.socker', this.socket)
         // Subscribe to a channel
        this.socket.on('connect', () => {
            console.log('✅ Connected to server');
        });
       
        //this.socket.emit('subscribe', { channel: "test" });
        // // Publish a message to a channel
        // this.socket.emit('publish', { channel: 'channelName', message: 'Hello, world!' });
        // Listen for messages from the server
        this.socket.on('message', (data:any) => {
            console.log('🚀 Received message:', data);
        });
        this.socket.on("message", (content:string) => {
            console.log("Getting the message from the front", content); // 1
   
        });
    }

    





}