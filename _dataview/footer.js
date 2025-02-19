function relationBlock(tag, path, header, mapper) {
    const quests = dv.pages(`#${tag} and "${path}" and ([[]] or outgoing([[]]))`);
    if(quests.length > 0) {
        dv.header(2, path);
        dv.paragraph(
            dv.markdownTable(
                header,
                quests
                    .sort((q => {
                        if(q.date){ return q.date } 
                        else { return q.file.link}
                    }), 'asc')
                    .map(mapper)
            )
            // hack to replace double backslash with single backslash
            .replaceAll(/\\\\/g, '\\')
        );
    }
}

const blocks = [
    {tag: "quest", path: "Quests", header: ["Quest", "Auftraggeber", "Abgeschlossen"], mapper: (q => [q.file.link, q.questgiver, q.completed])},
    {tag: "item", path: "Items", header: ["Item", "Im Besitz von"], mapper: (q => [q.file.link, q.owner])},
    {tag: "location", path: "Locations", header: ["Ort", "Kontrolliert von"], mapper: (q => [q.file.link, q.controlledBy])},
    {tag: "session", path: "Sessions", header: ["Session", "Datum", "PCs", "Level"], mapper: (q => [q.file.link, q.date, q.pcs, q.level])},
    {tag: "pc", path: "PCs", header: ["PC", "Klasse", "Spezies", "Level"], mapper: (q => [q.file.link, q.class, q.race, q.level])},
    {tag: "npc", path: "NPCs", header: ["NPC", "Rolle", "Fraktion", "Spezies", "Lebendig"], mapper: (q => [q.file.link, q.role, q.faction, q.race, q.alive])},
    {tag: "faction", path: "Factions", header: ["Fraktionen"], mapper: (q => [q.file.link])}
];
for (let block of blocks) {
//for (let block of input.blocks) {
    relationBlock(block.tag, block.path, block.header, block.mapper);
}