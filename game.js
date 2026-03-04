// FiND - Core Game Engine (v3: Proximity Collection + Breed Illustrations)

// === DOG BREED SVG TEMPLATES ===
// Each returns SVG inner content for a 48x48 viewBox
const DOG_TEMPLATES = {
  retriever: (c, a) =>
    `<ellipse cx="24" cy="25" rx="12" ry="11" fill="${c}"/>` +
    `<ellipse cx="13" cy="28" rx="4.5" ry="7" fill="${a}"/>` +
    `<ellipse cx="35" cy="28" rx="4.5" ry="7" fill="${a}"/>` +
    `<ellipse cx="24" cy="29" rx="5" ry="3.5" fill="#F5E6D0" opacity="0.6"/>` +
    `<circle cx="20" cy="22" r="2.2" fill="#FFF"/><circle cx="28" cy="22" r="2.2" fill="#FFF"/>` +
    `<circle cx="20.5" cy="22" r="1.3" fill="#2B1810"/><circle cx="28.5" cy="22" r="1.3" fill="#2B1810"/>` +
    `<ellipse cx="24" cy="27" rx="2.5" ry="2" fill="#2B1810"/>` +
    `<path d="M22,30 Q24,32 26,30" stroke="#2B1810" stroke-width="0.7" fill="none"/>`,

  shepherd: (c, a) =>
    `<ellipse cx="24" cy="26" rx="11" ry="10" fill="${c}"/>` +
    `<path d="M15,22 L11,8 L21,20Z" fill="${c}"/><path d="M33,22 L37,8 L27,20Z" fill="${c}"/>` +
    `<path d="M15,22 L11,8 L21,20" fill="${a}" opacity="0.35"/><path d="M33,22 L37,8 L27,20" fill="${a}" opacity="0.35"/>` +
    `<ellipse cx="24" cy="30" rx="5" ry="3.5" fill="#F5E6D0" opacity="0.5"/>` +
    `<circle cx="20" cy="24" r="2" fill="#FFF"/><circle cx="28" cy="24" r="2" fill="#FFF"/>` +
    `<circle cx="20.5" cy="24" r="1.2" fill="#2B1810"/><circle cx="28.5" cy="24" r="1.2" fill="#2B1810"/>` +
    `<ellipse cx="24" cy="28.5" rx="2" ry="1.5" fill="#2B1810"/>` +
    `<path d="M22,31 Q24,33 26,31" stroke="#2B1810" stroke-width="0.7" fill="none"/>`,

  bulldog: (c, a) =>
    `<ellipse cx="24" cy="25" rx="14" ry="11" fill="${c}"/>` +
    `<ellipse cx="15" cy="19" rx="3" ry="4" fill="${a}" transform="rotate(-15 15 19)"/>` +
    `<ellipse cx="33" cy="19" rx="3" ry="4" fill="${a}" transform="rotate(15 33 19)"/>` +
    `<ellipse cx="24" cy="30" rx="8" ry="5" fill="${a}" opacity="0.7"/>` +
    `<circle cx="19" cy="23" r="2.5" fill="#FFF"/><circle cx="29" cy="23" r="2.5" fill="#FFF"/>` +
    `<circle cx="19.5" cy="23" r="1.5" fill="#2B1810"/><circle cx="29.5" cy="23" r="1.5" fill="#2B1810"/>` +
    `<ellipse cx="24" cy="27" rx="3" ry="2.5" fill="#2B1810"/>` +
    `<path d="M20,31 Q24,35 28,31" stroke="#2B1810" stroke-width="1" fill="none"/>`,

  frenchie: (c, a) =>
    `<ellipse cx="24" cy="27" rx="12" ry="10" fill="${c}"/>` +
    `<path d="M14,24 Q13,10 18,18Z" fill="${c}"/><path d="M34,24 Q35,10 30,18Z" fill="${c}"/>` +
    `<path d="M14,24 Q13,10 18,18" fill="${a}" opacity="0.3"/><path d="M34,24 Q35,10 30,18" fill="${a}" opacity="0.3"/>` +
    `<ellipse cx="24" cy="31" rx="6" ry="4" fill="${a}" opacity="0.6"/>` +
    `<circle cx="20" cy="25" r="2.3" fill="#FFF"/><circle cx="28" cy="25" r="2.3" fill="#FFF"/>` +
    `<circle cx="20.5" cy="25" r="1.4" fill="#2B1810"/><circle cx="28.5" cy="25" r="1.4" fill="#2B1810"/>` +
    `<ellipse cx="24" cy="29" rx="2.5" ry="2" fill="#2B1810"/>` +
    `<path d="M22,32 Q24,34 26,32" stroke="#2B1810" stroke-width="0.7" fill="none"/>`,

  terrier: (c, a) =>
    `<rect x="13" y="17" rx="5" ry="5" width="22" height="20" fill="${c}"/>` +
    `<path d="M16,19 L14,10 L20,17Z" fill="${c}"/><path d="M32,19 L34,10 L28,17Z" fill="${c}"/>` +
    `<path d="M16,19 L14,10 L20,17" fill="${a}" opacity="0.3"/><path d="M32,19 L34,10 L28,17" fill="${a}" opacity="0.3"/>` +
    `<ellipse cx="24" cy="31" rx="5" ry="3.5" fill="#E8DDD0" opacity="0.5"/>` +
    `<circle cx="20" cy="24" r="2" fill="#FFF"/><circle cx="28" cy="24" r="2" fill="#FFF"/>` +
    `<circle cx="20.5" cy="24" r="1.2" fill="#2B1810"/><circle cx="28.5" cy="24" r="1.2" fill="#2B1810"/>` +
    `<ellipse cx="24" cy="28" rx="2" ry="1.5" fill="#2B1810"/>` +
    `<path d="M22,32 Q24,34 26,32" stroke="#2B1810" stroke-width="0.7" fill="none"/>`,

  spitz: (c, a) =>
    `<ellipse cx="24" cy="26" rx="13" ry="11" fill="${c}"/>` +
    `<ellipse cx="24" cy="32" rx="14" ry="7" fill="${c}" opacity="0.8"/>` +
    `<path d="M15,22 L12,10 L20,20Z" fill="${c}"/><path d="M33,22 L36,10 L28,20Z" fill="${c}"/>` +
    `<path d="M15,22 L12,10 L20,20" fill="${a}" opacity="0.25"/><path d="M33,22 L36,10 L28,20" fill="${a}" opacity="0.25"/>` +
    `<ellipse cx="24" cy="29" rx="4" ry="3" fill="${a}" opacity="0.4"/>` +
    `<circle cx="20" cy="23" r="2" fill="#FFF"/><circle cx="28" cy="23" r="2" fill="#FFF"/>` +
    `<circle cx="20.3" cy="23" r="1.2" fill="#2B1810"/><circle cx="28.3" cy="23" r="1.2" fill="#2B1810"/>` +
    `<ellipse cx="24" cy="27.5" rx="2" ry="1.5" fill="#2B1810"/>` +
    `<path d="M22,30 Q24,32 26,30" stroke="#2B1810" stroke-width="0.7" fill="none"/>`,

  hound: (c, a) =>
    `<ellipse cx="24" cy="24" rx="11" ry="11" fill="${c}"/>` +
    `<ellipse cx="12" cy="28" rx="5" ry="9" fill="${a}" transform="rotate(-5 12 28)"/>` +
    `<ellipse cx="36" cy="28" rx="5" ry="9" fill="${a}" transform="rotate(5 36 28)"/>` +
    `<ellipse cx="24" cy="28" rx="5.5" ry="4" fill="#F5E6D0" opacity="0.6"/>` +
    `<circle cx="19" cy="21" r="2.3" fill="#FFF"/><circle cx="29" cy="21" r="2.3" fill="#FFF"/>` +
    `<circle cx="19.5" cy="21.5" r="1.4" fill="#2B1810"/><circle cx="29.5" cy="21.5" r="1.4" fill="#2B1810"/>` +
    `<ellipse cx="24" cy="26.5" rx="3" ry="2.2" fill="#2B1810"/>` +
    `<path d="M21,30 Q24,32 27,30" stroke="#2B1810" stroke-width="0.7" fill="none"/>`,

  sighthound: (c, a) =>
    `<ellipse cx="24" cy="24" rx="8" ry="12" fill="${c}"/>` +
    `<ellipse cx="16" cy="18" rx="3.5" ry="5" fill="${a}" transform="rotate(-20 16 18)"/>` +
    `<ellipse cx="32" cy="18" rx="3.5" ry="5" fill="${a}" transform="rotate(20 32 18)"/>` +
    `<ellipse cx="24" cy="30" rx="5" ry="5" fill="${a}" opacity="0.4"/>` +
    `<circle cx="21" cy="21" r="2" fill="#FFF"/><circle cx="27" cy="21" r="2" fill="#FFF"/>` +
    `<circle cx="21.3" cy="21" r="1.2" fill="#2B1810"/><circle cx="27.3" cy="21" r="1.2" fill="#2B1810"/>` +
    `<ellipse cx="24" cy="27" rx="1.8" ry="1.5" fill="#2B1810"/>` +
    `<path d="M22,30 Q24,32 26,30" stroke="#2B1810" stroke-width="0.6" fill="none"/>`,

  toy: (c, a) =>
    `<circle cx="24" cy="24" r="12" fill="${c}"/>` +
    `<ellipse cx="14" cy="18" rx="4" ry="5" fill="${a}" transform="rotate(-10 14 18)"/>` +
    `<ellipse cx="34" cy="18" rx="4" ry="5" fill="${a}" transform="rotate(10 34 18)"/>` +
    `<ellipse cx="24" cy="29" rx="4.5" ry="3" fill="#F5E6D0" opacity="0.5"/>` +
    `<circle cx="20" cy="22" r="3" fill="#FFF"/><circle cx="28" cy="22" r="3" fill="#FFF"/>` +
    `<circle cx="20.5" cy="22" r="1.8" fill="#2B1810"/><circle cx="28.5" cy="22" r="1.8" fill="#2B1810"/>` +
    `<ellipse cx="24" cy="27" rx="2" ry="1.5" fill="#2B1810"/>` +
    `<path d="M22,30 Q24,31.5 26,30" stroke="#2B1810" stroke-width="0.6" fill="none"/>`,

  giant: (c, a) =>
    `<ellipse cx="24" cy="25" rx="15" ry="13" fill="${c}"/>` +
    `<ellipse cx="12" cy="22" rx="4" ry="6" fill="${a}" transform="rotate(-5 12 22)"/>` +
    `<ellipse cx="36" cy="22" rx="4" ry="6" fill="${a}" transform="rotate(5 36 22)"/>` +
    `<ellipse cx="24" cy="31" rx="7" ry="5" fill="${a}" opacity="0.5"/>` +
    `<circle cx="19" cy="22" r="2.5" fill="#FFF"/><circle cx="29" cy="22" r="2.5" fill="#FFF"/>` +
    `<circle cx="19.5" cy="22" r="1.5" fill="#2B1810"/><circle cx="29.5" cy="22" r="1.5" fill="#2B1810"/>` +
    `<ellipse cx="24" cy="28" rx="3" ry="2.5" fill="#2B1810"/>` +
    `<path d="M20,32 Q24,35 28,32" stroke="#2B1810" stroke-width="0.8" fill="none"/>`,

  collie: (c, a) =>
    `<ellipse cx="24" cy="26" rx="10" ry="11" fill="${c}"/>` +
    `<path d="M15,22 L12,10 L20,19Z" fill="${c}"/><path d="M33,22 L36,10 L28,19Z" fill="${c}"/>` +
    `<path d="M17,20 L15,14 L19,19Z" fill="${a}" opacity="0.4"/><path d="M31,20 L33,14 L29,19Z" fill="${a}" opacity="0.4"/>` +
    `<ellipse cx="24" cy="31" rx="5" ry="4" fill="${a}" opacity="0.5"/>` +
    `<circle cx="20" cy="24" r="2" fill="#FFF"/><circle cx="28" cy="24" r="2" fill="#FFF"/>` +
    `<circle cx="20.5" cy="24" r="1.2" fill="#2B1810"/><circle cx="28.5" cy="24" r="1.2" fill="#2B1810"/>` +
    `<ellipse cx="24" cy="28.5" rx="2" ry="1.5" fill="#2B1810"/>` +
    `<path d="M22,32 Q24,34 26,32" stroke="#2B1810" stroke-width="0.7" fill="none"/>`,

  poodle: (c, a) =>
    `<circle cx="24" cy="27" r="11" fill="${c}"/>` +
    `<circle cx="24" cy="14" r="7" fill="${c}"/>` +
    `<ellipse cx="14" cy="28" rx="4.5" ry="6" fill="${a}" opacity="0.7"/>` +
    `<ellipse cx="34" cy="28" rx="4.5" ry="6" fill="${a}" opacity="0.7"/>` +
    `<ellipse cx="24" cy="31" rx="4.5" ry="3" fill="#F5E6D0" opacity="0.5"/>` +
    `<circle cx="20" cy="25" r="2" fill="#FFF"/><circle cx="28" cy="25" r="2" fill="#FFF"/>` +
    `<circle cx="20.5" cy="25" r="1.2" fill="#2B1810"/><circle cx="28.5" cy="25" r="1.2" fill="#2B1810"/>` +
    `<ellipse cx="24" cy="29" rx="2" ry="1.5" fill="#2B1810"/>`,

  dachshund: (c, a) =>
    `<ellipse cx="24" cy="22" rx="10" ry="9" fill="${c}"/>` +
    `<ellipse cx="13" cy="25" rx="5" ry="7" fill="${a}" transform="rotate(-8 13 25)"/>` +
    `<ellipse cx="35" cy="25" rx="5" ry="7" fill="${a}" transform="rotate(8 35 25)"/>` +
    `<ellipse cx="24" cy="27" rx="5" ry="4" fill="#F5E6D0" opacity="0.5"/>` +
    `<circle cx="20" cy="20" r="2" fill="#FFF"/><circle cx="28" cy="20" r="2" fill="#FFF"/>` +
    `<circle cx="20.5" cy="20" r="1.2" fill="#2B1810"/><circle cx="28.5" cy="20" r="1.2" fill="#2B1810"/>` +
    `<ellipse cx="24" cy="25" rx="2.5" ry="2" fill="#2B1810"/>` +
    `<path d="M22,28 Q24,30 26,28" stroke="#2B1810" stroke-width="0.7" fill="none"/>` +
    `<ellipse cx="24" cy="37" rx="12" ry="4" fill="${c}" opacity="0.5"/>`,

  corgi: (c, a) =>
    `<ellipse cx="24" cy="28" rx="12" ry="9" fill="${c}"/>` +
    `<path d="M14,25 Q11,6 19,22Z" fill="${c}"/><path d="M34,25 Q37,6 29,22Z" fill="${c}"/>` +
    `<path d="M14,25 Q11,6 19,22" fill="${a}" opacity="0.25"/><path d="M34,25 Q37,6 29,22" fill="${a}" opacity="0.25"/>` +
    `<ellipse cx="24" cy="32" rx="6" ry="3.5" fill="${a}" opacity="0.6"/>` +
    `<circle cx="20" cy="26" r="2.2" fill="#FFF"/><circle cx="28" cy="26" r="2.2" fill="#FFF"/>` +
    `<circle cx="20.5" cy="26" r="1.3" fill="#2B1810"/><circle cx="28.5" cy="26" r="1.3" fill="#2B1810"/>` +
    `<ellipse cx="24" cy="30" rx="2.5" ry="2" fill="#2B1810"/>` +
    `<path d="M22,33 Q24,35 26,33" stroke="#2B1810" stroke-width="0.7" fill="none"/>`,

  mop: (c, a) =>
    `<circle cx="24" cy="24" r="14" fill="${c}"/>` +
    `<circle cx="24" cy="24" r="14" fill="none" stroke="${a}" stroke-width="3" opacity="0.15"/>` +
    `<ellipse cx="24" cy="22" rx="14" ry="12" fill="${c}"/>` +
    `<path d="M10,20 Q12,35 16,38 Q20,36 24,38 Q28,36 32,38 Q36,35 38,20" fill="${c}" opacity="0.8"/>` +
    `<circle cx="20" cy="23" r="2.5" fill="#FFF"/><circle cx="28" cy="23" r="2.5" fill="#FFF"/>` +
    `<circle cx="20.5" cy="23" r="1.5" fill="#2B1810"/><circle cx="28.5" cy="23" r="1.5" fill="#2B1810"/>` +
    `<ellipse cx="24" cy="28" rx="2" ry="1.5" fill="#2B1810"/>`,

  hairless: (c, a) =>
    `<ellipse cx="24" cy="26" rx="10" ry="11" fill="${c}"/>` +
    `<path d="M14,22 Q12,6 19,20Z" fill="${c}"/><path d="M34,22 Q36,6 29,20Z" fill="${c}"/>` +
    `<path d="M14,22 Q12,6 19,20" fill="${a}" opacity="0.4"/><path d="M34,22 Q36,6 29,20" fill="${a}" opacity="0.4"/>` +
    `<ellipse cx="24" cy="30" rx="4.5" ry="3" fill="${a}" opacity="0.4"/>` +
    `<circle cx="20" cy="24" r="2.3" fill="#FFF"/><circle cx="28" cy="24" r="2.3" fill="#FFF"/>` +
    `<circle cx="20.5" cy="24" r="1.4" fill="#2B1810"/><circle cx="28.5" cy="24" r="1.4" fill="#2B1810"/>` +
    `<ellipse cx="24" cy="28.5" rx="2" ry="1.5" fill="#2B1810"/>` +
    `<path d="M22,31 Q24,33 26,31" stroke="#2B1810" stroke-width="0.7" fill="none"/>`,
};


class BreedHuntGame {
  constructor() {
    this.state = this.loadState();
    this.activeSightings = [];
    this.sightingTimer = null;
    this.sightingIdCounter = 0;
    this.currentView = 'explore';
    this.catchingBreed = null;
    this.catchingSighting = null;
    this.catchPhase = 'idle'; // 'idle' | 'approaching' | 'result'
    this.catchResult = null;
    this.approachDuration = 2000;
    this.notifications = [];
    this.leaderboard = this.generateLeaderboard();
    this._renderedSightingUids = new Set(); // Track rendered sightings for flicker prevention
  }

  getDefaultState() {
    return {
      playerName: '',
      level: 1,
      totalPoints: 0,
      totalCatches: 0,
      collection: {},        // { breedId: { count, firstCaught } }
      catchStreak: 0,
      longestStreak: 0,
      dailyBonusClaimed: null,
      achievements: [],
      settings: { sound: true, notifications: true, vibration: true },
    };
  }

  loadState() {
    try {
      const saved = localStorage.getItem('fi-find-state');
      if (saved) {
        return { ...this.getDefaultState(), ...JSON.parse(saved) };
      }
    } catch (e) { /* ignore */ }
    return this.getDefaultState();
  }

  saveState() {
    try {
      localStorage.setItem('fi-find-state', JSON.stringify(this.state));
    } catch (e) { /* ignore */ }
  }

  // === LEVEL SYSTEM ===
  getLevel() {
    const pts = this.state.totalPoints;
    if (pts >= 50000) return { level: 20, title: 'Breed Master', next: Infinity };
    if (pts >= 35000) return { level: 18, title: 'Dog Whisperer', next: 50000 };
    if (pts >= 25000) return { level: 16, title: 'Pack Leader', next: 35000 };
    if (pts >= 18000) return { level: 14, title: 'Alpha Spotter', next: 25000 };
    if (pts >= 12000) return { level: 12, title: 'Expert Tracker', next: 18000 };
    if (pts >= 8000) return { level: 10, title: 'Breed Enthusiast', next: 12000 };
    if (pts >= 5000) return { level: 8, title: 'Keen Observer', next: 8000 };
    if (pts >= 3000) return { level: 6, title: 'Dog Spotter', next: 5000 };
    if (pts >= 1500) return { level: 4, title: 'Puppy Scout', next: 3000 };
    if (pts >= 500) return { level: 2, title: 'Curious Walker', next: 1500 };
    return { level: 1, title: 'New Explorer', next: 500 };
  }

  getLevelProgress() {
    const pts = this.state.totalPoints;
    const levels = [0, 500, 1500, 3000, 5000, 8000, 12000, 18000, 25000, 35000, 50000];
    const idx = levels.findIndex(l => l > pts);
    const prev = idx > 0 ? levels[idx - 1] : 0;
    const next = idx >= 0 ? levels[idx] : 50000;
    return (pts - prev) / (next - prev);
  }

  // === PROXIMITY: 15ft range check ===
  // Range radius in map % units — sightings within this distance from center (50,50) are in range
  static RANGE_RADIUS = 21;

  isInRange(x, y) {
    const dx = x - 50;
    const dy = y - 50;
    return Math.sqrt(dx * dx + dy * dy) <= BreedHuntGame.RANGE_RADIUS;
  }

  // === Fi GPS SIGHTINGS SYSTEM ===
  startSightings() {
    this.generateSightings();
    this.sightingTimer = setInterval(() => this.generateSightings(), 8000);
  }

  stopSightings() {
    if (this.sightingTimer) clearInterval(this.sightingTimer);
  }

  generateSightings() {
    const now = Date.now();
    // Remove expired sightings (30s lifespan)
    this.activeSightings = this.activeSightings.filter(s => now - s.createdAt < 30000);

    // Keep max 8 active sightings
    if (this.activeSightings.length >= 8) return;

    const slotsToFill = Math.min(2, 8 - this.activeSightings.length);
    let added = false;

    for (let i = 0; i < slotsToFill; i++) {
      const breed = this.rollBreed();
      if (breed) {
        this.sightingIdCounter++;
        const fiDogId = String(1000 + Math.floor(Math.random() * 9000));
        const msgIdx = Math.floor(Math.random() * SIGHTING_MESSAGES.length);

        let x, y;
        // ~60% of spawns within range, ~40% outside (visible but locked)
        const spawnNear = Math.random() < 0.6;
        if (spawnNear) {
          // Spawn within range circle (radius 21 from center), but not on top of player (min 8)
          const angle = Math.random() * Math.PI * 2;
          const r = 8 + Math.random() * (BreedHuntGame.RANGE_RADIUS - 8);
          x = 50 + Math.cos(angle) * r;
          y = 50 + Math.sin(angle) * r;
        } else {
          // Spawn outside range circle
          do {
            x = 5 + Math.random() * 90;
            y = 5 + Math.random() * 90;
          } while (this.isInRange(x, y)); // keep rolling until outside range
        }
        // Clamp to map bounds
        x = Math.max(5, Math.min(95, x));
        y = Math.max(5, Math.min(95, y));

        this.activeSightings.unshift({
          breed,
          uid: 'sighting_' + this.sightingIdCounter,
          createdAt: now,
          distance: (0.1 + Math.random() * 1.9).toFixed(1),
          fiDogId,
          message: SIGHTING_MESSAGES[msgIdx],
          x, y,
        });
        added = true;
      }
    }

    // Only re-render if sightings changed and we're on explore view
    if (added && this.currentView === 'explore') {
      this.render();
    }
  }

  rollBreed() {
    const roll = Math.random();
    let cumulative = 0;
    let selectedRarity = 'COMMON';

    for (const [rarity, rate] of Object.entries(SPAWN_RATES)) {
      cumulative += rate;
      if (roll <= cumulative) {
        selectedRarity = rarity;
        break;
      }
    }

    const rarityBreeds = BREEDS.filter(b => b.rarity === selectedRarity);
    if (rarityBreeds.length === 0) return null;
    return rarityBreeds[Math.floor(Math.random() * rarityBreeds.length)];
  }

  // === PROXIMITY COLLECTION MECHANIC ===
  startCatch(sightingUid) {
    const sighting = this.activeSightings.find(s => s.uid === sightingUid);
    if (!sighting || this.catchPhase !== 'idle') return;

    // Must be within 15ft range on the map to approach
    if (!this.isInRange(sighting.x, sighting.y)) {
      this.showNotification('Too far! Walk within range to spot this dog.', 'warning');
      return;
    }

    this.catchingBreed = sighting.breed;
    this.catchingSighting = sighting;
    this.catchPhase = 'approaching';
    this.catchResult = null;
    this.currentView = 'catching';

    // Approach duration based on distance: closer = faster (1.5s to 3s range)
    const dist = parseFloat(sighting.distance);
    this.approachDuration = Math.round(1500 + dist * 800);
    this.approachStartTime = Date.now();

    this.render();

    // Resolve after approach
    setTimeout(() => {
      const breed = this.catchingBreed;
      if (!breed) return;

      const fleeRate = VERIFY_DIFFICULTY[breed.rarity];
      const fled = Math.random() < fleeRate;

      if (fled) {
        this.catchResult = 'fled';
        this.catchPhase = 'result';
        this.state.catchStreak = 0;
        this.saveState();
        this.render();
      } else {
        // Spotted!
        const rarityInfo = RARITY[breed.rarity];
        let points = rarityInfo.points;

        // Streak bonus
        this.state.catchStreak++;
        if (this.state.catchStreak > this.state.longestStreak) {
          this.state.longestStreak = this.state.catchStreak;
        }
        const streakBonus = Math.min(this.state.catchStreak - 1, 10) * 0.1;
        points = Math.round(points * (1 + streakBonus));

        // First find bonus
        const isNew = !this.state.collection[breed.id];
        if (isNew) points *= 2;

        this.state.totalPoints += points;
        this.state.totalCatches++;

        if (!this.state.collection[breed.id]) {
          this.state.collection[breed.id] = {
            count: 0,
            firstCaught: Date.now(),
          };
        }
        this.state.collection[breed.id].count++;

        // Remove sighting from map
        this.activeSightings = this.activeSightings.filter(
          s => s.uid !== this.catchingSighting.uid
        );

        this.catchResult = 'found';
        this.catchResultPoints = points;
        this.catchResultIsNew = isNew;
        this.catchResultStreak = this.state.catchStreak;
        this.catchResultStreakBonus = streakBonus;
        this.catchPhase = 'result';

        this.checkAchievements();
        this.saveState();
        this.render();
      }
    }, this.approachDuration);
  }

  dismissCatch() {
    this.catchingBreed = null;
    this.catchingSighting = null;
    this.catchPhase = 'idle';
    this.catchResult = null;
    this.currentView = 'explore';
    this.render();
  }

  cancelCatch() {
    this.catchingBreed = null;
    this.catchingSighting = null;
    this.catchPhase = 'idle';
    this.catchResult = null;
    this.currentView = 'explore';
    this.render();
  }

  // === NOTIFICATIONS ===
  showNotification(message, type = 'info') {
    const id = Date.now();
    this.notifications.push({ id, message, type });
    setTimeout(() => {
      this.notifications = this.notifications.filter(n => n.id !== id);
      this.render();
    }, 3000);
  }

  // === ACHIEVEMENTS ===
  checkAchievements() {
    const earned = [];
    const c = this.state.collection;
    const totalUnique = Object.keys(c).length;

    const checks = [
      { id: 'first_catch', name: 'First Steps', desc: 'Spot your first breed', check: () => this.state.totalCatches >= 1 },
      { id: 'catch_10', name: 'Getting Started', desc: 'Spot 10 breeds', check: () => this.state.totalCatches >= 10 },
      { id: 'catch_50', name: 'Dedicated Spotter', desc: 'Spot 50 breeds', check: () => this.state.totalCatches >= 50 },
      { id: 'catch_100', name: 'Breed Collector', desc: 'Spot 100 breeds', check: () => this.state.totalCatches >= 100 },
      { id: 'unique_10', name: 'Variety Pack', desc: 'Discover 10 unique breeds', check: () => totalUnique >= 10 },
      { id: 'unique_25', name: 'Breed Buff', desc: 'Discover 25 unique breeds', check: () => totalUnique >= 25 },
      { id: 'unique_50', name: 'Encyclopedia', desc: 'Discover 50 unique breeds', check: () => totalUnique >= 50 },
      { id: 'unique_75', name: 'Breed Master', desc: 'Discover all 75 breeds', check: () => totalUnique >= 75 },
      { id: 'streak_5', name: 'Hot Streak', desc: 'Spot 5 breeds in a row', check: () => this.state.longestStreak >= 5 },
      { id: 'streak_10', name: 'Unstoppable', desc: 'Spot 10 breeds in a row', check: () => this.state.longestStreak >= 10 },
      { id: 'catch_mythic', name: 'Myth Buster', desc: 'Spot a Mythic breed', check: () => BREEDS.filter(b => b.rarity === 'MYTHIC').some(b => c[b.id]) },
      { id: 'catch_legendary', name: 'Living Legend', desc: 'Spot a Legendary breed', check: () => BREEDS.filter(b => b.rarity === 'LEGENDARY').some(b => c[b.id]) },
      { id: 'points_1000', name: 'Point Hound', desc: 'Earn 1,000 points', check: () => this.state.totalPoints >= 1000 },
      { id: 'points_10000', name: 'Top Dog', desc: 'Earn 10,000 points', check: () => this.state.totalPoints >= 10000 },
      { id: 'points_50000', name: 'Grand Champion', desc: 'Earn 50,000 points', check: () => this.state.totalPoints >= 50000 },
    ];

    for (const ach of checks) {
      if (!this.state.achievements.includes(ach.id) && ach.check()) {
        this.state.achievements.push(ach.id);
        earned.push(ach);
        this.showNotification(`Achievement: ${ach.name}!`, 'achievement');
      }
    }
    return earned;
  }

  getAchievements() {
    return [
      { id: 'first_catch', name: 'First Steps', desc: 'Spot your first breed', icon: '1' },
      { id: 'catch_10', name: 'Getting Started', desc: 'Spot 10 breeds', icon: '10' },
      { id: 'catch_50', name: 'Dedicated Spotter', desc: 'Spot 50 breeds', icon: '50' },
      { id: 'catch_100', name: 'Breed Collector', desc: 'Spot 100 breeds', icon: '100' },
      { id: 'unique_10', name: 'Variety Pack', desc: 'Discover 10 unique breeds', icon: 'V' },
      { id: 'unique_25', name: 'Breed Buff', desc: 'Discover 25 unique breeds', icon: 'B' },
      { id: 'unique_50', name: 'Encyclopedia', desc: 'Discover 50 unique breeds', icon: 'E' },
      { id: 'unique_75', name: 'Breed Master', desc: 'Discover all 75 breeds', icon: 'M' },
      { id: 'streak_5', name: 'Hot Streak', desc: 'Spot 5 breeds in a row', icon: '5x' },
      { id: 'streak_10', name: 'Unstoppable', desc: 'Spot 10 breeds in a row', icon: '10x' },
      { id: 'catch_mythic', name: 'Myth Buster', desc: 'Spot a Mythic breed', icon: '!!' },
      { id: 'catch_legendary', name: 'Living Legend', desc: 'Spot a Legendary breed', icon: 'L' },
      { id: 'points_1000', name: 'Point Hound', desc: 'Earn 1,000 points', icon: '1K' },
      { id: 'points_10000', name: 'Top Dog', desc: 'Earn 10,000 points', icon: '10K' },
      { id: 'points_50000', name: 'Grand Champion', desc: 'Earn 50,000 points', icon: '50K' },
    ];
  }

  // === LEADERBOARD (simulated) ===
  generateLeaderboard() {
    const names = [
      'MaxsHuman', 'BellaWalker', 'CoopersMom', 'LunaLover', 'CharliesPal',
      'DaisyTracker', 'BuddyFinder', 'SadieScout', 'RockyRanger', 'TuckerFan',
      'BearHunter', 'DukeSpotter', 'MollySeeker', 'BaileyPro', 'ZoeChaser',
      'OscarTrail', 'WinstonWalk', 'PennyPath', 'HarleyHike', 'RubyRover',
    ];
    return names.map((name, i) => ({
      rank: i + 1,
      name,
      points: Math.max(500, Math.round(50000 * Math.pow(0.82, i))),
      catches: Math.max(10, Math.round(200 * Math.pow(0.85, i))),
      uniqueBreeds: Math.max(5, Math.round(60 * Math.pow(0.88, i))),
    })).sort((a, b) => b.points - a.points);
  }

  getPlayerRank() {
    const pts = this.state.totalPoints;
    return this.leaderboard.filter(p => p.points > pts).length + 1;
  }

  // === BREED-SPECIFIC DOG ILLUSTRATION ===
  getDogSVG(breedId, rarity, size = 48) {
    const colors = RARITY[rarity];
    const vis = BREED_VISUALS[breedId] || ['retriever', '#B0A080', '#908060'];
    const [templateName, mainColor, accentColor] = vis;
    const templateFn = DOG_TEMPLATES[templateName] || DOG_TEMPLATES.retriever;
    const content = templateFn(mainColor, accentColor);

    return `<svg viewBox="0 0 48 48" width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="23" fill="${colors.bgColor}" stroke="${colors.color}" stroke-width="1.5" opacity="0.3"/>
      ${content}
    </svg>`;
  }

  getRarityGlow(rarity) {
    const glows = {
      COMMON: 'none',
      UNCOMMON: '0 0 8px rgba(76,175,80,0.4)',
      RARE: '0 0 12px rgba(33,150,243,0.5)',
      EPIC: '0 0 16px rgba(156,39,176,0.6)',
      LEGENDARY: '0 0 20px rgba(255,152,0,0.7), 0 0 40px rgba(255,152,0,0.3)',
      MYTHIC: '0 0 24px rgba(233,30,99,0.8), 0 0 48px rgba(233,30,99,0.4), 0 0 72px rgba(233,30,99,0.2)',
    };
    return glows[rarity] || 'none';
  }

  // === RENDER ENGINE ===
  render() {
    const app = document.getElementById('app');
    if (!app) return;

    if (!this.state.playerName) {
      app.innerHTML = this.renderOnboarding();
      return;
    }

    let html = '';
    html += this.renderHeader();

    switch (this.currentView) {
      case 'explore': html += this.renderExploreView(); break;
      case 'catching': html += this.renderCatchView(); break;
      case 'pokedex': html += this.renderPokedexView(); break;
      case 'leaderboard': html += this.renderLeaderboardView(); break;
      case 'profile': html += this.renderProfileView(); break;
      case 'breed-detail': html += this.renderBreedDetailView(); break;
    }

    html += this.renderNavBar();
    html += this.renderNotifications();

    app.innerHTML = html;
    this.attachEventListeners();
  }

  // === ONBOARDING ===
  renderOnboarding() {
    return `
    <div class="onboarding">
      <div class="onboarding-content">
        <div class="fi-logo-large">
          <svg viewBox="0 0 60 60" width="80" height="80">
            <circle cx="30" cy="30" r="28" fill="#FFD54F" stroke="#1A1A2E" stroke-width="2"/>
            <text x="30" y="38" text-anchor="middle" font-size="24" font-weight="bold" fill="#1A1A2E" font-family="system-ui">Fi</text>
          </svg>
        </div>
        <h1 class="onboarding-title">FiND</h1>
        <p class="onboarding-subtitle">by Fi</p>
        <p class="onboarding-desc">Explore the map, find dogs tracked by Fi GPS, and walk within range to identify the breed! Earn points based on rarity and compete with other Fi members.</p>

        <div class="rarity-preview">
          <div class="rarity-tier" style="color: ${RARITY.COMMON.color}"><span class="rarity-dot" style="background: ${RARITY.COMMON.color}"></span> Common - ${RARITY.COMMON.points} pts</div>
          <div class="rarity-tier" style="color: ${RARITY.UNCOMMON.color}"><span class="rarity-dot" style="background: ${RARITY.UNCOMMON.color}"></span> Uncommon - ${RARITY.UNCOMMON.points} pts</div>
          <div class="rarity-tier" style="color: ${RARITY.RARE.color}"><span class="rarity-dot" style="background: ${RARITY.RARE.color}"></span> Rare - ${RARITY.RARE.points} pts</div>
          <div class="rarity-tier" style="color: ${RARITY.EPIC.color}"><span class="rarity-dot" style="background: ${RARITY.EPIC.color}"></span> Epic - ${RARITY.EPIC.points} pts</div>
          <div class="rarity-tier" style="color: ${RARITY.LEGENDARY.color}"><span class="rarity-dot" style="background: ${RARITY.LEGENDARY.color}"></span> Legendary - ${RARITY.LEGENDARY.points} pts</div>
          <div class="rarity-tier" style="color: ${RARITY.MYTHIC.color}"><span class="rarity-dot" style="background: ${RARITY.MYTHIC.color}"></span> Mythic - ${RARITY.MYTHIC.points} pts</div>
        </div>

        <div class="onboarding-input-group">
          <label>Your Name</label>
          <input type="text" id="player-name" placeholder="Enter your name..." maxlength="20" />
        </div>
        <button class="btn-primary" onclick="game.setPlayerName()">Start searching</button>
      </div>
    </div>`;
  }

  setPlayerName() {
    const input = document.getElementById('player-name');
    const name = input?.value?.trim();
    if (!name) return;
    this.state.playerName = name;
    this.saveState();
    this.startSightings();
    this.render();
  }

  // === HEADER ===
  renderHeader() {
    const levelInfo = this.getLevel();
    const progress = this.getLevelProgress();
    return `
    <header class="game-header">
      <div class="header-left">
        <div class="fi-badge">Fi</div>
        <div class="header-info">
          <div class="header-title">FiND</div>
          <div class="header-level">Lv.${levelInfo.level} ${levelInfo.title}</div>
        </div>
      </div>
      <div class="header-right">
        <div class="header-points">${this.state.totalPoints.toLocaleString()} pts</div>
        <div class="header-streak">${this.state.catchStreak}x streak</div>
      </div>
    </header>
    <div class="level-bar">
      <div class="level-bar-fill" style="width: ${(progress * 100).toFixed(1)}%"></div>
    </div>`;
  }

  // === EXPLORE VIEW: Map with Breed Bubbles ===
  renderExploreView() {
    const now = Date.now();
    const currentUids = new Set();

    // Map breed bubbles
    let bubblesHtml = '';
    for (const sighting of this.activeSightings) {
      const breed = sighting.breed;
      const rarityInfo = RARITY[breed.rarity];
      const age = now - sighting.createdAt;
      const lifePercent = Math.max(0, 1 - (age / 30000));
      const isNew = !this.state.collection[breed.id];
      const rarityClass = breed.rarity.toLowerCase();
      // Only add entrance animation for sightings we haven't rendered before
      const isNewSpawn = !this._renderedSightingUids.has(sighting.uid);
      const animClass = isNewSpawn ? 'spawn-new' : '';
      currentUids.add(sighting.uid);

      const inRange = this.isInRange(sighting.x, sighting.y);
      const rangeClass = inRange ? '' : 'out-of-range';

      bubblesHtml += `
      <div class="spawn-breed ${rarityClass} ${animClass} ${rangeClass}" data-uid="${sighting.uid}"
           onclick="game.startCatch('${sighting.uid}')"
           style="left: ${sighting.x}%; top: ${sighting.y}%; box-shadow: 0 2px 12px ${rarityInfo.color}33;">
        <div class="spawn-icon">${this.getDogSVG(breed.id, breed.rarity, 36)}</div>
        <div class="spawn-name" style="color: ${rarityInfo.color}">${breed.name}</div>
        <div class="spawn-rarity" style="color: ${rarityInfo.color}">${inRange ? rarityInfo.points + ' pts' : 'Too far'}</div>
        ${isNew && inRange ? '<span class="spawn-new-badge">NEW</span>' : ''}
        <div class="spawn-timer-bar">
          <div class="spawn-timer-fill" style="width: ${lifePercent * 100}%; transition: width 3s linear;"></div>
        </div>
      </div>`;
    }

    // Update tracked sighting UIDs
    this._renderedSightingUids = currentUids;

    // Empty state
    const emptyState = this.activeSightings.length === 0 ? `
    <div class="explore-empty">
      <div class="explore-empty-icon">
        <svg viewBox="0 0 64 64" width="48" height="48">
          <circle cx="32" cy="32" r="28" fill="none" stroke="#ccc" stroke-width="2" stroke-dasharray="4 4">
            <animateTransform attributeName="transform" type="rotate" values="0 32 32;360 32 32" dur="20s" repeatCount="indefinite"/>
          </circle>
          <text x="32" y="38" text-anchor="middle" font-size="20" fill="#999">?</text>
        </svg>
      </div>
      <p>Scanning for nearby Fi dogs...</p>
      <p class="explore-hint">New sightings will appear shortly</p>
    </div>` : '';

    return `
    <div class="explore-view">
      <div class="explore-map">
        <div class="map-grid"></div>
        <div class="map-range-circle"></div>
        <div class="map-range-label">15 ft range</div>
        <div class="map-player">
          <div class="player-pulse"></div>
          <div class="player-dot"></div>
        </div>
        ${bubblesHtml}
        ${emptyState}
        <div class="map-privacy-tag">
          <svg viewBox="0 0 16 16" width="10" height="10" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="7" width="10" height="7" rx="1.5"/><path d="M5 7V5a3 3 0 016 0v2"/></svg>
          Anonymized Fi GPS
        </div>
      </div>
      <div class="explore-stats-bar">
        <div class="stat-chip">
          <span class="stat-label">Nearby</span>
          <span class="stat-value">${this.activeSightings.length}</span>
        </div>
        <div class="stat-chip">
          <span class="stat-label">Spotted</span>
          <span class="stat-value">${this.state.totalCatches}</span>
        </div>
        <div class="stat-chip">
          <span class="stat-label">Unique</span>
          <span class="stat-value">${Object.keys(this.state.collection).length}/${BREEDS.length}</span>
        </div>
      </div>
    </div>`;
  }

  // Lightweight update for explore view - only updates timer bars without full re-render
  updateExploreTickers() {
    const now = Date.now();
    let needsFullRender = false;

    // Update timer bars
    for (const sighting of this.activeSightings) {
      const age = now - sighting.createdAt;
      if (age >= 30000) {
        needsFullRender = true; // Sighting expired, need full re-render
        continue;
      }
      const lifePercent = Math.max(0, 1 - (age / 30000));
      const el = document.querySelector(`[data-uid="${sighting.uid}"] .spawn-timer-fill`);
      if (el) {
        el.style.width = `${lifePercent * 100}%`;
      }
    }

    // Update nearby count
    const nearbyEl = document.querySelector('.stat-chip .stat-value');
    if (nearbyEl) {
      nearbyEl.textContent = this.activeSightings.length;
    }

    if (needsFullRender) {
      // Clean up expired sightings and re-render
      this.activeSightings = this.activeSightings.filter(s => now - s.createdAt < 30000);
      this.render();
    }
  }

  // === CATCH VIEW: Proximity Approach + Result ===
  renderCatchView() {
    if (!this.catchingBreed) return '';
    const breed = this.catchingBreed;
    const rarityInfo = RARITY[breed.rarity];
    const sighting = this.catchingSighting;

    let content = '';

    if (this.catchPhase === 'approaching') {
      const dist = sighting ? sighting.distance : '0.5';
      content = `
      <div class="approach-area">
        <div class="approach-dog">${this.getDogSVG(breed.id, breed.rarity, 120)}</div>
        <div class="approach-status">
          <div class="approach-breed-tag" style="color: ${rarityInfo.color}">
            <span class="approach-rarity-badge" style="background: ${rarityInfo.color}">${rarityInfo.name}</span>
            ${breed.name}
          </div>
          <div class="approach-distance-bar">
            <div class="approach-distance-fill" style="animation-duration: ${this.approachDuration}ms"></div>
            <span class="approach-distance-text">${dist} mi</span>
            <span class="approach-distance-target">15 ft</span>
          </div>
          <p class="approach-text">Walking towards ${breed.name}...</p>
          <div class="approach-dots"><span></span><span></span><span></span></div>
        </div>
      </div>`;
    }

    else if (this.catchPhase === 'result' && this.catchResult === 'found') {
      const msgs = FOUND_MESSAGES[breed.rarity] || FOUND_MESSAGES.COMMON;
      const exciteMsg = msgs[Math.floor(Math.random() * msgs.length)];
      const totalUnique = Object.keys(this.state.collection).length;
      const isRareOrBetter = ['RARE', 'EPIC', 'LEGENDARY', 'MYTHIC'].includes(breed.rarity);

      content = `
      <div class="catch-result-overlay verified-overlay">
        ${isRareOrBetter ? '<div class="confetti-burst"></div>' : ''}
        <div class="result-content">
          <div class="result-breed-icon">${this.getDogSVG(breed.id, breed.rarity, 80)}</div>
          <div class="result-rarity-badge" style="background: ${rarityInfo.color}">${rarityInfo.name}</div>
          <h2 class="result-title">${this.catchResultIsNew ? 'New Breed Found!' : exciteMsg}</h2>
          <div class="result-breed-name">${breed.name}</div>
          <div class="result-points-big">+${this.catchResultPoints}</div>
          ${this.catchResultStreakBonus > 0 ? `<div class="result-streak">${this.catchResultStreak}x Streak Bonus!</div>` : ''}
          <div class="result-fun-fact">"${breed.funFact}"</div>
          <div class="result-collection-progress">${totalUnique} / ${BREEDS.length} breeds discovered</div>
          <button class="btn-back-to-map" onclick="game.dismissCatch()">Continue Exploring</button>
        </div>
      </div>`;
    }

    else if (this.catchPhase === 'result' && this.catchResult === 'fled') {
      content = `
      <div class="catch-result-overlay fled-overlay">
        <div class="result-content">
          <div class="result-breed-icon fled-icon">${this.getDogSVG(breed.id, breed.rarity, 80)}</div>
          <h2 class="result-title">Got Away!</h2>
          <div class="result-breed-name">The ${breed.name} ran off before you got close enough</div>
          <p class="result-hint">Rarer breeds are harder to approach. Keep exploring!</p>
          <button class="btn-back-to-map" onclick="game.dismissCatch()">Back to Map</button>
        </div>
      </div>`;
    }

    return `
    <div class="catch-view">
      <div class="catch-backdrop ${breed.rarity.toLowerCase()}"></div>
      ${this.catchPhase === 'approaching' ? `<button class="catch-back" onclick="game.cancelCatch()">Back</button>` : ''}
      ${content}
    </div>`;
  }

  // === POKEDEX VIEW ===
  renderPokedexView() {
    const filterRarities = ['ALL', ...Object.keys(RARITY)];
    const activeFilter = this._pokedexFilter || 'ALL';

    let filteredBreeds = BREEDS;
    if (activeFilter !== 'ALL') {
      filteredBreeds = BREEDS.filter(b => b.rarity === activeFilter);
    }

    const totalCaught = Object.keys(this.state.collection).length;
    const totalBreeds = BREEDS.length;

    let breedCards = '';
    for (const breed of filteredBreeds) {
      const caught = this.state.collection[breed.id];
      const rarityInfo = RARITY[breed.rarity];

      if (caught) {
        breedCards += `
        <div class="pokedex-card caught ${breed.rarity.toLowerCase()}" onclick="game.showBreedDetail(${breed.id})">
          <div class="pokedex-card-icon">${this.getDogSVG(breed.id, breed.rarity, 40)}</div>
          <div class="pokedex-card-info">
            <div class="pokedex-card-name">${breed.name}</div>
            <div class="pokedex-card-rarity" style="color: ${rarityInfo.color}">${rarityInfo.name} - ${rarityInfo.points} pts</div>
          </div>
          <div class="pokedex-card-count">x${caught.count}</div>
        </div>`;
      } else {
        breedCards += `
        <div class="pokedex-card unknown">
          <div class="pokedex-card-icon">
            <svg viewBox="0 0 40 40" width="40" height="40">
              <circle cx="20" cy="20" r="18" fill="#E0E0E0" stroke="#CCC" stroke-width="1"/>
              <text x="20" y="26" text-anchor="middle" font-size="16" fill="#999">?</text>
            </svg>
          </div>
          <div class="pokedex-card-info">
            <div class="pokedex-card-name">???</div>
            <div class="pokedex-card-rarity" style="color: ${rarityInfo.color}">${rarityInfo.name}</div>
          </div>
        </div>`;
      }
    }

    const filterChips = filterRarities.map(r => {
      const isActive = r === activeFilter;
      const style = r === 'ALL' ? '' : `color: ${RARITY[r].color}`;
      return `<button class="filter-chip ${isActive ? 'active' : ''}" style="${style}"
              onclick="game.setPokedexFilter('${r}')">${r === 'ALL' ? 'All' : RARITY[r].name}</button>`;
    }).join('');

    return `
    <div class="pokedex-view">
      <div class="pokedex-header">
        <h2>Breed Collection</h2>
        <div class="pokedex-progress">
          <div class="pokedex-progress-text">${totalCaught} / ${totalBreeds} discovered</div>
          <div class="pokedex-progress-bar">
            <div class="pokedex-progress-fill" style="width: ${(totalCaught / totalBreeds * 100)}%"></div>
          </div>
        </div>
      </div>
      <div class="filter-bar">${filterChips}</div>
      <div class="pokedex-list">${breedCards}</div>
    </div>`;
  }

  setPokedexFilter(filter) {
    this._pokedexFilter = filter;
    this.render();
  }

  showBreedDetail(breedId) {
    this._detailBreedId = breedId;
    this.currentView = 'breed-detail';
    this.render();
  }

  renderBreedDetailView() {
    const breed = BREEDS.find(b => b.id === this._detailBreedId);
    if (!breed) return '';
    const rarityInfo = RARITY[breed.rarity];
    const caught = this.state.collection[breed.id];
    const glow = this.getRarityGlow(breed.rarity);

    return `
    <div class="breed-detail-view">
      <button class="detail-back" onclick="game.currentView='pokedex'; game.render();">Back</button>
      <div class="detail-card" style="box-shadow: ${glow}">
        <div class="detail-icon">${this.getDogSVG(breed.id, breed.rarity, 100)}</div>
        <div class="detail-rarity-badge" style="background: ${rarityInfo.color}">${rarityInfo.name}</div>
        <h2 class="detail-name">${breed.name}</h2>
        <p class="detail-desc">${breed.description}</p>
        <div class="detail-fact">
          <div class="detail-fact-label">Fun Fact</div>
          <p>${breed.funFact}</p>
        </div>
        <div class="detail-stats">
          <div class="detail-stat">
            <div class="detail-stat-value" style="color: ${rarityInfo.color}">${rarityInfo.points}</div>
            <div class="detail-stat-label">Points</div>
          </div>
          <div class="detail-stat">
            <div class="detail-stat-value">${caught ? caught.count : 0}</div>
            <div class="detail-stat-label">Spotted</div>
          </div>
          <div class="detail-stat">
            <div class="detail-stat-value">${Math.round(VERIFY_DIFFICULTY[breed.rarity] * 100)}%</div>
            <div class="detail-stat-label">Flee Rate</div>
          </div>
        </div>
        ${caught ? `<div class="detail-first-caught">First spotted: ${new Date(caught.firstCaught).toLocaleDateString()}</div>` : ''}
      </div>
    </div>`;
  }

  // === LEADERBOARD VIEW ===
  renderLeaderboardView() {
    const playerRank = this.getPlayerRank();
    let rows = '';

    const allEntries = [...this.leaderboard];
    const playerEntry = {
      rank: playerRank,
      name: `${this.state.playerName} (You)`,
      points: this.state.totalPoints,
      catches: this.state.totalCatches,
      uniqueBreeds: Object.keys(this.state.collection).length,
      isPlayer: true,
    };

    allEntries.push(playerEntry);
    allEntries.sort((a, b) => b.points - a.points);
    allEntries.forEach((e, i) => e.rank = i + 1);

    for (const entry of allEntries.slice(0, 20)) {
      const rankClass = entry.rank <= 3 ? `rank-${entry.rank}` : '';
      const playerClass = entry.isPlayer ? 'is-player' : '';
      const medal = entry.rank === 1 ? 'G' : entry.rank === 2 ? 'S' : entry.rank === 3 ? 'B' : '';

      rows += `
      <div class="lb-row ${rankClass} ${playerClass}">
        <div class="lb-rank">
          ${medal ? `<span class="lb-medal ${rankClass}">${medal}</span>` : entry.rank}
        </div>
        <div class="lb-name">${entry.name}</div>
        <div class="lb-stats">
          <span class="lb-points">${entry.points.toLocaleString()} pts</span>
          <span class="lb-catches">${entry.uniqueBreeds} breeds</span>
        </div>
      </div>`;
    }

    return `
    <div class="leaderboard-view">
      <div class="lb-header">
        <h2>Leaderboard</h2>
        <div class="lb-player-rank">Your Rank: #${playerRank}</div>
      </div>
      <div class="lb-list">${rows}</div>
    </div>`;
  }

  // === PROFILE VIEW ===
  renderProfileView() {
    const levelInfo = this.getLevel();
    const progress = this.getLevelProgress();
    const totalUnique = Object.keys(this.state.collection).length;
    const achievements = this.getAchievements();

    let rarityBreakdown = '';
    for (const [key, info] of Object.entries(RARITY)) {
      const total = BREEDS.filter(b => b.rarity === key).length;
      const caught = BREEDS.filter(b => b.rarity === key && this.state.collection[b.id]).length;
      rarityBreakdown += `
      <div class="profile-rarity-row">
        <span class="rarity-dot" style="background: ${info.color}"></span>
        <span class="profile-rarity-name" style="color: ${info.color}">${info.name}</span>
        <span class="profile-rarity-count">${caught}/${total}</span>
        <div class="profile-rarity-bar">
          <div class="profile-rarity-fill" style="width: ${total > 0 ? (caught/total*100) : 0}%; background: ${info.color}"></div>
        </div>
      </div>`;
    }

    let achHtml = '';
    for (const ach of achievements) {
      const earned = this.state.achievements.includes(ach.id);
      achHtml += `
      <div class="ach-badge ${earned ? 'earned' : 'locked'}">
        <div class="ach-icon">${earned ? ach.icon : '?'}</div>
        <div class="ach-name">${earned ? ach.name : '???'}</div>
        <div class="ach-desc">${earned ? ach.desc : 'Keep hunting!'}</div>
      </div>`;
    }

    return `
    <div class="profile-view">
      <div class="profile-card">
        <div class="profile-avatar">
          <svg viewBox="0 0 60 60" width="60" height="60">
            <circle cx="30" cy="30" r="28" fill="#FFD54F"/>
            <text x="30" y="38" text-anchor="middle" font-size="22" font-weight="bold" fill="#1A1A2E">${this.state.playerName.charAt(0).toUpperCase()}</text>
          </svg>
        </div>
        <h2 class="profile-name">${this.state.playerName}</h2>
        <div class="profile-title">${levelInfo.title}</div>
        <div class="profile-level-info">
          <span>Level ${levelInfo.level}</span>
          <div class="profile-level-bar">
            <div class="profile-level-fill" style="width: ${(progress * 100).toFixed(1)}%"></div>
          </div>
          <span>${this.state.totalPoints.toLocaleString()} / ${levelInfo.next === Infinity ? 'MAX' : levelInfo.next.toLocaleString()}</span>
        </div>
      </div>

      <div class="profile-stats-grid">
        <div class="profile-stat-card">
          <div class="profile-stat-value">${this.state.totalPoints.toLocaleString()}</div>
          <div class="profile-stat-label">Total Points</div>
        </div>
        <div class="profile-stat-card">
          <div class="profile-stat-value">${this.state.totalCatches}</div>
          <div class="profile-stat-label">Breeds Spotted</div>
        </div>
        <div class="profile-stat-card">
          <div class="profile-stat-value">${totalUnique}</div>
          <div class="profile-stat-label">Unique Breeds</div>
        </div>
        <div class="profile-stat-card">
          <div class="profile-stat-value">${this.state.longestStreak}</div>
          <div class="profile-stat-label">Best Streak</div>
        </div>
      </div>

      <div class="profile-section">
        <h3>Breed Progress</h3>
        ${rarityBreakdown}
      </div>

      <div class="profile-section">
        <h3>Achievements (${this.state.achievements.length}/${achievements.length})</h3>
        <div class="ach-grid">${achHtml}</div>
      </div>

      <button class="btn-reset" onclick="game.resetGame()">Reset Progress</button>
    </div>`;
  }

  resetGame() {
    if (confirm('Are you sure you want to reset all progress? This cannot be undone!')) {
      localStorage.removeItem('fi-find-state');
      this.state = this.getDefaultState();
      this.activeSightings = [];
      this.currentView = 'explore';
      this.render();
    }
  }

  // === NAV BAR ===
  renderNavBar() {
    if (!this.state.playerName || this.currentView === 'catching') return '';
    const tabs = [
      { id: 'explore', label: 'Sightings', icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36z"/></svg>` },
      { id: 'pokedex', label: 'Collection', icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>` },
      { id: 'leaderboard', label: 'Ranks', icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 21V11M16 21V7M12 21V3"/></svg>` },
      { id: 'profile', label: 'Profile', icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="7" r="4"/><path d="M5.5 21a6.5 6.5 0 0113 0"/></svg>` },
    ];

    const tabsHtml = tabs.map(t => `
      <button class="nav-tab ${this.currentView === t.id ? 'active' : ''}" onclick="game.switchView('${t.id}')">
        ${t.icon}
        <span>${t.label}</span>
      </button>
    `).join('');

    return `<nav class="nav-bar">${tabsHtml}</nav>`;
  }

  switchView(view) {
    this.currentView = view;
    this.render();
  }

  // === NOTIFICATIONS ===
  renderNotifications() {
    if (this.notifications.length === 0) return '';
    return `<div class="notifications">
      ${this.notifications.map(n => `
        <div class="notification ${n.type}">
          <span>${n.message}</span>
        </div>`).join('')}
    </div>`;
  }

  // === EVENT LISTENERS ===
  attachEventListeners() {
    const nameInput = document.getElementById('player-name');
    if (nameInput) {
      nameInput.focus();
      nameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') this.setPlayerName();
      });
    }
  }
}

// Boot game
let game;
document.addEventListener('DOMContentLoaded', () => {
  game = new BreedHuntGame();
  game.render();
  if (game.state.playerName) {
    game.startSightings();
  }

  // Lightweight timer updates every 3s (no full re-render, no flickering)
  setInterval(() => {
    if (game.currentView === 'explore' && game.state.playerName) {
      game.updateExploreTickers();
    }
  }, 3000);
});
