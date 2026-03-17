const arlertItem = {
    id: 1,
    type: "Giao thong",
    createdAt:new Date().toString(),
    ward: "Phu Xuan",
    status: "new",
};
// Bài tập
const trafficArlert = {
    id: 2,
    type: "Giao thong",
    ward: "Phu Xuan",
    createdAt:new Date().toString(),
    rainLevel: "high",
    cameraId: "camera-1",
    status: "new",
};
const fireArlert = {
    id: 3,
    type: "Cháy",
    ward: "Phu Xuan",
    createdAt: new Date().toString(),
    rainLevel: "high",
    cameraId: "camera-2",
    status: "processing",
};
const securityArlert = {
    id: 4,
    type: "Trật tự đô thị",
    ward: "Phu Xuan",
    createdAt: new Date().toString(),
    rainLevel: "medium",
    cameraId: "camera-3",
    status: "processing",
};

let message = "Cảnh báo mới";
message = message + "- Ưu tiên xử lý";

arlertItem.status = "processing";

console.log(message);
console.log(arlertItem);
console.log("Cảnh báo", trafficArlert.type, "tại", trafficArlert.ward, "đang ở trạng thái", trafficArlert.status);