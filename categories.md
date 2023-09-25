---
layout: page
permalink: /categories/
title: List of categories
---
<!-- https://www.amitmerchant.com/how-to-categorize-your-posts-in-jekyll/ -->
<!-- https://blog.webjeda.com/jekyll-categories/ -->

<div id="archives">
  {% for category in site.categories %}
    <div class="archive-group">
      {% capture category_name %}{{ category | first }}{% endcapture %}
      <div id="#{{ category_name | slugize }}"></div>
      <h4 class="category-head">{{ category_name }}</h4>
      <a name="{{ category_name | slugize }}"></a>
      {% for post in site.categories[category_name] %}
      <article class="archive-item">
        <h4>
            <a href="{{ site.baseurl }}{{ post.url }}">{{post.title}}</a>
        </h4>
      </article>
      {% endfor %}
    </div>
  {% endfor %}
</div>