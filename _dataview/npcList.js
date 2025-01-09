for (let group of dv.pages('#npc and "NPCs"')
    .groupBy(p => p.file.folder)) 
{
    dv.header(2, group.key.substring(5).split("/").join(": "));
    dv.paragraph(
        dv.markdownTable(["NPC", "Spezies", "Rolle", "Fraktion", "lebendig"],
        group.rows
            .sort(q => q.file.link, 'desc')
            .map(q => [q.file.link, q.race, q.role, q.faction, q.alive]))
        // hack to replace double backslash with single backslash
        .replaceAll(/\\\\/g, '\\')
    );
}