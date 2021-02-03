#### How to install
> npm i --save DanielaGC/UsagiAPI#master

#### How to use

```js
async function usage() {
    const { UsagiAPI } = require('usagiapi')
    const Usagi = new UsagiAPI()

    const usagi = await Usagi.kiss()

    console.log(usagi.url)
}

usage()
```