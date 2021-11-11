## ✋ Hi!
I'm Aagam Dalal. I'm a Computer Engineering student at the University of Pennsylvania. I'm particularly interested in the intersection between robotics and service!

<h1>Latest Posts</h1>
<ul>
  {% for post in site.posts %}
    <li>
      <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>
