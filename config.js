//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "2";
global.video = "2";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "nanyoufrede@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4,https://tenor.com/view/power-chainsawman-gif-25501450";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUpqYWpCbXI4aVhCNjlEV05maCtSckg5S3Ivb2pSSG5WREFWQnNXSnRFMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUzZJNVVZaml6aVhNTHV6d1IyV3A2T293NHFlVWEyQWlQT004dGo2aFppTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFTVZNNHBnb1Q4S2JtSkNOUlA0Ums0bmJ1a2NHNC9VaTAvYlFsdVJ5Zm04PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMV3IwVDFIWktFVXJRQWxvQTRDbkdWVG1URDJXakZvVUUwbnpkeEt0b1RvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVQR3hJUDc0QnhwS2c2SFRUejVyRWVSZEdCZ2VHSU9OV3p3bEZKZjZZMzg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjU3TUtsd2x0R0YwRy9BNEQwZFc0QzgyaHFDUzJESENzTlFrTTN2Y09GVzA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR05tUGdRY1EydUJUWmY1cGtxUC9pVVptSGRVdEZkZmtDZzYvQWZIZzhsTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaCtzK3l6NXlEU2o3NStFYStsc2NuejFkRmtFUCtncjFWeURacnYrdW8yMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtFOFBCc1NIdXlwUUgvdDVaL1RhajdhcFlFUFBCQjVZeFUwRUFEVm51dUExRi9HSlV4MGVXQ3hWT3BMc1RtUGNuSVk3b3Z4MGlhYzRKRmpKK0g1cUF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg5LCJhZHZTZWNyZXRLZXkiOiIralc1bFFIbkJWaGZ4bDE1Q1lxaTFFSzBoS0U2SVF6L2xHKzFMQ0hTUEVFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJRckVKdnNwQlRQcXExQmRnUXBzeG9nIiwicGhvbmVJZCI6IjkxYTJiNDU5LTIwZGEtNGJlZi05NjdlLTljNzdjMjVmYjNiYyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzSDN5bFYwVGdLd0tUQ3NNdVUxL2w1YmJBaVk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVE9wb211ZktBTEYxem9BN3hTVTBWVm81NlkwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjNUQjVYM0NKIiwibWUiOnsiaWQiOiIyMzc2ODI0NDg4NzA6MzNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTmllbCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTmFDK3R3Q0VOL1J0clVHR0JzZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiamM5K2I3TWVENFd0b214cnJrYlBkcVFnVWw5N2tJb3ZPS0VZMG1uU29Xbz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiMnE0N0RvZW9pcEZROVJJd0E1WE1rcGdRSWg2V29FVUNXVmRSTmhYdGs2YStIQ3I4czNSalBRZVdFeDVZLzN3bnpKRzkvd1NNZ20wb3pWaDRWRkpvQWc9PSIsImRldmljZVNpZ25hdHVyZSI6IlR2aVNlZDZGRmlnQnZLRTVtcnNIc3Z2TkZLeVF0VDByam4wWWpVbmVqeXFheFdtZ3krWFFoWk1taVByTVVvdUFyQ2tEQ01xZ244Q2NIV25ZUTZxL0N3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM3NjgyNDQ4ODcwOjMzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlkzUGZtK3pIZytGcmFKc2E2NUd6M2FrSUZKZmU1Q0tMemloR05KcDBxRnEifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjI2NTcwMDUsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBS0k2In0=
  process.env.SESSION_ID ||
  ""
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "?",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "fred",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
