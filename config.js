const settings = {
  token: '', // token dari @BotFather (wajib diisi)

  ownerId: '', // ID Telegram kamu (angka, contoh: '123456789') - WAJIB diisi, jangan dibiarkan kosong/undefined
  dev: '', // username Telegram kamu (tanpa @)

  dana: '-', // nomer dana (opsional)
  namaDana: '-', // nama pemilik dana (opsional)

  chUsn: '@namach', // username channel telegram kamu

  exPGroupId: '', // ID grup telegram kamu (private)
  exGroupId: '', // ID grup telegram kamu (public)

  hostname: '', // hostname vps kamu

  cfApiToken: '', // API token Cloudflare (buat fitur subdomain otomatis)
  cfZoneId: '', // Zone ID domain di Cloudflare

  apiDigitalOcean: '', // API key DigitalOcean (buat fitur create VPS)

  apiDigitalOcean2: '-', // API key DO server 2 (opsional)
  apiDigitalOcean3: '-', // API key DO server 3 (opsional)

  pp: 'https://files.catbox.moe/0aw77a.jpg', // foto profil bot (bisa diganti)
  ppVid: 'https://files.catbox.moe/lvxmc6.mp4', // video profil bot (opsional)
  panel: 'https://files.catbox.moe/a7ljii.jpeg', // foto panel

  qris: 'https://files.catbox.moe/yydnd9.jpg', // QRIS kamu buat pembayaran

  domain: '', // domain panel Pterodactyl kamu, contoh: panel.domainkamu.com
  plta: '', // Application API Key Pterodactyl (Admin > Application API)
  pltc: '', // Client API Key Pterodactyl (Account > API Credentials)

  domainPriv: '-', // domain panel private (opsional)
  pltaPriv: '-',
  pltcPriv: '-',

  // PANEL SERVER 2 (isi cuma kalau punya server ke-2)
  domainV2: '-',
  pltaV2: '-',
  pltcV2: '-',

  // PANEL SERVER 3
  domainV3: '-',
  pltaV3: '-',
  pltcV3: '-',

  // PANEL SERVER 4
  domainV4: '-',
  pltaV4: '-',
  pltcV4: '-',

  // PANEL SERVER 5
  domainV5: '-',
  pltaV5: '-',
  pltcV5: '-',

  loc: '', // location ID di panel Pterodactyl kamu (cek di Admin > Locations)
  eggs: '' // egg ID yang dipakai buat create server (cek di Admin > Nests/Eggs)
};

module.exports = settings;
