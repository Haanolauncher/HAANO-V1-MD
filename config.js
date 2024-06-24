const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/Haanolauncher/HAANO-V1-MD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ Launcher" 


global.devs = "256774856806" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "256774856806";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "256774856806,256xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_55_06_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTI4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDM5LFxuICAgICAgICAxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDM2LFxuICAgICAgICA2MCxcbiAgICAgICAgOCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDUxLFxuICAgICAgICA4MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA2LFxuICAgICAgICA2LFxuICAgICAgICAyMSxcbiAgICAgICAgMjMzLFxuICAgICAgICAzMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTkzLFxuICAgICAgICA1MixcbiAgICAgICAgNTUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjM1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDksXG4gICAgICAgIDIxMSxcbiAgICAgICAgODIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTYyLFxuICAgICAgICA0NixcbiAgICAgICAgMjQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyLFxuICAgICAgICA0MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDcyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDExNixcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTAzLFxuICAgICAgICA3NixcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDg5LFxuICAgICAgICAyMDksXG4gICAgICAgIDE5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDg3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDk5LFxuICAgICAgICA0NyxcbiAgICAgICAgOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDI1LFxuICAgICAgICAxODEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDQ2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTI1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzNixcbiAgICAgICAgNzgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA1MCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzksXG4gICAgICAgIDMxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTA2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTA0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDY5LFxuICAgICAgICAzMCxcbiAgICAgICAgMjIzLFxuICAgICAgICA1MSxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM4LFxuICAgICAgICA5MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTUsXG4gICAgICAgIDEyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTE4LFxuICAgICAgICA3OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTYzLFxuICAgICAgICA4OSxcbiAgICAgICAgMjIzLFxuICAgICAgICA1MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODAsXG4gICAgICAgIDIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEwMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMzFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAzOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMzcsXG4gICAgICAgIDc1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDc0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTAxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDMwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDQzLFxuICAgICAgICA4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwLFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJRQmhGZHEwUFhRbDNmUldkYysxbXIycW1Ub3dCQTIwcHdMcVgxUEZYcUtzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJkQnc2cHhFQVNPYTVyWm5EZGNfSjNnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjFiNzMyY2VkLWJkYWEtNDUwZC1iMGYxLTZkNzc1N2ExY2QxN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTgsXG4gICAgICAxNzIsXG4gICAgICAxNDUsXG4gICAgICAxMDUsXG4gICAgICA1LFxuICAgICAgMTYxLFxuICAgICAgNjUsXG4gICAgICAyMyxcbiAgICAgIDcxLFxuICAgICAgNDIsXG4gICAgICAxMTMsXG4gICAgICA4NSxcbiAgICAgIDIyMyxcbiAgICAgIDExLFxuICAgICAgMTc4LFxuICAgICAgMTM0LFxuICAgICAgMjksXG4gICAgICAwLFxuICAgICAgMjI4LFxuICAgICAgNjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjMsXG4gICAgICA2MSxcbiAgICAgIDIxMSxcbiAgICAgIDUwLFxuICAgICAgMjE5LFxuICAgICAgMjUsXG4gICAgICA0MixcbiAgICAgIDk2LFxuICAgICAgMjQsXG4gICAgICAxMTUsXG4gICAgICAxNTAsXG4gICAgICA4OSxcbiAgICAgIDIwLFxuICAgICAgMjUzLFxuICAgICAgMjQxLFxuICAgICAgMTgyLFxuICAgICAgMzMsXG4gICAgICA4MSxcbiAgICAgIDg3LFxuICAgICAgNzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNDVYUkNYVFBcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1Njc3NDg1NjgwNjo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTGF1bmNoZXJcIixcbiAgICBcImxpZFwiOiBcIjIzMDg3MjA1NzkzMzkyNDo3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0w2Mmo3Y0RFTUxXNTdNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZkNqeit6NEhqbU9ycGYxa3d1dUNvRndwU1grNkJrdUV0bERYWVlLM1RIRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI0cG9TM2h3OFdMdnFSdVppaDlkcThXRnpwTmxBL0k0cmw3TS9TaWxqWXd5bmdZRkk5YlB2dmtweWdRZ3hVV1JHRXUxdm8vc0JuRDFjNDdNcUpJWUJBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJjamJpTTkxOE9CUnBDZU53cnMxcldWN3pvVytCSEpSenBUeWxua2RNWDQrMGxWL1hmcDRCdEliWTBKa2dzVFZKTHFhWVU1b0hybnFUQzc0UmsvZnJCQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTY3NzQ4NTY4MDY6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTEzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTkyNjYxMzBcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ Launcher 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "HAANO-V1-MD",
  ownername:process.env.OWNER_NAME|| "Launcher",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
