# Simple Jenkins monitoring with AnyBar

Install and run [AnyBar](https://github.com/tonsky/AnyBar) first:
```
brew cask install anybar
open -a AnyBar
```

Install `jenkins-anybar` from npm:
```
npm install -g jenkins-anybar
```

Run it with your credentials where the first argument is Jenkins url and the second is job name:
```
jenkins-anybar start https://jenkins.yourdomain.com/ job-name
```

Pass `stop` as the second argument to stop the service:
```
jenkins-anybar stop
```

### Build status colors

<img src="https://github.com/tonsky/AnyBar/raw/master/AnyBar/Resources/white@2x.png?raw=true" width=19 /> Monitoring is not active

<img src="https://github.com/tonsky/AnyBar/raw/master/AnyBar/Resources/red@2x.png?raw=true" width=19 /> Build error

<img src="https://github.com/tonsky/AnyBar/raw/master/AnyBar/Resources/yellow@2x.png?raw=true" width=19 /> Build is working

<img src="https://github.com/tonsky/AnyBar/raw/master/AnyBar/Resources/green@2x.png?raw=true" width=19 /> Build success

<img src="https://github.com/tonsky/AnyBar/raw/master/AnyBar/Resources/exclamation@2x.png?raw=true" width=19 /> Connection error or timeout

### Logs
`jenkins-anybar` uses [pm2](https://github.com/unitech/pm2) process manager underneath, you can install it to get access to logs:
```
npm install -g pm2
pm2 logs --lines 100
pm2 show jenkins-anybar # show service status
```
