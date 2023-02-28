const toxicRegex = /хуй|пизда|пиздец|пиздато|хуево|заебись|бля|блядь|сука|пидар|пиздобол|пидарас|пидарюга|заебал|выебал/i

export async function before(m, { isAdmin, isBotAdmin, isOwner }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup)
        return !1
    let user = global.db.data.users[m.sender]
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    const isToxic = toxicRegex.exec(m.text)
    
    if (isToxic && chat.antiToxic && !isOwner && !isAdmin) {
       user.warn += 1
       if (!(user.warn >= 5)) await m.reply(`${user.warn == 1 ? `Привет *@${m.sender.split`@`[0]}*` : `*@${m.sender.split`@`[0]}*`}, подобные слова (${isToxic}) запрещенны в мой адрес,если не перестанешь,я тебя выкину из группы *${user.warn}/3* предупреждений`, false, { mentions: [m.sender] })
    }
    
    if (user.warn >= 4) {
       user.warn = 0
       await m.reply(`Привет *@${m.sender.split`@`[0]}*, вы превысили 3 предупреждения, вы будете заблокированы и удалены из этой группы`, false, { mentions: [m.sender] })
       user.banned = true
       await this.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
       //await this.updateBlockStatus(m.sender, 'block')
    }
    return !1
}
