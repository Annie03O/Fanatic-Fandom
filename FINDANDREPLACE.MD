Planning a find-and-replace for the track data
gEftersom texten nu är utan punkter och länkar behöver mönstren justeras. Gör det i tre steg, med regex-läget (Alt+R) på.

Steg 1: Ta bort “Written by”-raderna

Sök:

^[ \t]*Written by.*\r?\n
Ersätt med: (tomt)

Raden “Written and Performed by Leona Naess” påverkas inte, eftersom den inte matchar “Written by”.

Steg 2: Gör om “Written and Performed by” till “Performed by”

Sök:

^[ \t]*Written and Performed by
Ersätt med:

Performed by
Nu består allt av par: en titelrad följt av en Performed by-rad.

Steg 3: Bygg objekten

Sök:

^[ \t]*(.+?)[ \t]*\r?\n[ \t]*Performed by (.+?)[ \t]*$
Ersätt med:

{\n  id: generateId("$1 $2"),\n  title: "$1",\n  artist: "$2"\n},
I ersättningsfältet tolkar VS Code \n som radbrytning när regex är på, och $1/$2 är titel respektive artist.

Resultat:

typescript
{
  id: generateId("Lazy Days Leona Naess"),
  title: "Lazy Days",
  artist: "Leona Naess"
},
{
  id: generateId("Play Some D Brassy"),
  title: "Play Some D",
  artist: "Brassy"
},
...
Tips:

Kör Format Document (Shift+Alt+F) efteråt så får du rätt indrag i din array.
Rader som inte är en titel följd av Performed by, till exempel (Main Title Theme), matchas inte och blir kvar. Ta bort dem först, till exempel med sökningen ^[ \t]*\(.*\)\r?\n.
Om en titel innehåller citattecken (") måste du escapa dem manuellt efteråt.