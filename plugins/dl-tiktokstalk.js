import Tiktok from '@tobyg74/tiktok-api-dl'
let handler = async (m, { conn, text, args }) => {
	
  if (!text) throw `✳️ Masukkan Nama Pengguna pengguna TikTok`




const username = "tobz2k19"
Tiktok.StalkUser(text, {
  cookie: process.env.COOKIE || "ak_bmsc=CAD5CE2960711C7C67E0CAF0EF3238E7~000000000000000000000000000000~YAAQFA81F+ehX5mPAQAA38Iyoxd8M0Ne8qBuiWt3aW+S/8Jdx5WJAoNMNIFVeglFSz9LVjUmW+gcvB+Ywvbj17CgV+/72ebyo0npa5FLleRUCvmkahY8S9lL94tdQfIfiaMmV6+QZYZUgOb1+wPn/+LfrVgTuJLXOJcc/2GR8+PxUSR9BxS0ibYOf7WZDOM3Rz+sU2fVoYmfbRaMMC3ATv/yTzg3aq8e2N0fip9zJ9UW0b8VnfNW2ciu7b94koiUXsujSFKInfy8C33A6vdOVSs3K5nJe9c4w0h8l4siMEp7lA0lG5u2h/OyVcXwTd6x4ATX/XruCW8Sstj7lMvXjw5zlz5K0Cjgq8K8GWaihuVQnVX2P3bubg3/WYbq0CeRXiDJ2bqSFfgAogk=; cmpl_token=AgQQAPOgF-RO0rZwSjg0Od0__CppKgwaP4UrYNcaSw; multi_sids=7372010646013674502%3Ac96a1f896fbf9373fdfaad9db217da92; passport_auth_status=60b8f76e47d1cf87756a6496f3a46237%2C; passport_auth_status_ss=60b8f76e47d1cf87756a6496f3a46237%2C; passport_csrf_token=2e958fe1249fb4e9d8f5c18f7264e93f; passport_csrf_token_default=2e958fe1249fb4e9d8f5c18f7264e93f; sessionid=c96a1f896fbf9373fdfaad9db217da92; sessionid_ss=c96a1f896fbf9373fdfaad9db217da92; sid_guard=c96a1f896fbf9373fdfaad9db217da92%7C1716430028%7C15552000%7CTue%2C+19-Nov-2024+02%3A07%3A08+GMT; sid_tt=c96a1f896fbf9373fdfaad9db217da92; sid_ucp_v1=1.0.0-KDc4OTFjMjAyNWNkNjJhNjU5NDIzNGQ1ODFjMGNjMGZhYzZmZGZmMjQKHwiGiKzg-5Opp2YQzMm6sgYYswsgDDDLybqyBjgIQBIQAxoGbWFsaXZhIiBjOTZhMWY4OTZmYmY5MzczZmRmYWFkOWRiMjE3ZGE5Mg; ssid_ucp_v1=1.0.0-KDc4OTFjMjAyNWNkNjJhNjU5NDIzNGQ1ODFjMGNjMGZhYzZmZGZmMjQKHwiGiKzg-5Opp2YQzMm6sgYYswsgDDDLybqyBjgIQBIQAxoGbWFsaXZhIiBjOTZhMWY4OTZmYmY5MzczZmRmYWFkOWRiMjE3ZGE5Mg; store-country-code=id; store-country-code-src=uid; store-idc=maliva; tt_chain_token=mi6dMgWDOR8xWfBQ6jSeZw==; tt-target-idc=alisg; tt-target-idc-sign=jPQkWih9_vpfQPVExpJGYgxBCRELyxXSOZ1MzJjVnaTfza8gQpmT294eGF80j-iEToMIgHx8ywSI80ENDLprjrp8XjAr7KDYzJQFh4E2xcBOaqIfgLnEeKiyTCZyLHPkBx7495L4hGrkPv_hJ4eVcImaZAPTWYdCBVbSKn2p5MJUMO3z85iPB5BbYn9EQJNqjp9vPoEk9iPiyYe9PFiZPA0vyj3BtIpozJ2NK2YCO8mU7lk7hsVU7FQZS2j1G_NDXW69-4ptzztC-y3yI4an-z64OY6hJNdw5gY2ZIXge87hLRC414NamZAqvO2SI7WAuV-ZQYZf7HBGD2dfc50NEGQsVp2zx00MZ-xVB89ARQQgExD9ff2979-pNdrCpNVuto5EI00rHVIj5fZ3TKn8LstPKWKPbpfUPZF_ceZdWcOTpaj1xt_Vw467ACnKMg41vKcP4jyG3hZCkTpvckMwb10HIpD1urDxjtqFkwc0NPEfSSEtm6pxyWUg-uoA3kak; ttwid=1%7CL8xl5yR-rO9953hrUn3ayAR10c2t-yyTEDtXdXmoPsw%7C1716252729%7C1231c31bd4548c0bb8c64e7b2e1eef79ec698be68fc76d22349604eddb821522; uid_tt=513f1c192049e3a9cb5c31e40b260f9aca5817622c98606929960d9d3b7252e7; uid_tt_ss=513f1c192049e3a9cb5c31e40b260f9aca5817622c98606929960d9d3b7252e7; tt_csrf_token=YS0hXGq3-YV9qaQWZFhfee8BsCsxOxg4eNn8; odin_tt=369072438ab3ee12b3e0a1440b2efe8721d9cbc2b42fbfdaadcb29bd742e8c814f2ca55358e0a810b16c54b8035088f0abd882b00a68183ce7db0eeada208cc020fe2bdefc6e012c92522dfc20e76d0a; bm_sv=20787527DB0629846C12BC58FAAB8EE7~YAAQBg81F9Qp3oqPAQAAr/06oxdncOVoxKKiv+Y8UWG9rH/JrE1r8e79Hri00m81SN3dJl1mmZgbWa6hfXbGLgrHk2CUVRlVt8x7LXHR8nCN7frcsCshEJ2fbvturRv7Fr3nWCjo83gHC8L+3OSsKYX0MDJIduLTP1buJVOBH62ZlnYbKrJINhrVzU9IQjiQ7EgJAfnFRF6kGWtK5IiQ8wSLVbs3pNl2AY6czDOTowFf/wsWtT6ter6uQbA2pQtG~1; msToken=zWSEEpaGADPHhvPp3PREv-R-TMUVV5ezVEHgSuvWkYQDggDiaQ3JdYG2lcKPk2juSAP_uY3l1OfK7njcxjbifW7nNDe_EiKXHfKsaIqtaaDlv7g74AmC8Oi_MWBP"
}).then(res => {
console.log(res.result)
let teks =`
┌──「 *TIKTOK STALK* 
▢ *🔖Nama:* ${res.result.users.nickname}
▢ *🔖Username:* ${res.result.users.username}
▢ *👥Pengikut:* ${res.result.stats.followerCount}
▢ *🫂Mengikuti:* ${res.result.stats.followingCount}
▢ *📌Desc:* ${res.result.users.signature}

▢ *🔗 Link* : https://tiktok.com/@${res.result.users.username}
└────────────`
conn.sendMessage(m.chat, {text: teks,
    contextInfo: {
    externalAdReply: {
    title: res.result.users.nickname,
    body: `❤️${res.result.stats.heartCount}`,
    thumbnailUrl: res.result.users.avatarThumb,
    sourceUrl: '',
    mediaType: 1,
    renderLargerThumbnail: true,
    }
    }
    },
    {qouted:m},
    )
})




}
handler.help = ['tiktokstalk']
handler.tags = ['dl']
handler.command = /^t(tstalk|iktokstalk)$/i

export default handler