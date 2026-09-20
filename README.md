# Simple Life — React Version

A React rebuild of my [Living the Simple Life](https://github.com/jana-alhasan/Living-the-Simple-Life)
project — the same personal blog-style layout, this time broken into reusable
React components instead of static HTML/CSS.

## 🎯 Why Two Versions?

I built this project intentionally as a companion to the original HTML/CSS
version, to practice converting a static design into a component-based React
architecture — extracting the header, navigation, articles, and sidebar
widgets into independent, reusable components.

## 🛠️ Built With

- React
- CSS (component-scoped stylesheets per component)

## 🧩 Structure

Each section of the layout (Header, Nav, Main, Article, Footer, sidebar
widgets) is its own component under `src/component/`, styled with a matching
CSS file.

## 🎯 What I Learned

Breaking down a single static page into independent, reusable React
components, and structuring props/composition instead of one large HTML file.