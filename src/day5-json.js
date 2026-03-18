const fs = require("node:fs/promises");

const run = async () => {
    const raw = await fs.readFile("data/alerts.json", "utf-8");
    const data = JSON.parse(raw);
    // console.log(data);

    const pending = data.filter((item) => item.status === "done");
    const byType = pending.reduce((acc, item) => {
        acc[item.type] = (acc[item.type] || 0) + 1;  
        return acc;
    }, {});

await fs.writeFile ("output/summary.JSON",
    JSON.stringify({total : pending.length, byType}, null, 2),
    "utf8"
) ;
};

run();


