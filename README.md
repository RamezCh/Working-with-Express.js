# Working-with-Express.js

Do not re-invent the Wheel!

What you wanna do, is to focus on your business logic and not doing repetitive tasks.

Express.js helps you to out-source some of the tedious tasks or things that you don't care about

We will look at what Express.JS is, how to use middleware, working with requests & responses elegantly, routing and returning HTML Pages (Files)

## What is Express & Why?

Server Logic is Complex, remember what we did previously for a simple task.

Express.JS helps us do those complex tasks in simpler ways and allows us to focus on our Business logic, not on the nitty-gritty Details. (Using a Framework for the Heavy Lifting!)

Express is highly flexible and gives us a lot of packages that we can use to ease up our work and adds some nice features out of the box

## Alternatives to Express.js:

- Vanilla Node.js
- Adonis.js (laravel inspired)
- Koa
- Sails.js
- Many more!

## Middleware

Middleware is something between request and response, a function, some code that runs to work on the request

Request -> Middleware -> Middleware -> Response

Middleware (req, res, next) => {...}

## Module Summary

Express.js is a Node.js framework - a package that adds a bunch of utility functions and tools and a clear set of rules on how the app should be built (middleware!)

It is highly extensible and other packages can be plugged into it (middleware!)

Express.js relies heavily on middleware functions you can easily add them by calling use()

Middleware functions handle a request and should call next() to forward the request to the next function in line or send a response

You can filter requests by path and method

If you filter by method, paths are matched exactly, otherwise the first segment of a URL is matched

You can use the express.Router to split your routes across files elegantely

You are not limited to serving dummy text as a response

You can sendFile() to your users e.g. HTML Files

If a request is directly made for a file(css, img, js), you can enable static serving for such files via express.static()
