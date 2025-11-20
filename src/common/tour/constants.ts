import { TTourBlog, TTourTags } from "./interface";

export const LIST_RANGE_DAY = [
  {
    value: "1-2",
    label: "1-2 Ngày",
  },

  {
    value: "2-3",
    label: "2-3 Ngày",
  },
  {
    value: "3-4",
    label: "3-4 Ngày",
  },
];
export const Tour_TAGS: TTourTags = [
  {
    id: "1",
    name: "Địa danh",
  },
  {
    id: "2",
    name: "Kinh nghiệm du lịch",
  },
  {
    id: "3",
    name: "Tin tức",
  },
];

export const Tour_BLOG: TTourBlog = [
  {
    id: "1",
    overview: {
      title: "2 NGÀY 1 ĐÊM - Khám phá thiên biển đảo Quan Lạn",
      image: "/experience/quan-lan-detail-1.jpg",
      day: "2N1D",
      priceOld: "1.690.000",
      priceNew: "1.320.000",
      tagIds: [
        {
          id: "1",
          name: "Địa danh",
        },
      ],
    },
    detail: {
      heading: ["2 NGÀY 1 ĐÊM - Khám phá thiên biển đảo Quan Lạn"],
      body: [
        {
          title: "Lịch trình",
          content: [
            {
              text: `NGÀY 1: AO TIÊN - QUAN LẠN - MINH CHÂU
  9h30 : Lên tàu Ao Tiên - Minh Châu
  10h30: Xe điện đón khách checkin khách sạn.
  11h30 : Quý khách ăn trưa tại Khách sạn , nghỉ ngơi
  15h: Quý khách checkin eo biển Minh Châu
  Tắm biển và tự do tại bãi biển Minh Châu
  18h30 : xe điện đưa Quý khách di chuyển thưởng thức BBQ tại bãi biển Quan Lạn
  20h30 : HDV đón quý khách tham gia trải nghiệm soi còng gió đêm tại Quan Lạn , thành quả sẽ chế biến ăn đêm tại khách sạn.
  NGÀY 2: ĐỒI VÔ CỰC - QUAN LẠN - AO TIÊN
  6h00 : Quý khách ăn sáng tại khách sạn
  6h40 : Di chuyển checkin đồi vô cực
  8h00 : Tham quan cụm di tích đình chùa 
  9h00 : Checkin bãi biển Quan Lạn
  11h00 : Ăn trưa tại khách sạn
  13h00: Quý khách lên tàu Quan Lạn - Ao tiên khởi hành
  trở về kết thúc hành trình 2N1Đ`,
              image: "",
            },
          ],
        },
        {
          title: "Giá đã bao gồm",
          content: [
            {
              text: `Xe giường nằm khứ hồi
  Vé tàu khứ hồi (chưa bao gồm vé qua cảng)
  Xe điện đưa đón khứ hồi tại cảng về khách sạn
  Chi phí xe máy bao trọn chuyến đi (Bao xăng)
  Khách sạn tiêu chuẩn ở 2 hoặc 4 người`,
              image: "",
            },
          ],
        },
        {
          title: "Giá chưa bao gồm",
          content: [
            {
              text: `Hóa đơn thuế GTGT
  Phụ thu tăng giá vé nếu có sự thay đổi giá vé của các khu du lịch khi chúng tôi chưa kịp điều chỉnh giá dịch vụ trong chương trình và thông báo kịp thời đến Quý khách.
  Đồ uống trong các bữa ăn, trong khách sạn và các chi phí cá nhân khác
  Tiền típ cho lái xe và hướng dẫn viên.`,
              image: "",
            },
          ],
        },
        {
          title: "Chính sách trẻ em",
          content: [
            {
              text: `Trẻ em từ 0 - 4 tuổi: Miễn phí, ăn ngủ chung với bố mẹ. (Hai người lớn chỉ được kèm 01 trẻ em. Từ trẻ em thứ 2 phụ thu 50% người lớn). Phụ thu tiền vé tàu cao tốc khứ hồi 300.000 VNĐ (với trẻ em 2 - 4 tuổi).
  Trẻ em từ: 5 - 10 tuổi: phụ thu 75% combo.
  Trẻ em từ 10 tuổi trở lên: Tính như người lớn.`,
              image: "",
            },
          ],
        },
        {
          title: "Lưu ý",
          content: [
            {
              text: `🎒 Lưu ý khi đi du lịch Quan Lạn:
  ✅ Chuẩn bị kem chống nắng, mũ nón, kính râm để bảo vệ da khi tham gia các hoạt động ngoài trời.
  ✅ Mang theo đồ bơi, khăn tắm, dép đi biển.
  ✅ Nếu muốn khám phá thêm, có thể thuê xe máy để tự do di chuyển trên đảo.
  ✅ Luôn giữ gìn vệ sinh môi trường, không xả rác ra biển.`,
              image: "",
            },
          ],
        },
      ],
    },
  },
];
