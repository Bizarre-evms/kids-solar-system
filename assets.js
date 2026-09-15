// Shared planet/sun/moon rendering using Kenney's CC0 "Planets" sprite pack.
// Colors a shaded sphere sprite by compositing: base color -> texture blotches -> 3D shading.
const PlanetArt = (() => {
  const sphereImg = new Image();
  const noiseImg = new Image();
  sphereImg.src = 'assets/web/sphere0.png';
  noiseImg.src = 'assets/web/noise00.png';

  function ready() {
    return sphereImg.complete && sphereImg.naturalWidth > 0 && noiseImg.complete && noiseImg.naturalWidth > 0;
  }

  function drawSphere(ctx, x, y, r, color, textureAlpha = 0.45) {
    ctx.save();
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.clip();

    ctx.fillStyle = color;
    ctx.fillRect(x - r, y - r, r * 2, r * 2);

    if (ready()) {
      ctx.globalCompositeOperation = 'overlay';
      ctx.globalAlpha = textureAlpha;
      ctx.drawImage(noiseImg, x - r, y - r, r * 2, r * 2);
      ctx.globalAlpha = 1;

      ctx.globalCompositeOperation = 'multiply';
      ctx.drawImage(sphereImg, x - r, y - r, r * 2, r * 2);
      ctx.globalCompositeOperation = 'source-over';
    }

    ctx.restore();
  }

  function drawSun(ctx, x, y, r) {
    const glowR = r * 2.2;
    const glow = ctx.createRadialGradient(x, y, r * 0.6, x, y, glowR);
    glow.addColorStop(0, 'rgba(255,217,61,0.55)');
    glow.addColorStop(1, 'rgba(255,217,61,0)');
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(x, y, glowR, 0, Math.PI * 2);
    ctx.fill();

    drawSphere(ctx, x, y, r, '#ffd93d', 0.3);
  }

  function drawMoon(ctx, x, y, r) {
    drawSphere(ctx, x, y, r, '#c9c9c9', 0.5);
  }

  return { drawSphere, drawSun, drawMoon, ready };
})();
