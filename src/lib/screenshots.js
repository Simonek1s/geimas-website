/**
 * Homepage gallery data for the five unmodified development captures.
 * `speed`, `distance`, and `coins` repeat the HUD values visible in each image,
 * so the site only quotes numbers that a visitor can verify in the original.
 */
export const screenshots = [
  {
    file: '01-open-road.png',
    kicker: 'NO ROAD?',
    title: 'NO PROBLEM.',
    detail: 'The bridge is gone. Send it anyway.',
    speed: '261',
    distance: '725',
    coins: '200',
    theme: 'yellow',
    alt: 'An orange car jumps over a broken section of a bridge at 261 kilometers per hour.'
  },
  {
    file: '02-city.png',
    kicker: 'DODGE. BOOST.',
    title: 'REPEAT.',
    detail: 'Thread the town at full tilt and keep the combo alive.',
    speed: '274',
    distance: '1515',
    coins: '805',
    theme: 'pink',
    alt: 'An orange car boosts along a road through colorful houses at 274 kilometers per hour.'
  },
  {
    file: '03-causeway.png',
    kicker: 'POWER UP.',
    title: 'GET GREEDY.',
    detail: 'Rings, magnets and multipliers. Grab everything.',
    speed: '278',
    distance: '2475',
    coins: '1849',
    theme: 'cyan',
    alt: 'An orange car with glowing power-up rings races past traffic on a broad road at 278 kilometers per hour.'
  },
  {
    file: '04-speed.png',
    kicker: 'FASTER. CLOSER.',
    title: 'NEW RECORD?',
    detail: 'Every meter past your best is bragging rights.',
    speed: '266',
    distance: '3610',
    coins: '5781',
    theme: 'purple',
    alt: 'An orange car boosts along a broad brown road past a green truck at 266 kilometers per hour.'
  },
  {
    file: '05-night.png',
    kicker: 'POLICE!',
    title: "DON'T LOOK BACK.",
    detail: 'The sirens are on. Keep the gold and keep moving.',
    speed: '205',
    distance: '5225',
    coins: '11779',
    theme: 'orange',
    alt: 'A car races up a bridge beside the water, with a police warning and gold reward visible on screen.'
  }
];

/** Scrolling headline strips shown between the hero and the feature grid. */
export const marqueeLines = {
  primary: ['DODGE THE TRAFFIC', 'LOSE THE COPS', 'SMASH YOUR RECORD', 'ONE MORE RUN'],
  secondary: ['NO FINISH LINE', 'REAL GAMEPLAY', 'BOOST. DRIFT. ESCAPE.', 'FOR IPHONE']
};
