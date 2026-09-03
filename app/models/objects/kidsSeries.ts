import { Show } from "../types/Show";

export const kidsSeries: Show[] = [
    {
        id: "soy-luna", 
        title: "Soy Luna",
        posterUrl: "https://cdn.europosters.eu/image/1300/33470.jpg",
        country: "Argentina",
        creator: ["Jorge Edelstein"],
        director: [
          "Jorge Nisco",
          "Martín Sabán"
        ],
        composer: [
          "Eduardo Emilio Frigerio",
          "Federico San Millán",
          "Florencia Ciarlo",
        ],
        writtenBy: [
          "Gabriela Fiore",
          "Jorge Edelstein",
        ],
        themeSong: ["'Alas' by Karol Sevilla"],
        firstAirDate: "March 14, 2016",
        lastAirDate: "August 17, 2018",
        status: "ended",
        language: "Spanish",
        plot: "Luna Valente lives with her family in Cancún, Mexico. She goes to school, has her own group of friends, has a job, and loves to skate. However, her life changes when her parents are given a job offer that moves them to Buenos Aires, Argentina. There she finds a skating rink named Jam and Roller where she learns free styling. She makes new friends and falls in love with Matteo Balsano.",
        mainCharacters: [
            {
                id: "luna-valente", 
                label: "Luna",
                firstName: "Luna",
                lastName: "Valente", 
                imageUrl: "https://pbs.twimg.com/media/FMki-HEVQAAlv7P.jpg",  
                actor: "Karol Sevilla", 
                personality: "Luna is a sweet, cheerful and big-hearted girl from Mexico. She is optimistic, loyal to her friends and family, and incredibly determined: once she sets herself a goal, she works hard until she reaches it.",    
                promo: true,
            },
            {
                id: "matteo-balsano", 
                label: "Matteo",
                firstName: "Matteo",
                lastEpisode: "Balsano", 
                imageUrl: "https://i.pinimg.com/736x/6a/aa/f1/6aaaf1adbf0e841fa0257a352db1d031.jpg", 
                actor: "Ruggero Pasquarelli", 
                personality: "Matteo starts out as a very presumptuous, vain and seemingly superficial boy, proud of being the 'King of the Track'. Behind the arrogance, he is intelligent, passionate about skating and music, and he gradually shows a genuinely caring and protective side, especially with Luna.",
                promo: true
            },
            {
                id: "simon-alvarez", 
                label: "Simón",
                firstName: "Simón", 
                lastName: "Álvarez",
                imageUrl:  "https://pbs.twimg.com/profile_images/782192147793674244/I0H9Ia9N_400x400.jpg", 
                actor: "Micheal Ronda",
                personality: "Simón is funny, warm and deeply caring. He loves music and skating, is humble and encouraging, and is always ready to support his friends. He often puts other people’s happiness before his own, especially when it comes to Luna.",
                promo: true
            },
            {
              id: "ambar-smith", 
              label: "Ámbar", 
              firstName: "Ámbar",
              lastName: "Smith",
              imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiBer14JbcZC1cqz0-Cn7gzYUcNttoBotJ0y4eVub1a6HcSRgaGxzg1wE&s=10", 
              actor: "Valentina Zenere", 
              personality: "Ámbar is initially superficial, spoiled and very competitive. She craves attention, wants to be the best at everything and uses manipulation to get what she wants. Underneath her schemes she is insecure and jealous, especially of Luna’s loving family, and over time her more vulnerable and conflicted side appears.",
              promo: true
            },
            {
              id: "nina-simonetti", 
              label: "Nina", 
              firstName: "Nina",
              lastName: "Simonetti",
              imageUrl: "https://i.pinimg.com/564x/88/72/a2/8872a20dd293eb403e2efb6206e90566.jpg", 
              actor: "Carolina Kopelioff", 
              personality: "Nina is highly intelligent, curious and a bit of a bookworm. She is shy, introverted and insecure at first, often hiding behind her anonymous online persona, but she is also kind, thoughtful and idealistic, slowly learning to believe in herself.",
              promo: true
            },
            {
              id: "delfi-alzamendi", 
              label: "Delfi", 
              firstName: "Delfina",
              lastName: "Alzamendi",
              imageUrl: "https://i.pinimg.com/474x/c3/2f/e4/c32fe4f983dfa2a8f2c5707ec8358de2.jpg", 
              actor: "Malena Ratner",
              personality: "Delfi starts out as a vain, judgmental and gossip-loving girl who follows Ámbar’s lead and cares a lot about image and social media. Underneath she is sensitive, loyal and capable of real kindness, and as she grows, she becomes more independent, empathetic and emotionally mature.", 
              nickname: ["Delfi"],
              promo: true
            },
            {
              id: "gaston-battan", 
              label: "Gastón", 
              firstName: "Gastón",
              lastName: "Battán",
              imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2PcUNF_rVxlnWihDPFgSdI1lDr6k5JkPhy1OzXvePu5kObfJz8Kyr-SY&s=10", 
              actor: "Agustìn Bernasconi", 
              personality: "Gastón is popular, charming and confident, but also respectful, rational and more grounded than Matteo. He loves music and books, especially science fiction, and often acts as the voice of reason, even while struggling with his own feelings and expectations.", 
              promo: true
            },
            {
              id: "jazmin-carvajal", 
              label: "Jazmín", 
              firstName: "Jazmín",
              lastName: "Carvajal",
              imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMC2ffTEGTHUd_PG_VR6kuo89IQR1lvI63eiA8Tn7u1QJMxlfcUK7u-Pk&s=10", 
              actor: "Katja Martínez", 
              personality:"Jazmín is energetic, dramatic and very talkative, with absolutely no filter. She is obsessed with trends and online fame, often naïve and clueless about what is really going on around her, but she is also affectionate, loyal and capable of real growth when she learns to think for herself.",
              promo: true
            },
            {
              id: "jim-medina", 
              label: "Jim",
              firstName: "Jimena",
              lastName: "Medina", 
              imageUrl: "https://i.pinimg.com/564x/d1/fb/f9/d1fbf97052e502657c3d99a9c4f854f7.jpg", 
              actor: "Ana Jara" , 
              personality: "Jim is creative, impulsive and full of ideas. She is sweet, friendly and very expressive, with a huge passion for dance and choreography. Together with Yam she is bold and adventurous, even if her impulsiveness sometimes gets her into trouble.",
              promo: true
            },
            {
              id: "yam-sanchez", 
              label: "Yam", 
              firstName: "Yamila",
              lastName: "F. Sánchez",
              imageUrl: "https://i.pinimg.com/474x/99/20/4a/99204a7ddc1e80b9289d460df7046a14.jpg", 
              actor: "Chiara Parravicini", 
              personality: "Yam is emotional, romantic and very passionate about music and fashion. She can be insecure and jealous, but she is loyal, hard-working and caring with the people she loves, especially Jim and Ramiro. She grows a lot in self-confidence over the series.",
              promo: true
            },
            {
              id: "ramiro-ponce",
              firstName: "Ramiro",
              lastEpisode: "Ponce", 
              imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjUIZ2hYuSBkVMxmSRHNKOx4WkG1cXGJek5g&s", 
              actor: "Jorge López", 
              personality: "Ramiro is proud, ambitious and easily frustrated when things don’t go his way. He can come across as arrogant and selfish, but behind that he is disciplined and passionate about dance and skating, and he gradually learns to accept his mistakes and show his softer side.",
              promo: true
            },
            {
              id: "pedro-arias",
              firstName: "Pedro",
              lastName: "Arias",
              imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCqrIy9b8aM3nrOH9OMPTqGPMoNnK_qQdLyDhTR01Ob8m9KBQVhAgrUkw&s=10", 
              actor:"Gastón Vietto", 
              personality: "Pedro is good-natured, loyal and slightly awkward, with a big heart. He works hard, loves music and drumming, and is deeply supportive of his friends. He often downplays his own feelings, especially when it comes to love, in order to not hurt anyone.",
              promo: true
            },
            {
              id: "nico-navarro",
              label: "Nico", 
              firstName: "Nicolás",
              lastName: "Navarro",
              imageUrl: "https://pbs.twimg.com/media/CcAai_hWoAEkDs1.jpg", 
              actor: "Lionel Ferro", 
              personality: "Nico is warm, friendly and easy-going, the kind of guy people feel comfortable with right away. He is supportive, fun and a bit goofy, dreams about making music with Pedro, and often acts as a calm, positive presence in the group.",
              promo: true
            },
            {
              id: "tamara-rios",
              firstName: "Tamara",
              lastName: "Ríos", 
              imageUrl: "https://i.ytimg.com/vi/qIa1PHwfBhQ/maxresdefault.jpg", 
              actor: "Luz Capriota", 
              personality: "Tamara is responsible, strict and highly organized, but also fair and caring. As the manager of Jam & Roller she demands discipline and professionalism, yet she genuinely believes in the kids’ talent and acts like a mentor and protective older sister.", 
              promo: true,
            },
            {
              id: "sharon-benson",
              label: "Mrs. Benson",
              firstName: "Sharon",
              lastName: "Benson", 
              imageUrl: "https://pbs.twimg.com/profile_images/896031069849497601/mFX48SWF_400x400.jpg",  
              actor:"Lucila Gandolfo", 
              personality: "Sharon is elegant, cold and calculating. She is a sophisticated businesswoman who is obsessed with control and appearances, willing to lie and manipulate to protect her fortune and her version of the past. Her cruelty often hides deep guilt, fear and denial.",
              promo: true
            },
            {
              id: "rey",
              label: "Rey",
              firstName: "Reinaldo", 
              imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeTnM8jeVkNkCO0yXhd6dwZYQ1O-fZYq8Idg&s", 
              actor: "Rodrigo Pedreira", 
              personality: "Rey is serious, meticulous and extremely loyal to Sharon. He usually shows a stiff, formal and almost emotionless exterior, but he is also anxious and conflicted when their schemes go too far. Over time, his conscience starts to clash with his loyalty.",
              promo: true
            },
            {
              id: "miguel-valente",
              firstName: "Miguel", 
              lastName: "Valente",
              imageUrl: "https://tiermaker.com/images/chart/chart/soy-luna-characters-520944/migueljpg.png", 
              actor: "David Muri", 
              personality: "Miguel is kind, honest and hard-working. He is a devoted father and husband, protective of Luna and always trying to do what is best for his family, even when that means making sacrifices or enduring Sharon’s authority.",
              promo: true
            },
            {
              id: "monica-valente",
              firstName: "Mónica", 
              lastName: "Valente",
              imageUrl: "https://assets.puzzlefactory.com/puzzle/352/239/original.jpg", 
              actor: "Ana Carolina Valsagna", 
              personality: "Mónica is warm, maternal and supportive. She worries a lot and is often emotional, but she is brave when it comes to defending Luna. She acts as an anchor and emotional support for both Luna and Miguel.",
              promo: true
            },
            {
              id: "tino-alcaraz",
              label: "Tino", 
              firstName: "Martin",
              lastName: "Alcaraz",
              imageUrl: "https://i.ytimg.com/vi/yKWQNxzYAb4/maxresdefault.jpg", 
              actor: "Diego Sassi Alcalá", 
              personality: "Tino is clumsy, goofy and comedic. He is well-meaning but not very bright, often messing things up in a funny way. Despite his silliness, he is loyal and affectionate towards his friends, especially Cato and the Valente family.",
              promo: true
        },
            {
              id: "cato-alcoba",
              label: "Cato", 
              firstName: "Catolino",
              lastName: "Alcoba",
              imageUrl: "https://i.ytimg.com/vi/3NX13Fny2q8/maxresdefault.jpg", 
              actor: "Germán Tripel", 
              personality: "Cato is also a comic character, anxious and a bit neurotic compared to Tino. He worries about rules and getting into trouble, but goes along with schemes anyway. He is kind-hearted and, in his own odd way, very loyal and caring.",
              promo: true,
            },
            {
              id: "amanda-alcoba",
              firstName: "Amanda",
              lastName:  "Alcoba",
              imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo_VfmxLHXpptU86cN1cWJ_E3QZonZdxQ5APCZqgZaB5t_ku7tHNB00AiW&s=10", 
              actor: "Antonella Querzoli", 
              personality: "Amanda often appears cold, strict and distant, but behind that façade she is deeply caring and protective. She is kind to Luna and the Valente family, takes her work seriously and is always willing to help the people she loves, even if she doesn’t always show her feelings openly.", 
              promo: true
            },
            {
              id: "ricardo-simonetti",
              firstName: "Ricardo", 
              lastName: "Simonetti",
              imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3UB2pHyomDgZqpyZUrAK0DC0JaLaZENqJTAMKlA0kYOCNbnoCAQ-01Tw&s=10", 
              actor: "Ezequiel Rodríquez", 
              personality: "Ricardo is creative, absent-minded and somewhat immature at times, but he has a good heart. As Nina’s father he is loving yet clumsy, often not realizing how his choices affect her. Over time he grows more responsible and emotionally open.",
              promo: true
            },
            {
              id: "ana-valparaiso",
              firstName: "Ana", 
              lastName: "Valparaíso",
              imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdo8WoJ7qgNFa-krOzZX4rHSz839_tSIqUGusrDNCCoSlwnE7eKeDVwQxg&s=10", 
              actor: "Caro Ibarro", 
              personality: "Ana is intelligent, strong-willed and professional. She can seem strict or distant, but she cares deeply about Nina and struggles with guilt over past decisions. She learns to communicate better and to balance work with her role as a mother.",
              promo: true,
            },
            {
              id: "mora-barza",
              firstName: "Mora",
              lastName: "Barza",
              imageUrl:  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBFKSCY4aoMvwJfF-2gRsu-x-fTNa7W4RHHlhMwSE7mNEGzZC_P8AnvSE&s=10", 
              actor: "Paula Kohan", 
              personality: "Mora is stylish, confident and creative, with a strong sense of aesthetics. She is initially self-focused and a bit dramatic, but she is also supportive and protective, especially toward Ana, Nina and the Jam & Roller kids.",
              promo: true
        
            },
            {
              id: "juliana",
              label: "Juliana",
              firstName: "Marisa",
              lastName: "Mint", 
              imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRteeJAFNTZcRv0VR-hY8ldSNeRaVTCCvYkMjcFhY9ttgXnZ_c_UDtVNoc&s=10", 
              actor:"Estela Ribeiro", 
              personality: "Juliana, known as Marisa Mint, is disciplined, demanding and highly perfectionistic. She is tough on her students and hides her emotions behind a strict professional façade, but deep down she is passionate about skating and wants to help them reach their full potential.",
              promo: true
            },
            {
              id: "alfredo-bilder",
              firstName: "Alfredo", 
              lastName: "Bilder",
              imageUrl: "https://i0.wp.com/nicolasisasi.com/wp-content/uploads/2023/11/roberto_carnaghi-isasi-web-1.jpg?ssl=1", 
              actor:"Roberto Carnaghi", 
              personality: "Alfredo is gentle, wise and somewhat melancholic. As the elder of the family he regrets past mistakes and wants to repair the damage done. He is affectionate with Luna and tries to guide others toward truth and reconciliation.",
                promo: true
            },
            {
              id: "gary-lopez",
              firstName: "Gary", 
              lastName: "Lopez",
              imageUrl: "https://vignette.wikia.nocookie.net/soyluna/images/b/bd/Gary.jpg/revision/latest?cb=20200625095218", 
              actor: "Joaquín Berthold", 
              personality: "Gary is ambitious, controlling and opportunistic. He focuses on profit and image more than on people’s feelings, and he has no problem using pressure or manipulation to get what he wants from the skaters and the rink.",
              promo: true
            },
            {
              id: "benicio",
              firstName: "Benicio", 
              imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMvE4a-6JLHaZ1DvF2uKuPiS6uWuu5gMs7HyQ_Xrw5T2GUGrAMHVRWMNU&s=10", 
              actor: "Pasquale Di Nuzzo", 
              personality: "Benicio is arrogant, competitive and manipulative. He enjoys provoking others and uses his charm in a self-serving way. Even so, his jealousy and insecurity are often what push him into schemes and bad decisions.",
              promo: true
            },
            {
              id: "emilia",
              firstName: "Emilia", 
              imageUrl: "https://i.pinimg.com/736x/a6/ea/20/a6ea2069ff3aef1a27e5f6c098d7ba97.jpg", 
              actor: "Giovanna Reynaud", 
              personality:     "Emilia is confident, ambitious and highly competitive. She often comes across as arrogant and sharp-tongued, especially when she feels her spotlight is threatened. Behind her tough and glamorous exterior, she is deeply insecure and vulnerable, craving recognition and genuine affection. Over time she reveals a more sensitive and loyal side, especially in her relationship with Benicio and when she finally allows herself to be honest about her feelings.",
              promo: true
            },
            {
              id: "eric-andrande",
              firstName: "Eric", 
              lastName: "Andrande",
              imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNLFUkBgu3XYv3K2nlzIafHSlw76-eoFQZ1AOqdFo6TQXkilnF848NGIMM&s=10", 
              actor: "Jandino", 
              personality:"Eric is kind, a bit shy and slightly awkward, especially when it comes to his crush on Nina. He genuinely wants to help and do a good job at the rink, but often finds himself overwhelmed by Gary’s pressure and the complicated dynamics around him rather than creating drama himself.",
              promo: true
            },
            {
              id: "maggie-garcia",
              label: "Maggie",
              firstName: "Margarita",
              lastName: "García", 
              imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRitLGbjcYLFLEPC3W2dUF_AUMIFrXS13c0jg&s", 
              actor: "Victoria Suárez Battán", 
              personality: "Maggie starts as a sneaky, ambitious spy for Sharon and Rey, using her charm to get information. Underneath, she is insecure and longs for genuine affection. Her relationship with Rey brings out both her manipulative and her vulnerable sides.",
              promo: true
            }
        ],
        cast: [
          {
              character: "Luna Valente", 
              actor: "Karol Sevilla", 
          },
          {
              character: "Matteo Balsano", 
              actor: "Ruggero Pasquarelli", 
            },
          {
              character: "Simón Álvarez",
              imageUrl:  "https://pbs.twimg.com/profile_images/782192147793674244/I0H9Ia9N_400x400.jpg", 
              actor: "Micheal Ronda",
              },
          {
            character: "Ámbar Smith",
            actor: "Valentina Zenere", 
          },
          {
            character: "Nina Simonetti",
            actor: "Carolina Kopelioff", 
          },
          {
            character: "Delfi Alzamendi",
            actor: "Malena Ratner",
          },
          {
            character: "Gastón Battán",
            actor: "Agustìn Bernasconi", 
          },
          {
            character: "Jazmín Carvajal",
            actor: "Katja Martínez", 
            },
          {
            character: "Jim Medina", 
            actor: "Ana Jara" , 
            },
          {
            character: "Yam F. Sánchez",
            actor: "Chiara Parravicini", 
          },
          {
            character: "Ramiro Ponce", 
            actor: "Jorge López", 
          },
          {
            character: "Pedro Arias",
            actor:"Gastón Vietto", 
          },
          {
            character : "Nico Navarro",
            actor: "Lionel Ferro", 
          },
          {
            character: "Tamara Ríos", 
            actor: "Luz Capriota", 
          },
          {
            character: "Sharon Benson", 
            actor:"Lucila Gandolfo", 
          },
          {
            character: "Rey",
            actor: "Rodrigo Pedreira", 
          },
          {
            character: "Miguel Valente",
            actor: "David Muri", 
          },
          {
            character: "Mónica Valente",
            actor: "Ana Carolina Valsagna", 
          },
          {
            character: "Tino Alcaraz",
            actor: "Diego Sassi Alcalá", 
          },
          {
            character: "Cato Alcoba",
            actor: "Germán Tripel", 
          },
          {
            character: "Amanda Alcoba",
            actor: "Antonella Querzoli", 
          },
          {
            character: "Ricardo Simonetti",
            actor: "Ezequiel Rodríquez", 
          },
          {
            character: "Ana Valparaíso",
            actor: "Caro Ibarro", 
          },
          {
            character: "Mora Barza",
            actor: "Paula Kohan", 
          },
          {
            character: "Juliana", 
            actor:"Estela Ribeiro", 
          },
          {
            character: "Alfredo Bilder",
            actor:"Roberto Carnaghi", 
          },
          {
            character: "Gary Lopez",
            actor: "Joaquín Berthold", 
          },
          {
            character: "Benicio", 
            actor: "Pasquale Di Nuzzo", 
          },
          {
            character: "Emilia", 
            actor: "Giovanna Reynaud", 
          },
          {
            character: "Eric Andrande",
            actor: "Jandino", 
          },
          {
            character: "Maggie García", 
            actor: "Victoria Suárez Battán", 
          }
      ],
        seasons: [ 
          { 
            id: "soy-luna-season-1",
            seasonNumber: 1,
            episodeCount: 80,
            premiereDate: "March 14, 2016",
            finaleDate: "August 26, 2016",
            premiereEpisode: "Un sueño, sobre ruedas",
            finaleEpisode: "La final de la InterContinental, sobre ruedas",
            posterUrl: "https://fr.web.img5.acsta.net/pictures/19/09/29/10/35/5133862.jpg",
            title: "Soy Luna: Season 1",
          },
          { 
            id: "soy-luna-season-2",
            seasonNumber: 2,
            episodeCount: 80,
            premiereDate: "April 17, 2017",
            finaleDate: "September 29, 2017",
            premiereEpisode: "¿Un sueño o una pesadilla?, sobre ruedas",
            finaleEpisode: "La final de la Rodafest en México, sobre ruedas",
            posterUrl: "https://image.tmdb.org/t/p/original/78CUmir4MDINMKdkUt4TmW5d7k4.jpg",
            title: "Soy Luna: Season 2",
           }, 
          { 
            id: "soy-luna-season-3",
            seasonNumber: 3,
            episodeCount: 60,
            premiereDate: "April 16, 2018",
            finaleDate: "August 17, 2018",
            premiereEpisode: "El regreso, sobre ruedas",
            finaleEpisode: "Patinamos por una última vez",
            posterUrl: "https://media.themoviedb.org/t/p/w500/4lqWMdbwFmqd8IRpJdn9L2eXY6W.jpg",
            title: "Soy Luna: Season 3",
          
          },
        ],
        soundtrack: [
          {
            id: "soy-luna-album",
            type: "album",
            imgUrl: "https://static.wikia.nocookie.net/soyluna/images/d/db/SoylunaAlbumCover.jpg/revision/latest?cb=20160327032610",
            noImage: false,
            noSeason: 1,
          },
          {
            id: "soy-luna-música-en-ti",
            type: "album",
            imgUrl: "https://static.wikia.nocookie.net/soyluna/images/6/6c/M%C3%BAsicaAlbumCover.jpg/revision/latest?cb=20160903122315",
            noImage: false,
            noSeason: 1,
          },
          {
            id: "soy-luna-la-vida-es-un-sueño",
            type: "album",
            imgUrl: "https://static.wikia.nocookie.net/soyluna/images/2/2f/Lavidaesunsuenosoyluna.jpg/revision/latest/scale-to-width-down/1200?cb=20170312194137",
            noImage: false,
            noSeason: 2,
          },
          {
            id: "soy-luna-remixes",
            type: "album",
            imgUrl: "https://static.wikia.nocookie.net/soyluna/images/7/7e/Remixes.jpg/revision/latest?cb=20171006040803",
            noImage: false,
            noSeason: 2,
          },
          {
            id: "soy-luna-modo-amar",
            type: "album",
            imgUrl: "https://i.scdn.co/image/ab67616d00001e02d2e034bd34b62dffab26087a",
            noImage: false,
            noSeason: 3,
          },
        ],
        numberOfSeasons: 3,
        numberOfEpisodes: 220,
        prodCompanies: [
          "Pol-ka",
        ],
        executive: [
          "Diego Carabelli"
        ],
        producer: [
          "Adrián Suar",
          "Fernando Blanco",
        ],
        tags: [
          "Teen", 
          "Drama", 
          "Romance", 
          "Music", 
          "Telenovela"
        ],
        network: [
          "Disney Channel Latin America"
        ],
        related: [
          {
            id: "violetta", 
            title: "Violetta", 
            posterUrl: "https://filmgruvan.se/wp-content/uploads/2025/10/image-17.png",
          },
          {
            id: "soy-luna-live",
            title: "Soy Luna: Live",
            posterUrl: "https://static.wikia.nocookie.net/soyluna/images/c/c8/Soy_Luna_Live.jpg/revision/latest?cb=20170522205843",
          },
          {
            id: "soy-luna-the-last-concert",
            title: "Soy Luna: The Last Concert",
            posterUrl: "https://m.media-amazon.com/images/M/MV5BNDgxY2U3ZDUtZWQ4Yi00ZWEyLWE4YmQtNTNmZjQ3ZTlmN2RiXkEyXkFqcGc@._V1_.jpg",
          },
          {
            id: "bia", 
            title: "Bia", 
            posterUrl: "https://m.media-amazon.com/images/M/MV5BNmM3NDY2MzItZGFiYi00NzAxLThjODctMDgzZTE5YTIxY2NjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
          },
          {
            id: "soy-luna-volver-a-rodar", 
            title: "Soy Luna: Volver a rodar",
            posterUrl: "https://m.media-amazon.com/images/M/MV5BNWE4ODZlNDEtZDM4OS00NjRlLTk4NGYtMTIxMDNhOGJkOTRkXkEyXkFqcGc@._V1_.jpg",
          },

        ]
    },
    {
        id: "bia", 
        title: "Bia",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BNmM3NDY2MzItZGFiYi00NzAxLThjODctMDgzZTE5YTIxY2NjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        country: "Argentina",
        creator: [
          "Jorge Edelstein",
          "Marina Efron",
        ],
        writtenBy: [
          "Marina Efron",
          "Carmen López-Areal",
          "Matias Rodríguez",
          "Laura Farhi",
          "Ignacio Campón",
          "Andrés Rappaport",
        ],
        director: [
          "Jorge Bechara",
          "Daniel De Filippo",
        ],
        narrator: [
          "Isabela Souza"
        ],
        firstAirDate: "June 24, 2019",
        lastAirDate: "July 24, 2020",
        status: "ended",
        language: "Spanish",
        plot: "Bia loves drawing and painting. She and her two best friends spend their time in the Fundom, a place where they and influencers enjoy showing their talents, especially dancing and singing. On the other hand, LAIX is a network where its CEO only wants fame and money.",
        mainCharacters: [
          {
            id: "bia-urquiza",
            firstName: "Beatriz",
            lastName: "Urquiza",
            imageUrl: "https://static.wikia.nocookie.net/bia_deutschland_0/images/f/f4/Bia_Urquiza.jpeg/revision/latest/thumbnail/width/360/height/450?cb=20200331051633&path-prefix=de",
            posterUrl: "https://static.wikia.nocookie.net/p__/images/c/c7/Bia_2019.jpg/revision/latest?cb=20211116015524&path-prefix=",
            promo: true,
            nickname: ["Bia"],
            goesByNickname: true
          },
          {
            id: "ana-da-silvo",
            firstName: "Ana",
            lastName: "Da Silvo",
            imageUrl: "https://i.pinimg.com/originals/0f/ab/7b/0fab7bdf9b9df804f6895aa60f66082b.jpg",
            posterUrl: "https://i.pinimg.com/1200x/7a/05/02/7a05021bbb65ae7f3883f42f296a219d.jpg",
            promo: true,
            nickname: ["Helena Urquiza"]
          },
          {
            id: "manuel-guitiérrez-quemola",
            firstName: "Manuel",
            lastName: "Guitiérrez Quemola",
            imageUrl: "https://i.pinimg.com/736x/06/28/e1/0628e1af516ad8853df198dd5aba3f77.jpg",
            promo: true,
          },
          {
            id: "victor-guitierrez",
            firstName: "Victor",
            lastName: "Guitiérrez",
            imageUrl: "https://i.pinimg.com/originals/1e/e6/18/1ee618aed0961235e97555ac0c69f6e5.jpg",
            posterUrl: "https://static.wikia.nocookie.net/p__/images/c/c7/Bia_2019.jpg/revision/latest?cb=20211116015524&path-prefix=",
            promo: true,
          },
          {
            id: "celeste-quinterro",
            firstName: "Celeste",
            lastName: "Quinterro",
            imageUrl: "https://static.wikia.nocookie.net/bia_deutschland_0/images/6/6c/Celeste_Quintero.jpeg/revision/latest?cb=20200331052700&path-prefix=de",
            posterUrl: "https://i.pinimg.com/736x/fc/25/f5/fc25f5bf2a4eba8ba2fefca77f394989.jpg",
            promo: true,
          },
          {
            id: "chiara-callegri",
            firstName: "Chiara",
            lastName: "Callegri",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcw4u1SoncogEu0zlpVkGsTH4lwc7YjqLF-7KnK5vDxxPL4n2MzJ8-dI21&s=10",
            promo: true,
          },
          {
            id: "carmín-laguardia",
            firstName: "Carmín",
            lastName: "Laguardia",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg_W8Epim8e-FCv73KBnHoRiGX-CA8MKWzC4e_wylXxzZULirsaJmvtima&s=10",
            promo: true,
          },
          {
            id: "alex-gutiérrez",
            firstName: "Alex",
            lastName: "Gutiérrez",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCfxLZxKpmaws8Des01tSwTeYEvl1t97T-ihS8Ih6-W7WmrVDxvkJ6ZQc&s=10",
            promo: true,
          },
          {
            id: "pixie-ocaranta",
            firstName: "Isabel",
            lastName: "Ocaranta",
            imageUrl:  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1BsCyTx4AsyEDOU5pa9cUI0ZX_HC-5PTFSdNUvvYAiGqVWT4uwGGHtzA&s=10",
            promo: true,
            nickname: ["Pixie"],
            goesByNickname: true,
          },
          {
            id: "daisy-durant",
            firstName: "Daisy",
            lastName: "Durant",
            imageUrl: "https://static.wikia.nocookie.net/bia/images/3/36/Capture.PNG-1.png/revision/latest?cb=20191009170801&path-prefix=es",
            promo: true,
          },
          {
            id: "mara-morales",
            firstName: "Mara",
            lastName: "Morales",
            imageUrl: "https://static.wikia.nocookie.net/disney/images/f/f5/Mara_Morales.jpg/revision/latest?cb=20201003171349&path-prefix=es",
            posterUrl: "https://static.wikia.nocookie.net/p__/images/c/c7/Bia_2019.jpg/revision/latest?cb=20211116015524&path-prefix=",
            promo: true,
          },
          {
            id: "pietro-benedetto-junior",
            firstName: "Pietro",
            lastName: "Benedetto Junior",
            imageUrl: "https://static.wikia.nocookie.net/bia/images/6/6d/Images-2.jpg/revision/latest?cb=20191010150829&path-prefix=es",
            promo: true,
          },
          {
            id: "thiago-kunst",
            firstName: "Thiago",
            lastName: "Kunst",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBwMY2l4hHS0eCUfHQFHwssBfbK4XsMdahdfLrKWHtCw&s=10",
            promo: true,
          },
          {
            id: "guillermo-ruiz",
            firstName: "Guillermo",
            lastName: "Ruiz",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRl6GvVoYoN6VVLmaZVOTX1JSoRjZwRlgf97pY_Fjn_KohiQFrJ1BYghDq&s=10",
            promo: true,
          },
          {
            id: "marcos-golden",
            firstName: "Marcos",
            lastName: "Golden",
            imageUrl:  "https://static.wikia.nocookie.net/villains/images/0/06/Mark_bia.jpg/revision/latest?cb=20211015145559",
            promo: true,
          },
          {
            id: "jhon-caballero",
            firstName: "Jhon",
            lastName: "Caballero",
            imageUrl: "https://static.wikia.nocookie.net/bia/images/a/aa/Jhon.jpg/revision/latest/scale-to-width-down/277?cb=20190425072342&path-prefix=pt-br",
            promo: true,
          },
          {
            id: "aillén",
            firstName: "Aillén",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9M8FnBU4pvStQpsysx5dVu7Y7-I1fUKKgRN5QKU3AiYkQBVvQ_4kzTDU&s=10",
            promo: true,
          },
          {
            id: "jandino-bia",
            firstName: "Jandino",
            imageUrl: "https://i.pinimg.com/564x/50/18/9e/50189e2c49785175b0db558dddbf7bb5.jpg",
            promo: true,
          },
          {
            id: "antonio-gutiérrez",
            firstName: "Antonio",
            lastName: "Gutiérrez",
            imageUrl: "https://static.wikia.nocookie.net/villains/images/3/38/Antonio_gutierrez_bia.png/revision/latest?cb=20211102194159",
            promo: false,
          },
          {
            id: "alice-urquiza",
            firstName: "Alice",
            lastName: "Urquiza",
            imageUrl: "https://i.pinimg.com/236x/86/9d/ac/869dac9f17b23cb992e224ffaaebdfcd.jpg",
            promo: false,
          },
          {
            id: "mariano-urquiza",
            firstName: "Mariano",
            lastName: "Urquiza",
            imageUrl: "https://static.wikia.nocookie.net/disneybia/images/d/dc/Captura.PNG/revision/latest/thumbnail/width/360/height/450?cb=20200615061239",
            promo: false,
          },
          {
            id: "paula-gutiérrez",
            firstName: "Paula",
            lastName: "Gutiérrez",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEdFg5DOiGlukXkVZDNacWQ9i0-7-Be3oXJ7OZLTUMJcTtrySi4SBodd4&s=10",
            promo: false,
          },
          {
            id: "luan",
            firstName: "Luan",
            imageUrl: "https://pbs.twimg.com/media/ESOXvF8XkAAiDPR?format=jpg&name=small",
            promo: true,
          },
        ],
        cast: [
          {
            actor: "Isabela Souza",
            character: "Beatriz 'Bia' Urquiza"
          },
          {
            actor: "Gabriella Di Grecco", 
            character: "Ana Da Silvo / Helena Urquiza",
          },
          {
            actor: "Julio Peña Fernández",  
            character: "Manuel Gutierrez Quemol",
          },
          {
            actor: "Fernando Dente",
            character: "Víctor Gutiérrez"
          },
          {
            actor: "Agustina Palma", 
            character: "Celeste Quinterro"
          },
          {
            actor: "Giulia Guerrini", 
            character: "Chiara Callegri"
          },
          {
            actor: "Andrea de Alba", 
            character: "Carmín Laguardia"
          },
          {
            actor: "Guido Messina",
            character: "Alex Gutiérrez"
          },
          {
            actor: "Daniela Trujillo",
            character: "Isabel 'Pixie' Ocaranta"
          },
          {
            actor: "Micaela Diaz", 
            character: "Daisy Durant"
          },
          {
            actor: "Julia Argüelles",
            character: "Mara Morales"
          },
          {
            actor: "Alan Madanes",
            character: "Pietro Benedetto Junior",
            },
          {
            actor: "Rhener Freitas", 
            character: "Thiago Kunst"
          },
          {
            actor: "Esteban Velásquez",
            character: "Guillermo Ruiz",
          },
          {
            actor: "Rodrigo Rumi",
            character: "Marcos Golden"
          },
          {
            actor: "Luis Giraldo", 
            character: "Jhon Caballero", 
          },
          {
            actor: "Valentina González", 
            character: "Aillén"
          },
          {
            actor: "Jandino", 
            character: "himself"
          },
          {
            actor: "Sergio Surraco", 
            character: "Antonio Gutiérrez",
          },
          {
            actor: "Estela Ribeiro", 
            character: "Alice Urquiza"
          },
          {
            actor: "Alejandro Botto", 
            character: "Mariano Urquiza"
          },
          {
            actor: "Mariela Pizzo",
            character: "Paula Gutiérrez",
          },
          {
            actor: "André Lamoglia",
            character: "Luan",
          },
        ],
        seasons: [
          {
            id: "bia-season-1",
            title: "Bia, Season 1",
            posterUrl: "https://m.media-amazon.com/images/M/MV5BNmM3NDY2MzItZGFiYi00NzAxLThjODctMDgzZTE5YTIxY2NjXkEyXkFqcGc@._V1_.jpg",
            seasonNumber: 1,
            plot: "Season 1 of the Disney Channel Latin America series Bia follows Beatriz “Bia” Urquiza, a 16-year-old artist who loves to draw and secretly sings. Ten years prior, a tragic car accident supposedly killed her older sister Helena and Lucas Gutiérrez, leaving Lucas's brother Víctor paralyzed in a wheelchair.",
            premiereDate: "June 24, 2019",
            finaleDate: "November 8, 2019",
            premiereEpisode: "Colorear una nueva aventura",
            finaleEpisode: "Episodio 60",
            episodeCount: 60,
          },
          {
            id: "bia-season-2",
            title: "Bia, Season 2",
            posterUrl: "https://media.themoviedb.org/t/p/w500/pl1ackFsRBLIRaXiuKUS6UjDLOo.jpg",
            seasonNumber: 2,
            plot: "Season 2 of the Disney Channel Latin America series Bia follows Bia and her friends as they fight to protect the FUNDOM, uncover dark family secrets regarding the tragic car accident that separated the Urquiza and Gutiérrez families, and navigate shifting romantic relationships.",
            premiereDate: "March 16, 2020",
            finaleDate: "July 24, 2020",
            premiereEpisode: "Novos começos",
            finaleEpisode: "Episodio 60",
            episodeCount: 60,
          },
        ],
        soundtrack: [
          {
            id: "bia-season-1-album",
            type: "album",
            imgUrl: "https://i.ebayimg.com/images/g/5jwAAOSw97peM-jM/s-l400.jpg",
            noSeason: 1,
            noImage: false,
          },
          {
            id: "bia-si-vuelvo-a-nacer",
            type: "album",
            imgUrl: "https://static.wikia.nocookie.net/disneybia/images/1/1a/Si_vuelvo_a_nacer.jpg/revision/latest?cb=20221129171131",
            noSeason: 1,
            noImage: false,
          },
          {
            id: "bia-grita",
            type: "album",
            imgUrl: "https://static.wikia.nocookie.net/disneybia/images/7/78/Grita_de_Bia.jpg/revision/latest?cb=20221129053540",
            noSeason: 2,
            noImage: false,
          },
        ],
        numberOfSeasons: 2,
        numberOfEpisodes: 120,
        prodCompanies: [
          "Non Stop Producciones",
          "Pegsa Group",
        ],
        prodLocation: [
          "Buenos Aries, Argentina"
        ],
        tags: [
          "Teen", 
          "Drama", 
          "Romance", 
          "Music", 
          "Telenovela"
        ],
        network: [
          "Disney Channel Latin America"
        ],
        related: [ 
          { 
            id: "soy-luna", 
            title: "Soy Luna", 
            posterUrl: "https://cdn.europosters.eu/image/1300/33470.jpg",
          },
          { 
            id: "bia-un-mundo-al-revés", 
            title: "Bia: Un mundo al revés",
            posterUrl: "https://m.media-amazon.com/images/M/MV5BYjFhZDE5MmQtMjhkYS00MjM5LWIzYmMtZWExMzcwMDZkOGQ1XkEyXkFqcGc@._V1_.jpg",
          },
        ]
    },
    {
        id: "wizards-of-waverly-place", 
        title: "Wizards of Waverly Place",
        posterUrl: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p7896447_b_v13_aa.jpg",
        country: "United States",
        creator: [
          "Todd J. Greenwald"
        ],
        director: [
          "Victor Gonzalez",
          "Bob Koherr"
        ],
        themeSong: ["'Everything Is Not What It Seems' by Selena Gomez"],
        composer: [
          "John Adair",
          "Steve Hampson",
        ],
        firstAirDate: "October 12, 2007",
        lastAirDate: "January 6, 2012",
        status: "ended",
        language: "English",
        plot: "The Russo family consists of three siblings who are wizards in training. They must compete to see who will become the family wizard, while also dealing with the challenges of growing up.",
        mainCharacters: [
          {
            id: "alex-russo",
            firstName: "Alexandra",
            middleName: "Margarita",
            lastName: "Russo",
            imageUrl: "https://akns-images.eonline.com/eol_images/Entire_Site/2023227/rs_1200x1200-230327145631-1200-Selena_Gomez-The_Wizards_of_Waverly_Place-gj.jpg?fit=around%7C1200:1200&output-quality=90&crop=1200:1200;center,top",
            posterUrl: "https://static.wikia.nocookie.net/wizardsofwaverlyplace/images/4/4c/Alex_Russo.jpg/revision/latest?cb=20130710142823",
            nickname: ["Alex"],
            promo: true,
            goesByNickname: true,
          },
          {
            id: "justin-russo",
            firstName: "Justin",
            middleName: "Vincenzo Pepe",
            lastName: "Russo",
            imageUrl: "https://disneynews.us/wp-content/uploads/2022/10/Justin-Russo-Wizards-of-Waverly-Place-disney.jpg",
            posterUrl: "https://static.wikia.nocookie.net/wizardsofwaverlyplace/images/2/25/Justin_Russo_WOWP_Season_1_Promo_1.jpg/revision/latest?cb=20241017143507",
            promo: true,
            goesByNickname: true,
          },
          {
            id: "max-russo",
            firstName: "Maximilian",
            middleName: "Alonzo Ernesto",
            lastName: "Russo",
            imageUrl: "https://pbs.twimg.com/media/GbHgtzKbQAIVbH4.jpg",
            posterUrl: "https://static.wikia.nocookie.net/wizardsofwaverlyplace/images/5/5c/Max-full.png/revision/latest?cb=20201205233748",
            promo: true,
            nickname: ["Max"],
            goesByNickname: true,
          },
          {
            id: "harper-finkle",
            firstName: "Harper",
            lastName: "Finkle",
            imageUrl: "https://i.pinimg.com/736x/54/37/a6/5437a66dd957a627ecd411c83849efca.jpg",
            posterUrl: "https://static.wikia.nocookie.net/feiticeirosdewaverly/images/9/90/Stone.jpg/revision/latest/scale-to-width-down/284?cb=20100101152548&path-prefix=pt-br",
            promo: true,
          },
          {
            id: "theresa-russo",
            firstName: "Theresa",
            lastName: "Russo",
            imageUrl: "https://i.pinimg.com/736x/7d/5e/88/7d5e88764bd49457ba941c9cb48bc331.jpg",
            posterUrl: "https://i.pinimg.com/736x/1c/18/95/1c18951ca00170468398ee8ce6038b9a.jpg",
            promo: true,
          },
          {
            id: "jerry-russo",
            firstName: "Jerry",
            lastName: "Russo",
            imageUrl: "https://i.pinimg.com/736x/da/52/d0/da52d07fc7d6b3f3672b85713684b10e.jpg",
            posterUrl: "https://i.pinimg.com/736x/38/a9/d8/38a9d82d458d4f4a8e8cca041b7d2215.jpg",
            promo: true,
          },
        ],
        cast: [
          {
            character: "Alex Russo",
            actor:	"Selena Gomez"
          },
          {
            character: "Justin Russo",
            actor:	"David Henrie"
          },
          {
            character: "Max Russo",
            actor:	"Jake T. Austin"
          },
          {
            character: "Harper Finkle",
            actor:	"Jennifer Stone"
          },
          {
            character: "Theresa Russo",
            actor:	"Maria Canals Barrera"
          },
        ],
        seasons: [
          {
            id: "wizards-of-waverly-place-season-1",
            posterUrl: "https://media.themoviedb.org/t/p/w500/2SmFys0SlQTeTSdaGkXXZ4CFlu7.jpg",
            seasonNumber: 1,
            episodeCount: 21,
          },
          {
            id: "wizards-of-waverly-place-season-2",
            posterUrl: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p7896447_b_v13_aa.jpg",
            seasonNumber: 2,
            episodeCount: 30,
          },
          {
            id: "wizards-of-waverly-place-season-3",
            posterUrl: "https://m.media-amazon.com/images/M/MV5BMjhlMTJiNjctZTY2MC00YTU0LWEzODUtZGM2NDA3N2ZhYWQ2XkEyXkFqcGc@._V1_.jpg",
            seasonNumber: 3,
            episodeCount: 28,
          },
          {
            id: "wizards-of-waverly-place-season-4",
            posterUrl: "https://static.wikia.nocookie.net/international-entertainment-project/images/0/01/Wizards_of_Waverly_Place_-_poster.jpg/revision/latest/scale-to-width-down/1200?cb=20230123232908",
            seasonNumber: 4,
            episodeCount: 27,
          },
        ],
        soundtrack: [
          {
            id: "wizards-of-waverly-place-season-1-soundtrack",
            type: "soundtrack",
            noImage: true,
            noSeason: 1,
          },
          {
            id: "wizards-of-waverly-place-season-2-soundtrack",
            type: "soundtrack",
            noImage: true,
            noSeason: 2,
          },
          {
            id: "wizards-of-waverly-place-season-3-soundtrack",
            type: "soundtrack",
            noImage: true,
            noSeason: 3,
          },
          {
            id: "wizards-of-waverly-place-season-4-soundtrack",
            type: "soundtrack",
            noImage: true,
            noSeason: 4,
          },
        ],
        executive: [
          "Todd J. Greenwald",
          "Peter Murrieta",
          "Vince Cheung",
          "Ben Montanio",
        ],
        producer: [
          "Greg A. Hampton"
        ],
        prodCompanies: ["It's a Laugh Productions"],
        numberOfSeasons: 4,
        numberOfEpisodes: 106,
        tags: ["Comedy", "Fantasy", "Family"],
        network: ["Disney Channel"],
        related: [
          { 
            id: "the-wizards-return-alex-vs-alex", 
            title: "The Wizards Return: Alex-vs. Alex",
            posterUrl: "https://upload.wikimedia.org/wikipedia/en/4/4e/The_Wizards_Return-Alex_vs._Alex.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
          },
          { 
            id: "wizards-of-waverly-place-the-ovie", 
            title: "Wizards of Waverly Place: The Movie",
            posterUrl: "https://upload.wikimedia.org/wikipedia/en/1/1a/Wizards_of_Waverly_Place_The_Movie_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
          },
          { 
            id: "wizards-beyond-waverly-place",
            title: "Wizards Beyond Waverly Place",
            posterUrl: "https://resizing.flixster.com/1FW_nMMAF9I2mzhMxnTG6SV8LV0=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vMTcwZDFjMTEtYzZjNS00MDUwLWEzZGUtYmVjMWI3M2I5MTI5LmpwZw==",
          },
        ]
    },
    {
        id: "austin-and-ally", 
        title: "Austin and Ally",
        posterUrl: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9901012_b_v8_aa.jpg",
        creator: [
          "Kevin Kopelow",
          "Heath Seifert",
        ],
        mainCharacters: [
          {
            id: "austin-moon",
            firstName: "Austin",
            middleName: "Monica",
            lastName: "Moon",
            imageUrl: "https://static.wikia.nocookie.net/austinally/images/9/9c/Austin_Moon.jpg/revision/latest?cb=20130227144546",
            posterUrl: "https://preview.redd.it/why-do-you-think-ross-lynch-never-made-it-in-hollywood-v0-22yp6iljtrud1.jpg?width=600&format=pjpg&auto=webp&s=39cd1d459a64c6d5d3ffb4de554ae6529c082818",
            promo: true,
          },
          {
            id: "ally-dawson",
            firstName: "Ally",
            middleName: "Edgar",
            lastName: "Moon",
            imageUrl: "https://static.wikia.nocookie.net/austinally/images/6/62/Ally_Dawson%3B_Season_Two_-_Close_Up.png/revision/latest?cb=20130227161226",
            posterUrl: "https://i.pinimg.com/736x/5e/6e/83/5e6e838d9c0cc1efd33d41ddae235834.jpg",
            promo: true,
          },
          {
            id: "trish-de-la-rosa",
            firstName: "Trish",
            lastName: "De La Rosa",
            imageUrl: "https://static.wikia.nocookie.net/p__/images/a/a0/Trish2.jpg/revision/latest?cb=20140111213000&path-prefix=protagonist",
            posterUrl: "https://static.wikia.nocookie.net/austinally/images/1/14/TrishD.jpeg/revision/latest?cb=20160216024657",
            promo: true
          },
          {
            id: "dez-wade",
            firstName: "Dez",
            lastName: "Wade",
            imageUrl: "https://i.pinimg.com/736x/a6/f2/99/a6f29972271dfae58e289503a1fee81a.jpg",
            promo: true,
          }
        ],
        cast: [
          	
          {
            actor: "Ross Lynch",
            character: "Austin Moon",
          },
          {
            actor: "Laura Marano",
            character: "Ally Dawson",
          },
          {
            actor: "Raini Rodriguez",
            character: "Trish De La Rosa",
          },
          {
            actor: "Calum Worthy",
            character: "Dez Wade",
          },
        ],
        country: "United States",
        firstAirDate: "December 2, 2011",
        lastAirDate: "January 10, 2016",
        status: "ended",
        language: "English",
        plot: "Austin Moon is a talented singer and musician who becomes famous after Ally Dawson, a shy songwriter, writes a song for him. The two form a partnership and navigate the ups and downs of the music industry while also dealing with their personal lives.",
        numberOfSeasons: 4,
        numberOfEpisodes: 87,
        seasons: [
          {
            id: "austin-and-ally-season-1",
            seasonNumber: 1,
            posterUrl: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8925054_b_v8_aa.jpg",
            episodeCount: 19,
            premiereDate: "December 2, 2011",
            finaleDate: "September 9, 2012",
            premiereEpisode: "Rockers & Writers",
            finaleEpisode: "Albums & Auditions", 
          },
          {
            id: "austin-and-ally-season-2",
            seasonNumber: 2,
            posterUrl: "https://m.media-amazon.com/images/M/MV5BY2FjYTY1ODItN2VkNy00YjAwLWFlZjUtMjU5MGM5YmZhZjJiXkEyXkFqcGc@._V1_.jpg",
            episodeCount: 26,
            premiereDate: "October 8, 2012",
            finaleDate: "September 29, 2013",
            premiereEpisode: "Costumes & Courage",
            finaleEpisode: "Fresh Starts & Farewells", 
          },
          {
            id: "austin-and-ally-season-3",
            seasonNumber: 3,
            posterUrl: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9901012_b_v8_aa.jpg",
            episodeCount: 22,
            premiereDate: "October 27, 2013",
            finaleDate: "November 23, 2014",
            premiereEpisode: "Rockers & Writers",
            finaleEpisode: "Albums & Auditions", 
          },
          {
            id: "austin-and-ally-season-4",
            seasonNumber: 4,
            posterUrl: "https://images.justwatch.com/poster/197842791/s718/season-4.jpg",
            episodeCount: 20,
            premiereDate: "January 18, 2015",
            finaleDate: "January 10, 2016",
            premiereEpisode: "Buzzcuts & Beginnings",
            finaleEpisode: "Duets & Destiny", 
          },
        ],
        soundtrack: [
          { 
            id: "austin-and-ally-season-1-soundtrack",
            type: "album",
            imgUrl: "https://m.media-amazon.com/images/I/71mA3Ur3-SL._AC_SL1200_.jpg",
            noImage: false,
            noSeason: 1, 
          },
          { 
            id: "austin-and-ally-season-2-soundtrack",
            type: "album",
            imgUrl: "https://i.scdn.co/image/ab67616d0000b273ef6dce84e9890760101b5da7",
            noImage: false,
            noSeason: 2, 
          },
          { 
            id: "austin-and-ally-season-3-soundtrack",
            type: "album",
            imgUrl: "https://static.wikia.nocookie.net/austinally/images/2/23/A&ATake_It_From_The_Top.jpg/revision/latest?cb=20201208024542&path-prefix=es",
            noImage: false,
            noSeason: 3, 
          },
          { 
            id: "austin-and-ally-season-4-soundtrack",
            type: "album",
            imgUrl: "https://static.wikia.nocookie.net/austinally/images/d/d4/Season4.jpg/revision/latest?cb=20200608040909",
            noImage: false,
            noSeason: 4, 
          },
        ],
        tags: [
          "Comedy", 
          "Music", 
          "Teen"
        ],
        executive: [
          "Kevin Kopelow", 
          "Rick Nyholm",
          "Heath Seifert",
          "Jeny Quine",
        ],
        producer: [
          "Craig Wyrick-Solari"
        ], 
        prodCompanies: ["It's a Laugh Productions"],
        prodLocation: ["Los Angeles"],
        network: ["Disney Channel"],
    },
    {
        id: "penny-on-mars", 
        title: "Penny on M.A.R.S",
        posterUrl: "https://i.pinimg.com/736x/b1/68/73/b1687346a1dd837a051962ad25494f00.jpg",
        creator: [
          "Beatrice Valsecchi"
        ],
        writtenBy: [
          "Beatrice Valsecchi",
          "Fabrizio Lucherini",
          "Giacomo Berdini",
          "Angelo Pastore",
        ],
        director: ["Claudio Norza"],
        themeSong: ["We Are the M.A.R.S"],
        composer: [
          "Giordano Cremona",
          "Federico Mercuri",
          "Marco Sissa",
          "Colin Paul Buffet",
        ],
        country: "Italy",
        firstAirDate: "May 7, 2018",
        lastAirDate: "July 3, 2020",
        status: "ended",
        language: "English",
        plot: "Following the adventures of Penny, a girl who has a big talent and a big passion: singing. Her mother is a famous singer so it probably runs in the family well anyway penny is always called by a different surname as no one knows her mother has a child so technically she's a secret baby. She decides to enroll in the most famous performing arts school, M.A.R.S. Her passion will encourage her to fight for her dreams alongside her best friend Camilla. And soon, the arrival of a boy will complicate things. You better watch this great show to get the rest of the details.",
        mainCharacters: [
          {
            id: "penny-mendez", 
            firstName: "Pentagon", 
            lastName: "Mendez",	 
            imageUrl: "https://yt3.googleusercontent.com/ExBM3XMC6_xAY04wavCxr9yXXS_vv9GHURTeTUP1lREKu3JtNcz42CY6NOsQWOGs-ppnVerp-Q=s900-c-k-c0x00ffffff-no-rj",
            posterUrl: "https://static.wikia.nocookie.net/pennyonmars/images/3/31/Penny-s3-1.png/revision/latest?cb=20200604092847",
            promo: true,
            actor: "Olivia-Mai Barrett",
            nickname: ["Penny"],
            goesByNickname: true,
          },
          {
            id: "camilla-young", 
            firstName: "Camilla", 
            lastName: "Young",	 
            imageUrl: "https://static.wikia.nocookie.net/pennyonmars/images/a/ae/Camilla-s2-1.png/revision/latest?cb=20190723161919",
            promo: true,
            actor: "Shannon Gaskin" 
          },
          {
            id: "sebastian-storm", 
            firstName: "Sebastian", 
            lastName: "Storm",	
            imageUrl: "https://tiermaker.com/images/chart/chart/penny-on-mars-characters--528230/sebjpg.png",
            promo: true, 
            actor: "Finlay MacMillan",	
          },
          {
            id: "sofia-hu", 
            firstName: "Sofia", 
            lastName: "Hu",	  
            imageUrl: "https://tiermaker.com/images/chart/chart/penny-on-mars-characters--528230/sofiajpg.png",
            promo: true,
            actor: "Olivia Chan",
          },
          {
            id: "nick-weber", 
            firstName: "Nick", 
            lastName: "Weber",	 
            imageUrl: "https://tiermaker.com/images/chart/chart/penny-on-mars-characters--528230/mikapng.png",
            promo: true,
            actor: "Damien Walsh",
            
          },
          {
            id: "mike-weber", 
            firstName: "Mike", 
            lastName: "Weber",
            imageUrl: "https://tiermaker.com/images/chart/chart/penny-on-mars-characters--528230/nickjpg.png",
            promo: true,
            actor: "Damien Walsh/Luke Walsh",
            
          },
          {
            id: "sasha-lukin",
            firstName: "Aleksandr", 
            lastName: "Lukin",
            actor: "Ryan Dean",
            imageUrl: "https://static.wikia.nocookie.net/pennyonmars/images/6/60/Sasha-s2-1.png/revision/latest/scale-to-width/360?cb=20190530171537",
            promo: true,
            nickname: ["Sasha"],
            goesByNickname: true,		
          },
          {
            id: "lucy-carpenter", 
            firstName: "Lucy", 
            lastName: "Carpenter",	 
            actor: "Jessica Alexander",	
            imageUrl: "https://tiermaker.com/images/chart/chart/penny-on-mars-characters--528230/lucyjpg.png",
            promo: true,
          },
          {
            id: "tom-lauder", 
            firstName: "Tom", 
            lastName: "Lauder", 
            actor:	"Jack Christou",
            imageUrl: "https://tiermaker.com/images/chart/chart/penny-on-mars-characters--528230/tomjpg.png",
            promo: true,
          },
          {
            id: "pete-swanson", 
            firstName: "Pete", 
            lastName: "Swanson",	 
            actor: "Giacomo Vigo",
            imageUrl: "https://tiermaker.com/images/chart/chart/penny-on-mars-characters--528230/petejpg.png",
            promo: true,
          },
          {
            id: "rob-walker", 
            firstName: "Rob", 
            lastName: "Walker",	 
            actor: "Keenan Munn-Francis",		
            imageUrl: "https://tiermaker.com/images/chart/chart/penny-on-mars-characters--528230/robjpg.png",
            promo: true,
          },
          {
            id: "vicky-bernhard", 
            firstName: "Vicky", 
            lastName: "Bernhard",	 
            imageUrl: "https://static.wikia.nocookie.net/pennyonmars/images/9/94/Vicky-1.png/revision/latest/smart/width/250/height/250?cb=20200312174713",
            promo: true,
            actor: "Kira Malou",
            transparent: true,
            bgColor: "#2596be",
          },
          {
            id: "martha-patel", 
            firstName: "Martha", 
            lastName: "Patel",	 
            actor: "Amani Lia",
            imageUrl: "https://tiermaker.com/images/chart/chart/penny-on-mars-characters--528230/marthajpg.png",
            promo: true,
          },
        ],
        cast: [
          {
            character: "Penny Mendez",
            actor:	"Olivia-Mai Barrett",	
          },
          {
            character: "Camilla Young",
            actor: "Shannon Gaskin"	
          },
          {
            character: "Sebastian Storm",
            actor: "Finlay MacMillan"	
          },
          {
            character: "Sofia Hu",
            actor: "Olivia Chan",	
          },
          {
            character: "Nick Weber",
            actor: "Damien Walsh"		
          },
          {
            character: "Mike Weber",
            actor: [
              "Damien Walsh",  
              "Luke Walsh",
            ]
          },
          {
            character: "Aleksandr 'Sasha' Lukin",
            actor: "Ryan Dean"	
          },
          {
            character: "Lucy Carpenter",
            actor: "Jessica Alexander",
          },
          {
            character: "Tom Lauder",	
            actor: "Jack Christou",		
          },
          {
            character: "Pete Swanson",
            actor: "Giacomo Vigo"
          },
          {
            character: "Rob Walker",
            actor:"Keenan Munn-Francis",	
          },
          {
            character: "Vicky Bernhard",
            actor: "Kira Malou",		
          },
          {
            character: "Martha Patel",
            actor: "Amani Lia",
          },
          
        ],
        seasons: [
          {
            id: "penny-on-mars-season-1",
            title: "Penny on M.A.R.S, Season 1",
            posterUrl: "https://static.wikia.nocookie.net/pennyonmars/images/2/24/Poms1.png/revision/latest?cb=20180509120335",
            seasonNumber: 1,
            episodeCount: 16,
            premiereDate: "May 7, 2018",
            finaleDate: "May 25, 2018",
            premiereEpisode: "Penny's New Life - Part 1",
            finaleEpisode: "The Big One",
          },
          {
            id: "penny-on-mars-season-2",
            title: "Penny on M.A.R.S, Season 2",
            posterUrl: "https://static.wikia.nocookie.net/pennyonmars/images/d/d4/Poms2.png/revision/latest?cb=20190428130134",
            seasonNumber: 2,
            episodeCount: 10,
            premiereDate: "February 18, 2019",
            finaleDate: "March 5, 2019",
            premiereEpisode: "A New Friend",
            finaleEpisode: "The 2-Good",
          },
          {
            id: "penny-on-mars-season-3",
            title: "Penny on M.A.R.S, Season 3",
            posterUrl: "https://static.wikia.nocookie.net/pennyonmars/images/1/18/Poms3.png/revision/latest/scale-to-width-down/1000?cb=20200703195828",
            seasonNumber: 3,
            episodeCount: 13,
            premiereDate: "February 17, 2020",
            finaleDate: "March 9, 2020",
            premiereEpisode: "The Other Side Of The World",
            finaleEpisode: "The Finals",
          },
        ],
        soundtrack: [
          {
            id: "penny-on-mars-season-1-album",
            type: "album",
            imgUrl: "https://static.wikia.nocookie.net/pennyonmars/images/f/f9/PennyOnMarsCD.jpg/revision/latest?cb=20180503221005",
            noImage: false,
            noSeason: 1,
          },
          {
            id: "penny-on-mars-season-2-album",
            type: "album",
            imgUrl: "https://static.wikia.nocookie.net/pennyonmars/images/8/82/PennyOnMarsCD2.jpg/revision/latest/scale-to-width-down/1200?cb=20190713114022",
            noImage: false,
            noSeason: 2,
          },
          {
            id: "penny-on-mars-season-3-album",
            type: "album",
            imgUrl: "https://static.wikia.nocookie.net/pennyonmars/images/3/38/PennyOnMarsCD3.jpg/revision/latest/scale-to-width-down/1200?cb=20200705130231",
            noImage: false,
            noSeason: 3,
          },
        ],
        executive: [
          "Nadia Grippiolo",
          "Lucio Wilson",
        ],
        producer: [
          "Piero Crispino",
        ],
        prodLocation: ["Milan, Italy"],
        prodCompanies: [
          "3Zero2",
          "Rai Ragazzi",
          "The Walt Disney Company Italy",
        ],
        numberOfSeasons: 3,
        numberOfEpisodes: 39,
        tags: ["Drama", "Music", "Romance", "Teen"],
        network: ["Rai Gulp", "Disney Channel Italy"],
        related: [
          {
            id: "alex-and-Co",
            title: "Alex & Co",
            posterUrl: "https://static.wikia.nocookie.net/alex-co/images/9/9d/Posters1.jpg/revision/latest?cb=20170705191632",
          }
        ],
    },
    {
        id: "the-suite-life-on-deck", 
        title: "The Suite Life on Deck",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BZTQ4NzRkNjItNTcyZS00YzgzLThjZjktNWI2YTM4NzE0MDdmXkEyXkFqcGc@._V1_.jpg",
        creator: [
          "Danny Kallis",
          "Jim Geoghan",
        ],
        adapter: [
          "Danny Kallis",
          "Pamela Eells O'Connell",
        ],
        director: ["Rich Correll"],
        themeSong: [
          "'Livin' the Suite Life', performed by Steve Rushton"
        ],
        endingTheme: "Livin' the Suite Life (instrumental)",
        composer: [
          "Gary S. Scott"
        ],
        mainCharacters: [
          { 
            id: "cody-martin",
            firstName: "Cody",
            lastName: "Martin",
            imageUrl: "https://static.wikia.nocookie.net/suitelife/images/1/1b/Cody_Martin_3.jpg/revision/latest?cb=20250807173428",
            promo: true,
            actor: "Cole Sprouse",
          },
          { 
            id: "zack-martin",
            firstName: "Zackary",
            lastName: "Martin",
            imageUrl:  "https://static.wikia.nocookie.net/suitelife/images/6/68/Zack_3.jpg/revision/latest?cb=20250807172419",
            promo: true,
            actor: "Dylan Sprouse",
            nickname: ["Zack"],
            goesByNickname: true,
          },
          { 
            id: "london-tipton",
            firstName: "London",
            lastName: "Tipton",
            imageUrl: "https://pbs.twimg.com/media/HEXUqMMbQAAsIMN.jpg", 
            posterUrl: "https://static.wikia.nocookie.net/suitelife/images/2/2d/London_Season3.jpg/revision/latest?cb=20151126072716",
            promo: true,
            actor: "Brenda Song",
          },
          { 
            id: "bailey-pickett",
            firstName: "Bailey",
            lastName: "Pickett",
            imageUrl: "https://static.wikia.nocookie.net/disneyheroines/images/2/21/Bailey_Pickett.jpg/revision/latest?cb=20120106051716",
            promo: true,
            actor: "Debby Ryan",
          },
          { 
            id: "marion-moseby",
            firstName: "Marion",
            lastName: "Moseby",
            imageUrl: "https://static.wikia.nocookie.net/doblaje/images/9/99/PhillLewisMArionmoseby02.jpg/revision/latest?cb=20190314232122&path-prefix=es",
            promo: true,
            actor: "Phil Lewis",
            nickname: ["Mr. Moseby"],
            goesByNickname: true,
          },
          { 
            id: "marcus-little",
            firstName: "Marcus",
            lastName: "Little",
            posterUrl: "",
            promo: false,
            actor: "Doc Shaw",
          },
        ],
        cast: [
          	
          { 
            actor: "Cole Sprouse",
            character: "Cody Martin",
          },
          { 
            actor: "Dylan Sprouse",
            character: "Zack Martin",
          },
          { 
            actor: "Brenda Song",
            character: "London Tipton",
          },
          { 
            actor: "Debby Ryan",
            character: "Bailey Pickett",
          },
          { 
            actor: "Phill Lewis",
            character: "Marion Moseby",
          },
          { 
            actor: "Doc Shaw",
            character: "Marcus Little",
          },
        ],
        seasons: [
          {
            id: "the-suite-life-on-deck-season-1",
            posterUrl: "https://www.hardtofindtv.com/cdn/shop/products/DECKqSfaoC9ArrsRi1pRrKOzDZJn47o_780x.jpg?v=1607308769",
            title: "The Suite Life On Deck, Season 1",
            premiereDate: "September 26, 2008",
            finaleDate: "July 17, 2008",
            premiereEpisode: "The Suite Life Sets Sail",
            finaleEpisode: "Double-Crossed",
            seasonNumber: 1,
            episodeCount: 21,
          },
          {
            id: "the-suite-life-on-deck-season-2",
            posterUrl: "https://images.justwatch.com/poster/324792136/s718/season-2.jpg",
            title: "The Suite Life On Deck, Season 2",
            premiereDate: "August 9, 2009",
            finaleDate: "July 17, 2008",
            premiereEpisode: "The Spy Who Shoved Me",
            finaleEpisode: "Breakup in Paris",
            seasonNumber: 2,
            episodeCount: 28,
          },
          {
            id: "the-suite-life-on-deck-season-3",
            posterUrl: "https://resizing.flixster.com/q0sRYtC0UBNgZfiIgrOKxk5QNdw=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8263987_b_v8_ab.jpg",
            title: "The Suite Life On Deck, Season 3",
            premiereDate: "July 2, 2010",
            finaleDate: "May 6, 2011",
            premiereEpisode: "The Silent Treatment",
            finaleEpisode: "Graduation on Deck",
            seasonNumber: 3,
            episodeCount: 22,
          },
        ],
        soundtrack: [
          {
            id: "the-suite-life-on-deck-season-1-soundtrack",
            type: "soundtrack",
            noImage: true,
            noSeason: 1,
          },
          {
            id: "the-suite-life-on-deck-season-2-soundtrack",
            type: "soundtrack",
            noImage: true,
            noSeason: 2,
          },
          {
            id: "the-suite-life-on-deck-season-3-soundtrack",
            type: "soundtrack",
            noImage: true,
            noSeason: 3,
          },
        ],
        country: "United States",
        firstAirDate: "September 26, 2008",
        lastAirDate: "May 6, 2011",
        status: "ended",
        language: "English",
        plot: "The Suite Life on Deck is a spin-off of The Suite Life of Zack & Cody. The show follows the adventures of twin brothers Zack and Cody Martin as they attend high school on a cruise ship called the SS Tipton. Along with their friends, they navigate the challenges of teenage life while traveling the world.",
        numberOfSeasons: 3,
        numberOfEpisodes: 71,
        tags: ["Comedy", "Family", "Teen"],
        executive: [
          "Pamela Eells O'Connell",
          "Irene Dreayer",
          "Danny Kallis (seasons 1–2)",
          "Jim Geoghan (seasons 1–2)",
        ],
        producer: [
          "Walter Barnett (seasons 2–3)"
        ],
        prodLocation: [
          "Hollywood Center Studios",
          "Hollywood, California",
        ],
        prodCompanies: [
          "It's a Laugh Productions",
          "Danny Kallis Productions (Seasons 1–2)",
          "Bon Mot Productions (Season 3)"
        ],
        network: ["Disney Channel"],
        related: [
          { 
            id: "the-suite-life-of-zack-and-cody",
            title: "The Suite Life of Zack & Cody", 
            posterUrl: "https://preview.redd.it/the-suite-life-of-zack-and-cody-premiered-on-this-day-in-v0-104wdf22yipe1.jpg?width=640&crop=smart&auto=webp&s=8bf59f9f433491832476d7a71730a263033858d4",
          },
          { 
            id: "the-suite-life-movie",
            title: "The Suite Life Movie",
            posterUrl: "https://static.wikia.nocookie.net/suitelife/images/5/52/The_Suite_Life_Movie_Promotional_Logo.jpg/revision/latest?cb=20110325191520"
          },
        ],
    },
    {
        id: "liv-and-maddie", 
        title: "Liv and Maddie",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BYjRhMTYzZDMtYWJmZC00MWY3LTk5NzMtNjVjNDljYWNjM2E5XkEyXkFqcGc@._V1_.jpg",
        country: "United States",
        creator: [
          "John D. Beck", 
          "Ron Hart"
        ],
        director: ["Andy Fickman"],
        writtenBy: [
          "John D. Beck",
           "Ron Hart"
        ],
        themeSong: [
          "'Better In Stereo' by Dove Cameron",
        ],
        composer: [
          "Eric Goldman", 
          "Ken Lofkoll"
        ],
        firstAirDate: "July 19, 2013",
        lastAirDate: "March 24, 2017",
        status: "ended",
        language: "English",
        plot: "Liv and Maddie are identical twin sisters with very different personalities. Liv is a famous actress, while Maddie is a basketball player. The show follows their lives as they navigate high school, family, and friendship.",
        mainCharacters: [
          {
            id: "liv-rooney",
            firstName: "Olivia",
            lastName: "Rooney",
            imageUrl: "https://static.wikia.nocookie.net/livandmaddie/images/8/82/Liv.jpg/revision/latest?cb=20130817010616",
            promo: true,
           nickname: ["Liv"],
           goesByNickname: true,
           gender: "F", 
          },
          {
            id: "maddie-rooney",
            firstName: "Madison",
            lastName: "Rooney",
            imageUrl: "https://static.wikia.nocookie.net/p__/images/6/6c/04192261d6f45bcb2d407fc5e82819dce12c47ec.jpg/revision/latest?cb=20140524210756&path-prefix=protagonist",
            promo: true,
            nickname: ["Maddie"],
            goesByNickname: true,
          },
          {
            id: "parker-rooney",
            firstName: "Parker",
            lastName: "Rooney",
            imageUrl: "https://static.wikia.nocookie.net/livandmaddie/images/d/d3/Parkers2.jpg/revision/latest?cb=20140908111944",
            promo: true,
          },
          {
            id: "joey-rooney",
            firstName: "Joseph",
            lastName: "Rooney",
            imageUrl: "https://static.wikia.nocookie.net/livandmaddie/images/e/e9/Joeys2.jpg/revision/latest?cb=20140908111703",
            promo: true,
            nickname: ["Joey"],
            goesByNickname: true,
          },
          {
            id: "karen-rooney",
            firstName: "Karen",
            lastName: "Rooney",
            imageUrl: "https://static.wikia.nocookie.net/livandmaddie/images/4/4f/Karen.jpg/revision/latest?cb=20130817024054",
            promo: true,
          },
          {
            id: "pete-rooney",
            firstName: "Pete",
            lastName: "Rooney",
            imageUrl: "https://static.wikia.nocookie.net/livandmaddie/images/b/b1/Peteseason2.jpg/revision/latest?cb=20140908112452",
            promo: true,
          },
        ],
        cast: [
          	
            {
            actor: "Dove Cameron",
            character: [
              "Liv Rooney",
              "Maddie Rooney"
            ],
          },
            {
            actor: "Joey Bragg",
            character: "Joey Rooney",
          },
            {
            actor: "Tenzing Norgay Trainor",
            character: "Parker Rooney",
          },
            {
            actor: "Kali Rocha",
            character: "Karen Rooney",
          },
            {
            actor: "Benjamin King",
            character: "Pete Rooney",
          },
            {
            actor: "Lauren Lindsey Donzis",
            character: "Ruby Rooney",
          },
        ],
        seasons: [
          {
            id: "liv-and-maddie-season-1",
            seasonNumber: 1,
            posterUrl: "https://m.media-amazon.com/images/M/MV5BYjRhMTYzZDMtYWJmZC00MWY3LTk5NzMtNjVjNDljYWNjM2E5XkEyXkFqcGc@._V1_.jpg",
            premiereDate: "July 19, 2013",
            finaleDate: "July 27, 2014",
            premiereEpisode: "Twin-A-Rooney",
            finaleEpisode: "Space-Werewolf-A-Rooney",
            episodeCount: 21,
          },
          {
            id: "liv-and-maddie-season-2",
            seasonNumber: 2,
            posterUrl: "https://static.wikia.nocookie.net/international-entertainment-project/images/9/98/Liv_and_Maddie_poster.jpg/revision/latest?cb=20220215233949",
            premiereDate: "September 21, 2014",
            finaleDate: "August 23, 2015",
            premiereEpisode: "Premiere-A-Rooney",
            finaleEpisode: "Champ-A-Rooney",
            episodeCount: 24,
          },
          {
            id: "liv-and-maddie-season-3",
            seasonNumber: 3,
            posterUrl: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p12037544_b_v8_aa.jpg",
            premiereDate: "September 13, 2015",
            finaleDate: "June 19, 2016",
            premiereEpisode: "Continued-A-Rooney",
            finaleEpisode: "Californi-A-Rooney",
            episodeCount: 20,
          },
          {
            id: "liv-and-maddie-season-4",
            seasonNumber: 4,
            posterUrl: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p13203283_b_v8_ab.jpg",
            premiereDate: "September 23, 2016",
            finaleDate: "March 24, 2017",
            premiereEpisode: "Sort-Sisters-A-Rooney",
            finaleEpisode: "End-A-Rooney",
            episodeCount: 15,
          },
        ],
        soundtrack: [
          {
            id: "liv-and-maddie-season-1-soundtrack",
            type: "album",
            noSeason: 1,
            imgUrl: "https://static.wikia.nocookie.net/livandmaddie/images/f/ff/Soundtrack_cover.jpg/revision/latest?cb=20151021061744",
            noImage: false,
          },
          {
            id: "liv-and-maddie-season-2-soundtrack",
            type: "album",
            noSeason: 2,
            imgUrl: "https://i.scdn.co/image/ab67616d00001e026bffb4a32855c06cd687300d",
            noImage: false,
          },
        ],
        numberOfSeasons: 4,
        numberOfEpisodes: 80,
        tags: ["Comedy", "Family", "Teen", "Music"],
        executive: [
          "John D. Beck",
          "Ron Hart",
          "Andy Fickman",
          "Betsy Sullenger",
          "John Peaslee",
        ],
        producer: [
          "Greg A. Hampson"
        ],
        prodCompanies: [
          "Beck & Hart Productions",
          "Oops Doughnuts Productions",
          "It's a Laugh Productions",
        ],
        prodLocation: [
          "Hollywood Center Studios"
        ],
        network: ["Disney Channel"],
    },
    {
        id: "violetta", 
        title: "Violetta",
        posterUrl: "https://filmgruvan.se/wp-content/uploads/2025/10/image-17.png",
        country: "Argentina",
        creator: "Sol Clemente",
        writtenBy: [
          "Solange Keoleyan",
          "Sebastián Parrotta"
        ],
        director: [
          "Jorge Nisco",
          "Martín Saban",
          "Sebastián Pivotto",
          "Matías Risi",
        ],
        themeSong: '"En Mi Mundo" performed by Martina Stoessel',
        firstAirDate: "May 14, 2012",
        lastAirDate: "February 6, 2015",
        status: "ended",
        language: "Spanish",
        plot: "Violetta is a talented teenager who discovers her passion for music and singing. She attends a prestigious music school, Studio 21, where she meets new friends and faces challenges while pursuing her dreams.",
        mainCharacters: [
          {
            id: "violetta-castillo",
            firstName: "Violetta",
            lastName: "Castillo",
            hairColor: [
              "Brown",
              "Hazel",
              "Blonde"
            ],
            eyeColor:  "Brown",
            birthday: "June 26, 1995",
            education: [
              {
                started: "2012",
                ended: "2015",
                hasEnded: true,
                place: "On Beat Studio"
              },
            ],
            occupation: [
              {
                title: "Singer",
                hasEnded: false,
              },
            ],
            gender: "F",
            imageUrl:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgVFEAPbg9SqbFanjhCIZJc_Mbx2X4PgbxQrimabNJcr2Lk18XvgKvqruiU-t8LozRtRMfoRKKxQDHh564xJ_HYKhAVqpYZONX7-8PxaswEsCoC4speRxomj3gI8HrepdW16CRWK2OU_FfV/s1600/emea_vio_cc_char_violetta.png",
            posterUrl: "https://static.wikia.nocookie.net/disneylatinamerica/images/6/6c/Violetta.webp/revision/latest?cb=20240120220022",
            actor: "Martina Stoessel",
            firstEpisode: "Season 1, Episode 1",
            lastEpisode: "Season 3, Episode 80",
            promo: true,
            episodeCount: "240",
          },
          {
            id: "germán-castillo",
            firstName: "Germán",
            lastName: "Castillo",
            imageUrl: "https://violetta-disneychannel.estranky.sk/img/original/27/german.png",
            posterUrl:  "https://static.wikia.nocookie.net/violetta/images/d/d9/German23.jpg/revision/latest?cb=20180321091946&path-prefix=fr",
            actor: "Diego Ramos", 
            firstEpisode: "Season 1, Episode 1",
            lastEpisode: "Season 3, Episode 80",
            promo: true,
          },

          {
            id: "angie-carrara",
            firstName: "Ángeles",
            lastName: "Carrara",
            imageUrl: "https://ekladata.com/Na7AoebeA9xqhoXV9mWFG68EPKc.png",
            actor: "Clara Alonso",
            nickname: ["Angie"],
            goesByNickname: true,
            promo: true,
            gender: "F",
            firstEpisode: "Season 1, Episode 1",
            lastEpisode: "Season 3, Episode 80",
          },
          {
            id: "león-vargas",
            firstName: "León",
            lastName: "Vargas",
            actor: "Jorge Blanco",
            imageUrl: "https://i.pinimg.com/originals/b9/19/95/b919953038f0186e0acb3163b30a8db7.png",
            posterUrl: "https://static.wikia.nocookie.net/violetta/images/c/c0/Leon_s3.jpg/revision/latest?cb=20160708181117",
            firstEpisode: "Season 1, Episode 1",
            lastEpisode: "Season 3, Episode 80",
            promo: true,
          },
          {
            id: "diego-hernández",
            firstName: "Diego",
            lastName: "Hernández",
            imageUrl: "https://static.wikia.nocookie.net/violetta/images/0/01/Diego_promo_season_3_leaning.png/revision/latest/scale-to-width-down/250?cb=20260413094743",
            posterUrl:  "https://i.pinimg.com/736x/b3/0e/b6/b30eb6b2b9372171600f77a3c6bde60e.jpg",
            actor: "Diego Domínguez",
            promo: true,
           },
          {
            id: "tomás-heredia",
            firstName: "Tomás",
            lastName: "Heredia",
            imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhkfon-Q6J0Yf4qJz_XRQXcd6VeCb6mti-JxIz1QQ9eTCELUNBqADl7O-9-dzC-spszqCOErfYnNnEvjo7yJMH1wyKWKoEV-ljXDxQxDe-wW997-Mw_B3zmb9R8ia2CgOSKcOFmQ3DvSOSJ/s1600/2.png",
            posterUrl: "https://static.wikia.nocookie.net/violetta/images/c/ca/Tomas_infobox.png/revision/latest?cb=20131030173256",
            promo: true,
            actor: "Pablo Espinosa", 
          },
          {
            id: "ludmila-ferro",
            firstName:  "Ludmila",
            lastName:"Ferro",
            imageUrl: "https://violettalovemusicpassion.wordpress.com/wp-content/uploads/2014/10/wpid-8.png?w=584",
            posterUrl: "https://static.wikia.nocookie.net/violetta/images/9/93/Ludmila.jpg/revision/latest?cb=20160223134344&path-prefix=sv",
            actor: "Mercedes Lambre",
            firstEpisode: "Season 1, Episode 1",
            lastEpisode: "Season 3, Episode 80",
            promo: true,
          },
          {
            id: "francesca-caviglia",
            firstName: "Francesca",
            lastName: "Caviglia",
            actor: "Lodovica Comello",
            imageUrl: "https://i.pinimg.com/originals/fd/7c/8c/fd7c8c7881d0099b061f2df01b68efb2.png",
            posterUrl: "https://static.wikia.nocookie.net/violetta/images/b/b4/Francesca_s3_infobox.jpg/revision/latest?cb=20250131151852",
            firstEpisode: "Season 1, Episode 1",
            lastEpisode: "Season 3, Episode 80",
            promo: true,
          },
          {
            id: "camila-torres",
            firstName: "Camila",
            lastName: "Torres",
            imageUrl: "https://violettalovemusicpassion.wordpress.com/wp-content/uploads/2014/12/782bd-cam.png?w=283&h=406", 
            posterUrl: "https://i.pinimg.com/564x/07/d6/0f/07d60f03884bc0403d35bd387ad3b08e.jpg",
            actor: "Candelaria Molfese",
            firstEpisode: "Season 1, Episode 1",
            lastEpisode: "Season 3, Episode 80",
            promo: true,
          },
          {
            id: "maximiliano-ponte",
            firstName: "Maximiliano",
            lastName: "Ponte",
            imageUrl: "https://starity.hu/images/celebs/years/28681/800x600/2014.jpg",
            posterUrl: "https://i.pinimg.com/736x/bf/0f/a0/bf0fa045a772ffa29910d71a50b1465c.jpg",
            actor: "Facundo Gambandé", 
            nickname: ["Maxi"],
            goesByNickname: true,
            firstEpisode: "Season 1, Episode 1",
            lastEpisode: "Season 3, Episode 80",
            promo: true,
          },
          {
            id: "andrés-calixto",
            firstName: "Andrés",
            lastName: "Calixto",
            imageUrl: "https://4.bp.blogspot.com/-BeUcd-j5O44/U0a6P65srTI/AAAAAAAACPA/O3WcsKBOALE/s1600/11.png",
            posterUrl: "https://static.wikia.nocookie.net/violetta/images/1/1f/Andres_w_2s.jpg/revision/latest?cb=20141114121657&path-prefix=da",
            actor: "Nicolás Garnier",
            firstEpisode: "Season 1, Episode 1",
            lastEpisode: "Season 3, Episode 80",
            promo: true,
          },
          {
            id: "natalia-vidal",
            firstName: "Natalia",
            lastName: "Vidal",
            imageUrl: "https://static.wikia.nocookie.net/violetta-deutschland/images/0/0d/Naty2.png/revision/latest?cb=20141124175244",
            posterUrl: "https://static.wikia.nocookie.net/violetta/images/1/17/Naty_s3.jpg/revision/latest?cb=20160707204555",
            actor: "Alba Rico",
            nickname: ["Naty"],
            firstEpisode: "Season 1, Episode 1",
            lastEpisode: "Season 3, Episode 80",
            promo: true,
            goesByNickname: true,
          },
          {
            id: "luca-caviglia",
            firstName: "Luca",
            lastName: "Caviglia",
            imageUrl: "https://m.media-amazon.com/images/M/MV5BOWI5NzUzOTktMzcxYy00MmIyLWFhMTItNDM2NjFmN2Q3MGUzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", 
            posterUrl: "https://i.pinimg.com/736x/06/5c/13/065c1359ba03f4d87198e074296af9ed.jpg",
            actor: "Simone Lijoi", 
            firstEpisode: "Season 1, Episode 1",
            lastEpisode: "Season 1, Episode 80",
            promo: true, 
          },
          {
            id: "broduey-silva",
            firstName: "Broduey", 
            lastName: "Silva",
            imageUrl: "https://i.pinimg.com/736x/6d/a6/7e/6da67ee08efeb5b5bad76a04809f7acf.jpg",
            posterUrl: "https://static.wikia.nocookie.net/violetta/images/f/f3/5fe6d9ffae83db5cdcfe9a48b8f6b2bc.jpg/revision/latest?cb=20250811135636",
            actor: "Samuel Nascimento",
            promo: true,
          },
          {
            id: "jade-la-fontaine",
            firstName: "Jade",
            lastName: "La Fontaine",
            imageUrl: "https://static.wikia.nocookie.net/violetta/images/9/9e/12.png/revision/latest?cb=20140109153349&path-prefix=sv",
            posterUrl: "https://static.wikia.nocookie.net/violetta/images/2/28/Jade_infobox.png/revision/latest?cb=20131030173253",
            actor: "Florencia Benítez", 
            firstEpisode: "Season 1, Episode 1",
            lastEpisode: "Season 3, Episode 80",
            promo: true,
          },
          {
            id: "matías-la-fontaine",
            firstName: "Matías",
            lastName: "La Fontaine",
            imageUrl: "https://static.wikia.nocookie.net/violetta/images/7/77/Mati.jpg/revision/latest?cb=20250218160434",
            posterUrl: "https://static.wikia.nocookie.net/violetta/images/7/77/Mati.jpg/revision/latest?cb=20250218160434",
            actor: "Joaquín Berthold",
            firstEpisode: "Season 1, Episode 1",
            lastEpisode: "Season 3, Episode 80",
            promo: true,
          },
          {
            id: "olga-patricia-peña",
            firstName: "Olga",
            middleName: "Patricia",
            lastName: "Peña",
            imageUrl: "https://static.wikia.nocookie.net/violetta/images/7/73/Hola_Olga.jpg/revision/latest?cb=20131225164456",
            actor: "Mirta Wons",
            firstEpisode: "Season 1, Episode 1",
            lastEpisode: "Season 3, Episode 80",
            promo: true,
          },
          {
            id: "lisandro-ramallo",
            firstName: "Lisandro",
            lastName: "Ramallo",
            imageUrl: "https://m.media-amazon.com/images/M/MV5BM2JkNzU3NjctZTFmYi00MjJhLThhMWMtNGQxZjFlZjA5MDkxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
            actor: "Alfredo Allende",
            nickname: ["Ramallo"],
            goesByNickname: true,
            firstEpisode: "Season 1, Episode 1",
            lastEpisode: "Season 3, Episode 80",
            promo: true,
          },
          {
            id: "beto-benvenuto",
            firstName: "Roberto",
            lastName: "Benvenuto",
            imageUrl: "https://m.media-amazon.com/images/M/MV5BNzMyMjViN2EtMzllOS00MWFmLWE5NWYtMWJmMDE0MmVmNTg5XkEyXkFqcGc@._V1_.jpg",
            posterUrl: "https://static.wikia.nocookie.net/violetta/images/e/ec/Emea_vio_img_char_beto.jpg/revision/latest?cb=20160708184845",
            firstEpisode: "Season 1, Episode 1",
            lastEpisode: "Season 3, Episode 80",
            actor: "Pablo Sultani",
            nickname: ["Beto"],
            goesByNickname: true,
            promo: true,
          }, 
          {
            id: "gregorio-casal",
            firstName: "Gregorio",
            lastName: "Casal",
            imageUrl: "https://static.wikia.nocookie.net/violetta22/images/8/88/Gregorio.png/revision/latest/smart/width/250/height/250?cb=20130319050612&path-prefix=pl",
            posterUrl: "https://static.wikia.nocookie.net/violetta/images/2/20/Emea_vio_img_char_gregorio.jpg/revision/latest?cb=20160708183647",
            actor: "Rodrigo Pedreira",
            firstEpisode: "Season 1, Episode 1",
            lastEpisode: "Season 3, Episode 80",
            promo: true,
          },
          {
            id: "Pablo Galindo",
            firstName: "Pablo",
            lastName: "Galindo",
            actor: "Ezequiel Rodríguez",
            imageUrl: "https://static.wikia.nocookie.net/violetta/images/8/8a/Pabl.jpg/revision/latest?cb=20141221144225",
            posterUrl: "https://i.pinimg.com/736x/85/ec/34/85ec344da423ececab0d6fd44f2098ab.jpg",
            firstEpisode: "Season 1, Episode 1",
            lastEpisode: "Season 3, Episode 80",
            promo: true,
            
          },
          {
            id: "antonio-jerez-fernández-méndez",
            firstName: "Antonio",
            lastName: "Jerez Fernández Méndez",
            actor: "Alberto Fernández de Rosa",
            imageUrl: "https://artworks.thetvdb.com/banners/actors/505249.jpg",
            promo: false,
            firstEpisode: "Season 1, Episode 1",
            lastEpisode: "Season 3, Episode 20",
          },
          {
            id: "marco-tavelli",
            firstName: "Marco",
            lastName: "Tavelli",
            actor: "Xabiani Ponce de León", 
            imageUrl: "https://i.pinimg.com/564x/75/99/1a/75991a3c8394c2f5db51844a7cb8945b.jpg",
            posterUrl: "https://i.pinimg.com/736x/b0/9d/25/b09d252e90bc107cebd3a6242e30bfe7.jpg",
            promo: true,
            firstEpisode: "Season 2, Episode 2",
            lastEpisode: "Season 3, Episode 20",
            
          },
          {
            id: "lara-jiménez",
            firstName: "Lara",
            lastName:"Jiménez",
            imageUrl: "https://m.media-amazon.com/images/M/MV5BNzQ2N2Y2N2QtZjMyMC00NWUwLWI3MTUtNjk4YjI0YWE1MTI2XkEyXkFqcGc@._V1_.jpg",
            posterUrl: "https://m.media-amazon.com/images/M/MV5BNzQ2N2Y2N2QtZjMyMC00NWUwLWI3MTUtNjk4YjI0YWE1MTI2XkEyXkFqcGc@._V1_.jpg",
            actor: "Valeria Baroni",
            promo: true,
            firstEpisode: "Season 2, Episode 1",
            lastEpisode: "Season 3, Episode 78",
            
          },
          { 
            id: "esmeralda-ferrara-di-pietro",
            firstName: "Esmeralda",
            lastName: "Ferrara Di Pietro",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqyRJY_WBT1MGC19clGigmdJJbKvYAJG-JZblV9ogbAs5v1LRLifUd5bM&s=10",
            posterUrl: "https://static.wikia.nocookie.net/violetta/images/3/3b/Esmeralda_Season_2_Promotional_Picture.jpg/revision/latest?cb=20150607201401",
            actor: "Carla Pandolfi", 
            promo: true,
            firstEpisode: "Season 2, Episode 4",
            lastEpisode: "Season 3, Episode 60",
            
          },
          {
            id: "jackie-sáenz",
            firstName: "Jacqueline",
            lastName: "Sáenz",
            imageUrl: "https://static.wikia.nocookie.net/violettaseries/images/9/9d/Jackie.png/revision/latest/smart/width/250/height/250?cb=20140125163841",
            posterUrl: "https://static.wikia.nocookie.net/violetta/images/d/db/Jackie_2.jpg/revision/latest?cb=20250106115016",
            actor: "Valentina Frione", 
            nickname: ["Jackie"],
            goesByNickname: true,
            promo: true,
            firstEpisode: "Season 2, Episode 1",
            lastEpisode: "Season 2, Episode 55",
          },
          {
            id: "federico-paccini",
            firstName: "Federico",
            lastName: "Paccini",
            imageUrl: "https://static.wikia.nocookie.net/violetta/images/2/28/Capture_d%E2%80%99%C3%A9cran_2020-04-09_%C3%A0_18.32.47.png/revision/latest?cb=20200409163425&path-prefix=fr",
            posterUrl: "https://static.wikia.nocookie.net/disneylatinamerica/images/e/e0/Federico.webp/revision/latest?cb=20240120204147",
            actor: "Ruggero Pasquarelli",
            promo: true,
            firstEpisode: "Season 1, Episode 56",
            lastEpisode: "Season 3, Episode 80",
          
          },
          {
            id: "gery-lopez",
            firstName: "Gery",
            lastName: "Lopez",
            imageUrl: "https://violettalovemusicpassion.wordpress.com/wp-content/uploads/2014/10/wpid-e9ofsfu8kss.jpeg",
            promo: true,
            actor: "Macarena Miguel",
            firstEpisode: "Season 3, Episode 7",
            lastEpisode: "Season 3, Episode 80",
            
          },
          {
            id: "clement-cortés",
            firstName: "Clement",
            lastName: "Cortés",
            imageUrl: "https://static.wikia.nocookie.net/violettaseries/images/f/f6/Clement_Season_3_promotional_pic.jpg/revision/latest/smart/width/386/height/259?cb=20140715145922",
            posterUrl: "https://violettalovemusicpassion.wordpress.com/wp-content/uploads/2014/10/wpid-c-1.png",
            actor: "Damien Lauretta", 
            nickname: ["Alexandre 'Alex' Benoit"],
            promo: true,
          },
          {
            id: "priscila-ferro",
            firstName: "Priscila",
            lastName: "Ferro",
            imageUrl: "https://static.wikia.nocookie.net/violettaseries/images/6/62/Priscila_Season_3_promotional_pic.jpg/revision/latest?cb=20140715145732",
            posterUrl: "https://m.media-amazon.com/images/M/MV5BNDJjM2I5MzUtMzFiZS00MmM4LWJhMzctZWQwMTM1ZWFkYmMxXkEyXkFqcGc@._V1_.jpg",
            actor: "Florencia Ortíz",
            promo: true,
          },
          {
            id: "milton-vinicius",
            firstName: "Milton",
            lastName: "Vinicius",
            imageUrl: "https://static.wikia.nocookie.net/violettaseries/images/c/c2/Milton_season_3_promo_pic.jpg/revision/latest?cb=20141110175431",
            posterUrl: "https://static.wikia.nocookie.net/violettaseries/images/c/c2/Milton_season_3_promo_pic.jpg/revision/latest?cb=20141110175431",
            actor: "Rodrigo Frampton", 
            promo: true,
          },
          {
            id: "marotti-reyes-almeyda",
            firstName: "Marotti",
            lastName: "Reyes Almeyda",
            imageUrl: "https://static.wikia.nocookie.net/violetta/images/8/89/Large66.jpg/revision/latest?cb=20160904165928",
            actor: "Diego Alcalá", 

            
          },
          {
            id: "nicolás-cortés",
            firstName: "Nicolás",
            lastName: "Cortés",
            imageUrl: "https://www.elheraldo.co/resizer/v2/ETGCK5C5Y5BGZCXCCJTBH5R5MA.jpg?auth=606f2bb26608263a89a220c74ab3d9989ff08ba126fbbb1c091f28247b7ead12&smart=true&quality=70&width=1200&height=675",
            actor: "Nacho Gadano",
            promo: true,
          },

          {
            id: "braco",
            firstName: "Braco",
            actor: "Artur Logunov",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRurwSIS6x35AUcOCBYl7dPNQBjJrrcV0PyP4fncXULG0cxSf6gXpkaOvs&s=10",
            posterUrl: "https://static.wikia.nocookie.net/violetta/images/4/46/Braco_infobox.png/revision/latest?cb=20131030173252",
            firstEpisode: "Season 1, Episode 1",
            lastEpisode: "Season 1, Episode 80",
            promo: true,
          },
          {
            id: "Napoleón 'Napo' Ferro",
            firstName: "Napoleón",
            lastName: "Ferro",
            imageUrl: "https://static.wikia.nocookie.net/violetta-disney-channel/images/d/d9/Napo.png/revision/latest/scale-to-width-down/188?cb=20130809150623&path-prefix=pl",
            promo: true,
            actor: "Rodrigo Velilla", 
            nickname:[ "Napo"],
            goesByNickname: true ,
          },
        ],
        cast: [
          {
            actor: "Martina Stoessel", 
            character: "Violetta Castillo"
          },
          {
            actor: "Jorge Blanco", 
            character: "León Vargas",
          },
          {
            actor: "Mercedes Lambre",
            character: "Ludmila Ferro",
          },
          {
            actor: "Nicolás Garnier", 
            character: "Andrés Calixto"
          },
          {
            actor: "Alba Rico",
            character: "Natalia 'Naty' Vidal",
          },
          {
            actor: "Lodovica Comello",
            character: "Francesca Caviglia",
          },
          {
            actor: "Candelaria Molfese",  
            character: "Camila Torres",
          },
          {
            actor: "Facundo Gambandé", 
            character: "Maximiliano 'Maxi' Ponte",
          },
          {
            actor: "Diego Ramos", 
            character: "Germán Castillo",
          },
          {
            actor: "Pablo Espinosa", 
            character: "Tomás Heredia"
          },
          {
            actor: "Simone Lijoi", 
            character: "Luca Caviglia" 
          },
          {
            actor: "Artur Logunov", 
            character: "Braco"
          },
          {
            actor: "Rodrigo Velilla", 
            character: "Napoleón 'Napo' Ferro" 
          },
          {
            actor: "Samuel Nascimento", 
            character: "Broduey Silva",
          },
          {
            actor: "Clara Alonso",
            character: "Ángeles 'Angie' Carrara",
          },
          {
            actor: "Florencia Benítez", 
            character: "Jade La Fontaine",
          },
          {
            actor: "Joaquín Berthold", 
            character: "Matías La Fontaine",
          },
          {
            actor: "Mirta Wons", 
            character: "Olga Patricia Peña"
          },
          {
            actor: "Alfredo Allende", 
            character: "Lisandro Ramallo",
          },
          {
            actor: "Pablo Sultani", 
            character: "Beto Benvenuto",
          },
          {
            actor: "Rodrigo Pedreira", 
            character: "Gregorio Casal",
          },
          {
            actor: "Ezequiel Rodríguez",
            character: "Pablo Galindo",
          },
          {
            actor: "Alberto Fernández de Rosa", 
            character: "Antonio Jerez Fernández Méndez"},
          {
            actor: "Diego Domínguez", 
            character: "Diego Hernández"
           },
          {
            actor: "Xabiani Ponce de León", 
            character: "Marco Tavelli"
          },
          {
            actor: "Valeria Baroni", 
            character: "Lara Jiménez",
          },
          {
            actor: "Carla Pandolfi", 
            character: "Esmeralda Ferrara Di Pietro" 
          },
          {
            actor: "Valentina Frione", 
            character: "Jacqueline 'Jackie' Sáenz",
          },
          {
            actor: "Ruggero Pasquarelli", 
            character: "Federico Paccini",
          },
          {
            actor: "Macarena Miguel", 
            character: "Gery Lopez",
          },
          {
            actor: "Damien Lauretta", 
            character: "Clement Cortés/Alexandre 'Alex' Benoit"
          },
          {
            actor: "Florencia Ortíz", 
            character: "Priscila Ferro"
          },
          {
            actor: "Rodrigo Frampton", 
            character: "Milton Vinicius"
          },
          {
            actor: "Diego Alcalá", 
            character: "Marotti Reyes Almeyda",
          },
          {
            actor: "Nacho Gadano", 
            character: "Nicolás Cortés",
          },
        ],
        numberOfSeasons: 3,
        numberOfEpisodes: 240,
        seasons: [
          {
            id: "violetta-season-1",
            posterUrl: "https://filmgruvan.se/wp-content/uploads/2023/10/image-129.jpeg",
            seasonNumber: 1,
            episodeCount: 80,
          },
          {
            id: "violetta-season-2",
            posterUrl: "https://images.justwatch.com/poster/121150263/s718/season-2.jpg",
            seasonNumber: 2,
            episodeCount: 80,
          },
          {
            id: "violetta-season-3",
            posterUrl: "https://static.wikia.nocookie.net/disneylatinamerica/images/3/3a/Violetta_S3.jpg/revision/latest?cb=20240628065607",
            seasonNumber: 3,
            episodeCount: 80,
          },
        ],
        soundtrack: [ 
          {
            id: "violetta-season-1-soundtrack",
            type: "album",
            noSeason: 1,
            imgUrl: "https://static.wikia.nocookie.net/violetta/images/1/13/La_M%C3%BAsica_Es_Mi_Mundo.jpg/revision/latest?cb=20241118165634",
            noImage: false,
          },
          {
            id: "violetta-season-2-soundtrack",
            type: "album",
            noSeason: 2,
            imgUrl: "https://images.universal-music.de/img/assets/359/359563/4/720/violetta-hoy-somos-mas.jpg",
            noImage: false,
          },
          {
            id: "violetta-season-3-soundtrack",
            type: "album",
            noSeason: 3,
            imgUrl: "https://m.media-amazon.com/images/I/81bnf0R5hQL._AC_UL450_SY450_QL70_.jpg",
            noImage: false,
          },
        ],
        tags: ["Drama", "Music", "Romance", "Teen", "Telenovela"],
        executive: "Diego Carabelli",
        producer: [
          "Adrián Suar",
          "Fernando Blanco",
        ],
        prodCompanies: "Pol-ka Producciones",
        network: ["Disney Channel Latin America"],
        related: [
          {
            id: "violetta-live-in-concert",
            title: "Violetta: Live in Concert",
            posterUrl: "https://www.themoviedb.org/t/p/w600_and_h900_face/n9POlkgqbJg0erwvbU6Hc0q1rLH.jpg"
          },
          {
            id: "violetta-the-journey",
            title: "Violetta: The Journey",
            posterUrl: "https://m.media-amazon.com/images/M/MV5BYTJjODViMmQtMWU5Ny00M2Y0LWFmNDktZjJiNmY3ZTA5NjMxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
          },
          {
            id: "violetta-backstage-pass",
            title: "Violetta: Backstage Pass",
            posterUrl: "https://play-lh.googleusercontent.com/G7H2h3CGYDCcpjNkEkZxoyAjCwO2A3hY3nrGLtPCi9ZGvDltyh0gtuuNEWBf59D3f1W7",
          },
          {
            id: "soy-luna",
            title: "Soy Luna",
            posterUrl: "https://cdn.europosters.eu/image/1300/33470.jpg",
          }, 
          {
            id: "bia",
            title: "Bia",
            posterUrl: "https://m.media-amazon.com/images/M/MV5BNmM3NDY2MzItZGFiYi00NzAxLThjODctMDgzZTE5YTIxY2NjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
          }, 
          {
            id: "tini-the-movie",
            title: "TINI: The Movie",
            posterUrl: "https://m.media-amazon.com/images/M/MV5BZDZmMWI1YTItZTc0NS00ZWE1LTk4OTUtOWY4YzhjMWViNDE3XkEyXkFqcGc@._V1_.jpg",
          },
          {
            id: "just-love-and-a-thousand-songs",
            title: "Just Love and a Thousand Songs",
            posterUrl: "https://static.wikia.nocookie.net/violetta/images/8/8e/Solo_amor_y_mil_canciones_%281%29.jpg/revision/latest/scale-to-width-down/1000?cb=20250202201011",
          }
        ],
    },
    {
        id: "hannah-montana", 
        title: "Hannah Montana",
        posterUrl: "https://image.tmdb.org/t/p/original/sRqLl0SHA4diTL8zvUTgBw6DQeM.jpg",
        country: "United States",
        mainCharacters: [
          {
            id: "miley-stewart",
            firstName: "Miley", 
            lastName: "Stewart",	
            imageUrl: "https://static.wikia.nocookie.net/hannahmontana/images/4/45/HM2_Miley_Stewart_promotional_photo_3.jpg/revision/latest/scale-to-width-down/1000?cb=20240305201539",
            actor: "Miley Cyrus",
            promo: true,
          },
          {
            id: "lilly-truscott",
            firstName: "Lillian", 
            lastName: "Truscott",	
            actor: "Emily Osment",
            nickname: ["Lilly"],
            goesByNickname: true,
          },
          {
            id: "oliver-oken",
            firstName: "Oliver", 
            lastName: "Oken", 
            actor: "Mitchel Musso"	
          },
          {
            id: "jackson-stewart",
            firstName: "Jackson",
            middleName: "Rod", 
            lastName: "Stewart",	
            actor: "Jason Earles"
          },
          {
            id: "robby-ray-stewert",
            firstName: "Robby",
            middleName: "Ray", 
            lastName:  "Stewart", 
            actor: "Billy Ray Cyrus",
            nickname: ["Robby Ray"],
            goesByNickname: true,
          },
          {
            id: "rico-suave",
            firstName: "Rico", 
            lastName: "Suave",	
            actor: "Moises Arias"},
        ],
        firstAirDate: "March 24, 2006",
        lastAirDate: "January 16, 2011",
        status: "ended",
        language: "English",
        plot: "Miley Stewart is a normal teenager who lives a double life as the famous pop singer Hannah Montana. She navigates the challenges of fame, friendship, and family while trying to keep her secret identity hidden.",
        numberOfSeasons: 4,
        numberOfEpisodes: 98,
        tags: ["Comedy", "Music", "Family", "Teen"],
        network: ["Disney Channel"],
        related: [
          {
            id: "hannah-montana-the-movie",
            title: "Hannah Montana: The Movie",
            posterUrl: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p190672_p_v10_aa.jpg",
          }, 
          {
            id: "hannah-montana-20th-anniversary-special",
            title: "Hannah Montana 20th Anniversary Special",
            posterUrl: "https://static.wikia.nocookie.net/hannahmontana/images/0/04/Hannah_Montana_20th_Anniversary_Special_poster.jpg/revision/latest/scale-to-width-down/1000?cb=20260311161654"
          },
        ],
    },
    {
        id: "good-luck-charlie", 
        title: "Good Luck Charlie",
        posterUrl: "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/good_luck_charlie.png",
        country: "United States",
        firstAirDate: "April 4, 2010",
        lastAirDate: "February 16, 2014",
        status: "ended",
        language: "English",
        plot: "The Duncan family navigates the ups and downs of family life while raising their youngest daughter, Charlie. The show follows the family's adventures and challenges as they try to balance work, school, and personal lives.",
        numberOfSeasons: 4,
        numberOfEpisodes: 97,
        tags: ["Comedy", "Family", "Teen"],
        network: ["Disney Channel"],
        related: ["Good Luck Charlie: It's Christmas!", "Good Luck Charlie: The Road Trip", "Best of Luck Nikki"],
    },
    {
        id: "kc-undercover", 
        title: "K.C Undercover",
        posterUrl: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10771045_b_v11_ah.jpg",
        country: "United States",
        firstAirDate: "January 18, 2015",
        lastAirDate: "February 2, 2018",
        status: "ended",
        language: "English",
        plot: "K.C. Cooper is a high school student who becomes a spy for a secret government organization. She must balance her double life as a student and a spy while keeping her family safe from danger.",
        numberOfSeasons: 3,
        numberOfEpisodes: 75,
        tags: ["Comedy", "Action", "Family", "Teen"],
        network: ["Disney Channel"],
    },
    {
        id: "shake-it-up", 
        title: "Shake It Up",
        posterUrl: "https://i.pinimg.com/736x/f9/83/bc/f983bcb07a3c0fb5f32ffc5b8992b541.jpg",
        country: "United States",
        firstAirDate: "November 7, 2010",
        lastAirDate: "November 10, 2013",
        status: "ended",
        language: "English",
        plot: "Shake It Up follows the lives of two best friends, CeCe Jones and Rocky Blue, who land their dream jobs as backup dancers on a local dance show called 'Shake It Up Chicago.' The series showcases their adventures in the world of dance, friendship, and growing up.",
        numberOfSeasons: 3,
        numberOfEpisodes: 75,
        tags: ["Comedy", "Music", "Dance", "Teen"],
        network: ["Disney Channel"],
        related: ["Shake It Up: Made in Japan"],
    },
    {
        id: "sonny-with-a-chance", 
        title: "Sonny With a Chance",
        posterUrl: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p7895977_b_v8_ab.jpg",
        country: "United States",
        firstAirDate: "February 8, 2009",
        lastAirDate: "January 2, 2011",
        status: "ended",
        language: "English",
        plot: "Talented Midwestern girl Sonny wins a nationwide talent search and is moving to Los Angeles to star in a popular TV series. Her home life and work life are documented along with her adjustment to life in the spotlight.",
        numberOfSeasons: 2,
        numberOfEpisodes: 47,
        tags: ["Comedy", "Family", "Teen"],
        network: ["Disney Channel"],
        related: ["So Random!"],
    },
    {
        id: "high-school-musical-the-musical-the-series", 
        title: "High School Musical the Musical the Series",
        posterUrl: "https://ew.com/thmb/FCKP8CAwSGBCLeMIXNHx4T5k9qA=/2000x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/high-school-musical-2-2000-6ae1ae2708f543e9ab27a95ba114caee.jpg",
        country: "United States",
        firstAirDate: "November 8, 2019",
        lastAirDate: "August 9, 2023",
        status: "ended",
        language: "English",
        plot: "A group of students at East High School stage a production of High School Musical, while navigating their own personal dramas and relationships.",
        numberOfSeasons: 4,
        numberOfEpisodes: 38,
        tags: ["Comedy", "Drama", "Music", "Romance", "Teen"],
        network: ["Disney+"],  
        related: ["High School Musical", "High School Musical 2", "High School Musical 3: Senior Year"],
    },
    {
        id: "pair-of-kings", 
        title: "Pair of Kings",
        posterUrl: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8248871_b_v8_ak.jpg",
        country: "United States",
        firstAirDate: "September 10, 2010",
        lastAirDate: "March 17, 2013",
        status: "ended",
        language: "English",
        plot: "Twin brothers, Brady and Boomer, discover they are the heirs to the throne of the island of Kinkow. They must learn to rule the island while dealing with various challenges and adventures.",
        numberOfSeasons: 3,
        numberOfEpisodes: 67,
        tags: ["Comedy", "Adventure", "Fantasy", "Teen"],
        network: ["Disney XD"],
    },
    {
        id: "kickin-it", 
        title: "Kickin' It",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BMTYzMzg4MzI0Ml5BMl5BanBnXkFtZTcwMDM0MTEzNw@@._V1_.jpg",
        country: "United States",
        firstAirDate: "June 13, 2011",
        lastAirDate: "March 25, 2015",
        status: "ended",
        language: "English",
        plot: "Jack, Jerry, Milton, and Kim are four misfit teens who train in martial arts at the Bobby Wasabi Martial Arts Academy. They must work together to overcome challenges and protect their dojo from various threats.",
        numberOfSeasons: 4,
        numberOfEpisodes: 86,
        tags: ["Comedy", "Action", "Family", "Teen"],
        network: ["Disney XD"],  
    },
    {
        id: "jonas", 
        title: "J. O. N. A. S",
        posterUrl: "https://lumiere-a.akamaihd.net/v1/images/p_jonas_21237_5d76cc88.jpeg?region=0%2C0%2C540%2C810",
        country: "United States",
        firstAirDate: "May 2, 2009",
        lastAirDate: "October 30, 2010",
        status: "ended",
        language: "English",
        plot: "The Jonas Brothers star as themselves in this comedy series, which follows their lives as they navigate fame, friendship, and family while pursuing their music careers.",
        numberOfSeasons: 2,
        numberOfEpisodes: 34,
        tags: ["Comedy", "Music", "Family", "Teen"],
        network: ["Disney Channel"],
    },
    {
        id: "the-lodge", 
        title: "The Lodge",
        posterUrl: "https://media.themoviedb.org/t/p/w300_and_h450_face/9ujocbPizfuhhkWDvtH2ye3pezo.jpg",
        country: "United Kingdom",
        firstAirDate: "September 23, 2016",
        lastAirDate: "December 16, 2017",
        status: "ended",
        language: "English",
        plot: "The Lodge is a British teen drama series that follows the life of a teenage girl named Skye who moves to a remote lodge in the countryside to live with her father. She navigates the challenges of her new life, including friendships, romance, and family dynamics.",
        numberOfSeasons: 2,
        numberOfEpisodes: 25,
        tags: ["Drama", "Romance", "Music", "Teen"],
        network: ["Disney Channel UK"],  
    },
    {
        id: "the-suite-life-of-zack-and-cody", 
        title: "The Suite Life of Zack and Cody",
        posterUrl: "https://preview.redd.it/the-suite-life-of-zack-and-cody-premiered-on-this-day-in-v0-104wdf22yipe1.jpg?width=640&crop=smart&auto=webp&s=8bf59f9f433491832476d7a71730a263033858d4",
        country: "United States",
        creator: [
          "Danny Kallis",
          "Jim Geoghan",
        ],
        adapter: [
          "Danny Kallis",
        ],
        director: ["Rich Correll"],
        themeSong: [
          "'Here I Am', performed by Drew Davis Band"
        ],
        endingTheme: "Here I Am (instrumental)",
        composer: [
          "Gary S. Scott"
        ],
        firstAirDate: "March 18, 2005",
        lastAirDate: "September 1, 2008",
        status: "ended",
        language: "English",
        plot: "The Suite Life of Zack and Cody is a comedy series that follows the lives of twin brothers Zack and Cody Martin, who live in the Tipton Hotel with their mother, who works as a lounge singer. The show explores their adventures and misadventures as they navigate life in the hotel, school, and friendships.",
        numberOfSeasons: 3,
        numberOfEpisodes: 87,
        tags: ["Comedy", "Family", "Teen"],
        executive: [
          "Danny Kallis",
          "Irene Dreayer",
          "Pamela Eells O'Connell (seasons 2-3)",
          "Jim Geoghan (seasons 3)",
        ],
        producer: [
          "Walter Barnett"
        ],
        prodLocation: [
          "Hollywood Center Studios",
          "Hollywood, California",
        ],
        prodCompanies: [
          "It's a Laugh Productions (Seasons 2–3)"
        ],
        network: ["Disney Channel"],
        related: [
          {
            id: "the-suite-on-deck",
            title: "The Suite On Deck",
            posterUrl: "https://m.media-amazon.com/images/M/MV5BZTQ4NzRkNjItNTcyZS00YzgzLThjZjktNWI2YTM4NzE0MDdmXkEyXkFqcGc@._V1_.jpg",
          },
          {
            id: "the-suite-life-movie",
            title: "The Suite Life Movie",
            posterUrl: "https://static.wikia.nocookie.net/suitelife/images/5/52/The_Suite_Life_Movie_Promotional_Logo.jpg/revision/latest?cb=20110325191520"
          },
        ],
    },
    {
        id: "ant-farm", 
        title: "A.N.T Farm",
        posterUrl: "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/17360.jpg",
        country: "United States",
        firstAirDate: "May 6, 2011",
        lastAirDate: "March 21, 2014",
        status: "ended",
        language: "English",
        plot: "A.N.T. Farm is a comedy series that follows the lives of three gifted middle school students, Chyna, Olive, and Fletcher, who are part of the Advanced Natural Talents (A.N.T.) program at Webster High School. The show explores their adventures, friendships, and challenges as they navigate life in a school for talented students.",
        numberOfSeasons: 3,
        numberOfEpisodes: 62,   
        tags: ["Comedy", "Family", "Teen", "Music"],
        network: ["Disney Channel"],
    },
    {
        id: "i-didnt-do-it", 
        title: "I Didn't Do It",
        posterUrl: "https://i.pinimg.com/736x/12/e3/eb/12e3eb827ba5e5ca02a31aa62fded2e0.jpg",
        country: "United States",
        firstAirDate: "January 17, 2014",
        lastAirDate: "October 16, 2015",
        status: "ended",
        language: "English",
        plot: "I Didn't Do It is a comedy series that follows the lives of five high school friends, Lindy, Logan, Jasmine, Garrett, and Delia, as they navigate the challenges of teenage life. The show explores their adventures, friendships, and misadventures as they deal with school, relationships, and family.",
        numberOfSeasons: 2,
        numberOfEpisodes: 39,
        tags: ["Comedy", "Family", "Teen"],
        network: ["Disney Channel"],
    },
    {
        id: "girl-meets-world ", 
        title: "Girl Meets World",
        posterUrl: "https://preview.redd.it/girl-meets-world-could-have-been-great-but-it-was-executed-v0-hoz1fawija5c1.jpg?width=1080&crop=smart&auto=webp&s=18a05df2752c33106676ecc46d0b8bc58badf255",
        country: "United States",
        firstAirDate: "June 27, 2014",
        lastAirDate: "January 20, 2017",
        status: "ended",
        language: "English",
        plot: "Girl Meets World follows Riley Matthews, the preteen daughter of Cory and Topanga Matthews, as she navigates middle school, family life, and growing up in New York City alongside her rebellious best friend Maya Hart. Cory serves as her history teacher, blending school lessons with life advice.",
        numberOfSeasons: 3,
        numberOfEpisodes: 72,
        tags: ["Comedy", "Family", "Teen"],
        network: ["Disney Channel"],
        related: ["Boy Meets World"],
    },
    {
        id: "alex-and-co", 
        title: "Alex & Co.",
        posterUrl: "https://static.wikia.nocookie.net/alex-co/images/9/9d/Posters1.jpg/revision/latest?cb=20170705191632",
        country: "Italy",
        firstAirDate: "May 11, 2015",
        lastAirDate: "October 30, 2017",
        status: "ended",
        language: "Italian",
        plot: "Alex and Co. is an Italian teen drama series that follows the lives of a group of high school students who form a band. The show explores their friendships, romances, and challenges as they navigate the ups and downs of teenage life while pursuing their passion for music.",
        numberOfSeasons: 3,
        numberOfEpisodes: 55,
        tags: ["Drama", "Music", "Romance", "Teen"],
        network: ["Disney Channel Italy"],
        related: ["Penny on M.A.R.S", "Alex & Co: The Movie"],
    },

]