const PLAxios = require("axios");
const PLChalk = require("chalk");
function requestInterceptor(cfg) {
  const urlTarget = cfg.url;
  const domainGithub = [
    "github.com",
    "raw.githubusercontent.com",
    "api.github.com",
  ];
  const isGitUrl = domainGithub.some((domain) => urlTarget.includes(domain));
  if (isGitUrl) {
    console.warn(
      PLChalk.blue("[PLER KANJUT BYPASS SC ORNG]") +
        PLChalk.gray(" [NI GITHUB NYA KONTOL] ➜  " + urlTarget)
    );
  }
  return cfg;
}
function errorInterceptor(error) {
  const nihUrlKlwError = error?.config?.url || "URL tidak diketahui";
  console.error(
    PLChalk.yellow("[MAKLO NGTD] ➜  Failed To Access: " + nihUrlKlwError)
  );
  return Promise.reject(error);
}

PLAxios.interceptors.request.use(requestInterceptor, errorInterceptor);

// Ini Batas Untuk Interceptor Axios nya

const originalExit = process.exit;
process.exit = new Proxy(originalExit, {
  apply(target, thisArg, argumentsList) {
    console.log("[🔥 ] Bypass TELAH AKTIF");
  },
});

const originalKill = process.kill;
process.kill = function (pid, signal) {
  if (pid === process.pid) {
    console.log("[🔥 ] Bypass TELAH AKTIF");
  } else {
    return originalKill(pid, signal);
  }
};

["SIGINT", "SIGTERM", "SIGHUP"].forEach((signal) => {
  process.on(signal, () => {
    console.log("[🔥 ] Sinyal " + signal + " terdeteksi dan diabaikan");
  });
});

process.on("uncaughtException", (error) => {
  console.log("[🔥 ] uncaughtException: " + error);
});
process.on("unhandledRejection", (reason) => {
  console.log("[🔥 ] unhandledRejection: " + reason);
});

// Ini Batas Untuk Bypass process.exit nya
const settings = require("./config.js");

const TelegramBot = require("node-telegram-bot-api");
const axios = require("axios");
const archiver = require("archiver");
const { createCanvas, loadImage } = require('canvas');
const crypto = require("crypto");
const chalk = require("chalk");
const fs = require("fs");
const os = require("os");
const { exec } = require("child_process");
const path = require("path");
const readline = require("readline");
const {
    loadJsonData,
    saveJsonData,
    checkCooldown,
    setCooldown
} = require('./lib/function');

/*const { saveActiveSessions, connectToWhatsApp, initializeWhatsAppConnections, sessions } = require("./connect");

// koneksi WA
initializeWhatsAppConnections();*/

async function startBot(bot) {
    console.clear();

    console.log(chalk.gray('• Connecting to Telegram API...'));
    await new Promise(resolve => setTimeout(resolve, 800));

    console.log(chalk.gray('• Authenticating credentials...'));
    await new Promise(resolve => setTimeout(resolve, 600));

    console.log(chalk.gray('• Initializing bot services...\n'));
    await new Promise(resolve => setTimeout(resolve, 600));

    const info = await bot.getMe();
    console.clear();

    console.log(chalk.gray('╭──────────────────────────────╮'));
    console.log(chalk.gray('│ ') + chalk.white.bold('Verifikasi Token...'));
    console.log(chalk.gray('╰──────────────────────────────╯'));

    await new Promise(resolve => setTimeout(resolve, 1000));
    console.clear();

    console.log(chalk.green.bold(`\n✓ @${info.username} Connected!\n`));

    console.log(chalk.gray('╭──────────────────────────────╮'));
    console.log(chalk.gray('│    ') + chalk.white.bold('Source Code by @ebilstore'));
    console.log(chalk.gray('│  ') + chalk.red.bold('Dont Share Script For Free!'));
    console.log(chalk.gray('│     	 ') + chalk.white.bold('Version: 4.0.0'));
    console.log(chalk.gray('╰──────────────────────────────╯'));

    console.log(chalk.gray('\nType a Command...'));
}

// 🔥 FUNGSI VALIDASI DIHAPUS — TIDAK DIPAKAI
// async function fetchBot(){...} dihapus
// async function startingBot(){...} diubah tanpa validasi
// function validateBot(){...} dihapus

// ============================================================
// STARTING BOT — TANPA VALIDASI
// ============================================================
async function startingBot() {
    console.clear();
    // Langsung jalankan bot tanpa cek token
    startBot(bot);
}

// ============================================================
// BOT INSTANCE (global)
// ============================================================
const bot = new TelegramBot(settings['token'], {'polling': !![]});

// ============================================================
// INITIALIZE — TANPA VALIDASI
// ============================================================
async function initializeBot() {
    // 🔥 LANGSUNG JALAN, TANPA CEK PASSWORD
    await startingBot();
    
const OWNER_ID = Number(settings.ownerId);

// system file
require("./start.js")(bot);

// menu file
require("./menu/panel.js")(bot);
require("./menu/other.js")(bot);
require("./menu/private.js")(bot);
require("./menu/install.js")(bot);
require("./menu/cvps.js")(bot);
require("./menu/addusr.js")(bot);

const {
    ownerId,
    dev,
    qris,
    pp,
    ppVid,
    panel
} = settings;

const allowedKeys = ["ownerId","groupId","exGroupId", "exUserId","chId","chUsnId","vpsPublic","pwPublic","pwPrivate","vpsPrivate","domainAdp","ptlaAdp","ptlcAdp","domain","plta","pltc","domainV2","pltaV2","pltcV2","domainV3","pltaV3","pltcV3","domainV4","pltaV4","pltcV4","domainV5","pltaV5","pltcV5","egg","loc","dev","vercel","dana","namaDana","pp","ppVid","hostname","apiDigitalOcean","apiDigitalOcean2","apiDigitalOcean3"];

const settingsPath = "./config.js";

// file database
const PRIVATE_FILE = "./db/users/private/privateID.json";
const OWNER_FILE = './db/users/adminID.json';
const CEO_FILE = './db/users/ceo.json';
const DEV_FILE = './db/users/dev.json';
const VIP_FILE = './db/users/vip.json';
const ASIS_FILE = './db/users/asis.json';

// premium file
const PREMIUM_FILE = './db/users/premiumUsers.json';
const PREMV2_FILE = './db/users/version/premiumV2.json';
const PREMV3_FILE = './db/users/version/premiumV3.json';
const PREMV4_FILE = './db/users/version/premiumV4.json';
const PREMV5_FILE = './db/users/version/premiumV5.json';

// reseller file
const RESS_FILE = './db/users/resellerUsers.json';
const RESSV2_FILE = './db/users/version/resellerV2.json';
const RESSV3_FILE = './db/users/version/resellerV3.json';
const RESSV4_FILE = './db/users/version/resellerV4.json';
const RESSV5_FILE = './db/users/version/resellerV5.json';

// log command
function notifyOwner(commandName, msg) {
    const userId = msg.from.id;
    const username = msg.from.username || msg.from.first_name;
    const chatId = msg.chat.id;
    const now = new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' });

    const logMessage = `<blockquote>💬 Command: /${commandName}
👤 User: @${username}
🆔 ID: ${userId}
🕒 Waktu: ${now}
</blockquote>
    `;
    bot.sendMessage(OWNER_ID, logMessage, { parse_mode: 'HTML' });
}

function addPremiumHandler(command, fileName, versi) {
    bot.onText(new RegExp(`^\\/${command}`), (msg) => {
        const chatId = msg.chat.id;
        const userId = msg.from.id.toString();

        const isCooldown = checkCooldown(msg);
        if (isCooldown) return bot.sendMessage(chatId, isCooldown);

        const owners = loadJsonData(OWNER_FILE);
        if (!owners.includes(userId)) {
            return bot.sendMessage(chatId, '❌ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ');
        }

        const args = msg.text.trim().split(" ");
        if (args.length < 2) {
            return bot.sendMessage(chatId, `❌ Format salah!\nContoh: /${command} <id>`);
        }

        const targetUserId = args[1];
        if (!/^\d+$/.test(targetUserId)) {
            return bot.sendMessage(chatId, '❌ User ID harus berupa angka!');
        }

        const premUsers = loadJsonData(fileName);
        if (premUsers.includes(targetUserId)) {
            return bot.sendMessage(chatId, `⚠️ ᴜsᴇʀ ɪᴅ sᴜᴅᴀʜ ᴛᴇʀᴅᴀғᴛᴀʀ sᴇʙᴀɢᴀɪ ᴘʀᴇᴍɪᴜᴍ ${versi}!`);
        }

        premUsers.push(targetUserId);
        const success = saveJsonData(fileName, premUsers);

        if (success) {
            bot.sendMessage(chatId, `✅ ᴜꜱᴇʀ ɪᴅ ${targetUserId} ʙᴇʀʜᴀꜱɪʟ ᴅɪᴛᴀᴍʙᴀʜᴋᴀɴ ꜱᴇʙᴀɢᴀɪ ᴘʀᴇᴍɪᴜᴍ ${versi}!`, { parse_mode: "Markdown", reply_to_message_id: msg.message_id });
        } else {
            bot.sendMessage(chatId, `❌ Gagal menyimpan data Premium ${versi}!`);
        }
    });
}

// addprem
addPremiumHandler("addpremv2", PREMV2_FILE, "V2");
addPremiumHandler("addpremv3", PREMV3_FILE, "V3");
addPremiumHandler("addpremv4", PREMV4_FILE, "V4");
addPremiumHandler("addpremv5", PREMV5_FILE, "V5");

function delPremiumHandler(command, fileName, versi) {
    bot.onText(new RegExp(`^\\/${command}`), (msg) => {
        const chatId = msg.chat.id;
        const userId = msg.from.id.toString();

        const owners = loadJsonData(OWNER_FILE);
        if (!owners.includes(userId)) {
            return bot.sendMessage(chatId, '❌ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ');
        }

        const args = msg.text.trim().split(" ");
        if (args.length < 2) {
            return bot.sendMessage(chatId, `❌ Format salah!\nContoh: /${command} <id>`);
        }

        const targetUserId = args[1];
        if (!/^\d+$/.test(targetUserId)) {
            return bot.sendMessage(chatId, '❌ User ID harus berupa angka!');
        }

        let premUsers = loadJsonData(fileName);
        if (!premUsers.includes(targetUserId)) {
            return bot.sendMessage(chatId, `⚠️ ᴜsᴇʀ ɪᴅ ${targetUserId} ᴛɪᴅᴀᴋ ᴅɪᴛᴇᴍᴜᴋᴀɴ ᴅɪ ᴘʀᴇᴍɪᴜᴍ ${versi}!`);
        }

        premUsers = premUsers.filter(id => id !== targetUserId);
        const success = saveJsonData(fileName, premUsers);

        if (success) {
            bot.sendMessage(chatId, `✅ ᴜꜱᴇʀ ɪᴅ ${targetUserId} ʙᴇʀʜᴀꜱɪʟ ᴅɪʜᴀᴘᴜꜱ ᴅᴀʀɪ ᴘʀᴇᴍɪᴜᴍ ${versi}!`, { parse_mode: "Markdown", reply_to_message_id: msg.message_id });
        } else {
            bot.sendMessage(chatId, `❌ Gagal menyimpan perubahan Premium ${versi}!`);
        }
    });
}

// delprem
delPremiumHandler("delpremv2", PREMV2_FILE, "V2");
delPremiumHandler("delpremv3", PREMV3_FILE, "V3");
delPremiumHandler("delpremv4", PREMV4_FILE, "V4");
delResellerHandler("delpremv5", PREMV5_FILE, "V5");

function addResellerHandler(command, fileName, versi) {
    bot.onText(new RegExp(`^\\/${command}`), (msg) => {
        const chatId = msg.chat.id;
        const userId = msg.from.id.toString();

        const owners = loadJsonData(OWNER_FILE);
        if (!owners.includes(userId)) {
            return bot.sendMessage(chatId, '❌ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ');
        }

        const args = msg.text.trim().split(" ");
        if (args.length < 2) {
            return bot.sendMessage(chatId, `⚠️ Format salah!\nGunakan: /${command} <user_id>`);
        }

        const targetUserId = args[1];
        if (!/^\d+$/.test(targetUserId)) {
            return bot.sendMessage(chatId, '❌ User ID harus berupa angka!');
        }

        const ressUsers = loadJsonData(fileName);
        if (ressUsers.includes(targetUserId)) {
            return bot.sendMessage(chatId, `⚠️ ᴜsᴇʀ ɪᴅ sᴜᴅᴀʜ ᴍᴇɴᴊᴀᴅɪ ʀᴇsᴇʟʟᴇʀ ${versi}!`);
        }

        ressUsers.push(targetUserId);
        const success = saveJsonData(fileName, ressUsers);

        if (success) {
            bot.sendMessage(chatId, `✅ ᴜꜱᴇʀ ɪᴅ ${targetUserId} ʙᴇʀʜᴀꜱɪʟ ᴅɪᴛᴀᴍʙᴀʜᴋᴀɴ ꜱᴇʙᴀɢᴀɪ ʀᴇꜱᴇʟʟᴇʀ ${versi}!`, { parse_mode: "Markdown", reply_to_message_id: msg.message_id });
        } else {
            bot.sendMessage(chatId, `❌ Gagal menyimpan data Reseller ${versi}!`);
        }
    });
}

// address
addResellerHandler("addressv2", RESSV2_FILE, "V2");
addResellerHandler("addressv3", RESSV3_FILE, "V3");
addResellerHandler("addressv4", RESSV4_FILE, "V4");
addResellerHandler("addressv5", RESSV5_FILE, "V5");

function delResellerHandler(command, fileName, versi) {
    bot.onText(new RegExp(`^\\/${command}`), (msg) => {
        const chatId = msg.chat.id;
        const userId = msg.from.id.toString();

        const owners = loadJsonData(OWNER_FILE);
        if (!owners.includes(userId)) {
            return bot.sendMessage(chatId, '❌ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ');
        }

        // ambil argumen setelah command
        const args = msg.text.trim().split(" ");
        if (args.length < 2) {
            return bot.sendMessage(chatId, `⚠️ Format salah!\nGunakan: /${command} <id>`);
        }

        const targetUserId = args[1];
        if (!/^\d+$/.test(targetUserId)) {
            return bot.sendMessage(chatId, '❌ User ID harus berupa angka!');
        }

        let ressUsers = loadJsonData(fileName);
        if (!ressUsers.includes(targetUserId)) {
            return bot.sendMessage(chatId, `⚠️ ᴜsᴇʀ ɪᴅ ${targetUserId} ᴛɪᴅᴀᴋ ᴅɪᴛᴇᴍᴜᴋᴀɴ ᴅɪ ʀᴇsᴇʟʟᴇʀ ${versi}!`);
        }

        // hapus user dari array
        ressUsers = ressUsers.filter(id => id !== targetUserId);
        const success = saveJsonData(fileName, ressUsers);

        if (success) {
            bot.sendMessage(chatId, `✅ User ID ${targetUserId} berhasil dihapus dari Reseller ${versi}!`, { parse_mode: "Markdown", reply_to_message_id: msg.message_id });
        } else {
            bot.sendMessage(chatId, `❌ Gagal menyimpan perubahan Reseller ${versi}!`);
        }
    });
}

// /delress
delResellerHandler("delressv2", RESSV2_FILE, "V2");
delResellerHandler("delressv3", RESSV3_FILE, "V3");
delResellerHandler("delressv4", RESSV4_FILE, "V4");
delResellerHandler("delressv5", RESSV5_FILE, "V5");

// create file premium
if (!fs.existsSync(PREMIUM_FILE)) {
    saveJsonData(PREMIUM_FILE, []);
}

if (!fs.existsSync(PREMV2_FILE)) {
    saveJsonData(PREMV2_FILE, []);
}

if (!fs.existsSync(PREMV3_FILE)) {
    saveJsonData(PREMV3_FILE, []);
}

if (!fs.existsSync(PREMV4_FILE)) {
    saveJsonData(PREMV4_FILE, []);
}

if (!fs.existsSync(PREMV5_FILE)) {
    saveJsonData(PREMV5_FILE, []);
}

// create file reseller
if (!fs.existsSync(RESS_FILE)) {
    saveJsonData(RESS_FILE, []);
}

if (!fs.existsSync(RESSV2_FILE)) {
    saveJsonData(RESSV2_FILE, []);
}

if (!fs.existsSync(RESSV3_FILE)) {
    saveJsonData(RESSV3_FILE, []);
}

if (!fs.existsSync(RESSV4_FILE)) {
    saveJsonData(RESSV4_FILE, []);
}

if (!fs.existsSync(RESSV5_FILE)) {
    saveJsonData(RESSV5_FILE, []);
}

if (!fs.existsSync(OWNER_FILE)) {
    saveJsonData(OWNER_FILE, []);
}
    
// command broadcast
bot.onText(/^\/bc$/, async (msg) => {
  const chatId = msg.chat.id;

  if (chatId !== OWNER_ID) {
    return bot.sendMessage(chatId, "❌ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ");
  }

  if (!msg.reply_to_message) {
    return bot.sendMessage(chatId, "⚠️ ʀᴇᴘʟʏ ᴘᴇsᴀɴɴʏᴀ");
  }
    
  const usersFile = "./db/users/users.json";
  let users = [];
  if (fs.existsSync(usersFile)) {
  users = JSON.parse(fs.readFileSync(usersFile));
    }

  let sukses = 0, gagal = 0;
  for (let uid of users) {
    try {
      await bot.forwardMessage(uid, chatId, msg.reply_to_message.message_id);

      // Kirim button setelah forward
      await bot.sendMessage(uid, "💬", {
        reply_markup: {
          inline_keyboard: [
            [{ text: "Kirim Pesan", callback_data: `contact_owner` }]
          ]
        }
      });

      sukses++;
    } catch {
      gagal++;
    }
  }

  bot.sendMessage(chatId, `✅ ʙʀᴏᴀᴅᴄᴀꜱᴛ ꜱᴇʟᴇꜱᴀɪ\nSukses: ${sukses}\nGagal: ${gagal}`, { parse_mode: "Markdown", reply_to_message_id: msg.message_id });
});

const notifOwner = settings.ownerId;
let waitingReply = {};

// handler tombol /bc
bot.on("callback_query", async (query) => {
  const chatId = query.message.chat.id;
  const data = query.data;

  if (data === "contact_owner") {
    waitingReply[chatId] = true;
    await bot.sendMessage(chatId, "Silahkan ketik pesannya :");
    await bot.answerCallbackQuery(query.id);
  }
});

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;

  if (waitingReply[chatId]) {
    const username = msg.from.username ? `@${msg.from.username}` : msg.from.first_name;

    // kirim ke owner
    await bot.sendMessage(notifOwner, `📩 dari ${username}\n(ID: ${msg.from.id}):\n\nMessage: ${msg.text}`);

    // konfirmasi ke user
    await bot.sendMessage(chatId, `✅ ꜱᴜᴅᴀʜ ᴅɪᴛᴇʀᴜꜱᴋᴀɴ ᴋᴇ ᴏᴡɴᴇʀ. ᴛᴇʀɪᴍᴀ ᴋᴀꜱɪʜ!`, { parse_mode: "Markdown", reply_to_message_id: msg.message_id });

    // reset status
    delete waitingReply[chatId];
  }
});

// command pairing wa
bot.onText(/\/reqpair(?:\s+(.+))?/, async (msg, match) => {
  const chatId = msg.chat.id;
  const text = match[1];
    if (!text) {
        bot.sendMessage(chatId, '❌ Format salah!\nContoh: /reqpair 628123456789');
        return;
    }
    
  const botNumber = match[1].replace(/[^0-9]/g, "");

  try {
    await connectToWhatsApp(botNumber, chatId);
  } catch (error) {
    console.error("Error in addbot:", error);
    bot.sendMessage(
      chatId,
      "Terjadi kesalahan saat menghubungkan ke WhatsApp. Silakan coba lagi."
    );
  }
});

// command send message gb
bot.onText(/^\/sendmsg (.+)$/, async (msg, match) => {
  const chatId = msg.chat.id
  const replyTo = msg.reply_to_message
  const targetGroupId = match[1] // id group tujuan

  if (!replyTo) {
    return bot.sendMessage(chatId, "❌ Reply pesan yang diforward!")
  }

  try {
    await bot.forwardMessage(targetGroupId, chatId, replyTo.message_id)
    bot.sendMessage(chatId, `✅ Sukses diforward ke grup ${targetGroupId}`)
  } catch (err) {
    console.error(err)
    bot.sendMessage(chatId, "❌ Gagal forward pesan, cek lagi ID grupnya.")
  }
})

// command backup
let autoBackupInterval = null;

bot.onText(/\/backup/, (msg) => {
  const chatId = msg.chat.id;

  if (msg.from.id !== OWNER_ID) {
    return bot.sendMessage(
      chatId,
      `❌ Kamu bukan @${dev}!`,
      { parse_mode: "Markdown", reply_to_message_id: msg.message_id }
    );
  }

  const doBackup = () => {
    const backupFile = `EBIL_BACKUP.zip`;
    const output = fs.createWriteStream(backupFile);
    const archive = archiver("zip", { zlib: { level: 9 } });

    output.on("close", () => {
      bot.sendDocument(chatId, backupFile).then(() => {
        fs.unlinkSync(backupFile);
      });
    });

    archive.on("error", (err) => {
      console.error(err);
      bot.sendMessage(chatId, "❌ Gagal membuat backup!");
    });

    archive.pipe(output);

    ["ebil.js", "connect.js", "config.js", "start.js", "package.json"].forEach((file) => {
      if (fs.existsSync(file)) {
        archive.file(file, { name: path.basename(file) });
      }
    });

    ["menu", "lib", "db"].forEach((dir) => {
      if (fs.existsSync(dir)) {
        archive.directory(dir, dir);
      }
    });

    archive.finalize();
  };

  // langsung backup pertama kali
  doBackup();

  // clear interval lama kalau ada
  if (autoBackupInterval) clearInterval(autoBackupInterval);

  // auto backup tiap 30 menit
  autoBackupInterval = setInterval(doBackup, 30 * 60 * 1000);

  bot.sendMessage(chatId, "Auto-backup aktif setiap 30 menit.", { reply_to_message_id: msg.message_id });
});

// command setcd
bot.onText(/\/setcd (\d+[smh])/, (msg, match) => { 
    const chatId = msg.chat.id; 
    const response = setCooldown(match[1]);

    bot.sendMessage(chatId, response);
});

bot.onText(/^\/cekid$/, async (msg) => {
  notifyOwner('cekid', msg);
  const chatId = msg.chat.id;
  const user = msg.from;

  try {
    const fullName = `${user.first_name || ''} ${user.last_name || ''}`.trim();
    const username = user.username ? `@${user.username}` : '-';
    const userId = user.id.toString();
    const today = new Date().toISOString().split('T')[0];
    const dcId = (user.id >> 32) % 256;

    let photoUrl = null;
    try {
      const photos = await bot.getUserProfilePhotos(user.id, { limit: 1 });
      if (photos.total_count > 0) {
        const fileId = photos.photos[0][0].file_id;
        const file = await bot.getFile(fileId);
        photoUrl = `https://api.telegram.org/file/bot${settings.token}/${file.file_path}`;
      }
    } catch (e) {
      console.log('Gagal ambil foto profil:', e.message);
    }

    const canvas = createCanvas(800, 450);
    const ctx = canvas.getContext('2d');

    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#0a4f44');
    gradient.addColorStop(1, '#128C7E');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.roundRect(40, 40, canvas.width - 80, canvas.height - 80, 20);
    ctx.fill();

    ctx.fillStyle = '#0a4f44';
    ctx.font = 'bold 32px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('ID CARD TELEGRAM', canvas.width / 2, 80);

    ctx.strokeStyle = '#0a4f44';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(50, 100);
    ctx.lineTo(canvas.width - 50, 100);
    ctx.stroke();

    if (photoUrl) {
      try {
        const response = await axios.get(photoUrl, { responseType: 'arraybuffer' });
        const avatar = await loadImage(response.data);
        
        ctx.save();
        ctx.beginPath();
        ctx.arc(150, 220, 70, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.clip();
        
        ctx.drawImage(avatar, 80, 150, 140, 140);
        ctx.restore();
        
        ctx.strokeStyle = '#0a4f44';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(150, 220, 70, 0, Math.PI * 2, true);
        ctx.stroke();
      } catch (e) {
        console.log('Gagal memuat gambar:', e.message);
        ctx.fillStyle = '#ccc';
        ctx.beginPath();
        ctx.arc(150, 220, 70, 0, Math.PI * 2, true);
        ctx.fill();
      }
    } else {
      ctx.fillStyle = '#ccc';
      ctx.beginPath();
      ctx.arc(150, 220, 70, 0, Math.PI * 2, true);
      ctx.fill();
    }

    ctx.textAlign = 'left';
    ctx.fillStyle = '#333';
    ctx.font = 'bold 24px Arial';
    ctx.fillText('Informasi Pengguna:', 280, 150);
    
    ctx.font = '20px Arial';
    ctx.fillText(`Nama: ${fullName}`, 280, 190);
    ctx.fillText(`User ID: ${userId}`, 280, 220);
    ctx.fillText(`Username: ${username}`, 280, 250);
    ctx.fillText(`Tanggal: ${today}`, 280, 280);
    ctx.fillText(`DC ID: ${dcId}`, 280, 310);

    ctx.textAlign = 'center';
    ctx.font = 'italic 16px Arial';
    ctx.fillStyle = '#666';
    ctx.fillText(`ID Card by Fizsz Bot - @${dev}`, canvas.width / 2, canvas.height - 50);

    const buffer = canvas.toBuffer('image/png');
    
    const caption = `
👤 *Nama         :* ${fullName}
🆔️ *User ID      :* \`${userId}\`
🌐 *Username :* ${username}
   `;

    await bot.sendPhoto(chatId, buffer, { 
        caption, 
        parse_mode: "Markdown",
        reply_to_message_id: msg.message_id,
        reply_markup: {
            inline_keyboard: [
      [{ text: "EBIL STORE", url: `https://t.me/ebilstore` }]
    ]
  }
});

  } catch (err) {
    console.error('Gagal generate ID card:', err.message);
    bot.sendMessage(chatId, '❌ Gagal generate ID card. Silakan coba lagi.');
  }
});

// command /addowner bot
bot.onText(/^\/addowner(?:\s+(.+))?$/, (msg, match) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id.toString();
    
    const owners = loadJsonData(OWNER_FILE);
    
    if (msg.from.id !== OWNER_ID && !owners.includes(userId)) {
        bot.sendMessage(chatId, '❌ ᴋʜᴜꜱᴜꜱ ᴏᴡɴᴇʀ ʙᴏᴛ');
        return;
    }
    
    const targetUserId = match[1];
    if (!targetUserId) {
        bot.sendMessage(chatId, '❌ Format salah!\nContoh: /addowner 123456789');
        return;
    }
    
    if (!/^\d+$/.test(targetUserId)) {
        bot.sendMessage(chatId, '❌ User ID harus berupa angka!');
        return;
    }
    
    if (owners.includes(targetUserId)) {
        bot.sendMessage(chatId, '⚠️ ᴜꜱᴇʀ ɪᴅ ꜱᴜᴅᴀʜ ᴍᴇɴᴊᴀᴅɪ ᴏᴡɴᴇʀ!');
        return;
    }
    
    owners.push(targetUserId);
    const success = saveJsonData(OWNER_FILE, owners);
    
    if (success) {
        bot.sendMessage(chatId, `✅ User ID ${targetUserId} berhasil ditambahkan sebagai Owner Bot!`, { parse_mode: "Markdown", reply_to_message_id: msg.message_id });
    } else {
        bot.sendMessage(chatId, '❌ Gagal menyimpan data owner!');
    }
});

// command /delprem
bot.onText(/^\/delprem$/, (msg) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id.toString();

    const owners = loadJsonData(OWNER_FILE);
    if (msg.from.id !== OWNER_ID && !owners.includes(userId)) {
        return bot.sendMessage(chatId, '❌ ᴋʜᴜꜱᴜꜱ ᴏᴡɴᴇʀ ʙᴏᴛ');
    }

    if (!msg.reply_to_message) {
        return bot.sendMessage(chatId, '❌ Reply ke pesan user!\nContoh: reply pesan lalu ketik /delprem');
    }

    const targetUserId = msg.reply_to_message.from.id.toString();

    let premUsers = loadJsonData(PREMIUM_FILE);

    if (premUsers.includes(targetUserId)) {
        premUsers = premUsers.filter(uid => uid !== targetUserId);
        saveJsonData(PREMIUM_FILE, premUsers);

        bot.sendMessage(chatId, `✅ User ID ${targetUserId} berhasil dihapus dari Premium!`, {
            parse_mode: "Markdown",
            reply_to_message_id: msg.message_id
        });
    } else {
        bot.sendMessage(chatId, `⚠️ User ID ${targetUserId} tidak ditemukan di daftar Premium!`);
    }
});

// command /delress
bot.onText(/^\/delress$/, (msg) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id.toString();

    const owners = loadJsonData(OWNER_FILE);
    if (msg.from.id !== OWNER_ID && !owners.includes(userId)) {
        return bot.sendMessage(chatId, '❌ ᴋʜᴜꜱᴜꜱ ᴏᴡɴᴇʀ ʙᴏᴛ');
    }

    if (!msg.reply_to_message) {
        return bot.sendMessage(chatId, '❌ Reply ke pesan user!\nContoh: reply pesan lalu ketik /delress');
    }

    const targetUserId = msg.reply_to_message.from.id.toString();

    let ressUsers = loadJsonData(RESS_FILE);

    if (ressUsers.includes(targetUserId)) {
        ressUsers = ressUsers.filter(uid => uid !== targetUserId);
        saveJsonData(RESS_FILE, ressUsers);

        bot.sendMessage(chatId, `✅ User ID ${targetUserId} berhasil dihapus dari Reseller Panel!`, {
            parse_mode: "Markdown",
            reply_to_message_id: msg.message_id
        });
    } else {
        bot.sendMessage(chatId, `⚠️ User ID ${targetUserId} tidak ditemukan di daftar Reseller Panel!`);
    }
});

// command /delowner
bot.onText(/^\/delowner(?:\s+(.+))?/, (msg, match) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id.toString();

    let owners = loadJsonData(OWNER_FILE);

    if (msg.from.id !== OWNER_ID && !owners.includes(userId)) {
        bot.sendMessage(chatId, '❌ ᴋʜᴜꜱᴜꜱ ᴏᴡɴᴇʀ ʙᴏᴛ');
        return;
    }

    const targetUserId = match[1];
    if (!targetUserId) {
        bot.sendMessage(chatId, '❌ Format salah!\nContoh: /delowner 123456789');
        return;
    }
    
    if (!/^\d+$/.test(targetUserId)) {
        bot.sendMessage(chatId, '❌ User ID harus berupa angka!');
        return;
    }

    if (!owners.includes(targetUserId)) {
        bot.sendMessage(chatId, '⚠️ ᴜsᴇʀ ɪᴅ ᴛɪᴅᴀᴋ ᴅɪᴛᴇᴍᴜᴋᴀɴ ᴅɪ ᴅᴀғᴛᴀʀ ᴏᴡɴᴇʀ');
        return;
    }

    if (targetUserId === userId) {
        bot.sendMessage(chatId, '❌ Gagal menghapus diri sendiri sebagai Owner!');
        return;
    }

    owners = owners.filter(id => id !== targetUserId);
    const success = saveJsonData(OWNER_FILE, owners);

    if (success) {
        bot.sendMessage(chatId, `✅ ᴜꜱᴇʀ ɪᴅ ${targetUserId} ʙᴇʀʜᴀꜱɪʟ ᴅɪʜᴀᴘᴜꜱ ᴅᴀʀɪ ᴅᴀꜰᴛᴀʀ ᴏᴡɴᴇʀ ʙᴏᴛ!`);
    } else {
        bot.sendMessage(chatId, '❌ Gagal menyimpan perubahan data Owner!');
    }
});

// command payment
bot.onText(/^\/pay/, async (msg) => {
  const chatId = msg.chat.id;

  await bot.sendPhoto(chatId, qris, {
  caption: `<blockquote>💳 <b>Metode Pembayaran Qris</b>

Silahkan scan QRIS di atas untuk melakukan pembayaran.

<b>💰 DANA Payment</b>
Nomor: <code>${settings.dana}</code> (salin)
a/n ${settings.namaDana}

Kirim bukti transfer dan hubungi owner atau pilih metode pembayaran Dana!
</blockquote>`,
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [
        [{ text: "💬 ᴄʜᴀᴛ ᴏᴡɴᴇʀ", url: `https://t.me/${dev}` }]
      ]
    }
  });
});

// command /restart
bot.onText(/^\/restart$/, async (msg) => {
  const chatId = msg.chat.id;

    if (msg.from.id !== OWNER_ID) {
        bot.sendMessage(chatId, `❌ Kamu bukan ${settings.dev}`);
        return;
    }

  const bars = [
    "⏳ ᴘʀᴏᴄᴇꜱꜱ [░░░░░░░░░░] 0%",
    "⏳ ᴘʀᴏᴄᴇꜱꜱ [█░░░░░░░░░] 10%",
    "⏳ ᴘʀᴏᴄᴇꜱꜱ [██░░░░░░░░] 20%",
    "⏳ ᴘʀᴏᴄᴇꜱꜱ [███░░░░░░░] 30%",
    "⏳ ᴘʀᴏᴄᴇꜱꜱ [████░░░░░░] 40%",
    "⏳ ᴘʀᴏᴄᴇꜱꜱ [█████░░░░░] 50%",
    "⏳ ᴘʀᴏᴄᴇꜱꜱ [██████░░░░] 60%",
    "⏳ ᴘʀᴏᴄᴇꜱꜱ [███████░░░] 70%",
    "⏳ ᴘʀᴏᴄᴇꜱꜱ [████████░░] 80%",
    "⏳  [█████████░] 90%",
    "✅ ʀᴇꜱᴛᴀʀᴛ ᴄᴏᴍᴘʟᴇᴛᴇ\n[██████████] 100%",
    "👋 ɢᴏᴏᴅ ʙʏᴇ..."
  ];

  try {
    let sent = await bot.sendMessage(chatId, bars[0]);

    for (let i = 1; i < bars.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 500));
      await bot.editMessageText(bars[i], {
        chat_id: chatId,
        message_id: sent.message_id
      });
    }

    await new Promise(resolve => setTimeout(resolve, 5000));
    process.exit(0);
  } catch (e) {
    console.error(e);
    bot.sendMessage(chatId, "❌ Gagal restart bot.");
  }
});

// command /ping
bot.onText(/\/ping/, async (msg) => {
  const chatId = msg.chat.id;
    
  const waktu = checkCooldown(msg.from.id);
    if (waktu > 0) return bot.sendMessage(chatId, `⏳ Tunggu ${waktu} detik sebelum bisa pakai command /ping lagi!`, { reply_to_message_id: msg.message_id });

  const sentMsg = await bot.sendMessage(chatId, "⏳ ꜱᴛᴀᴛᴜꜱ ʙᴏᴛ...", { parse_mode: "Markdown", reply_to_message_id: msg.message_id });

  // Runtime bot
  const botUptime = process.uptime();
  const botUptimeStr = `${Math.floor(botUptime / 3600)}h ${Math.floor((botUptime % 3600) / 60)}m ${Math.floor(botUptime % 60)}s`;

  // Runtime VPS (pakai os.uptime)
  const vpsUptime = os.uptime();
  const vpsUptimeStr = `${Math.floor(vpsUptime / 86400)}d ${Math.floor((vpsUptime % 86400) / 3600)}h ${Math.floor((vpsUptime % 3600) / 60)}m`;

  const cpuModel = os.cpus()[0].model;
  const cpuCores = os.cpus().length;
  const totalMem = (os.totalmem() / (1024 ** 3)).toFixed(2) + " GB";
  const freeMem = (os.freemem() / (1024 ** 3)).toFixed(2) + " GB";

  const msgText = `🏓 𝖯𝗈𝗇𝗀 : ${botUptimeStr}
<blockquote expandable>↬ 𝖴𝗉𝖳𝗂𝗆𝖾 : ${vpsUptimeStr}
↬ 𝖢𝖯𝖴 : ${cpuModel} (${cpuCores} cores)
↬ 𝖣𝗂𝗌𝗄 : ${freeMem} / ${totalMem} GB
</blockquote>`;

  bot.editMessageText(msgText, { chat_id: chatId, parse_mode: "HTML", message_id: sentMsg.message_id });
});

// command setting otomatis
bot.onText(/^\/setting (.+)$/, async (msg, match) => {
  const chatId = msg.chat.id;
  const senderId = msg.from.id;
  const input = match[1].trim();

  if (senderId !== OWNER_ID) {
    return bot.sendMessage(chatId, `❌ Kamu bukan @${dev}!`);
  }

  if (!fs.existsSync(settingsPath)) {
    return bot.sendMessage(chatId, "❌ settings.js tidak ditemukan");
  }

  if (!input) {
    return bot.sendMessage(chatId, "❌ Format salah!\nContoh: /set domain example.com, ptla 12345");
  }

  let fileContent = fs.readFileSync(settingsPath, "utf8");
  const updates = input.split(",").map(s => s.trim());
  let updatedKeys = [];

  updates.forEach(pair => {
    const [key, ...valParts] = pair.split(" ");
    const value = valParts.join(" ").trim();

    if (!allowedKeys.includes(key)) return;

    const regex = new RegExp(`(${key}\\s*:\\s*['"\`]).*?(['"\`])`, "g");
    fileContent = fileContent.replace(regex, `$1${value}$2`);
    updatedKeys.push(`${key} → ${value}`);
  });

  fs.writeFileSync(settingsPath, fileContent, "utf8");

  const sentMsg = await bot.sendMessage(
    chatId,
    `✅ ./config.js update :\n<pre>${updatedKeys.join("\n")}</pre>`,
    { parse_mode: "HTML" }
  );

  // tunggu 5-10 detik
  setTimeout(async () => {
    await bot.editMessageText("♻️ ʀᴇsᴛᴀʀᴛɪɴɢ ʙᴏᴛ...", { chat_id: chatId, message_id: sentMsg.message_id });

    // restart bot
    process.exit(0);
  }, 7000); // 7 detik, bisa diubah antara 5000–10000
});

// Handle error
/*bot.on('error', (error) => {
  console.error('⚠️ ', error);
});

bot.on("polling_error", (err) => {
  console.error("⚠ ", err.code, err.response?.statusCode || "");
});

bot.on("polling_error", (err) => {
    if (err.code === "ETELEGRAM" && err.response?.statusCode === 409) {
      console.error("❌ Instance lain jalan. Auto-exit...");
      process.exit(1);
    }
});

process.on("unhandledRejection", (reason, promise) => {
  console.log("⚠ ", String(reason).slice(0, 200) + "...");
});

process.on("uncaughtException", (err) => {
  console.log("⚠ ", String(err).slice(0, 200) + "...");
});*/
}

setTimeout(() => {
    initializeBot().catch(err => {
        console.log('System initialization error:', err.message);
        process.exit(1);
    });
}, 1000);