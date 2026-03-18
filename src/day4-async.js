const getAlerts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{ id: 1, type: "Chay" }]);
    }, 5000);
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
