# PhishGuard — Social Engineering Simulator

A browser-based cybersecurity awareness training simulator for CS 320: Computer Security  
King Faisal University — Department of Computer Sciences

---

## About

PhishGuard is an interactive simulator that presents users with 10 realistic social engineering attack scenarios — including phishing emails, scam chat messages, and impersonation attacks. Users make decisions on how to respond and receive detailed feedback explaining how each attack works and how to prevent it.

The goal is to build real-world security awareness by letting users experience attacks in a safe, educational environment.

---

## How to Run

No installation or server required.

1. Download or clone this repository
2. Open `index.html` in any modern web browser (Chrome, Firefox, Edge, Safari)
3. Click **Start Simulation** to begin

That's it — the app runs entirely in the browser with no backend or dependencies.

---

## Features

- **10 scenarios** covering Phishing, Scam, and Impersonation attack types
- **Two UI modes** — realistic email client and chat message interface
- **Per-scenario feedback** explaining the attack, how it works, and how to prevent it
- **Live score tracking** with progress bar throughout the simulation
- **Results screen** with accuracy percentage and tiered performance feedback
- **Fully local** — no data is collected or transmitted

---

## Project Structure

```
Phishing_Simulator/
├── index.html       # App structure and all three screens (Home, Simulation, Results)
├── app.js           # Game logic: screen navigation, scenario loading, scoring, feedback
├── scenarios.js     # All 10 scenario data objects (email/chat content, choices, feedback)
├── style.css        # Full styling including email client and chat UI
├── README.md        # This file
└── TEST_CASES.md    # Test cases and edge case results
```

---

## Scenarios Overview

| # | Type | Attack | UI |
|---|---|---|---|
| 1 | Phishing Email | Fake IT account deactivation notice | Email |
| 2 | Boss Impersonation | CEO gift card BEC attack | Email |
| 3 | Phishing Email | Fake PayPal account limitation | Email |
| 4 | Phone/Chat Scam | Amazon OTP theft via WhatsApp | Chat |
| 5 | Scam | STC fake prize with delivery fee | Chat |
| 6 | Impersonation | Fake IT remote access request via Teams | Chat |
| 7 | Phishing Email | Fake Microsoft 365 sign-in alert | Email |
| 8 | Scam | Payroll diversion / bank details harvest | Email |
| 9 | Impersonation | LinkedIn recruitment identity theft | Chat |
| 10 | Phone/Chat Scam | Bank account freeze smishing attack | Chat |

---

## AI Usage Declaration

In accordance with the course project guidelines, we declare that Claude (by Anthropic) was used as an AI assistant during the development of this project.
Specifically, Claude was used to assist with:

- Generating boilerplate HTML structure and base CSS styling, which was then customized and adjusted by the team
- Suggesting improvements to JavaScript logic after the team had written the initial implementation
- Proofreading and refining the English wording of scenario feedback text

The core work — designing the 10 scenarios, selecting attack types, defining the simulation flow, building and debugging the application, and testing — was done by the project team. Claude served as a coding assistant, similar to how a developer would use documentation or Stack Overflow, not as the primary author of the project.

---

## References

- OWASP Top Ten: https://owasp.org/www-project-top-ten/
- Enron Email Dataset (scenario inspiration): https://www.cs.cmu.edu/~enron/
- National Cybersecurity Authority (NCA): https://nca.gov.sa
