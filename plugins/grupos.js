let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*Hola 👋🏻, aquí encontrarás el Instagram oficial de mi owner owo*

*_➤ Instagram:_*
*_1.-_* *https://www.instagram.com/idk_jhuz/*
`.trim() 

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*🔥 Jhusz X-X 🔥*', 'status@broadcast')
}
handler.command = /^(grupos|gruposofc|gruposofc)$/i

module.exports = handler
