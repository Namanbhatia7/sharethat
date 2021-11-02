(function(){
    let recieverID;
    const socket = io();

    function generateID(){
        return `${Math.trunc(Math.random()*999)}-${Math.trunc(Math.random()*999)}-${Math.trunc(Math.random()*999)}`;
    }

    document.querySelector("#sender-start-con-btn").addEventListener("click", function(){
        let joinID = generateID();
        console.log(joinID)
        document.querySelector("#join-id").innerHTML = `<b>Room Id</b><span>${joinID}</span>`; 

        socket.emit("sender-join", {
            uid: joinID
        });
    });



})();