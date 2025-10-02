const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const url = "https://discord.com/api/v9/hypesquad/online";

const headers = {
  "authorization": "token", 
  "accept": "/",
  "accept-language": "tr",
  "content-type": "application/json",
  "priority": "u=1, i",
  "sec-ch-ua": "Not:A-Brand";v="24", "Chromium";v="134",
  "sec-ch-ua-mobile": "?0",
  "sec-ch-ua-platform": "Windows",
  "sec-fetch-dest": "empty",
  "sec-fetch-mode": "cors",
  "sec-fetch-site": "same-origin",
  "x-debug-options": "bugReporterEnabled",
  "x-discord-locale": "tr",
  "x-discord-timezone": "Europe/Istanbul",
};

const body = JSON.stringify({
  house_id: 3
});

fetch(url, {
  method: "POST",
  headers: headers,
  body: body
})
  .then(res => res.text())
  .then(data => {
    console.log("yarraq:", data);
  })
  .catch(error => {
    console.error("am:", error);
  });
