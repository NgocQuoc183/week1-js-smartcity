const arlert = [
    { id : 1, type: "Giao thong", createdAt: new Date().toString(), ward: "Phu Xuan", status: "new" },
    { id : 2, type: "Cháy", ward: "Phu Xuan", createdAt: new Date().toString(), rainLevel: "high", cameraId: "camera-2", status: "processing" },
    { id : 3, type: "Trật tự đô thị", ward: "Phu Xuan", createdAt: new Date().toString(), rainLevel: "medium", cameraId: "camera-3", status: "processing" },    
];

const processingAlerts = arlert.filter(alert => alert.status === "processing");
console.log(processingAlerts);

const titles = arlert.map(alert => `${alert.type} - ${alert.ward}`);
console.log(titles);

const alertById = arlert.find(alert => alert.id === 3);
console.log(alertById);

const summary = arlert.reduce((acc,item) => {
    acc[item.type] = (acc[item.type] || 0) + 1;
    return acc;
}, {});
console.log(summary);

// Array camera
const cameras = [
    { id: "camera-1", location: "Phu Xuan", status: "active" },
    { id: "camera-2", location: "Phu Xuan", status: "inactive" },
    { id: "camera-3", location: "Phu Xuan", status: "active" }
];
console.log(cameras);
const activeCameras = cameras.filter(camera => camera.status === "active");
console.log(activeCameras);
// Tính số lượng cảnh báo tại các phường xã bằng reduce
const alertsWard = [
  { id: "ALERT-001", type: "Chay",     ward: "Hương Sơ" },
  { id: "ALERT-002", type: "Ngập",    ward: "Hương Sơ" },
  { id: "ALERT-003", type: "Chay",     ward: "Hương An" },
  { id: "ALERT-004", type: "Cây đổ",  ward: "Hương Chữ" },
  { id: "ALERT-005", type: "Chay",     ward: "Hương Sơ" },
  { id: "ALERT-006", type: "Tai nạn", ward: "Hương Hồ" },
  { id: "ALERT-007", type: "Ngập",    ward: "Hương An" },
  { id: "ALERT-008", type: "Chay",     ward: "Hương Chữ" },
  { id: "ALERT-009", type: "Cây đổ",  ward: "Hương Xuân" },
  { id: "ALERT-010", type: "Chay",     ward: "Hương Sơ" },

  { id: "ALERT-011", type: "Ngập",    ward: "Hương Hồ" },
  { id: "ALERT-012", type: "Tai nạn", ward: "Hương An" },
  { id: "ALERT-013", type: "Chay",     ward: "Hương Chữ" },
  { id: "ALERT-014", type: "Cây đổ",  ward: "Hương Sơ" },
  { id: "ALERT-015", type: "Ngập",    ward: "Hương Xuân" },

  { id: "ALERT-016", type: "Chay",     ward: "Hương Hồ" },
  { id: "ALERT-017", type: "Tai nạn", ward: "Hương Chữ" },
  { id: "ALERT-018", type: "Chay",     ward: "Hương An" },
  { id: "ALERT-019", type: "Ngập",    ward: "Hương Sơ" },
  { id: "ALERT-020", type: "Cây đổ",  ward: "Hương Xuân" }
];
const alertByWard = alertsWard.reduce((acc, alert) => {
    acc[alert.ward] = (acc[alert.ward] || 0) + 1;
    return acc;
 }, {});
 console.log(alertByWard);