let handler = async (m, { conn, participants, usedPrefix, command }) => {
if (!global.db.data.settings[conn.user.jid].restrict) throw '*[ β οΈ ] π΄π» πΎππ½π΄π ππΈπ΄π½π΄ ππ΄ππππΈπ½πΆπΈπ³πΎ (ππππππ ππππππππ / πππππππ ππππππππ) π΄π» πππΎ π³π΄ π΄πππ΄ π²πΎπΌπ°π½π³πΎ*'
let kicktext = `*[β] π΄ππΈπππ΄ππ΄ π° ππ½π° πΏπ΄πππΎπ½π° πΎ ππ΄ππΏπΎπ½π³π° π° ππ½ πΌπ΄π½ππ°πΉπ΄ π³π΄π» πΆπππΏπΎ πΏπ°ππ° π΄π»πΈπΌπΈπ½π°π π°π» ππππ°ππΈπΎ*\n\n*ββ π΄πΉπ΄πΌπΏπ»πΎ:*\n*${usedPrefix + command} @${global.suittag}*`
if (!m.mentionedJid[0] && !m.quoted) return m.reply(kicktext, m.chat, { mentions: conn.parseMention(kicktext)}) 
if (m.mentionedJid.includes(conn.user.jid)) return  
let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
let owr = m.chat.split`-`[0]
await conn.groupParticipantsUpdate(m.chat, [user], 'remove')}
handler.command = /^(ΡΠ½Π΅ΡΡΠΈ2|echar2|hechar2|sacar2)$/i
handler.admin = true
handler.group = true
handler.botAdmin = true
export default handler
