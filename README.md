# タコヤキ - Takoyaki Frontend
A delightfully minimalistic frontend for からつばLABS' **project takoyaki** - the VPS platform

## RUNNING FOR DEVELOPMENT

### Compiles and hot-reloads for development
Install the correct node version

```
$ nvm install 14.17.6
$ nvm use
```

Now run app:
```
$ npm run serve
```

## RUNNNING FOR PRODUCTION

### Dockerized
```
$ docker build -t takoyaki-frontend .
$ docker run -p 8080:8080 takoyaki-frontend
```
### Undockerized
```
$ npm run build
```

## TODO

- [ ] Add logout button
- [ ] Make custom errors
- [ ] Replace per-vps approval with service limits
- [ ] Implement shared VM's (Requires backend changes so maybe use a seperate branch for this?)
