let handler = async (m, { conn, text, command, usedPrefix }) => {
let pp = './src/warn.jpg'
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
let user = global.db.data.users[who]
let bot = global.db.data.settings[conn.user.jid] || {}
let warntext = `*[β] π΄ππΈπππ΄ππ΄ π° ππ½π° πΏπ΄πππΎπ½π° πΎ ππ΄ππΏπΎπ½π³π° π° ππ½ πΌπ΄π½ππ°πΉπ΄ π³π΄π» πΆπππΏπΎ*\n\n*ββ π΄πΉπ΄πΌπΏπ»πΎ:*\n*${usedPrefix + command} @${global.suittag}*`
if (!who) throw m.reply(warntext, m.chat, { mentions: conn.parseMention(warntext)}) 
if (m.mentionedJid.includes(conn.user.jid)) return
if (user.warn == 0) throw '*[β] π΄π» ππππ°ππΈπΎ ππΈπ΄π½π΄ 0 π°π³ππ΄πππ΄π½π²πΈπ°π*'  
user.warn -= 1
await conn.sendButton(m.chat,`${user.warn == 1 ? `*@${who.split`@`[0]}*` : `β»οΈ *@${who.split`@`[0]}*`} Π‘ Π²Π°Ρ ΡΠ½ΡΡΠΎ Π½Π°ΡΡΡΠ΅Π½ΠΈΠ΅ `, `*ΠΡΠ΅Π΄ΡΠΏΡΠ΅ΠΆΠ΄Π΅Π½ΠΈΠΉ:*\nβ οΈ *ΠΡΠ»ΠΎ: ${user.warn + 1}/3*\nβ οΈ *Π‘ΡΠ°Π»ΠΎ: ${user.warn}/3*\n\n${wm}`, pp, [['π Π‘Π‘ΠΠΠ‘ΠΠ ΠΠΠ Π£Π¨ΠΠ’ΠΠΠΠ π', '#listwarn']], m, { mentions: [who] })}
handler.command = /^(unwarn|delwarn|deladvertir|deladvertencia|delwarning)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler
