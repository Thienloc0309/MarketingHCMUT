import { useState } from 'react';
import { X, Shield, Send } from 'lucide-react';

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  context: string;
}

export function LeadCaptureModal({ isOpen, onClose, context }: LeadCaptureModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    school: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Simulate sending data
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', school: '' });
      onClose();
    }, 2000);
  };

  const getContextTitle = () => {
    switch (context) {
      case 'admission-strategy':
        return 'Nhận Bí Kíp Chiến Thuật Tăng Điểm';
      case 'career-roadmap':
        return 'Nhận Lộ Trình Học Tập Chi Tiết';
      case 'career-guide':
        return 'Tải Tài Liệu Nhập Môn';
      default:
        return 'Nhận Tài Liệu Miễn Phí';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden animate-scaleIn">
        {/* Header Gradient */}
        <div className="bg-gradient-to-r from-[#0056b3] to-[#00A8E8] p-8 text-white">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Send className="w-8 h-8" />
            </div>
            <h3 className="text-2xl mb-2">{getContextTitle()}</h3>
            <p className="text-white/90">Gửi kết quả chi tiết về máy bạn</p>
          </div>
        </div>

        {/* Form */}
        <div className="p-8">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-gray-700 mb-2">
                  Họ và Tên <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Nguyễn Văn A"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#00A8E8] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  Số điện thoại / Zalo <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="0912345678"
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#00A8E8]/50 focus:border-[#00A8E8] focus:outline-none transition-colors bg-[#00A8E8]/5"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Chúng tôi sẽ gửi kết quả qua Zalo
                </p>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  Trường THPT <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.school}
                  onChange={(e) => setFormData({ ...formData, school: e.target.value })}
                  placeholder="THPT Lê Hồng Phong"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#00A8E8] focus:outline-none transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#00A8E8] to-[#0056b3] text-white py-4 rounded-xl text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                NHẬN KẾT QUẢ NGAY
              </button>

              <div className="flex items-center justify-center space-x-2 text-gray-500 text-sm">
                <Shield className="w-4 h-4" />
                <span>Cam kết bảo mật thông tin 100%</span>
              </div>
            </form>
          ) : (
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-2xl text-[#0056b3] mb-2">Thành công!</h4>
              <p className="text-gray-600">
                Chúng tôi sẽ gửi tài liệu cho bạn trong vài phút
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
