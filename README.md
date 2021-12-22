# タコヤキ - Takoyaki Frontend
A delightfully minimalistic frontend for からつばLABS' **project takoyaki** - the VPS platform

## RUNNING FOR DEVELOPMENT

### Compiles and hot-reloads for development

First make sure we are using the right version of node:
```
$ nvm install 14.17.6
$ nvm use
```

Now run app:
```
$ npm run serve
```

### Build docker container
```
$ docker build -t takoyaki-frontend .
$ docker run -p 8080:8080 takoyaki-frontend
```

## RUNNNING FOR PRODUCTION

### Compiles and minifies for production
```
$ npm run build
```
