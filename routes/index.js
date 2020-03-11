var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var data = {
		title: 'Hiếu Small',
		description: "Tôi là một lập trình viên , tôi đã từng được tham gia và làm nhiều dự án website khác nhau , phục vụ nhiều mục đích như marketing , bán hàng hoặc blog . Bạn đang có ý tưởng về website của mình ? - hãy liên hệ ngay với tôi và tôi sẽ xây dựng trang web trong mơ của bạn ^^!.",
		projects: [
			{
				title: "Website Thẩm Mỹ Viện Ngọc Dung",
				topic: "Marketing & Brand",
				link: "https://thammyvienngocdung.com",
				demoImageURL: "/images/project/thammyvienngocdung.png"
			},
			{
				title: "Vòng Quay May Mắn",
				topic: "Minigame",
				link: "https://minigame.thammyvienngocdung.com",
				demoImageURL: "/images/project/vongquaymayman.png"
			}
		]
	};
  	res.render('index', data);
});

module.exports = router;
