
---
layout: single
permalink: /probability-distributions/
title: "Probability Distributions in Quantitative Finance"
sitemap: true
---




<!-- MathJax Configuration -->
<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async
  src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
</script>

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
  - <span style="font-size:1.2em; font-weight:bold;">μ</span>: Mean
  - <span style="font-size:1.2em; font-weight:bold;">σ</span>: Standard deviation
- **Usage:** Modeling asset returns, errors in financial models.

---

## 2. Log-Normal Distribution

The **Log-Normal Distribution** models variables that are positively skewed, such as stock prices.

**Formula:**

$$
f(x) = \frac{1}{x \sigma \sqrt{2\pi}} e^{ -\frac{(\ln x - \mu)^2}{2\sigma^2} }, \quad x > 0
$$

- **Parameters:**
  - <span style="font-size:1.2em; font-weight:bold;">μ</span>: Mean of the natural logarithm of the variable
  - <span style="font-size:1.2em; font-weight:bold;">σ</span>: Standard deviation of the natural logarithm of the variable
- **Usage:** Modeling stock prices, asset prices in the Black-Scholes model.

---

## 3. Student's t-Distribution

The **Student's t-Distribution** is similar to the normal distribution but has heavier tails, allowing for better modeling of extreme events.

**Formula:**

$$
f(x) = \frac{\Gamma\left(\frac{\nu + 1}{2}\right)}{\sqrt{\nu \pi} \, \Gamma\left(\frac{\nu}{2}\right)} \left(1 + \frac{x^2}{\nu}\right)^{-\frac{\nu + 1}{2}}
$$

- **Parameters:**
  - <span style="font-size:1.2em; font-weight:bold;">ν</span>: Degrees of freedom
- **Usage:** Modeling asset returns with higher kurtosis, risk management.

---

## 4. Exponential Distribution

The **Exponential Distribution** models the time between events in a Poisson process.

**Formula:**

$$
f(x) = \lambda e^{-\lambda x}, \quad x \geq 0
$$

- **Parameters:**
  - <span style="font-size:1.2em; font-weight:bold;">λ</span>: Rate parameter
- **Usage:** Modeling time to default, time between trades.

---

## 5. Poisson Distribution

The **Poisson Distribution** models the number of events occurring within a fixed interval of time or space.

**Formula:**

$$
P(k) = \frac{\lambda^k e^{-\lambda}}{k!}, \quad k = 0, 1, 2, \dots
$$

- **Parameters:**
  - <span style="font-size:1.2em; font-weight:bold;">λ</span>: Average rate of occurrence
- **Usage:** Modeling number of trades, defaults in a portfolio.

---

## 6. Binomial Distribution

The **Binomial Distribution** models the number of successes in a fixed number of independent Bernoulli trials.

**Formula:**

$$
P(k) = \binom{n}{k} p^k (1-p)^{n-k}
$$

- **Parameters:**
  - <span style="font-size:1.2em; font-weight:bold;">n</span>: Number of trials
  - <span style="font-size:1.2em; font-weight:bold;">p</span>: Probability of success
- **Usage:** Option pricing, modeling binary outcomes.

---

## 7. Gamma Distribution

The **Gamma Distribution** is flexible and can model skewed data, useful for various financial applications.

**Formula:**

$$
f(x) = \frac{\beta^\alpha}{\Gamma(\alpha)} x^{\alpha - 1} e^{-\beta x}, \quad x \geq 0
$$

- **Parameters:**
  - <span style="font-size:1.2em; font-weight:bold;">α</span>: Shape parameter
  - <span style="font-size:1.2em; font-weight:bold;">β</span>: Rate parameter
- **Usage:** Modeling waiting times, insurance claims.

---

## 8. Weibull Distribution

The **Weibull Distribution** is used to model the time until a failure or event, similar to the exponential distribution but with more flexibility.

**Formula:**

$$
f(x) = \frac{k}{\lambda} \left(\frac{x}{\lambda}\right)^{k-1} e^{-\left(\frac{x}{\lambda}\right)^k}, \quad x \geq 0
$$

- **Parameters:**
  - <span style="font-size:1.2em; font-weight:bold;">k</span>: Shape parameter
  - <span style="font-size:1.2em; font-weight:bold;">λ</span>: Scale parameter
- **Usage:** Risk assessment, survival analysis in finance.

---

## 9. Beta Distribution

The **Beta Distribution** is defined on the interval [0, 1] and is useful for modeling random variables limited to this range.

**Formula:**

$$
f(x) = \frac{x^{\alpha - 1} (1 - x)^{\beta - 1}}{B(\alpha, \beta)}, \quad 0 \leq x \leq 1
$$

- **Parameters:**
  - <span style="font-size:1.2em; font-weight:bold;">α, β</span>: Shape parameters
- **Usage:** Modeling probabilities, portfolio weights.

---

## 10. Cauchy Distribution

The **Cauchy Distribution** has heavier tails than the normal distribution, making it useful for modeling extreme financial events.

**Formula:**

$$
f(x) = \frac{1}{\pi \gamma \left[ 1 + \left( \frac{x - x_0}{\gamma} \right)^2 \right]}
$$

- **Parameters:**
  - <span style="font-size:1.2em; font-weight:bold;">x₀</span>: Location parameter
  - <span style="font-size:1.2em; font-weight:bold;">γ</span>: Scale parameter
- **Usage:** Modeling asset returns with extreme movements.

---

## 11. Pareto Distribution

The **Pareto Distribution** is used to model heavy-tailed phenomena, such as wealth distribution or large insurance claims.

**Formula:**

$$
f(x) = \frac{\alpha x_m^\alpha}{x^{\alpha + 1}}, \quad x \geq x_m
$$

- **Parameters:**
  - <span style="font-size:1.2em; font-weight:bold;">α</span>: Shape parameter
  - <span style="font-size:1.2em; font-weight:bold;">xₘ</span>: Minimum value
- **Usage:** Modeling large losses, risk of extreme events.

---

## 12. Levy Distribution

The **Levy Distribution** is a heavy-tailed distribution used in various financial models, particularly in the context of stochastic processes.

**Formula:**

$$
f(x) = \sqrt{\frac{c}{2\pi}} \frac{e^{-\frac{c}{2x}}}{x^{3/2}}, \quad x > 0
$$

- **Parameters:**
  - <span style="font-size:1.2em; font-weight:bold;">c</span>: Scale parameter
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
  - <span style="font-size:1.2em; font-weight:bold;">α</span>: Skewness parameter
- **Usage:** Modeling asymmetric returns.

### Skew-t Distribution

Extends the Student's t-distribution to allow for skewness.

**Formula:**

$$
f(x) = \frac{2 \, t_\nu(x) \, T\left( \lambda x \sqrt{\frac{\nu+1}{\nu + x^2}} \right)}{\text{scale}}
$$

- **Parameters:**
  - <span style="font-size:1.2em; font-weight:bold;">ν</span>: Degrees of freedom
  - <span style="font-size:1.2em; font-weight:bold;">λ</span>: Skewness parameter
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

import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import norm, lognorm, t, expon, poisson, binom, gamma, weibull_min, beta, cauchy, pareto, levy, skewnorm, skewt

# Create a directory to save the plots
import os
output_dir = 'distribution_plots'
os.makedirs(output_dir, exist_ok=True)

# Define distributions and their parameters
distributions = [
    {
        'name': 'Normal Distribution',
        'distribution': norm,
        'params': {'loc': 0, 'scale': 1},
        'x_range': (-5, 5),
        'filename': 'normal_distribution.png'
    },
    {
        'name': 'Log-Normal Distribution',
        'distribution': lognorm,
        'params': {'s': 0.954, 'scale': np.exp(0)},
        'x_range': (0, 10),
        'filename': 'log_normal_distribution.png'
    },
    {
        'name': "Student's t-Distribution",
        'distribution': t,
        'params': {'df': 5},
        'x_range': (-5, 5),
        'filename': "students_t_distribution.png"
    },
    {
        'name': 'Exponential Distribution',
        'distribution': expon,
        'params': {'scale': 1},
        'x_range': (0, 5),
        'filename': 'exponential_distribution.png'
    },
    {
        'name': 'Poisson Distribution',
        'distribution': poisson,
        'params': {'mu': 3},
        'x_range': (0, 10),
        'filename': 'poisson_distribution.png'
    },
    {
        'name': 'Binomial Distribution',
        'distribution': binom,
        'params': {'n': 10, 'p': 0.5},
        'x_range': (0, 10),
        'filename': 'binomial_distribution.png'
    },
    {
        'name': 'Gamma Distribution',
        'distribution': gamma,
        'params': {'a': 2, 'scale': 2},
        'x_range': (0, 15),
        'filename': 'gamma_distribution.png'
    },
    {
        'name': 'Weibull Distribution',
        'distribution': weibull_min,
        'params': {'c': 1.5, 'scale': 1},
        'x_range': (0, 5),
        'filename': 'weibull_distribution.png'
    },
    {
        'name': 'Beta Distribution',
        'distribution': beta,
        'params': {'a': 2, 'b': 5},
        'x_range': (0, 1),
        'filename': 'beta_distribution.png'
    },
    {
        'name': 'Cauchy Distribution',
        'distribution': cauchy,
        'params': {'loc': 0, 'scale': 1},
        'x_range': (-10, 10),
        'filename': 'cauchy_distribution.png'
    },
    {
        'name': 'Pareto Distribution',
        'distribution': pareto,
        'params': {'b': 3, 'scale': 1},
        'x_range': (1, 5),
        'filename': 'pareto_distribution.png'
    },
    {
        'name': 'Levy Distribution',
        'distribution': levy,
        'params': {'loc': 0, 'scale': 1},
        'x_range': (0, 10),
        'filename': 'levy_distribution.png'
    },
    {
        'name': 'Skew-Normal Distribution',
        'distribution': skewnorm,
        'params': {'a': 5, 'loc': 0, 'scale': 1},
        'x_range': (-5, 5),
        'filename': 'skew_normal_distribution.png'
    },
    # Note: Skew-t Distribution is not directly available in scipy; requires custom implementation or use of third-party libraries.
    # For demonstration, we'll skip it or use a placeholder.
]

for dist in distributions:
    plt.figure(figsize=(8, 4))
    if dist['name'] == 'Poisson Distribution' or dist['name'] == 'Binomial Distribution':
        # Discrete distributions
        x = np.arange(dist['params']['mu'] - 3*dist['params']['mu']**0.5, dist['params']['mu'] + 3*dist['params']['mu']**0.5)
        x = np.arange(0, dist['params'].get('n', 10)+1)
        y = dist['distribution'].pmf(x, **dist['params'])
        plt.stem(x, y, use_line_collection=True)
        plt.title(dist['name'])
        plt.xlabel('k')
        plt.ylabel('Probability')
    elif dist['name'] == 'Skew-t Distribution':
        # Placeholder for Skew-t Distribution
        plt.text(0.5, 0.5, 'Skew-t Distribution plot not available', horizontalalignment='center', verticalalignment='center', transform=plt.gca().transAxes)
        plt.axis('off')
    else:
        # Continuous distributions
        x = np.linspace(dist['x_range'][0], dist['x_range'][1], 1000)
        y = dist['distribution'].pdf(x, **dist['params'])
        plt.plot(x, y, label=dist['name'])
        plt.title(dist['name'])
        plt.xlabel('x')
        plt.ylabel('Probability Density')
        plt.legend()
    plt.grid(True)
    plt.tight_layout()
    plt.savefig(os.path.join(output_dir, dist['filename']))
    plt.close()

print(f"Distribution plots saved in the '{output_dir}' directory.")







