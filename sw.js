/* =========================================
   BASE STYLES & VARIABLES — sarı/tünd-boz tema
========================================= */
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;600;700&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap');

:root {
    --yellow: #f5c518;
    --yellow-light: #fdd835;
    --yellow-dim: #c9a200;
    --dark: #1c1c1e;
    --dark-2: #2a2a2d;
    --dark-3: #3a3a3d;
    --mid: #555558;
    --light-text: #9a9a9e;
    --white: #ffffff;
    --bg: #ffffff;
    --border: #e0ddd6;
    --border-radius: 6px;
    --speed: 0.22s;
}

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
    font-family: 'Poppins', sans-serif;
    color: var(--dark);
    background: var(--bg);
    line-height: 1.6;
}

a { text-decoration: none; color: inherit; transition: color var(--speed); }
ul { list-style: none; }

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* =========================================
   1. HEADER
========================================= */
.site-header {
    background: var(--dark);
    position: sticky;
    top: 0;
    z-index: 200;
    border-bottom: 2px solid var(--dark-2);
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 56px;
}

/* Logo */
.logo {
    font-family: 'Oswald', sans-serif;
    font-size: 1.55rem;
    font-weight: 700;
    color: var(--yellow);
    letter-spacing: 0.5px;
    text-transform: lowercase;
}
.logo span { color: var(--white); font-weight: 300; }

.header-right {
    display: flex;
    align-items: center;
    gap: 4px;
}

/* Generic header icon button */
.hdr-icon-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    border-radius: 6px;
    background: transparent;
    border: none;
    cursor: pointer;
    transition: background var(--speed), color var(--speed);
    position: relative;
}

.hdr-icon-btn svg { stroke: var(--yellow); transition: stroke var(--speed); width: 20px; height: 20px; }
.hdr-icon-btn:hover { background: var(--dark-2); }
.hdr-icon-btn:hover svg { stroke: var(--yellow-light); }
.hdr-icon-btn.active { background: var(--dark-2); }
.hdr-icon-btn.active svg { stroke: var(--yellow-light); }

/* Search bar dropdown */
.search-bar-wrap {
    background: var(--dark-2);
    border-top: 1px solid var(--dark-3);
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease, padding 0.3s ease;
}
.search-bar-wrap.open {
    max-height: 400px;
    padding: 14px 0 0;
}

.search-bar-inner {
    display: flex;
    align-items: center;
    gap: 8px;
    padding-bottom: 14px;
}

.search-bar-inner input {
    flex: 1;
    background: var(--dark-3);
    border: 1px solid #444;
    color: #fff;
    font-family: 'Poppins', sans-serif;
    font-size: 0.95rem;
    padding: 10px 16px;
    border-radius: 6px;
    outline: none;
    transition: border-color var(--speed);
}
.search-bar-inner input::placeholder { color: #666; }
.search-bar-inner input:focus { border-color: var(--yellow); }

.search-bar-inner button {
    background: var(--dark-3);
    border: 1px solid #444;
    border-radius: 6px;
    padding: 10px 12px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background var(--speed);
}
.search-bar-inner button svg { stroke: #999; }
.search-bar-inner button:hover { background: var(--yellow); }
.search-bar-inner button:hover svg { stroke: var(--dark); }

#searchSubmitBtn { background: var(--yellow); border-color: var(--yellow); }
#searchSubmitBtn svg { stroke: var(--dark); }
#searchSubmitBtn:hover { background: var(--yellow-light); }

/* Search results */
.search-results {
    max-height: 320px;
    overflow-y: auto;
    padding-bottom: 12px;
}

.search-result-item {
    display: flex;
    gap: 12px;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid var(--dark-3);
    cursor: pointer;
    transition: background var(--speed);
    border-radius: 4px;
}
.search-result-item:hover { padding-left: 6px; }
.search-result-item:last-child { border-bottom: none; }

.search-result-img {
    width: 60px; height: 60px;
    border-radius: 4px;
    overflow: hidden;
    flex-shrink: 0;
    background: var(--dark-3);
}
.search-result-img img { width: 100%; height: 100%; object-fit: cover; }

.search-result-text h4 {
    font-family: 'Poppins', sans-serif;
    font-size: 0.85rem;
    font-weight: 500;
    color: #e0e0e0;
    line-height: 1.35;
    margin-bottom: 3px;
}
.search-result-text small { color: #666; font-size: 0.72rem; }

.search-no-result, .search-loading {
    color: #666;
    font-size: 0.85rem;
    font-family: 'Poppins', sans-serif;
    padding: 16px 0;
    text-align: center;
}

/* =========================================
   SIDE PANELS (shared base)
========================================= */
.side-overlay {
    position: fixed;
    inset: 0;
    background: rgba(10,10,12,0.72);
    z-index: 1000;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
    backdrop-filter: blur(3px);
}
.side-overlay.open { opacity: 1; pointer-events: all; }

.side-panel {
    width: 100%;
    max-width: 480px;
    height: 100vh;
    background: var(--dark);
    overflow-y: auto;
    transform: translateX(100%);
    transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    flex-direction: column;
}
.side-overlay.open .side-panel { transform: translateX(0); }

.side-panel-header {
    background: var(--dark-2);
    padding: 16px 22px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--dark-3);
    flex-shrink: 0;
    gap: 12px;
}

.side-panel-logo {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: 'Oswald', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    color: var(--yellow);
    letter-spacing: 0.5px;
    flex: 1;
}
.side-panel-logo svg { stroke: var(--yellow); flex-shrink: 0; }

.side-panel-close {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 4px;
    opacity: 0.45;
    transition: opacity var(--speed);
    display: flex;
    align-items: center;
}
.side-panel-close svg { stroke: #fff; }
.side-panel-close:hover { opacity: 1; }

.side-panel-body {
    flex: 1;
    padding: 0 0 24px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
}

/* Date block inside coffee panel */
.panel-date-block {
    display: flex;
    align-items: baseline;
    gap: 6px;
}
.panel-day-num {
    font-family: 'Oswald', sans-serif;
    font-size: 2.4rem;
    font-weight: 700;
    color: var(--white);
    line-height: 1;
}
.panel-month-year {
    font-family: 'Oswald', sans-serif;
    font-size: 0.82rem;
    color: var(--light-text);
    display: flex;
    flex-direction: column;
    line-height: 1.25;
}
.panel-month-year em { font-style: italic; letter-spacing: 1px; }

/* Loading spinner */
.panel-loading {
    display: flex; flex-direction: column; align-items: center;
    gap: 12px; padding: 50px 0; color: rgba(255,255,255,0.4); font-size: 0.85rem;
    font-family: 'Poppins', sans-serif;
}
.panel-spinner {
    width: 28px; height: 28px;
    border: 2px solid rgba(255,255,255,0.1);
    border-top-color: var(--yellow);
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }

/* =========================================
   COFFEE PANEL — full screen, Ontrava style
========================================= */

/* Overlay: full screen, no flex-end, centered */
#coffeeOverlay {
    justify-content: stretch;
    align-items: stretch;
    background: transparent;
    backdrop-filter: none;
}

/* Panel: full viewport, no slide, fade in */
#coffeePanel {
    max-width: 100%;
    width: 100%;
    height: 100vh;
    position: relative;
    background: #1a1a1c;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transform: none;
    opacity: 0;
    transition: opacity 0.35s ease;
}

#coffeeOverlay.open #coffeePanel {
    opacity: 1;
    transform: none;
}

/* Full-bleed background image */
.coffee-bg-img {
    position: absolute;
    inset: 0;
    z-index: 0;
    overflow: hidden;
}

.coffee-bg-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
    filter: brightness(0.2) saturate(0.4);
}

/* Dark overlay on top of image */
.coffee-bg-img::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(12,12,15,0.55);
    z-index: 1;
}

/* All OTHER panel content above bg */
#coffeePanel .side-panel-header,
#coffeePanel .side-panel-body {
    position: relative;
    z-index: 2;
}

/* ── HEADER row: logo left, close right ── */
#coffeePanel .side-panel-header {
    background: transparent;
    border-bottom: none;
    padding: 28px 52px 0;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-shrink: 0;
}

/* Logo block: icon + site name stacked */
#coffeePanel .side-panel-logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
}

/* Site name style inside coffee panel */
#coffeePanel .cp-logo-box {
    display: flex;
    flex-direction: column;
    line-height: 1.15;
}
#coffeePanel .cp-logo-icon {
    width: 52px; height: 52px;
    background: var(--yellow);
    border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
}
#coffeePanel .cp-logo-icon svg { stroke: var(--dark); }

#coffeePanel .cp-site-name {
    font-family: 'Oswald', sans-serif;
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--yellow);
    letter-spacing: 0.5px;
    line-height: 1;
}
#coffeePanel .cp-site-name span { color: #fff; font-weight: 300; }

#coffeePanel .cp-panel-label {
    font-family: 'Poppins', sans-serif;
    font-size: 0.72rem;
    font-weight: 400;
    color: rgba(255,255,255,0.4);
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-top: 3px;
}

/* Date block top-right corner of header */
#coffeePanel .panel-date-block {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    margin-right: 40px; /* leave room for close btn */
}
#coffeePanel .panel-day-num {
    font-family: 'Oswald', sans-serif;
    font-size: 5rem;
    font-weight: 700;
    color: #fff;
    line-height: 0.9;
}
#coffeePanel .panel-month-year {
    font-family: 'Oswald', sans-serif;
    font-size: 0.9rem;
    color: rgba(255,255,255,0.5);
    display: flex;
    flex-direction: column;
    line-height: 1.3;
    padding-top: 8px;
    letter-spacing: 1px;
}
#coffeePanel .panel-month-year em {
    font-style: italic;
    font-size: 1.05rem;
    color: rgba(255,255,255,0.65);
}

/* Close button */
#coffeePanel .side-panel-close {
    position: absolute;
    top: 28px;
    right: 28px;
    z-index: 10;
    width: 36px; height: 36px;
    border-radius: 50%;
    border: 1px solid rgba(255,255,255,0.15);
    display: flex; align-items: center; justify-content: center;
    background: rgba(255,255,255,0.06);
    opacity: 1;
    transition: background var(--speed);
}
#coffeePanel .side-panel-close:hover { background: rgba(255,255,255,0.14); }
#coffeePanel .side-panel-close svg { stroke: rgba(255,255,255,0.7); }

/* ── BODY: news list ── */
#coffeePanel .side-panel-body {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    overflow: hidden;
}

/* News list container */
.coffee-news-list {
    width: 100%;
    max-width: 820px;
    padding: 20px 40px 20px 40px;
    display: flex;
    flex-direction: column;
    gap: 0;
    margin: 0 auto;
}

/* Single news item — no link, just a div */
.coffee-item {
    display: flex;
    gap: 0;
    padding: 22px 0;
    border-bottom: 1px solid rgba(255,255,255,0.08);
    align-items: flex-start;
    cursor: default;
    text-decoration: none;
    color: inherit;
}
.coffee-item:last-child { border-bottom: none; }

/* Dot + vertical line */
.coffee-item-line {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 24px;
    padding-top: 9px;
    flex-shrink: 0;
    width: 14px;
}
.coffee-dot {
    width: 12px; height: 12px;
    border-radius: 50%;
    background: var(--yellow);
    flex-shrink: 0;
    box-shadow: 0 0 8px rgba(245,197,24,0.6);
}
.coffee-vline {
    width: 1px;
    flex: 1;
    background: rgba(255,255,255,0.12);
    margin-top: 7px;
    min-height: 28px;
}
.coffee-item:last-child .coffee-vline { display: none; }

/* Text */
.coffee-item-text {
    font-family: 'Poppins', sans-serif;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.55;
    color: rgba(255,255,255,0.72);
}
.coffee-item-text strong {
    color: #ffffff;
    font-weight: 700;
}

/* hashtag footer */
.coffee-footer-tag {
    padding: 14px 40px 0;
    font-family: 'Poppins', sans-serif;
    font-size: 0.75rem;
    color: rgba(255,255,255,0.18);
    letter-spacing: 1px;
    text-align: center;
    width: 100%;
}

/* =========================================
   STATS PANEL
========================================= */
.stats-body { padding: 0 22px 24px; }

.stats-subtitle {
    font-family: 'Poppins', sans-serif;
    font-size: 0.75rem;
    color: var(--light-text);
    letter-spacing: 0.5px;
    padding: 14px 0 10px;
    border-bottom: 1px solid var(--dark-3);
    margin-bottom: 16px;
}

.stat-card {
    margin-bottom: 18px;
    padding-bottom: 18px;
    border-bottom: 1px solid var(--dark-3);
}
.stat-card:last-child { border-bottom: none; }

.stat-num {
    font-family: 'Oswald', sans-serif;
    font-size: 2rem;
    font-weight: 700;
    color: var(--yellow);
    line-height: 1;
    margin-bottom: 4px;
}

.stat-label {
    font-family: 'Poppins', sans-serif;
    font-size: 0.8rem;
    color: rgba(255,255,255,0.65);
    line-height: 1.5;
    margin-bottom: 10px;
}

.stat-bar {
    height: 4px;
    background: var(--dark-3);
    border-radius: 2px;
    overflow: hidden;
}

.stat-bar-fill {
    height: 100%;
    background: linear-gradient(90deg, var(--yellow-dim), var(--yellow));
    border-radius: 2px;
    transition: width 1s ease;
}

/* =========================================
   AI TOOLS PANEL
========================================= */
.tools-grid {
    padding: 10px 22px 24px;
    display: flex;
    flex-direction: column;
    gap: 0;
}

.tool-card {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 13px 0;
    border-bottom: 1px solid var(--dark-3);
    cursor: pointer;
    transition: background var(--speed);
    text-decoration: none;
    border-radius: 4px;
}
.tool-card:last-child { border-bottom: none; }
.tool-card:hover { padding-left: 6px; }

.tool-icon {
    width: 42px; height: 42px;
    border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
    color: #fff;
}

.tool-info { flex: 1; }
.tool-name {
    font-family: 'Poppins', sans-serif;
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--white);
    margin-bottom: 2px;
}
.tool-cat {
    font-family: 'Poppins', sans-serif;
    font-size: 0.72rem;
    color: var(--light-text);
}

.tool-badge {
    font-family: 'Oswald', sans-serif;
    font-size: 0.72rem;
    font-weight: 700;
    color: var(--yellow);
    letter-spacing: 0.3px;
    flex-shrink: 0;
}

/* stats panel body uses padding from tools-grid for stats */
.stats-body .stats-subtitle { padding-left: 0; }

/* =========================================
   3. HERO SECTION — full viewport
========================================= */
.hero-section {
    width: 100%;
    margin: 0;
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 0;
    height: calc(100vh - 56px);
    min-height: 440px;
    max-height: 680px;
}

.hero-card {
    position: relative;
    overflow: hidden;
    display: block;
    background: var(--dark-2);
}

.hero-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.5s ease;
    filter: brightness(0.68);
}

.hero-card:hover img {
    transform: scale(1.04);
    filter: brightness(0.78);
}

.hero-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 70px 26px 26px;
    background: linear-gradient(to top, rgba(0,0,0,0.94) 0%, rgba(0,0,0,0.5) 55%, transparent 100%);
    color: #fff;
    pointer-events: none;
}

.read-time {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    background: var(--yellow);
    color: var(--dark);
    font-family: 'Oswald', sans-serif;
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.6px;
    text-transform: uppercase;
    padding: 3px 8px;
    border-radius: 3px;
    margin-bottom: 10px;
}

.hero-card.featured .hero-overlay h2 {
    font-family: 'Oswald', sans-serif;
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: 10px;
    text-shadow: 0 2px 8px rgba(0,0,0,0.4);
}

.hero-card.featured .hero-overlay p {
    font-size: 0.88rem;
    color: rgba(255,255,255,0.75);
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.hero-right {
    display: grid;
    grid-template-rows: 1fr 1fr;
    gap: 0;
}

.hero-right .hero-card {
    border-left: 3px solid #e8e8e8;
    border-bottom: 3px solid #e8e8e8;
}
.hero-right .hero-card:last-child { border-bottom: none; }

.hero-right .hero-overlay { padding: 40px 16px 16px; }

.hero-right .hero-overlay h2 {
    font-family: 'Oswald', sans-serif;
    font-size: 1.1rem;
    font-weight: 600;
    line-height: 1.25;
}

/* =========================================
   4. MAIN CONTENT
========================================= */
.main-layout {
    display: grid;
    grid-template-columns: 2.5fr 1fr;
    gap: 40px;
    margin: 36px 0 50px;
}

.section-title {
    font-family: 'Oswald', sans-serif;
    font-size: 1.1rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 3px solid var(--yellow);
    display: inline-block;
    color: var(--dark);
}

.news-list { display: flex; flex-direction: column; gap: 0; }

.news-item {
    display: flex;
    gap: 20px;
    align-items: flex-start;
    padding: 22px 0;
    border-bottom: 1px solid var(--border);
}
.news-item:first-child { padding-top: 0; }
.news-item:last-child { border-bottom: none; }

.news-item-img {
    width: 250px;
    height: 165px;
    border-radius: var(--border-radius);
    overflow: hidden;
    flex-shrink: 0;
}

.news-item-img img {
    width: 100%; height: 100%;
    object-fit: cover;
    transition: transform var(--speed);
}
.news-item:hover .news-item-img img { transform: scale(1.06); }

.news-content { display: flex; flex-direction: column; gap: 8px; }

.badge {
    background: var(--yellow);
    color: var(--dark);
    font-family: 'Oswald', sans-serif;
    font-size: 0.68rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    padding: 3px 8px;
    border-radius: 3px;
    align-self: flex-start;
}

.news-content h3 {
    font-family: 'Oswald', sans-serif;
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 1.25;
    transition: color var(--speed);
}
.news-item:hover .news-content h3 { color: var(--yellow-dim); }

.news-content p {
    color: var(--mid);
    font-size: 0.88rem;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.news-date-badge {
    display: inline-block;
    background: var(--yellow);
    color: var(--dark);
    font-family: 'Poppins', sans-serif;
    font-size: 0.72rem;
    font-weight: 600;
    padding: 2px 9px;
    border-radius: 3px;
    letter-spacing: 0.2px;
    align-self: flex-start;
    white-space: nowrap;
}

/* SIDEBAR */
.sidebar-list { display: flex; flex-direction: column; gap: 0; }

.sidebar-item {
    display: flex;
    gap: 12px;
    align-items: flex-start;
    padding: 14px 0;
    border-bottom: 1px solid var(--border);
}
.sidebar-item:first-child { padding-top: 0; }
.sidebar-item:last-child { border-bottom: none; }

.sidebar-item-img {
    width: 78px; height: 78px;
    border-radius: 4px;
    overflow: hidden;
    flex-shrink: 0;
}
.sidebar-item-img img {
    width: 100%; height: 100%;
    object-fit: cover;
    transition: transform var(--speed);
}
.sidebar-item:hover .sidebar-item-img img { transform: scale(1.08); }

.sidebar-item h4 {
    font-family: 'Oswald', sans-serif;
    font-size: 0.92rem;
    font-weight: 600;
    line-height: 1.3;
    transition: color var(--speed);
}
.sidebar-item:hover h4 { color: var(--yellow-dim); }

/* =========================================
   5. LOAD MORE
========================================= */
.load-more-section { text-align: center; margin: 20px 0 60px; }

.btn-load-more {
    background: transparent;
    color: var(--dark);
    border: 2px solid var(--border);
    padding: 10px 32px;
    font-family: 'Oswald', sans-serif;
    font-size: 0.88rem;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    border-radius: 3px;
    cursor: pointer;
    transition: all var(--speed);
}
.btn-load-more:hover {
    background: var(--yellow);
    border-color: var(--yellow);
    color: var(--dark);
}

/* =========================================
   6. FOOTER
========================================= */
.site-footer {
    background: var(--dark);
    color: #777;
    padding: 50px 0 28px;
    border-top: 3px solid var(--yellow);
    text-align: center;
}

.footer-logo {
    font-family: 'Oswald', sans-serif;
    font-size: 1.7rem;
    font-weight: 700;
    color: var(--yellow);
    display: inline-block;
    margin-bottom: 22px;
}
.footer-logo span { color: var(--white); font-weight: 300; }

.social-icons { display: flex; justify-content: center; gap: 10px; margin-bottom: 26px; }

.social-icons a {
    display: flex; align-items: center; justify-content: center;
    width: 36px; height: 36px;
    border: 1px solid #333;
    border-radius: 50%;
    transition: all var(--speed);
    color: #888;
}
.social-icons a:hover { background: var(--yellow); border-color: var(--yellow); color: var(--dark); }

.footer-nav ul {
    display: flex; justify-content: center; flex-wrap: wrap;
    gap: 6px 22px; margin-bottom: 26px; font-size: 0.84rem;
}
.footer-nav ul li a:hover { color: var(--yellow); }

.copyright { color: #444; font-size: 0.78rem; }

/* =========================================
   SINGLE POST — full screen hero design
========================================= */

/* Hero block */
.sp-hero {
    position: relative;
    width: 100%;
    height: calc(100vh - 56px);
    min-height: 480px;
    max-height: 700px;
    background: var(--dark) center/cover no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}

.sp-hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
        to bottom,
        rgba(0,0,0,0.12) 0%,
        rgba(0,0,0,0.18) 35%,
        rgba(0,0,0,0.72) 65%,
        rgba(0,0,0,0.95) 100%
    );
}

.sp-hero-content {
    position: relative;
    z-index: 2;
    padding: 0 0 32px;
}

.sp-hero-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 32px;
}

.sp-meta-top {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 14px;
}

.sp-cat-badge {
    background: var(--yellow);
    color: var(--dark);
    font-family: 'Poppins', sans-serif;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.5px;
    padding: 4px 10px;
    border-radius: 3px;
}

/* Hide read time and author completely */
.sp-read-time { display: none !important; }
.sp-author { display: none !important; }

.sp-title {
    font-family: 'Oswald', sans-serif;
    font-size: 2.6rem;
    font-weight: 700;
    color: #fff;
    line-height: 1.15;
    max-width: 860px;
    margin-bottom: 18px;
    text-shadow: 0 2px 12px rgba(0,0,0,0.4);
}

.sp-byline {
    display: flex;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
}

.sp-author, .sp-date {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-family: 'Poppins', sans-serif;
    font-size: 0.78rem;
    font-weight: 400;
    letter-spacing: 0.5px;
    color: rgba(255,255,255,0.75);
}

.sp-author svg, .sp-date svg { stroke: var(--yellow); flex-shrink: 0; }

/* Bottom red/yellow bar */
.sp-hero-bar {
    height: 4px;
    background: var(--yellow);
    position: relative;
    z-index: 2;
    flex-shrink: 0;
}

/* Breadcrumb */
.sp-breadcrumb-wrap { display: none; /* hidden */ }
.sp-breadcrumb-wrap-DISABLED {
    background: #fff;
    border-bottom: 1px solid var(--border);
}

.sp-breadcrumb {
    max-width: 1200px;
    margin: 0 auto;
    padding: 12px 32px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.82rem;
    color: var(--mid);
    flex-wrap: wrap;
}

.sp-breadcrumb a {
    color: var(--mid);
    transition: color var(--speed);
}
.sp-breadcrumb a:hover { color: var(--yellow-dim); }
.sp-breadcrumb span { color: #bbb; }
.sp-bc-current { color: var(--dark); font-weight: 600; }

/* Layout */
.sp-layout {
    display: grid;
    grid-template-columns: 1fr 300px;
    gap: 48px;
    max-width: 1200px;
    margin: 40px auto 80px;
    padding: 0 32px;
    align-items: flex-start;
}

/* Article body */
.sp-body-wrap {}

.sp-body {
    font-size: 1.08rem;
    line-height: 1.9;
    color: #2a2a2a;
}
.sp-body p { margin-bottom: 1.5em; }
.sp-body h2 {
    font-family: 'Oswald', sans-serif;
    font-size: 1.55rem;
    font-weight: 700;
    margin: 2.2em 0 0.7em;
    color: var(--dark);
    border-left: 4px solid var(--yellow);
    padding-left: 14px;
}
.sp-body h3 {
    font-family: 'Oswald', sans-serif;
    font-size: 1.2rem;
    margin: 1.8em 0 0.5em;
    color: var(--dark);
}
.sp-body img { width: 100%; border-radius: var(--border-radius); margin: 1.8em 0; }
.sp-body a { color: var(--yellow-dim); text-decoration: underline; }
.sp-body blockquote {
    border-left: 4px solid var(--yellow);
    margin: 2em 0;
    padding: 14px 20px;
    background: #faf8f2;
    font-style: italic;
    color: var(--mid);
    border-radius: 0 6px 6px 0;
}

.sp-back-btn {
    display: inline-block;
    margin-top: 40px;
    background: transparent;
    color: var(--dark);
    border: 2px solid var(--border);
    padding: 10px 28px;
    font-family: 'Oswald', sans-serif;
    font-size: 0.88rem;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    border-radius: 3px;
    cursor: pointer;
    transition: all var(--speed);
}
.sp-back-btn:hover {
    background: var(--yellow);
    border-color: var(--yellow);
    color: var(--dark);
}

/* Sidebar */
.sp-sidebar {
    position: sticky;
    top: 72px;
}

.sp-sidebar-title {
    font-family: 'Oswald', sans-serif;
    font-size: 0.88rem;
    font-weight: 700;
    letter-spacing: 1.2px;
    color: var(--dark);
    padding-bottom: 10px;
    border-bottom: 3px solid var(--yellow);
    margin-bottom: 18px;
    display: block;
}

.sp-sidebar-list { display: flex; flex-direction: column; gap: 0; }

.sp-sidebar-item {
    display: flex;
    gap: 12px;
    align-items: flex-start;
    padding: 13px 0;
    border-bottom: 1px solid var(--border);
    transition: background var(--speed);
}
.sp-sidebar-item:last-child { border-bottom: none; }

.sp-sidebar-img {
    width: 74px;
    height: 74px;
    border-radius: 4px;
    overflow: hidden;
    flex-shrink: 0;
    background: var(--dark-3);
}
.sp-sidebar-img img {
    width: 100%; height: 100%;
    object-fit: cover;
    transition: transform var(--speed);
}
.sp-sidebar-item:hover .sp-sidebar-img img { transform: scale(1.08); }

.sp-sidebar-text { display: flex; flex-direction: column; gap: 4px; }
.sp-sidebar-text h4 {
    font-family: 'Oswald', sans-serif;
    font-size: 0.9rem;
    font-weight: 600;
    line-height: 1.3;
    transition: color var(--speed);
}
.sp-sidebar-item:hover .sp-sidebar-text h4 { color: var(--yellow-dim); }
.sp-sidebar-text small { color: var(--light-text); font-size: 0.75rem; }

/* Single post responsive */
@media (max-width: 900px) {
    .sp-layout {
        grid-template-columns: 1fr;
        gap: 40px;
        padding: 0 20px;
    }
    .sp-sidebar { position: static; }
    .sp-title { font-size: 1.9rem; }
}

@media (max-width: 600px) {
    .sp-hero-inner { padding: 0 20px; }
    .sp-title { font-size: 1.5rem; }
    .sp-breadcrumb { padding: 10px 20px; }
}

/* =========================================
   RESPONSIVE
========================================= */
@media (max-width: 992px) {
    .hero-section { grid-template-columns: 1fr; height: auto; max-height: none; }
    .hero-card.featured { height: 55vw; min-height: 300px; }
    .hero-right { grid-template-columns: 1fr 1fr; grid-template-rows: 200px; height: 200px; }
    .hero-right .hero-card { border-left: none; border-top: 3px solid #e8e8e8; }
    .main-layout { grid-template-columns: 1fr; }
    .news-item-img { width: 200px; height: 140px; }
}

@media (max-width: 768px) {
    .hero-card.featured { height: 68vw; }
    .hero-card.featured .hero-overlay h2 { font-size: 1.4rem; }
    .hero-right { height: 170px; }
    .hero-right .hero-overlay h2 { font-size: 0.88rem; }
    .news-item { flex-direction: column; gap: 12px; }
    .news-item-img { width: 100%; height: 200px; }

    /* ── Coffee panel mobile ── */
    #coffeePanel .side-panel-header {
        padding: 16px 16px 0;
        flex-wrap: nowrap;
        gap: 8px;
    }

    #coffeePanel .cp-logo-icon {
        width: 38px; height: 38px;
        border-radius: 8px;
    }
    #coffeePanel .cp-logo-icon svg { width: 20px; height: 20px; }

    #coffeePanel .cp-site-name { font-size: 1rem; }
    #coffeePanel .cp-panel-label { font-size: 0.6rem; letter-spacing: 1px; }

    #coffeePanel .panel-date-block {
        margin-right: 36px;
        gap: 6px;
    }
    #coffeePanel .panel-day-num { font-size: 3rem; }
    #coffeePanel .panel-month-year { font-size: 0.75rem; padding-top: 5px; }
    #coffeePanel .panel-month-year em { font-size: 0.85rem; }

    #coffeePanel .side-panel-close {
        top: 16px; right: 12px;
        width: 30px; height: 30px;
    }

    #coffeePanel .side-panel-body {
        justify-content: flex-start;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
    }

    .coffee-news-list {
        padding: 12px 16px 24px 16px;
        max-width: 100%;
    }

    .coffee-item { padding: 16px 0; }

    .coffee-item-line {
        margin-right: 14px;
        padding-top: 5px;
    }
    .coffee-dot { width: 9px; height: 9px; }

    .coffee-item-text {
        font-size: 0.95rem;
        line-height: 1.5;
    }

    .coffee-footer-tag {
        padding: 10px 16px 16px;
        font-size: 0.7rem;
    }
}

@media (max-width: 480px) {
    .hero-right { grid-template-columns: 1fr; grid-template-rows: 150px 150px; height: 300px; }
}

/* ══════════════════════════════════════
   READ PROGRESS BAR
══════════════════════════════════════ */
.read-progress-bar {
    position: fixed;
    top: 0; left: 0;
    height: 3px;
    width: 0%;
    background: var(--yellow);
    z-index: 9999;
    transition: width 0.1s linear;
    box-shadow: 0 0 8px rgba(245,197,24,0.6);
}

/* ══════════════════════════════════════
   DARK / LIGHT MODE
══════════════════════════════════════ */
:root {
    --bg: #ffffff;
    --bg2: #f5f5f7;
    --text: #1c1c1e;
    --text2: #555;
    --border: #e5e5e5;
    --card-bg: #ffffff;
    --header-bg: #1c1c1e;
    --footer-bg: #111;
}
[data-theme="dark"] {
    --bg: #0f0f12;
    --bg2: #1c1c1e;
    --text: #f0f0f0;
    --text2: #aaa;
    --border: #2a2a2d;
    --card-bg: #1c1c1e;
    --header-bg: #111113;
    --footer-bg: #0a0a0c;
}

body                    { background: var(--bg); color: var(--text); transition: background 0.3s, color 0.3s; }
.site-header            { background: var(--header-bg); }
.news-item              { background: var(--card-bg); border-color: var(--border); }
.news-content h3        { color: var(--text); }
.news-content p         { color: var(--text2); }
.sidebar-item h4        { color: var(--text); }
.site-footer            { background: var(--footer-bg); }
.search-bar-wrap        { background: var(--header-bg); border-color: var(--border); }
.search-bar-inner input { background: var(--bg2); color: var(--text); border-color: var(--border); }
.search-result-item     { border-color: var(--border); }
.search-result-item h4  { color: var(--text); }

/* ══════════════════════════════════════
   SHARE SYSTEM
══════════════════════════════════════ */
/* Share button on news items */
.news-item-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 8px;
    flex-wrap: wrap;
    gap: 8px;
}

.news-share-btn {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    background: transparent;
    border: 1px solid var(--border);
    color: var(--text2);
    font-family: 'Poppins', sans-serif;
    font-size: 0.72rem;
    padding: 4px 10px;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.2s;
}
.news-share-btn:hover {
    border-color: var(--yellow);
    color: var(--yellow);
}
.news-share-btn svg { flex-shrink: 0; }

/* Share popup menu */
.share-popup {
    position: fixed;
    bottom: 80px;
    left: 50%;
    transform: translateX(-50%);
    background: #1c1c1e;
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 14px;
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    z-index: 9998;
    min-width: 180px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.4);
    animation: popupIn 0.2s ease;
}
@keyframes popupIn { from { opacity:0; transform:translateX(-50%) translateY(10px); } to { opacity:1; transform:translateX(-50%) translateY(0); } }

.share-opt {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 14px;
    border-radius: 9px;
    font-family: 'Poppins', sans-serif;
    font-size: 0.88rem;
    font-weight: 500;
    text-decoration: none;
    border: none;
    cursor: pointer;
    transition: background 0.15s;
    background: transparent;
    color: #fff;
    width: 100%;
    text-align: left;
}
.share-opt:hover  { background: rgba(255,255,255,0.08); }
.share-wa         { color: #25D366; }
.share-tw         { color: #1DA1F2; }
.share-copy       { color: rgba(255,255,255,0.75); }

/* Share toast */
.share-toast {
    position: fixed;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%) translateY(20px);
    background: #1c1c1e;
    color: #fff;
    padding: 10px 20px;
    border-radius: 30px;
    font-family: 'Poppins', sans-serif;
    font-size: 0.85rem;
    border: 1px solid rgba(255,255,255,0.12);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.25s, transform 0.25s;
    z-index: 9999;
    white-space: nowrap;
}
.share-toast.visible { opacity: 1; transform: translateX(-50%) translateY(0); }

/* Post page share buttons */
.sp-share-btn {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    margin-top: 16px;
    padding: 8px 18px;
    border-radius: 24px;
    border: 1.5px solid rgba(255,255,255,0.35);
    background: rgba(255,255,255,0.1);
    color: #fff;
    font-family: 'Poppins', sans-serif;
    font-size: 0.82rem;
    cursor: pointer;
    backdrop-filter: blur(4px);
    transition: background 0.2s;
}
.sp-share-btn:hover { background: rgba(255,255,255,0.2); }

.sp-bottom-share {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
    margin: 32px 0 16px;
    padding: 20px;
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
}
.sp-bottom-share > span {
    font-family: 'Poppins', sans-serif;
    font-size: 0.82rem;
    color: var(--text2);
    margin-right: 4px;
}
.sp-share-wa, .sp-share-tw, .sp-share-copy {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 7px 14px;
    border-radius: 20px;
    font-family: 'Poppins', sans-serif;
    font-size: 0.8rem;
    font-weight: 500;
    text-decoration: none;
    border: 1px solid;
    cursor: pointer;
    transition: opacity 0.2s;
}
.sp-share-wa    { color: #25D366; border-color: #25D366; background: transparent; }
.sp-share-tw    { color: #1DA1F2; border-color: #1DA1F2; background: transparent; }
.sp-share-copy  { color: var(--text2); border-color: var(--border); background: transparent; }
.sp-share-wa:hover, .sp-share-tw:hover, .sp-share-copy:hover { opacity: 0.75; }

/* ══════════════════════════════════════
   NEWSLETTER
══════════════════════════════════════ */
.newsletter-section {
    background: var(--dark);
    padding: 60px 0;
    margin-top: 40px;
}
[data-theme="dark"] .newsletter-section { background: #111113; }

.newsletter-inner {
    display: flex;
    align-items: center;
    gap: 40px;
    flex-wrap: wrap;
}
.newsletter-text { flex: 1; min-width: 220px; }
.newsletter-text h3 {
    font-family: 'Oswald', sans-serif;
    font-size: 1.6rem;
    font-weight: 600;
    color: #fff;
    margin-bottom: 6px;
}
.newsletter-text p {
    font-family: 'Poppins', sans-serif;
    font-size: 0.88rem;
    color: rgba(255,255,255,0.5);
    line-height: 1.6;
}
.newsletter-text h3 span { color: var(--yellow); }

.newsletter-form {
    display: flex;
    gap: 0;
    flex: 1.2;
    min-width: 280px;
    max-width: 480px;
}
.newsletter-form input {
    flex: 1;
    padding: 13px 18px;
    background: rgba(255,255,255,0.07);
    border: 1px solid rgba(255,255,255,0.12);
    border-right: none;
    border-radius: 8px 0 0 8px;
    color: #fff;
    font-family: 'Poppins', sans-serif;
    font-size: 0.88rem;
    outline: none;
    transition: border-color 0.2s;
}
.newsletter-form input::placeholder { color: rgba(255,255,255,0.3); }
.newsletter-form input:focus { border-color: var(--yellow); }
.newsletter-form button {
    padding: 13px 22px;
    background: var(--yellow);
    color: var(--dark);
    border: none;
    border-radius: 0 8px 8px 0;
    font-family: 'Oswald', sans-serif;
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
    letter-spacing: 0.5px;
    transition: opacity 0.2s;
    white-space: nowrap;
}
.newsletter-form button:hover { opacity: 0.88; }

.newsletter-success {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #4ade80;
    font-family: 'Poppins', sans-serif;
    font-size: 0.92rem;
    font-weight: 500;
    padding: 13px 0;
}

/* ══════════════════════════════════════
   NOTIFICATION BANNER
══════════════════════════════════════ */
.notif-banner {
    position: fixed;
    bottom: 24px;
    right: 24px;
    background: #1c1c1e;
    border: 1px solid rgba(255,255,255,0.1);
    border-left: 3px solid var(--yellow);
    border-radius: 12px;
    padding: 16px 18px;
    max-width: 340px;
    z-index: 9990;
    box-shadow: 0 8px 32px rgba(0,0,0,0.4);
    display: flex;
    flex-direction: column;
    gap: 12px;
    transform: translateY(120px);
    opacity: 0;
    transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1), opacity 0.35s;
    pointer-events: none;
}
.notif-banner.visible { transform: translateY(0); opacity: 1; pointer-events: all; }

.notif-banner-content {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    color: rgba(255,255,255,0.85);
    font-family: 'Poppins', sans-serif;
    font-size: 0.83rem;
    line-height: 1.5;
}
.notif-banner-content svg { flex-shrink: 0; stroke: var(--yellow); margin-top: 1px; }

.notif-banner-btns { display: flex; gap: 8px; }

.notif-btn-allow {
    flex: 1;
    padding: 8px;
    background: var(--yellow);
    color: var(--dark);
    border: none;
    border-radius: 7px;
    font-family: 'Poppins', sans-serif;
    font-size: 0.8rem;
    font-weight: 600;
    cursor: pointer;
    transition: opacity 0.2s;
}
.notif-btn-allow:hover { opacity: 0.88; }

.notif-btn-deny {
    padding: 8px 14px;
    background: transparent;
    color: rgba(255,255,255,0.4);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 7px;
    font-family: 'Poppins', sans-serif;
    font-size: 0.8rem;
    cursor: pointer;
    transition: color 0.2s;
}
.notif-btn-deny:hover { color: rgba(255,255,255,0.7); }

/* ══════════════════════════════════════
   INFINITE SCROLL SENTINEL
══════════════════════════════════════ */
.infinite-sentinel {
    height: 1px;
    width: 100%;
    margin-top: 20px;
}

/* ══════════════════════════════════════
   RESPONSIVE (mobile)
══════════════════════════════════════ */
@media (max-width: 600px) {
    .newsletter-inner { flex-direction: column; gap: 24px; }
    .newsletter-form  { max-width: 100%; width: 100%; }
    .notif-banner     { left: 16px; right: 16px; max-width: none; bottom: 16px; }
    .share-popup      { left: 16px; right: 16px; transform: none; bottom: 70px; min-width: unset; }
    .sp-bottom-share  { gap: 8px; }
}
