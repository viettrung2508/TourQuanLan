import { TExperienceBlog, TExperienceTags } from "./interface";

export const EXPERIENCE_TAGS: TExperienceTags = [
  {
    id: '1',
    name: 'Địa danh'
  },
  {
    id: '2',
    name: 'Kinh nghiệm du lịch'
  },
  {
    id: '3',
    name: 'Tin tức'
  }
]

export const EXPERIENCE_BLOG: TExperienceBlog = [
  {
    id: "1",
    overview: {
      title: 'TOP 7 BÃI BIỂN Ở QUAN LẠN - Bãi biển Quan Lạn',
      image: '/experience/quan-lan-detail-1.jpg',
      description: "Bãi Biển Quan Lạn – Thiên Đường Hoang Sơ Giữa Lòng Quảng Ninh",
      tagIds: [EXPERIENCE_TAGS[0]]
    },
    detail: {
      heading: ["TOP 7 BÃI BIỂN Ở QUAN LẠN - ", "Bãi biển Quan Lạn"],
      body: [
        {
          title:
            "Bãi Biển Quan Lạn – Thiên Đường Hoang Sơ Giữa Lòng Quảng Ninh",
          content: [
            {
              text: "Nằm trên đảo Quan Lạn thuộc huyện đảo Vân Đồn, Quảng Ninh, bãi biển Quan Lạn là một trong những điểm đến lý tưởng cho những ai yêu thích thiên nhiên hoang sơ và không gian yên bình. Với bờ cát trắng mịn màng, làn nước trong xanh và khung cảnh thiên nhiên chưa bị tác động nhiều bởi con người, Quan Lạn mang đến một vẻ đẹp bình dị nhưng không kém phần quyến rũ.",
              image: "/experience/quan-lan-detail-1.jpg",
            },
          ],
        },
        {
          title: "Vẻ đẹp hoang sơ và thuần khiết",
          content: [
            {
              text: "Khác với những bãi biển nổi tiếng khác, Quan Lạn vẫn giữ được vẻ hoang sơ vốn có. Bãi biển dài, rộng và ít bị khai thác, với cát trắng trải dài ôm lấy làn nước trong xanh như ngọc bích. Điểm đặc biệt của Quan Lạn là không gian thoáng đãng, ít đông đúc, rất phù hợp cho những chuyến nghỉ dưỡng để tìm lại sự bình yên trong tâm hồn.",
            },
          ],
        },
        {
          title: "Hoạt động thú vị tại Quan Lạn",
          content: [
            {
              text:
                "Du khách đến đây không chỉ được thả mình trong làn nước biển mát lành mà còn có thể tham gia nhiều hoạt động thú vị như:\n\n" +
                "Cắm trại trên bãi biển: Trải nghiệm đêm bên ánh lửa trại, nghe tiếng sóng vỗ rì rào và ngắm nhìn bầu trời đầy sao.\n" +
                "Chèo thuyền kayak: Khám phá những vùng nước xung quanh đảo, hòa mình vào thiên nhiên hoang dã.\n" +
                "Thưởng thức hải sản tươi ngon: Quan Lạn nổi tiếng với các loại hải sản như sá sùng, ngao, cua, và tôm hùm.\n" +
                "Nét văn hóa độc đáo\n" +
                "Bên cạnh những vẻ đẹp tự nhiên, Quan Lạn còn là nơi lưu giữ nhiều giá trị văn hóa đặc sắc. Đình Quan Lạn, một di tích lịch sử lâu đời, là điểm đến không thể bỏ qua, nơi du khách có thể tìm hiểu về truyền thống, lịch sử và phong tục tập quán của người dân nơi đây.",
              image: "/experience/quan-lan-detail-2.jpg",
            },
          ],
        },
        {
          title: "Hành trình đến Quan Lạn",
          content: [
            {
              text:
                "Để đến Quan Lạn, bạn cần di chuyển bằng tàu cao tốc từ cảng Cái Rồng hoặc cảng Hòn Gai. Thời gian di chuyển khoảng 45 phút đến 1 giờ. Cảm giác ngồi trên tàu, vượt qua những ngọn sóng và tận hưởng gió biển mát rượi sẽ là một trải nghiệm thú vị trên hành trình khám phá.\n\n" +
                "Quan Lạn là điểm đến không chỉ dành cho những tâm hồn yêu biển, mà còn cho những ai muốn tìm kiếm sự tĩnh lặng, thư thái giữa thiên nhiên. Hãy một lần đặt chân đến nơi đây, để cảm nhận vẻ đẹp nguyên sơ và mang về những kỷ niệm khó quên.\n\n" +
                "Hẹn gặp bạn tại bãi biển Quan Lạn – nơi đất trời giao hòa trong một bức tranh thiên nhiên hoàn mỹ!",
            },
          ],
        },
      ],
    },
  },
  {
    id: "2",
    overview: {
      title: 'TOP 7 BÃI BIỂN Ở QUAN LẠN - Bãi biển Minh Châu',
      image: "/dji.jpg",
      description: "Bãi Biển Minh Châu – Viên Ngọc Sáng Giữa Lòng Đảo Quan Lạn",
      tagIds: [EXPERIENCE_TAGS[0]]
    },
    detail: {
      heading: ["TOP 7 BÃI BIỂN Ở QUAN LẠN - ", "Bãi biển Minh Châu"],
      body: [
        {
          title: "Bãi Biển Minh Châu – Viên Ngọc Sáng Giữa Lòng Đảo Quan Lạn",
          content: [
            {
              text: "Nằm trên đảo Quan Lạn, thuộc huyện đảo Vân Đồn, tỉnh Quảng Ninh, bãi biển Minh Châu là một trong những điểm đến không thể bỏ qua khi khám phá vẻ đẹp của vịnh Bái Tử Long. Với cát trắng mịn như kem, làn nước biển trong vắt và không gian yên bình, Minh Châu xứng đáng được mệnh danh là “viên ngọc sáng” của vùng biển Đông Bắc Việt Nam.",
              image: "/dji.jpg",
            },
          ],
        },
        {
          title: "Vẻ đẹp hiếm có của Minh Châu",
          content: [
            {
              text: "Bãi biển Minh Châu không chỉ thu hút du khách bởi vẻ đẹp nguyên sơ, mà còn bởi sự khác biệt độc đáo: cát biển ở đây trắng và mịn như lụa, không bám dính chân, tạo cảm giác thoải mái mỗi khi dạo bước. Làn nước biển trong xanh, phản chiếu ánh mặt trời lấp lánh như những viên pha lê, mang đến một khung cảnh bình yên, thoáng đãng nhưng không kém phần thơ mộng.",
            },
          ],
        },
        {
          title: "Trải nghiệm thú vị tại Minh Châu",
          content: [
            {
              text:
                "Du khách đến Minh Châu có thể tận hưởng nhiều hoạt động hấp dẫn:\n" +
                "Tắm biển và nghỉ dưỡng: Làn nước mát lành, không gian yên tĩnh giúp bạn thư giãn và tái tạo năng lượng.\n" +
                "Khám phá rừng trâm: Minh Châu nổi tiếng với rừng trâm cổ thụ hàng trăm năm tuổi, nơi bạn có thể đi bộ dưới bóng cây xanh mát và cảm nhận không khí trong lành.\n" +
                "Chèo thuyền kayak: Trải nghiệm chèo thuyền trên mặt nước phẳng lặng, khám phá vùng biển xung quanh.\n" +
                "Thưởng thức hải sản: Đừng quên thưởng thức các món ăn từ tôm, cua, ghẹ và sá sùng tươi ngon – đặc sản nổi tiếng của Minh Châu.\n" +
                "Không gian nghỉ dưỡng lý tưởng." +
                "Minh Châu không quá đông đúc, giữ được sự tĩnh lặng và gần gũi với thiên nhiên. Các khu nghỉ dưỡng tại đây thường được thiết kế hòa mình vào thiên nhiên, với phong cách mộc mạc nhưng không kém phần tiện nghi, mang đến cho du khách những giây phút nghỉ ngơi thoải mái.\n" +
                "Bãi biển Minh Châu là điểm đến lý tưởng cho những ai muốn thoát khỏi nhịp sống ồn ào của đô thị, tìm kiếm một nơi yên bình để thư giãn và hòa mình vào thiên nhiên. Với vẻ đẹp hoang sơ, không khí trong lành và những trải nghiệm độc đáo, Minh Châu hứa hẹn sẽ để lại trong lòng du khách những ấn tượng khó phai.\n" +
                "Hãy đến Minh Châu – nơi bạn có thể lắng nghe tiếng sóng biển, ngắm nhìn bầu trời trong xanh và tận hưởng những phút giây bình yên đáng nhớ!",
              image: "/dji1.jpg",
            },
          ],
        },
      ],
    },
  },
  {
    id: "3",
    overview: {
      title: 'TOP 7 BÃI BIỂN Ở QUAN LẠN - Bãi tắm tiên',
      image: "/baitamtien.jpg",
      description: "Bãi Tắm Tiên – Nét Hoang Sơ Bí Ẩn Giữa Đảo Quan Lạn",
      tagIds: [EXPERIENCE_TAGS[0]]
    },
    detail: {
      heading: ["TOP 7 BÃI BIỂN Ở QUAN LẠN - ", "Bãi tắm tiên"],
      body: [
        {
          title: "Bãi Tắm Tiên – Nét Hoang Sơ Bí Ẩn Giữa Đảo Quan Lạn",
          content: [
            {
              text: "Ẩn mình giữa vẻ đẹp thiên nhiên hùng vĩ của đảo Quan Lạn, bãi Tắm Tiên là một điểm đến đặc biệt dành cho những tâm hồn yêu thích sự hoang sơ, tĩnh lặng và trải nghiệm sự tự do giữa thiên nhiên. Nằm ở vị trí tách biệt với những bãi biển nổi tiếng như Minh Châu hay Quan Lạn, bãi Tắm Tiên mang đến một không gian nguyên sơ, chưa bị tác động bởi con người, khiến nơi đây trở thành thiên đường bí mật chờ bạn khám phá.",
              image: "/baitamtien.jpg",
            },
          ],
        },
        {
          title: "Vẻ đẹp của sự tĩnh lặng và nguyên sơ",
          content: [
            {
              text: "Bãi Tắm Tiên không có những dấu chân đông đúc hay các khu nghỉ dưỡng cao cấp, mà là một vùng biển hoàn toàn tự nhiên với bờ cát mịn màng, làn nước trong xanh và những khối đá lớn nằm rải rác tạo nên cảnh quan độc đáo. Sóng ở đây dịu êm, hòa quyện cùng tiếng gió nhẹ tạo nên một bản giao hưởng thiên nhiên yên bình, giúp du khách thoát khỏi những ồn ào của cuộc sống thường nhật.",
            },
          ],
        },
        {
          title: "Những trải nghiệm đáng nhớ tại bãi Tắm Tiên",
          content: [
            {
              text:
                "Thả mình giữa thiên nhiên: Với không gian biệt lập và yên tĩnh, du khách có thể thoải mái tận hưởng cảm giác hòa mình trọn vẹn vào biển trời.\n" +
                "Cắm trại ven biển: Đây là địa điểm lý tưởng để dựng lều, đốt lửa trại và tận hưởng một đêm thú vị bên ánh lửa bập bùng cùng bạn bè hoặc người thân.\n" +
                "Check-in với thiên nhiên: Khung cảnh tại bãi Tắm Tiên hoang sơ và lạ mắt, đặc biệt với những tảng đá tự nhiên bên bờ biển, là phông nền hoàn hảo cho những bức ảnh độc đáo.\n" +
                "Khám phá hệ sinh thái biển: Bạn có thể bắt gặp những đàn cá nhỏ bơi lội gần bờ hoặc quan sát các loài sinh vật biển sống trong các hốc đá ven biển.\n" +
                "Lưu ý khi ghé thăm bãi Tắm Tiên\n" +
                "Vì bãi Tắm Tiên chưa phát triển về dịch vụ du lịch, bạn cần chuẩn bị trước các vật dụng cần thiết như đồ ăn, nước uống và dụng cụ cắm trại nếu muốn ở lại lâu. Hãy nhớ giữ gìn vệ sinh môi trường, mang theo rác ra khỏi bãi biển để bảo tồn vẻ đẹp tự nhiên vốn có của nơi đây.",
              image: "/baitamtien1.jpg",
            },
          ],
        },
        {
          title: "Hành trình đến bãi Tắm Tiên",
          content: [
            {
              text: "Từ trung tâm đảo Quan Lạn, bạn có thể thuê xe máy hoặc xe điện để di chuyển đến bãi Tắm Tiên. Quãng đường không quá xa nhưng có một số đoạn đường gồ ghề, nên hãy chuẩn bị một hành trình khám phá đầy thú vị. Bãi Tắm Tiên không chỉ là một địa điểm nghỉ ngơi, mà còn là nơi để bạn lắng nghe và kết nối với thiên nhiên. Với vẻ đẹp hoang sơ và không gian yên bình hiếm có, nơi đây xứng đáng là một điểm đến lý tưởng cho những ai muốn tìm về sự bình yên và tự do tuyệt đối. Hãy để bãi Tắm Tiên mang đến cho bạn những khoảnh khắc thư thái và những kỷ niệm khó quên giữa lòng đảo Quan Lạn xinh đẹp!",
            },
          ],
        },
      ],
    },
  },
  {
    id: "4",
    overview: {
      title: 'TOP 7 BÃI BIỂN Ở QUAN LẠN - Bãi biển Ngọc',
      image: "/bienngoc.jpg",
      description: "Bãi Biển Ngọc – Nơi Thiên Nhiên Hòa Quyện Với Sự Tinh Khiết Tại Đảo Quan Lạn",
      tagIds: [EXPERIENCE_TAGS[0]]
    },
    detail: {
      heading: ["TOP 7 BÃI BIỂN Ở QUAN LẠN - ", "Bãi biển Ngọc"],
      body: [
        {
          title:
            "Bãi Biển Ngọc – Nơi Thiên Nhiên Hòa Quyện Với Sự Tinh Khiết Tại Đảo Quan Lạn",
          content: [
            {
              text: "Ẩn mình trong vẻ đẹp hoang sơ của đảo Quan Lạn, bãi Biển Ngọc là một trong những địa điểm lý tưởng để du khách tận hưởng không gian bình yên, thư giãn hoàn toàn giữa thiên nhiên tuyệt đẹp. Với bờ cát trắng mịn màng, làn nước trong xanh và những dãy núi đá hùng vĩ, bãi Biển Ngọc mang trong mình một vẻ đẹp tựa như viên ngọc quý của vịnh Bái Tử Long.",
              image: "/bienngoc.jpg",
            },
          ],
        },
        {
          title: "Vẻ đẹp nguyên sơ và thanh bình",
          content: [
            {
              text: "Bãi Biển Ngọc nổi bật với làn nước trong vắt, màu xanh ngọc bích, đến nỗi bạn có thể nhìn thấy từng viên đá dưới đáy biển. Những con sóng vỗ nhẹ nhàng vào bờ, tạo nên âm thanh du dương, góp phần mang đến không khí yên bình, thư thái. Bãi cát ở đây trắng tinh, mịn màng và không bị đông đúc, tạo nên một không gian lý tưởng cho những ai muốn tìm kiếm sự tĩnh lặng giữa lòng thiên nhiên hoang sơ.",
            },
          ],
        },
        {
          title: "Trải nghiệm tuyệt vời tại Bãi Biển Ngọc",
          content: [
            {
              text:
                "Tắm biển thư giãn: Nước biển trong veo và ấm áp là lựa chọn lý tưởng để bạn thả mình vào làn sóng, cảm nhận sự thư giãn tuyệt đối.\n" +
                "Khám phá sinh vật biển: Với làn nước trong, bạn có thể dễ dàng chiêm ngưỡng hệ sinh thái biển phong phú, từ các đàn cá nhỏ bơi lội đến những con sao biển tuyệt đẹp trên đá.\n" +
                "Chèo thuyền kayak: Nếu yêu thích thể thao nước, bạn có thể thuê thuyền kayak để khám phá các vùng nước xung quanh, tìm hiểu vẻ đẹp bí ẩn của những khu vực chưa được khai thác.\n" +
                "Chụp ảnh và check-in: Bãi Biển Ngọc không chỉ là nơi thư giãn mà còn là một thiên đường chụp ảnh. Những tảng đá khổng lồ, mặt biển phẳng lặng phản chiếu bầu trời xanh ngát sẽ mang đến những bức ảnh tuyệt vời cho bạn và bạn bè.\n" +
                "Không gian yên tĩnh, gần gũi thiên nhiên\n" +
                "Bãi Biển Ngọc không có các khu resort hay dịch vụ du lịch phát triển mạnh, điều này giúp giữ nguyên vẻ đẹp hoang sơ, mộc mạc của nó. Đây là nơi lý tưởng để cắm trại, tận hưởng không khí trong lành, và tránh xa sự ồn ào, náo nhiệt của thành phố. Bạn có thể mang theo đồ ăn, đồ uống và cắm trại ngay bên bãi biển, ngắm bình minh hay hoàng hôn tuyệt đẹp trên mặt biển.",
            },
          ],
        },
        {
          title: "Hành trình đến Bãi Biển Ngọc",
          content: [
            {
              text:
                "Từ trung tâm đảo Quan Lạn, bạn có thể thuê xe máy hoặc xe điện để di chuyển đến bãi Biển Ngọc. Đoạn đường khá dễ đi, nhưng sẽ thú vị hơn nếu bạn có thể khám phá thêm những con đường nhỏ, qua những khu rừng nhiệt đới xanh mát trên đảo.\n" +
                "Bãi Biển Ngọc là một trong những điểm đến lý tưởng cho những ai tìm kiếm sự bình yên và hoang sơ giữa lòng vịnh Bái Tử Long. Với vẻ đẹp tựa như viên ngọc quý, không gian trong lành và những trải nghiệm thú vị, Bãi Biển Ngọc sẽ để lại trong lòng du khách những kỷ niệm khó phai và là một điểm đến tuyệt vời cho những ai yêu thích thiên nhiên.\n" +
                "Hãy đến Bãi Biển Ngọc – nơi bạn có thể đắm chìm trong vẻ đẹp nguyên sơ và tận hưởng khoảnh khắc bình yên giữa biển trời bao la!",
            },
          ],
        },
      ],
    },
  },
  {
    id: "5",
    overview: {
      title: 'TOP 7 BÃI BIỂN Ở QUAN LẠN - Bãi rùa',
      image: "/bairua.jpg",
      description: "Bãi Rùa – Góc Bình Yên Hoang Sơ Trên Đảo Quan Lạn",
      tagIds: [EXPERIENCE_TAGS[0]]
    },
    detail: {
      heading: ["TOP 7 BÃI BIỂN Ở QUAN LẠN - ", "Bãi rùa"],
      body: [
        {
          title: "Bãi Rùa – Góc Bình Yên Hoang Sơ Trên Đảo Quan Lạn",
          content: [
            {
              text: "Nằm ẩn mình trên đảo Quan Lạn, bãi Rùa là một trong những điểm đến độc đáo, mang vẻ đẹp hoang sơ, yên tĩnh hiếm có. Không sôi động như Minh Châu hay nổi tiếng như Quan Lạn, bãi Rùa thu hút du khách bởi sự mộc mạc, gần gũi với thiên nhiên và không gian thư giãn, lý tưởng để “trốn” khỏi những ồn ào, xô bồ của cuộc sống hiện đại.",
              image: "/bairua.jpg",
            },
          ],
        },
        {
          title: "Vẻ đẹp độc đáo của bãi Rùa",
          content: [
            {
              text:
                "Bãi Rùa mang một nét đẹp riêng biệt với những bờ cát trắng mịn, được bao quanh bởi những khối đá lớn mang hình thù độc đáo, tạo cảm giác như lạc vào một bức tranh thiên nhiên sống động. Làn nước biển trong xanh, phẳng lặng, phản chiếu ánh nắng mặt trời lấp lánh, mang đến cảm giác bình yên.\n" +
                "Cái tên “bãi Rùa” bắt nguồn từ truyền thuyết địa phương về những con rùa biển từng chọn nơi đây làm chỗ trú ẩn và đẻ trứng. Mặc dù ngày nay không còn thấy nhiều rùa biển, nhưng câu chuyện ấy vẫn làm tăng thêm sức hút huyền bí và gắn kết nơi đây với sự nguyên sơ của thiên nhiên.",
            },
          ],
        },
        {
          title: "Trải nghiệm thú vị tại bãi Rùa",
          content: [
            {
              text:
                "Thư giãn giữa thiên nhiên: Bãi Rùa không có sự xuất hiện của các khu du lịch lớn, mang lại không gian riêng tư, tĩnh lặng để du khách thoải mái thả mình vào biển trời.\n" +
                "Cắm trại và ngắm sao: Với khung cảnh yên bình, đây là nơi lý tưởng để cắm trại qua đêm, tận hưởng không khí trong lành và chiêm ngưỡng bầu trời đầy sao.\n" +
                "Khám phá hệ sinh thái biển: Dọc theo những tảng đá ven bờ, bạn có thể tìm thấy nhiều loài sinh vật biển thú vị, như cua, ốc và sao biển.\n" +
                "Check-in cùng khung cảnh thiên nhiên: Những tảng đá kỳ thú và làn nước trong xanh là phông nền tuyệt đẹp để tạo nên những bức ảnh đáng nhớ.\n" +
                "Hành trình đến bãi Rùa\n" +
                "Bãi Rùa nằm ở vị trí khá biệt lập trên đảo Quan Lạn, cách xa các khu đông đúc. Để đến được đây, bạn có thể thuê xe máy hoặc xe điện từ trung tâm đảo, sau đó đi bộ qua một đoạn đường nhỏ xuyên qua rừng cây xanh mát. Chặng đường này sẽ mang đến cho bạn cảm giác như một cuộc phiêu lưu thú vị, trước khi chạm đến thiên đường biển hoang sơ.",
              image: "/bairua1.jpg",
            },
          ],
        },
      ],
    },
  },
  {
    id: "6",
    overview: {
      title: 'TOP 7 BÃI BIỂN Ở QUAN LẠN - Bãi Robinson',
      image: "/robinson.jpg",
      description: "Vẻ đẹp tự nhiên của bãi biển Robinson",
      tagIds: [EXPERIENCE_TAGS[0]]
    },
    detail: {
      heading: ["TOP 7 BÃI BIỂN Ở QUAN LẠN - ", "Bãi Robinson"],
      body: [
        {
          title: "Vẻ đẹp tự nhiên của bãi biển Robinson",
          content: [
            {
              text: "Bãi biển Robinson nổi bật với bờ cát trắng mịn, trải dài bất tận và làn nước biển trong xanh như ngọc. Những con sóng nhẹ nhàng vỗ về bờ cát tạo nên một không gian thư thái, lý tưởng để du khách hòa mình vào thiên nhiên. Điều đặc biệt là khu vực này vẫn giữ được vẻ đẹp nguyên sơ, chưa bị ảnh hưởng bởi các hoạt động du lịch thương mại hóa. Cảnh quan bao quanh còn được tô điểm bởi rừng cây xanh mướt, mang lại không khí trong lành và mát mẻ.",
              image: "/robinson.jpg",
            },
          ],
        },
        {
          title: "Các hoạt động thú vị tại bãi biển Robinson",
          content: [
            {
              text:
                "Đến với bãi biển Robinson, du khách có cơ hội tận hưởng những trải nghiệm đặc biệt mà khó có nơi nào khác mang lại:\n\n" +
                "Tắm biển và thư giãn: Với nước biển sạch và trong, nơi đây là điểm lý tưởng để đắm mình trong làn nước mát hoặc nằm thư giãn trên bãi cát.\n" +
                "Ngắm hoàng hôn: Buổi chiều, cảnh mặt trời lặn tại bãi biển Robinson đẹp đến nao lòng, mang lại khoảnh khắc tuyệt vời cho những ai yêu thích sự lãng mạn." +
                "Cắm trại và đốt lửa trại: Không gian rộng rãi và hoang sơ khiến bãi biển trở thành địa điểm hoàn hảo để tổ chức cắm trại hoặc các buổi tiệc BBQ cùng gia đình và bạn bè.\n" +
                "Khám phá bằng kayak: Du khách có thể chèo thuyền kayak để khám phá các vùng nước xung quanh, tận hưởng vẻ đẹp thiên nhiên từ góc nhìn mới.\n" +
                "Chụp ảnh kỷ niệm: Bãi biển Robinson với cảnh sắc tự nhiên đẹp như tranh là nơi lý tưởng để chụp những bức ảnh lưu giữ kỷ niệm đáng nhớ." +
                "Hướng dẫn di chuyển đến bãi biển Robinson\n" +
                "Từ trung tâm đảo Quan Lạn đến bãi biển Robinson: Bạn có thể thuê xe máy, xe điện hoặc đi bộ để đến bãi biển. Quãng đường không quá xa và khá thú vị." +
                "Vì sao bạn nên đến bãi biển Robinson?\n" +
                "Nếu bạn đang tìm kiếm một địa điểm để “trốn” khỏi sự ồn ào, náo nhiệt của cuộc sống đô thị, bãi biển Robinson chính là lựa chọn lý tưởng. Không chỉ mang lại sự yên bình và gần gũi với thiên nhiên, nơi đây còn giúp bạn tái tạo năng lượng và tận hưởng những khoảnh khắc đáng nhớ bên gia đình và bạn bè.\n" +
                "Hãy thử một lần đặt chân đến bãi biển Robinson để khám phá vẻ đẹp tiềm ẩn của đảo Quan Lạn. Chắc chắn, nơi đây sẽ mang lại cho bạn một kỳ nghỉ trọn vẹn và khó quên.",
            },
          ],
        },
      ],
    },
  },
  {
    id: "7",
    overview: {
      title: 'TOP 7 BÃI BIỂN Ở QUAN LẠN - Bãi đá tình yêu',
      image: "/baidatinhyeu.jpg",
      description: "Bãi Đá Tình Yêu ở Đảo Quan Lạn: Điểm đến lãng mạn giữa thiên nhiên hoang sơ",
      tagIds: [EXPERIENCE_TAGS[0]]
    },
    detail: {
      heading: ["TOP 7 BÃI BIỂN Ở QUAN LẠN - ", "Bãi đá tình yêu"],
      body: [
        {
          title:
            "Bãi Đá Tình Yêu ở Đảo Quan Lạn: Điểm đến lãng mạn giữa thiên nhiên hoang sơ",
          content: [
            {
              text: "Bãi Đá Tình Yêu, một điểm đến nổi tiếng trên đảo Quan Lạn (Quảng Ninh), không chỉ thu hút du khách bởi vẻ đẹp tự nhiên hoang sơ mà còn bởi câu chuyện tình yêu huyền bí gắn liền với tên gọi của nó. Đây là một trong những địa danh không thể bỏ qua khi bạn đến với đảo Quan Lạn, nơi mang lại cho du khách cảm giác bình yên và lãng mạn giữa thiên nhiên hùng vĩ.",
              image: "/baidatinhyeu.jpg",
            },
          ],
        },
        {
          title: "Vẻ đẹp tuyệt vời của Bãi Đá Tình Yêu",
          content: [
            {
              text:
                "Bãi Đá Tình Yêu nằm trên bờ biển phía Đông đảo Quan Lạn, nơi có những tảng đá lớn nhấp nhô trên nền cát vàng mịn màng, tạo thành một cảnh quan kỳ thú. Từ bãi biển, bạn có thể nhìn thấy những khối đá nhấp nhô như những chiếc thuyền đá vươn mình ra biển khơi, sóng vỗ vào bờ tạo ra những âm thanh dịu nhẹ. Mặt nước trong xanh, cùng không gian rộng lớn, mang lại cảm giác thư giãn tuyệt vời cho du khách.\n" +
                "Điều đặc biệt làm nên vẻ đẹp riêng biệt của Bãi Đá Tình Yêu chính là sự kết hợp hài hòa giữa đá, biển và bầu trời. Mỗi tảng đá ở đây có hình thù độc đáo, được sóng gió và thời gian tạo nên những hình dáng tựa như những trái tim, biểu tượng của tình yêu vĩnh cửu.",
            },
          ],
        },
        {
          title: "Lý do không thể bỏ qua Bãi Đá Tình Yêu",
          content: [
            {
              text: "Bãi Đá Tình Yêu không chỉ là một nơi đẹp mắt, mà còn là một không gian đầy cảm xúc, là điểm đến lý tưởng cho những đôi lứa muốn tìm kiếm sự lãng mạn giữa thiên nhiên hùng vĩ. Với cảnh quan hoang sơ, yên bình và không khí trong lành, đây chắc chắn sẽ là một trải nghiệm khó quên đối với những ai yêu thích sự tĩnh lặng và vẻ đẹp của biển đảo.",
            },
          ],
        },
      ],
    },
  },
];
