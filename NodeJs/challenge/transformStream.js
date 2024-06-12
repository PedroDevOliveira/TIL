const stream = require('node:stream');

/* Solution */
function setupStreams(dataInputStream, dataOutputStream, callback) {
    let id = 0;
    const transformStream = new stream.Transform({
        objectMode: true,
        transform(chunk, _encoding, callback) {
            const data = JSON.parse(chunk);
            data.id = id;
            this.push(data)
            id++
            callback()
        }
    })
    dataInputStream.pipe(transformStream).pipe(dataOutputStream).on('finish', callback);
}

let readable = new stream.Readable();
let writable = new stream.Writable({  objectMode: true,
    write: (chunk, encoding, callback) => {
        console.log(chunk);
        callback(null, true);
    }
});
setupStreams(readable, writable, () => console.log("onEnd"));

readable.push('{ "log": "Request received" }');
readable.push(null);
module.exports.setupStreams = setupStreams;