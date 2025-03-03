// import Image from "next/image";

export default function Tour() {
  return (
    <div className=" relative">
      {/* <Image
        alt=""
        src="/bg.jpg"
        width={1920}
        height={1080}
        className="h-[700px] w-full object-cover"
      /> */}
      {/* <div className="absolute -top-2 flex flex-col items-center h-full justify-center w-full text-white font-bold  ">
        <h1 className="text-5xl">QUAN LẠN ECOTRIP</h1>
        <h2 className="uppercase text-4xl mt-4">
          Tổng quan về tour 3 ngày 2 đêm
        </h2>
      </div> */}
      <div className="bg-[#f8f3ed] rounded-t-3xl -translate-y-5	">
        <div className="mx-20">
          <h1 className="uppercase text-2xl text-[#134f46] ">
            Tổng quan về tour 3 ngày 2 đêm
          </h1>
          <h2 className="font-bold	">
            Ngày 1: Khám Phá Đảo Quan Lạn và Check-in Các Bãi Biển
          </h2>
          <h3>Sáng:</h3>
          <ul className="list-disc ml-8">
            <li>
              7:00 AM – Khởi hành từ đất liền: Xuất phát từ cảng Cái Rồng (Vân
              Đồn), bạn sẽ di chuyển bằng tàu cao tốc hoặc tàu gỗ để đến đảo
              Quan Lạn. Thời gian di chuyển khoảng 1-1.5 giờ.
            </li>
            <li>
              8:30 AM – Đến đảo Quan Lạn: Đến đảo, bạn nhận phòng tại khách sạn
              hoặc homestay. Sau đó, bạn có thể nghỉ ngơi một chút và chuẩn bị
              cho buổi tham quan.
            </li>
          </ul>
          <h3>Trưa:</h3>
          <ul className="list-disc ml-8">
            <li>
              12:00 PM – Ăn trưa tại nhà hàng địa phương: Thưởng thức các món
              hải sản tươi ngon như ghẹ, mực, tôm, ngao, ốc, sá sùng.
            </li>
          </ul>
          <h3>Chiều:</h3>
          <ul className="list-disc ml-8">
            <li>
              2:00 PM – Tham quan Bãi Minh Châu: Bãi biển Minh Châu nổi bật với
              làn nước trong xanh và cát trắng mịn màng. Đây là nơi lý tưởng để
              tắm biển và thư giãn.
            </li>
            <li>
              4:00 PM – Eo Biển Minh Châu: Ghé thăm eo biển với bãi cát trắng,
              không gian yên tĩnh và cảnh sắc hoang sơ, thích hợp để chụp ảnh.
            </li>
            <li>
              5:30 PM – Dạo chơi và ngắm hoàng hôn: Bạn có thể tản bộ trên bãi
              biển, ngắm cảnh hoàng hôn tuyệt đẹp tại Minh Châu.
            </li>
          </ul>
          <h3>Tối:</h3>
          <ul className="list-disc ml-8">
            <li>
              7:30 PM – Dùng bữa tối tại nhà hàng: Thưởng thức các món ăn đặc
              sản của Quan Lạn, đặc biệt là hải sản tươi sống.
            </li>
            <li>
              9:00 PM – Tự do tham quan đêm: Bạn có thể dạo quanh bờ biển hoặc
              tham gia các hoạt động nhẹ nhàng như câu mực đêm (nếu có dịch vụ).
            </li>
          </ul>
          <h2 className="font-bold">
            Ngày 2: Khám Phá Các Địa Điểm Nổi Bật và Trải Nghiệm Hoạt Động Biển
          </h2>
          <h3>Sáng:</h3>
          <ul className="list-disc ml-8">
            <li>
              6:30 AM – Bình minh trên biển: Dậy sớm và ngắm bình minh tại bãi
              biển Minh Châu hoặc Bãi Ngọc.
            </li>
            <li>
              7:30 AM – Ăn sáng: Thưởng thức bữa sáng tại khách sạn hoặc quán ăn
              địa phương.
            </li>
            <li>
              8:30 AM – Tham quan Đồi Vô Cực: Một điểm check-in tuyệt vời với
              cảnh quan thiên nhiên đẹp như tranh vẽ, từ đỉnh đồi, bạn có thể
              nhìn ra toàn cảnh đảo và biển khơi.
            </li>
          </ul>
          <h3>Trưa:</h3>
          <ul className="list-disc ml-8">
            <li>
              12:00 PM – Ăn trưa tại nhà hàng địa phương: Thưởng thức các món
              hải sản tươi ngon như ghẹ, mực, tôm, ngao, ốc, sá sùng.
            </li>
          </ul>
          <h3>Chiều:</h3>
          <ul className="list-disc ml-8">
            <li>
              2:00 PM – Tham quan Bãi Dài: Đây là một bãi biển hoang sơ, ít
              người biết đến và khá vắng vẻ. Bạn sẽ có thời gian thư giãn và tắm
              biển.
            </li>
            <li>
              4:00 PM – Khám phá Dòng Sông 2 Bờ Cát Trắng: Một dòng sông nhỏ với
              bãi cát trắng mịn màng và nước biển trong xanh. Bạn có thể thư
              giãn trên bãi cát hoặc tham gia các hoạt động thú vị như chèo
              thuyền kayak.
            </li>
          </ul>
          <h3>Tối:</h3>
          <ul className="list-disc ml-8">
            <li>
              7:00 PM – Dùng bữa tối tại nhà hàng: Thưởng thức các món ăn đặc
              sản của đảo Quan Lạn, như mực trứng, tôm hùm và các món hải sản
              chế biến tươi ngon.
            </li>
            <li>
              8:30 PM – Tự do dạo chơi: Tận hưởng không khí mát mẻ của biển đêm
              hoặc tham gia các hoạt động giải trí như câu mực đêm hoặc thả đèn
              trời.
            </li>
          </ul>
          <h2 className="font-bold">Ngày 3: Tham Quan và Tiễn Khách</h2>
          <h3>Sáng:</h3>
          <ul className="list-disc ml-8">
            <li>
              7:00 AM – Ăn sáng: Bạn có thể thưởng thức bữa sáng nhẹ tại khách
              sạn.
            </li>
            <li>
              8:00 AM – Tham quan Đền Quan Lạn: Đền thờ thần biển của người dân
              trên đảo, nơi lưu giữ nhiều giá trị văn hóa đặc trưng.
            </li>
            <li>
              9:30 AM – Tham quan Làng Chài Quan Lạn: Khám phá cuộc sống của
              người dân địa phương, tham gia vào các hoạt động đánh bắt hải sản
              và tìm hiểu về nghề truyền thống.
            </li>
          </ul>
          <h3>Trưa:</h3>
          <ul className="list-disc ml-8">
            <li>
              12:00 PM – Ăn trưa: Thưởng thức bữa trưa cuối cùng với các món ăn
              dân dã, giản dị của đảo.
            </li>
            <li>
              1:30 PM – Tiễn khách về đất liền: Sau khi kết thúc chuyến tham
              quan, bạn sẽ trở về cảng Quan Lạn để lên tàu trở lại đất liền.
            </li>
          </ul>
          <h3>Chiều:</h3>
          <ul className="list-disc ml-8">
            <li>
              3:00 PM – Đến đất liền: Kết thúc chuyến du lịch 3 ngày 2 đêm tại
              đảo Quan Lạn.
            </li>
          </ul>
          <h2 className="font-bold">Lưu Ý:</h2>
          <ul className="list-disc ml-8">
            <li>
              Phương tiện di chuyển: Các tàu cao tốc, tàu gỗ hoặc xe máy (sử
              dụng trong đảo) đều là lựa chọn phổ biến để di chuyển.
            </li>
            <li>
              Thời gian tốt nhất: Thời gian từ tháng 5 đến tháng 9 là mùa hè, lý
              tưởng để tham gia các hoạt động biển. Tuy nhiên, nếu bạn muốn
              tránh đông đúc, có thể đi vào mùa thấp điểm (tháng 10 đến tháng
              4).
            </li>
            <li>
              Chú ý mang theo: Kem chống nắng, mũ, kính râm, đồ bơi và các vật
              dụng cá nhân cần thiết khi tắm biển.
            </li>
          </ul>
          <h3>
            Hy vọng lịch trình này sẽ giúp bạn có một chuyến đi thú vị và đầy ấn
            tượng tại đảo Quan Lạn!
          </h3>
        </div>
      </div>
    </div>
  );
}
