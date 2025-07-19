---
layout: none
title: "Vinitha | Portfolio"
---

<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vinitha | Portfolio</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
      /* Tailwind CSS styles (already included via CDN) */
    </style>
  </head>
  <body class="bg-gray-900 text-white font-sans">
    <main class="max-w-4xl mx-auto px-4 py-12">
      <header class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          Hi, I'm Vinitha Pukazh Bagya
        </h1>
        <p class="text-lg md:text-xl text-gray-300">
          A developer who builds with curiosity and scale in mind.
        </p>
        <div class="mt-6 space-x-4">
          <a
            href="{{ '/resume/' | relative_url }}"
            class="inline-block px-6 py-2 border border-gray-500 rounded-lg hover:bg-gray-800 transition"
            >View Resume</a
          >
          <a
            href="{{ '/blog/' | relative_url }}"
            class="inline-block px-6 py-2 border border-gray-500 rounded-lg hover:bg-gray-800 transition"
            >Read Blog</a
          >
        </div>
      </header>

      <section class="mb-16">
        <h2 class="text-2xl font-semibold mb-4">🚀 What I Do</h2>
        <p class="text-gray-300">
          As a passionate Full Stack Developer with over 7 years of experience,
          I specialize in designing and implementing scalable, cloud-native
          applications. My expertise spans front-end and back-end development
          using technologies like React, Python, Java, and GCP. I enjoy turning
          complex challenges into elegant, performant solutions and thrive in
          environments that encourage innovation and continuous improvement.
        </p>
      </section>

      <section class="latest-posts grid md:grid-cols-2 gap-10 mb-16">
        <div>
          <h2 class="text-2xl font-semibold mb-4">📘 Latest Blog Posts</h2>
          <ul class="space-y-4 text-gray-300">
            {% for post in site.posts limit:3 %}
            <li>
              <p class="font-semibold">
                <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
              </p>
              <span class="text-sm">{{ post.date | date: "%B %d, %Y" }}</span>
            </li>
            {% endfor %}
          </ul>
        </div>
                <div>
          <h2 class="text-2xl font-semibold mb-4">📄 Resume Snapshot</h2>
          <p class="mt-4">
            <span class="font-semibold">Role:</span> Senior Application Developer at ThoughtWorks
          </p>
          <p class="mt-4">
            <span class="font-semibold">Skills:</span> Python, Node.Js, React, PostgreSQL, GCP, CI/CD
          </p>
          <p class="mt-4">
            <span class="font-semibold">Interests:</span> Open-source contributions, exploring new technologies
          </p>
          <a
            href="{{ '/resume/' | relative_url }}"
            class="inline-block mt-6 px-6 py-2 border border-gray-500 rounded-lg hover:bg-gray-800 transition"
          >
            View Full Resume</a
          >
        </div>
      </section>

      <footer
        class="text-center border-t border-gray-700 pt-6 text-sm text-gray-400"
      >
        <h2 class="text-xl font-semibold mb-2">🌐 Connect</h2>
        <p class="mb-2">Feel free to reach out</p>
        <p>
          <a href="mailto:you@example.com" class="text-blue-400 hover:underline"
            >pukazhvinitha@gmail.com</a
          >
        </p>
        <p>
          <a
            href="https://github.com/pugalvini"
            class="text-blue-400 hover:underline"
            >github.com/pugalvini</a
          >
        </p>
      </footer>
    </main>
  </body>
</html>
