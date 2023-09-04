import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['6285156402391', 'Denny', true],
]
global.mods = []
global.prems = []
// Info
global.nomorwa = '6285156402391'
global.packname = '2malam - MD by'
global.author = '©dny'
global.namebot = '​2malam'
global.wm = '© Denny'
global.stickpack = 'Denny'
global.stickauth = '© 2malam'
global.fotonya = 'https://telegra.ph/file/0e8e264ea5a23f0d20415.jpg'
// Link Sosmed
global.sig = 'https://www.instagram.com'
global.sgh = 'https://github.com'
global.sgc = 'https://chat.whatsapp.com/H'
// Donasi
// Info Wait
global.wait = '_Sedang Di Proses, Mohon Tunggu_....'
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
global.multiplier = 69 
// Apikey
global.rose = 'apikey' //api.itsrose.life
global.xyro = 'eIYEZjlJly'// api.xyroinee.xyz
// Catatan : Jika Mau Work Fiturnya
// Masukan Apikeymu
// Gapunya Apikey? Ya Daftar
// Daftar Ke Website Tersebut Untuk
// Mendapatkan Apikey Kamu
global.APIs = {
    xyro: "https://api.xyroinee.xyz",
    popcat : 'https://api.popcat.xyz'
}

/*Apikey*/
global.APIKeys = {
    "https://api.xyroinee.xyz": "eIYEZjlJly",
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
