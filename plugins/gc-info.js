let handler = async (m, { conn, participants, groupMetadata }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/avatar_contact.png'
const { antiToxic, antiTraba, antiviewonce, isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, antiLink2, modohorny, autosticker, modoadmin, audios, delete: del } = global.db.data.chats[m.chat]
const groupAdmins = participants.filter(p => p.admin)
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let text = `*「 ИНФОРМАЦИЯ О ГРУППЕ 」*\n
*Идентификатор группы:* 
${groupMetadata.id}

*Название:* 
${groupMetadata.subject}

*Описание:* 
${groupMetadata.desc?.toString() || 'Без описания'}

*Всего участников:*
${participants.length} Participantes

*Создатель группы:* 
@${owner.split('@')[0]}

*Админы группы:*
${listAdmin}

*Автоматические опции:*
—◉ Приветствие: ${welcome ? '✅' : '❌'}
—◉ Обнаружение: ${detect ? '✅' : '❌'} 
—◉ Антиссылка: ${antiLink ? '✅' : '❌'} 
—◉ Антиссылка 𝟸: ${antiLink2 ? '✅' : '❌'} 
—◉ 18+: ${modohorny ? '✅' : '❌'} 
—◉ Автостикер: ${autosticker ? '✅' : '❌'} 
—◉ Голосовые бота: ${audios ? '✅' : '❌'} 
—◉ Антираз: ${antiviewonce ? '✅' : '❌'} 
—◉ Антимат: ${antiToxic ? '✅' : '❌'} 
—◉ Антивирус: ${antiTraba ? '✅' : '❌'} 
—◉ Только админы: ${modoadmin ? '✅' : '❌'} 
`.trim()
conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}
handler.help = ['infogrup']
handler.tags = ['group']
handler.command = /^(инфогруппы|gro?upinfo|info(gro?up|gc))$/i
handler.group = true
export default handler
