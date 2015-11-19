
## Website Performance Optimization portfolio project

The purpose of this project was to achieve an excellent PageSpeed score for both mobile and desktop, and make the pizza page as jank-free as possible.

[Live version](http://nicksorrell.com/udacity/mobile-portfolio)

### How to Run

1. Access the built files in the 'dist' folder
1. Run a local server + something like [ngrok](https://ngrok.com/) or use your own hosting to view the content
1. Measure the PageSpeed scores yourself!

#### Notes
- If you want to see the full files, look at the 'src' folder
- If you want to re-build, run the default Gulp task again. Be sure you install via npm first!

### Optimizations

#### General

- Used Gulp to perform build tasks such as minification, concatenation, CSS vendor prefixing and image optimization

#### index.html

- Inlined style.css styles for performance
- Set proper media attribute for print styles

#### views/main.js

- The dx function used in resizing pizzas on the page was removed since it is not necessary
- All loops used to modify page elements were rewritten to avoid forced synchronous layout issues
- Moved variable declarations out of loops for performance
- The code used to generate pizzas was rewritten to make use of a document fragment to avoid hitting the DOM more than is necessary
- Modified the function used to generate background pizzas to only generate enough to fill the screen
- Made use of faster more specific DOM querying methods

#### views/style.css

- Used null transform and will-change to improve paint performance on background pizzas
- Added vendor prefixes where necessary
