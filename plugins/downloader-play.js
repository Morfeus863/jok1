import fetch from "node-fetch";
import yts from "yt-search";
/**
 *
 * @param {*} query
 * @param {*} options
 * @returns
 */
async function search(query, options = {}) {
  const search = await yts.search({ query, hl: "es", gl: "ES", ...options });
  return search.videos;
}

function MilesNumber(number) {
  const exp = /(\d)(?=(\d{3})+(?!\d))/g;
  const rep = "$1.";
  let arr = number.toString().split(".");
  arr[0] = arr[0].replace(exp, rep);
  return arr[1] ? arr.join(".") : arr[0];
}

function secondString(seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " dรญa, " : " dรญas, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " hora, " : " horas, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " minuto, " : " minutos, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " segundo" : " segundos") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
}

let handler = async (m, { conn, command, args, text, usedPrefix }) => {
  if (!text)
    throw `*[โ๐๐๐๐โ] ๐ฝ๐พ๐ผ๐ฑ๐๐ด ๐ณ๐ด ๐ป๐ฐ ๐ฒ๐ฐ๐ฝ๐ฒ๐ธ๐พ๐ฝ ๐ต๐ฐ๐ป๐๐ฐ๐ฝ๐๐ด, ๐ฟ๐พ๐ ๐ต๐ฐ๐๐พ๐ ๐ธ๐ฝ๐ถ๐๐ด๐๐ด ๐ด๐ป ๐ฒ๐พ๐ผ๐ฐ๐ฝ๐ณ๐พ ๐ผ๐ฐ๐ ๐ด๐ป ๐ฝ๐พ๐ผ๐ฑ๐๐ด/๐๐ธ๐๐๐ป๐พ ๐ณ๐ด ๐๐ฝ๐ฐ ๐ฒ๐ฐ๐ฝ๐ฒ๐ธ๐พ๐ฝ*\n\n*โโ ๐ด๐น๐ด๐ผ๐ฟ๐ป๐พ:*\n*${
      usedPrefix + command
    } Good Feeling - Flo Rida*`;
  try {
    const yt_play = await search(args.join(" "));
    let texto1 = `*โโโ๐ ะะะะ ะฃะะะ ะะ ะฎะขะฃะะ ๐โโโ*\n
โ ๐ *ะะฐะทะฒะฐะฝะธะต:* ${yt_play[0].title}
โ ๐ *ะะฟัะฑะปะธะบะพะฒะฐะฝะพ:* ${yt_play[0].ago}
โ โ *ะัะพะดะพะปะถะธัะตะปัะฝะพััั:* ${secondString(yt_play[0].duration.seconds)}
โ ๐ *ะัะพัะผะพััะตะฝะพ:* ${`${MilesNumber(yt_play[0].views)}`}
โ ๐ค *ะะฒัะพั:* ${yt_play[0].author.name}
โ โฏ๏ธ *ะบะฐะฝะฐะป:* ${yt_play[0].author.url}
โ ๐ *๐ธ๐ณ:* ${yt_play[0].videoId}
โ ๐ชฌ *ะขะธะฟ:* ${yt_play[0].type}
โ ๐ *ะกััะปะบะฐ:* ${yt_play[0].url}`.trim();
    const buttons = [
      {
        buttonId: `#ytmp3 ${yt_play[0].url}`,
        buttonText: { displayText: "๐ต ะขะ ะญะ ๐ต" },
        type: 1,
      },
      {
        buttonId: `#ytmp4 ${yt_play[0].url}`,
        buttonText: { displayText: "๐ฅ ะะะะ ๐ฅ" },
        type: 1,
      },
      {
        buttonId: `#playlist ${text}`,
        buttonText: { displayText: "๐ ะะกะ ะ ะะะฃะะฌะขะะขะซ ๐" },
        type: 1,
      },
    ];
    let buttonMessage = {
      document: { url: "https://wa.me/79524197466" },
      fileName: "โ ๐ฟ สแดแดสแดแดแดแดแดแดส แดแด สแดแดแดแดสแด",
      mimetype: "application/vnd.ms-excel",
      caption: texto1,
      fileLength: "99999999999999",
      mentions: [m.sender],
      footer: wm,
      buttons: buttons,
      headerType: 4,
      contextInfo: {
        mentionedJid: [m.sender],
        externalAdReply: {
          showAdAttribution: true,
          title: `${yt_play[0].title}`,
          mediaType: 2,
          previewType: "VIDEO",
          thumbnailUrl: yt_play[0].image,
          mediaUrl: `${yt_play[0].url}`,
          sourceUrl: `https://chat.whatsapp.com/FQ4gui0wUTO94zgP2YUbsH`,
        },
      },
    };
    conn.sendMessage(m.chat, buttonMessage, { quoted: m });
  } catch {
    try {
      let vid2 = await (
        await fetch(
          `https://api.lolhuman.xyz/api/ytsearch?apikey=${lolkeysapi}&query=${text}`
        )
      ).json();
      let { videoId, title, views, published, thumbnail } = await vid2
        .result[0];
      const url = "https://www.youtube.com/watch?v=" + videoId;
      let ytLink = await fetch(
        `https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`
      );
      let jsonn = await ytLink.json();
      let aud = await jsonn.result.audio;
      let capt = `โ ๐ *ะะฐะทะฒะฐะฝะธะต:* ${title}\nโ ๐ *ะะฟัะฑะปะธะบะพะฒะฐะฝะพ:* ${published}\nโ ๐ *ะัะพัะผะพััะตะฝะพ:* ${views}\nโ ๐ *ะกััะปะบะฐ:* ${url}`;
      const buttons = [
        {
          buttonId: `#playlist ${title}`,
          buttonText: { displayText: "๐ ะะกะ ะ ะะะฃะะฌะขะะขะซ ๐" },
          type: 1,
        },
      ];
      const buttonMessage = {
        image: { url: thumbnail },
        caption: capt,
        footer: "*ะัะตะผ ะธ ัะบะฐัะธะฒะฐะตะผ ะฒะฐัะต ะฐัะดะธะพ,ะพะดะฝั ะผะธะฝััะพัะบั...*",
        buttons: buttons,
        headerType: 4,
      };
      let msg = await conn.sendMessage(m.chat, buttonMessage, { quoted: m });

      conn.sendMessage(
        m.chat,
        {
          audio: { url: aud },
          mimetype: "audio/mp4",
          fileName: `${title}.mp3`,
        },
        { quoted: msg }
      );
    } catch {
      throw "*[โ๐๐๐๐โ] ๐ด๐๐๐พ๐, ๐ฟ๐พ๐ ๐ต๐ฐ๐๐พ๐ ๐๐๐ด๐ป๐๐ฐ ๐ฐ ๐ธ๐ฝ๐๐ด๐ฝ๐๐ฐ๐๐ป๐พ*";
    }
  }
};
handler.help = ["play", "play2"].map((v) => v + " < busqueda >");
handler.tags = ["downloader"];
handler.command = /^ะฟะตัะฝั?$/i;
export default handler;

/*import { youtubeSearch } from '@bochilteam/scraper'
import fetch from 'node-fetch'
let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `*[โ๐๐๐๐โ] ๐ฝ๐พ๐ผ๐ฑ๐๐ด ๐ณ๐ด ๐ป๐ฐ ๐ฒ๐ฐ๐ฝ๐ฒ๐ธ๐พ๐ฝ ๐ต๐ฐ๐ป๐๐ฐ๐ฝ๐๐ด, ๐ฟ๐พ๐ ๐ต๐ฐ๐๐พ๐ ๐ธ๐ฝ๐ถ๐๐ด๐๐ด ๐ด๐ป ๐ฒ๐พ๐ผ๐ฐ๐ฝ๐ณ๐พ ๐ผ๐ฐ๐ ๐ด๐ป ๐ฝ๐พ๐ผ๐ฑ๐๐ด/๐๐ธ๐๐๐ป๐พ ๐ณ๐ด ๐๐ฝ๐ฐ ๐ฒ๐ฐ๐ฝ๐ฒ๐ธ๐พ๐ฝ*\n\n*โโ ๐ด๐น๐ด๐ผ๐ฟ๐ป๐พ:*\n*${usedPrefix + command} Good Feeling - Flo Rida*`
try {
let vid = (await youtubeSearch(text)).video[0]
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
const urll = 'https://www.youtube.com/watch?v=' + videoId
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]
const buttons = [
{ buttonId: `#ytmp3 ${urll}`, buttonText: { displayText: '๐ต ๐๐๐๐๐ ๐ต' }, type: 1 },
{ buttonId: `#ytmp4 ${urll}`, buttonText: { displayText: '๐ฅ ๐๐๐๐๐ ๐ฅ' }, type: 1 },
{ buttonId: `#playlist ${text}`, buttonText: { displayText: '๐ ๐๐๐ ๐๐๐๐๐๐๐๐๐๐ ๐' }, type: 1 }, ]    
let texto1 = `*โโโ๐ ๐๐๐๐๐๐๐ ๐๐๐๐ ๐โโโ*\n
โ ๐ *๐๐ธ๐๐๐ป๐พ:* ${title}
โ ๐ *๐ฟ๐๐ฑ๐ป๐ธ๐ฒ๐ฐ๐ณ๐พ:* ${publishedTime}
โ โ *๐ณ๐๐๐ฐ๐ฒ๐ธ๐พ๐ฝ:* ${durationH}
โ ๐ *๐๐ธ๐๐๐ฐ๐:* ${viewH}
โ ๐ *๐ณ๐ด๐๐ฒ๐๐ธ๐ฟ๐ฒ๐ธ๐พ๐ฝ:* ${description}
โ ๐ *๐ป๐ธ๐ฝ๐บ:* ${urll}`.trim()
let buttonMessage = { "document": { url: "https://wa.me/5219992095479" }, "fileName": 'โ ๐ฟ สแดแดสแดแดแดแดแดแดส แดแด สแดแดแดแดสแด', "mimetype": 'application/vnd.ms-excel', "caption": texto1, "fileLength": '99999999999999', "mentions": [m.sender], "footer": wm, "buttons": buttons, "headerType": 4, contextInfo: { "mentionedJid": [m.sender], "externalAdReply": { "showAdAttribution": true, "title": `${title}`, "mediaType": 2, "previewType": "VIDEO", "thumbnail": await (await fetch(thumbnail)).buffer(), "mediaUrl": `${urll}`, "sourceUrl": `https://github.com/BrunoSobrino/TheMystic-Bot-MD` }}} 
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
} catch {
try {
let vid2 = await (await fetch(`https://api.lolhuman.xyz/api/ytsearch?apikey=${lolkeysapi}&query=${text}`)).json()
let { videoId, title, views, published, thumbnail } = await vid2.result[0]
const url = 'https://www.youtube.com/watch?v=' + videoId
let ytLink = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`)
let jsonn = await ytLink.json()
let aud = await jsonn.result.audio
let capt = `โ ๐ *๐๐ธ๐๐๐ป๐พ:* ${title}\nโ ๐ *๐ฟ๐๐ฑ๐ป๐ธ๐ฒ๐ฐ๐ณ๐พ:* ${published}\nโ ๐ *๐๐ธ๐๐๐ฐ๐:* ${views}\nโ ๐ *๐ป๐ธ๐ฝ๐บ:* ${url}`
const buttons = [{buttonId: `#playlist ${title}`, buttonText: {displayText: '๐ ๐๐๐ ๐๐๐๐๐๐๐๐๐๐ ๐'}, type: 1}]
const buttonMessage = { image: {url: thumbnail}, caption: capt, footer: '*แดษดแด ษชแดษดแดแด แดแดแดษชแด, แดษขแดแดสแดแด แดษด แดแดแดแดษดแดแด...*', buttons: buttons, headerType: 4 }
let msg = await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
conn.sendMessage(m.chat, { audio: { url: aud }, mimetype: 'audio/mp4', fileName: `${title}.mp3`}, {quoted: msg})
} catch {  
throw '*[โ๐๐๐๐โ] ๐ด๐๐๐พ๐, ๐ฟ๐พ๐ ๐ต๐ฐ๐๐พ๐ ๐๐๐ด๐ป๐๐ฐ ๐ฐ ๐ธ๐ฝ๐๐ด๐ฝ๐๐ฐ๐๐ป๐พ*'}}}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play2?$/i
export default handler*/
