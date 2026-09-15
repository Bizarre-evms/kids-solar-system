// Shared UI helpers used across scenes: speech, scale-correct pointer
// coordinates, and responsive canvas sizing.
const SolarUI = (() => {
  // Voices load asynchronously in most browsers — getVoices() can return an
  // empty list until 'voiceschanged' fires, so cache the pick once available.
  let cachedVoice = null;
  function pickVoice() {
    const voices = window.speechSynthesis.getVoices();
    if (!voices.length) return null;
    return voices.find(v => /Google/i.test(v.name) && /^en/i.test(v.lang))
      || voices.find(v => /Natural/i.test(v.name) && /^en/i.test(v.lang))
      || voices.find(v => v.lang === 'en-US')
      || voices.find(v => /^en/i.test(v.lang))
      || voices[0];
  }
  if (window.speechSynthesis) {
    cachedVoice = pickVoice();
    window.speechSynthesis.addEventListener('voiceschanged', () => { cachedVoice = pickVoice(); });
  }

  function speak(text) {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US';
    u.rate = 0.85;
    u.pitch = 1.15;
    if (cachedVoice) u.voice = cachedVoice;
    window.speechSynthesis.speak(u);
  }

  // Converts a client (viewport) coordinate to canvas-pixel space, accounting
  // for the canvas being displayed at a different CSS size than its pixel
  // width (e.g. via max-width:100%). Without this, hit-testing and drag
  // silently break on any canvas that isn't rendered 1:1.
  function clientToCanvas(canvas, canvasWidth, clientX, clientY) {
    const rect = canvas.getBoundingClientRect();
    const scale = canvasWidth / rect.width;
    return { x: (clientX - rect.left) * scale, y: (clientY - rect.top) * scale };
  }

  function canvasToClient(canvas, canvasWidth, x, y) {
    const rect = canvas.getBoundingClientRect();
    const scale = rect.width / canvasWidth;
    return { x: rect.left + x * scale, y: rect.top + y * scale };
  }

  // Sizes `canvas` to `computeSize(innerWidth, innerHeight) -> {width, height}`
  // on load and on window resize, then calls `onResize(width, height)` so the
  // scene can recompute its own layout constants. Returns the resize function
  // in case the caller wants to trigger it manually.
  function setupResponsiveCanvas(canvas, computeSize, onResize) {
    function resize() {
      const { width, height } = computeSize(window.innerWidth, window.innerHeight);
      canvas.width = width;
      canvas.height = height;
      onResize(width, height);
    }
    window.addEventListener('resize', resize);
    resize();
    return resize;
  }

  return { speak, clientToCanvas, canvasToClient, setupResponsiveCanvas };
})();
