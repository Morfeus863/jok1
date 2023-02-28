/* Creditos a FG de Dylux-fg (Bot) */

import fg from 'api-dylux' 
import { generateWAMessageFromContent } from '@adiwajshing/baileys'
import { tiktokdl, tiktokdlv2, tiktokdlv3 } from '@bochilteam/scraper'
let handler = async (m, { conn, text, args, usedPrefix, command}) => {
if (!text) throw `*[❗ИНФОРМАЦИЯ❗] НЕ ПРАВИЛЬНО ДАНА КОМАНДА ДЛЯ ЗАГРУЗКИ ВИДЕО ИЗ ТИКТОК*\n\n*—◉ ПРИМЕР:*\n*${usedPrefix + command}* https://vm.tiktok.com/ZMFb4BXVd/`
if (!/(?:https:?\/{2})?(?:w{3}|vm|vt|t)?\.?tiktok.com\/([^\s&]+)/gi.test(text)) throw `*[❗ИНФОРМАЦИЯ❗] НЕ ПРАВИЛЬНО ДАНА КОМАНДА ДЛЯ ЗАГРУЗКИ ВИДЕО ИЗ ТИКТОК*\n\n*—◉ ПРИМЕР:*\n*${usedPrefix + command}* https://vm.tiktok.com/ZMFb4BXVd/`
let texto = `*[❗] @${m.sender.split`@`[0]} Одну минутку и ваше видео будет загружено!)*`
try {
let aa = { quoted: m, userJid: conn.user.jid }
let prep = generateWAMessageFromContent(m.chat, { extendedTextMessage: { text: texto, contextInfo: { externalAdReply: { title: 'JoKeR', body: null, thumbnail: imagen1, sourceUrl: 'https://chat.whatsapp.com/FQ4gui0wUTO94zgP2YUbsH' }, mentionedJid: [m.sender]}}}, aa)    
conn.relayMessage(m.chat, prep.message, { messageId: prep.key.id, mentions: [m.sender] })
let p = await fg.tiktok(args[0]) 
let buttons = [{ buttonText: { displayText: '♫ ТРЭК ♫' }, buttonId: `${usedPrefix}tomp3` }]
let te = `*ИМЯ ПОЛЬЗОВАТЕЛЯ:* ${p.author || 'Indefinido'}`
await conn.sendMessage(m.chat, { video: { url: p.nowm}, caption: te, footer: wm, buttons }, { quoted: m })  
} catch {  	
try { 
let aa2 = { quoted: m, userJid: conn.user.jid }
let prep = generateWAMessageFromContent(m.chat, { extendedTextMessage: { text: texto, contextInfo: { externalAdReply: { title: 'JoKeR', body: null, thumbnail: imagen1, sourceUrl: 'https://chat.whatsapp.com/FQ4gui0wUTO94zgP2YUbsH' }, mentionedJid: [m.sender]}}}, aa2)    
conn.relayMessage(m.chat, prep.message, { messageId: prep.key.id, mentions: [m.sender] })
const { author: { nickname }, video, description } = await tiktokdl(args[0]).catch(async _ => await tiktokdlv2(args[0])).catch(async _ => await tiktokdlv3(args[0]))
const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd
let buttons = [{ buttonText: { displayText: '♫ ТРЭК ♫' }, buttonId: `${usedPrefix}tomp3` }]
let cap = `*НИК РОЛЬЗОВАТЕЛЯ:* ${nickname || 'Indefinido'}`
await conn.sendMessage(m.chat, { video: { url: url}, caption: cap, footer: wm, buttons }, { quoted: m })  
} catch {
throw `*[❗ИНФОРМАЦИЯ❗] ОШИБКА ЗАГРУЗКИ ВИДЕО)пОПРОБУЙ ДРУГОЕ И У ТЕБЯ ВСЕ ПОЛУЧИТСЯ)Я В ТЕБЯ ВЕРЮ)))*`
}}}  
handler.command = /^(тикток|ttdl|tiktokdl|tiktoknowm|tt|ttnowm|tiktokaudio)$/i
export default handler
