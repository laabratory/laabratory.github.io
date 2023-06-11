---
title: "Python Coroutines!?!?"
date: 2023-06-11
tags: Utils 
---
Python supports generators which allow you to `.send()` and recieve (via `next(...)`) values. They are kind of like channels since they don't block until you send or recieve.

In the code below, we use callbacks (called aperiodically in a separate thread) to send values to our channel. Simultaneously, we try to consume those values, which should be allowed because generators and our `coroutine` are non-blocking.

```python
import time, threading

def channel(x="Hello"):
    while True:
        x = yield x

def make_coroutine(callback):
    def coroutine():
        callback()
        threading.Timer(1, coroutine).start()
    return coroutine

def make_callback():
    chan = channel()
    # prime the channel
    next(chan)

    def callback():
        print("Calling!")
        chan.send("Hello world!")
    
    return chan, callback

def main():
    chan, callback = make_callback()
    coroutine = make_coroutine(callback)
    coroutine()
    for i in chan:
        if i is not None:
            print(i)

if __name__ == "__main__":
    main()
```

And yet, this approach doesn't work as expected! One of three things happens:

1. `ValueError: generator already executing`
2. only None values are output from the channel

Why doesn't this work? email me if you have an answer.