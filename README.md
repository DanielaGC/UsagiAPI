#### How to install
> npm i --save DanielaGC/UsagiAPI#master

#### How to use

```js
const { UsagiAPI } = require('usagiapi')
const usagi = new UsagiAPI()

usagi.kiss().then(action => {
	console.log(action)
})
```
