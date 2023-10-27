---
date: 2023-10-26
title: Rendevous Hashing
---
*This is a follow up to my post on [Consistent Hashing](/b/consistent-hashing) -- see that first*

Consistent hashing is a technique used for distributed hash tables that assigns each key to a server in the network. It does this by hashing everything and assigning each key to the closest succeeding server hash value. Rendevous hashing is the generalization of this concept to assign a key to $k$ nodes. You can think about wanting to replicate a file (where it's name is the key) across $k$ servers -- you need something more than consistent hashing. Another situation is where you expect that only a small number of nodes will not be part of the network at any given time (e.g., because failure probability is low but non-zero, and nodes come back over time); in this case consistent hashing would require you to rapidly reconstruct each server's mapping from key ranges to servers so that you can still query for the key from any node. Rendevous hashing solves this inefficiency by storing more keys, but preserving the nice properties of load-balancing and consistency that consistent hashing provides..

The idea behindrendevous hashing is that each server assigns scores to all servers (including itself) for a given key. Then they route the key to the top scorer (or to the top k, if you are rendevous hashing for replication). In particular this scoring set up needs to be *consistent* in that servers need to be able to agree on their score. It should also be even for load-balancing purposes. The scoring mechanism that fulfills both these things is simply the hash of the server's id concatenated to the key in question.

Read more on Randorithms.com, who has a much better [write up](https://randorithms.com/2020/12/26/rendezvous-hashing.html). 

