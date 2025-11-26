import { useState } from 'react';
import { TrendingUp, Lock, ExternalLink } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface SalaryPredictorProps {
  onOpenModal: (context: string) => void;
}

export function SalaryPredictor({ onOpenModal }: SalaryPredictorProps) {
  const [selectedCareer, setSelectedCareer] = useState('programmer');

  const careerData = {
    programmer: {
      label: 'Lập trình viên',
      data: [
        { year: 'Năm 1', salary: 12 },
        { year: 'Năm 2', salary: 18 },
        { year: 'Năm 3', salary: 25 },
        { year: 'Năm 4', salary: 30 },
        { year: 'Năm 5', salary: 35 }
      ],
      final: '35.000.000',
      color: '#00A8E8'
    },
    pm: {
      label: 'Quản lý dự án',
      data: [
        { year: 'Năm 1', salary: 15 },
        { year: 'Năm 2', salary: 22 },
        { year: 'Năm 3', salary: 30 },
        { year: 'Năm 4', salary: 38 },
        { year: 'Năm 5', salary: 45 }
      ],
      final: '45.000.000',
      color: '#F2C94C'
    },
    ai: {
      label: 'Chuyên gia AI',
      data: [
        { year: 'Năm 1', salary: 18 },
        { year: 'Năm 2', salary: 28 },
        { year: 'Năm 3', salary: 38 },
        { year: 'Năm 4', salary: 48 },
        { year: 'Năm 5', salary: 60 }
      ],
      final: '60.000.000',
      color: '#0056b3'
    }
  };

  const currentData = careerData[selectedCareer as keyof typeof careerData];

  return (
    <section id="salary-tool" className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-[#00A8E8] mb-4 text-4xl">
            SALARY PREDICTOR - Định giá Tương lai
          </h2>
          <p className="text-gray-300 text-xl">
            Dự đoán mức lương IT của bạn sau 5 năm
          </p>
        </div>

        {/* Career Selector Chips */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(careerData).map(([key, value]) => (
            <button
              key={key}
              onClick={() => setSelectedCareer(key)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                selectedCareer === key
                  ? 'bg-gradient-to-r from-[#00A8E8] to-[#0056b3] text-white shadow-lg scale-105'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {value.label}
            </button>
          ))}
        </div>

        {/* Chart Dashboard */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20 mb-8">
          {/* Final Salary Highlight */}
          <div className="flex justify-end mb-6">
            <div className="bg-gradient-to-r from-[#F2C94C] to-[#00A8E8] px-8 py-4 rounded-2xl">
              <div className="text-sm text-white/80">Dự kiến Năm 5</div>
              <div className="text-3xl">{currentData.final} VNĐ/tháng</div>
            </div>
          </div>

          {/* Line Chart */}
          <div className="bg-white/5 rounded-2xl p-6 mb-6">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={currentData.data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                <XAxis dataKey="year" stroke="#ffffff80" />
                <YAxis stroke="#ffffff80" tickFormatter={(value) => `${value}M`} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1f2937', 
                    border: 'none', 
                    borderRadius: '12px',
                    color: '#fff'
                  }}
                  formatter={(value) => [`${value} triệu VNĐ`, 'Lương']}
                />
                <Line 
                  type="monotone" 
                  dataKey="salary" 
                  stroke={currentData.color}
                  strokeWidth={3}
                  dot={{ fill: currentData.color, r: 6 }}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Data Sources */}
          <div className="border-t border-white/20 pt-6">
            <div className="text-sm text-gray-400 mb-2">Nguồn dữ liệu:</div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300">
                <ExternalLink className="w-4 h-4" />
                <span>[1] Báo cáo thị trường IT Việt Nam - TopDev 2024</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <ExternalLink className="w-4 h-4" />
                <span>[2] Khảo sát lương & phúc lợi - VietnamWorks 2024</span>
              </div>
            </div>
          </div>
        </div>

        {/* Lead Magnet - Locked Card */}
        <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
          <div className="filter blur-sm select-none pointer-events-none mb-6">
            <div className="h-4 bg-white/20 rounded w-3/4 mb-3"></div>
            <div className="h-4 bg-white/20 rounded w-full mb-3"></div>
            <div className="h-4 bg-white/20 rounded w-5/6 mb-3"></div>
            <div className="h-4 bg-white/20 rounded w-2/3"></div>
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <Lock className="w-12 h-12 text-[#00A8E8] mb-3" />
            <p className="text-white text-xl mb-4 text-center">
              Nhận lộ trình học tập để đạt mức lương này
            </p>
            <button
              onClick={() => onOpenModal('career-roadmap')}
              className="bg-gradient-to-r from-[#F2C94C] to-[#00A8E8] text-white px-10 py-4 rounded-full text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Gửi lộ trình cho tôi
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
