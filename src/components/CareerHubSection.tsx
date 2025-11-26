import { Target, TrendingUp, Compass } from 'lucide-react';
import { GlassCard } from './GlassCard';

interface CareerHubSectionProps {
  onOpenModal: (context: string) => void;
}

export function CareerHubSection({ onOpenModal }: CareerHubSectionProps) {
  const scrollToTool = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="career-hub" className="relative py-24 bg-gradient-to-b from-[#F5F7FA] to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #0056b3 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[#0056b3] mb-4 text-4xl md:text-5xl">
            BỘ CÔNG CỤ ĐỊNH HƯỚNG SỰ NGHIỆP
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            Khám phá tiềm năng bản thân cùng HCMUT qua bộ công cụ AI độc quyền
          </p>
        </div>

        {/* Three Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Admission Simulator */}
          <GlassCard>
            <div className="flex flex-col items-center text-center p-8 h-full">
              <div className="w-20 h-20 bg-gradient-to-br from-[#00A8E8] to-[#0056b3] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-[#0056b3] mb-3 text-2xl">
                Giả lập Điểm Đậu
              </h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Tính xác suất trúng tuyển dựa trên dữ liệu năm ngoái.
              </p>
              <button 
                onClick={() => scrollToTool('admission-tool')}
                className="bg-gradient-to-r from-[#00A8E8] to-[#0056b3] text-white px-8 py-3 rounded-full hover:shadow-xl transition-all duration-300"
              >
                Tính ngay
              </button>
            </div>
          </GlassCard>

          {/* Card 2: Salary Predictor */}
          <GlassCard>
            <div className="flex flex-col items-center text-center p-8 h-full">
              <div className="w-20 h-20 bg-gradient-to-br from-[#F2C94C] to-[#00A8E8] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-[#0056b3] mb-3 text-2xl">
                Định giá Tương lai
              </h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Dự đoán mức lương IT của bạn sau 5 năm.
              </p>
              <button 
                onClick={() => scrollToTool('salary-tool')}
                className="bg-gradient-to-r from-[#F2C94C] to-[#00A8E8] text-white px-8 py-3 rounded-full hover:shadow-xl transition-all duration-300"
              >
                Xem lương
              </button>
            </div>
          </GlassCard>

          {/* Card 3: Career Sorter */}
          <GlassCard>
            <div className="flex flex-col items-center text-center p-8 h-full">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0056b3] to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Compass className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-[#0056b3] mb-3 text-2xl">
                Trắc nghiệm Chọn ngành
              </h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Bạn hợp với Phần cứng, Phần mềm hay Mạng?
              </p>
              <button 
                onClick={() => scrollToTool('career-tool')}
                className="bg-gradient-to-r from-[#0056b3] to-purple-600 text-white px-8 py-3 rounded-full hover:shadow-xl transition-all duration-300"
              >
                Khám phá
              </button>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
