# Using prof

Installing

```sh
sudo apt-get install linux-tools-common linux-tools-$(uname -r)
```

To remove JIT replaces start your application with `--perf-basic-prof`

Profilling a existing process

```sh
# Record stack traces 99 times per second for 30 seconds
sudo perf record -F 99 -p $PID -g -- sleep 30s
```

or profile a process

```sh
perf record -F 99 -p 
```
