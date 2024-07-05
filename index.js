const axios = require("axios");

async function getMotivationalQuote() {
  try {
    const response = await axios.get(
      "https://api.quotable.io/random?tags=humor"
    );
    const quote = response.data.content;
    return quote;
  } catch (error) {
    console.error("Error fetching quote:", error);
    return "Stay positive and keep going!";
  }
}

async function isNormal() {
  const randomAnswer = Math.random() < 0.5 ? "yes" : "no";
  const motivationalQuote = await getMotivationalQuote();
  return `${randomAnswer}. ${motivationalQuote}`;
}

module.exports = isNormal;
