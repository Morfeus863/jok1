let handler = async (m, { conn, text, participants }) => {
let member = participants.map(u => u.id)
if(!text) {
var sum = member.length
} else {
var sum = text} 
var total = 0
var sider = []
for(let i = 0; i < sum; i++) {
let users = m.isGroup ? participants.find(u => u.id == member[i]) : {}
if((typeof global.db.data.users[member[i]] == 'undefined' || global.db.data.users[member[i]].chat == 0) && !users.isAdmin && !users.isSuperAdmin) { 
if (typeof global.db.data.users[member[i]] !== 'undefined'){
if(global.db.data.users[member[i]].whitelist == false){
total++
sider.push(member[i])}
}else {
total++
sider.push(member[i])}}}
if(total == 0) return conn.reply(m.chat, `*[❗] 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾 𝙴𝚂 𝙰𝙲𝚃𝙸𝚅𝙾, 𝙽𝙾 𝚃𝙸𝙴𝙽𝙴 𝙵𝙰𝙽𝚃𝙰𝚂𝙼𝙰𝚂 :D*`, m) 
m.reply(`*[ ⚠ ПРОВЕРКА МОЛЧУНОВ ⚠ ]*\n\n*ГРУППА:* ${await conn.getName(m.chat)}\n*УЧАСТНИКИ ГРУППЫ:* ${sum}\n\n*[ 👻 СПИСОК МОЛЧУНОВ 👻 ]*\n${sider.map(v => '  👉🏻 @' + v.replace(/@.+/, '')).join('\n')}\n\n*Примечание: Это может быть не на 100% правильно, бот начинает подсчет сообщений с того момента, как становится активным в этой группе*`, null, { mentions: sider })}
handler.command = /^(verfantasmas|молчуны|sider)$/i
handler.admin = true
handler.botAdmin = true
export default handler
