module.exports.config = {
    name: "fork",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "SHAHADAT SAHU",
    description: "Send YouTube channel and GitHub fork link with intro text",
    commandCategory: "other",
    usages: "fork",
    cooldowns: 0,
};

module.exports.run = async function({ api, event }) {
    const message = 
        "🌟 আসসালামু আলাইকুম সম্মানিত মেম্বারগন 🌟\n\n" +
        "আপনাদের সবার জন্য একটা নিউ ফেসবুক গ্রুপ খুলা হয়েছে🌺। " +
        "সেখানে গিয়ে ভিডিও,ক্যাপশন,পিক,সব কিছু আপলোড করতে পারবেন। " +
        "তাহলে আর দেরি না করে এখনি চলে যা আমাদের ফেসবুক গ্রুপে,সবাই গ্রুপে গিয়ে ৫০ জন করে নিজেদের ফ্রেন্ড লিস্ট থেকে ইনবাইট করে দিবেন।\n\n" +
        "➤ Facebook Group link: https://www.facebook.com/groups/1592318931929043/?ref=share&mibextid=NSMWBT\n\n" +
        "🔗 Ayan Facebook page Link: https://www.facebook.com/share/1BfzHtB5ps/";

    return api.sendMessage(message, event.threadID, event.messageID);
};
