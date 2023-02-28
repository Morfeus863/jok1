let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
const sections = [
{
title: `СПИСОК ФУНКЦИЙ`,
rows: [
{title: "✨ | ПРИВЕТСТВИЕ", description: "ВКЛЮЧЕНИЕ ПРИВЕТСТВИЯ В ГРУППЕ", rowId: `${usedPrefix + command} приветствие`},
{title: "🌎 | ДЛЯ ГРУППЫ", description: "БОТ СТАНОВИТСЯ ОБЩЕДОСТУПНЫМ И/ИЛИ ЧАСТНЫМ", rowId: `${usedPrefix + command} длягруппы`},
{title: "🥵 | 18+", description: "ВКЛЮЧЕНИЕ КОМАНД +18", rowId: `${usedPrefix + command} 18+`},
{title: "🔗 | АНТИССЫЛКА", description: "ВКЛЮЧЕНИЕ БАНА ЗА ССЫЛКИ НА ГРУППЫ ВАТСАП", rowId: `${usedPrefix + command} антиссылка`},   
{title: "🔗 | АНТИССЫЛКА 2", description: "ВКЛЮЧЕНИЕ БАНА ЗА ЛЮБЫЕ ИНТЕРНЕТ ССЫЛКИ", rowId: `${usedPrefix + command} антиссылка2`},    
{title: "🔎 | ОБНАРУЖЕНИЕ", description: "ВКЛЮЧЕНИЕ ОБНАРУЖЕНИЯ ЛЮБЫХ ИЗМЕНЕНИЙ В ГРУППЕ", rowId: `${usedPrefix + command} обнаружение`},      
{title: "❗ | БОТ АДМИН", description: "ВКЛЮЧЕНИЕ ФУНКЦИЙ АДМИНИСТРАТОРА У БОТА", rowId: `${usedPrefix + command} ботадмин`},    
{title: "☑️ | 𝙰𝚄𝚃𝙾𝚁𝙴𝙰𝙳", description: "𝙼𝙰𝚁𝙲𝙰 𝙰𝚄𝚃𝙾𝙼𝙰𝚃𝙸𝙲𝙰𝙼𝙴𝙽𝚃𝙴 𝙻𝙰𝚂 𝙲𝙾𝙽𝚅𝙴𝚁𝚂𝙰𝙲𝙸𝙾𝙽𝙴𝚂 𝙲𝙾𝙼𝙾 𝙻𝙴𝙸𝙳𝙾", rowId: `${usedPrefix + command} autoread`},
{title: "🔊 | ГОЛОСОВЫЕ", description: "ВКЛЮЧЕНИЕ ГОЛОСОВЫХ СООБЩЕНИЙ У БОТА", rowId: `${usedPrefix + command} голосовые`},
{title: "👾 | АВТОСТИКЕР", description: "ВКЛЮЧЕНИЕ ФУНКЦИИ АВТОМАТИЧЕСКОГО СОЗДАНИЯ СТИКЕРОВ ИЗ МЕДИАФАЙЛОВ", rowId: `${usedPrefix + command} автостикер`},
{title: "💬 | 𝙿𝙲𝙾𝙽𝙻𝚈", description: "𝙴𝙻 𝙱𝙾𝚃 𝚂𝙾𝙻𝙾 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴𝚁𝙰 𝙰 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚂𝙸 𝙴𝚂 𝚄𝙽 𝙲𝙷𝙰𝚃 𝙿𝚁𝙸𝚅𝙰𝙳𝙾", rowId: `${usedPrefix + command} pconly`},
{title: "🏢 | 𝙶𝙲𝙾𝙽𝙻𝚈", description: "𝙴𝙻 𝙱𝙾𝚃 𝚂𝙾𝙻𝙾 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴𝚁𝙰 𝙰 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚂𝙸 𝙴𝚂 𝚄𝙽 𝙶𝚁𝚄𝙿𝙾", rowId: `${usedPrefix + command} gconly`},
{title: "❌ | АНТИРАЗ", description: "ВКЛЮЧЕНИЕ ФУНКЦИИ АНТИ ОДНОРАЗОВОГО ПРОСМОТРА", rowId: `${usedPrefix + command} антираз`},
{title: "📵 | 𝙰𝙽𝚃𝙸𝙻𝙻𝙰𝙼𝙰𝙳𝙰", description: "𝙰𝙲𝚃𝙸𝚅𝙰 𝙾 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰 𝙴𝙻 𝙰𝙽𝚃𝙸 𝙻𝙻𝙰𝙼𝙰𝙳𝙰", rowId: `${usedPrefix + command} anticall`},
{title: "💬 | 𝙰𝙽𝚃𝙸𝙿𝚁𝙸𝚅𝙰𝙳𝙾", description: "𝙴𝙻 𝙱𝙾𝚃 𝙱𝙻𝙾𝚀𝚄𝙴𝙰𝚁𝙰 𝙰 𝙻𝙾𝚂 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂 𝚀𝚄𝙴 𝙻𝙴 𝙷𝙰𝙱𝙻𝙴𝙽 𝙰𝙻 𝙿𝚁𝙸𝚅𝙰𝙳𝙾", rowId: `${usedPrefix + command} antiprivado`},
{title: "🤬 | АНТИМАТ", description: "ФУНКЦИЯ УДАЛЕНИЯ ЗА МАТ ИЗ ГРУППЫ", rowId: `${usedPrefix + command} антимат`},
{title: "🕸️ | АНТИВИРУС", description: "ВКЛЮЧЕНИЕ ФУНКЦИИ НТИВИРУСА", rowId: `${usedPrefix + command} антивирус`},
{title: "👎🏻 | АНТИАРАБ", description: "БОТ БУДЕТ УДАЛЯТЬ ВСЕХ АРАБОВ КОТОРЫЕ БУДУТ ПИСАТЬ В ГРУППЕ", rowId: `${usedPrefix + command} антиараб`}, 
{title: "🤖 | 𝙼𝙾𝙳𝙴𝙹𝙰𝙳𝙸𝙱𝙾𝚃", description: "𝙰𝙲𝚃𝙸𝚅𝙰 𝙾 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙿𝙰𝚁𝙰 𝚂𝚄𝙱 𝙱𝙾𝚃𝚂 (#𝚂𝙴𝚁𝙱𝙾𝚃 / #𝙹𝙰𝙳𝙸𝙱𝙾𝚃)", rowId: `${usedPrefix + command} modejadibot`}, 
{title: "👑 | ТОЛЬКО АДМИНЫ", description: "БОТ БУДЕТ РЕАГИРОВАТЬ ТОЛЬКО НА СООБЩЕНИЯ АДМИНОВ В ГРУППЕ", rowId: `${usedPrefix + command} толькоадмины`}, 
{title: "😃 | 𝚂𝙸𝙼𝚂𝙸𝙼𝙸", description: "𝙰𝙲𝚃𝙸𝚅𝙰 𝙾 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰 𝚀𝚄𝙴 𝙴𝙻 𝙱𝙾𝚃 𝙷𝙰𝙱𝙻𝙴 𝙴𝙽 𝙴𝙻 𝙲𝙷𝙰𝚃 𝚄𝚂𝙰𝙽𝙳𝙾 𝙻𝙰 𝙸𝙰 𝙳𝙴 𝚂𝙸𝙼𝚂𝙸𝙼𝙸", rowId: `${usedPrefix + command} simsimi`},
]}, ]
//let name = await conn.getName(m.sender)
const listMessage = {
text: ' ',
footer: `┏━━━━━━━━━━━━━┓
┣ ඬ⃟ℹ️ _${usedPrefix}включить *приветствие*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *приветствие*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *длягруппы*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *длягруппы*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *18+*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *18+*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *антиссылка*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *антиссылка*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *антиссылка2*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *антиссылка2*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *обнаружение*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *обнаружение*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *ботадмин*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *ботадмин*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *pconly*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *pconly*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *gconly*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *gconly*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *autoread*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *autoread*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *голосовые*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *голосовые*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *антираз*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *антираз*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *автостикер*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *автостикер*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *anticall*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *anticall*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *antiprivado*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *antiprivado*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *антимат*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *антимат*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *антивирус*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *антивирус*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *антиараб*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *антиараб*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *modejadibot*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *modejadibot*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *толькоадмины*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *толькоадмины*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *simsimi*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *simsimi*_
┗━━━━━━━━━━━━━┛`,
title: null,
buttonText: "ВЫБЕРИТЕ ФУНКЦИЮ",
sections }

let isEnable = /включить|enable|(turn)?on|1/i.test(command)
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
let type = (args[0] || '').toLowerCase()
let isAll = false, isUser = false
switch (type) {
case 'приветствие':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!(isAdmin || isOwner || isROwner)) {
global.dfail('admin', m, conn)
throw false
}
chat.welcome = isEnable
break
case 'обнаружение':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.detect = isEnable
break
case 'simsimi':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.simi = isEnable
break    
case 'снести':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = isEnable
break
case 'антиудаление':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = !isEnable
break
case 'длягруппы':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['self'] = !isEnable
break
case 'антиссылка':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink = isEnable
break
case 'антиссылка2':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink2 = isEnable 
break
case 'антираз':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiviewonce = isEnable 
break
case '18+':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modohorny = isEnable          
break
case 'толькоадмины':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modoadmin = isEnable          
break    
case 'автостикер':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.autosticker = isEnable          
break
case 'голосовые':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.audios = isEnable          
break
case 'ботадмин':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.restrict = isEnable
break
case 'nyimak':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['nyimak'] = isEnable
break
case 'autoread':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.autoread2 = isEnable    
global.opts['autoread'] = isEnable  
break
case 'pconly':
case 'privateonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['pconly'] = isEnable
break
case 'gconly':
case 'grouponly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['gconly'] = isEnable
break
case 'swonly':
case 'statusonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['swonly'] = isEnable
break
case 'anticall':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiCall = isEnable
break
case 'antiprivado':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiPrivate = isEnable
break
case 'modejadibot':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.modejadibot = isEnable
break        
case 'антимат':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiToxic = isEnable
break
case 'антивирус':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTraba = isEnable
break
case 'антиараб':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiArab = isEnable  
break
default:
if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, listMessage)
throw false
}
conn.sendButton(m.chat, `🗂️ ФУНКЦИЯ: ${type} 
🎚️ Статус: ${isEnable ? 'ВКЛЮЧЕНА' : 'ВЫКЛЮЧЕНА'}
📣 КОНФИГУРАЦИЯ: ${isAll ? 'Для бота' : isUser ? '' : 'Для группы'}`, wm2, null, [[`${isEnable ? '✖️ ВЫКЛЮЧИТЬ ✖️' : '✔️ ВКЛЮЧИТЬ ✔️'}`, `${isEnable ? `#disable ${type}` : `#enable ${type}`}`]], m)}
handler.help = ['вкл', 'выкл'].map(v => v + 'ючить <option>')
handler.tags = ['group', 'owner']
handler.command = /^((en|dis)able|(вкл|выкл)ючить|(turn)?[01])$/i
export default handler
