// Canonical solar system data, shared across all scenes.
// Real values: diam (km), au (AU from sun), period (Earth years).
// Each scene computes its own pixel radius/orbit-radius from these —
// rendering choices stay local, but the underlying facts don't.
const SolarData = (() => {
  const SUN = {
    name: 'Sun',
    diam: 1391000,
    isSun: true,
    color: '#ffd93d',
    facts: ["I'm a star, not a planet — but everyone circles around me!"],
  };

  const PLANETS = [
    {
      name: 'Mercury', diam: 4879, au: 0.39, period: 0.24, color: '#b5a49a',
      moons: 0, famousMoons: [],
      facts: [
        "I'm 1st from the sun, and the smallest planet!",
        "I'm the fastest! I zoom all the way around the sun in no time.",
        "I don't have any moons.",
      ],
    },
    {
      name: 'Venus', diam: 12104, au: 0.72, period: 0.62, color: '#e8c27a',
      moons: 0, famousMoons: [],
      facts: [
        "I'm 2nd from the sun.",
        "I'm the hottest planet — even hotter than Mercury!",
        "I spin backwards compared to most planets!",
        "I'm the brightest thing in our night sky, other than the Moon.",
      ],
    },
    {
      name: 'Earth', diam: 12742, au: 1.0, period: 1.0, color: '#4a90d9', isEarth: true,
      moons: 1, famousMoons: ['the Moon'],
      facts: [
        "I'm 3rd from the sun — this is home!",
        "I'm home! I spin around and around while I travel around the sun.",
        "I'm the only planet with lots of liquid water on top!",
        "I have one moon that circles around me.",
      ],
    },
    {
      name: 'Mars', diam: 6779, au: 1.52, period: 1.88, color: '#c1440e',
      moons: 2, famousMoons: ['Phobos', 'Deimos'],
      facts: [
        "I'm 4th from the sun, the red one!",
        "I'm red and dusty!",
        "I have the tallest mountain in the whole solar system!",
        "I have two tiny moons, Phobos and Deimos.",
      ],
    },
    {
      name: 'Jupiter', diam: 139820, au: 5.20, period: 11.86, color: '#d9a066',
      moons: 95, famousMoons: ['Io', 'Europa', 'Ganymede', 'Callisto'],
      facts: [
        "I'm 5th from the sun, and the BIGGEST planet of all!",
        "I have a giant storm bigger than Earth called the Great Red Spot!",
        "I have dozens and dozens of moons!",
      ],
    },
    {
      name: 'Saturn', diam: 116460, au: 9.58, period: 29.4, color: '#e8d5a0', hasRings: true,
      moons: 146, famousMoons: ['Titan', 'Enceladus'],
      facts: [
        "I'm 6th from the sun, with beautiful rings!",
        "My rings are made of ice and rock!",
        "I'm so light I could float in a giant bathtub!",
      ],
    },
    {
      name: 'Uranus', diam: 50724, au: 19.2, period: 83.7, color: '#9fd9d9',
      moons: 28, famousMoons: ['Titania', 'Oberon'],
      facts: [
        "I'm 7th from the sun.",
        "I spin on my side, like a rolling ball!",
        "I'm an icy blue-green color!",
        "I have rings too, just like Saturn — they're just harder to see!",
      ],
    },
    {
      name: 'Neptune', diam: 49244, au: 30.05, period: 163.7, color: '#4166f5',
      moons: 16, famousMoons: ['Triton'],
      facts: [
        "I'm 8th and last from the sun!",
        "I'm icy, windy, and very far away!",
        "I have the strongest winds of any planet!",
        "I take 165 Earth years to go around the sun once!",
      ],
    },
  ];

  return { SUN, PLANETS, ALL: [SUN, ...PLANETS] };
})();
