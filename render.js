/* ============================================================
   render.js — rendering engine. No need to edit this file.
   ============================================================ */

/* ── SVG illustrations (keyed by project id) ── */
const PROJECT_IMAGES = {

  radinfer: `
    <svg class="card-image" viewBox="0 0 760 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <rect width="760" height="200" fill="#0f2540"/>
      <line x1="0" y1="40" x2="760" y2="40" stroke="#1e3a5c" stroke-width="1"/>
      <line x1="0" y1="80" x2="760" y2="80" stroke="#1e3a5c" stroke-width="1"/>
      <line x1="0" y1="120" x2="760" y2="120" stroke="#1e3a5c" stroke-width="1"/>
      <line x1="0" y1="160" x2="760" y2="160" stroke="#1e3a5c" stroke-width="1"/>
      <line x1="152" y1="0" x2="152" y2="200" stroke="#1e3a5c" stroke-width="1"/>
      <line x1="304" y1="0" x2="304" y2="200" stroke="#1e3a5c" stroke-width="1"/>
      <line x1="456" y1="0" x2="456" y2="200" stroke="#1e3a5c" stroke-width="1"/>
      <line x1="608" y1="0" x2="608" y2="200" stroke="#1e3a5c" stroke-width="1"/>
      <circle cx="140" cy="50" r="10" fill="#1a3a5c" stroke="#4a8fd4" stroke-width="1.5"/>
      <circle cx="140" cy="100" r="10" fill="#1a3a5c" stroke="#4a8fd4" stroke-width="1.5"/>
      <circle cx="140" cy="150" r="10" fill="#1a3a5c" stroke="#4a8fd4" stroke-width="1.5"/>
      <circle cx="280" cy="40" r="10" fill="#1a3a5c" stroke="#4a8fd4" stroke-width="1.5"/>
      <circle cx="280" cy="80" r="10" fill="#1a3a5c" stroke="#4a8fd4" stroke-width="1.5"/>
      <circle cx="280" cy="120" r="10" fill="#1a3a5c" stroke="#4a8fd4" stroke-width="1.5"/>
      <circle cx="280" cy="160" r="10" fill="#1a3a5c" stroke="#4a8fd4" stroke-width="1.5"/>
      <circle cx="420" cy="60" r="10" fill="#2a5a8c" stroke="#6aafed" stroke-width="1.5"/>
      <circle cx="420" cy="100" r="10" fill="#2a5a8c" stroke="#6aafed" stroke-width="1.5"/>
      <circle cx="420" cy="140" r="10" fill="#2a5a8c" stroke="#6aafed" stroke-width="1.5"/>
      <circle cx="560" cy="90" r="14" fill="#1a3a5c" stroke="#8ad4ff" stroke-width="2"/>
      <circle cx="560" cy="130" r="14" fill="#1a3a5c" stroke="#8ad4ff" stroke-width="2"/>
      <line x1="150" y1="50" x2="270" y2="40" stroke="#2a4a6c" stroke-width="1"/>
      <line x1="150" y1="50" x2="270" y2="80" stroke="#2a4a6c" stroke-width="1"/>
      <line x1="150" y1="50" x2="270" y2="120" stroke="#2a4a6c" stroke-width="1"/>
      <line x1="150" y1="100" x2="270" y2="40" stroke="#2a4a6c" stroke-width="1"/>
      <line x1="150" y1="100" x2="270" y2="80" stroke="#2a4a6c" stroke-width="1"/>
      <line x1="150" y1="100" x2="270" y2="120" stroke="#2a4a6c" stroke-width="1"/>
      <line x1="150" y1="100" x2="270" y2="160" stroke="#2a4a6c" stroke-width="1"/>
      <line x1="150" y1="150" x2="270" y2="80" stroke="#2a4a6c" stroke-width="1"/>
      <line x1="150" y1="150" x2="270" y2="120" stroke="#2a4a6c" stroke-width="1"/>
      <line x1="150" y1="150" x2="270" y2="160" stroke="#2a4a6c" stroke-width="1"/>
      <line x1="290" y1="80" x2="410" y2="60" stroke="#3a6a9c" stroke-width="1.5"/>
      <line x1="290" y1="80" x2="410" y2="100" stroke="#3a6a9c" stroke-width="1.5"/>
      <line x1="290" y1="120" x2="410" y2="100" stroke="#3a6a9c" stroke-width="1.5"/>
      <line x1="290" y1="120" x2="410" y2="140" stroke="#3a6a9c" stroke-width="1.5"/>
      <line x1="290" y1="160" x2="410" y2="140" stroke="#3a6a9c" stroke-width="1.5"/>
      <line x1="430" y1="60" x2="546" y2="90" stroke="#5a9fd4" stroke-width="2"/>
      <line x1="430" y1="100" x2="546" y2="90" stroke="#5a9fd4" stroke-width="2"/>
      <line x1="430" y1="100" x2="546" y2="130" stroke="#5a9fd4" stroke-width="2"/>
      <line x1="430" y1="140" x2="546" y2="130" stroke="#5a9fd4" stroke-width="2"/>
      <rect x="620" y="20" width="110" height="160" rx="4" fill="none" stroke="#2a5a7c" stroke-width="1.5"/>
      <ellipse cx="675" cy="100" rx="40" ry="55" fill="none" stroke="#2a6a9c" stroke-width="1"/>
      <ellipse cx="675" cy="100" rx="28" ry="38" fill="none" stroke="#3a7aac" stroke-width="1"/>
      <ellipse cx="675" cy="100" rx="16" ry="22" fill="#1a4a7c" stroke="#4a8abd" stroke-width="1"/>
      <line x1="635" y1="70" x2="715" y2="70" stroke="#2a5a7c" stroke-width="0.75" stroke-dasharray="4,3"/>
      <line x1="635" y1="85" x2="715" y2="85" stroke="#2a5a7c" stroke-width="0.75" stroke-dasharray="4,3"/>
      <line x1="635" y1="100" x2="715" y2="100" stroke="#3a7aac" stroke-width="1"/>
      <line x1="635" y1="115" x2="715" y2="115" stroke="#2a5a7c" stroke-width="0.75" stroke-dasharray="4,3"/>
      <line x1="635" y1="130" x2="715" y2="130" stroke="#2a5a7c" stroke-width="0.75" stroke-dasharray="4,3"/>
      <text x="38" y="190" font-family="Georgia,serif" font-size="28" fill="#e8eef5" opacity="0.18" font-style="italic">RadInfer</text>
    </svg>`,

  deepcompete: `
    <svg class="card-image" viewBox="0 0 760 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <rect width="760" height="200" fill="#0f2030"/>
      <line x1="80" y1="20" x2="80" y2="175" stroke="#1e3040" stroke-width="1"/>
      <line x1="80" y1="175" x2="680" y2="175" stroke="#1e3040" stroke-width="1"/>
      <line x1="80" y1="55" x2="680" y2="55" stroke="#1a2a3a" stroke-width="0.75" stroke-dasharray="4,4"/>
      <line x1="80" y1="90" x2="680" y2="90" stroke="#1a2a3a" stroke-width="0.75" stroke-dasharray="4,4"/>
      <line x1="80" y1="125" x2="680" y2="125" stroke="#1a2a3a" stroke-width="0.75" stroke-dasharray="4,4"/>
      <line x1="80" y1="175" x2="80" y2="180" stroke="#3a5a7a" stroke-width="1"/>
      <line x1="200" y1="175" x2="200" y2="180" stroke="#3a5a7a" stroke-width="1"/>
      <line x1="320" y1="175" x2="320" y2="180" stroke="#3a5a7a" stroke-width="1"/>
      <line x1="440" y1="175" x2="440" y2="180" stroke="#3a5a7a" stroke-width="1"/>
      <line x1="560" y1="175" x2="560" y2="180" stroke="#3a5a7a" stroke-width="1"/>
      <line x1="680" y1="175" x2="680" y2="180" stroke="#3a5a7a" stroke-width="1"/>
      <polyline points="80,35 200,35 200,55 320,55 320,75 360,75 360,90 440,90 440,108 520,108 520,125 600,125 600,145 680,145"
        fill="none" stroke="#5a9fd4" stroke-width="2.5" stroke-linejoin="round"/>
      <polyline points="80,175 200,175 200,162 320,162 320,150 400,150 400,140 480,140 480,132 560,132 560,128 640,128 640,124 680,124"
        fill="none" stroke="#3abcaa" stroke-width="2.5" stroke-linejoin="round"/>
      <polyline points="80,175 240,175 240,168 360,168 360,160 440,160 440,155 520,155 520,150 600,150 600,148 660,148 660,147 680,147"
        fill="none" stroke="#e8955a" stroke-width="2" stroke-linejoin="round"/>
      <polygon points="80,30 200,30 200,40 80,40" fill="#5a9fd4" opacity="0.12"/>
      <polygon points="200,48 320,48 320,62 200,62" fill="#5a9fd4" opacity="0.12"/>
      <polygon points="320,68 440,68 440,98 320,98" fill="#5a9fd4" opacity="0.12"/>
      <line x1="260" y1="50" x2="260" y2="61" stroke="#5a9fd4" stroke-width="1.5"/>
      <line x1="380" y1="80" x2="380" y2="91" stroke="#5a9fd4" stroke-width="1.5"/>
      <line x1="500" y1="100" x2="500" y2="111" stroke="#5a9fd4" stroke-width="1.5"/>
      <line x1="620" y1="120" x2="620" y2="131" stroke="#5a9fd4" stroke-width="1.5"/>
      <rect x="500" y="25" width="170" height="70" rx="4" fill="#0a1a28" stroke="#1e3040" stroke-width="1"/>
      <line x1="512" y1="42" x2="535" y2="42" stroke="#5a9fd4" stroke-width="2.5"/>
      <text x="542" y="46" font-family="sans-serif" font-size="10" fill="#8ab4d4">Overall Survival</text>
      <line x1="512" y1="58" x2="535" y2="58" stroke="#3abcaa" stroke-width="2.5"/>
      <text x="542" y="62" font-family="sans-serif" font-size="10" fill="#8ab4d4">Competing Event 1</text>
      <line x1="512" y1="74" x2="535" y2="74" stroke="#e8955a" stroke-width="2"/>
      <text x="542" y="78" font-family="sans-serif" font-size="10" fill="#8ab4d4">Competing Event 2</text>
      <text x="370" y="196" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#4a7a9a">Time</text>
      <text x="55" y="105" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#4a7a9a" transform="rotate(-90 55 105)">Probability</text>
      <text x="38" y="190" font-family="Georgia,serif" font-size="24" fill="#e8eef5" opacity="0.12" font-style="italic">DeepCompete</text>
    </svg>`,
};

/* ── Icon SVGs ── */
const ICONS = {
  external: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
  github:   `<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>`,
  scholar:  `<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 10a8 8 0 0 1 7.162 3.44L24 9.5z"/></svg>`,
  linkedin: `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
  briefcase:`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>`,
  arrow:    `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>`,
};

/* ── Render: site header (index page) ── */
function renderHeader(mountId) {
  const el = document.getElementById(mountId);
  if (!el) return;
  el.innerHTML = `
    <header>
      <div class="header-left">
        <h1 class="name">${SITE.name}</h1>
        <p class="title-line">${SITE.title}</p>
        <p class="bio">${SITE.bio}</p>
      </div>
      <div class="header-btns">
        <a class="hdr-btn btn-linkedin" href="${SITE.links.linkedin}" target="_blank" rel="noopener">
          ${ICONS.linkedin} LinkedIn
        </a>
        <a class="hdr-btn btn-portfolio" href="${SITE.links.portfolio}">
          ${ICONS.briefcase} Portfolio
        </a>
        <a class="hdr-btn btn-scholar" href="${SITE.links.scholar}" target="_blank" rel="noopener">
          ${ICONS.scholar} Google Scholar
        </a>
      </div>
    </header>`;
}

/* ── Render: experience section ── */
function renderExperience(mountId) {
  const el = document.getElementById(mountId);
  if (!el) return;
  const items = SITE.experience.map(j => `
    <li class="exp-item${j.current ? ' current' : ''}">
      <div class="exp-top">
        <span class="exp-company">${j.company}</span>
        <span class="exp-dates">${j.dates}</span>
      </div>
      <div class="exp-role">${j.role}</div>
      <div class="exp-detail">
        ${j.detail}
        ${j.stack ? `<br><span class="stack">${j.stack}</span>` : ''}
      </div>
    </li>`).join('');
  el.innerHTML = `
    <section>
      <div class="section-header">
        <h2 class="section-title">Experience</h2>
        <div class="section-rule"></div>
      </div>
      <ul class="exp-list">${items}</ul>
    </section>`;
}

/* ── Render: education section ── */
function renderEducation(mountId) {
  const el = document.getElementById(mountId);
  if (!el) return;
  const items = SITE.education.map(e => `
    <li class="edu-item">
      <div class="edu-top">
        <span class="edu-school">${e.school}</span>
        <span class="edu-years">${e.years}</span>
      </div>
      <div class="edu-degree">${e.degree}</div>
      <div class="edu-note">${e.note}</div>
    </li>`).join('');
  el.innerHTML = `
    <section>
      <div class="section-header">
        <h2 class="section-title">Education</h2>
        <div class="section-rule"></div>
      </div>
      <ul class="edu-list">${items}</ul>
    </section>`;
}

/* ── Render: skills section ── */
function renderSkills(mountId) {
  const el = document.getElementById(mountId);
  if (!el) return;
  const rows = SITE.skills.map(s => `
    <div class="skill-row">
      <div class="skill-cat">${s.category}</div>
      <div class="skill-tags">${s.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
    </div>`).join('');
  el.innerHTML = `
    <section>
      <div class="section-header">
        <h2 class="section-title">Skills</h2>
        <div class="section-rule"></div>
      </div>
      <div class="skills-grid">${rows}</div>
    </section>`;
}

/* ── Render: research section ── */
function renderResearch(mountId) {
  const el = document.getElementById(mountId);
  if (!el) return;
  const r = SITE.research;
  el.innerHTML = `
    <section>
      <div class="section-header">
        <h2 class="section-title">Research</h2>
        <div class="section-rule"></div>
      </div>
      <div class="pub-block">
        <div class="pub-count">280+ citations &nbsp;·&nbsp; 6 publications</div>
        <div class="pub-detail">
          ${r.summary}
          &nbsp;<a href="${r.link}" target="_blank" rel="noopener">View all →</a>
        </div>
      </div>
    </section>`;
}

/* ── Render: project cards (portfolio page) ── */
function renderProjects(mountId) {
  const el = document.getElementById(mountId);
  if (!el) return;
  const cards = SITE.projects.map(p => {
    // Image: if p.id matches a built-in SVG, use it; otherwise treat as <img> URL
    const image = PROJECT_IMAGES[p.id]
      ? PROJECT_IMAGES[p.id]
      : `<img class="card-image" src="${p.id}" alt="${p.title}">`;

    const tags = (p.status ? `<span class="tag tag-accent">${p.status}</span>` : '')
      + p.tags.map(t => `<span class="tag">${t}</span>`).join('');

    const btns = p.links.map(l => `
      <a class="btn btn-${l.style}" href="${l.url}" target="_blank" rel="noopener">
        ${ICONS[l.icon] || ''} ${l.label}
      </a>`).join('');

    return `
      <div class="card">
        ${image}
        <div class="card-body">
          <div class="card-tags">${tags}</div>
          <h3 class="card-title">${p.title}</h3>
          <p class="card-desc">${p.description}</p>
          <div class="card-footer">
            ${btns}
            ${p.meta ? `<span class="card-meta">${p.meta}</span>` : ''}
          </div>
        </div>
      </div>`;
  }).join('');

  el.innerHTML = `
    <section>
      <div class="section-header">
        <h2 class="section-title">Projects</h2>
        <div class="section-rule"></div>
      </div>
      <div class="projects">${cards}</div>
    </section>`;
}
