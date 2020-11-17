module.exports.run = async function (client, message, args) {
	if (message.member.id === client.config.owner) {
		if (message.guild.id === "618837514882514944") {
			let guildName = message.guild.name;
			let sectionA = {
				"title": "ยินดีต้อนรับสู่ " + guildName,
				"image": {
					"url": "https://i.imgur.com/a16qb2M.jpg"
				}
			};
			let sectionAa = {
				"title": "โอฮาโย๊ะ..สมาชิกใหม่! ヾ(≧▽≦*)o",
				"description": "อืมๆ ฉันคิดไว้แล้วละ ว่าในเร็วๆ นี้จะมีคนมาเพิ่ม ถ้าเพิ่งเข้ามาใน " + guildName + " เป็นครั้งแรกละก็ คุณอาจจะงงนิดหนึ่ง (ไม่น่าจะนิดนะ) ว่าทำไหมมีแค่ไม่กี่ช่องเอง นั้นเป็นเพราะว่าฉันซ่อนช่องอื่นๆ ไว้เพื่อไม่ให้ผู้ที่ประสงค์ร้าย จะเข้ามาก่อกวนสมาชิกของฉันน่ะแล้วก็เพื่อยืนยันว่าคุณเป็นมนุษย์จริงๆ ด้วยล่ะ วิธีนะหรอ..? ให้อ่านต่อจากข้างล่างเลยย ที่พูดถึงบทบาทของคุณนั้นละนะ \n\nเฮ้...เกือบลืมแน่ะ งั้นขอทักทายก่อนละกันนะ ฉันชื่อ Yumeko ชื่อจริง Yusuki Hirume ฉันคือผู้ช่วยและผู้ดูแลของเซิร์ฟเวอร์นี้ละ อ่าๆ..คุณไม่จำเป็นต้องแนะนำตัวก็ได้ เพราะฉันมีข้อมูลของคุณอยู่ในเซิร์ฟเวอร์นี้แล้ว แล้วถ้าหากคุณต้องการจะให้ฉันช่วยอะไรละก็ ให้พิมพ์ **Yhelp** ละ ฉันจะบอกคุณเกี่ยวกับการสื่อสารระหว่างฉันกับคุณเอง"
			};
			let sectionB = {
				"title": "กฎระเบียบของเซิร์ฟเวอร์!",
				"color": 16711680,
				"image": {
					"url": "https://i.imgur.com/IZ1wKfu.jpeg"
				}
			};
			let sectionBa = {
				"color": 16711680,
				"description": "อย่างแรกเลย ก่อนที่คุณจะเริ่มพูดคุยกับสมาชิกอื่นๆ คุณ**จำเป็น**ต้องอ่าน<#692297482062790706>ก่อน เพื่อไม่ให้เกิดปัญหาที่ตามมาหลังจากที่ทำไปแล้ว หากเราพบว่ามีการทำผิดกฏข้อใดๆ เราจะทำโทษตามความร้ายแรงนั้นๆ นะจ๊ะ \n\nถ้าคุณต้องการเพิ่มหรือลดความร้ายแรงของกฏระเบียบข้อไหนละก็ สามารถแจ้งให้ทีมงานเราทราบได้เลยนะ และจะพิจารณาเป็นพิเศษด้วย"
			};
			let sectionC = {
				"title": "มารับบทบาทของคุณกัน!",
				"color": 12390624,
				"image": {
					"url": "https://i.imgur.com/nPQMjQX.jpg"
				}
			};
			let sectionCa = {
				"color": 12390624,
				"description": "ถ้าคุณเพิ่งเข้าเซิร์ฟเวอร์มาใหม่ละก็ ให้มาทางนี้กันก่อนนะจ๊ะ \n\nโดยทั่วไปแล้ว สมาชิกทุกคนต้องมีบทบาทที่มีชื่อว่า \"Member\" ซึ่งบทบาทนี้ จะทำให้สามารถเห็นช่องอื่นๆ และพูดคุยกับสมาชิกอื่นๆ ได้ \n\n```Yrole Member``` \nหากไม่พบบทบาทในกับตัวคุณ เมื่อขอไปแล้ว กรุณาแจ้งให้ <@618836889239158785> ทราบนะคะ \n\nขอให้สนุกนะ (/≧▽≦)/"
			};

			message.channel.send({ "embed": sectionA })
			.then(function () {
				message.channel.send({ "embed": sectionAa })
				.then(function () {
					message.channel.send({ "embed": sectionB })
					.then(function () {
						message.channel.send({ "embed": sectionBa })
						.then(function () {
							message.channel.send({ "embed": sectionC })
							.then(function () {
								message.channel.send({ "embed": sectionCa })
								.then(function () {
									message.channel.send("🖌 หากคุณไม่เห็นอะไรในช่องนี้ให้ไปที่ การตั้งค่าผู้ใช้ > ข้อความและรูปภาพ > ดูตัวอย่างลิงก์ (ตรวจสอบให้แน่ใจว่าได้เปิดใช้งานแล้ว)");
								});
							});
						});
					});
				});
			});
		} else {
			message.channel.send("🚫 ขออภัยย...คำสั่งนี้ใช้งานได้เฉพาะเซิร์ฟเวอร์ผู้สร้างเท่านั้นนะคะ");
		}
	} else {
		message.channel.send("🛑 อ่าา...คุณไม่ได้รับอนุญาตให้ใช้อ่ะ ขอโทษนะ");
	}
};

module.exports.help = {
	"name": "welcome",
	"description": "welcome",
	"usage": "Ywelcome",
	"category": "guild",
	"aliases": [""]
};