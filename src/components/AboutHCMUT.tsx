import { useState } from 'react';
import { GraduationCap, Award, Building2, Users, TrendingUp, BookOpen } from 'lucide-react';

export function AboutHCMUT() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, label: 'Giới thiệu', icon: GraduationCap },
    { id: 1, label: 'Thành tựu', icon: Award },
    { id: 2, label: 'Ngành đào tạo', icon: BookOpen },
    { id: 3, label: 'Cơ cấu', icon: Building2 },
    { id: 4, label: 'Cơ hội & Thách thức', icon: TrendingUp },
    { id: 5, label: 'Đời sống SV', icon: Users },
  ];

  return (
    <section id="about-hcmut" className="py-24 bg-gradient-to-b from-white to-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[#0056b3] mb-4 text-4xl md:text-5xl">
            VỀ ĐẠI HỌC BÁCH KHOA - ĐHQG TP.HCM
          </h2>
        </div>

        {/* Vertical Tabs Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Tab Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-[#0056b3] text-white shadow-lg'
                        : 'bg-white/60 text-gray-700 hover:bg-white hover:shadow-md'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3">
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 md:p-12 border border-white/40">
              {activeTab === 0 && <IntroContent />}
              {activeTab === 1 && <AchievementsContent />}
              {activeTab === 2 && <MajorsContent />}
              {activeTab === 3 && <StructureContent />}
              {activeTab === 4 && <OpportunitiesContent />}
              {activeTab === 5 && <StudentLifeContent />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function IntroContent() {
  return (
    <div className="space-y-6">
      <h3 className="text-[#0056b3] text-3xl mb-6">GIỚI THIỆU CHUNG</h3>
      <p className="text-gray-700 leading-relaxed">
        Trường Đại học Bách khoa – Đại học Quốc gia TP. Hồ Chí Minh (HCMUT), thành lập năm 1957, là một trong những trường đại học kỹ thuật hàng đầu Việt Nam. Với lịch sử hơn 65 năm hình thành và phát triển, HCMUT đã trở thành trung tâm đào tạo, nghiên cứu khoa học và chuyển giao công nghệ uy tín, cung cấp nguồn nhân lực chất lượng cao trong các lĩnh vực kỹ thuật, công nghệ, quản lý và môi trường.
      </p>
      
      <div className="bg-[#F5F7FA] rounded-2xl p-6 space-y-3">
        <div className="flex items-start space-x-3">
          <span className="text-[#00A8E8] mt-1">✓</span>
          <p className="text-gray-700">Hơn 26.000 sinh viên đang theo học ở các bậc đại học, sau đại học.</p>
        </div>
        <div className="flex items-start space-x-3">
          <span className="text-[#00A8E8] mt-1">✓</span>
          <p className="text-gray-700">Hơn 1.100 giảng viên, nhà nghiên cứu, trong đó nhiều GS, PGS, TS được đào tạo tại các nước tiên tiến.</p>
        </div>
      </div>

      <div className="border-l-4 border-[#00A8E8] pl-6 py-2">
        <p className="text-gray-700"><span className="text-[#0056b3]">Cơ sở 1</span> tại Quận 10 (trung tâm thành phố).</p>
        <p className="text-gray-700"><span className="text-[#0056b3]">Cơ sở 2</span> tại Khu đô thị ĐHQG TP.HCM, TP. Thủ Đức.</p>
      </div>

      <p className="text-gray-700 leading-relaxed bg-gradient-to-r from-[#00A8E8]/10 to-transparent p-6 rounded-2xl">
        Sinh viên Bách khoa không chỉ được học tập trong môi trường hiện đại – sáng tạo – hội nhập quốc tế mà còn có cơ hội tham gia học bổng, trao đổi, thực tập và khởi nghiệp cùng các tập đoàn, trường đại học hàng đầu thế giới. Với khẩu hiệu "Tiên phong – Sáng tạo – Hội nhập", Đại học Bách khoa – ĐHQG TP.HCM là lựa chọn lý tưởng cho học sinh yêu thích khoa học, kỹ thuật và công nghệ, mong muốn trở thành kỹ sư, nhà nghiên cứu, nhà quản lý trong tương lai.
      </p>
    </div>
  );
}

function AchievementsContent() {
  return (
    <div className="space-y-6">
      <h3 className="text-[#0056b3] text-3xl mb-6">THÀNH TỰU VÀ UY TÍN</h3>
      
      {/* Logos */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {['QS', 'ABET', 'AUN-QA', 'HCERES'].map((logo) => (
          <div key={logo} className="bg-white rounded-xl p-6 shadow-md flex items-center justify-center border-2 border-[#0056b3]/20">
            <span className="text-[#0056b3] text-xl">{logo}</span>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <div className="border-l-4 border-[#F2C94C] pl-6 py-2">
          <h4 className="text-[#0056b3] mb-2">Trường kỹ thuật hàng đầu Việt Nam</h4>
          <p className="text-gray-700">Là trường đại học kỹ thuật – công nghệ lớn nhất phía Nam, đóng vai trò nòng cốt trong hệ thống Đại học Quốc gia TP.HCM.</p>
        </div>

        <div className="border-l-4 border-[#F2C94C] pl-6 py-2">
          <h4 className="text-[#0056b3] mb-2">Xếp hạng quốc tế</h4>
          <p className="text-gray-700">Thuộc Top 170 trường đại học hàng đầu châu Á (QS Asian University Rankings). Nằm trong nhóm đại học kỹ thuật có ảnh hưởng nhất Việt Nam.</p>
        </div>

        <div className="border-l-4 border-[#F2C94C] pl-6 py-2">
          <h4 className="text-[#0056b3] mb-2">Đào tạo nhân lực chất lượng cao</h4>
          <p className="text-gray-700">Hàng chục nghìn kỹ sư, cử nhân, thạc sĩ, tiến sĩ tốt nghiệp đã và đang làm việc tại các tập đoàn lớn trong và ngoài nước như Intel, Samsung, Bosch, Toyota, Unilever, VNPT, Viettel…</p>
        </div>

        <div className="border-l-4 border-[#F2C94C] pl-6 py-2">
          <h4 className="text-[#0056b3] mb-2">Nghiên cứu – khoa học</h4>
          <p className="text-gray-700">HCMUT là nơi khởi nguồn nhiều công trình nghiên cứu khoa học ứng dụng, chuyển giao công nghệ phục vụ phát triển công nghiệp và xã hội.</p>
        </div>

        <div className="border-l-4 border-[#F2C94C] pl-6 py-2">
          <h4 className="text-[#0056b3] mb-2">Thành tích sinh viên</h4>
          <p className="text-gray-700">Nhiều lần vô địch Robocon Việt Nam và châu Á – Thái Bình Dương. Đạt giải cao trong các kỳ thi quốc tế về lập trình, trí tuệ nhân tạo, khởi nghiệp.</p>
        </div>

        <div className="border-l-4 border-[#F2C94C] pl-6 py-2">
          <h4 className="text-[#0056b3] mb-2">Đối tác quốc tế</h4>
          <p className="text-gray-700">Liên kết đào tạo với các trường đại học hàng đầu tại Mỹ, Nhật, Úc, Pháp, Đức…</p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#00A8E8] to-[#0056b3] text-white rounded-2xl p-6 mt-6">
        <p className="text-lg">
          👉 Với những thành tựu trên, Đại học Bách khoa – ĐHQG TP.HCM luôn được xem là địa chỉ tin cậy để học sinh giỏi, yêu thích kỹ thuật và công nghệ lựa chọn cho tương lai.
        </p>
      </div>
    </div>
  );
}

function MajorsContent() {
  const majors = [
    'Khoa học máy tính, Kỹ thuật máy tính',
    'Điện tử viễn thông, Hệ thống nhúng, Tự động hóa',
    'Cơ khí, Cơ điện tử, Kỹ thuật ô tô, Hàng không, Kỹ thuật tàu thủy',
    'Hóa dầu, Công nghệ sinh học, Công nghệ thực phẩm',
    'Kỹ thuật xây dựng, Kiến trúc, Môi trường, Địa chất – dầu khí',
    'Quản lý công nghiệp, Kỹ thuật hệ thống công nghiệp, Logistics'
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-[#0056b3] text-3xl mb-6">CÁC NGÀNH ĐÀO TẠO</h3>
      
      <p className="text-gray-700 text-lg">
        HCMUT hiện đào tạo hơn 60 chương trình đại học, thạc sĩ và tiến sĩ.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {majors.map((major, index) => (
          <div key={index} className="bg-gradient-to-r from-[#F5F7FA] to-white rounded-xl p-5 border-l-4 border-[#00A8E8] hover:shadow-lg transition-all duration-300">
            <div className="flex items-start space-x-3">
              <span className="text-[#0056b3] text-xl mt-1">{index + 1}.</span>
              <p className="text-gray-700">{major}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-[#F2C94C]/20 to-transparent rounded-2xl p-6 mt-6">
        <p className="text-gray-700">
          👉 Ngoài chương trình chuẩn, trường còn có chương trình Chất lượng cao, Tiên tiến, Quốc tế giảng dạy bằng tiếng Anh, chương trình chất lượng cao Việt-Pháp, Việt-Nhật; liên kết với các trường đại học uy tín ở Mỹ, Úc, Nhật, Pháp.
        </p>
      </div>
    </div>
  );
}

function StructureContent() {
  const faculties = [
    'Khoa Cơ khí',
    'Khoa Kỹ thuật Giao thông',
    'Khoa Điện – Điện tử',
    'Khoa Công nghệ thông tin',
    'Khoa Kỹ thuật Hóa học',
    'Khoa Xây dựng',
    'Khoa Quản lý công nghiệp',
    'Khoa Môi trường & Tài nguyên',
    'Khoa Khoa học ứng dụng',
    'Khoa Kỹ thuật Địa chất & Dầu khí',
    'Khoa Khoa học & Kỹ thuật Vật liệu'
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-[#0056b3] text-3xl mb-6">CƠ CẤU TRƯỜNG</h3>
      
      <div className="bg-[#0056b3] text-white rounded-2xl p-6 mb-6">
        <h4 className="text-xl mb-2">Ban giám hiệu</h4>
        <p>Hiệu trưởng & các Phó Hiệu trưởng</p>
      </div>

      <h4 className="text-[#0056b3] text-xl mb-4">Các Khoa</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {faculties.map((faculty, index) => (
          <div 
            key={index} 
            className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border border-[#0056b3]/10"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#00A8E8] rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white">{index + 1}</span>
              </div>
              <span className="text-gray-700">{faculty}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function OpportunitiesContent() {
  return (
    <div className="space-y-6">
      <h3 className="text-[#0056b3] text-3xl mb-6">CƠ HỘI VÀ THÁCH THỨC</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Opportunities */}
        <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 border-2 border-green-200">
          <h4 className="text-green-700 text-2xl mb-4">CƠ HỘI</h4>
          <div className="space-y-3">
            <div className="flex items-start space-x-2">
              <span className="text-green-500 mt-1">✓</span>
              <p className="text-gray-700">Ngôi trường mơ ước: HCMUT là đại học kỹ thuật hàng đầu, sinh viên ra trường được đánh giá cao.</p>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-green-500 mt-1">✓</span>
              <p className="text-gray-700">Nhiều ngành để chọn: từ CNTT, Điện – Điện tử, Cơ khí, Dầu khí, Môi trường đến Kinh tế – Quản lý.</p>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-green-500 mt-1">✓</span>
              <p className="text-gray-700">Phương thức xét tuyển đa dạng: thi tốt nghiệp THPT, đánh giá năng lực ĐHQG, xét học bạ, xét tuyển kết hợp.</p>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-green-500 mt-1">✓</span>
              <p className="text-gray-700">Môi trường học thuật chuẩn quốc tế: kiểm định ABET, AUN-QA, HCERES.</p>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-green-500 mt-1">✓</span>
              <p className="text-gray-700">Cơ hội học bổng và trao đổi quốc tế.</p>
            </div>
          </div>
        </div>

        {/* Challenges */}
        <div className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-6 border-2 border-red-200">
          <h4 className="text-red-700 text-2xl mb-4">THÁCH THỨC</h4>
          <div className="space-y-3">
            <div className="flex items-start space-x-2">
              <span className="text-red-500 mt-1">⚠</span>
              <p className="text-gray-700">Điểm chuẩn rất cao: năm 2025, Khoa học máy tính 85,41; Kỹ thuật máy tính 82,91.</p>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-red-500 mt-1">⚠</span>
              <p className="text-gray-700">Tỉ lệ chọi khốc liệt: Ví dụ ngành Xây dựng (1 chọi 4,77), Dầu khí (1 chọi 4,33), CNTT (1 chọi 2,86).</p>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-red-500 mt-1">⚠</span>
              <p className="text-gray-700">Áp lực cạnh tranh lớn: nhiều bạn giỏi từ các tỉnh khác.</p>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-red-500 mt-1">⚠</span>
              <p className="text-gray-700">Chương trình nặng và đòi hỏi: Toán – Lý – Hóa – Tin phải thật vững.</p>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-red-500 mt-1">⚠</span>
              <p className="text-gray-700">Không dễ để 'sống sót': phải nỗ lực liên tục.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StudentLifeContent() {
  return (
    <div className="space-y-6">
      <h3 className="text-[#0056b3] text-3xl mb-6">ĐỜI SỐNG SINH VIÊN</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-[#00A8E8]/10 to-white rounded-2xl p-6 border border-[#00A8E8]/30">
          <h4 className="text-[#0056b3] text-xl mb-3">Học bổng</h4>
          <p className="text-gray-700">Học bổng tuyển sinh, khuyến khích học tập, doanh nghiệp (Intel, Bosch, Samsung), quốc tế.</p>
        </div>

        <div className="bg-gradient-to-br from-[#F2C94C]/10 to-white rounded-2xl p-6 border border-[#F2C94C]/30">
          <h4 className="text-[#0056b3] text-xl mb-3">Cơ hội học tập – việc làm</h4>
          <p className="text-gray-700">Chương trình liên kết quốc tế, thực tập tại tập đoàn lớn, tỷ lệ việc làm rất cao sau 6 tháng.</p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-6 border border-purple-200">
          <h4 className="text-[#0056b3] text-xl mb-3">Tiềm năng phát triển</h4>
          <p className="text-gray-700">Môi trường học thuật, nghiên cứu, khởi nghiệp. Tham gia Robocon, AI, sáng chế.</p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 border border-green-200">
          <h4 className="text-[#0056b3] text-xl mb-3">Phúc lợi sinh viên</h4>
          <p className="text-gray-700">Ký túc xá ĐHQG hiện đại, Thư viện điện tử, CLB – đoàn hội phong phú.</p>
        </div>
      </div>
    </div>
  );
}
