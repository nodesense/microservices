const amqp = require('amqplib/callback_api')

var q = 'review-queue';

function bail(err) {
  console.error(err);
  // process.exit(1);
}

// Consumer
function consumer(conn) {
    var ok = conn.createChannel(on_open);
    function on_open(err, ch) {
      if (err != null) bail(err);
      ch.assertQueue(q);
      ch.consume(q, function(msg) {
        if (msg !== null) {
          console.log(msg.content.toString());
          const rating = JSON.parse(msg.content.toString())
          console.log('rating', rating)
          // TODO: update mongodb
          ch.ack(msg);
        }
      });
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

connectAmqp().then( (conn) => {
    consumer(conn)
})
