#### How to install
> npm i --save DanielaGC/UsagiAPI#master

#### How to use

```js
const { UsagiAPI } = require('usagiapi')
const usagi = new UsagiAPI()

usagi.get({ endpoint: 'kiss' }).then(action => {
	console.log(action)
})
```
### All functions 

| Function | Description                             |
| -------- | -----------                             |
| `dance`  | [DEPRECATED] Get a URL of a dance gif   |
| `feed`   | [DEPRECATED] Get a URL of a feeding gif |
| `get`    | Get a URL of any endpoint of the API    |
| `hug`    | [DEPRECATED] Get a URL of a hug gif     |
| `kiss`   | [DEPRECATED] Get a URL of a kiss gif    |
| `pat`    | [DEPRECATED] Get a URL of a pat gif     |
| `poke`   | [DEPRECATED] Gets a URL of a poke gif   |
| `slap`   | [DEPRECATED] Gets a URL of a slap gif   |
| `tickle` | [DEPRECATED] Gets a URL of a tickle gif |

### All endpoints

| Endpoint | Description                |
| -------- | -----------                |
| `dance`  | Get a URL of a dance gif   |
| `feed`   | Get a URL of a feeding gif |
| `hug`    | Get a URL of a hug gif     |
| `kiss`   | Get a URL of a kiss gif    |
| `pat`    | Get a URL of a pat gif     |
| `poke`   | Gets a URL of a poke gif   |
| `slap`   | Gets a URL of a slap gif   |
| `tickle` | Gets a URL of a tickle gif |