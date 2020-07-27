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

## Technologies of choice

I made my choices taking into account the product needs, striving for fast development to produce maintainable, reliable, and clean code.

- **React:** I will be using React to develop this because it is the library for building UI interfaces that I know the most and it has a great ecosystem, however it comes with some drawbacks (like any other thing out there) and I am aware of those (performance, bundle size, etc.) but I think that for this project those are more than reasonable.

- **Styled-components:** CSS-in-JS is controversial I know, but it is good for fast-paced development, simplifies a lot the building toolset, and helps in writing semantic and understandable code. I think it is ideal for this project since it is small and the drawback of the bundle size will not be noticeable. In a different project with different needs, I would probably use SASS with a BEMIT architecture, I am pretty comfy working this way as well.

- **Redux with redux-toolkit:** redux-toolkit provides useful defaults like `createReducer` that uses [immer](https://github.com/immerjs/immer) to mutate the state, which leads to cleaner code.

## Architecture highlights

This section is divided into two parts: [The Checkout class](#the-checkout-class) and [The app](#the-app)

### The Checkout class

The Checkout class contains the business logic of the app, it is initialized with the [pricing rules](#pricing-rules) that will dictate the final price of the selected products.

> You will find the code of the checkout class under the `src/checkout` directory.

#### Pricing rules

The pricing rules are defined as an object containing products and discounts:

```js
const pricingRules = {
    products: [
      {
        id: 'TSHIRT',
        name: 'Shirt',
        code: 'X7R2OPX',
        price: 20.00
      },
      {
        id: 'MUG',
        name: 'Mug',
        code: 'X7R2OPY',
        price: 5.00
      },
      {
        id: 'CAP',
        name: 'Cap',
        code: 'X7R2OPZ',
        price: 10.00
      }
    ],
    discounts: [
      {
        type: 'BUY_1_GET_2',
        name: '2x1 Mug offer',
        options: {
          entitledProductId: 'MUG'
        }
      },
      {
        type: 'BULK_PERCENTAGE',
        name: 'x3 Shirt offer',
        options: {
          entitledProductId: 'TSHIRT',
          percentage: -5,
          minimumSelectionQuantity: 3
        }
      }
    ]
  }
```

The important thing to notice here is that discounts have `type` and `options` properties. Those properties are used to invoke a specific `DiscountRules` class that is created through a `DiscountRulesFactory`.

A code example should shed some light on this:

```js
const discountRules = DiscountRulesFactory.create('BUY_1_GET_2', {
  entitledProductId: 'MUG'
})

console.log(discountRules instanceof DiscountRulesBuy1Get2)
// --> true

// OR

const discountRules = DiscountRulesFactory.create('BULK_PERCENTAGE', {
    entitledProductId: 'TSHIRT',
    percentage: -5,
    minimumSelectionQuantity: 3
  }
})

console.log(discountRules instanceof DiscountRulesBulkPercentage)
// --> true
```

`DiscountRulesBuy1Get2` and `DiscountRulesBulkPercentage` are classes that share a common interface: Both receive a `options` object as the single constructor parameter and have a public method `calculateFor(products)` that calculates the discounted amount from a list of `Product`s.

This pattern is very desirable in this case. Heading back to the [Product context](#product-context) section, we stated that the discount rules are prone to change, and this architecture will make the code comply with the **open–closed principle**, allowing us to add more discount types only by adding new code, reducing in this way the risk of introducing new bugs in further modifications.
