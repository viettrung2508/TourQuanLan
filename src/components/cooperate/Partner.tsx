import Image from "next/image";

export default function Partner() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="grid grid-cols-4 mt-12">
        <div className="col-span-2">
          <h2>
            "Mong muốn trở thành một phần đóng góp, cùng nhau xây dựng sự gắn
            kết và mang lại thành công bền vững cho tổ chức, doanh nghiệp."
          </h2>
        </div>
        <div className="col-span-2">
          <p>
            Với hành trình 3 năm, Quan Lạn Ecotrip tự hào đã tổ chức thành công
            hàng trăm tour du lịch kết hợp hội nghị, hội thảo, team building, lễ
            kỷ niệm, sự kiện tri ân, và gala dinner tại Quan Lạn cho nhiều tổ
            chức, doanh nghiệp lớn nhỏ trong nước. Chúng tôi luôn nỗ lực mang
            đến những giải pháp tốt nhất, đảm bảo sự hài lòng cao nhất cho khách
            hàng, nhờ vào đội ngũ nhân sự tận tâm, sẵn sàng hỗ trợ khách hàng
            hết mình để tạo nên những trải nghiệm đáng nhớ và trọn vẹn.
          </p>
        </div>
      </div>
      <h1>Cảm ơn quý đối tác đã tin tưởng chúng tôi!</h1>
      <div className="flex justify-between">
        <div className="overflow-hidden rounded-full  w-32 h-32">
          <Image
            src="/test.jpg"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
        <div className="overflow-hidden rounded-full  w-32 h-32">
          <Image
            src="/test.jpg"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
        <div className="overflow-hidden rounded-full  w-32 h-32">
          <Image
            src="/test.jpg"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
        <div className="overflow-hidden rounded-full  w-32 h-32">
          <Image
            src="/test.jpg"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
      </div>
    </div>
  );
}
