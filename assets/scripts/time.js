const fetchTime = async () => {
  const response = await fetch(`https://api.dastyar.io/express/clock/current`);
  const data = await response.json();
  console.log(data);
};
