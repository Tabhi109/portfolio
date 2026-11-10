import type { TravelFact } from "@/lib/types";

export const TRAVEL_FACTS: TravelFact[] = [
  {
    id: "phys-time-dilation",
    category: "physics",
    text: "Time passes differently depending on relative motion and gravity — clocks tick slower near massive objects and for fast travelers.",
  },
  {
    id: "phys-entropy",
    category: "physics",
    text: "Entropy tends to increase in closed systems. That quiet hum of disorder is why machines need maintenance — and why portals leave messy residue.",
  },
  {
    id: "phys-wave-particle",
    category: "physics",
    text: "Light behaves as both wave and particle. Measure one aspect carefully and the other gets stubbornly fuzzy.",
  },
  {
    id: "math-primes",
    category: "mathematics",
    text: "There are infinitely many prime numbers. Euclid proved it with a tidy contradiction that still holds after two millennia.",
  },
  {
    id: "math-euler",
    category: "mathematics",
    text: "Euler's identity links e, i, π, 1, and 0 in a single equation — five constants, one improbably elegant handshake.",
  },
  {
    id: "math-graph",
    category: "mathematics",
    text: "In graph theory, seven bridges of Königsberg helped invent the idea that connectivity can matter more than exact geometry.",
  },
  {
    id: "psych-spacing",
    category: "psychology",
    text: "The spacing effect helps explain why distributed learning improves retention better than cramming the same material once.",
  },
  {
    id: "psych-bias",
    category: "psychology",
    text: "Confirmation bias nudges us toward evidence that fits our story. Good engineers design for the bias, not around pretending it vanishes.",
  },
  {
    id: "psych-flow",
    category: "psychology",
    text: "Flow states emerge when challenge and skill are closely matched — too easy is boredom, too hard is panic, the middle is deep work.",
  },
  {
    id: "phil-theseus",
    category: "philosophy",
    text: "The Ship of Theseus asks whether an object remains the same after every part is replaced. Refactors make the question personal.",
  },
  {
    id: "phil-map",
    category: "philosophy",
    text: "The map is not the territory. Models are useful precisely because they leave things out — until they leave out the important part.",
  },
  {
    id: "phil-burden",
    category: "philosophy",
    text: "Extraordinary claims require extraordinary evidence. Portals included. Especially portals.",
  },
];

export function pickTravelFact(seed?: string): TravelFact {
  if (!seed) {
    const index = Math.floor(Math.random() * TRAVEL_FACTS.length);
    return TRAVEL_FACTS[index];
  }

  let hash = 0;
  for (let i = 0; i < seed.length; i += 1) {
    hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  }
  return TRAVEL_FACTS[hash % TRAVEL_FACTS.length];
}
