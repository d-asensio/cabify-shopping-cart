# Cabify Coding Challenge - Shopping Cart

This document attempts to explain the big picture of the code and the architecture it follows, and also give insight about the intentions behind it. Thank you for taking the time to read and review.

## Introduction

To write quality software one has to find the right balance between business needs and mid-to-long term code maintainability. It's everything about understanding the context, not only the technical context but also and more important: The product context.

## Product context

The fact that this is a code challenge and not a real product, it does not mean that there is no context. The description of the exercise highlights three aspects that are considered valuable:

- **Deliver production-ready code:** This means that the code must be reliable, or in other words, it must have tests.
- **Provide a solution that could be easy to grow and easy to add new functionality:** Which means that the code must be easily extensible on the arrival of new business needs, or in other words, maintainable.
- **We value succinctness:** Which means that the product must be simple, or in other words, it must be an MVP that will be useful to validate the business model.

But these are general considerations. To understand the context we have to focus on the nature of the product, what we know about similar products, and how it will likely evolve in future iterations if it was supposed to suit a real case scenario.

Acting as a product owner this is what I think is prone to change in a product like this (mini online store):

- The price of the products
- Discount rules

So the priority should go in this direction when it comes to defining the boundaries of the code architecture.

## Technical context

The technical context is more open in this case, the start point is a blank canvas so there is not any legacy code, and the only person involved in the "development team" is me, so the choice of technologies, techniques, etc. will be very opinionated and not open to debate, which would be the healthier thing to do when working in real life.
