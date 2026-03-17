const formatAlertTitle = (alert) => {
  return `${alert.type} - ${alert.ward}`;
};

const isUrgentAlert = (alert) =>
  alert.type === "Chay" || alert.status === "new";

console.log(formatAlertTitle({ type: "Chay", ward: "Phú xuân" }));
console.log(isUrgentAlert({ type: "Chay", status: "new" }));
// JSON test
const alertJson = { 
  type: "Giao thông",
  ward: "1",
  status: "new",
   createdAt: new Date().toString(),
  rainLevel: "high",
  cameraId: "2"
};
// Hàm chuyển đổi mã phường thành tên phường
const getWardLabel = (code) => {
    const wardMap = {
        "1": "Phú Xuân",
        "2": "Vỹ dạ",
    };
    return wardMap[code] || `Phường ${code || "chưa xác định"}`;
};
// Hàm toTaskPayLoad
const toTaskPayLoad = (alert) => {
    return { 
        title: `${alert.type} - ${getWardLabel(alert.ward)}`,
        type: alert.type,
        ward: getWardLabel(alert.ward),
        is_urgent: isUrgentAlert(alert),
        status: "pending",
        createdAt: new Date().toString(),
    };
};
console.log(getWardLabel(1));
console.log(toTaskPayLoad(alertJson));