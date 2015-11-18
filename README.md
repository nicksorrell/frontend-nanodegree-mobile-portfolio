
## Website Performance Optimization portfolio project

The purpose of this project was to achieve an excellent PageSpeed score for both mobile and desktop, and make the pizza page jank-less.

[live version](http://nicksorrell.com/udacity/mobile-portfolio)

### How to Run

1. Access the built files in the 'dist' folder
   NOTE #1: If you want to re-build, run the default Gulp task again
   NOTE #2: If you want to see the full files, look at the 'src' folder
1. Run a local server + something like [ngrok](https://ngrok.com/) or use your own hosting to view the content
1. Measure the PageSpeed scores yourself!

### Optimizations

#### General

- Used Gulp to perform build tasks such as minification, concatenation, and image optimization

#### index.html

- Inlined style.css styles for performance
- Set proper media attribute for print styles

#### style.css

- Removed in favor of inlining styles

#### views/main.js

- The dx function used in resizing pizzas on the page was removed since it is not necessary
- All loops used to modify page elements were rewritten to avoid forced synchronous layout issues
- The code used to generate pizzas was rewritten to make use of a document fragment to avoid hitting the DOM more than is necessary

#### views/style.css

- Used null transform and will-change to improve paint performance on background pizzas
