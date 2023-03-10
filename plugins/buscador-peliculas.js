/* Creado/adaptado por Bruno Sobrino (https://github.com/BrunoSobrino) */

import fetch from 'node-fetch'
import axios from 'axios'
import { load } from 'cheerio'
let handler = async (m, {text, usedPrefix, command, conn}) => {
if (!text) throw '*[β] πΈπ½πΆππ΄ππ° π΄π» π½πΎπΌπ±ππ΄ π³π΄ π°π»πΆππ½π° πΏπ΄π»πΈπ²ππ»π° π° π±πππ²π°π*'   
let aaaa = await searchC(text)
if (command == 'pelisplus') aaaa = await searchP(text)
if (aaaa == '') throw '*[β] π½πΎ ππ΄ π΄π½π²πΎπ½πππΎ π½πΈπ½πΆππ½π° πΏπ΄π»πΈπ²ππ»π°*' 
let img = 'https://cinefilosoficial.com/wp-content/uploads/2021/07/cuevana.jpg'
if (command == 'pelisplus') img = 'https://elcomercio.pe/resizer/RJM30xnujgfmaODGytH1rRVOrAA=/400x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/BJ2L67XNRRGHTFPKPDOEQ2AH5Y.jpg'
let res = await aaaa.map((v) => `*π¬ β’ Nombre:* ${v.title}\n*πΏ β’ Url:* ${v.link}`).join`\n\nβββββββββββββββ\n\n`
let ads = '*π« β’ Bloqueador de anuncios recomendado:* Block This\n*β¨ β’ Link:* https://block-this.com/block-this-latest.apk\n\nβ£β£β£β£β£β£β£β£β£β£β£β£β£β£β£β£β£β£β£β£β£β£β£β£β£β£β£β£β£β£β£β£\n\n'
conn.sendMessage(m.chat, { image: { url: img }, caption: ads + res }, {quoted: m})
}
handler.command = ['cuevana', 'pelisplus']
export default handler

const safeLoad = async(url, options = {}) => {
try {
const { data: pageData } = await axios.get(url, options)
const $ = load(pageData) 
return $
} catch (err) {
if (err.response)
throw new Error(err.response.statusText)
throw err }}

async function searchC(query, numberPage = 1) {
const $ = await safeLoad(`https://cuevana3.info/page/${numberPage}/`, {
params: { s: query }})
const resultSearch = []
$(".results-post > article").each((_, e) => {
const element = $(e)
const title = element.find("header > h2").text()
const link = element.find(".lnk-blk").attr("href")
resultSearch.push({ title: title, link: link })})
return resultSearch }

async function searchP(query, numberPage = 1) { 
const $ = await safeLoad(`https://pelisplushd.cx/search/`, {
params: { s: query, page: numberPage }})
const resultSearch = []
$("a[class^='Posters']").each((_, e) => {
const element = $(e)
const title = element.find(".listing-content > p").text()
const link = element.attr("href")
resultSearch.push({ title: title,  link: link })})
return resultSearch }
