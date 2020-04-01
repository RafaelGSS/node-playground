## Debugging Javascript

just add `debugger` in the line and execute your project like:

```sh
node inspect index.js
```

You can run on console or between devtools on Chrome (V8 btw).

Otherwise you can meansure the performance too with profiller devtools:

```sh
node --inspect index.js
```

or to make a breakpoint at first line of the application pass the `--inspect-brk` 

```sh
node --inspect-brk index.js
```
