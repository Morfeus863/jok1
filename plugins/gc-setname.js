import Presence from '@adiwajshing/baileys'
let handler  = async (m, { conn, args, text }) => {
if (!text) throw `*[βππππβ] πΈπ½πΆππ΄ππ΄ π΄π» π½πΎπΌπ±ππ΄ πππ΄ π³π΄ππ΄π° πππ΄ ππ΄π° π΄π» π½ππ΄ππΎ π½πΎπΌπ±ππ΄ π³π΄π» πΆπππΏπΎ*`
try {
let text = args.join` `
if(!args || !args[0]) {
} else {
conn.groupUpdateSubject(m.chat, text)}
} catch (e) {
throw '*[βππππβ] π»πΎ ππΈπ΄π½ππΎ π·ππ±πΎ ππ½ π΄πππΎπ, π΄π» π½πΎπΌπ±ππ΄ π½πΎ πΏππ΄π³π΄ ππ΄π πΌπ°π π³π΄ πΈπ» π²π°ππ°π²ππ΄ππ΄π*'
}}
handler.help = ['setname <text>']
handler.tags = ['group']
handler.command = /^(ΡΠΌΠ΅Π½ΠΈΡΡΠ½Π°Π·Π²Π°Π½ΠΈΠ΅)$/i
handler.group = true
handler.admin = true
export default handler
