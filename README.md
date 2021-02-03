#### How to install
> npm i --save DanielaGC/UsagiAPI#master

#### How to use

```js
const { UsagiAPI } = require('usagiapi')
const Usagi = new UsagiAPI()

Usagi.kiss().then(action => {
	console.log(action.url)
})
```
