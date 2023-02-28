let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*Cообщение:* ${pesan}`
let teks = `*⺀ВНИМАНИЕ ГРУППА⺀*\n\n❏ ${oi}\n\n❏ *УЧАСТНИКИ:*\n`
for (let mem of participants) {
teks += `┣➥ @${mem.id.split('@')[0]}\n`}
teks += `*└* JoKeR\n\n*▌│█║▌║▌║║▌║▌║▌║█*`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|внимание|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler
