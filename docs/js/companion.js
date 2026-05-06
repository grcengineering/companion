const STORAGE_KEY = "grc_companion_state_v1";

const defaultState = {
  profile: {
    role: "",
    level: "non-technical",
    goal: "",
    friction: "",
    time: "30 minutes"
  },
  messages: [],
  progress: [
    { concept: "Evidence as byproduct", status: "not yet covered", last: "Not scheduled" },
    { concept: "Frameworks as maps", status: "not yet covered", last: "Not scheduled" },
    { concept: "Human API", status: "not yet covered", last: "Not scheduled" }
  ],
  currentPrompt: ""
};

let state = loadState();

const profileForm = document.querySelector("#profile-form");
const conversation = document.querySelector("#conversation");
const promptOutput = document.querySelector("#companion-prompt");
const progressList = document.querySelector("#progress-list");
const messageTemplate = document.querySelector("#message-template");

function loadState() {
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (!saved) return structuredClone(defaultState);

  try {
    return { ...structuredClone(defaultState), ...JSON.parse(saved) };
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState() {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function hydrateProfile() {
  for (const [key, value] of Object.entries(state.profile)) {
    const field = profileForm.elements[key];
    if (field) field.value = value;
  }
}

function profileSummary() {
  const role = state.profile.role || "GRC practitioner";
  const goal = state.profile.goal || "build better GRC engineering judgment";
  const friction = state.profile.friction || "not specified yet";

  return `Role: ${role}
Level: ${state.profile.level}
Goal: ${goal}
Current friction: ${friction}
Time available: ${state.profile.time}`;
}

function addMessage(role, body) {
  state.messages.push({ role, body, at: new Date().toISOString() });
  saveState();
  renderMessages();
}

function renderMessages() {
  conversation.innerHTML = "";

  const messages = state.messages.length
    ? state.messages
    : [{
        role: "companion",
        body: "Start with a learning rep. Choose a skill above or tell me what you want to understand. I will ask before I tell, then help you build a small safe artefact."
      }];

  messages.forEach((message) => {
    const node = messageTemplate.content.cloneNode(true);
    const article = node.querySelector(".message");
    article.classList.toggle("learner", message.role === "learner");
    node.querySelector(".message-role").textContent = message.role === "learner" ? "You" : "Companion";
    node.querySelector(".message-body").textContent = message.body;
    conversation.appendChild(node);
  });
}

function renderProgress() {
  progressList.innerHTML = "";

  state.progress.forEach((item) => {
    const row = document.createElement("div");
    row.className = "progress-item";
    row.innerHTML = `<strong>${escapeHtml(item.concept)}</strong><span>${escapeHtml(item.status)} · ${escapeHtml(item.last)}</span>`;
    progressList.appendChild(row);
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function markProgress(concept, status) {
  const existing = state.progress.find((item) => item.concept === concept);
  const last = new Date().toLocaleDateString();

  if (existing) {
    existing.status = status;
    existing.last = `Reviewed ${last}`;
  } else {
    state.progress.unshift({ concept, status, last: `Reviewed ${last}` });
  }

  saveState();
  renderProgress();
}

function setPrompt(prompt) {
  state.currentPrompt = prompt;
  promptOutput.value = prompt;
  saveState();
}

function skillPrompt(skill, learnerText = "") {
  const context = profileSummary();
  const request = learnerText.trim() || state.profile.goal || "Help me choose the next useful GRC engineering learning rep.";

  const base = `You are The GRC Companion, a learning-only companion carrying Ayoub Fandi's GRC engineering thinking.

Hard boundary:
- Do not operate my GRC programme.
- Do not assess vendors, prep live audits, author real policies, or run controls.
- If I ask for operational work, convert it into a fictional learning scenario.

Learner context:
${context}

Learning method:
- Ask before telling.
- Use active recall.
- Keep the next step one notch beyond my current level.
- End with a small build or artefact.
- Ask me to explain the idea back.
- Close with a short reflection question.

My request:
${request}`;

  if (skill === "path") {
    return `${base}

Invoke skill: learning-path-designer.

Create a short learning path with:
1. A diagnostic active-recall question.
2. Three milestones.
3. One small build per milestone.
4. A spaced review suggestion for next week.
5. A note on what not to overlearn yet.`;
  }

  if (skill === "concept") {
    return `${base}

Invoke skill: concept-tutor.

Teach one concept only. Start by asking me to define it. Then explain it plainly, give one practical example, name one beginner trap, and ask me to explain it back in my own words.`;
  }

  return `${base}

Invoke skill: lab-builder.

Design a project-based mini-lab that is learning-safe. It should use fictional data or a toy workflow if needed. Include milestones, deliverables, active recall checkpoints, and reflection.`;
}

function localCompanionResponse(skill, learnerText = "") {
  const goal = state.profile.goal || learnerText || "GRC engineering judgment";

  if (skill === "path") {
    markProgress("Frameworks as maps", "touched");
    return `Before I give you a path: what do you already believe about ${goal}?

Here is the first pass:

1. Model the work. Write the current plain-language version of the problem without framework labels.
2. Trace the evidence. Identify where proof would naturally appear if the work happened well.
3. Build a small artefact. Create a one-page decision note, toy register, or workflow map.

Small build for today: a one-page learning map with three columns: concept, why it matters, where it appears in real work.

Explain-back prompt: tell me the difference between learning a framework and learning the operating system it is trying to describe.`;
  }

  if (skill === "concept") {
    markProgress("Evidence as byproduct", "touched");
    return `Active recall first: define the concept in your own words before reading further.

A useful GRC engineering lens: evidence should be a byproduct of real work. If the only proof is a screenshot gathered during audit season, the system is probably optimised for audit performance instead of operational truth.

Beginner trap: treating evidence collection as the job. The better question is where evidence naturally appears when the control is alive.

Small build: choose one fictional control and list three natural evidence sources.

Explain-back prompt: explain this idea to a non-technical manager in four sentences.`;
  }

  markProgress("Human API", "touched");
  return `We can turn this into a learning-safe mini-lab.

Lab title: Build a toy GRC evidence map.

Milestone 1: Pick a fictional control and describe the human behaviour it depends on.
Milestone 2: Draw the Human API: requester, owner, approver, system, evidence trail.
Milestone 3: Create a tiny artefact: a table with control intent, real-world behaviour, natural evidence, failure mode, and review question.

Active recall checkpoint: before building, write what you think makes evidence trustworthy.

Reflection: what changed in how you think about controls after mapping the people and systems involved?`;
}

profileForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(profileForm);
  state.profile = Object.fromEntries(data.entries());
  saveState();
  addMessage("companion", "Profile saved. I will use this context to calibrate the next learning rep.");
});

document.querySelectorAll("[data-skill]").forEach((button) => {
  button.addEventListener("click", () => {
    const skill = button.dataset.skill;
    const prompt = skillPrompt(skill);
    setPrompt(prompt);
    addMessage("companion", localCompanionResponse(skill));
  });
});

document.querySelector("#chat-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.querySelector("#learner-message");
  const text = input.value.trim();
  if (!text) return;

  addMessage("learner", text);
  const prompt = skillPrompt("concept", text);
  setPrompt(prompt);
  addMessage("companion", localCompanionResponse("concept", text));
  input.value = "";
});

document.querySelector("#copy-prompt").addEventListener("click", async () => {
  if (!promptOutput.value) setPrompt(skillPrompt("path"));
  await navigator.clipboard.writeText(promptOutput.value);
});

document.querySelector("#download-session").addEventListener("click", () => {
  const body = `# GRC Companion Session

## Profile

${profileSummary()}

## Messages

${state.messages.map((message) => `### ${message.role}

${message.body}`).join("\n\n")}

## Companion Prompt

${state.currentPrompt}
`;

  const blob = new Blob([body], { type: "text/markdown" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "grc-companion-session.md";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
});

document.querySelector("#export-profile").addEventListener("click", () => {
  const blob = new Blob([JSON.stringify(state.profile, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "grc-companion-profile.json";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
});

document.querySelector("#reset-progress").addEventListener("click", () => {
  if (!window.confirm("Reset local profile, conversation, and progress?")) return;
  state = structuredClone(defaultState);
  saveState();
  hydrateProfile();
  renderMessages();
  renderProgress();
  setPrompt("");
});

hydrateProfile();
renderMessages();
renderProgress();
promptOutput.value = state.currentPrompt;
