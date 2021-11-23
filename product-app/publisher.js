const amqp = require('amqplib/callback_api')

var q = 'review-queue';

function bail(err) {
  console.error(err);
  // process.exit(1);
}

// Publisher
function publish(conn, msg) {
  conn.createChannel(on_open);
  function on_open(err, ch) {
    if (err != null) bail(err);
    ch.assertQueue(q);
    ch.sendToQueue(q, Buffer.from(msg));
  }
}

const connectAmqp = async () => {
    return new Promise( (resolve, reject) => {

        amqp
        .connect('amqps://', 
                function(err, conn) {
                    if (err) return reject(err)
                    return resolve(conn)
        });
    })
}


const publishRating = async (rating) => {
    const msg = JSON.stringify(rating)
 
    try {
        const conn = await connectAmqp()
        publish(conn, msg)
        console.log('msg sent')
    }catch(err) {
        console.log(err)
    }
}

publishRating({restaurent_id:  Math.ceil(Math.random() * 1000000), rating: Math.ceil(Math.random() * 5)})
