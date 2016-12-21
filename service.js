import pm2 from 'pm2';

pm2.connect(err => {
  if (err) {
    console.error(err);
    process.exit(2);
  }

  pm2.start({
    script: './lib/index.js',
    name: 'jenkins-anybar',
    // exec_mode : 'cluster',
    // instances : 4,
    // max_memory_restart : '100M'
  }, function(err, apps) {
    pm2.disconnect();

    if (err) {
      throw err
    }
  });
});
