import { generateWAMessageFromContent } from '@adiwajshing/baileys'
import os from 'os'
import util from 'util'
import sizeFormatter from 'human-readable'
import MessageType from '@adiwajshing/baileys'
import fs from 'fs'
import { performance } from 'perf_hooks'
let handler = async (m, { conn, usedPrefix }) => {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'))
const groups = chats.filter(([id]) => id.endsWith('@g.us'))
const used = process.memoryUsage()
const { restrict, antiCall, antiprivado, modejadibot } = global.db.data.settings[conn.user.jid] || {}
const { autoread, gconly, pconly, self } = global.opts || {}
let old = performance.now()
let neww = performance.now()
let speed = neww - old
let info = `
╠═〘 ИНФОРМАЦИЯ ОБО МНЕ 〙 ═
╠
╠➥ [🤴🏻] МОЙ СОЗДАТЕЛЬ: *꧁༺ZloiAdmiN༻꧂ *
╠➥ [#️⃣] НОМЕР СОЗДАТЕЛЯ: *wa.me/79524197466*
╠➥ [🎳] ПРЕФИКС: *${usedPrefix}*
╠➥ [🔐] ПРИВАТНЫХ ЧАТОВ: *${chats.length - groups.length}*
╠➥ [🦜] ГРУППОВЫХ ЧАТОВ: *${groups.length}* 
╠➥ [💡] ВСЕГО ЧАТОВ: *${chats.length}* 
╠➥ [🚀] ВРЕМЯ МОЕЙ АКТИВНОСТИ: *${uptime}*
╠➥ [🎩] ПОЛЬЗОВАТЕЛЕЙ: *${totalreg} 𝚗𝚞𝚖𝚎𝚛𝚘𝚜*
╠➥ [☑️] АВТОЧТЕНИЕ: ${autoread ? '*𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*' : '*𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*'}
╠➥ [❗] БОТАДМИН: ${restrict ? '*𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*' : '*𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*'} 
╠➥ [👨‍🦯] ПИНГ: 
╠  *${speed} ms* 
╠
╠═〘 🌎JoKeR🌏 〙 ═
`.trim() 
let aa = { quoted: m, userJid: conn.user.jid }
let res = generateWAMessageFromContent (m.chat, {liveLocationMessage: {degreesLatitude: 0, degreesLongitude: 0, caption: info, secuenceNumber: "0", contextInfo: {mentionedJid: conn.parseMention()}}}, aa)
conn.relayMessage(m.chat, res.message, {})
}
handler.help = ['infobot', 'speed']
handler.tags = ['info', 'tools']
handler.command = /^(ping|speed|infobot)$/i
export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}
