// Professional Web Audio synthesis engine for Ishwari Portfolio
// Always active, zero-dependency, ultra-fast tactile & card-flip acoustic effects

class SoundManager {
  private ctx: AudioContext | null = null;
  private isUnlocked: boolean = false;

  constructor() {
    if (typeof window !== "undefined") {
      this.initAutoUnlock();
    }
  }

  private initAutoUnlock() {
    const unlock = () => {
      this.getAudioContext();
      if (this.ctx && this.ctx.state === "suspended") {
        this.ctx.resume().then(() => {
          this.isUnlocked = true;
        }).catch(() => {});
      } else if (this.ctx && this.ctx.state === "running") {
        this.isUnlocked = true;
      }
    };

    window.addEventListener("pointerdown", unlock, { passive: true, once: false });
    window.addEventListener("touchstart", unlock, { passive: true, once: false });
    window.addEventListener("keydown", unlock, { passive: true, once: false });
  }

  public getAudioContext(): AudioContext | null {
    if (typeof window === "undefined") return null;

    if (!this.ctx) {
      try {
        const AudioCtxClass =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext })
            .webkitAudioContext;
        if (AudioCtxClass) {
          this.ctx = new AudioCtxClass();
        }
      } catch {
        return null;
      }
    }

    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume().catch(() => {});
    }

    return this.ctx;
  }

  /**
   * Realistic 3D Playing Card / Art Paper Flip Sound
   * Combines tactile cardstock whoosh (air resistance) + crisp snap/flick
   */
  public playCardFlip() {
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;

      const run = () => {
        const now = ctx.currentTime;
        // Subtle pitch randomize (+/- 8%) for natural physical card handling
        const variation = 0.92 + Math.random() * 0.16;

        // --- LAYER 1: Card Surface Friction & Air Whoosh (Bandpassed Noise) ---
        const duration = 0.09;
        const bufferSize = Math.floor(ctx.sampleRate * duration);
        const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = noiseBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          const progress = i / bufferSize;
          // Shaped envelope: soft rise, quick whoosh fall
          const envelope = Math.sin(progress * Math.PI) * Math.exp(-progress * 2.2);
          data[i] = (Math.random() * 2 - 1) * envelope;
        }

        const noiseSource = ctx.createBufferSource();
        noiseSource.buffer = noiseBuffer;

        // Dynamic bandpass filter sweep: mimics paper slicing through air
        const noiseFilter = ctx.createBiquadFilter();
        noiseFilter.type = "bandpass";
        noiseFilter.frequency.setValueAtTime(1100 * variation, now);
        noiseFilter.frequency.exponentialRampToValueAtTime(2800 * variation, now + 0.04);
        noiseFilter.frequency.exponentialRampToValueAtTime(900 * variation, now + duration);
        noiseFilter.Q.setValueAtTime(2.0, now);

        const noiseGain = ctx.createGain();
        noiseGain.gain.setValueAtTime(0.001, now);
        noiseGain.gain.linearRampToValueAtTime(0.28, now + 0.02);
        noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

        noiseSource.connect(noiseFilter);
        noiseFilter.connect(noiseGain);
        noiseGain.connect(ctx.destination);
        noiseSource.start(now);

        // --- LAYER 2: Crisp Cardstock Snap / Slap ---
        const snapOsc = ctx.createOscillator();
        const snapGain = ctx.createGain();
        const snapFilter = ctx.createBiquadFilter();

        snapOsc.type = "triangle";
        // Fast pitch drop simulates bending card releasing tension
        snapOsc.frequency.setValueAtTime(320 * variation, now + 0.012);
        snapOsc.frequency.exponentialRampToValueAtTime(120 * variation, now + 0.045);

        snapFilter.type = "lowpass";
        snapFilter.frequency.setValueAtTime(1400, now + 0.012);

        snapGain.gain.setValueAtTime(0.001, now);
        snapGain.gain.setValueAtTime(0.001, now + 0.012);
        snapGain.gain.linearRampToValueAtTime(0.22, now + 0.016);
        snapGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.055);

        snapOsc.connect(snapFilter);
        snapFilter.connect(snapGain);
        snapGain.connect(ctx.destination);

        snapOsc.start(now + 0.012);
        snapOsc.stop(now + 0.06);
      };

      if (ctx.state === "suspended") {
        ctx.resume().then(run).catch(() => {});
      } else {
        run();
      }
    } catch {
      // Audio gracefully bypassed
    }
  }

  /**
   * Tactile Navigation / Chapter Click Sound
   * Apple Taptic style clean tactile micro-tap
   */
  public playClick() {
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;

      const run = () => {
        const now = ctx.currentTime;

        // 1. Tactile contact micro-texture
        const bufferSize = Math.floor(ctx.sampleRate * 0.018);
        const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = noiseBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.3));
        }

        const noise = ctx.createBufferSource();
        noise.buffer = noiseBuffer;

        const noiseFilter = ctx.createBiquadFilter();
        noiseFilter.type = "bandpass";
        noiseFilter.frequency.setValueAtTime(1800, now);
        noiseFilter.Q.setValueAtTime(2.2, now);

        const noiseGain = ctx.createGain();
        noiseGain.gain.setValueAtTime(0.001, now);
        noiseGain.gain.linearRampToValueAtTime(0.24, now + 0.002);
        noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.018);

        noise.connect(noiseFilter);
        noiseFilter.connect(noiseGain);
        noiseGain.connect(ctx.destination);

        // 2. Gentle tactile body (140 Hz)
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(140, now);

        oscGain.gain.setValueAtTime(0.001, now);
        oscGain.gain.linearRampToValueAtTime(0.20, now + 0.003);
        oscGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.024);

        osc.connect(oscGain);
        oscGain.connect(ctx.destination);

        noise.start(now);
        osc.start(now);
        osc.stop(now + 0.026);
      };

      if (ctx.state === "suspended") {
        ctx.resume().then(run).catch(() => {});
      } else {
        run();
      }
    } catch {
      // Audio gracefully bypassed
    }
  }

  /**
   * Origami / Paper Unfolding Crease Sound
   */
  public playPaperCrease() {
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;

      const run = () => {
        const now = ctx.currentTime;
        const duration = 0.07;
        const bufferSize = Math.floor(ctx.sampleRate * duration);
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          data[i] = (Math.random() * 2 - 1) * Math.sin((i / bufferSize) * Math.PI);
        }

        const noise = ctx.createBufferSource();
        noise.buffer = buffer;

        const filter = ctx.createBiquadFilter();
        filter.type = "bandpass";
        filter.frequency.setValueAtTime(950, now);
        filter.frequency.exponentialRampToValueAtTime(1900, now + 0.04);
        filter.Q.setValueAtTime(1.8, now);

        const gain = ctx.createGain();
        gain.gain.setValueAtTime(0.001, now);
        gain.gain.linearRampToValueAtTime(0.22, now + 0.015);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        noise.start(now);
      };

      if (ctx.state === "suspended") {
        ctx.resume().then(run).catch(() => {});
      } else {
        run();
      }
    } catch {
      // Graceful bypass
    }
  }
}

// Global singleton instance
export const soundManager = new SoundManager();

export const playCardFlipSound = () => soundManager.playCardFlip();
export const playTactileClick = () => soundManager.playClick();
export const playPaperCreaseSound = () => soundManager.playPaperCrease();
