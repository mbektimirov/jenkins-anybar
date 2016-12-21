import pm2 from 'pm2';
import anybar from 'anybar';

export function start (args) {
  console.log('Starting service...');

  pm2.connect(err => {
    if (err) {
      console.error(err);
      process.exit(2);
    }


    pm2.start({
      name: 'jenkins-anybar',
      script: 'script.js',
      args,
    }, function(err, apps) {
      pm2.disconnect();

      if (err) {
        throw err;
      }
    });
  });
}

export function stop () {
  console.log('Stopping service...');

  pm2.connect(err => {
    if (err) {
      console.error(err);
      process.exit(2);
    }

    pm2.stop('jenkins-anybar', _err => {
      pm2.disconnect();
      anybar('white');

      if (_err) {
        throw _err;
      }
    });
  });
}

