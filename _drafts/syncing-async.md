---
title: "Syncing Async Fns"
date: 2023-06-11
tags: "async,asyncio,node,python,function coloring" 
---
Conceptually async functions do 2 things:
1. `execute`
2. `await` -- that is pause their own execution to let something else async in their body execute

In fact, in order for async functions to be executed, they must be `await`-ed! And since you can only use await within async functions, this means that **async functions usually can only be called by async functions** or at the top level, where they cannot return anything useful.

But: what if we could `await` without being in an async function? 

Well
