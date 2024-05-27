const axios = require("axios");
const dotenv = require("dotenv");
const cheerio = require("cheerio");
const cron = require("node-cron");
dotenv.config();

async function getHtmlData(url) {
  try {
    const htmlData = await axios.get(url);
    return htmlData;
  } catch (error) {
    console.log("ERROR FETCHING HTML DATA:", error);
  }
}

async function sendProductToDiscord(productData, webhookUrl) {
  if (productData) {
    try {
      const payload = {
        embeds: [
          {
            title: {},
            thumbnail: {},
            url: linkToSend,
            fields: [
              { name: "Price", value: {} },
              { name: "Original Price", value: {} },
              { name: "Site", value: {} },
              { name: "Link", value: `[Click here](${"link here"})` },
            ],
            color: 0x00ff00,
          },
        ],
      };

      await axios.post(webhookUrl, payload);
      console.log(`Sent product: ${productData.title}`);
    } catch (error) {
      console.error("Error sending product:", error);
    }
  } else {
    console.log("PRODUCT DATA NOT DEFINED");
  }
}

async function main() {
  try {
  } catch (error) {
    console.log("ERROR IN MAIN:", error);
  }
}

main(); // Run immediately upon starting the bot
cron.schedule("0 * * * *", main); // Repeat every hour
