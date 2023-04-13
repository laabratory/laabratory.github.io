---
layout: post
title: Einstein Summation Notation
author: Aagam Dalal
---
The basic idea for einstein notation is to drop the sigma from summations in some cases (reducing notational complexity). For instance, you might want to compute the matrix multiplication between a row vector and a column vector: $\sum_i x_i * y^i$ (*Note that the superscript is not an exponent, but rather an index for a column vector -- a sometimes-helpful quirk of notation*).

<!--more-->

According to [Wolfram MathWorld](https://mathworld.wolfram.com/EinsteinSummation.html) there are 3 rules:

> 1. Repeated indices are implicitly summed over.

The index is just $i$ or $j$ or the like. Repeated indices mean they appear more than once in *a single term*. 

Examples:
1. $x_i y_i = \sum_i x_i y_i$ :white_check_mark:
2. $x_i + y_i = x_i + y_i$ :x:

> 2. Each index can appear at most twice in any term.

This means that even the indices you intend to sum over should be repeated at most twice (obviously indices you don't want to sum over should be repeated at most once)

Examples: 
1. $x_i y_i z_i$ :x:
1. $x_i y_j z_i$ :white_check_mark:

> 3. Each term must contain identical non-repeated indices.

This is a rule that only applies when you have more than one term. It specifies that if you use a term that only appears once in the first term (a *non-repeating* term), then you should make an effort to use the same index where there are non-repeating indices. To my mind, this does not always make things intuitive (see the examples below), and it is not emphasized among many Einstein notation users.

Examples:
1. $x_i y_i z_j + x_i c_p$ :x:
1. $x_i y_i z_j + x_i c_j$ :white_check_mark:
  2. Does this imply that the index $j$ in $z_j$ equals the index $j$ in $c_j$? It's a little unclear to my eye.

# Applications of Einstein Notation

## Kronecker Delta

The Kronecker delta is a pretty simple idea that says the following (written as pseudocode)

<kbd>$\delta_{ij}$</kbd>
```
if i == j:
    1
else: 
    0
```
It allows a neat rewriting of the dot product as $\delta_{ij} x_i y_j$, or the trace as $\delta_{ij} A_{ij}$. It also allows a nice expression for matrix multiplication $\delta_{jk} A_{ij} B_{ki}$.

## Levi-Civita Permutation Tensor

The $\epsilon$ tensor (called so because it can be described as N-D array) helps compute cyclic things, which arise in cross-products and determinants.

in 3d we can describe the tensor as follows:

<kbd>$\epsilon_{ijk}$</kbd>
```
if i == j or j == k or i == k:
    0
else if you can shift ijk s.t. they are in order decreasing order:
    1
else:
    -1
```
By *shift* we mean going from a sequence $abc$ -> $bca$ -> $cab$. Case 2 is called the *cyclic* or *even* case, and case 3 is the *acyclic/odd* case.

This allows us to rewrite the cross product where $C_i$ is hte $i$th component of the cross product $i,j,k$ vary from 1 to 3):
$u \times v = (u_y * v_z - u_z * v_y) \hat{x} + (u_y * v_z - u_z * v_y) \hat{y} \to C_i = \epsilon_{ijk} u_j v_k$

The Levi-Civita tensor allows for a few nice things:
1. It encodes that $i \neq j$ and $i \neq k$ since terms go to 0 when this is violated.
2. The signs of the 2 products in each component $C_i$ are flipped since we have $ibc$ nad $icb$, one of which must necessarily be odd and one even.
3. It encodes the flip in sign that occurs for the $\hat{y}$ term (ie when $i = 2$). This is since $213$ (ie where $i < j$ so that the expression is $u_1 * v_3$) is odd; and $231$ (ie where $i > j$) is even.