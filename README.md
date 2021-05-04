#### How to install
> npm i --save DanielaGC/UsagiAPI#master

#### How to use

```js
const { UsagiAPI } = require("usagiapi");
const usagi = new UsagiAPI();

usagi.get({ type: "Request Type" }).then(action => {
	console.log(action);
});

```
### All Request Types

| Type | Description |
| -------- | ----------- |
| `dance` | Get a URL of a dance gif
| `feed` | Get a URL of a feeding gif |
| `hug`  | Get a URL of a hug gif |
| `kiss` | Get a URL of a kiss gif |
| `pat`  | Get a URL of a pat gif |
| `poke` | Gets a URL of a poke gif |
| `slap` | Gets a URL of a slap gif |
| `tickle` | Gets a URL of a tickle gif |