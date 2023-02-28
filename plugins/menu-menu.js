import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './media/menu.mp3'
let pp = imagen4
let img = await(await fetch('https://www.paidmembershipspro.com/wp-content/uploads/2017/07/PayPal-Express.png')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `
╭═══〘 ✯✯✯✯✯✯✯✯✯ 〙══╮
║    ◉— *JoKeR* —◉
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
║➤ *Привет, ${taguser}*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
║➤ *Владелец:* ꧁༺ZloiAdmiN༻꧂ 
║➤ *Номер:* wa.me/79524197466
║➤ *Дата:* ${date}
║➤ *Время активности:* ${uptime}
║➤ *Пользователей:* ${rtotalreg}
╰═══╡✯✯✯✯✯✯✯✯✯╞═══╯

┏━━━━━━━━━━━━━━━━┓
┃ *< ИНФОРМАЦИЯ О ПОЛЬЗОВАТЕЛЕ />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ *🎖️ СТАТУС:* ${level}
┣ *🧰 ОПЫТ:* ${exp}
┣ *⚓ УРОВЕНЬ:* ${role}
┣ *💎 БРИЛЛИАНТЫ:* ${limit}
┣ *👾 JoKeRCoins:* ${money}
┣ *🪙 МОНЕТЫ:* ${joincount}
┣ *🎟️ ПРЕМИУМ:* ${user.premium = 'true' ? '❌' : '✅'}
┗━━━━━━━━━━━━━━━━┛
${readMore}
┏━━━━━━━━━━━━━━━━┓
┃ *< ОПИСАНИЕ БОТА />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ${(conn.user.jid == global.conn.user.jid ? '' : `Jadibot de: https://wa.me/${global.conn.user.jid.split`@`[0]}`) || '*Это официальный бот*'}
┗━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━┓
┃ *< ВКЛЮЧЕНИЕ ВЫКЛЮЧЕНИЕ ФУНКЦИЙ />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ ☑️ _${usedPrefix}включить *приветствие*_
┣ ඬ⃟ ☑️ _${usedPrefix}выключить *приветствие*_
┣ ඬ⃟ ☑️ _${usedPrefix}включить *18+*_
┣ ඬ⃟ ☑️ _${usedPrefix}выключить *18+*_
┣ ඬ⃟ ☑️ _${usedPrefix}включить *антиссылка*_
┣ ඬ⃟ ☑️ _${usedPrefix}выключить *антиссылка*_
┣ ඬ⃟ ☑️ _${usedPrefix}включить *антиссылка2*_
┣ ඬ⃟ ☑️ _${usedPrefix}выключить *антиссылка2*_
┣ ඬ⃟ ☑️ _${usedPrefix}включить *обнаружение*_
┣ ඬ⃟ ☑️ _${usedPrefix}выключить *обнаружение*_
┣ ඬ⃟ ☑️ _${usedPrefix}включить *голосовые*_
┣ ඬ⃟ ☑️ _${usedPrefix}выключить *голосовые*_
┣ ඬ⃟ ☑️ _${usedPrefix}включить *автостикер*_
┣ ඬ⃟ ☑️ _${usedPrefix}выключить *автостикер*_
┣ ඬ⃟ ☑️ _${usedPrefix}включить *антираз*_
┣ ඬ⃟ ☑️ _${usedPrefix}выключить *антираз*_
┣ ඬ⃟ ☑️ _${usedPrefix}включить *антимат*_
┣ ඬ⃟ ☑️ _${usedPrefix}выключить *антимат*_
┣ ඬ⃟ ☑️ _${usedPrefix}включить *антивирус*_
┣ ඬ⃟ ☑️ _${usedPrefix}выключить *антивирус*_
┣ ඬ⃟ ☑️ _${usedPrefix}включить *антиараб*_
┣ ඬ⃟ ☑️ _${usedPrefix}выключить *антиараб*_
┣ ඬ⃟ ☑️ _${usedPrefix}включить *толькоадмины*_
┣ ඬ⃟ ☑️ _${usedPrefix}выключить *толькоадмины*_
┗━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━┓
┃ *< ЗАГРУЗКИ />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃

┣ ඬ⃟ 📥 _${usedPrefix}тикток *<ссылка на видео>*_
┣ ඬ⃟ 📥 _${usedPrefix}песня *<исполнитель название песни или клипа>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< РАЗДЕЛ ДЛЯ АДМИНОВ ГРУППЫ />* 
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 💎 _${usedPrefix}добавить *<номер без +>*_
┣ ඬ⃟ 💎 _${usedPrefix}снести *<@номер>*_
┣ ඬ⃟ 💎 _${usedPrefix}снести2 *<@номер>*_
┣ ඬ⃟ 💎 _${usedPrefix}группу *<открыть / закрыть>*_
┣ ඬ⃟ 💎 _${usedPrefix}датьадмина *<@номер>*_
┣ ඬ⃟ 💎 _${usedPrefix}снятьадмина *<@номер>*_
┣ ඬ⃟ 💎 _${usedPrefix}датьадмина *<ваше сообщение>*_
┣ ඬ⃟ 💎 _админы *текст вашего обращения к админам>*_ 
┣ ඬ⃟ 💎 _${usedPrefix}инфогруппы
┣ ඬ⃟ 💎 _${usedPrefix}сброссылки_
┣ ඬ⃟ 💎 _${usedPrefix}ссылка_
┣ ඬ⃟ 💎 _${usedPrefix}сменитьназвание *<новое название группы>*_
┣ ඬ⃟ 💎 _${usedPrefix}сменитьописание *<новое описание группы>*_
┣ ඬ⃟ 💎 _${usedPrefix}предупреждение *<@номер>*_
┣ ඬ⃟ 💎 _${usedPrefix}снятьнарушение *<@номер>*_
┣ ඬ⃟ 💎 _${usedPrefix}молчуны
┣ ඬ⃟ 💎 _${usedPrefix}важно
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< ℂ𝕆ℕ𝕍𝔼ℝ𝕋𝕀𝔻𝕆ℝ𝔼𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🧧 _${usedPrefix}toanime *<imagen>*_
┣ ඬ⃟ 🧧 _${usedPrefix}togifaud *<video>*_
┣ ඬ⃟ 🧧 _${usedPrefix}toimg *<sticker>*_
┣ ඬ⃟ 🧧 _${usedPrefix}tomp3 *<video>*_
┣ ඬ⃟ 🧧 _${usedPrefix}tomp3 *<nota de voz>*_
┣ ඬ⃟ 🧧 _${usedPrefix}toptt *<video / audio>*_
┣ ඬ⃟ 🧧 _${usedPrefix}tovideo *<sticker>*_
┣ ඬ⃟ 🧧 _${usedPrefix}tourl *<video / imagen / audio>*_
┣ ඬ⃟ 🧧 _${usedPrefix}tts es *<texto>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝔼𝔽𝔼ℂ𝕋𝕆𝕊 𝕐 𝕃𝕆𝔾𝕆𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🖍️ _${usedPrefix}phmaker *<opcion> <imagen>*_
┣ ඬ⃟ 🖍️ _${usedPrefix}logos *<efecto> <texto>*_
┣ ඬ⃟ 🖍️ _${usedPrefix}logochristmas *<texto>*_
┣ ඬ⃟ 🖍️ _${usedPrefix}logocorazon *<texto>*_
┣ ඬ⃟ 🖍️ _${usedPrefix}ytcomment *<texto>*_
┣ ඬ⃟ 🖍️ _${usedPrefix}hornycard *<@tag>*_
┣ ඬ⃟ 🖍️ _${usedPrefix}simpcard *<@tag>*_
┣ ඬ⃟ 🖍️ _${usedPrefix}lolice *<@tag>*_
┣ ඬ⃟ 🖍️ _${usedPrefix}itssostupid_
┣ ඬ⃟ 🖍️ _${usedPrefix}pixelar_
┣ ඬ⃟ 🖍️ _${usedPrefix}blur_
┗━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━┓
┃ *< ℂ𝕆𝕄𝔸ℕ𝔻𝕆𝕊 +𝟙𝟠 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🔞 _${usedPrefix}pack_
┣ ඬ⃟ 🔞 _${usedPrefix}pack2_
┣ ඬ⃟ 🔞 _${usedPrefix}pack3_
┣ ඬ⃟ 🔞 _${usedPrefix}videoxxx_
┣ ඬ⃟ 🔞 _${usedPrefix}videolesbixxx_
┣ ඬ⃟ 🔞 _${usedPrefix}tetas_
┣ ඬ⃟ 🔞 _${usedPrefix}booty_
┣ ඬ⃟ 🔞 _${usedPrefix}ecchi_
┣ ඬ⃟ 🔞 _${usedPrefix}furro_
┣ ඬ⃟ 🔞 _${usedPrefix}imagenlesbians_
┣ ඬ⃟ 🔞 _${usedPrefix}panties_
┣ ඬ⃟ 🔞 _${usedPrefix}pene_
┣ ඬ⃟ 🔞 _${usedPrefix}porno_
┣ ඬ⃟ 🔞 _${usedPrefix}randomxxx_
┣ ඬ⃟ 🔞 _${usedPrefix}pechos_
┣ ඬ⃟ 🔞 _${usedPrefix}yaoi_
┣ ඬ⃟ 🔞 _${usedPrefix}yaoi2_
┣ ඬ⃟ 🔞 _${usedPrefix}yuri_
┣ ඬ⃟ 🔞 _${usedPrefix}yuri2_
┣ ඬ⃟ 🔞 _${usedPrefix}trapito_
┣ ඬ⃟ 🔞 _${usedPrefix}hentai_
┣ ඬ⃟ 🔞 _${usedPrefix}nsfwloli_
┣ ඬ⃟ 🔞 _${usedPrefix}nsfworgy_
┣ ඬ⃟ 🔞 _${usedPrefix}nsfwfoot_
┣ ඬ⃟ 🔞 _${usedPrefix}nsfwass_
┣ ඬ⃟ 🔞 _${usedPrefix}nsfwbdsm_
┣ ඬ⃟ 🔞 _${usedPrefix}nsfwcum_
┣ ඬ⃟ 🔞 _${usedPrefix}nsfwero_
┣ ඬ⃟ 🔞 _${usedPrefix}nsfwfemdom_
┣ ඬ⃟ 🔞 _${usedPrefix}nsfwglass_
┣ ඬ⃟ 🔞 _${usedPrefix}hentaipdf *<texto>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝔼𝔽𝔼ℂ𝕋𝕆𝕊 𝔻𝔼 𝔸𝕌𝔻𝕀𝕆𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┃*- 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝙰𝚄𝙳𝙸𝙾 𝙾 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉*
┣ ඬ⃟ 🎤 _${usedPrefix}bass_
┣ ඬ⃟ 🎤 _${usedPrefix}blown_
┣ ඬ⃟ 🎤 _${usedPrefix}deep_
┣ ඬ⃟ 🎤 _${usedPrefix}earrape_
┣ ඬ⃟ 🎤 _${usedPrefix}fast_
┣ ඬ⃟ 🎤 _${usedPrefix}fat_
┣ ඬ⃟ 🎤 _${usedPrefix}nightcore_
┣ ඬ⃟ 🎤 _${usedPrefix}reverse_
┣ ඬ⃟ 🎤 _${usedPrefix}robot_
┣ ඬ⃟ 🎤 _${usedPrefix}slow_
┣ ඬ⃟ 🎤 _${usedPrefix}smooth_
┣ ඬ⃟ 🎤 _${usedPrefix}tupai_
┗━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━┓
┃ *< 𝔹𝕌𝕊ℂ𝔸𝔻𝕆ℝ𝔼𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🔍 _${usedPrefix}modapk *<texto>*_
┣ ඬ⃟ 🔍 _${usedPrefix}stickersearch *<texto>*_
┣ ඬ⃟ 🔍 _${usedPrefix}stickersearch2 *<texto>*_
┣ ඬ⃟ 🔍 _${usedPrefix}xnxxsearch *<texto>*_
┣ ඬ⃟ 🔍 _${usedPrefix}animeinfo *<texto>*_
┣ ඬ⃟ 🔍 _${usedPrefix}google *<texto>*_
┣ ඬ⃟ 🔍 _${usedPrefix}letra *<texto>*_
┣ ඬ⃟ 🔍 _${usedPrefix}wikipedia *<texto>*_
┣ ඬ⃟ 🔍 _${usedPrefix}ytsearch *<texto>*_
┣ ඬ⃟ 🔍 _${usedPrefix}playstore *<texto>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝔸𝕌𝔻𝕀𝕆𝕊 />*   
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┃ *- 𝙴𝚂𝙲𝚁𝙸𝙱𝙴 𝙻𝙰𝚂 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴𝚂 𝙿𝙰𝙻𝙰𝙱𝚁𝙰𝚂 𝙾 𝙵𝚁𝙰𝚂𝙴𝚂 𝚂𝙸𝙽 𝙽𝙸𝙽𝙶𝚄𝙽 𝙿𝚁𝙴𝙵𝙸𝙹𝙾 (#, /, *, .)* 
┃ _- (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)_
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🔊 _Quien es tu sempai botsito 7w7_
┣ ඬ⃟ 🔊 _Te diagnostico con gay_
┣ ඬ⃟ 🔊 _A nadie le importa_
┣ ඬ⃟ 🔊 _Fiesta del admin_
┣ ඬ⃟ 🔊 _Fiesta del administrador_ 
┣ ඬ⃟ 🔊 _Vivan los novios_
┣ ඬ⃟ 🔊 _Feliz cumpleaños_
┣ ඬ⃟ 🔊 _Noche de paz_
┣ ඬ⃟ 🔊 _Buenos dias_
┣ ඬ⃟ 🔊 _Buenos tardes_
┣ ඬ⃟ 🔊 _Buenos noches_
┣ ඬ⃟ 🔊 _Audio hentai_
┣ ඬ⃟ 🔊 _Chica lgante_
┣ ඬ⃟ 🔊 _Feliz navidad_
┣ ඬ⃟ 🔊 _Vete a la vrg_
┣ ඬ⃟ 🔊 _Pasa pack Bot_
┣ ඬ⃟ 🔊 _Atencion grupo_
┣ ඬ⃟ 🔊 _Marica quien_
┣ ඬ⃟ 🔊 _Murio el grupo_
┣ ඬ⃟ 🔊 _Oh me vengo_
┣ ඬ⃟ 🔊 _tio que rico_
┣ ඬ⃟ 🔊 _Viernes_
┣ ඬ⃟ 🔊 _Baneado_
┣ ඬ⃟ 🔊 _Sexo_
┣ ඬ⃟ 🔊 _Hola_
┣ ඬ⃟ 🔊 _Un pato_
┣ ඬ⃟ 🔊 _Nyanpasu_
┣ ඬ⃟ 🔊 _Te amo_
┣ ඬ⃟ 🔊 _Yamete_
┣ ඬ⃟ 🔊 _Bañate_
┣ ඬ⃟ 🔊 _Es puto_
┣ ඬ⃟ 🔊 _La biblia_
┣ ඬ⃟ 🔊 _Onichan_
┣ ඬ⃟ 🔊 _Mierda de Bot_
┣ ඬ⃟ 🔊 _Siuuu_
┣ ඬ⃟ 🔊 _Epico_
┣ ඬ⃟ 🔊 _Shitpost_
┣ ඬ⃟ 🔊 _Rawr_
┣ ඬ⃟ 🔊 _UwU_
┣ ඬ⃟ 🔊 _:c_
┣ ඬ⃟ 🔊 _a_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝕊𝕋𝕀ℂ𝕂𝔼ℝ𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 👽 _${usedPrefix}стикер *<responder a imagen o video>*_
┣ ඬ⃟ 👽 _${usedPrefix}стикер2 *<responder a imagen o video>*_
┣ ඬ⃟ 👽 _${usedPrefix}с *<responder a imagen o video>*_
┣ ඬ⃟ 👽 _${usedPrefix}с2 *<responder a imagen o video>*_
┣ ඬ⃟ 👽 _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
┣ ඬ⃟ 👽 _${usedPrefix}scircle *<imagen>*_
┣ ඬ⃟ 👽 _${usedPrefix}sremovebg *<imagen>*_
┣ ඬ⃟ 👽 _${usedPrefix}semoji *<tipo> <emoji>*_
┣ ඬ⃟ 👽 _${usedPrefix}attp *<texto>*_
┣ ඬ⃟ 👽 _${usedPrefix}attp3 *<texto>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝕆𝕎ℕ𝔼ℝ 𝕐 𝕄𝕆𝔻𝔼ℝ𝔸𝔻𝕆ℝ𝔼𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 👑 > *<funcion>*
┣ ඬ⃟ 👑 => *<funcion>*
┣ ඬ⃟ 👑 $ *<funcion>*
┣ ඬ⃟ 👑 _${usedPrefix}setprefix *<prefijo>*_
┣ ඬ⃟ 👑 _${usedPrefix}desactivarwa *<numero>*_
┣ ඬ⃟ 👑 _${usedPrefix}resetprefix_
┣ ඬ⃟ 👑 _${usedPrefix}autoadmin_
┣ ඬ⃟ 👑 _${usedPrefix}leavegc_
┣ ඬ⃟ 👑 _${usedPrefix}cajafuerte_
┣ ඬ⃟ 👑 _${usedPrefix}blocklist_
┣ ඬ⃟ 👑 _${usedPrefix}block *<@tag / numero>*_
┣ ඬ⃟ 👑 _${usedPrefix}unblock *<@tag / numero>*_
┣ ඬ⃟ 👑 _${usedPrefix}enable *restrict*_
┣ ඬ⃟ 👑 _${usedPrefix}disable *restrict*_
┣ ඬ⃟ 👑 _${usedPrefix}enable *autoread*_
┣ ඬ⃟ 👑 _${usedPrefix}disable *autoread*_
┣ ඬ⃟ 👑 _${usedPrefix}enable *public*_
┣ ඬ⃟ 👑 _${usedPrefix}disable *public*_
┣ ඬ⃟ 👑 _${usedPrefix}enable *pconly*_
┣ ඬ⃟ 👑 _${usedPrefix}disable *pconly*_
┣ ඬ⃟ 👑 _${usedPrefix}enable *gconly*_
┣ ඬ⃟ 👑 _${usedPrefix}disable *gconly*_
┣ ඬ⃟ 👑 _${usedPrefix}enable *anticall*_
┣ ඬ⃟ 👑 _${usedPrefix}disable *anticall*_
┣ ඬ⃟ 👑 _${usedPrefix}enable *antiprivado*_
┣ ඬ⃟ 👑 _${usedPrefix}disable *antiprivado*_
┣ ඬ⃟ 👑 _${usedPrefix}enable *modejadibot*_
┣ ඬ⃟ 👑 _${usedPrefix}disable *modejadibot*_
┣ ඬ⃟ 👑 _${usedPrefix}msg *<texto>*_
┣ ඬ⃟ 👑 _${usedPrefix}banchat_
┣ ඬ⃟ 👑 _${usedPrefix}unbanchat_
┣ ඬ⃟ 👑 _${usedPrefix}banuser *<@tag>*_
┣ ඬ⃟ 👑 _${usedPrefix}unbanuser *<@tag>*_
┣ ඬ⃟ 👑 _${usedPrefix}dardiamantes *<@tag>*_
┣ ඬ⃟ 👑 _${usedPrefix}añadirxp *<@tag>*_
┣ ඬ⃟ 👑 _${usedPrefix}banuser *<@tag>*_
┣ ඬ⃟ 👑 _${usedPrefix}bc *<texto>*_
┣ ඬ⃟ 👑 _${usedPrefix}bcchats *<texto>*_
┣ ඬ⃟ 👑 _${usedPrefix}bcgc *<texto>*_
┣ ඬ⃟ 👑 _${usedPrefix}bcgc2 *<audio>*_
┣ ඬ⃟ 👑 _${usedPrefix}bcgc2 *<video>*_
┣ ඬ⃟ 👑 _${usedPrefix}bcgc2 *<imagen>*_
┣ ඬ⃟ 👑 _${usedPrefix}bcbot *<texto>*_
┣ ඬ⃟ 👑 _${usedPrefix}cleartpm_
┣ ඬ⃟ 👑 _${usedPrefix}restart_
┣ ඬ⃟ 👑 _${usedPrefix}update_
┣ ඬ⃟ 👑 _${usedPrefix}banlist_
┣ ඬ⃟ 👑 _${usedPrefix}addprem *<@tag>*_
┣ ඬ⃟ 👑 _${usedPrefix}delprem *<@tag>*_
┣ ඬ⃟ 👑 _${usedPrefix}listprem_
┣ ඬ⃟ 👑 _${usedPrefix}listcmd_
┣ ඬ⃟ 👑 _${usedPrefix}setppbot *<responder a imagen>*_
┣ ඬ⃟ 👑 _${usedPrefix}addcmd *<texto> <responder a sticker/imagen>*_
┣ ඬ⃟ 👑 _${usedPrefix}delcmd *<responder a sticker/imagen con comando o texto asignado>*_
┗━━━━━━━━━━━━━━━━┛

`.trim()
let buttons = [
{ buttonId: '#donar', buttonText: { displayText: '📮 ОПЛАТА 📮' }, type: 1 },
//{ buttonId: '#terminosycondiciones', buttonText: { displayText: '📋 𝚃𝙴𝚁𝙼𝙸𝙽𝙾𝚂 𝚈 𝙲𝙾𝙽𝙳𝙸𝙲𝙸𝙾𝙽𝙴𝚂 📋' }, type: 1 }]
{ buttonId: '#infobot', buttonText: { displayText: '🐾 ИНФОРМАЦИЯ 🐾' }, type: 1 }]
let buttonMessage = {
image: pp,
caption: str.trim(),
mentions: [m.sender],
footer: `*${wm}*`,
buttons: buttons,
headerType: 4,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
mediaType: 'VIDEO',
mediaUrl: null,
title: '👑 JoKeR 👑',
body: null,
thumbnail: img,
sourceUrl: `https://chat.whatsapp.com/FQ4gui0wUTO94zgP2YUbsH`
}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
}}
handler.command = /^(menu|меню|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
