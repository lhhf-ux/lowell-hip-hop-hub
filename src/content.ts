export type EventCategory = "festival" | "community" | "internal";

export type FestEvent = {
  id: string;
  /** ISO date, YYYY-MM-DD */
  date: string;
  endDate?: string;
  time: string;
  title: string;
  venue: string;
  /** Search string used for the venue's Google Maps link. */
  mapQuery?: string;
  description: string;
  ticketUrl?: string;
  category: EventCategory;
};

export const festivalDates = {
  start: "2026-10-10",
  end: "2026-10-18",
  label: "October 10–18, 2026",
};

export const ticketUrl = "https://www.taffetamusic.com/shows/lowell-hip-hop-oct-10-10-oct";
export const donateUrl = "https://glcf.fcsuite.com/erp/donate/list/event?event_date_id=4564";
export const volunteerUrl = "https://forms.gle/gXccQ5yqazyJY31KA";
export const spotifyPlaylistUrl =
  "https://open.spotify.com/playlist/6TzBksjGosfJgfdkgnBIKr?si=78d1ddf4a52d4553";

export const socialLinks = {
  instagram: {
    url: "https://www.instagram.com/lowellhiphopfestival/",
    handle: "@lowellhiphopfestival",
    label: "Instagram",
  },
  facebook: {
    url: "https://www.facebook.com/LowellHipHopFestival/",
    handle: "@LowellHipHopFestival",
    label: "Facebook",
  },
};

export const fiscalSponsorshipLine =
  "The Lowell Hip-Hop Festival operates under the fiscal sponsorship of the Greater Lowell Community Foundation, a 501(c)(3) public charity.";

export const missionIntro =
  "A multicultural, family-friendly festival that welcomes a diverse audience into Lowell, featuring music, dance, and public art that highlights local artists & reflects the city's cultural diversity.";

export const missionRooted =
  "Rooted in Lowell's hip-hop and creative scenes, the festival celebrates and inspires through the four elements of hip-hop:";

export const missionElements = [
  "MCing (rapping)",
  "DJing (turntablism)",
  "Breaking (dance)",
  "Graffiti (public art/murals)",
];

export const yearOneEyebrow = "Year 1";
export const yearOneHeading = "Hip-hop is part of Lowell's story";
export const yearOneStory = [
  "For 200 years, Lowell has been a place where cultures meet and new generations make something of their own.",
  "Hip-hop carries that same spirit. Born from many cultures and truly American, it has become a global culture of creativity and community.",
  "The Lowell Hip-Hop Festival is proud to celebrate Lowell's Bicentennial by bringing those stories together: honoring where we come from, celebrating who we are, and creating something lasting for future generations.",
];

export const aboutStory = [
  "Lowell has always made noise. From the mills to the mic, this is a city that builds things loudly and shares them freely. The Lowell Hip-Hop Festival grew out of that same instinct: a week of shows, workshops, battles, and cyphers put together by the people who live here.",
  "We started as a handful of artists, DJs, dancers, and organizers who wanted one week where the whole culture had a home downtown — not a side stage at somebody else's event. Every year we bring legends of the genre together with the 978 artists who are pushing it forward right now.",
  "Everything we do is community-first. Workshops are open to beginners. Battles are open to anybody with heart. Our year-round presence at neighborhood events keeps the festival tied to the city rather than dropping in for one weekend and disappearing.",
];

export const events: FestEvent[] = [
  {
    id: "kickoff-concert",
    date: "2026-10-10",
    time: "6:00 PM",
    title: "Kick-off Concert",
    venue: "Taffeta Music Hall",
    mapQuery: "Taffeta Music Hall, 110 Western Ave, Lowell, MA",
    description:
      "The festival opens with Jungle Brothers and Termanology, backed by a deep bill of Lowell and 978 artists, with breaking and dance cypher interludes throughout the night — plenty of chances for you to get loose on the dance floor.",
    ticketUrl,
    category: "festival",
  },
  {
    id: "learn-to-dance",
    date: "2026-10-13",
    time: "4:00 – 6:00 PM",
    title: "Learn to Dance Workshop",
    venue: "GEN Studio",
    mapQuery: "GEN Studio, Western Avenue Studios, 122 Western Ave, Lowell, MA",
    description:
      "An open-level introduction to breaking and hip-hop dance foundations, led by Justin. No experience needed — just wear sneakers.",
    category: "festival",
  },
  {
    id: "hip-hop-trivia",
    date: "2026-10-14",
    time: "7:00 PM",
    title: "Hip-Hop Trivia",
    venue: "Warp & Weft",
    mapQuery: "Warp & Weft, 197 Market St, Lowell, MA",
    description:
      "Hosted by Chris, Warp & Weft's resident Alex Trebek. Bring a team, argue about samples, and settle it on the scoreboard. Golden-age deep cuts to current releases.",
    category: "festival",
  },
  {
    id: "dj-myth",
    date: "2026-10-15",
    time: "8:00 PM",
    title: "DJ Myth",
    venue: "Warp & Weft",
    mapQuery: "Warp & Weft, 197 Market St, Lowell, MA",
    description: "A full night on the tables — turntablism, crate digging, and a floor that does not sit down.",
    category: "festival",
  },
  {
    id: "hip-hop-101",
    date: "2026-10-17",
    time: "12:00 PM",
    title: "Hip-Hop 101 and Graffiti Lettering Workshop",
    venue: "The Hive Public Market",
    mapQuery: "The Hive Public Market, 101 Paige St, Lowell, MA",
    description:
      "Hip-Hop 101 is led by CabbHoppa1 — the history of the culture and its four elements — followed by a hands-on graffiti lettering session led by Xavier Robbins. All ages welcome.",
    category: "festival",
  },
  {
    id: "fee-evolutionists",
    date: "2026-10-17",
    time: "8:00 PM",
    title: "Fee & the Evolutionists",
    venue: "Warp & Weft",
    mapQuery: "Warp & Weft, 197 Market St, Lowell, MA",
    description:
      "A live soul and hip-hop band fronted by Fee, an MC with a golden-era flow, and Ruby Shabazz, whose vocals come straight out of classic R&B, backed by some of the most accomplished musicians in New England. Fee was part of the classic Lowell hip-hop group X-Caliber and he co-wrote and rapped on \"One Hit to the Body\" with D-Tension, the song Micky Ward walked out to for the first Gatti fight.",
    category: "festival",
  },
  {
    id: "dance-jam-finale",
    date: "2026-10-18",
    time: "1:00 PM",
    title: "Dance Jam Finale",
    venue: "Tescobar Performance Center",
    mapQuery: "Tescobar Performance Center, 72 Middlesex St, Lowell, MA",
    description:
      "Hip-hop dance battles, dance showcases, cyphers and circles to close the festival out.",
    category: "festival",
  },
  {
    id: "kinetic-sculpture-race",
    date: "2026-09-19",
    time: "12:00 – 12:30 PM",
    title: "Lowell Kinetic Sculpture Race",
    venue: "Sampas Pavilion, Pawtucket Blvd.",
    mapQuery: "Sampas Pavilion, Pawtucket Blvd, Lowell, MA",
    description: "Catch us trackside with music, festival info, and a few surprises.",
    category: "community",
  },
  {
    id: "open-streets-lowell",
    date: "2026-10-03",
    time: "12:00 – 5:00 PM",
    title: "Open Streets Lowell",
    venue: "Merrimack St., Downtown Lowell",
    mapQuery: "Merrimack St, Lowell, MA",
    description:
      "A full afternoon downtown — come say hello, grab festival info, and catch some music in the street.",
    category: "community",
  },
];

export type { Artist } from "./artists";
export { headliners, supportArtists, oct17Artists, danceJamArtists } from "./artists";

export type Venue = {
  id: string;
  name: string;
  address: string;
  description: string;
};

export const venues: Venue[] = [
  {
    id: "taffeta",
    name: "Taffeta Music Hall",
    address: "110 Western Ave",
    description: "The festival's concert home. A proper music hall with the sound system a headline bill deserves.",
  },
  {
    id: "warp-weft",
    name: "Warp & Weft",
    address: "197 Market St",
    description: "Our mid-week hub for trivia, DJ nights, and live band sets.",
  },
  {
    id: "hive-market",
    name: "The Hive Public Market",
    address: "101 Paige St",
    description: "A community marketplace space that hosts our all-ages workshops.",
  },
  {
    id: "tescobar",
    name: "Tescobar Performance Center",
    address: "72 Middlesex St",
    description: "Home of the Dance Jam Finale — open floor, big sound, room for a circle.",
  },
  {
    id: "gen-studio",
    name: "GEN Studio",
    address: "Western Avenue Studios, 122 Western Ave",
    description: "A working dance studio inside the Western Ave arts complex, and the site of our dance workshop.",
  },
];

export type SponsorTier = {
  id: string;
  name: string;
  amount: string;
  benefits: string[];
};

export const sponsorTiers: SponsorTier[] = [
  {
    id: "title",
    name: "Title Sponsor",
    amount: "$10,000+",
    benefits: [
      "Name and logo on all festival materials",
      "Top billing at the Kick-off Concert",
      "Stage recognition at every festival event",
      "Featured placement across our social channels",
      "Tickets and hospitality for the Kick-off Concert",
    ],
  },
  {
    id: "premier",
    name: "Premier Sponsor",
    amount: "$5,000+",
    benefits: [
      "Logo on festival materials and website",
      "Recognition at the Kick-off Concert and Dance Jam Finale",
      "Dedicated social media features",
      "Kick-off Concert tickets",
    ],
  },
  {
    id: "gold",
    name: "Gold Sponsor",
    amount: "$2,500",
    benefits: ["Logo on the website and event signage", "Social media recognition", "Kick-off Concert tickets"],
  },
  {
    id: "silver",
    name: "Silver Sponsor",
    amount: "$1,000",
    benefits: ["Name on the website and event signage", "Social media recognition"],
  },
  {
    id: "community",
    name: "Community Sponsor",
    amount: "$500",
    benefits: ["Name on the website", "Thank-you across our social channels"],
  },
];

export type Sponsor = {
  id: string;
  name: string;
  tier: "gold" | "silver";
  url: string;
  logoUrl: string;
};

export const currentSponsors: Sponsor[] = [
  {
    id: "lowell-bicentennial",
    name: "Lowell Bicentennial",
    tier: "gold",
    url: "https://www.lowell200.com/",
    logoUrl: "/images/lowell-bicentennial-logo.png",
  },
  {
    id: "greater-lowell-community-foundation",
    name: "Greater Lowell Community Foundation",
    tier: "gold",
    url: "https://www.greaterlowellcf.org/",
    logoUrl: "/images/glcf-logo.jpg",
  },
  {
    id: "lavoie-industries",
    name: "LaVoie Industries",
    tier: "silver",
    url: "https://lavoieindustries.com/",
    logoUrl: "/images/lavoie-industries.jpg",
  },
];

export const volunteerRoles = [
  {
    title: "Street Team & Flyering",
    description: "Get the word out across Lowell in the weeks before the festival. Posters, flyers, and word of mouth.",
  },
  {
    title: "Setup & Breakdown",
    description: "Help build and strike each event. Tables, signage, gear runs, and the unglamorous essentials.",
  },
  {
    title: "Day-of Support",
    description: "Door, info tables, artist hospitality, and keeping the day running on time.",
  },
  {
    title: "Year-round Tabling",
    description: "Represent the festival at community events across the city all year long.",
  },
];
