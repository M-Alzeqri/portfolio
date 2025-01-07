
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

$$
f(x) = \frac{1}{\sigma \sqrt{2\pi}} e^{ -\frac{(x - \mu)^2}{2\sigma^2} }
$$

- **Parameters:**
  - $\mu$: Mean
  - $\sigma$: Standard deviation
- **Usage:** Modeling asset returns, errors in financial models.

---

## 2. Log-Normal Distribution

The **Log-Normal Distribution** models variables that are positively skewed, such as stock prices.

**Formula:**

$$
f(x) = \frac{1}{x \sigma \sqrt{2\pi}} e^{ -\frac{(\ln x - \mu)^2}{2\sigma^2} }, \quad x > 0
$$

- **Parameters:**
  - $\mu$: Mean of the natural logarithm of the variable
  - $\sigma$: Standard deviation of the natural logarithm of the variable
- **Usage:** Modeling stock prices, asset prices in the Black-Scholes model.

---

## 3. Student's t-Distribution

The **Student's t-Distribution** is similar to the normal distribution but has heavier tails, allowing for better modeling of extreme events.

**Formula:**

$$
f(x) = \frac{\Gamma\left(\frac{\nu + 1}{2}\right)}{\sqrt{\nu \pi} \, \Gamma\left(\frac{\nu}{2}\right)} \left(1 + \frac{x^2}{\nu}\right)^{-\frac{\nu + 1}{2}}
$$

- **Parameters:**
  - $\nu$: Degrees of freedom
- **Usage:** Modeling asset returns with higher kurtosis, risk management.

---

## 4. Exponential Distribution

The **Exponential Distribution** models the time between events in a Poisson process.

**Formula:**

$$
f(x) = \lambda e^{-\lambda x}, \quad x \geq 0
$$

- **Parameters:**
  - $\lambda$: Rate parameter
- **Usage:** Modeling time to default, time between trades.

---

## 5. Poisson Distribution

The **Poisson Distribution** models the number of events occurring within a fixed interval of time or space.

**Formula:**

$$
P(k) = \frac{\lambda^k e^{-\lambda}}{k!}, \quad k = 0, 1, 2, \dots
$$

- **Parameters:**
  - $\lambda$: Average rate of occurrence
- **Usage:** Modeling number of trades, defaults in a portfolio.

---

## 6. Binomial Distribution

The **Binomial Distribution** models the number of successes in a fixed number of independent Bernoulli trials.

**Formula:**

$$
P(k) = \binom{n}{k} p^k (1-p)^{n-k}
$$

- **Parameters:**
  - $n$: Number of trials
  - $p$: Probability of success
- **Usage:** Option pricing, modeling binary outcomes.

---

## 7. Gamma Distribution

The **Gamma Distribution** is flexible and can model skewed data, useful for various financial applications.

**Formula:**

$$
f(x) = \frac{\beta^\alpha}{\Gamma(\alpha)} x^{\alpha - 1} e^{-\beta x}, \quad x \geq 0
$$

- **Parameters:**
  - $\alpha$: Shape parameter
  - $\beta$: Rate parameter
- **Usage:** Modeling waiting times, insurance claims.

---

## 8. Weibull Distribution

The **Weibull Distribution** is used to model the time until a failure or event, similar to the exponential distribution but with more flexibility.

**Formula:**

$$
f(x) = \frac{k}{\lambda} \left(\frac{x}{\lambda}\right)^{k-1} e^{-\left(\frac{x}{\lambda}\right)^k}, \quad x \geq 0
$$

- **Parameters:**
  - $k$: Shape parameter
  - $\lambda$: Scale parameter
- **Usage:** Risk assessment, survival analysis in finance.

---

## 9. Beta Distribution

The **Beta Distribution** is defined on the interval [0, 1] and is useful for modeling random variables limited to this range.

**Formula:**

$$
f(x) = \frac{x^{\alpha - 1} (1 - x)^{\beta - 1}}{B(\alpha, \beta)}, \quad 0 \leq x \leq 1
$$

- **Parameters:**
  - $\alpha, \beta$: Shape parameters
- **Usage:** Modeling probabilities, portfolio weights.

---

## 10. Cauchy Distribution

The **Cauchy Distribution** has heavier tails than the normal distribution, making it useful for modeling extreme financial events.

**Formula:**

$$
f(x) = \frac{1}{\pi \gamma \left[ 1 + \left( \frac{x - x_0}{\gamma} \right)^2 \right]}
$$

- **Parameters:**
  - $x_0$: Location parameter
  - $\gamma$: Scale parameter
- **Usage:** Modeling asset returns with extreme movements.

---

## 11. Pareto Distribution

The **Pareto Distribution** is used to model heavy-tailed phenomena, such as wealth distribution or large insurance claims.

**Formula:**

$$
f(x) = \frac{\alpha x_m^\alpha}{x^{\alpha + 1}}, \quad x \geq x_m
$$

- **Parameters:**
  - $\alpha$: Shape parameter
  - $x_m$: Minimum value
- **Usage:** Modeling large losses, risk of extreme events.

---

## 12. Levy Distribution

The **Levy Distribution** is a heavy-tailed distribution used in various financial models, particularly in the context of stochastic processes.

**Formula:**

$$
f(x) = \sqrt{\frac{c}{2\pi}} \frac{e^{-\frac{c}{2x}}}{x^{3/2}}, \quad x > 0
$$

- **Parameters:**
  - $c$: Scale parameter
- **Usage:** Modeling stock price movements, option pricing.

---

## 13. Skewed Distributions

Many financial variables exhibit skewness. Skewed distributions like the **Skew-Normal** and **Skew-t** distributions accommodate asymmetry.

### Skew-Normal Distribution

**Formula:**

$$
f(x) = 2 \phi(x) \Phi(\alpha x)
$$

- **Parameters:**
  - $\alpha$: Skewness parameter
- **Usage:** Modeling asymmetric returns.

### Skew-t Distribution

Extends the Student's t-distribution to allow for skewness.

**Formula:**

$$
f(x) = \frac{2 \, t_\nu(x) \, T\left( \lambda x \sqrt{\frac{\nu+1}{\nu + x^2}} \right)}{\text{scale}}
$$

- **Parameters:**
  - $\nu$: Degrees of freedom
  - $\lambda$: Skewness parameter
- **Usage:** Enhanced modeling of asymmetrical and heavy-tailed data.

---

## References

- [Quantitative Finance Textbook](https://example.com/quant-finance)
- [Probability Distributions in Finance](https://example.com/prob-distributions-finance)
- [MathJax Documentation](https://www.mathjax.org/)
- [MathJax Accessibility Extensions Documentation](https://www.mathjax.org/)
- [LaTeX/Mathematics in Wikibooks](https://en.wikibooks.org/wiki/LaTeX/Mathematics)
- [Getting Started with Writing and Formatting on GitHub](https://docs.github.com/en/get-started/writing-on-github)
- [GitHub Flavored Markdown Spec](https://github.github.com/gfm/)
- [Help and Support](https://github.com/contact)

---

*This page was generated using ChatGPT.*
