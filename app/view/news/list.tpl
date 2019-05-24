<html>
  <head>
    <title>news</title>
    <link href="/public/css/news.css" />
  </head>

  <body>
    <ul class="news-view view">
      {% for item in list %}
        <li class="item">
          <a href="{{ item.email }}">{{ item.name }}</a>
          {# {{ helper.relativeTime(item.time) }} #}
        </li>
      {% endfor %}
    </ul>
  </body>
</html>