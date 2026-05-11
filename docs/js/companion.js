let canonicalContext = null;

const form = document.querySelector("#setup-form");
const output = document.querySelector("#setup-output");
const copyButton = document.querySelector("#copy-setup");

const platforms = {
  "claude-code": {
    label: "Claude Code",
    path: "dist/adapters/claude-code/companion/",
    steps: [
      "Use the generated Claude Code plugin bundle.",
      "Install or symlink the bundle according to your Claude Code plugin workflow.",
      "Start with the generated system prompt or point the Companion at local files, diffs, terminal output, or notes you want to learn from."
    ],
    command: "/companion:retro"
  },
  "claude-projects": {
    label: "Claude Projects",
    path: "dist/adapters/claude-projects/",
    steps: [
      "Create a new Claude Project.",
      "Upload companion-instructions.md plus the knowledge, profile, and demos folders as project knowledge.",
      "Start a new chat with the generated system prompt and upload only the artefacts you intentionally want to use as learning material."
    ],
    command: "Use the generated system prompt in the Project chat."
  },
  cursor: {
    label: "Cursor",
    path: "dist/adapters/cursor/.cursor/rules/",
    steps: [
      "Copy the generated Cursor rules into your workspace's .cursor/rules directory.",
      "Open Cursor Composer in the workspace.",
      "Use the generated system prompt with project files, diffs, notes, and outputs already in Cursor as learning material when you ask for a retrospective."
    ],
    command: "Use the generated system prompt in Cursor Composer."
  },
  codex: {
    label: "Codex",
    path: "dist/adapters/codex/",
    steps: [
      "Use the Codex adapter bundle as the companion context.",
      "Keep AGENTS.md, brain, skills, commands, knowledge, profile, and demos together.",
      "Start with the generated system prompt inside a Codex session and reference local repo files or outputs you want to learn from."
    ],
    command: "Use the generated system prompt in Codex."
  },
  github: {
    label: "Just files",
    path: "brain/, skills/, commands/, profile/, knowledge/, demos/",
    steps: [
      "Open the GitHub repository.",
      "Read brain/persona.md, brain/skill-router.md, and the relevant skill file.",
      "Use the generated system prompt in whichever AI workspace you already trust, then provide real artefacts locally inside that workspace."
    ],
    command: "No adapter command. Use the canonical files directly."
  },
  "not-sure": {
    label: "Not sure",
    path: "dist/adapters/claude-projects/",
    steps: [
      "Start with Claude Projects if you want the lowest-friction non-terminal path.",
      "Use Claude Code, Cursor, or Codex if you want the Companion where you already build.",
      "Use the public website for setup only; bring the generated system prompt and real work into the local AI workspace you already use when you are ready to learn from it."
    ],
    command: "Use the generated system prompt first."
  }
};

async function loadCanonicalContext() {
  try {
    const response = await fetch("data/companion-context.json", { cache: "no-store" });
    if (!response.ok) return;
    canonicalContext = await response.json();
    buildSetup();
  } catch {
    // Direct file:// use may block fetch. The static wizard still works without generated context.
  }
}

function field(name) {
  if (!form) return "";
  return new FormData(form).get(name)?.toString().trim() || "";
}

function selectedPlatform() {
  return platforms[field("platform")] || platforms["claude-code"];
}

function inferRoute(text) {
  const normalized = text.toLowerCase();

  if (/(file|notes|diff|terminal|output|transcript|draft|questionnaire|walkthrough|evidence|policy|control|review)/.test(normalized)) {
    return {
      skill: "task-retrospective",
      command: "/companion:retro",
      reason: "You are bringing real work or local outputs, so the best first move is to learn from the actual material without taking over the decision."
    };
  }

  if (/(just|finished|completed|ran|did|spent|after|walkthrough|questionnaire|review)/.test(normalized)) {
    return {
      skill: "task-retrospective",
      command: "/companion:retro",
      reason: "You described work that already happened, so the best first move is to extract learning from it."
    };
  }

  if (/(analogy|metaphor|translate|pattern|like|compare|frame|lens)/.test(normalized)) {
    return {
      skill: "cross-domain-translator",
      command: "/companion:translate",
      reason: "You are asking for a frame shift, so a cross-domain pattern can clarify the GRC move."
    };
  }

  if (/(build|make|create|lab|template|artefact|artifact|practice)/.test(normalized)) {
    return {
      skill: "lab-builder",
      command: "/companion:lab",
      reason: "You are asking to practise by building, so a learning-safe mini-lab is the right move."
    };
  }

  if (/(what is|explain|understand|concept|mean|confused)/.test(normalized)) {
    return {
      skill: "concept-tutor",
      command: "/companion:concept",
      reason: "You are asking for conceptual clarity, so the Companion should teach one concept at a time."
    };
  }

  if (/(path|roadmap|curriculum|sequence|learn next)/.test(normalized)) {
    return {
      skill: "learning-path-designer",
      command: "/companion:path",
      reason: "You are asking for sequencing, so the Companion should design a learning path."
    };
  }

  return {
    skill: "socratic-coach",
    command: "/companion:scenario",
    reason: "Your input is open-ended, so the Companion should ask a sharp first question before teaching."
  };
}

function contextSummary() {
  if (!canonicalContext) {
    return "Canonical context: use the repository brain, skill router, task extraction, cross-domain transfer, commands, skills, and learning-only boundary.";
  }

  const skills = canonicalContext.skills
    .map((skill) => skill.name)
    .sort()
    .join(", ");

  return `Canonical context loaded from docs/data/companion-context.json.
Available learning skills: ${skills}.
Router source: brain/skill-router.md.`;
}

function buildSetup() {
  if (!output) return;

  const platform = selectedPlatform();
  const situation = field("situation") || "I want to learn from real GRC work I already do, with synthetic labs when I need extra practice.";
  const route = inferRoute(situation);
  const steps = platform.steps.map((step, index) => `${index + 1}. ${step}`).join("\n");

  output.value = `Recommended path: ${platform.label}

Package path:
${platform.path}

What this gives you:
- A local learning companion that can use your actual GRC working experience as material.
- Retrospectives on real notes, files, diffs, terminal output, questionnaires, policies, controls, and review artefacts you intentionally provide.
- Synthetic labs, scenarios, and explain-backs when you need extra reps or cannot use real material.
- Ayoub Fandi's GRC Engineering lens, primitives, corpus, and cross-domain patterns layered onto your day-to-day work.

Setup:
${steps}

Suggested first route:
${route.command}

Why this route:
${route.reason}

System prompt:
You are The GRC Companion, a learning-only companion carrying Ayoub Fandi's GRC engineering thinking.

Important boundary:
- Teach me how to think and improve my judgment; do not take over operational decisions.
- You may use real local artefacts I intentionally provide inside this workspace as learning material: notes, drafts, files, diffs, terminal output, questionnaires, policy changes, or review outputs.
- Do not approve or reject vendors, prep or certify a live audit position, author production policy as final, run controls, or score programme maturity.
- Do not ship, sync, or ask me to paste sensitive artefacts into the public website. Keep learning from the local context available in this AI workspace.
- Use synthetic examples, fictional scenarios, or toy labs when real work is unavailable, too sensitive, or when I ask for extra practice.

What I am working on, trying to figure out, or learning from:
${situation}

Use the invisible skill router:
- Primary expected skill: ${route.skill}
- If I described completed work or referenced local outputs, run task-retrospective on the actual material available.
- If a cross-domain pattern would clarify the idea, use cross-domain-translator as a supporting move.
- If I need more reps, create a lab or scenario based on the pattern, not as a replacement for the real work.
- Ask one targeted question if you need more signal.
- End with a small learning-safe artefact, a profile/progress update if useful, and one explain-back or reflection prompt.

${contextSummary()}

Adapter command note:
${platform.command}`;
}

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    buildSetup();
  });

  form.addEventListener("input", () => {
    buildSetup();
  });
}

if (copyButton) {
  copyButton.addEventListener("click", async () => {
    if (!output.value) buildSetup();

    try {
      await navigator.clipboard.writeText(output.value);
      copyButton.textContent = "Copied";
    } catch {
      output.focus();
      output.select();
      copyButton.textContent = "Select output";
    }

    setTimeout(() => {
      copyButton.textContent = "Copy";
    }, 1400);
  });
}

buildSetup();
loadCanonicalContext();
