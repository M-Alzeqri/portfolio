---
layout: single
permalink: /quant/black-scholes/
title: "Black-Scholes Formula"
sitemap: true
---

## Black-Scholes Formula

The Black-Scholes formula is a mathematical model for pricing an options contract. It’s one of the cornerstones of modern financial theory.

### Formula

$$
C = S_0 N(d_1) - K e^{-rT} N(d_2)
$$

where

$$
d_1 = \frac{\ln\left(\frac{S_0}{K}\right) + \left(r + \frac{\sigma^2}{2}\right)T}{\sigma \sqrt{T}}
$$

$$
d_2 = d_1 - \sigma \sqrt{T}
$$

### Explanation

- **\(C\)**: Price of the European call option
- **\(S_0\)**: Current price of the asset
- **\(K\)**: Strike price of the option
- **\(r\)**: Risk-free interest rate
- **\(T\)**: Time to maturity
- **\(N(d)\)**: Cumulative distribution function of the standard normal distribution
- **\(\sigma\)**: Volatility of the asset

### Applications

- Option Pricing
- Risk Management
- Financial Derivatives Analysis

.
