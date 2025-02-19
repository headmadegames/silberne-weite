for (let group of dv.pages('#session and "Sessions"')
    .groupBy(p => p.file.folder.split("/").slice(1, 2)).sort(p => p, 'desc')) 
{
    dv.header(2, group.key+"");
    const table = dv.markdownTable(["Session", "Datum", "PCs", "Level"],
        group.rows
            .sort(q => q.file.link, 'desc')
            .map(q => [q.file.link, q.date, q.pcs, q.level]))
        // hack to replace double backslash with single backslash
        .replaceAll(/\\\\/g, '\\');
    dv.paragraph(table);
}