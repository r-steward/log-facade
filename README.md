# `Logging Facade`
Typescript Logger Facade

Use in library code which may log output that the library clients can control

```bash
npm i logging-facade
```

```js
import { LogBindingManager, ConsoleBinding } from 'logging-facade';

LogBindingManager.registerBinding(ConsoleBinding);
```