/* ⚠ POR FAVOR NO MODIFIQUES NADA DE AQUÍ ⚠ */

import { generateWAMessageFromContent } from '@adiwajshing/baileys'
import fs from 'fs'
let handler = async (m, { conn, usedPrefix, command }) => {
let name = await conn.getName(m.sender)
let donar =`
*┏ ┅ ━━━━━━━━━━━━━━━━━ ┅ ━*
*┇          「 ОПЛАТА 」*
*┣ ┅ ━━━━━━━━━━━━━━━━━ ┅ ━*
*┃ ПРИВЕТ ${name} 💙*
*┃*
*┃ 👉🏻 ЕСЛИ ТЫ СЮДА ЗАШЕЛ ЗНАЧИТ ХОЧЕШЬ ПОДКИНУТЬ МНЕ НА ШЕСТЕРЕНКИ :𝟹*
*┃ 👉🏻 МОЖЕШЬ СМЕЛО ПИСАТЬ СЮДА И ТЕБЕ ВСЕ РАССКАЖУТ <3*
*┃ wa.me/79524197466*
*┗ ┅ ━━━━━━━━━━━━━━━━━ ┅ ━*
`.trim()
let aa = { quoted: m, userJid: conn.user.jid }
let res = generateWAMessageFromContent (m.chat, {liveLocationMessage: {degreesLatitude: 0, degreesLongitude: 0, caption: donar, secuenceNumber: "0", contextInfo: {mentionedJid: conn.parseMention()}}}, aa)
conn.relayMessage(m.chat, res.message, {})
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^оплата|donar|apoyar$/i
export default handler
