// ============================================
// PhishGuard — App Logic
// ============================================

let currentIndex = 0;
let score = 0;
let answered = false;

// ---- SCREEN NAVIGATION ----
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
}

function goHome() {
  showScreen('screen-home');
}

// ---- GAME FLOW ----
function startGame() {
  currentIndex = 0;
  score = 0;
  answered = false;
  showScreen('screen-sim');
  loadScenario();
}

function loadScenario() {
  answered = false;
  const s = SCENARIOS[currentIndex];

  // Update header
  const pct = Math.round((currentIndex / SCENARIOS.length) * 100);
  document.getElementById('progress-fill').style.width = pct + '%';
  document.getElementById('progress-label').textContent = (currentIndex + 1) + ' / ' + SCENARIOS.length;
  document.getElementById('live-score').textContent = score;
  document.getElementById('scenario-number').textContent = 'Scenario ' + String(s.id).padStart(2, '0');

  const tag = document.getElementById('attack-tag');
  tag.textContent = s.type;
  tag.className = 'attack-tag ' + s.tagClass;

  // Clear previous
  document.getElementById('feedback-panel').innerHTML = '';
  document.getElementById('next-wrap').style.display = 'none';
  document.getElementById('choices-section').style.display = 'block';

  // Build UI
  if (s.ui === 'email') {
    buildEmailUI(s.email);
  } else {
    buildChatUI(s.chat);
  }

  // Build choices
  buildChoices(s);
}

// ---- EMAIL UI ----
function buildEmailUI(e) {
  const bodyHtml = e.body.replace(/\n/g, '<br>');
  const linkHtml = e.link
    ? `<br><br><a class="email-link" onclick="return false;" href="#">${e.link}</a>`
    : '';

  document.getElementById('scenario-ui').innerHTML = `
    <div class="email-client">
      <div class="email-chrome">
        <div class="chrome-dot" style="background:#ff5f57"></div>
        <div class="chrome-dot" style="background:#febc2e"></div>
        <div class="chrome-dot" style="background:#28c840"></div>
        <div class="email-chrome-title">Mail — Inbox</div>
      </div>
      <div class="email-inbox-bar">
        <div class="inbox-dot"></div>
        Inbox &nbsp;·&nbsp; 1 unread
      </div>
      <div class="email-row">
        <div class="email-avatar" style="background:${e.avatarBg};color:${e.avatarColor}">${e.avatar}</div>
        <div class="email-content">
          <div class="email-from-name">${e.from}</div>
          <div class="email-from-addr">&lt;${e.addr}&gt;</div>
          <div class="email-subject">${e.subject}</div>
          <div class="email-body">${bodyHtml}${linkHtml}</div>
        </div>
        <div class="email-time">${e.time}</div>
      </div>
    </div>
  `;
}

// ---- CHAT UI ----
function buildChatUI(c) {
  const msgsHtml = c.messages.map(m => {
    const textHtml = m.text.replace(
      /(https?:\/\/\S+)/g,
      '<span class="bubble-link">$1</span>'
    );
    return `
      <div class="msg-row ${m.from}">
        <div class="bubble ${m.from}">${textHtml}</div>
        <div class="msg-time">${m.time}</div>
      </div>
    `;
  }).join('');

  document.getElementById('scenario-ui').innerHTML = `
    <div class="chat-client">
      <div class="chat-top">
        <div class="chat-avatar-circle" style="background:${c.avatarBg};color:${c.avatarColor}">${c.avatar}</div>
        <div>
          <div class="chat-contact-name">${c.name}</div>
          <div class="chat-platform">${c.platform}</div>
        </div>
      </div>
      <div class="chat-messages">${msgsHtml}</div>
    </div>
  `;
}

// ---- CHOICES ----
function buildChoices(s) {
  const container = document.getElementById('choices-list');
  container.innerHTML = '';

  s.choices.forEach((choice, i) => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.textContent = choice.text;
    btn.onclick = () => selectAnswer(i);
    container.appendChild(btn);
  });
}

// ---- ANSWER SELECTION ----
function selectAnswer(choiceIndex) {
  if (answered) return;
  answered = true;

  const s = SCENARIOS[currentIndex];
  const chosen = s.choices[choiceIndex];
  const isCorrect = chosen.correct;

  if (isCorrect) {
    score++;
    document.getElementById('live-score').textContent = score;
  }

  // Style buttons
  document.querySelectorAll('.choice-btn').forEach((btn, i) => {
    btn.disabled = true;
    if (s.choices[i].correct) {
      btn.classList.add('correct');
    } else if (i === choiceIndex && !isCorrect) {
      btn.classList.add('wrong');
    }
  });

  // Show feedback
  showFeedback(s, isCorrect);

  // Show next button
  const nextBtn = document.getElementById('btn-next');
  const nextWrap = document.getElementById('next-wrap');
  nextBtn.textContent = currentIndex < SCENARIOS.length - 1 ? 'Next scenario' : 'See my results';
  nextBtn.innerHTML = nextBtn.textContent + ` <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  nextWrap.style.display = 'flex';

  // Scroll to feedback
  setTimeout(() => {
    document.getElementById('feedback-panel').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 100);
}

// ---- FEEDBACK PANEL ----
function showFeedback(s, isCorrect) {
  const f = s.feedback;
  const panel = document.getElementById('feedback-panel');
  panel.innerHTML = `
    <div class="feedback-panel ${isCorrect ? 'correct' : 'wrong'}">
      <div class="fb-verdict">${isCorrect ? f.verdict_correct : f.verdict_wrong}</div>
      <div class="fb-main">${isCorrect ? f.main_correct : f.main_wrong}</div>
      <div class="fb-section">
        <div class="fb-section-title">How this attack works</div>
        <div class="fb-section-body">${f.how_works}</div>
      </div>
      <div class="fb-section">
        <div class="fb-section-title">How to prevent it</div>
        <div class="fb-section-body">${f.prevention}</div>
      </div>
    </div>
  `;
}

// ---- NEXT SCENARIO ----
function nextScenario() {
  currentIndex++;
  if (currentIndex >= SCENARIOS.length) {
    showResults();
  } else {
    loadScenario();
    // Scroll back to top of sim body
    document.getElementById('sim-body').scrollTo(0, 0);
    window.scrollTo(0, 0);
  }
}

// ---- RESULTS ----
function showResults() {
  showScreen('screen-results');

  const pct = Math.round((score / SCENARIOS.length) * 100);
  document.getElementById('final-score').textContent = score;
  document.getElementById('r-correct').textContent = score;
  document.getElementById('r-wrong').textContent = SCENARIOS.length - score;
  document.getElementById('r-pct').textContent = pct + '%';

  const tiers = [
    { min: 0,  max: 2,  title: 'Needs improvement.',  msg: 'Several attacks got through undetected. Study each explanation carefully — these exact scenarios happen in real workplaces every day. Retake the simulation to reinforce the concepts.' },
    { min: 3,  max: 4,  title: 'Getting there.',       msg: 'You caught some attacks but missed important ones. The scenarios you got wrong are the most common in real-world attacks. Review the feedback and try again.' },
    { min: 5,  max: 6,  title: 'Good awareness.',      msg: 'Solid performance overall. A few attack types slipped through — focus on those specific scenarios and their prevention tips to close the remaining gaps.' },
    { min: 7,  max: 8,  title: 'Well done!',           msg: 'Strong security awareness. You identified most attacks correctly. Stay consistent in applying these instincts to every email and message you receive in real life.' },
    { min: 9,  max: 10, title: 'Security expert!',     msg: 'Outstanding result. You spotted every attack correctly. You have the awareness to protect yourself and help educate those around you.' }
  ];

  const tier = tiers.find(t => score >= t.min && score <= t.max) || tiers[0];
  document.getElementById('result-title').textContent = tier.title;
  document.getElementById('result-msg').textContent = tier.msg;
}
