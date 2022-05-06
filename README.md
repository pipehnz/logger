# A simple logger for Node.JS

## 🤔 How to use?

This logger is a wrapper based on [Pino](https://github.com/pinojs/pino) to use this logger is so simple you can use the following and enjoy it!

```javascript
const { buildLogger } = require("@pipehnz/logger");

const logger = buildLogger("my-app");

logger.info("My first log :)");
```
