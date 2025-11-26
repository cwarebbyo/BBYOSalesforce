// BBYO Master Footer — app-v1.js (script-relative template URL, immediate renders)
(function () {
  // ---- Loud startup banner
  console.log('%c[bbyo-footer] app-v1 boot', 'font-weight:bold; color:#1A03B5');

  // -------- Environment / SDK --------
  const inCB = !!(window.parent && window.parent !== window) && !!(window.sfdc && window.sfdc.BlockSDK);
  const sdk = inCB ? new window.sfdc.BlockSDK({ blockEditorWidth: 820 }) : null;

  // Compute content.html relative to THIS script file (not the page URL)
  const currentScript = document.currentScript || (function () {
    const scripts = document.getElementsByTagName('script');
    return scripts[scripts.length - 1];
  })();
  const SCRIPT_SRC = currentScript && currentScript.src ? currentScript.src : window.location.href;
  const CONTENT_URL = new URL('content.html', SCRIPT_SRC).href;

  // -------- Data --------
  const BRAND_COLORS = [
    { name: 'Black',            hex: '#000000' },
    { name: 'Centennial Blue',  hex: '#1A03B5' },
    { name: 'Lox',              hex: '#E42158' },
    { name: 'Jaffa',            hex: '#F8450A' },
    { name: 'Sunrise',          hex: '#F8F90A' },
    { name: 'Pistachio',        hex: '#6BBD00' },
    { name: 'Seltzer',          hex: '#00D7EB' }
  ];

// ---- Image URLs (PNG) by Brand Color ----
const IMGURLS = {
  "Black": {
    logo: "https://image.connect.bbyo.org/lib/fe3f11747364047c751470/m/1/c1481a93-ef90-40ee-b756-ab452d5bbdfe.png",
    fb: "https://image.connect.bbyo.org/lib/fe3f11747364047c751470/m/1/c7b7933c-4101-4f20-890a-e76d45c23ae5.png",
    ig: "https://image.connect.bbyo.org/lib/fe3f11747364047c751470/m/1/30ede219-3312-48a3-b8c0-6a28f89ededc.png",
    x: "https://image.connect.bbyo.org/lib/fe3f11747364047c751470/m/1/a0a5e551-3847-4081-bd31-01a575b8f1d6.png",
    yt: "https://image.connect.bbyo.org/lib/fe3f11747364047c751470/m/1/e6f973ed-4256-406a-be5b-40d6430d4c74.png",
    tt: "https://image.connect.bbyo.org/lib/fe3f11747364047c751470/m/1/a0c89469-86dc-430f-a712-6c091e58ebf6.png",
    li: "https://image.connect.bbyo.org/lib/fe3f11747364047c751470/m/1/b9aeaf80-4670-4a1a-be3a-d1ef8397fa91.png",
    sc: "https://image.connect.bbyo.org/lib/fe3f11747364047c751470/m/1/8d33c719-a77f-43e8-8d54-67e45638ddd1.png"
  },
  "Centennial Blue": {
    logo: "https://image.connect.bbyo.org/lib/fe3f11747364047c751470/m/1/ffb978c0-5d39-478c-b764-a46ba31f674a.png",
    fb: "https://image.connect.bbyo.org/lib/fe3f11747364047c751470/m/1/008626c4-5028-43ec-bdc8-64ee2c6d82bb.png",
    ig: "https://image.connect.bbyo.org/lib/fe3f11747364047c751470/m/1/f69b0d8c-234e-44b6-a0d0-5da0eb639385.png",
    x: "https://image.connect.bbyo.org/lib/fe3f11747364047c751470/m/1/cb4ac843-b130-4bef-a927-9c3c0ca53dc4.png",
    yt: "https://image.connect.bbyo.org/lib/fe3f11747364047c751470/m/1/efeeef52-3075-4bbe-88e4-0077ad20a1ea.png",
    tt: "https://image.connect.bbyo.org/lib/fe3f11747364047c751470/m/1/28d2a5fe-c7bc-4b41-afe9-d347baf82bb2.png",
    li: "https://image.connect.bbyo.org/lib/fe3f11747364047c751470/m/1/b4ff8572-785e-4829-975c-0c4d22ec2813.png",
    sc: "https://image.connect.bbyo.org/lib/fe3f11747364047c751470/m/1/9aae89cb-38f7-409c-837e-df51487b022e.png"
  },
  "Jaffa": {
    logo: "https://image.connect.bbyo.org/lib/fe3f11747364047c751470/m/1/4ce0144d-baab-47c2-bc49-cb2a91becd23.png",
    fb: "https://image.connect.bbyo.org/lib/fe3f11747364047c751470/m/1/0d116fb1-cc60-4ab6-acaa-2de14b032802.png",
    ig: "https://image.connect.bbyo.org/lib/fe3f11747364047c751470/m/1/105a484e-9d2b-49ef-8814-c107f21fd420.png",
    x: "https://image.connect.bbyo.org/lib/fe3f11747364047c751470/m/1/aebc2619-7452-4922-9fce-8650cb1ee73c.png",
    yt: "https://image.connect.bbyo.org/lib/fe3f11747364047c751470/m/1/b7b9e903-4d21-4566-8333-362025dbaa88.png",
    tt: "https://image.connect.bbyo.org/lib/fe3f11747364047c751470/m/1/60c6140f-13fa-489e-bb2a-0bd2bf993cf0.png",
    li: "https://image.connect.bbyo.org/lib/fe3f11747364047c751470/m/1/64b2bd2e-0c52-420c-b62c-5104de766b73.png",
    sc: "https://image.connect.bbyo.org/lib/fe3f11747364047c751470/m/1/730a6d29-3c43-4011-adbd-40f99366b5fc.png"
  },
  "Lox": {
    logo: "https://image.connect.bbyo.org/lib/fe3f11747364047c751470/m/1/34ffe2b4-6948-4d1d-b7a4-579e7bf075b5.png",
    fb: "https://image.connect.bbyo.org/lib/fe3f11747364047c751470/m/1/e4e95132-acb5-4d15-af69-b73303dd3de2.png",
    ig: "https://image.connect.bbyo.org/lib/fe3f11747364047c751470/m/1/c2cc3a92-34f4-40e3-abd4-029d59f18426.png",
    x: "https://image.connect.bbyo.org/lib/fe3f11747364047c751470/m/1/05f3c883-0634-4c03-8941-379e8b520b07.png",
    yt: "https://image.connect.bbyo.org/lib/fe3f11747364047c751470/m/1/0a88160d-441f-41f3-8a01-170da230192e.png",
    tt: "https://image.connect.bbyo.org/lib/fe3f11747364047c751470/m/1/255091f6-d77e-4aa6-a20e-ed9f06b9cbf8.png",
    li: "https://image.connect.bbyo.org/lib/fe3f11747364047c751470/m/1/b18bb2b4-ed81-441a-9db9-7c4ce201d7cc.png",
    sc: "https://image.connect.bbyo.org/lib/fe3f11747364047c751470/m/1/cf252d16-1f30-4f74-b92e-f63fd13b2194.png"
  },
  "Pistachio": {
    logo: "https://image.connect.bbyo.org/lib/fe3f11747364047c751470/m/1/8f7d3e77-027d-4c38-9b26-357567d8221d.png",
    fb: "https://image.connect.bbyo.org/lib/fe3f11747364047c751470/m/1/5acafd29-c070-4bc1-a34c-0bbc750383c8.png",
    ig: "https://image.connect.bbyo.org/lib/fe3f11747364047c751470/m/1/6c388fa1-8a76-4df5-89e5-b8ef9aeb3948.png",
    x: "https://image.connect.bbyo.org/lib/fe3f11747364047c751470/m/1/bc061aad-49e1-47c8-9eca-5da5d8661882.png",
    yt: "https://image.connect.bbyo.org/lib/fe3f11747364047c751470/m/1/f066baf9-bb61-47d8-a691-03e90c57ee82.png",
    tt: "https://image.connect.bbyo.org/lib/fe3f11747364047c751470/m/1/d97493c2-89c5-422e-80e4-268a23274120.png",
    li: "https://image.connect.bbyo.org/lib/fe3f11747364047c751470/m/1/8b298405-d53e-4316-a958-5df918bdf591.png",
    sc: "https://image.connect.bbyo.org/lib/fe3f11747364047c751470/m/1/90096e22-9ddf-465a-ba4e-8cd4889ec175.png"
  },
  "Seltzer": {
    logo: "https://image.connect.bbyo.org/lib/fe3f11747364047c751470/m/1/85fda62b-20e1-4948-9943-d38ffc35d836.png",
    fb: "https://image.connect.bbyo.org/lib/fe3f11747364047c751470/m/1/2e31a989-38cd-46b4-a0fe-aca4ca2d1077.png",
    ig: "https://image.connect.bbyo.org/lib/fe3f11747364047c751470/m/1/8cc007c9-6a36-4ce3-819a-146bc91bfa88.png",
    x: "https://image.connect.bbyo.org/lib/fe3f11747364047c751470/m/1/9165d6a9-18be-4d14-82d2-3e3d00191bc1.png",
    yt: "https://image.connect.bbyo.org/lib/fe3f11747364047c751470/m/1/4d09160e-d92c-49e0-b9ef-542f08c3ccd7.png",
    tt: "https://image.connect.bbyo.org/lib/fe3f11747364047c751470/m/1/720e83e6-0078-4e44-8d91-f92f113aec6e.png",
    li: "https://image.connect.bbyo.org/lib/fe3f11747364047c751470/m/1/6a7d6684-9c8e-47f7-aa0a-0aea6ea9147c.png",
    sc: "https://image.connect.bbyo.org/lib/fe3f11747364047c751470/m/1/2a36aae8-3ffa-44d9-8c2a-afa998ff515e.png"
  },
  "Sunrise": {
    logo: "https://image.connect.bbyo.org/lib/fe3f11747364047c751470/m/1/78fa2bfb-2d6a-4a61-bda5-f8735151325f.png",
    fb: "https://image.connect.bbyo.org/lib/fe3f11747364047c751470/m/1/e0c6c37a-0976-44a2-814c-b5a08f149ab0.png",
    ig: "https://image.connect.bbyo.org/lib/fe3f11747364047c751470/m/1/2b729ff8-9b23-4c18-baa3-9fa0ae7eb636.png",
    x: "https://image.connect.bbyo.org/lib/fe3f11747364047c751470/m/1/c1476368-3d6a-4c4b-8bd2-fd082bfc829c.png",
    yt: "https://image.connect.bbyo.org/lib/fe3f11747364047c751470/m/1/6418cd42-ba5d-4c26-bcd8-9800a0fff71c.png",
    tt: "https://image.connect.bbyo.org/lib/fe3f11747364047c751470/m/1/f43eff41-1959-4276-ac21-3f27b56ed726.png",
    li: "https://image.connect.bbyo.org/lib/fe3f11747364047c751470/m/1/72f1892f-3905-4b6e-888e-5f511ac2d799.png",
    sc: "https://image.connect.bbyo.org/lib/fe3f11747364047c751470/m/1/22ef1f00-836f-436a-9055-ac27c9c9ca83.png"
  }
};
const LINK_VARIANTS = {
    General:  { logo:'https://www.bbyo.org', facebook:'https://www.facebook.com/BBYOInsider', instagram:'https://www.instagram.com/bbyoinsider', x:'https://x.com/BBYOInsider', youtube:'https://www.youtube.com/user/BBYOtube', tiktok:'https://www.tiktok.com/@bbyoinsider', snapchat:'https://www.snapchat.com/add/bbyoinsider', linkedin:'https://www.linkedin.com/company/bbyo' },
    Alumni:   { logo:'https://alumni.bbyo.org', facebook:'https://www.facebook.com/BBYOInsider', instagram:'https://www.instagram.com/bbyoalumni/', x:'https://x.com/BBYOInsider', youtube:'https://www.youtube.com/user/BBYOtube', tiktok:'https://www.tiktok.com/@bbyoinsider', snapchat:'https://www.snapchat.com/add/bbyoinsider', linkedin:'https://www.linkedin.com/company/bbyo' },
    Passport: { logo:'https://www.bbyo.org', facebook:'https://www.facebook.com/bbyopassport', instagram:'https://www.instagram.com/bbyopassport', x:'https://x.com/BBYOInsider', youtube:'https://www.youtube.com/user/BBYOtube', tiktok:'https://www.tiktok.com/@bbyoinsider', snapchat:'https://www.snapchat.com/add/bbyoinsider', linkedin:'https://www.linkedin.com/company/bbyo' }
  };
  const DEFAULT_VARIANT = 'General';
  const DEFAULT_COLOR_HEX = '#000000';

  // -------- Utils --------
  const $ = (sel) => document.querySelector(sel);
  const getDataAsync = () => new Promise((resolve) => (sdk ? sdk.getData(resolve) : resolve({})));
  const setDataAsync = (data) => new Promise((resolve) => (sdk ? sdk.setData(data, resolve) : resolve()));
  const pushToCB = (html) => { if (sdk) { try { sdk.setContent(html); sdk.setSuperContent(html); } catch(e){ console.warn('[bbyo-footer] setContent failed', e);} } };
  const escapeRegExp = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const replaceToken = (tpl, token, value) => tpl.replace(new RegExp(`\\{\\{\\s*${escapeRegExp(token)}\\s*\\}\\}`,'g'), value == null ? '' : String(value));
  const sanitizeHex = (hex, fb = DEFAULT_COLOR_HEX) => {
    if (!hex) return fb;
    let h = String(hex).trim(); if (!h.startsWith('#')) h = '#' + h;
    if (!/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(h)) return fb;
    if (h.length === 4) h = '#' + [...h.slice(1)].map(c => c + c).join('');
    return h.toUpperCase();
  };
  const normalizeUrl = (u, fb = '#') => {
    if (!u) return fb;
    let url = String(u).trim();
    if (!/^(https?:\/\/|mailto:)/i.test(url)) url = 'https://' + url.replace(/^\/+/, '');
    try { new URL(url); return url; } catch { return fb; }
  };
  const findColorName = (hex) => {
    const H = sanitizeHex(hex);
    const hit = BRAND_COLORS.find(c => sanitizeHex(c.hex) === H);
    return hit && hit.name;
  };

  // -------- Template loader (script-relative) --------
  const fetchTemplate = async () => {
    console.log('[bbyo-footer] loading template from', CONTENT_URL);
    try {
      const res = await fetch(CONTENT_URL + '?v=' + Date.now(), { cache: 'no-store' });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const text = await res.text();
      console.log('[bbyo-footer] template ok, bytes:', text.length, 'tokens:', {
        COLOR_HEX: /{{\s*(COLOR_HEX|colorHex)\s*}}/.test(text),
        LINKS_logo: /{{\s*(LINKS\.logo|logo)\s*}}/.test(text)
      });
      return text;
    } catch (e) {
      console.error('[bbyo-footer] template fetch FAILED:', e.message);
      // Last-resort fallback so the app still renders
      return `<table class="bbyo-footer" role="presentation"><tr><td>
        <a href="{{LINKS.logo}}">Logo</a>
        <span class="svg-wrap" style="display:inline-block; color: {{COLOR_HEX}};">
          <svg viewBox="0 0 10 10" width="20" height="20" fill="currentColor" aria-label="dot"><circle cx="5" cy="5" r="5"/></svg>
        </span>
        <a href="{{instagram}}">Instagram</a>
      </td></tr></table>`;
    }
  };

  // -------- HTML builder --------
  const buildHtml = (tpl, state) => {
    const colorHex = sanitizeHex(state.colorHex || DEFAULT_COLOR_HEX);
    const colorName = state.colorName || findColorName(colorHex) || 'Custom';
    const keys = ['logo','facebook','instagram','linkedin','youtube','tiktok','x','snapchat'];
    const links = Object.fromEntries(keys.map(k => [k, normalizeUrl((state.links||{})[k])]));

    let out = tpl;
    out = replaceToken(out, 'COLOR_HEX', colorHex);
    out = replaceToken(out, 'colorHex', colorHex);
    out = replaceToken(out, 'colorName', colorName);
    keys.forEach(k => { out = replaceToken(out, `LINKS.${k}`, links[k]); out = replaceToken(out, k, links[k]); });
    // --- Inject PNG URLs ---
  const imgset = IMGURLS[state.colorName] || IMGURLS["Centennial Blue"];
  Object.entries(imgset).forEach(([key, val]) => {
    out = replaceToken(out, `IMGURL.${key}`, val);
  });

  return out;
  };

  // -------- UI helpers --------
  const linksPreviewHtml = (links) => {
    const labels = { logo:'Logo', facebook:'Facebook', instagram:'Instagram', x:'X (Twitter)', youtube:'YouTube', tiktok:'TikTok', snapchat:'Snapchat', linkedin:'LinkedIn' };
    return Object.keys(labels).map(k => {
      const val = links[k] || '#';
      const esc = val.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
      return `<div class="link-row"><strong>${labels[k]}:</strong> <a target="_blank" rel="noopener" href="${esc}">${esc}</a></div>`;
    }).join('');
  };
  const populateColorSelect = (sel, currentHex) => {
    if (!sel) return;
    if (!sel.options.length) {
      sel.innerHTML = BRAND_COLORS.map(c => `<option value="${c.hex}">${c.name} (${c.hex})</option>`).join('');
    }
    sel.value = sanitizeHex(currentHex || DEFAULT_COLOR_HEX);
  };
  const updateChips = (state) => {
    const chipColor = $('#chip-color'); const chipVariant = $('#chip-variant');
    const hex = sanitizeHex(state.colorHex || DEFAULT_COLOR_HEX);
    if (chipColor) { chipColor.style.background = hex; chipColor.style.color = '#000'; chipColor.textContent = `${findColorName(hex) || 'Custom'} ${hex}`; }
    if (chipVariant) chipVariant.textContent = state.variant || DEFAULT_VARIANT;
  };
  const updateLinksPreview = (state) => { const el = $('#linksPreview'); if (el) el.innerHTML = linksPreviewHtml(state.links || {}); };

  // -------- Main --------
  (async function init () {
    try {
      const tpl = await fetchTemplate();
      const saved = (await getDataAsync()) || {};
      const variant = (saved.variant && LINK_VARIANTS[saved.variant]) ? saved.variant : DEFAULT_VARIANT;

      const state = {
        variant,
        colorHex: sanitizeHex(saved.colorHex || DEFAULT_COLOR_HEX),
        colorName: saved.colorName || (findColorName(saved.colorHex) || 'Black'),
        links: { ...(LINK_VARIANTS[variant] || {}), ...(saved.links || {}) }
      };

      // Elements
      const variantEl = $('#variant');
      const colorEl = $('#color');
      const htmlEl = $('#html');

      // Render (immediate — no debounce)
      const render = async () => {
        try {
          await setDataAsync(state);
          const html = buildHtml(tpl, state);
          if (htmlEl) htmlEl.value = html;
          pushToCB(html);
          document.body.dataset.renderOk = '1';
          console.log('[bbyo-footer] render ok', { variant: state.variant, colorHex: state.colorHex });
        } catch (err) {
          console.error('[bbyo-footer] render FAILED:', err && err.message ? err.message : err);
          if (htmlEl) htmlEl.value = 'Render failed: ' + (err?.message || String(err));
          document.body.dataset.renderOk = '0';
        }
      };

      // Bind Variant
      if (variantEl) {
        const keys = Object.keys(LINK_VARIANTS);
        if (!variantEl.options.length) variantEl.innerHTML = keys.map(v => `<option value="${v}">${v}</option>`).join('');
        variantEl.value = state.variant;
        variantEl.addEventListener('change', () => {
          state.variant = variantEl.value;
          state.links = { ...(LINK_VARIANTS[state.variant] || {}) };
          updateLinksPreview(state);
          render();
        });
      }

      // Bind Color (use change + input)
      if (colorEl) {
        populateColorSelect(colorEl, state.colorHex);
        const onColor = () => {
          state.colorHex = colorEl.value;
          state.colorName = findColorName(state.colorHex) || 'Custom';
          updateChips(state);
          render();
        };
        colorEl.addEventListener('change', onColor);
        colorEl.addEventListener('input', onColor);
      }

      // Initial paint
      updateChips(state);
      updateLinksPreview(state);
      await render();

      if (!inCB) console.warn('[bbyo-footer] Not inside Content Builder — textarea shows final HTML output.');
    } catch (e) {
      console.error('[bbyo-footer] init FAILED:', e && e.message ? e.message : e);
      const htmlEl = $('#html');
      if (htmlEl) htmlEl.value = 'Init failed: ' + (e?.message || String(e));
      try { pushToCB('<!-- init failed: ' + (e?.message || String(e)) + ' -->'); } catch {}
    }
  })();
})();
