const TelegramBot = require('node-telegram-bot-api');

// جایگزین کن با توکن خودت
const token = '8003073169:AAHsTwKwhii3j1bgbcsMjWGzP1wtoial6YM';

// ایجاد نمونه‌ای از ربات
const bot = new TelegramBot(token, { polling: true });

// وقتی یک پیام متنی دریافت شد
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if (text === '/start') {
        bot.sendMessage(chatId, 'سلام! من یک ربات تلگرام ساده هستم.');
    } else if (text === 'سلام') {
        bot.sendMessage(chatId, 'سلام دوست عزیز! چطور می‌توانم کمکت کنم؟');
    } else {
        bot.sendMessage(chatId, `شما گفتید: ${text}`);
    }
});

console.log('ربات فعال شد...');