import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command, text }) => {
if (!text) throw `*[❗ИНФОРМАЦИЯ❗] НЕ ВЕРНО БЫЛА ДАНА КОМАНДА*\n\n*—◉ ПРИМЕР:*\n*${usedPrefix + command} Фактор2 Война*`
try {
const { video } = await youtubeSearch(text)
const listSections = []
let teks = [...video ].map(v => {
switch (v.type) {
case 'video': {
listSections.push([`${v.title}`, [
['Видео 🎥', `${usedPrefix}ytmp4 ${v.url}`, `загрузить: ${v.title} (${v.url})`],
['Видео 🎥', `${usedPrefix}ytmp4doc ${v.url}`, `загрузить: ${v.title} (${v.url})`],    
['Аудио 🎧', `${usedPrefix}ytmp3 ${v.url}`, `загрузить: ${v.title} (${v.url})`],
['Аудио 🎧', `${usedPrefix}ytmp3doc ${v.url}`, `загрузить: ${v.title} (${v.url})`]
]])
}}}).filter(v => v).join('\n\n========================\n\n')
conn.sendList(m.chat, ' 『 РЕЗУЛЬТАТЫ ПОИСКА 』', `Результаты по запросу: ${args.join(" ")}`, 'Выберите один из вариантов', '[♦ РЕЗУЛЬТАТЫ ♦]', listSections, m)
} catch {
try {     
let get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytsearch?apikey=${lolkeysapi}&query=${text}`)
let get_result2 = get_result.result 
const listSerch = []
const listSerch2 = []
const listSerch3 = []
const listSerch4 = []
let teskd = `Результаты по запросу: ${args.join(" ")}`
const sections = [{ title: `|－－－－－{ АУДИО }－－－－－|`, rows: listSerch }, { title: `|－－－－－{ ВИДЕО }－－－－－|`, rows: listSerch2 }, { title: `|－－{ ДОКУМЕНТ МП3 }－－|`, rows: listSerch3 }, { title: `|－－{ ДОКУМЕНТ МП4 }－－|`, rows: listSerch4 }]
for (let x of get_result2) {
listSerch.push({title: x.title, description: null, rowId: `${usedPrefix}ytmp3 https://www.youtube.com/watch?v=${x.videoId}`})
listSerch2.push({title: x.title, description: null, rowId: `${usedPrefix}ytmp4 https://www.youtube.com/watch?v=${x.videoId}`})
listSerch3.push({title: x.title, description: null, rowId: `${usedPrefix}ytmp3doc https://www.youtube.com/watch?v=${x.videoId}`})
listSerch4.push({title: x.title, description: null, rowId: `${usedPrefix}ytmp4doc https://www.youtube.com/watch?v=${x.videoId}`})}
const listMessage = { text: teskd, footer: 'Выберите один из результатов', title: " 『 РПЕЗУЛЬТАТЫ ПОИСКА 』", buttonText: "[♦ РЕЗУЛЬТАТЫ ♦]", sections }
conn.sendMessage(m.chat, listMessage, { quoted: m })    
} catch {    
await m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾 𝙲𝙾𝙽 𝙾𝚃𝚁𝙾 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴 𝚄𝙽𝙰 𝙲𝙰𝙽𝙲𝙸𝙾𝙽*')
}}}
handler.command = /^playlist|playlist2$/i
export default handler
async function fetchJson(url, options) {
try {
options ? options : {}
const res = await axios({ method: 'GET', url: url, headers: {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'}, ...options })
return res.data
} catch (err) {
return err
}}
