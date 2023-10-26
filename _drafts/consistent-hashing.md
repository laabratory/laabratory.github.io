---
date: 2023-10-26
title: Consistent Hashing
---
Recently I've been reading about the Chord distributed hash table system for a class. The goal of Chord is to map any key (e.g., a file name) to the server that is responsible. This mapping has to be maintained without any centralization: you can ask any server in the network for which other server is responsible for a key, and get an answer, even as servers enter and leave the network as they please. At the core of Chord and most other DHTs is consistent hashing, a beautifully simple idea.

In order for the system to be distributed in an appreciable way, the mapping from keys to servers needs to be somewhat even; in other words any arbitrary set of keys are likely to be evenly distributed among the servers. At the same time, this mapping needs to be consistent: **all** servers need to agree on which server is responsible for key, even as servers come and go and key responsibility is reassigned. 

These two requirements are the problem that consistent hashing solves. It provides a way of taking hash values, which are uniformly distributed, and mappping them to servers in a way that is consistent no matter which server is doing the mapping. This is in contrast to the way we do hashing in a hashtable, which requires us to *mod the hash by the size of the table* and thereby introduces a dependence on the number of servers which are in the network at any time. We have no guarantees about the size or composition of the network in this situation, so consistent hashing solves the problem in a way that traditional hashtables just can't.  

Conceptually, there is no big jump here. We merely compute the hash for each key and then find some consistent way of mapping that to a node. In the case of chord, we create this assignment by hashing the server identifiers, and then mapping each key hash to the closest succeeding key hash. In this way, each node that knows the other nodes in the network can map a key to a node. No matter if a node leaves or enters, the node will continue to be able to map the key. And no matter how nodes enter and leave, the mapping will be close to uniform. These are powerful properties.
