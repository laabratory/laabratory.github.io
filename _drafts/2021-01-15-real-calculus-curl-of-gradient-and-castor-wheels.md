I was traveling recently and I saw someone wheeling a suitcase with 4 caster wheels, which were rotating wildly as they were dragged across some rough terrain.

This got me thinking about how we would think about this mathematically:

1. Think of the ground as a graph in 3D
2. The surface of the ground has some minute slope at each point which influences how the caster wheel rotates. In calculus we would call this the gradient of the graph $$\nabla f$$
3. This gradient induces some kind of rotation. This part is hard to analyze, so let's work our way up.

## Caster wheel motion
When you reverse direction you typically cause a castor wheel. This is because caster wheels have 2 equilibria: one where the wheel is in the direction of the motion and one where it is away.

Intuition tells us that the first is indeed an equlibrium: if you are moving perfectly parallel to the direction of the wheel, nothing will happen. Yet, in the real world, we always see the wheel rotate so it faces away from the direction of motion. Even the smallest change will induce the wheel to rotate 180 degrees to the 2nd (stable) equilibrium. This indicates the 1st equlibrium is unstable.

More intuition tells us that caster wheels want to move up the path of least resistance, which is antiparallel to the gradient of a surface -- now we're getting somewhere.

