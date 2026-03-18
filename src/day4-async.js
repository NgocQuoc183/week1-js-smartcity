const getAlerts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{ id: 1, type: "Chay" }, { id: 2, type: "Trộm" }, { id: 3, type: "Đột nhập" }]);
    }, 1000);
  });
};

const main = async () => {
  try {
    const data = await getAlerts();
    console.log(data);
  } catch (error) {
    console.error("Co loi:", error.message);
  }
};

main();

const getCameraList = () => Promise.resolve([{ id: "CAM01" }]);
const getTaskList = () => Promise.resolve([{ id: 101 }]);

const loadAll = async () => {
  const [alerts, cameras] = await Promise.all([
    getAlerts(),
    getCameraList()
  ]);

  console.log(alerts.length, cameras.length);
};
