export type Artist = {
  id: string;
  name: string;
  role: string;
  bio: string;
  links?: Array<{ label: string; url: string }>;
};

export const headliners: Artist[] = [
  {
    id: "jungle-brothers",
    name: "Jungle Brothers",
    role: "90s Hip-Hop Legends",
    bio: "Mike Gee and Afrika Baby Bam pioneered the fusion of jazz, house, and hip-hop, and their 1988 debut Straight Out the Jungle is an all-time classic. The JBeez co-founded the Native Tongues, the collective that includes De La Soul, A Tribe Called Quest, Queen Latifah and Black Sheep. Nearly forty years in, they still tour on the strength of a live show built on the culture's actual roots, which is exactly why they open a festival built around the four elements for every generation.",
    links: [
      { label: "Instagram", url: "https://www.instagram.com/junglebrothers4life/" },
      { label: "YouTube", url: "https://www.youtube.com/@junglebrothersvevo" },
      { label: "Official Website", url: "https://www.junglebrothers4life.com/" },
    ],
  },
  {
    id: "termanology",
    name: "Termanology",
    role: "Local 978 Legend",
    bio: "Termanology is a rapper and producer from Lawrence whose 2008 album Politics as Usual featured production from DJ Premier, Pete Rock, Large Professor and the Alchemist, and he's followed it up with collaborative albums alongside Paul Wall, Statik Selektah, Myster DL, and more. He now has more than 60 projects out and counting. He currently resides in Lowell and regularly records at Lowell's own Wonka Sound. He is the proof the 978 has been and is continuing to produce world-class MCs.",
    links: [
      { label: "Instagram", url: "https://www.instagram.com/termanologyst/" },
      { label: "YouTube", url: "https://www.youtube.com/user/TermanologyVids" },
      { label: "Bandcamp", url: "https://termanologyst.bandcamp.com/" },
    ],
  },
];

export const supportArtists: Artist[] = [
  {
    id: "egypt",
    name: "Egypt",
    role: "MC / Rapper",
    bio: "Egypt is a Lowell rapper, also known as Egypt Raps, who has been performing in the city and beyond for about a decade. Her work extends beyond music into volunteer work and speaking at local high schools. In 2026, with support from a Mosaic Lowell grant, she published From Nothing to Everything, a book drawing on her own experiences to help readers rise above their circumstances. An August feature in the Lowell Sun highlighted her music, growing online audience, and work with young people.",
    links: [
      {
        label: "Instagram",
        url: "https://www.instagram.com/egypt_raps/",
      },
      {
        label: "Watch on YouTube",
        url: "https://www.youtube.com/channel/UCY9SRjh0AiEOCyZrE_wq-Ag",
      },
      {
        label: "Read the Lowell Sun feature",
        url: "https://www.lowellsun.com/2026/08/23/rapping-out-a-lowell-beat/",
      },
    ],
  },
  {
    id: "mill-city-madness",
    name: "Mill City Madness",
    role: "Collective",
    bio: "A Lowell scream-rap and scenecore collective built around the voices of Stardust World, Rottenegg, and Hazel Adeline. Their queer-friendly, defiant live shows and monthly themed events have made them a fixture of the Greater Lowell and Boston rap and rave scenes — proof the culture is still growing new branches in this city.",
    links: [
      { label: "Mill City Madness on Instagram", url: "https://www.instagram.com/m1ll.c1ty.madn3ss/" },
      { label: "Stardust World on Instagram", url: "https://www.instagram.com/stardust._.world/" },
      { label: "Rottenegg on Instagram", url: "https://www.instagram.com/rxttenegg/" },
      { label: "Hazel Adeline on Instagram", url: "https://www.instagram.com/thehazeladeline/" },
      { label: "Hazel Adeline on Bandcamp", url: "https://thehazeladeline.bandcamp.com/" },
    ],
  },
  {
    id: "malissa-lach",
    name: "Malissa Lach",
    role: "MC / Vocalist",
    bio: "A Lowell MC, poet and vocalist who moves between stages across genres and audiences, from the Southeast Asian Water Festival to a featured poet slot at Lowell Celebrates Kerouac.",
    links: [
      { label: "Instagram", url: "https://www.instagram.com/malissalach/" },
    ],
  },
  {
    id: "cabbhoppa1",
    name: "CabbHoppa1",
    role: "MC",
    bio: "A muralist and hip-hop culture advocate who works from a deep knowledge of where the culture came from, connecting art to the communities it lives in. He's also leading Hip-Hop 101 at The Hive on the 17th.",
    links: [
      { label: "Instagram", url: "https://www.instagram.com/cabbhoppa/" },
    ],
  },
  {
    id: "chi-tashi",
    name: "Chi Tashi",
    role: "MC",
    bio: "Fish Scale Baby put Chi Tashi at the front of Lowell's current wave, a hip-hop artist with the range to sing the hook and then bury you on the verse.",
    links: [
      { label: "Instagram", url: "https://www.instagram.com/chi_tashi/" },
      { label: "SoundCloud", url: "https://soundcloud.com/chitashi" },
      { label: "Read the Interview", url: "https://www.buzz-music.com/post/chi-tashi-boasts-lyrically-depth-in-nice-things" },
    ],
  },
  {
    id: "soloartist",
    name: "SoloArtist",
    role: "MC",
    bio: "A Lowell native building a catalog on his own terms and a steady presence in the local scene, the kind of independent grind this festival was built to put in front of a bigger room.",
    links: [
      { label: "Instagram", url: "https://www.instagram.com/iamsolotheartist/" },
      { label: "Read the GBH Feature", url: "https://www.wgbh.org/culture/2020-06-30/mass-mix-run-the-jewels-optic-bloom-and-other-artists-with-songs-of-protest-that-boston-has-on-heavy-rotation" },
    ],
  },
  {
    id: "persona-the-tyrant",
    name: "Persona the Tyrant",
    role: "MC",
    bio: "A Lowell local and underground MC who has been at it since 2004, building a sound on raw lyricism and horror-inspired darkness that answers to the 978 and nothing else.",
    links: [
      { label: "Instagram", url: "https://www.instagram.com/Persona978/" },
      { label: "Spotify", url: "https://open.spotify.com/artist/0xMSvSiwoAEbT9Ak7cHup5" },
      { label: "Artist Profile", url: "https://slaps.com/Persona978" },
    ],
  },
  {
    id: "ape-the-grim",
    name: "Ape the Grim",
    role: "MC",
    bio: "A New Hampshire b-boy, graffiti writer, battler and MC with records featuring Kool Keith, Mr. Lif, Reks, Termanology, and many more. He is a one-man argument for the four-element framing this festival is built on.",
    links: [
      { label: "Instagram", url: "https://www.instagram.com/apethegrim/" },
      { label: "Bandcamp", url: "https://apethegrim.bandcamp.com/" },
    ],
  },
];

export const featuredArtists: Artist[] = [
  {
    id: "poppy-pyonn",
    name: "Poppy Pyonn",
    role: "MC",
    bio: "A Burmese rapper and Berklee student with close to 200,000 followers on TikTok, releasing singles steadily since 2020 and rhyming in the city that has been a landing place for Southeast Asian families for forty years. Lowell already knows that blend on the mic. Poppy is what it sounds like now.",
    links: [
      { label: "Instagram", url: "https://www.instagram.com/pyonnmyathwe/" },
      { label: "Meet Poppy at Berklee", url: "https://college.berklee.edu/admissions/undergraduate/people/poppy-thwe" },
      { label: "Apple Music", url: "https://music.apple.com/us/artist/pyonn-mya-thwe-poppy-pyonn/1540713423" },
    ],
  },
  {
    id: "tdi-muzik",
    name: "TDI Muzik",
    role: "Special Guest",
    bio: "TDI Muzik comes to Lowell from New York with a direct connection to Jungle Brothers. He appears on “Make the Party Rock” from their 2026 Concrete Jungle EP and joined them at Bastid's BBQ at New York's Seaport this August. For the Kick-off Concert, he joins the Featured Artists bill as a Special Guest.",
    links: [
      { label: "Instagram", url: "https://www.instagram.com/tdimuzik/" },
      { label: "YouTube", url: "https://www.youtube.com/@tdimuzik" },
      { label: "Read the Interview", url: "https://www.thehypemagazine.com/2022/12/09/meet-hip-hop-artist-and-host-of-cypher-tv-tdimuzik/" },
    ],
  },
];

export const kickoffDJs: Artist[] = [
  {
    id: "elmstreet-kickoff",
    name: "Elmstreet",
    role: "DJ & Host",
    bio: "Elmstreet, real name Elmer Martinez, is a Lowell native who joins the Kick-off Concert as a DJ and host, then returns to host Mill City Get Down on October 18.",
    links: [
      { label: "Instagram", url: "https://www.instagram.com/daoriginal96/" },
      { label: "Read the Lowell Sun feature", url: "https://www.lowellsun.com/2024/01/25/stages-lowell-born-martinez-makes-his-mark-as-lighting-designer-in-boston/" },
    ],
  },
  {
    id: "dj-kingx-kickoff",
    name: "DJ KingX",
    role: "DJ & B-boy",
    bio: "DJ KingX is a DJ and b-boy representing Lawtown Assassins. His break tapes are made for the cypher, including the latest installment, Strictly Cyphers 3, released in May 2026. He joins the Kick-off Concert behind the decks and returns as the breaking DJ for Mill City Get Down on October 18.",
    links: [
      { label: "Instagram", url: "https://www.instagram.com/djkingx978/" },
      { label: "SoundCloud", url: "https://soundcloud.com/djkingxassasins" },
      { label: "Strictly Cyphers 3", url: "https://soundcloud.com/djkingxassasins/strictly-cyphers-3" },
      { label: "Read the Feature", url: "https://hamza21.com/2026/06/08/mix-mondays-born-2-get-down/" },
    ],
  },
];

export const oct15Artists: Artist[] = [
  {
    id: "dj-myth",
    name: "DJ Myth",
    role: "DJ",
    bio: "DJ Myth is a Manchester, New Hampshire turntablist and a co-founding force behind Rap Night Manchester, the state's longest-running hip-hop residency at the Shaskeen Pub. Alongside Eyenine, he helped build the weekly night into a cornerstone of the Granite State hip-hop scene, with MC cyphers and showcases for regional and national touring artists. He also marked hip-hop's 50th anniversary with “Without Me,” produced by and featuring Boston hip-hop veteran Edo G.",
    links: [
      { label: "Instagram", url: "https://www.instagram.com/djmyth/" },
      { label: "Read the Concord Monitor feature", url: "https://www.concordmonitor.com/2023/11/25/the-evolution-of-hip-hop-in-the-granite-state-53039163/" },
    ],
  },
];

export const oct17Artists: Artist[] = [
  {
    id: "fee-evolutionists",
    name: "Fee & The Evolutionists",
    role: "Live Band",
    bio: "A live soul and hip-hop band fronted by Fee, an MC with a golden-era flow, and Ruby Shabazz, whose vocals come straight out of classic R&B, backed by some of the most accomplished musicians in New England. Fee was part of the classic Lowell hip-hop group X-Caliber and he co-wrote and rapped on \"One Hit to the Body\" with D-Tension, the song Micky Ward walked out to for the first Gatti fight.",
    links: [
      { label: "Instagram", url: "https://www.instagram.com/feetheevolutionist/" },
      { label: "Official Website", url: "https://theevolutionists.wixsite.com/feetheevolutionist" },
      { label: "Read the Interview", url: "https://foldedwaffle.com/artist-spotlight-fee-the-evolutionist-from-nashua-nh-aka-gate-city/" },
    ],
  },
];

export const danceJamArtists: Artist[] = [
  {
    id: "dj-host",
    name: "Elmstreet",
    role: "Host",
    bio: "Elmstreet, real name Elmer Martinez, is a Lowell native and the host of Mill City Get Down.",
    links: [
      { label: "Instagram", url: "https://www.instagram.com/daoriginal96/" },
      { label: "Read the Lowell Sun feature", url: "https://www.lowellsun.com/2024/01/25/stages-lowell-born-martinez-makes-his-mark-as-lighting-designer-in-boston/" },
    ],
  },
  {
    id: "dj-breaking-judges",
    name: "Baldi · RTA · Grinz",
    role: "Breaking Judges",
    bio: "",
    links: [
      { label: "Baldi on Instagram", url: "https://www.instagram.com/rawkitpower/" },
      { label: "RTA on Instagram", url: "https://www.instagram.com/rith_978/" },
      { label: "Grinz on Instagram", url: "https://www.instagram.com/klelleyku/" },
    ],
  },
  {
    id: "dj-breaking-dj",
    name: "DJ KingX",
    role: "Breaking DJ",
    bio: "",
    links: [
      { label: "Instagram", url: "https://www.instagram.com/djkingx978/" },
      { label: "SoundCloud", url: "https://soundcloud.com/djkingxassasins" },
      { label: "Strictly Cyphers 3", url: "https://soundcloud.com/djkingxassasins/strictly-cyphers-3" },
    ],
  },
  {
    id: "dj-hiphop-judges",
    name: "Lady Ice · McKersin · D.O.A.",
    role: "Hip-Hop Battle Judges",
    bio: "",
    links: [
      { label: "McKersin on Instagram", url: "https://www.instagram.com/mckersin/" },
      { label: "D.O.A. on Instagram", url: "https://www.instagram.com/jacquesmeup/" },
    ],
  },
  { id: "dj-hiphop-dj", name: "DJ Trends", role: "Hip-Hop DJ", bio: "" },
  {
    id: "dj-performances",
    name: "Mill Advised · GEN Crew · Synergy · The Anomalies · More TBA",
    role: "Performances",
    bio: "",
    links: [
      { label: "Synergy on Instagram", url: "https://www.instagram.com/synstagrammm/" },
      { label: "The Anomalies on Instagram", url: "https://www.instagram.com/wearetheanomalies_/" },
    ],
  },
];
