---
title: "Web Framework"
description: "How Web Framework Work"
date: 1900-01-01
---

<div>
    <h2 class="text-2xl">Building the Application</h2>
    </br>
</div>

**Framework vs Library** A library, you import its code and call its function. Where a framework is
in charge of running the application, and executes your code when an appropriate trigger happens.

1. Template compiler transforms the template for each component into JS. This code, executed in the
   broswer, creates the component's view.
2. Components code is split into mutiple files, is transformed and bundled into a single JS file
   (app.bundle.js)
3. 3rd party code used by the app is bundles in a single JS file (vendors.bundle.js)
4. CSS code is extracted and bundled into a single CSS file (bundle.css)
5. HTML file that will be served to the user (index.html) is generated from the static-assets
   directory
6. Static assets (e.g. images, fonts, and audio) are copied to the output directory

<div>
    </br>
    <h2 class="text-2xl">Browser Side of an SPA </h2>
    </br>
</div>

1. Loading the HTML file. the browser loads the HTML file and parses it. This HTML which is mostly
   empty, is used to load the JS and CSS bundles declared in the <script> and <link> tags.
2. Loading the JS and CSS files. The browser loads JS and CSS file referenced in the HTML file
3. Creating the App View (Mounting the App). The framework js code finds the componets defined in
   the app code that needs to be rendered and create the app view.
4. Handling user interactions. The framework is responsible for updating only yhr parts of the HTML
   that need to be updated. This process is called patching the DOM.
5. Navigating Among Routes. When the user clicks a link , the framework’s router prevents the
   default behavior of reloading the page; instead, it renders the component that’s configured for
   the new route. The router is also in charge of changing the URL to reflect the new route.

<div>
    </br>
    <h2 class="text-2xl">SSR Application Flow</h2>
    </br>
</div>

1. Loading an HTML page. Ther server sends back a complete page that is created each time someone
   requests it. To create the page, the server uses the application’s router to figure out which
   components to show based on the requested route; then it instantiates those components. Next,
   each component loads data from other servers or databases and executes its mounting code before
   being rendered. Finally, the components are turned into HTML and sent to the user .
2. Hydrating the HTML Page. HTML instructs the browser to load the app JS and CSS files.
3. Handling User interactions. When the user interacts with the page, the framework event handlers
   are triggered and as in SPA, the framework patches the parts of the HTML that need to be updated.
   All of this happends in the browser, so the server isn't involved.
4. Navigating Between Routes. When a user clicks a link the browser changes the URL and the page is
   reloaded. A new HTML page is requested from the server and process starts again from step 1.

**Hydration:** the process by which a framework matches HTML elements with their corresponding VDOM
nodes and attaches event handles to make the HTML interactive in the browser. Allowing for dynamic
u
