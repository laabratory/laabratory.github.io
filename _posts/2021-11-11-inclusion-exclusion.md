---
layout: post
author: aagam
---
## Motivation
Continuing the long tradition of spending more time automating something that should be easy, I wanted to create an automatic function to expand the cardinality of unions:

## Technology
* Typescript
I had never used TS (I had barely even used javascript). Biggest take away: TypeScript is better than JS! One interesting note about the type safety of TypeScript is how it interacts with the often-time type-unsafe document object selectors (ex: `getElementById`). Obviously an element could have a particular ID, so you need to cast it to the right type in order to get a tag specific attribute (like, for instance `value` from an `input`)

## Without further ado:
* Put in a comma seperated sequence of raw latex (ex: `E_1, E_2, E_3`)
* Decide whether you are doing inclusion-exclusion with probabilities or cardinalities
* Click run

*If you don't see this yet, come back shortly*

Hope this is useful :zap: