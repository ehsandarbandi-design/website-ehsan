"use client";

/**
 * A short, bright UI tick (~20ms, centred around 3kHz) synthesized with Web Audio,
 * so there's no audio file to load.
 *
 * Browsers block audio until the visitor has interacted with the page (a click, tap or
 * key press — mouse movement doesn't count). Until then hovers are silent; after the
 * first interaction every hover ticks.
 */

let ctx: AudioContext | null = null;
let noise: AudioBuffer | null = null;
let lastPlayed = 0;

function hasUserActivation() {
  // Chrome/Edge/Safari 16.4+/Firefox 120+; assume yes where unsupported.
  return navigator.userActivation?.hasBeenActive ?? true;
}

function getContext() {
  if (typeof window === "undefined") return null;
  if (!ctx) {
    const Ctor =
      window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!Ctor) return null;
    ctx = new Ctor();
    // 30ms of white noise, reused for every tick.
    noise = ctx.createBuffer(1, Math.ceil(ctx.sampleRate * 0.03), ctx.sampleRate);
    const data = noise.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
  }
  return ctx;
}

/** Call once on mount: starts audio inside the first user gesture (required by Safari). */
export function unlockHoverSound() {
  const events = ["pointerdown", "keydown", "touchend"] as const;
  const unlock = () => {
    const c = getContext();
    if (c && c.state !== "running") void c.resume();
    if (c?.state === "running") events.forEach((e) => window.removeEventListener(e, unlock));
  };
  events.forEach((e) => window.addEventListener(e, unlock));
  return () => events.forEach((e) => window.removeEventListener(e, unlock));
}

export function playHoverTick(volume = 0.35) {
  if (typeof window === "undefined" || !hasUserActivation()) return;
  const c = getContext();
  if (!c) return;
  if (c.state === "running") tick(c, volume);
  else void c.resume().then(() => c.state === "running" && tick(c, volume));
}

function tick(c: AudioContext, volume: number) {
  if (!noise) return;

  // Guard against a burst of ticks when sweeping quickly across rows.
  const now = c.currentTime;
  if (now - lastPlayed < 0.04) return;
  lastPlayed = now;

  // Click body: band-passed noise with a fast exponential decay.
  const src = c.createBufferSource();
  src.buffer = noise;
  src.playbackRate.value = 0.9 + Math.random() * 0.2; // tiny variation so repeats don't feel robotic

  const band = c.createBiquadFilter();
  band.type = "bandpass";
  band.frequency.value = 3200;
  band.Q.value = 1.4;

  const noiseGain = c.createGain();
  noiseGain.gain.setValueAtTime(volume, now);
  noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.018);

  // A little tonal "tock" underneath for body.
  const osc = c.createOscillator();
  osc.type = "sine";
  osc.frequency.setValueAtTime(1800, now);
  osc.frequency.exponentialRampToValueAtTime(900, now + 0.02);

  const oscGain = c.createGain();
  oscGain.gain.setValueAtTime(volume * 0.5, now);
  oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.022);

  src.connect(band).connect(noiseGain).connect(c.destination);
  osc.connect(oscGain).connect(c.destination);

  src.start(now);
  src.stop(now + 0.03);
  osc.start(now);
  osc.stop(now + 0.03);
}
