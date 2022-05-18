When you add vectors, the general idea is that you take a path along one vector then another. In fact there are infinite vectors that add to a particular one.

This exposes a key fact about life and about vectors: it doesn't matter how you got there but where you are. Indeed, in adding vectors we lose the information about how we got there but gain information about the best path to get where we are (this is the sum of the 2 vectors!)

This exposes a nice symmetry with some path finding algorithms in computer science which rely on this exact fact to "relax" paths.

I wonder if there's really any overlap...

<!--more-->

# Typical Shortest Path Algorithms
The datastructure we usually use to depict a distance to minimize is a graph, where either the edges or vertices have some distance associated with them. For problems where we want to minimize the distance, this is all we really need. We don't really case about how it happens but we do care about *what* that path is.

It might be applicable when we have a graph we can choose to add edges to. After we determine the most optimal path, we might want to   

# Inspiration
- I first thought of this while watching 3Blue1Brown's first video on linalg. You can find his series [here](https://www.youtube.com/watch?v=fNk_zzaMoSs&list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab).
- *Algorithms, 4th Edition* by Robert Sedgewick and Kevin Wayne