const fs = require("node:fs/promises");
const { resolve } = require("node:path");
const { Readline } = require("node:readline/promises");


const loadAlerts = async () => {
    try {
        const raw = await fs.readFile("./data/alerts.json", "utf-8");
        const data = JSON.parse(raw);

        const rangeDay = 7;   

        const simpleData = data.map((item) => {
            const createdAt = item.createdAt || (() => {
                const randomDaysAgo = Math.floor(Math.random() * rangeDay) + 1;
                const randomDate = new Date();
                randomDate.setDate(randomDate.getDate() - randomDaysAgo);
                randomDate.setHours(Math.floor(Math.random() * 24), Math.floor(Math.random() * 60), 0, 0);
                return randomDate.toISOString();
            })();

            return {
                id: item.id,
                type: item.type,
                ward: item.ward,
                status: item.status,
                rainLevel: item.rainLevel,
                createdAt,
            };
        });

        console.log(`Đã đọc và xử lý ${simpleData.length} cảnh báo.`);
        return simpleData;
    } catch (error) {
        console.error("Lỗi khi đọc file JSON:", error.message);
        throw error;
    }
};
// Hàm lọc cảnh báo theo phường
const filterByWard = (alerts, wardName) => {
    if (!wardName || wardName.trim() === "") {
        console.log("Không hợp lệ");
        return alerts;
    }

    const filtered = alerts.filter(item =>
        item.ward.toLowerCase() === wardName.trim().toLowerCase()
    );

    console.log(`Có ${filtered.length} cảnh báo tại phường "${wardName.trim()}"`);
    return filtered;
};
// Hàm lọc số lượng cảnh báo
const summarizeByType = (alerts) => {
    return alerts.reduce((summary, alert) => {
        const type = alert.type || "Không xác định";
        summary[type] = (summary[type] || 0) + 1;
        return summary;
    }, {});
};
// Hàm lọc phân loại mức độ mưa
const summarizeByRainLevel = (alerts) => {
    return alerts.reduce((summary, alert) => {
        const rainLevel = alert.rainLevel || "Không xác định";
        summary[rainLevel] = (summary[rainLevel] || 0) + 1;
        return summary;
    }, {});
};
// Hàm lọc cảnh báo theo ngày
const sortByCreatedAtDesc = (alerts) => {
    return alerts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
};
// Hàm ghi file 
const writePendingAlerts = async (alerts) => {
    const pendingAlerts = alerts.filter(alert => alert.status === "pending" || alert.status === "new");
    const sortedAlerts = pendingAlerts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    await fs.writeFile("./output/pending_alerts.json", JSON.stringify(sortedAlerts, null, 2), "utf-8");
    console.log(`Đã ghi ${pendingAlerts.length} cảnh báo vào pending_alerts.json`);
};
const main = async () => {
    const readline = require("readline/promises").createInterface({
        input: process.stdin,
        output: process.stdout
    });
    try {
        let alerts = await loadAlerts();
        // Sắp xếp 
        alerts = sortByCreatedAtDesc(alerts);
        // Lọc theo phường 
        const wardName = await readline.question("Nhập tên phường để lọc cảnh báo: ");
        const filteredAlerts = filterByWard(alerts, wardName);
        // Thống kê số lượng cảnh báo theo loại
        const summaryByType = summarizeByType(filteredAlerts);
        console.log("Thống kê số lượng cảnh báo theo loại:", summaryByType);
        // Theo lượng mưa
        const summaryByRainLevel = summarizeByRainLevel(filteredAlerts);
        console.log("Thống kê số lượng cảnh báo theo mức độ mưa:", summaryByRainLevel);
        // Ghi file cảnh báo pending
        await writePendingAlerts(filteredAlerts);
        readline.close();
        resolve();
    } catch (error) {
        console.error("Lỗi trong quá trình xử lý:", error.message);
    }};

main();      