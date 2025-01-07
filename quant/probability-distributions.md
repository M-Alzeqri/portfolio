
---
layout: single
permalink: /probability-distributions/
title: "Probability Distributions in Quantitative Finance"
sitemap: true
---

# Probability Distributions in Quantitative Finance

Quantitative finance relies on various probability distributions to model asset prices, returns, risk, and other financial metrics. Below are some of the most commonly used distributions:

---

## 1. Normal Distribution

The **Normal Distribution** is symmetric and describes data that clusters around a mean.

**Formula:**

f(x) = (1) / (σ &radic;(2π)) × e<sup>-((x - μ)<sup>2</sup> / (2σ<sup>2</sup>))</sup>

- **Parameters:**
  - μ: Mean
  - σ: Standard deviation
- **Usage:** Modeling asset returns, errors in financial models.

---

## 2. Log-Normal Distribution

The **Log-Normal Distribution** models variables that are positively skewed, such as stock prices.

**Formula:**

f(x) = (1) / (xσ &radic;(2π)) × e<sup>-((ln x - μ)<sup>2</sup> / (2σ<sup>2</sup>))</sup>, &nbsp;&nbsp;x > 0

- **Parameters:**
  - μ: Mean of the natural logarithm of the variable
  - σ: Standard deviation of the natural logarithm of the variable
- **Usage:** Modeling stock prices, asset prices in the Black-Scholes model.

---

## 3. Student's t-Distribution

The **Student's t-Distribution** is similar to the normal distribution but has heavier tails, allowing for better modeling of extreme events.

**Formula:**

f(x) = [Γ((ν + 1)/2)] / [√(νπ) × Γ(ν/2)] × (1 + (x<sup>2</sup>/ν))<sup>-(ν + 1)/2</sup>

- **Parameters:**
  - ν: Degrees of freedom
- **Usage:** Modeling asset returns with higher kurtosis, risk management.

---

## 4. Exponential Distribution

The **Exponential Distribution** models the time between events in a Poisson process.

**Formula:**

f(x) = λ × e<sup>-λx</sup>, &nbsp;&nbsp;x ≥ 0

- **Parameters:**
  - λ: Rate parameter
- **Usage:** Modeling time to default, time between trades.

---

## 5. Poisson Distribution

The **Poisson Distribution** models the number of events occurring within a fixed interval of time or space.

**Formula:**

P(k) = (λ<sup>k</sup> × e<sup>-λ</sup>) / k!, &nbsp;&nbsp;k = 0, 1, 2, …

- **Parameters:**
  - λ: Average rate of occurrence
- **Usage:** Modeling number of trades, defaults in a portfolio.

---

## 6. Binomial Distribution

The **Binomial Distribution** models the number of successes in a fixed number of independent Bernoulli trials.

**Formula:**

P(k) = (n choose k) × p<sup>k</sup> × (1 - p)<sup>n - k</sup>

- **Parameters:**
  - n: Number of trials
  - p: Probability of success
- **Usage:** Option pricing, modeling binary outcomes.

---

## 7. Gamma Distribution

The **Gamma Distribution** is flexible and can model skewed data, useful for various financial applications.

**Formula:**

f(x) = (β<sup>α</sup> / Γ(α)) × x<sup>α - 1</sup> × e<sup>-βx</sup>, &nbsp;&nbsp;x ≥ 0

- **Parameters:**
  - α: Shape parameter
  - β: Rate parameter
- **Usage:** Modeling waiting times, insurance claims.

---

## 8. Weibull Distribution

The **Weibull Distribution** is used to model the time until a failure or event, similar to the exponential distribution but with more flexibility.

**Formula:**

f(x) = (k / λ) × (x / λ)<sup>k - 1</sup> × e<sup>-(x/λ)<sup>k</sup></sup>, &nbsp;&nbsp;x ≥ 0

- **Parameters:**
  - k: Shape parameter
  - λ: Scale parameter
- **Usage:** Risk assessment, survival analysis in finance.

---

## 9. Beta Distribution

The **Beta Distribution** is defined on the interval [0, 1] and is useful for modeling random variables limited to this range.

**Formula:**

f(x) = (x<sup>α - 1</sup> × (1 - x)<sup>β - 1</sup>) / B(α, β), &nbsp;&nbsp;0 ≤ x ≤ 1

- **Parameters:**
  - α, β: Shape parameters
- **Usage:** Modeling probabilities, portfolio weights.

---

## 10. Cauchy Distribution

The **Cauchy Distribution** has heavier tails than the normal distribution, making it useful for modeling extreme financial events.

**Formula:**

f(x) = 1 / [πγ(1 + ((x - x₀)/γ)<sup>2</sup>)]

- **Parameters:**
  - x₀: Location parameter
  - γ: Scale parameter
- **Usage:** Modeling asset returns with extreme movements.

---

## 11. Pareto Distribution

The **Pareto Distribution** is used to model heavy-tailed phenomena, such as wealth distribution or large insurance claims.

**Formula:**

f(x) = (αxₘ<sup>α</sup>) / x<sup>α + 1</sup>, &nbsp;&nbsp;x ≥ xₘ

- **Parameters:**
  - α: Shape parameter
  - xₘ: Minimum value
- **Usage:** Modeling large losses, risk of extreme events.

---

## 12. Levy Distribution

The **Levy Distribution** is a heavy-tailed distribution used in various financial models, particularly in the context of stochastic processes.

**Formula:**

f(x) = √(c / (2π)) × e<sup>-c/(2x)</sup> / x<sup>3/2</sup>, &nbsp;&nbsp;x > 0

- **Parameters:**
  - c: Scale parameter
- **Usage:** Modeling stock price movements, option pricing.

---

## 13. Skewed Distributions

Many financial variables exhibit skewness. Skewed distributions like the **Skew-Normal** and **Skew-t** distributions accommodate asymmetry.

### Skew-Normal Distribution

**Formula:**

f(x) = 2 × φ(x) × Φ(αx)

- **Parameters:**
  - α: Skewness parameter
- **Usage:** Modeling asymmetric returns.

### Skew-t Distribution

Extends the Student's t-distribution to allow for skewness.

**Formula:**

f(x) = [2 × t<sub>ν</sub>(x) × T(λx √((ν + 1)/(ν + x<sup>2</sup>)))] / scale

- **Parameters:**
  - ν: Degrees of freedom
  - λ: Skewness parameter
- **Usage:** Enhanced modeling of asymmetrical and heavy-tailed data.

---

## References

- [Quantitative Finance Textbook](https://example.com/quant-finance)
- [Probability Distributions in Finance](https://example.com/prob-distributions-finance)
- [MathJax Documentation](https://www.mathjax.org/)

---

*This page was generated using ChatGPT.*
