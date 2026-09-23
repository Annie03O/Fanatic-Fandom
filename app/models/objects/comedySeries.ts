import { Show } from "../types/Show";

export const comedySeries:Show[] = [
    {
        id: "the-office",
        title: "The Office",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BZjQwYzBlYzUtZjhhOS00ZDQ0LWE0NzAtYTk4MjgzZTNkZWEzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        firstAirDate: "March 24, 2005",
        lastAirDate: "May 16, 2013",
        plot: "This U.S. adaptation -- set at a paper company in Scranton, Pa. -- has a similar documentary style to that of the Ricky Gervais-led British original. It features the Dunder-Mifflin staff, which includes characters based on roles in the British show -- and, quite possibly, people with whom you work in your offifce. There's Jim, the likable employee who's a bit of an everyman. Jim has a thing for receptionist-turned-sales-rep Pam -- because office romances are always a good idea! There's also Dwight, the co-worker who is successful but devoid of social skills and common sense.",
        creator: "Greg Daniels",
        composer: "Jay Fergusson",
        country: "US",
        language: "English",
        status: "Ended",
        numberOfSeasons: 9,
        numberOfEpisodes: 201,
        basedOn: true,
        mainCharacters: [
            {
                id: "michael-scott",
                firstName: "Michael",
                lastName: "Scott",
                imageUrl: "https://i.pinimg.com/736x/d6/3d/ee/d63dee84adc4695b6aaa46ccc4882b06.jpg",
                posterUrl: "https://i.pinimg.com/736x/93/17/b0/9317b05b14943cba1685eb90dadccdd0.jpg",
                actor:	"Steve Carell",
                promo: true, 
            },
            {
                id: "dwight-schrute",
                firstName: "Dwight",
                lastName: "Schrute",
                imageUrl: "https://i.pinimg.com/1200x/6b/65/23/6b6523a7976fa55ff3ca25a6b81e95d7.jpg",
                posterUrl: "https://i.pinimg.com/1200x/d0/1f/92/d01f920e945c7359c21dd1343988042e.jpg",
                actor:	"Rainn Wilson",	
                promo: true,
            },
            {
                id: "jim-halpert",
                firstName: "Jim",
                lastName: "Halpert",
                imageUrl:  "https://i.pinimg.com/1200x/cc/38/4a/cc384a20b70ad981e8ccab62c72ff9f6.jpg",
                posterUrl:"https://i.pinimg.com/474x/a6/43/af/a643affe81dae867fef6e78f9b6104c0.jpg",
                actor:	"John Krasinski",
                promo: true,
            },
            {
                id: "pam-beesly",
                firstName: "Pam",
                lastName: "Beesly",
                imageUrl: "https://i.pinimg.com/1200x/be/bd/c9/bebdc95609fec9a94cd9a1477f863b17.jpg",
                posterUrl: "https://preview.redd.it/is-pam-hate-justified-v0-4imyar44cu4h1.jpeg?width=640&crop=smart&auto=webp&s=c8c856425369f2a1006b9b6a653c9bee88b2dc21",
                actor:	"Jenna Fischer",
                promo: true,
            },
            {
                id: "ryan-howard",
                firstName: "Ryan",
                lastName: "Howard",
                imageUrl: "https://i.pinimg.com/736x/31/9b/7e/319b7e6d13fe445ef364fc61b8951ff2.jpg",
                actor:	"B. J. Novak",
                promo: true,
            },
            {
                id: "andy-bernard",
                firstName: "Andy",
                lastName: "Bernard",
                imageUrl: "https://i.pinimg.com/736x/70/0d/de/700dde00376439762e84564d57e3d41d.jpg",
                actor:	"Ed Helms",		
                promo: true,
            },
            {
                id: "robert-california",
                firstName: "Robert",
                lastName: "California",
                imageUrl: "https://i.pinimg.com/736x/f7/e0/29/f7e02926fd30cbb4c4b2647eb8da4527.jpg",
                actor:	"James Spader",
                promo: true,
            },
        ],
        cast: [
            {
                character: "Michael Scott",
                actor:	"Steve Carell"
            },
            {
                character: "Dwight Schrute",
                actor:	"Rainn Wilson"	
            },
            {
                character: "Jim Halpert",
                actor:	"John Krasinski"
            },
            {
                character: "Pam Beesly",
                actor:	"Jenna Fischer"
            },
            {
                character: "Ryan Howard",
                actor:	"B. J. Novak"
            },
            {
                character: "Andy Bernard",
                actor:	"Ed Helms"		
            },
            {
                character: "Robert California",
                actor:	"James Spader"
            },
        ],
        seasons: [
            {
                id: "the-office-season-1",
                seasonNumber: 1,
                episodeCount: 6,
                premiereDate: "March 24, 2005",
                finaleDate: "April 26, 2005",
                premiereEpisode: "Pilot",
                finaleEpisode: "Hot Girl",
                posterUrl:"https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p7893509_b_v12_ai.jpg",
                network: "NBC",
                nextSeason: {
                    id: "the-office-season-2",
                    seasonNumber:2, 
                },
            },
            {
                id: "the-of<fice-season-2",
                seasonNumber:2,
                episodeCount:22,
                premiereDate: "September 20, 2005",
                finaleDate: "May 11, 2006",
                premiereEpisode: "The Dundies",
                finaleEpisode: "Casino Night",
                posterUrl:"https://preview.redd.it/which-season-of-the-office-was-your-favorite-v0-hfsxd0imewl91.jpg?width=1080&crop=smart&auto=webp&s=fc311e81ab8c3a02ad49953750b82636cf3e5a63",
                network: "NBC",
                previousSeason: {
                    id: "the-office-season-1",
                    seasonNumber:1, 
                },
                nextSeason: {
                    id: "the-office-season-3",
                    seasonNumber:3, 
                },
            },
            {
                id: "the-office-season-3",
                seasonNumber:3,
                episodeCount:25,
                premiereDate: "September 21, 2006",
                finaleDate: "May 17, 2007",
                premiereEpisode: "Gay Witch Hunt",
                finaleEpisode: "The Job",
                posterUrl:"https://media.themoviedb.org/t/p/w500/1SR5ZR0KNHTRvAzFayaKbhKAFSu.jpg",
                network: "NBC",
                previousSeason: {
                    id: "the-office-season-2",
                    seasonNumber:2, 
                },
                nextSeason: {
                    id: "the-office-season-4",
                    seasonNumber:4, 
                },
            },
            {
                id: "the-office-season-4",
                seasonNumber:4,
                episodeCount: 19,
                premiereDate: "September 27, 2007",
                finaleDate: "May 15, 2008",
                premiereEpisode: "Fun Run",
                finaleEpisode: "Goodbye, Toby",
                posterUrl:"https://i.ebayimg.com/images/g/Gv8AAOSw0vdeL14V/s-l1200.jpg",
                network: "NBC",
                previousSeason: {
                    id: "the-office-season-3",
                    seasonNumber:3, 
                },
                nextSeason: {
                    id: "the-office-season-5",
                    seasonNumber:5, 
                },
            },
            {
                id: "the-office-season-5",
                seasonNumber:5,
                episodeCount:28,
                premiereDate: "September 25, 2008",
                finaleDate: "May 14, 2009",
                premiereEpisode: "Weight Loss",
                finaleEpisode: "Company Picnic",
                posterUrl:"https://media.themoviedb.org/t/p/w500/hwlQxOPGIybqBz5TYYIe6XtOfi4.jpg",
                network: "NBC",
                previousSeason: {
                    id: "the-office-season-4",
                    seasonNumber: 4, 
                },
                nextSeason: {
                    id: "the-office-season-6",
                    seasonNumber: 6, 
                },
            },
            {
                id: "the-office-season-6",
                seasonNumber:6,
                episodeCount:26,
                premiereDate: "September 17, 2009",
                finaleDate: "May 20, 2010",
                premiereEpisode: "Gossip",
                finaleEpisode: "Whistleblower",
                posterUrl:"https://m.media-amazon.com/images/I/814qAk4r+mL._SL1500_.jpg",
                network: "NBC",
                previousSeason: {
                    id: "the-office-season-5",
                    seasonNumber: 5, 
                },
                nextSeason: {
                    id: "the-office-season-7",
                    seasonNumber: 7,  
                },
            },
            {
                id: "the-office-season-7",
                seasonNumber: 7,
                episodeCount:26,
                premiereDate: "September 23, 2010",
                finaleDate: "May 9, 2011",
                premiereEpisode: "Nepotism",
                finaleEpisode: "Search Committee",
                posterUrl:"https://collider.com/wp-content/uploads/the-office-season-seven-dvd-cover.jpg",
                network: "NBC",
                previousSeason: {
                    id: "the-office-season-6",
                    seasonNumber: 6, 
                },
                nextSeason: {
                    id: "the-office-season-8",
                    seasonNumber: 8, 
                },
            },
            {
                id: "the-office-season-8",
                seasonNumber: 8,
                episodeCount:24,
                premiereDate: "September 22, 2011",
                finaleDate: "May 10, 2012",
                premiereEpisode: "The List",
                finaleEpisode: "Free Family Portrait Studio",
                posterUrl:"https://m.media-amazon.com/images/I/91vtdGntiEL._AC_SL1500_.jpg",
                network: "NBC",
                previousSeason: {
                    id: "the-office-season-7",
                    seasonNumber: 7,  
                },
                nextSeason: {
                    id: "the-office-season-9",
                    seasonNumber: 9, 
                },
            },
            {
                id: "the-office-season-9",
                seasonNumber: 9,
                episodeCount:25,
                premiereDate: "September 20, 2012",
                finaleDate: "May 16, 2013",
                premiereEpisode: "New Guys",
                finaleEpisode: "Finale",
                posterUrl:"https://m.media-amazon.com/images/I/91a-rumlyJL._AC_SL1500_.jpg",
                network: "NBC",
                previousSeason: {
                    id: "the-office-season-8",
                    seasonNumber: 8, 
                },
              },
        ],
        soundtrack: [
            {
                id: "the-office-season-1-soundtrack",
                noImage: true,
                noSeason: 1,
            },
            {
                id: "the-office-season-2-soundtrack",
                noImage: true,
                noSeason: 2,
            },
            {
                id: "the-office-season-3-soundtrack",
                noImage: true,
                noSeason: 3,
            },
            {
                id: "the-office-season-4-soundtrack",
                noImage: true,
                noSeason: 4,
            },
            {
                id: "the-office-season-5-soundtrack",
                noImage: true,
                noSeason: 5,
            },
            {
                id: "the-office-season-6-soundtrack",
                noImage: true,
                noSeason: 6,
            },
            {
                id: "the-office-season-7-soundtrack",
                noImage: true,
                noSeason: 7,
            },
            {
                id: "the-office-season-8-soundtrack",
                noImage: true,
                noSeason: 8,
            },
            {
                id: "the-office-season-9-soundtrack",
                noImage: true,
                noSeason: 9,
            },
        ],
        executive: [ 
            "Ben Silverman",
            "Greg Daniels",
            "Ricky Gervais",
            "Stephen Merchant",
            "Howard Klein",
            "Ken Kwapis",
            "Paul Lieberstein",
            "B. J. Novak",
            "Brent Forrester",
            "Dan Sterling",
        ],
        producer: [
            "Kent Zbornak",
            "Randy Cordray",
            "Steve Burgess",
        ],
        prodCompanies: [
            "Deedle-Dee Productions",
            "3 Arts Entertainment (uncredited)",
            "Shine America",
            "Universal Television",
        ],
        network: "NBC",
        genre: "comedy",
tags: [
            "Mockumentary",
            "Sitcom",
            "Workplace comedy",
            "Cringe comedy",
        ],
        related: [
            {
                id: "the-office-british-tv-series",
                title: "The Office (British TV series)",
                posterUrl: "https://m.media-amazon.com/images/M/MV5BNTk4MjNjODctNDgyZC00NDhkLWE1OGQtMjA3M2FlMDVjMjkzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
            },
            {
                id: "the-paper",
                title: "The Paper",
                posterUrl: "https://m.media-amazon.com/images/M/MV5BZGFmMGIxMmItNGYyMi00MzJkLWE5NTgtM2Y3YjMyMjk3YjJjXkEyXkFqcGc@._V1_.jpg"
            },
        ],
    },
    {
        id: "seinfeld",
        title: "Seinfeld",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BMmRjNjZjN2ItN2FkYi00ZDg0LWExN2EtMTU2ODUwNWU1M2NhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        country: "USA",
        language: "English",
        firstAirDate: "July 5, 1989",
        lastAirDate: "May 14,, 1998",
        plot: "The continuing misadventures of neurotic New York City stand-up comedian Jerry Seinfeld and his equally neurotic New York City friends.",
        creator: [
            "Larry David",
            "Jerry Seinfeld",
        ],
        cast: [
            {
              actor:"Jerry Seinfeld"
            },
            {
               actor: "Julia Louis-Dreyfus"
            },
            {
               actor: "Michael Richards"
            },
        ],
        network: "NBC",
        genre: "comedy",
tags: ["Sitcom"]
    },
    { 
      id: "parks-and-recreation",
      title: "Parks and Recreation",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BNDlhMzAwNTAtNTk2NS00MTdkLWE3ZWYtMDU0MTFiYmU2ZTc0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      firstAirDate: "2009",
      lastAirDate: "2015",          
      plot: "The absurd antics of an Indiana town's public officials as they pursue sundry projects to make their city a better place.",
      creator:[
        "Greg Daniels",
        "Michael Schur"
      ],
      cast: [ 
        {
            actor: "Amy Poehler",
        },
        {
            actor: "Jim O'Heir",
        },
        {
            actor: "Nick Offerman"
        }
    ],
    genre: "comedy",
tags: [
        "Sitcom",
        "Mockumentary",
        "Political satire",
        "Workplace comedy",
        "Cringe comedy",
    ]
},
{
    id: "community",
    title: "Community",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BOGIwYzNmYTktZWExZC00MzAyLTk4NTItODgwZmIyNWZhNDEyXkEyXkFqcGc@._V1_.jpg",
    firstAirDate: "September 17, 2009",
    lastAirDate: "June 2, 2015",
    plot: "A suspended lawyer is forced to enroll in a community college with an eccentric staff and student body.",
    creator: ["Dan Harmon"],
    cast: [
        {
            actor: "Joel McHale"
        },
        {
            actor: "Danny PudiDonald Glover"
        },
    ],
    network: "NBC",
    genre: "comedy",
tags: [
        "Sitcom",
        "Surreal humor",
        "Satire",
    ]
},
{
    id: "fresh-prince-of-bel-air",
    title: "The Fresh Prince of Bel-Air",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BYzhlMDVmNTgtZjkwOS00NGYwLTllMWEtYjY2OWNkMDliMTAyXkEyXkFqcGc@._V1_.jpg",
    firstAirDate: "1990",
    lastAirDate: "1996",
    plot: "After getting into a fight, a streetwise teenager from a poor neighborhood in West Philadelphia, Pennsylvania is sent by his mother to live with his wealthy aunt, uncle, and cousins at their mansion in Bel-Air, Los Angeles in California.",
    creator: [
        "Andy Borowitz",
        "Susan Borowitz"
    ],
    cast: [
        {
            actor: "Will Smith",
        },
        {
            actor: "James AveryAlfonso Ribeiro",
        },
    ],
    network: "NBC",
    genre: "comedy",
tags: [	
        "Family sitcom",
        "Comedy-drama",
    ]
},
{
  id: "the-good-place",
  title: "The Good Place",
  posterUrl: "https://m.media-amazon.com/images/M/MV5BNjI3ZGRhNDYtNDFjOS00OGFlLTg4NTEtYjZjYTViY2ZiMzBkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  firstAirDate: "2016",
  lastAirDate: "2020",
  plot: "Eleanor Shellstrop, a deceased saleswoman who lived a morally corrupt life, finds herself in a heaven-like afterlife in a case of mistaken identity and tries to hide her past in order to stay there.",
  creator: ["Michael Schur"],
    cast: [
        {
            actor: "Kristen Bell"
        },
        {
            actor: "William Jackson Harper",
        },
        {
            actor: "Jameela Jamil"
        }, 
       {
        actor: "Ted Danson",
     },
     {
        actor: "Kristen Bell",
     },
     {
        actor: "William Jackson Harper",
     },
     {
        actor: "Manny Jacinto",
     },
     {
        actor: "Jameela Jamil",
     },
      {
        actor: "D'Arcy Carden",
     },
    ],
    genre: "comedy",
    tags: [
        "Comedy",
        "Philosophical fiction",
        "Fantasy",
        "Utopian and dystopian fiction",
    ]
},
{
    id: "new-girl",
    title: "New Girl",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMTQ5MzM1NzMwMl5BMl5BanBnXkFtZTgwNjQ2MzI2NzE@._V1_.jpg",
    firstAirDate: "September 20, 2011",
    lastAirDate: "May 15, 2018",
    plot: "After a bad break-up, Jess, an offbeat young woman, moves into an apartment loft with three single men. Although they find her behavior very unusual, the men support her - most of the time.",
    creator: [
        "Elizabeth Meriwether",
    ],
    cast: [
        	
        {
            actor: "Zooey Deschanel",
        },
        {
            actor: "Jake Johnson",
        },
        {
            actor: "Max Greenfield",
        },
        {
            actor: "Lamorne Morris",
        },
        {
            actor: "Hannah Simone",
        },
        {
            actor: "Damon Wayans Jr.",
        },
        {
            actor: "Danielle Rockoff",
        },
        {
            actor: "Rhiannon Rockoff",
        },
    ],
    network: "Fox",
    genre: "comedy",
    tags: [
        "Sitcom",
        "Romantic comedy",
    ]
},
{
    id: "saved-by-the-bell",
    title: "Saved By The Bell",
    posterUrl: "https://www.moviezine.se/wp-content/uploads/2025/02/large_f4237d6d2e0546dbcf6e8481d3d2ed69-savedbythebellposter01o27.jpg",
    firstAirDate: "August 20, 1989",
    lastAirDate: "May 20, 1993",
    plot: "A close-knit group of six friends get through their teens together while attending Bayside High School in Palisades, California.",
    creator: ["Sam Bobrick"],
    cast: [
        {
            actor: "Mark-Paul Gosselaar",
        },
        {
            actor: "Mario Lopez",
        },
        {
            actor: "Dustin Diamond",
        },
        {
            actor: "Tiffani-Amber Thiessen",
        },
        {
            actor: "Elizabeth Berkley",
        },
        {
            actor: "Lark Voorhies",
        },
        {
            actor: "Ed Alonzo",
        },
        {
            actor: "Dennis Haskins",
        },
        {
            actor: "Leanna Creel",
        },
    ],
    genre: "comedy",
tags: ["Teen Sitcom"]
},
{
    id: "the-big-bang-theory",
    title: "The Big Bang Theory",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BZjgzY2QyNzItNDhhYi00ZWIwLWFjN2UtZDJkN2MxYWNjMmJjXkEyXkFqcGc@._V1_.jpg",
    firstAirDate: "September 24, 2007",
    lastAirDate: "May 16, 2019",
    plot: "The lives of four socially awkward scientists take a wild turn when a beautiful and free-spirited girl moves in next door.",
    creator: [
        "Chuck Lorre",
        "Bill Prady",
    ],
    cast: [
        {
            actor: "Mayim Bialik",
        },
        {
            actor: "Kaley Cuoco",
        },
        {
            actor: "Johnny Galecki",
        },
        {
            actor: "Simon Helberg ",
        },
        {
            actor: "Jim Parsons",
        },
        {
            actor: "Melissa Rauch",
        },
        {
            actor: "Kunal Nayyar",
        },
    ],
    genre: "comedy",
tags: ["Sitcom"]
},
{
    id: "scrubs",
    title: "Scrubs",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BZDUwODJiYjktZjE0Yy00ZjViLWJiZWEtNThlNjI5MDg5MWY3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    firstAirDate: "October 2, 2001",
    lastAirDate: "May 8, 2010",
    plot: "In the unreal world of Sacred Heart Hospital, intern John 'J.D.' Dorian learns the ways of medicine, friendship and life.",
    creator: ["Bill Lawrence"],
    cast: [
        {
           actor: "John C. McGinley",
        }, 
        { 
           actor: "Zach Braff",
        }, 
        {
           actor: "Donald Faison",
        }, 
        {
           actor: "Michael Mosley"
        }, 
        {
           actor: "Dave Franco",
        }, 
        {
           actor: "Eliza Coupe",
        }, 
        {
           actor: "Kerry Bishé",
        },
    ], 
    genre: "comedy",
tags: ["Sitcom"]
},
{
    id: "friends",
    title: "Friends",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BOTU2YmM5ZjctOGVlMC00YTczLTljM2MtYjhlNGI5YWMyZjFkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    firstAirDate: "2016",
    lastAirDate: "2022",
    plot: "Earn and his cousin Alfred try to make their way in the world through Atlanta's rap scene. Along the way they come face-to-face with social and economic issues touching on race, relationships, poverty, status, and parenthood.",
    creator: "Donald Glover",
    cast: [
        	
        {
            actor: "Jennifer Aniston",
            character: "Rachel Green",
        },
        {
            actor: "Courteney Cox",
            character: "Monica Geller",
        },
        {
            actor: "Lisa Kudrow",
            character: "Phoebe Buffay",
        },
        {
            actor: "Matt LeBlanc",
            character: "Joey Tribbiani",
        },
        {
            actor: "Matthew Perry",
            character: "Chandler Bing",
        },
        {
            actor: "David Schwimmer",
            character: "Ross Geller",
        }
    ],
    network: "NBC",
    genre: "comedy",
tags: ["Sitcom"]
},
{ 
    id: "brooklyn-nine-nine",
    title: "Brooklyn Nine-Nine",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNzBiODQxZTUtNjc0MC00Yzc1LThmYTMtN2YwYTU3NjgxMmI4XkEyXkFqcGc@._V1_.jpg",
    firstAirDate: "2013",
    lastAirDate: "2021",
    plot: "Comedy series following the exploits of Det. Jake Peralta and his diverse, lovable colleagues as they police the NYPD's 99th Precinct.",
    creator: [
        "Dan Goor",
        "Michael Schur",
    ],
    cast: [
        {
           actor:"Andy Samberg",
        },
        {    
           actor: "Stephanie Beatriz",
        },
        {
           actor: "Terry Crews",
        },
    ],
    genre: "comedy",
tags: [
        "Workplace comedy",
        "Sitcom",
        "Police procedural",
    ]
},
{
    id: "family-ties",
    title: "Family Ties",
    posterUrl: "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/image_1000x1500_7.png",
    firstAirDate: "May 14, 1982",
    lastAirDate: "September 22, 1989",
    plot: "Chronicles liberal ex-hippies Steven and Elyse Keaton, their conservative son Alex, daughters Mallory and Jennifer, and later, youngest child Andrew.",
    creator: [ "Gary David Goldberg" ],
    cast: [
        {
           actor: "Michael J. Fox",
        }, 
        {
           actor: "Justine Bateman",
        }, 
        {
           actor: "Meredith Baxter",
        }, 
        {
           actor: "Tina Yothers",
        }, 
        {
           actor: "Michael Gross",
        },
    ],
    genre: "comedy",
tags: ["Sitcom"]
},
{
   id: "family-matters",
   title: "Family Matters",
   posterUrl: "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/r_2024_04_06t155745415.jpg",
   firstAirDate: "September 22, 1989",
   lastAirDate: "July 17, 1998",
   plot: "The Winslow family deals with various misadventures, many of them caused by their pesky next-door neighbor, ultra-nerd Steve Urkel.",
   creator: [
    "William Bickley",
    "Robert L. Boyett",
    "Thomas L. Miller",
   ],
   cast: [
    {
        actor: "Reginald VelJohnson",
    },
    {
        actor: "Jaleel White",
    },
    {
        actor: "Darius McCrary",
    },
    {
        actor: "Jaimee Foxworth",
    }, 
    {
        actor: "Telma Hopkins",
    }, 
    {
        actor: "Rosetta LeNoire",
    }, 
    {
        actor: "Bryton James",
    },  
    {
        actor: "Jo Marie Payton",
    },  
    {
        actor: "Kellie Shanygne Williams"
    } 
],
genre: "comedy",
tags: ["Sitcom"]
},
{
    id: "cheers",
    title: "Cheers",
    posterUrl: "https://media.the'movie'db.org/t/p/w500/nD1ZQBKbgKSmKcrAkWTofohsScj.jpg",
    firstAirDate: "September 30, 1982",
    lastAirDate: "May 20, 1993",
    plot: "The regulars of the Boston bar 'Cheers' share their experiences and lives with each other while drinking or working at the bar where everybody knows your name.",
    creator: [
        "James Burrows",
        "Glen Charles",
        "Les Charles",
    ],
    cast: [
        {
           actor: "Ted Danson",
        }, 
        {
           actor: "Shelley Long",
        }, 
        {
           actor: "John Ratzenberger",
        }, 
        {
           actor: "George Wendt",
        }, 
        {
            actor: "Nicholas Colasanto",
        }, 
        {
            actor: "Rhea Perlman",
        },
    ], 
    genre: "comedy",
tags: ["Comedy"]
},
{
    id:"that-70s-show",
    title: "That '70s Show",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMTdhMTNmNjEtOTI5Yi00N2MyLTlmOGMtOWMyYzFhZjhmZTU4XkEyXkFqcGc@._V1_.jpg",
    firstAirDate: "August 23, 1998",
    lastAirDate: "May 18, 2006",
    plot: "A comedy revolving around a group of teenage friends, their mishaps, and their coming of age, set in 1970s Wisconsin.",
    creator: [
        "Mark Brazill",
        "Bonnie Turner",
        "Terry Turner",
    ],
    cast: [
        {
            actor: "Topher Grace",
        },
        {
            actor: "Laura Prepon",
        },
        {
            actor: "Mila Kunis",
        },
    ],
    genre: "comedy",
tags: ["Teen Sitcom"]
},
{
    id: "how-i-met-your-mother",
    title: "How I Met Your Mother",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNjg1MDQ5MjQ2N15BMl5BanBnXkFtZTYwNjI5NjA3._V1_.jpg",
    firstAirDate: "September 19, 2005",
    lastAirDate: "March 31, 2014",
    plot: "A father recounts to his children the journey he and his four best friends took leading up to him meeting their mother.",
    creator: [
        "Carter Bays",
        "Craig Thomas",
    ],
    mainCharacters: [
        {
            id: "ted-moseby",
            firstName: "Ted",
            lastName: "Moseby",
            actor: "Josh Radnor",
        
    }, 
        {
            id: "robin-scherbatsky",
            firstName: "Robin",
            lastName: "Scherbatsky",
            actor: "Cobie Smulders",
        
    }, 
        {
            id: "barney-stinson",
            firstName: "Barney",
            lastName: "Stinson",
            actor: "Neil Patrick Harris",
        
    }, 
        {
            id: "lily-aldrin",
            firstName: "Lily",
            lastName:"Aldrin",
            actor: "Alyson Hannigan",
        
    }, 
        {
            id: "marshall-eriksen",
            firstName: "Marshall",
            lastName: "Eriksen",
            actor: "Jason Segel",
        
    },
    ],
    cast: [
        {
            actor: "Josh Radnor",
            character: "Ted Moseby",
        }, 
        {
            actor: "Cobie Smulders",
            character: "Robin Scherbatsky"
        }, 
        {
            actor: "Neil Patrick Harris",
            character: "Barney Stinson"
        }, 
        {
            actor: "Alyson Hannigan",
            character: "Lily Aldrin",
        }, 
        {
            actor: "Jason Segel",
            character: "Marshhall Eriksen"
        },
    ],
    genre: "comedy",
tags: ["Sitcom"]
},
{
    id: "full-house",
    title: "Full House",
    creator: ["Jeff Franklin"],
    posterUrl: "https://m.media-amazon.com/images/M/MV5BZGQ3OTY3OGQtYzZlZS00YWZjLTgwYzMtZjg4YmY0Y2U1ZDg4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    firstAirDate: "September 22, 1987",
    lastAirDate: "May 23, 1995",
    plot: "Danny, a widower talk-show host, has three daughters (D.J., Stephanie, and Michelle). Lucky for him, his brother-in-law Jesse, a true Elvis super-freak, and best friend Joey, a struggling comic, help him raise the girls. A sitcom about a really full house: by the last season, nine people and a dog live under the same roof.",
    genre: "comedy",
tags: ["Sitcom", "Comedy", ]
}
]