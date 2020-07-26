# Cabify Coding Challenge - Shopping Cart

This document attempts to explain the big picture of the code and the architecture it follows, and also give insight about the intentions behind it. Thank you for taking the time to read and review it.

## Introduction

To write quality software one have to find the right balance between business needs and mid-to-long term code maintainability in all of its forms (code readability, testing, modularity, etc.). It's everything about understanding the context, not only the technical context, but also and more important: The product context.

## Product context

The fact that this is a code challenge and not a real product, it does not mean that there is not context. In fact the description of the challenge highlights three aspects that are considered valuable:

- **Deliver production-ready code:** Which means that the code must be reliable, or in other words, it must have tests.
- **Provide a solution that could be easy to grow and easy to add new functionality:** Which means that the code must be easily extensible according to the business needs, or in other words, maintainable.
- **We value succinctness:** Which means that the product must be simple, or in other words, it must be an MVP that will be useful to validate the business model.

But these are general considerations. To really understand the context we have to focus the nature of the product what we know about similar products, and how it will likely evolve in future iterations if it were shaped to suit a real case scenario.

So acting as a product owner this is what I think is prone to change in a product like this (mini online store):

- The price of the products
- Discount rules

So the priority should go in this direction when it comes to define the boundaries of the code architecture.

## Technical context

The technical context is more open in this case, the start point is a blank canvas so there is not any legacy code, and the only person involved in the "development team" is me, so the choice of technologies, techniques, etc. Will be very opinionated and not open to debate, which would be the healthier thing to do when working in a team.
