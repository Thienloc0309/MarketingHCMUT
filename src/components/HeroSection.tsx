export function HeroSection() {
  const scrollToCareerHub = () => {
    const element = document.getElementById('career-hub');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1720691141256-897cc97bc2d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtJTIwdW5pdmVyc2l0eSUyMGNhbXB1cyUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2NDE3MDI0OHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="HCMUT Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0056b3]/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
        <h1 className="text-white mb-6 text-5xl md:text-7xl">
          ĐỊNH VỊ TƯƠNG LAI - CHINH PHỤC BÁCH KHOA
        </h1>
        <p className="text-white/90 mb-10 text-xl md:text-2xl max-w-4xl mx-auto">
          Nền tảng hướng nghiệp chuyên sâu dành cho Gen Z: Giả lập điểm số, Dự đoán lương và Chọn ngành Kỹ thuật chuẩn xác.
        </p>
        <button 
          onClick={scrollToCareerHub}
          className="bg-gradient-to-r from-[#00A8E8] to-[#0056b3] text-white px-12 py-4 rounded-full text-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
        >
          KHÁM PHÁ NGAY
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/70 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
