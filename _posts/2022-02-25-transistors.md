---
layout: post
title: "Transistors"
author: Aagam
---
Transistors have 3 pins:
1. *C*ollector
2. *B*ase
3. *E*mmiter

The base regulates the flow from the collector to the emmiter by doing one of the following:
1. Acting as a switch (shorting c->e)
2. Acting as an amplifier (amplifying the current from b)
3. Acting as a *reverse* amplifier (flipping the flow of the current from 2)

<!--more-->

## Semiconductors
Silicon is a semiconductor. Chemically, semiconductors sit at the edge between the metals and the non-metals. Usually this means that if you introduce some sort of impurity or change and environmental factor you can change the conductivity. On the other hand you would be hard pressed to force most metals not to conduct (within reasonable bounds) or most non-metals to conduct (consider how close most of the metals we use in circuits are to perfect conductors).

### Adding Impurities: Doping
You can dope with fewer or more electrons than the 4 that silicon has. If you dope with boron (which has 3 valence electrons) you get "holes" where electrons are missing. We call this p-type because we have an absence of electrons (?).

On the other hand, phosphorous has 5 valence electrons, so putting it in creates an excess of electrons. We call this n-type because we have more electrons.

We think of charges propogating through p- and n-type silicon differently.
1. p-type: we think of the motion of the holes of (relatively) positive charge. Of course in reality, the electrons are the ones moving.
2. n-type: we think of the motion of the extra electrons

## Conductivity and the Band Gap in Energy Levels
The smaller the gap between the valence shell and the next lowest energy shell (or state, or level), the more conductive something is. Why is this true? I am no chemist but it relates to how mobile the charges; in metals there is no band gap, so electrons can move all over the place jumping up and down. As a result, there are holes left which allow other charges to move, leading to an overall conductive substance.

### Doping and the Band Gap
This image summarizes the relationship well:
![](https://www.halbleiter.org/images/fundamentals/doping/baender-dotiert.gif)

Excess electrons have a higher energy. As expected they are closer to the next lowest energy level from the valence since they are by definition in excess. Holes are the opposite.
## BJT - Bipolar Junction Transistor
These types of transistors involving sandwiching of p- and n-type silicon (the duality of the two creating the bi- in BJT). They are placed alternately:

| C | B | E |
|:-:|:-:|---|
| P | N | P |
| N | P | N |

### The p-n junction
When we have an n-type seminconductor interfacing with a p-type, the high energy electrons from the n-type move to the low energy holes of the p-type. This only occurs to a certain point, though, because as electrons move over the n-type gets more positive (it's losing electrons!) and the p-type more negative. So at a certain critical voltage, the system equilibrates. This voltage happens to be .7 volts in silicon (we will revisit the relavancy of this number later). Now we have 