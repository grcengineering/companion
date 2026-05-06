let canonicalContext = null;

const form = document.querySelector("#setup-form");
const output = document.querySelector("#setup-output");
const copyButton = document.querySelector("#copy-setup");

const platforms = {
  "claude-code": {
    label: "Claude Code",
    path: "dist/adapters/claude-code/grc-companion/",
    steps: [
      "Use the generated Claude Code plugin bundle.",
      "Install or symlink the bundle according to your Claude Code plugin workflow.",
      "Start with the generated prompt or an explicit /grc-companion command."
    ],
    command: "/grc-companion:retro"
  },
  "claude-projects": {
    label: "Claude Projects",
    path: "dist/adapters/claude-projects/",
    steps: [
      "Create a new Claude Project.",
      "Upload companion-instructions.md plus the knowledge, profile, and demos folders as project knowledge.",
      "Start a new chat with the generated prompt."
    ],
    command: "Use the generated starter prompt in the Project chat."
  },
  cursor: {
    label: "Cursor",
    path: "dist/adapters/cursor/.cursor/rules/",
    steps: [
      "Copy the generated Cursor rules into your workspace's .cursor/rules directory.",
      "Open Cursor Composer in the workspace.",
      "Start with the generated prompt so the Companion can route the learning move."
    ],
    command: "Use the generated starter prompt in Cursor Composer."
  },
  codex: {
    label: "Codex",
    path: "dist/adapters/codex/",
    steps: [
      "Use the Codex adapter bundle as the companion context.",
      "Keep AGENTS.md, brain, skills, commands, knowledge, profile, and demos together.",
      "Start with the generated prompt inside a Codex session."
    ],
    command: "Use the generated starter prompt in Codex."
  },
  github: {
    label: "Just files",
    path: "brain/, skills/, commands/, profile/, knowledge/, demos/",
    steps: [
      "Open the GitHub repository.",
      "Read brain/persona.md, brain/skill-router.md, and the relevant skill file.",
      "Use the generated prompt in whichever AI workspace you already trust."
    ],
    command: "No adapter command. Use the canonical files directly."
  },
  "not-sure": {
    label: "Not sure",
    path: "dist/adapters/claude-projects/",
    steps: [
      "Start with Claude Projects if you want the lowest-friction non-terminal path.",
      "Use Claude Code, Cursor, or Codex if you want the Companion where you already build.",
      "Keep the generated prompt and avoid sensitive company, vendor, customer, or evidence details."
    ],
    command: "Use the generated starter prompt first."
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

  if (/(just|finished|completed|ran|did|spent|after|walkthrough|questionnaire|review)/.test(normalized)) {
    return {
      skill: "task-retrospective",
      command: "/grc-companion:retro",
      reason: "You described work that already happened, so the best first move is to extract learning from it."
    };
  }

  if (/(analogy|metaphor|translate|pattern|like|compare|frame|lens)/.test(normalized)) {
    return {
      skill: "cross-domain-translator",
      command: "/grc-companion:translate",
      reason: "You are asking for a frame shift, so a cross-domain pattern can clarify the GRC move."
    };
  }

  if (/(build|make|create|lab|template|artefact|artifact|practice)/.test(normalized)) {
    return {
      skill: "lab-builder",
      command: "/grc-companion:lab",
      reason: "You are asking to practise by building, so a learning-safe mini-lab is the right move."
    };
  }

  if (/(what is|explain|understand|concept|mean|confused)/.test(normalized)) {
    return {
      skill: "concept-tutor",
      command: "/grc-companion:concept",
      reason: "You are asking for conceptual clarity, so the Companion should teach one concept at a time."
    };
  }

  if (/(path|roadmap|curriculum|sequence|learn next)/.test(normalized)) {
    return {
      skill: "learning-path-designer",
      command: "/grc-companion:path",
      reason: "You are asking for sequencing, so the Companion should design a learning path."
    };
  }

  return {
    skill: "socratic-coach",
    command: "/grc-companion:scenario",
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
  const situation = field("situation") || "I want to learn GRC engineering through a practical, learning-safe session.";
  const route = inferRoute(situation);
  const steps = platform.steps.map((step, index) => `${index + 1}. ${step}`).join("\n");

  output.value = `Recommended path: ${platform.label}

Package path:
${platform.path}

Setup:
${steps}

Suggested first route:
${route.command}

Why this route:
${route.reason}

Starter prompt:
You are The GRC Companion, a learning-only companion carrying Ayoub Fandi's GRC engineering thinking.

Important boundary:
- Teach me how to think; do not operate my GRC programme.
- Do not assess real vendors, prep live audits, author production policies, run controls, or score programme maturity.
- If I ask for operational work, convert it into a fictional or retrospective learning-safe rep.
- Do not ask me for company names, customer names, vendor names, secrets, real evidence, or live audit details.

What I am working on, trying to figure out, or learning from:
${situation}

Use the invisible skill router:
- Primary expected skill: ${route.skill}
- If I described completed work, run task-retrospective.
- If a cross-domain pattern would clarify the idea, use cross-domain-translator as a supporting move.
- Ask one targeted question if you need more signal.
- End with a small learning-safe artefact and one explain-back or reflection prompt.

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
