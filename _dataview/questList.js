console.log("input completed", input);
let completed = input.completed;
for (let group of dv.pages('#quest and "Quests"')
    .where(p => p.completed === completed)
    .groupBy(p => p.file.folder)) 
{
    dv.header(2, group.key.substring(7).split("/").join(": "));
    dv.paragraph(
        dv.markdownTable(["Quest", "Auftraggeber", "Abgeschlossen", "Orte"],
        group.rows
            .sort(q => q.file.link, 'desc')
            .map(q => [q.file.link, q.questgiver, q.completed, q.locations]))
        // hack to replace double backslash with single backslash
        .replaceAll(/\\\\/g, '\\')
    )
}