---
layout: post
author: Aagam
tag: Utils 
---
Continuing the long tradition of spending more time automating something that should be easy, I wanted to create an automatic function to expand the cardinality of unions:

<!--more-->

## Technology
* Typescript

I had never used TS (I had barely even used javascript). Biggest take away: TypeScript is better than JS! One interesting note about the type safety of TypeScript is how it interacts with the often-time type-unsafe document object selectors (ex: `getElementById`). Obviously any element could have a particular ID, so you need to cast it to the right type in order to get a tag specific attribute (like, for instance `value` from an `input`)

## Without further ado:
* Put in a comma separated sequence of raw latex (ex: `E_1, E_2, E_3`)
* Click run and give it a second

<div id="div">
    <input type="text" id="events" name="events" onclick="wrapper()" required>
    <button id="submit">run</button>
    <input type="text" id="PIE" name="PIE" readonly>
</div>
<script src="https://raw.githack.com/AaDalal/inclusion-exclusion-js/main/InclusionExclusion.js"></script>
Hope this is useful :zap: