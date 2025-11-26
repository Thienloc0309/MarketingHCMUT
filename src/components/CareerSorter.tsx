import { useState } from 'react';
import { Compass, Download, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CareerSorterProps {
  onOpenModal: (context: string) => void;
}

export function CareerSorter({ onOpenModal }: CareerSorterProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      id: 0,
      question: 'Bạn thích làm việc với đối tượng nào nhất?',
      options: [
        { id: 'A', label: 'Mã lệnh & Dữ liệu (Code)', value: 'software', img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400' },
        { id: 'B', label: 'Máy móc & Robot (Mechanical)', value: 'mechanical', img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400' },
        { id: 'C', label: 'Mạch điện & Chip (Electrical)', value: 'electrical', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400' },
        { id: 'D', label: 'Hóa chất & Thí nghiệm (Chemical)', value: 'chemical', img: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400' }
      ]
    },
    {
      id: 1,
      question: 'Khi giải quyết vấn đề, bạn thích cách nào?',
      options: [
        { id: 'A', label: 'Viết thuật toán', value: 'software', img: 'https://images.unsplash.com/photo-1509966756634-9c23dd6e6815?w=400' },
        { id: 'B', label: 'Thiết kế mô hình 3D', value: 'mechanical', img: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400' },
        { id: 'C', label: 'Phân tích mạch điện', value: 'electrical', img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400' },
        { id: 'D', label: 'Thử nghiệm công thức', value: 'chemical', img: 'https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?w=400' }
      ]
    }
  ];

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const getResult = () => {
    const counts = answers.reduce((acc, answer) => {
      acc[answer] = (acc[answer] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const dominant = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];

    const results = {
      software: {
        title: 'CHIẾN BINH AI',
        description: 'Tư duy logic tốt, phù hợp ngành Khoa học máy tính.',
        color: 'from-[#00A8E8] to-[#0056b3]',
        icon: '💻'
      },
      mechanical: {
        title: 'KỸ SƯ CƠ KHÍ',
        description: 'Yêu thích sáng tạo và chế tạo, phù hợp ngành Cơ khí.',
        color: 'from-gray-600 to-gray-800',
        icon: '⚙️'
      },
      electrical: {
        title: 'CHUYÊN GIA ĐIỆN TỬ',
        description: 'Đam mê công nghệ phần cứng, phù hợp ngành Điện - Điện tử.',
        color: 'from-yellow-500 to-orange-600',
        icon: '⚡'
      },
      chemical: {
        title: 'NHÀ HÓA HỌC',
        description: 'Tư duy thực nghiệm tốt, phù hợp ngành Hóa học.',
        color: 'from-green-500 to-emerald-700',
        icon: '🧪'
      }
    };

    return results[dominant as keyof typeof results];
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  return (
    <section id="career-tool" className="py-24 bg-gradient-to-b from-white to-[#F5F7FA]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-[#0056b3] mb-4 text-4xl">
            CAREER SORTER - Trắc nghiệm Chọn ngành
          </h2>
          <p className="text-gray-600 text-xl">
            Khám phá ngành học phù hợp với bạn
          </p>
        </div>

        {!showResult ? (
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 md:p-12 border border-white/40">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Câu {currentQuestion + 1}/{questions.length}</span>
                <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[#00A8E8] to-[#0056b3] transition-all duration-500"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Question */}
            <div className="text-center mb-8">
              <Compass className="w-16 h-16 text-[#00A8E8] mx-auto mb-4" />
              <h3 className="text-2xl text-[#0056b3] mb-2">
                {questions[currentQuestion].question}
              </h3>
            </div>

            {/* Answer Options - Image Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {questions[currentQuestion].options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleAnswer(option.value)}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <div className="aspect-video relative">
                    <ImageWithFallback 
                      src={option.img}
                      alt={option.label}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-white">
                      <div className="text-4xl mb-2">{option.id}</div>
                      <div className="text-lg text-center">{option.label}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 md:p-12 border border-white/40">
            {/* Result Card - RPG Style */}
            {(() => {
              const result = getResult();
              return (
                <div className="text-center">
                  <div className={`bg-gradient-to-br ${result.color} text-white rounded-3xl p-12 mb-8 shadow-2xl transform hover:scale-105 transition-all duration-300`}>
                    <div className="text-8xl mb-6">{result.icon}</div>
                    <div className="text-sm uppercase tracking-wider mb-2 opacity-80">BẠN LÀ:</div>
                    <h3 className="text-4xl mb-4">{result.title}</h3>
                    <p className="text-xl opacity-90">{result.description}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={() => onOpenModal('career-guide')}
                      className="bg-gradient-to-r from-[#F2C94C] to-[#00A8E8] text-white px-8 py-4 rounded-full text-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <Download className="w-5 h-5" />
                      <span>Tải tài liệu nhập môn</span>
                    </button>
                    <button
                      onClick={resetQuiz}
                      className="bg-white border-2 border-[#0056b3] text-[#0056b3] px-8 py-4 rounded-full text-lg hover:bg-[#0056b3] hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <ArrowRight className="w-5 h-5" />
                      <span>Làm lại</span>
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>
        )}
      </div>
    </section>
  );
}
