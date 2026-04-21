# PhishGuard — Test Cases & Results

CS 320: Computer Security — Project Testing Documentation  
King Faisal University

---

## Testing Environment

- **Browser tested:** Google Chrome (latest), Microsoft Edge, Firefox
- **Device:** Desktop (Windows 11)
- **Test method:** Manual functional testing
- **Date:** April 2026

---

## Functional Test Cases

### TC-01 — Application Launch

| Field | Detail |
|---|---|
| **Test ID** | TC-01 |
| **Description** | Open `index.html` in browser |
| **Input** | Double-click `index.html` |
| **Expected Result** | Home screen displays with logo, description, stats (10 scenarios, 3 attack types, ~5 minutes), and Start button |
| **Actual Result** | ✅ Home screen loads correctly with all elements visible |

---

### TC-02 — Start Simulation

| Field | Detail |
|---|---|
| **Test ID** | TC-02 |
| **Description** | Click "Start Simulation" from home screen |
| **Input** | Click the Start button |
| **Expected Result** | Simulation screen appears showing Scenario 01, progress bar at 0%, score at 0, and correct UI type (email or chat) |
| **Actual Result** | ✅ Scenario 1 loads with email UI, progress shows 1/10, score shows 0 |

---

### TC-03 — Email UI Rendering

| Field | Detail |
|---|---|
| **Test ID** | TC-03 |
| **Description** | Verify email scenarios render correctly |
| **Input** | Start simulation, observe Scenario 1 (email type) |
| **Expected Result** | Email client UI displays sender name, spoofed address, subject line, body text, and phishing link |
| **Actual Result** | ✅ All email fields rendered correctly; phishing link shown but disabled (onclick returns false) |

---

### TC-04 — Chat UI Rendering

| Field | Detail |
|---|---|
| **Test ID** | TC-04 |
| **Description** | Verify chat scenarios render correctly |
| **Input** | Navigate to Scenario 4 (WhatsApp chat type) |
| **Expected Result** | Chat UI displays contact name, platform label, message bubbles with timestamps |
| **Actual Result** | ✅ Chat bubbles, sender name "Unknown +1 (855) 203-4471", and WhatsApp platform label all displayed correctly |

---

### TC-05 — Correct Answer Selection

| Field | Detail |
|---|---|
| **Test ID** | TC-05 |
| **Description** | Select the correct answer in a scenario |
| **Input** | In Scenario 1, click "Inspect the sender address carefully and report it to the real IT department." |
| **Expected Result** | Button highlights green, score increments by 1, feedback panel appears showing correct verdict and explanation, "Next scenario" button appears |
| **Actual Result** | ✅ All expected behavior confirmed; score updated to 1 |

---

### TC-06 — Wrong Answer Selection

| Field | Detail |
|---|---|
| **Test ID** | TC-06 |
| **Description** | Select a wrong answer in a scenario |
| **Input** | In Scenario 1, click "Click the link and verify your credentials before the deadline." |
| **Expected Result** | Clicked button highlights red, correct button highlights green, score does not change, feedback panel shows wrong verdict and explanation |
| **Actual Result** | ✅ Red/green highlighting correct, score unchanged, feedback shows attack explanation |

---

### TC-07 — Answer Lock (Edge Case)

| Field | Detail |
|---|---|
| **Test ID** | TC-07 |
| **Description** | Attempt to click a second answer after already answering |
| **Input** | After selecting an answer, click another choice button |
| **Expected Result** | Second click has no effect — `answered` flag prevents re-selection |
| **Actual Result** | ✅ Buttons are disabled after first selection; no double-scoring possible |

---

### TC-08 — Progress Bar Accuracy

| Field | Detail |
|---|---|
| **Test ID** | TC-08 |
| **Description** | Verify progress bar advances correctly through scenarios |
| **Input** | Advance through scenarios 1 → 5 → 10 |
| **Expected Result** | Progress fills proportionally: 10% after S1, 50% after S5, 100% at S10 |
| **Actual Result** | ✅ Progress bar and label (e.g. "5 / 10") update correctly at each step |

---

### TC-09 — All Correct Score (Edge Case)

| Field | Detail |
|---|---|
| **Test ID** | TC-09 |
| **Description** | Complete all 10 scenarios with all correct answers |
| **Input** | Select the correct answer for all 10 scenarios |
| **Expected Result** | Results screen shows score 10/10, 100% accuracy, "Security expert!" tier message |
| **Actual Result** | ✅ Final score 10, accuracy 100%, correct tier message displayed |

---

### TC-10 — All Wrong Score (Edge Case)

| Field | Detail |
|---|---|
| **Test ID** | TC-10 |
| **Description** | Complete all 10 scenarios with all wrong answers |
| **Input** | Select a wrong answer for all 10 scenarios |
| **Expected Result** | Results screen shows score 0/10, 0% accuracy, "Needs improvement." tier message |
| **Actual Result** | ✅ Final score 0, accuracy 0%, correct tier message displayed |

---

### TC-11 — Last Scenario Transitions to Results (Edge Case)

| Field | Detail |
|---|---|
| **Test ID** | TC-11 |
| **Description** | Verify that completing Scenario 10 triggers the results screen |
| **Input** | Answer Scenario 10 and click the final button (labelled "See my results") |
| **Expected Result** | Results screen appears instead of another scenario |
| **Actual Result** | ✅ Results screen loads correctly after Scenario 10; button label changed to "See my results" as expected |

---

### TC-12 — Back to Home Mid-Simulation (Edge Case)

| Field | Detail |
|---|---|
| **Test ID** | TC-12 |
| **Description** | Click "Back" during a simulation then restart |
| **Input** | Start simulation → answer 3 scenarios → click Back → click Start again |
| **Expected Result** | Home screen appears; on restart, score resets to 0 and simulation begins from Scenario 1 |
| **Actual Result** | ✅ State resets correctly — `currentIndex` and `score` both reset to 0 on `startGame()` |

---

### TC-13 — Retry from Results Screen (Edge Case)

| Field | Detail |
|---|---|
| **Test ID** | TC-13 |
| **Description** | Click "Try again" on the results screen |
| **Input** | Complete all scenarios → click "Try again" |
| **Expected Result** | Simulation restarts from Scenario 1 with score reset to 0 |
| **Actual Result** | ✅ Full reset confirmed; simulation restarts cleanly |

---

### TC-14 — Phishing Link Safety Check

| Field | Detail |
|---|---|
| **Test ID** | TC-14 |
| **Description** | Verify phishing links in email scenarios are non-functional |
| **Input** | Click the displayed phishing link in Scenario 1 |
| **Expected Result** | Link does not navigate — `onclick="return false"` prevents any action |
| **Actual Result** | ✅ Link is visually displayed but completely disabled; no navigation occurs |

---

### TC-15 — Results Stat Accuracy

| Field | Detail |
|---|---|
| **Test ID** | TC-15 |
| **Description** | Verify correct/wrong/percentage counts on results screen |
| **Input** | Complete simulation with 7 correct answers |
| **Expected Result** | Results show: Correct = 7, Wrong = 3, Accuracy = 70% |
| **Actual Result** | ✅ All three stats calculated and displayed correctly |

---

## Summary

| Total Tests | Passed | Failed |
|---|---|---|
| 15 | 15 | 0 |

All functional and edge case tests passed. The application behaves correctly across normal usage, boundary conditions (all correct, all wrong, last scenario), and navigation edge cases (back mid-game, retry from results).
