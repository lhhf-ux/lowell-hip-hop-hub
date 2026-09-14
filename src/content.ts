export type EventCategory = "festival" | "community" | "internal";

export type FestEvent = {
  id: string;
  /** ISO date, YYYY-MM-DD */
  date: string;
  endDate?: string;
  time: string;
  title: string;
  venue: string;
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
    description:
      "The festival opens with Jungle Brothers and Termanology, backed by a deep bill of Lowell and 978 artists.",
    ticketUrl,
    category: "festival",
  },
  {
    id: "learn-to-dance",
    date: "2026-10-13",
    time: "4:00 – 6:00 PM",
    title: "Learn to Dance Workshop",
    venue: "GEN Studio (Western Ave)",
    description:
      "An open-level introduction to breaking and hip-hop dance foundations. No experience needed — just wear sneakers.",
    category: "festival",
  },
  {
    id: "hip-hop-trivia",
    date: "2026-10-14",
    time: "7:00 PM",
    title: "Hip-Hop Trivia",
    venue: "Warp & Weft",
    description:
      "Bring a team, argue about samples, and settle it on the scoreboard. Golden-age deep cuts to current 978 releases.",
    category: "festival",
  },
  {
    id: "dj-myth",
    date: "2026-10-15",
    time: "8:00 PM",
    title: "DJ Myth",
    venue: "Warp & Weft",
    description: "A full night on the tables — turntablism, crate digging, and a floor that does not sit down.",
    category: "festival",
  },
  {
    id: "hip-hop-101",
    date: "2026-10-17",
    time: "12:00 PM",
    title: "Hip-Hop 101 and Graffiti Lettering Workshop",
    venue: "The Hive Market",
    description:
      "The history of the culture and its four elements, followed by a hands-on lettering session. All ages welcome.",
    category: "festival",
  },
  {
    id: "fee-evolutionists",
    date: "2026-10-17",
    time: "8:00 PM",
    title: "Fee & the Evolutionists",
    venue: "Warp & Weft",
    description: "Live band hip-hop at full volume to close out Saturday night.",
    category: "festival",
  },
  {
    id: "dance-jam-finale",
    date: "2026-10-18",
    time: "1:00 PM",
    title: "Dance Jam Finale",
    venue: "Tescobar Performance Center",
    description:
      "Breaking and hip-hop dance battles, dance showcases, cyphers and circles to close the festival out.",
    category: "festival",
  },
  {
    id: "kinetic-sculpture-race",
    date: "2026-09-19",
    time: "12:00 – 12:30 PM",
    title: "Lowell Kinetic Sculpture Race",
    venue: "Sampas Pavilion, Pawtucket Blvd.",
    description: "Catch us trackside with music, festival info, and a few surprises.",
    category: "community",
  },
  {
    id: "open-streets-lowell",
    date: "2026-10-03",
    time: "12:00 – 5:00 PM",
    title: "Open Streets Lowell",
    venue: "Merrimack St., Downtown Lowell",
    description:
      "A full afternoon downtown — come say hello, grab festival info, and catch some music in the street.",
    category: "community",
  },
];

export type Artist = {
  id: string;
  name: string;
  role: string;
  bio: string;
};

export const headliners: Artist[] = [
  {
    id: "jungle-brothers",
    name: "Jungle Brothers",
    role: "90s Hip-Hop Legends",
    bio: "Mike Gee and Afrika Baby Bam pioneered the fusion of jazz, house, and hip-hop, and their 1988 debut Straight Out the Jungle is an all-time classic. The JBeez co-founded the Native Tongues, the collective that includes De La Soul, A Tribe Called Quest, Queen Latifah and Black Sheep. Nearly forty years in, they still tour on the strength of a live show built on the culture's actual roots, which is exactly why they open a festival built around the four elements for every generation.",
  },
  {
    id: "termanology",
    name: "Termanology",
    role: "Local 978 Legend",
    bio: "Termanology is a rapper and producer from Lawrence whose 2008 album Politics as Usual featured production from DJ Premier, Pete Rock, Large Professor and the Alchemist, and he's followed it up with collaborative albums alongside Paul Wall, Statik Selektah, Myster DL, and more. He has more than 60 projects out and counting. He currently resides in Lowell and regularly records at Lowell's own Wonka Sound. He is the proof this festival exists to make visible: the 978 has been and continues to produce world-class MCs.",
  },
];

export const supportArtists: Artist[] = [
  {
    id: "mill-city-madness",
    name: "Mill City Madness",
    role: "Stardust World, Rottenegg & Hazel Adeline",
    bio: "A Lowell scream rap and scenecore group whose queer-friendly, defiant live show and monthly themed events have made them a fixture of the Greater Lowell and Boston rap and rave scenes, and proof the culture is still growing new branches in this city.",
  },
  {
    id: "poppy-pyonn",
    name: "Poppy Pyonn",
    role: "MC",
    bio: "A Burmese rapper and Berklee student with close to 200,000 followers on TikTok, releasing singles steadily since 2020 and rhyming in the city that has been a landing place for Southeast Asian families for forty years. Lowell already knows that blend on the mic. Poppy is what it sounds like now.",
  },
  {
    id: "malissa-lach",
    name: "Malissa Lach",
    role: "MC / Vocalist",
    bio: "A Lowell MC, poet and vocalist who moves between stages across genres and audiences, from the Southeast Asian Water Festival to a featured poet slot at Lowell Celebrates Kerouac.",
  },
  {
    id: "cabbhoppa1",
    name: "CabbHoppa1",
    role: "MC",
    bio: "A muralist and hip-hop culture advocate who works from a deep knowledge of where the culture came from, connecting art to the communities it lives in. He's also leading Hip-Hop 101 at The Hive on the 17th.",
  },
  {
    id: "chi-tashi",
    name: "Chi Tashi",
    role: "MC",
    bio: "Fish Scale Baby put Chi Tashi at the front of Lowell's current wave, a hip-hop artist with the range to sing the hook and then bury you on the verse.",
  },
  {
    id: "soloartist",
    name: "SoloArtist",
    role: "MC",
    bio: "A Lowell native building a catalog on his own terms and a steady presence in the local scene, the kind of independent grind this festival was built to put in front of a bigger room.",
  },
  {
    id: "persona-the-tyrant",
    name: "Persona the Tyrant",
    role: "MC",
    bio: "A Lowell local and underground MC who has been at it since 2004, building a sound on raw lyricism and horror-inspired darkness that answers to the 978 and nothing else.",
  },
  {
    id: "ape-the-grim",
    name: "Ape the Grim",
    role: "MC",
    bio: "A New Hampshire b-boy, graffiti writer, battler and MC with records featuring Kool Keith, Mr. Lif, Reks, Termanology, and many more. He is a one-man argument for the four-element framing this festival is built on.",
  },
  {
    id: "fee-evolutionists",
    name: "Fee & The Evolutionists",
    role: "Live Band",
    bio: "A live soul and hip-hop band fronted by Fee, an MC with a golden-era flow, and Ruby Shabazz, whose vocals come straight out of classic R&B, backed by some of the most accomplished musicians in New England. Fee was part of the classic Lowell hip-hop group X-Caliber and he co-wrote and rapped on \"One Hit to the Body\" with D-Tension, the song Micky Ward walked out to for the first Gatti fight.",
  },
];

export const danceJamRoster = [
  { role: "Host", names: ["Elmstreet"] },
  { role: "Breaking Judges", names: ["Baldi", "RTA", "Kellz"] },
  { role: "Breaking DJ", names: ["DJ KingX"] },
  { role: "Hip-Hop Battle Judges", names: ["Keda", "McKersin", "DOA"] },
  { role: "Hip-Hop DJ", names: ["DJ Trends"] },
  { role: "Performances", names: ["Mill Advised", "More TBA"] },
];

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
    address: "Downtown Lowell, MA",
    description: "The festival's concert home. A proper music hall with the sound system a headline bill deserves.",
  },
  {
    id: "warp-weft",
    name: "Warp & Weft",
    address: "Market St., Lowell, MA",
    description: "Our mid-week hub for trivia, DJ nights, and live band sets.",
  },
  {
    id: "hive-market",
    name: "The Hive Market",
    address: "Lowell, MA",
    description: "A community marketplace space that hosts our all-ages workshops.",
  },
  {
    id: "tescobar",
    name: "Tescobar Performance Center",
    address: "Lowell, MA",
    description: "Home of the Dance Jam Finale — open floor, big sound, room for a circle.",
  },
  {
    id: "gen-studio",
    name: "GEN Studio at Western Ave Studios",
    address: "Western Ave, Lowell, MA",
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
