// ============================================
// PhishGuard — Scenarios Data
// All 10 social engineering attack scenarios
// ============================================

const SCENARIOS = [
  {
    id: 1,
    type: "Phishing email",
    tagClass: "tag-phishing",
    ui: "email",
    email: {
      from: "IT Support",
      addr: "it-support@comp4ny-helpdesk.com",
      avatar: "IT",
      avatarBg: "#1a2535",
      avatarColor: "#00d4ff",
      time: "9:14 AM",
      subject: "Urgent: Your account will be deactivated in 24 hours",
      body: "Dear Employee,\n\nWe have detected unusual activity on your account. Your access will be suspended within 24 hours unless you verify your credentials immediately.\n\nPlease click the link below to confirm your identity:",
      link: "http://company-verify.login-secure.net/confirm"
    },
    choices: [
      { text: "Click the link and verify your credentials before the deadline.", correct: false },
      { text: "Inspect the sender address carefully and report it to the real IT department.", correct: true },
      { text: "Reply to the email to ask if the request is genuine.", correct: false }
    ],
    feedback: {
      verdict_correct: "Correct — good catch!",
      verdict_wrong: "Incorrect — this was a phishing attack.",
      main_correct: "The sender domain 'comp4ny-helpdesk.com' is a typosquat — 'comp4ny' instead of 'company'. Urgency and threats are classic phishing tactics designed to bypass critical thinking.",
      main_wrong: "This is a phishing email. The domain 'comp4ny-helpdesk.com' fakes your IT department. Replying sends your message to the attacker. The link leads to a credential-harvesting site.",
      how_works: "The attacker spoofs a trusted internal department using a look-alike domain. The 24-hour deadline forces rapid, emotional decision-making before the victim has time to verify.",
      prevention: "Always inspect the full sender email address character by character. Hover over links to preview the real URL. Contact IT through official internal channels — never through a suspicious email."
    }
  },
  {
    id: 2,
    type: "Boss impersonation",
    tagClass: "tag-impersonation",
    ui: "email",
    email: {
      from: "Ahmed Al-Rashid (CEO)",
      addr: "ahmed.alrashid@company-management.net",
      avatar: "AA",
      avatarBg: "#2d2040",
      avatarColor: "#a78bfa",
      time: "11:32 AM",
      subject: "Urgent and confidential request",
      body: "Hi,\n\nI am currently in a board meeting and cannot take calls. I need you to purchase 5 iTunes gift cards worth $200 each for a client presentation — urgently.\n\nSend me the redemption codes as soon as possible. Please keep this confidential — do not tell anyone about this request.\n\nThank you,\nAhmed",
      link: null
    },
    choices: [
      { text: "Buy the gift cards immediately — your CEO needs them urgently.", correct: false },
      { text: "Call the CEO directly using his known phone number to verify the request.", correct: true },
      { text: "Reply to the email asking for more details before doing anything.", correct: false }
    ],
    feedback: {
      verdict_correct: "Correct — you spotted the BEC scam!",
      verdict_wrong: "Incorrect — this was a Business Email Compromise attack.",
      main_correct: "The domain 'company-management.net' is not your real company domain. The secrecy request, urgency, and gift card demand are the three classic signals of a BEC (Business Email Compromise) attack.",
      main_wrong: "This is a BEC attack. Replying goes back to the attacker's inbox. No legitimate executive ever requests gift cards for business purposes. The secrecy demand is designed to prevent you from asking colleagues for help.",
      how_works: "Attackers register domains similar to the target company and impersonate senior executives. They rely on employees' instinct to obey authority and their reluctance to question a CEO, combined with urgency to prevent verification.",
      prevention: "Always verify unusual financial requests by calling the person directly on a phone number you already know — never one provided in the suspicious email. No real business pays for client gifts with iTunes gift cards."
    }
  },
  {
    id: 3,
    type: "Phishing email",
    tagClass: "tag-phishing",
    ui: "email",
    email: {
      from: "PayPal Security Team",
      addr: "noreply@paypal-security-alert.com",
      avatar: "PP",
      avatarBg: "#1a2535",
      avatarColor: "#00d4ff",
      time: "2:05 PM",
      subject: "Your account has been limited — action required",
      body: "Dear Customer,\n\nWe noticed a login attempt from an unrecognized device in Moscow, Russia at 01:34 AM.\n\nFor your protection, we have temporarily limited your account. To restore full access and dispute this activity, please verify your information within 12 hours. After this time, your account may be permanently suspended.",
      link: "http://paypal-verify.account-secure.info/login"
    },
    choices: [
      { text: "Click the link urgently — you need to dispute the login before the deadline.", correct: false },
      { text: "Open a new browser tab and go to paypal.com by typing it yourself.", correct: true },
      { text: "Reply to the email asking PayPal to cancel the suspicious login.", correct: false }
    ],
    feedback: {
      verdict_correct: "Correct — you navigated safely!",
      verdict_wrong: "Incorrect — this link leads to a fake PayPal site.",
      main_correct: "Typing the URL directly is always the safe approach. The sender domain 'paypal-security-alert.com' and the link domain 'account-secure.info' have no affiliation with PayPal.",
      main_wrong: "The link leads to a cloned PayPal login page. Your credentials go directly to the attacker. Replying to the email also confirms your address is active and may prompt further attacks.",
      how_works: "Attackers clone the real PayPal website pixel-for-pixel. The email uses fear of account loss and a foreign login location to trigger immediate action. The 12-hour deadline prevents calm, rational thinking.",
      prevention: "Always type financial website URLs directly in your browser. Confirm the domain is exactly 'paypal.com' — not any variation. Real PayPal emails come from @paypal.com addresses only."
    }
  },
  {
    id: 4,
    type: "Phone/chat scam",
    tagClass: "tag-scam",
    ui: "chat",
    chat: {
      name: "Unknown +1 (855) 203-4471",
      platform: "WhatsApp",
      avatar: "?",
      avatarBg: "#3a2e10",
      avatarColor: "#ffb300",
      messages: [
        { from: "them", text: "Hello! This is Amazon Customer Service. We have detected a suspicious order of $847 placed on your account for an iPhone 15 Pro. To cancel this order and secure a full refund, please confirm your account password and the OTP we will send to your phone.", time: "3:22 PM" },
        { from: "them", text: "This is urgent — the order is scheduled to ship in 2 hours. Please respond immediately to cancel.", time: "3:23 PM" }
      ]
    },
    choices: [
      { text: "Share your password and OTP to cancel the order quickly.", correct: false },
      { text: "Hang up and contact Amazon directly through their official website.", correct: true },
      { text: "Share only the OTP but not your password — it seems safer.", correct: false }
    ],
    feedback: {
      verdict_correct: "Correct — Amazon never contacts you this way!",
      verdict_wrong: "Incorrect — this is a vishing (voice phishing) attack.",
      main_correct: "Amazon never contacts customers via WhatsApp asking for passwords or OTPs. Any company asking for an OTP over phone or chat is attempting account takeover — OTPs are your second layer of authentication.",
      main_wrong: "OTPs are one-time codes designed to prove it is you — sharing one with anyone gives them immediate, full access to your account. Even sharing 'just' the OTP is enough for a complete takeover.",
      how_works: "Attackers pose as customer service agents on WhatsApp, creating panic with a fake high-value order. The real goal is your OTP, which they use alongside a stolen or guessed password to take over your account instantly.",
      prevention: "Legitimate companies never ask for passwords or OTPs through chat or phone calls. Verify orders by logging into your account directly. Call only the number printed on the company's official website."
    }
  },
  {
    id: 5,
    type: "Scam",
    tagClass: "tag-scam",
    ui: "chat",
    chat: {
      name: "Saudi Telecom Rewards",
      platform: "WhatsApp · Official channel",
      avatar: "ST",
      avatarBg: "#1a3a2a",
      avatarColor: "#00e676",
      messages: [
        { from: "them", text: "Congratulations! You have been selected as our lucky customer of the month! You have won a brand new iPhone 15 Pro (256GB) worth 4,500 SAR.", time: "10:11 AM" },
        { from: "them", text: "To claim your prize, click the link below and pay a small 25 SAR delivery fee. This offer expires in 60 minutes!", time: "10:12 AM" },
        { from: "them", text: "http://stc-rewards-claim.online/prize-2024", time: "10:12 AM" }
      ]
    },
    choices: [
      { text: "Pay the 25 SAR quickly — it is a small price for a 4,500 SAR prize.", correct: false },
      { text: "Ignore it, block the number, and report it as spam to your carrier.", correct: true },
      { text: "Click the link to check if the prize offer looks legitimate before paying.", correct: false }
    ],
    feedback: {
      verdict_correct: "Correct — this is a classic prize scam!",
      verdict_wrong: "Incorrect — clicking or paying opens you to further fraud.",
      main_correct: "Legitimate prize programs never ask winners to pay fees to claim a reward. The domain 'stc-rewards-claim.online' has zero affiliation with STC. The 60-minute countdown is designed to prevent verification.",
      main_wrong: "Clicking the link can install malware or steal payment details before you even pay. If you do pay, the 25 SAR is the entry point — attackers will charge your card repeatedly or sell your details.",
      how_works: "Prize scams impersonate known brands and create urgency with countdown timers. The small 'delivery fee' is designed to feel risk-free. It actually harvests your full payment card details for larger future fraud.",
      prevention: "Real companies do not announce prizes through random WhatsApp messages or require fees to receive winnings. Verify any prize by contacting the company directly through their official website or store."
    }
  },
  {
    id: 6,
    type: "Impersonation",
    tagClass: "tag-impersonation",
    ui: "chat",
    chat: {
      name: "Mohammed — IT Department",
      platform: "Microsoft Teams",
      avatar: "MD",
      avatarBg: "#2d2040",
      avatarColor: "#a78bfa",
      messages: [
        { from: "them", text: "Hi, this is Mohammed from IT. We are running an urgent security audit on all employee accounts today due to a detected network intrusion.", time: "9:45 AM" },
        { from: "them", text: "I need remote access to your computer for approximately 10 minutes to run our security scanning tool. Please install the utility from the link below and share the 6-digit access code with me:", time: "9:46 AM" },
        { from: "them", text: "http://download-anydesk.support-tools.net/install", time: "9:46 AM" }
      ]
    },
    choices: [
      { text: "Install the tool and share the code — IT needs access urgently for the security audit.", correct: false },
      { text: "Call the IT department on their official number to verify this request first.", correct: true },
      { text: "Install the tool but do not share the access code until you verify more details.", correct: false }
    ],
    feedback: {
      verdict_correct: "Correct — always verify before granting remote access!",
      verdict_wrong: "Incorrect — remote access tools give full device control.",
      main_correct: "Verifying through official channels first is always the right move. The link is not from a company-managed source. Real IT security audits are scheduled, announced in advance, and use company-deployed tools — not links sent via chat.",
      main_wrong: "Installing the tool prepares the attacker's entry point. Once you share the 6-digit code, they have full, immediate control of your computer — they can see your files, install malware, and steal all credentials stored in your browser.",
      how_works: "Attackers impersonate internal IT staff on collaboration platforms. Remote access tools like AnyDesk are legitimate software repurposed for attacks. The 'security audit' framing makes compliance feel like the responsible action.",
      prevention: "IT departments conduct scheduled audits using pre-installed, company-managed tools. Any unsolicited remote access request — even from a familiar name on Teams — must be verified by calling IT directly on a number you look up yourself."
    }
  },
  {
    id: 7,
    type: "Phishing email",
    tagClass: "tag-phishing",
    ui: "email",
    email: {
      from: "Microsoft 365 Security",
      addr: "account-security@microsoft-support-alert.com",
      avatar: "MS",
      avatarBg: "#1a2535",
      avatarColor: "#00d4ff",
      time: "8:50 AM",
      subject: "Action required: Unusual sign-in activity detected",
      body: "Hello,\n\nA sign-in to your Microsoft 365 account was blocked because it appeared unusual. If this was you signing in, you can safely ignore this message.\n\nIf this was NOT you, your account may be compromised. Please verify your identity within 24 hours to prevent your account from being suspended:",
      link: "http://microsoft365-verify.secure-login.net/auth"
    },
    choices: [
      { text: "Click the verification link before the 24-hour deadline expires.", correct: false },
      { text: "Navigate to account.microsoft.com directly in your browser to check activity.", correct: true },
      { text: "Do nothing — the email said to ignore it if it was you.", correct: false }
    ],
    feedback: {
      verdict_correct: "Correct — direct navigation is always safest!",
      verdict_wrong: "Incorrect — the link leads to a fake Microsoft page.",
      main_correct: "Going directly to Microsoft's official site bypasses the phishing link entirely. The sender 'microsoft-support-alert.com' is not a Microsoft domain. All legitimate Microsoft security emails originate from @microsoft.com addresses.",
      main_wrong: "Doing nothing when you are genuinely unsure still leaves a potential compromise unaddressed. The correct action is to check your account security directly at account.microsoft.com — not through the email link.",
      how_works: "Attackers clone Microsoft's email design with pixel-perfect accuracy. The 'if this was you, ignore it' line is a psychological trick to reduce suspicion — real targets who are confused still click the link to 'make sure'.",
      prevention: "Microsoft security notifications always come from @microsoft.com domains. Check all sign-in activity by navigating to account.microsoft.com directly. Enable two-factor authentication so attackers cannot access your account even with your password."
    }
  },
  {
    id: 8,
    type: "Scam",
    tagClass: "tag-scam",
    ui: "email",
    email: {
      from: "HR Department — Payroll",
      addr: "hr-payroll@company-salaries-portal.com",
      avatar: "HR",
      avatarBg: "#1a3a2a",
      avatarColor: "#00e676",
      time: "4:15 PM",
      subject: "Action required: Update your bank details before Friday",
      body: "Dear Staff,\n\nDue to our scheduled migration to a new payroll management system, all employees are required to update their bank account details by this Friday to ensure uninterrupted salary payments next month.\n\nPlease complete the secure form at the link below with your bank account number and IBAN:",
      link: "http://company-payroll-update.net/bank-form"
    },
    choices: [
      { text: "Fill in the bank form quickly — you cannot risk missing your salary payment.", correct: false },
      { text: "Contact the real HR department directly to verify this request before doing anything.", correct: true },
      { text: "Submit your IBAN but not the full account number — that should be safe enough.", correct: false }
    ],
    feedback: {
      verdict_correct: "Correct — HR would never use an external domain for bank details!",
      verdict_wrong: "Incorrect — this is a payroll diversion attack.",
      main_correct: "The domain 'company-salaries-portal.com' is not your real company domain. HR always communicates payroll changes through official internal systems. The Friday deadline creates salary-loss fear to override critical thinking.",
      main_wrong: "Submitting any bank information to an unverified form gives attackers the data needed to redirect your salary entirely. Providing an IBAN alone can still be used for fraud — attackers can initiate withdrawals in many banking systems.",
      how_works: "Payroll diversion scams target employees' financial information directly. Attackers time these emails near payroll processing dates to maximize fear and believability. The 'secure form' is a data-harvesting page that sends information straight to the attacker.",
      prevention: "HR departments always use official internal communication systems — never external websites — for sensitive financial requests. Walk up to HR in person or call an official internal number to verify any request involving your bank details."
    }
  },
  {
    id: 9,
    type: "Impersonation",
    tagClass: "tag-impersonation",
    ui: "chat",
    chat: {
      name: "Sarah K. — Senior Recruiter",
      platform: "LinkedIn Message",
      avatar: "SK",
      avatarBg: "#2d2040",
      avatarColor: "#a78bfa",
      messages: [
        { from: "them", text: "Hi! I came across your profile and I think you would be a perfect fit for a senior cybersecurity analyst role at our firm. The package is 35,000 SAR/month + full benefits + relocation support.", time: "Yesterday" },
        { from: "them", text: "To send you the full job description and begin pre-screening, I just need your national ID number and current salary details. This is standard for our international hiring process.", time: "Yesterday" },
        { from: "them", text: "We have 3 other strong candidates so please respond today if you are interested!", time: "9:03 AM" }
      ]
    },
    choices: [
      { text: "Share your national ID and salary — the job offer looks very attractive.", correct: false },
      { text: "Research the recruiter and company independently before sharing any personal information.", correct: true },
      { text: "Share your salary history but not your national ID number for now.", correct: false }
    ],
    feedback: {
      verdict_correct: "Correct — verify before sharing any personal information!",
      verdict_wrong: "Incorrect — this is a recruitment identity theft scam.",
      main_correct: "Verify the recruiter's identity by finding them through a fresh LinkedIn search and confirming they work at the stated company. Legitimate recruiters at real firms never ask for national ID numbers in an initial message.",
      main_wrong: "Salary details reveal your financial situation and help attackers craft more targeted scams. National ID numbers are used for SIM swap fraud, financial account takeovers, and identity theft that can take years to resolve.",
      how_works: "Attackers create polished recruiter profiles targeting professionals with high-salary offers. The urgency of competing candidates pressures rapid response before verification. Data collected is used for identity theft or sold on dark web marketplaces.",
      prevention: "No legitimate recruitment process asks for a national ID number before any interview has taken place. Verify any recruiter by searching LinkedIn independently and confirming through the company's official HR contact page."
    }
  },
  {
    id: 10,
    type: "Phone/chat scam",
    tagClass: "tag-scam",
    ui: "chat",
    chat: {
      name: "+966 55 123 4567",
      platform: "SMS",
      avatar: "!",
      avatarBg: "#3a1a1a",
      avatarColor: "#ff4d4d",
      messages: [
        { from: "them", text: "NCBE BANK: Your account has been temporarily frozen due to suspicious activity. To unfreeze your account, verify immediately via: http://ncbebank-secure.verify.net — or call 0800-NCBE-HELP", time: "1:34 PM" },
        { from: "me", text: "What suspicious activity was detected?", time: "1:35 PM" },
        { from: "them", text: "An international wire transfer of 12,500 SAR to an overseas account. To cancel and unfreeze you must verify within 30 minutes or the transfer will complete and cannot be reversed.", time: "1:35 PM" }
      ]
    },
    choices: [
      { text: "Visit the link urgently to stop the transfer before 30 minutes is up.", correct: false },
      { text: "Call your bank using the phone number on the back of your physical bank card.", correct: true },
      { text: "Call the number provided in the SMS to speak with bank support.", correct: false }
    ],
    feedback: {
      verdict_correct: "Correct — the card number is the only safe contact method!",
      verdict_wrong: "Incorrect — both the link and the SMS number lead to the attacker.",
      main_correct: "The number on the back of your physical bank card is the only guaranteed legitimate contact. The link in the SMS and the phone number provided are both attacker-controlled. Your real bank can see no actual transfer and no freeze on your account.",
      main_wrong: "Calling the number in the SMS connects you to the attacker posing as bank support. They will then walk you through 'verifying' your identity by collecting all the information needed for account takeover.",
      how_works: "SMS phishing (smishing) impersonates banks using fake sender names. Attackers provide their own phone number as 'bank support' — so even if you call to verify, you still reach them. The 30-minute window bypasses critical thinking entirely.",
      prevention: "Never use links, email addresses, or phone numbers from SMS messages to contact your bank. The only safe contact method is the number printed on the back of your physical bank card or visiting a branch in person."
    }
  }
];
