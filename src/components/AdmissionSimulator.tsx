import { useState } from 'react';
import { Calculator, Lock } from 'lucide-react';

interface AdmissionSimulatorProps {
  onOpenModal: (context: string) => void;
}

export function AdmissionSimulator({ onOpenModal }: AdmissionSimulatorProps) {
  const [scores, setScores] = useState({
    math: 8.5,
    physics: 8.0,
    chemistry: 7.5
  });
  const [selectedMajor, setSelectedMajor] = useState('computer-science');
  const [showResult, setShowResult] = useState(false);

  const majors = [
    { value: 'computer-science', label: 'Khoa học & Kỹ thuật Máy tính' },
    { value: 'electrical', label: 'Điện - Điện tử - Tự động hóa' },
    { value: 'mechanical', label: 'Cơ khí & Cơ điện tử' },
    { value: 'chemical', label: 'Công nghệ Hóa học & Thực phẩm' },
    { value: 'civil', label: 'Kỹ thuật Xây dựng & Kiến trúc' }
  ];

  const handleAnalyze = () => {
    setShowResult(true);
  };

  const calculateProbability = () => {
    const total = scores.math + scores.physics + scores.chemistry;
    const average = total / 3;
    if (average >= 9) return 95;
    if (average >= 8.5) return 85;
    if (average >= 8) return 70;
    if (average >= 7.5) return 55;
    return 30;
  };

  const probability = calculateProbability();

  return (
    <section id="admission-tool" className="py-24 bg-gradient-to-b from-[#F5F7FA] to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-[#0056b3] mb-4 text-4xl">
            GOAL SIMULATOR - Giả lập Điểm Đậu
          </h2>
          <p className="text-gray-600 text-xl">
            Tính xác suất trúng tuyển dựa trên dữ liệu năm trước
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Area */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 border border-white/40">
            <div className="flex items-center space-x-3 mb-6">
              <Calculator className="w-8 h-8 text-[#00A8E8]" />
              <h3 className="text-[#0056b3] text-2xl">Nhập điểm dự kiến</h3>
            </div>

            {/* Major Selector */}
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Chọn Nhóm Ngành</label>
              <select
                value={selectedMajor}
                onChange={(e) => setSelectedMajor(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#00A8E8] focus:outline-none transition-colors"
              >
                {majors.map((major) => (
                  <option key={major.value} value={major.value}>
                    {major.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Score Sliders */}
            <div className="space-y-6 mb-8">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-gray-700">Toán</label>
                  <span className="text-[#0056b3]">{scores.math.toFixed(1)}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="10"
                  step="0.5"
                  value={scores.math}
                  onChange={(e) => setScores({ ...scores, math: parseFloat(e.target.value) })}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#00A8E8]"
                />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-gray-700">Lý</label>
                  <span className="text-[#0056b3]">{scores.physics.toFixed(1)}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="10"
                  step="0.5"
                  value={scores.physics}
                  onChange={(e) => setScores({ ...scores, physics: parseFloat(e.target.value) })}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#00A8E8]"
                />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-gray-700">Hóa/Anh</label>
                  <span className="text-[#0056b3]">{scores.chemistry.toFixed(1)}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="10"
                  step="0.5"
                  value={scores.chemistry}
                  onChange={(e) => setScores({ ...scores, chemistry: parseFloat(e.target.value) })}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#00A8E8]"
                />
              </div>
            </div>

            <button
              onClick={handleAnalyze}
              className="w-full bg-gradient-to-r from-[#00A8E8] to-[#0056b3] text-white py-4 rounded-xl hover:shadow-xl transition-all duration-300"
            >
              PHÂN TÍCH CƠ HỘI
            </button>
          </div>

          {/* Result Area */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 border border-white/40 flex flex-col items-center justify-center">
            {showResult ? (
              <div className="text-center w-full">
                {/* Gauge Chart */}
                <div className="relative w-64 h-64 mx-auto mb-6">
                  <svg viewBox="0 0 200 200" className="transform -rotate-90">
                    {/* Background circle */}
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      fill="none"
                      stroke="#E5E7EB"
                      strokeWidth="20"
                    />
                    {/* Progress circle */}
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      fill="none"
                      stroke={probability >= 70 ? '#10B981' : probability >= 50 ? '#F59E0B' : '#EF4444'}
                      strokeWidth="20"
                      strokeDasharray={`${(probability / 100) * 502} 502`}
                      strokeLinecap="round"
                      className="transition-all duration-1000"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div>
                      <div className="text-5xl text-[#0056b3] mb-2">{probability}%</div>
                      <div className="text-gray-600">Tỷ lệ đậu</div>
                    </div>
                  </div>
                </div>

                <div className={`text-2xl mb-6 ${
                  probability >= 70 ? 'text-green-600' : probability >= 50 ? 'text-yellow-600' : 'text-red-600'
                }`}>
                  {probability >= 70 ? 'Khả năng cao!' : probability >= 50 ? 'Cơ hội tốt!' : 'Cần cố gắng thêm!'}
                </div>

                {/* Lead Magnet - Blurred Section */}
                <div className="relative bg-gradient-to-r from-[#0056b3]/5 to-[#00A8E8]/5 rounded-2xl p-8 mt-8">
                  <div className="filter blur-sm select-none pointer-events-none">
                    <div className="h-4 bg-gray-300 rounded w-3/4 mb-3"></div>
                    <div className="h-4 bg-gray-300 rounded w-full mb-3"></div>
                    <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                  </div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <Lock className="w-12 h-12 text-[#0056b3] mb-3" />
                    <p className="text-gray-700 mb-4 text-center">
                      Tải bí kíp chiến thuật để tăng điểm số...
                    </p>
                    <button
                      onClick={() => onOpenModal('admission-strategy')}
                      className="bg-gradient-to-r from-[#F2C94C] to-[#00A8E8] text-white px-8 py-3 rounded-full hover:shadow-xl transition-all duration-300"
                    >
                      Mở khóa ngay
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center text-gray-400">
                <Calculator className="w-24 h-24 mx-auto mb-4 opacity-30" />
                <p>Nhập điểm và nhấn "Phân tích" để xem kết quả</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
