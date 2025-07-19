---
layout: none
title: "Blog Posts - Dynamic"
permalink: /blog/
---

<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Blog Posts - Dynamic | Vinitha</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
  </head>
  <body class="bg-gray-900 text-white font-sans">
    <main class="max-w-4xl mx-auto px-4 py-12">
      <header class="text-center mb-16">
        <div class="flex items-center justify-between mb-4">
          <a href="/" class="text-gray-300 hover:text-white transition-colors">
            <i class="fas fa-arrow-left text-2xl"></i>
          </a>
          <h1 class="text-4xl md:text-5xl font-bold m-0 flex-1 text-center">
            Blog Posts
          </h1>
          <div class="w-8"></div> 
        </div>
      </header>

      <section class="mb-16">
        <h2 class="text-2xl font-semibold mb-6">📘 All Blog Posts</h2>
        
        {% assign posts = site.posts | sort: 'date' | reverse %}
        {% if posts.size > 0 %}
          {% for post in posts %}
          <div class="bg-gray-800 p-6 rounded-lg mb-6">
            <div class="border-l-4 border-blue-500 pl-4">
              <h3 class="text-xl font-semibold mb-2">
                <a href="{{ post.url }}" class="text-blue-400 hover:underline">
                  {{ post.title }}
                </a>
              </h3>
              <div class="flex flex-wrap gap-4 text-sm text-gray-400 mb-3">
                <span><i class="fas fa-calendar mr-1"></i>{{ post.date | date: "%B %d, %Y" }}</span>
                {% if post.category %}
                <span><i class="fas fa-folder mr-1"></i>{{ post.category }}</span>
                {% endif %}
                {% if post.tags %}
                <span><i class="fas fa-tags mr-1"></i>{{ post.tags | join: ", " }}</span>
                {% endif %}
              </div>
              {% if post.excerpt %}
              <p class="text-gray-300 mb-4">{{ post.excerpt | strip_html | truncatewords: 50 }}</p>
              {% endif %}
              
              {% if post.tags %}
              <div class="bg-gray-700 p-4 rounded-lg">
                <h5 class="font-semibold text-blue-400 mb-2">Key Topics:</h5>
                <ul class="text-sm text-gray-300 space-y-1">
                  {% for tag in post.tags %}
                  <li>• {{ tag }}</li>
                  {% endfor %}
                </ul>
              </div>
              {% endif %}
            </div>
          </div>
          {% endfor %}
        {% endif %}
      </section>

      <section class="mb-16">
        <h2 class="text-2xl font-semibold mb-6">📊 Blog Statistics</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-gray-800 p-6 rounded-lg text-center">
            <h3 class="text-2xl font-bold text-blue-400 mb-2">
              {% if posts.size > 0 %}{{ posts.size }}{% else %}2{% endif %}
            </h3>
            <p class="text-gray-300">Total Posts</p>
          </div>
          <div class="bg-gray-800 p-6 rounded-lg text-center">
            <h3 class="text-2xl font-bold text-green-400 mb-2">2</h3>
            <p class="text-gray-300">Categories</p>
          </div>
          <div class="bg-gray-800 p-6 rounded-lg text-center">
            <h3 class="text-2xl font-bold text-purple-400 mb-2">2025</h3>
            <p class="text-gray-300">Latest Post</p>
          </div>
        </div>
      </section>

      <!-- <section class="mb-16">
        <h2 class="text-2xl font-semibold mb-6">🕒 Recent Posts</h2>
        {% if posts.size > 0 %}
          {% assign recent_posts = posts | limit: 3 %}
          {% for post in recent_posts %}
          <div class="bg-gray-800 p-4 rounded-lg mb-4">
            <a href="{{ post.url }}" class="text-blue-400 hover:underline font-semibold">{{ post.title }}</a>
            <p class="text-sm text-gray-400">{{ post.date | date: "%B %d, %Y" }}</p>
          </div>
          {% endfor %}
        {% endif %}
      </section> -->

      <footer class="text-center border-t border-gray-700 pt-6 text-sm text-gray-400">
        <p>This page dynamically loads all blog posts using Jekyll Liquid templating.</p>
        <p class="mt-2">
          <a href="/" class="text-blue-400 hover:underline">← Back to Home</a>
        </p>
      </footer>
    </main>
  </body>
</html> 
