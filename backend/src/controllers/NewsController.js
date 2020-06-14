const connection = require("../database/connection");

module.exports = {
  async getNews(req, res) {
    console.log("Get News Request", req.ip);
    return res.send({
      news: [
        {
          id: "1",
          title: "#nhadat #cuchi #tanthonghoi",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
          author: "Nguyen",
          phone: "0981875373",
          content:
            "Lorem ipsum is a pseudo-Latin text used in web design, typography, layout",
          price: 5000000,
          image: [
            "https://images3.alphacoders.com/982/thumb-1920-982034.jpg",
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==",
          ],
          location: {
            name:
              "217 Liêu Bình Hương , ấp Tân Thành ,xã Tân Thông Hội ,huyện Củ Chi , tp. HCM",
            lat: 0,
            long: 0,
          },
          created_at: "2020-05-26T11:00:00Z",
          updated_at: "2020-05-26T12:00:00Z",
        },
        {
          id: "2",
          title: "#nhadat #quan12",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
          author: "Hoang",
          phone: "0123123123",
          content:
            "Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical; it's not genuine, correct, or comprehensible Latin anymore. While lorem ipsum's still resembles classical Latin, it actually has no meaning whatsoever. As Cicero's text doesn't contain the letters K, W, or Z, alien to latin, these, and others are often inserted randomly to mimic the typographic appearence of European languages, as are digraphs not to be found in the original",
          price: 4900000,
          image: [
            "https://images3.alphacoders.com/982/thumb-1920-982034.jpg",
            "https://images3.alphacoders.com/982/thumb-1920-982034.jpg",
          ],
          location: {
            name: "217 Tân Thông Hội",
            lat: 100,
            long: 100,
          },
          created_at: "2020-05-26T11:00:00Z",
          updated_at: "2020-05-26T12:00:00Z",
        },
        {
          id: "3",
          title: "#nhadat #quan12",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
          author: "Vuong",
          phone: "0123123123",
          content:
            "Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical; it's not genuine, correct, or comprehensible Latin anymore. While lorem ipsum's still resembles classical Latin, it actually has no meaning whatsoever. As Cicero's text doesn't contain the letters K, W, or Z, alien to latin, these, and others are often inserted randomly to mimic the typographic appearence of European languages, as are digraphs not to be found in the original",
          price: 100000000,
          image: [],
          location: {
            name: "217 Tân Thông Hội",
            lat: 200,
            long: 200,
          },
          created_at: "2020-05-26T11:00:00Z",
          updated_at: "2020-05-26T12:00:00Z",
        },
        {
          id: "4",
          title: "#nhadat #quan12",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
          author: "Le",
          phone: "0123123123",
          content:
            "Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical; it's not genuine, correct, or comprehensible Latin anymore. While lorem ipsum's still resembles classical Latin, it actually has no meaning whatsoever. As Cicero's text doesn't contain the letters K, W, or Z, alien to latin, these, and others are often inserted randomly to mimic the typographic appearence of European languages, as are digraphs not to be found in the original",
          price: 7000000,
          image: [],
          location: {
            name: "217 Tân Thông Hội",
            lat: 300,
            long: 300,
          },
          created_at: "2020-05-26T11:00:00Z",
          updated_at: "2020-05-26T12:00:00Z",
        },
        {
          id: "5",
          title: "#nhadat #quan12",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
          author: "Hung",
          phone: "0123123123",
          content:
            "Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical; it's not genuine, correct, or comprehensible Latin anymore. While lorem ipsum's still resembles classical Latin, it actually has no meaning whatsoever. As Cicero's text doesn't contain the letters K, W, or Z, alien to latin, these, and others are often inserted randomly to mimic the typographic appearence of European languages, as are digraphs not to be found in the original",
          price: 100000000,
          image: [],
          location: {
            name: "217 Tân Thông Hội",
            lat: 400,
            long: 400,
          },
          created_at: "2020-05-26T11:00:00Z",
          updated_at: "2020-05-26T12:00:00Z",
        },
        {
          id: "6",
          title: "#nhadat #quan12",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
          author: "Anh",
          phone: "0123123123",
          content:
            "Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical; it's not genuine, correct, or comprehensible Latin anymore. While lorem ipsum's still resembles classical Latin, it actually has no meaning whatsoever. As Cicero's text doesn't contain the letters K, W, or Z, alien to latin, these, and others are often inserted randomly to mimic the typographic appearence of European languages, as are digraphs not to be found in the original",
          price: 100000000,
          image: [],
          location: {
            name: "217 Tân Thông Hội",
            lat: 500,
            long: 500,
          },
          created_at: "2020-05-26T11:00:00Z",
          updated_at: "2020-05-26T12:00:00Z",
        },
      ],
    });
  },

  async getNewsByQuery(req, res) {
    var text = req.query.textInput;
    console.log(text);
    // var findData = database.where('id',text).orWhere('author',text).orWhere('' ,text).orWhere('',text).orWhere('',text).get();
    // return res.send({
    //   news : findData
    // })

    return res.send({
      news: [
        /*         
          {
            id: "1",
            title: "#nhadat #cuchi #tanthonghoi",
            avatar:
              "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
            author: "Nguyen",
            phone: "0981875373",
            content:
              "Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical; it's not genuine, correct, or comprehensible Latin anymore. While lorem ipsum's still resembles classical Latin, it actually has no meaning whatsoever. As Cicero's text doesn't contain the letters K, W, or Z, alien to latin, these, and others are often inserted randomly to mimic the typographic appearence of European languages, as are digraphs not to be found in the original",
            price: 100000000,
            image: [
              "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
            ],
            location: {
              name:
                "217 Liêu Bình Hương , ấp Tân Thành ,xã Tân Thông Hội ,huyện Củ Chi , tp. HCM",
              lat: 0,
              long: 0,
            },
            created_at: "2020-05-26T11:00:00Z",
            updated_at: "2020-05-26T12:00:00Z",
          },
          {
            id: "2",
            title: "#nhadat #quan12",
            avatar:
              "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
            author: "Hoang",
            phone: "0123123123",
            content:
              "Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical; it's not genuine, correct, or comprehensible Latin anymore. While lorem ipsum's still resembles classical Latin, it actually has no meaning whatsoever. As Cicero's text doesn't contain the letters K, W, or Z, alien to latin, these, and others are often inserted randomly to mimic the typographic appearence of European languages, as are digraphs not to be found in the original",
            price: 100000000,
            image: [],
            location: {
              name: "217 Tân Thông Hội",
              lat: 100,
              long: 100,
            },
            created_at: "2020-05-26T11:00:00Z",
            updated_at: "2020-05-26T12:00:00Z",
          }, 
        */
      ],
    });
  },
};
