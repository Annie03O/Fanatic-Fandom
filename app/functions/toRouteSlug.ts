export const toRouteSlug = (title: string): string => 
    title.trim()
.normalize("NFD")
.replace(/[\u0300-\u036f]/g, "") // tar bort accenter (É -> E)
.replace(/[^a-zA-Z0-9]+/g, "_")  // allt annat -> _
.replace(/^_+|_+$/g, "")         // trimma _ i början/slut
.replace(/_+/g, "_");            // flera _ -> en _
