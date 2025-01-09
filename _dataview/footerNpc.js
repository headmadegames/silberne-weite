await dv.view("_dataview/footer", { blocks: [
    {tag: "quest", path: "Quests", header: ["Quest", "Auftraggeber", "Abgeschlossen"], mapper: (q => [q.file.link, q.questgiver, q.completed])},
    {tag: "item", path: "Items", header: ["Item", "Im Besitz von"], mapper: (q => [q.file.link, q.owner])},
    {tag: "location", path: "Locations", header: ["Ort", "Kontrolliert von"], mapper: (q => [q.file.link, q.controlledBy])},
    {tag: "session", path: "Sessions", header: ["Sessions", "Datum", "PCs", "Level"], mapper: (q => [q.file.link, q.date, q.pcs, q.level])},
    {tag: "pc", path: "PCs", header: ["PC", "Klasse", "Spezies", "Level"], mapper: (q => [q.file.link, q.class, q.race, q.level])},
    {tag: "npc", path: "NPCs", header: ["NPC", "Spezies", "Lebendig"], mapper: (q => [q.file.link, q.race, q.alive])},
    {tag: "faction", path: "Factions", header: ["Fraktionen"], mapper: (q => [q.file.link])}
] });
