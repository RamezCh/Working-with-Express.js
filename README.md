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
