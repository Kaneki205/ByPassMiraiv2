module.exports.config = {
    name: "masoi",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "ManhG",
    description: "Game Ma sói uwu",
    commandCategory: "Game",
    usages: "[create/start/join/info/leave]",
    cooldowns: 1
}, module.exports.run = async ({
    api: a,
    event: e,
    args: n
}) => {
    const {
        senderID: s,
        threadID: i,
        messageID: o
    } = e;
    global.moduleData.masoi || (global.moduleData.masoi = new Map);
    var t = global.moduleData.masoi.get(i) || {};
    return "create" == n[0] ? global.moduleData.masoi.has(i) ? a.sendMessage("Hiện tại nhóm này đang có game ma sói đang được mở", i, o) : (global.moduleData.masoi.set(e.threadID, {
        author: e.senderID,
        start: 0,
        chiabai: 0,
        ready: 0,
        player: [{
            id: s,
            card1: 0,
            card2: 0,
            card3: 0,
            doibai: 2,
            ready: !1
        }]
    }), a.sendMessage("Game ma sói của bạn đã được tạo thành công!, để tham gia bạn hãy nhập masoi join", i, o)) : "join" == n[0] ? t ? 1 == t.start ? a.sendMessage("Hiện tại game ma sói đã được bắt đầu", i, o) : t.player.find((a => a.id == s)) ? a.sendMessage("Bạn đã tham gia vào game ma sói này!", i, o) : (global.moduleData.masoi.set(i, t), a.sendMessage("Bạn đã tham gia thành công!", i, o)) : a.sendMessage("Hiện tại chưa có game ma sói nào, bạn có thể tạo bằng cách sử dụng masoi create", i, o) : "list" == n[0] ? void 0 === t.player ? a.sendMessage("Hiện tại chưa có game ma sói nào, bạn có thể tạo bằng cách sử dụng masoi create", i, o) : a.sendMessage("=== game ma sói ===\n Author Bàn: " + t.author + "\nTổng số người chơi: " + t.player.length + " Người", i, o) : "leave" == n[0] ? void 0 === t.player ? a.sendMessage("Hiện tại chưa có game ma sói nào, bạn có thể tạo bằng cách sử dụng masoi create", i, o) : t.player.some((a => a.id == s)) ? void(t.author == s ? (global.moduleData.masoi.delete(i), a.sendMessage("Author đã rời khỏi bàn, đồng nghĩa với việc bàn sẽ bị giải tán!", i, o)) : (t.player.splice(t.player.findIndex((a => a.id === s)), 1), a.sendMessage("Bạn đã rời khỏi game ma sói này!", i, o), global.moduleData.masoi.set(i, t))) : a.sendMessage("Bạn chưa tham gia vào game ma sói trong nhóm này!", i, o) : "start" == n[0] && t.author == s ? t ? t.player.length <= 1 ? a.sendMessage("Hiện tại không có người chơi nào tham gia, bạn có thể mời người đấy tham gia bằng cách yêu cầu người chơi khác nhập masoi join", i, o) : 1 == t.start ? a.sendMessage("Hiện tại game đã được bắt đầu bởi chủ bàn", i, o) : (t.start = 1, a.sendMessage("game ma sói của bạn được bắt đầu", i, o)) : a.sendMessage("Hiện tại chưa có game ma sói nào, bạn có thể tạo bằng cách sử dụng masoi create", i, o) : "info" == n[0] && t.author == s ? t ? t.player.some((a => a.id == e.senderID)) ? t.player.length <= 1 ? a.sendMessage("Hiện tại bàn của bạn không có người chơi nào tham gia, bạn có thể mời người đấy tham gia bằng cách yêu cầu người chơi khác nhập masoi join", i, o) : (t.player.forEach((e => a.sendMessage("Bạn có thấy tin nhắn này?", e.id))), a.sendMessage("Bạn có thấy tin nhắn của bot gửi tới bạn? Nếu không, hãy kiểm tra phần tin nhắn chờ hoặc tin nhắn spam!", i, o)) : a.sendMessage("Bạn chưa tham gia vào game ma sói trong nhóm này!", i, o) : a.sendMessage("Hiện tại chưa có game ma sói nào, bạn có thể tạo bằng cách sử dụng masoi create", i, o) : global.utils.throwError(this.config.name, i, o)
};