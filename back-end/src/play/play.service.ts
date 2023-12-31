import { Injectable } from '@nestjs/common';

var app = require("express")();
var http = require("http").createServer(app);
var io = require('socket.io')(http);

var port = 3001;
@Injectable()
export class PlayService {

    async sendCommand(CommandData){
        http.listen(port, () => {
            console.log("listening on *:" + port);
          });
          
          io.on('connection', function (socket) {
            console.log(socket.id, 'Connected');
          
            socket.emit('msg', `${socket.id} 연결 되었습니다.`);
            console.log(CommandData);
            socket.on('msg', function (data) {
              console.log(socket.id, data);
              
              socket.emit('msg', `Server : "${data}" 받았습니다.`);
            });
            socket.emit('msg', `CommandData는 ${CommandData.command}입니다.`);
          });
    }
}
