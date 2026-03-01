'use client';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { Video, PenTool, Layout, Truck, Mail, Facebook, Music, Film, Coffee, Sparkles, Star, Camera } from 'lucide-react';

const Cloud = ({ width, opacity }: { width: number, opacity: number }) => (
  <svg 
    width={width} 
    viewBox="0 0 512 512" 
    xmlns="http://www.w3.org/2000/svg" 
    style={{ opacity, filter: 'drop-shadow(0px 10px 15px rgba(0,0,0,0.05)) blur(1px)' }} 
  >
    <path fill="#ffffff" d="M404.7,185.3c-7.3-64.8-62.4-114.6-128.7-114.6c-49.3,0-92,27.1-113.8,68.2c-11.7-6.2-25.1-9.7-39.2-9.7 c-43.2,0-78.6,33.5-81.8,75.8C18.1,213.9,0,235.1,0,260.6c0,30.3,24.6,54.9,54.9,54.9h374.9c45.4,0,82.2-36.8,82.2-82.2 C512,190.2,462.6,185.3,404.7,185.3z"/>
  </svg>
);

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Parallax Values
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const backgroundX = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const characterY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  const timelineData = [
    {
      date: '03/2025 - Nay',
      title: 'Video Editor & Producer',
      company: 'DỰ ÁN PHÁT TRIỂN THƯƠNG HIỆU CÁ NHÂN',
      description: [
        'Xây dựng Concept: Phối hợp chặt chẽ với nhân vật chính (KOL/Content Creator) để định hình phong cách.',
        'Sản xuất nội dung: Trực tiếp quay chụp và hậu kỳ các video ngắn (tạo điểm nhấn qua hiệu ứng, âm nhạc).',
        'Tối ưu chuyển đổi: Phối hợp xây dựng kịch bản có tính "Viral" và lồng ghép yêu tố Affiliate.'
      ],
      icon: <Video size={20} />
    },
    {
      date: '06/2024 - 01/2025',
      title: 'Affiliate & Video Editor',
      company: 'Công Ty Dịch Vụ Tư Vấn Đào Tạo Phát Triển Logistics Việt Nam',
      description: [
        'Nghiệp vụ xuất nhập khẩu thực hành.',
        'Seeding dịch vụ trong các group FB/Zalo của công ty.',
        'Nhận data khách hàng từ Leader và tìm kiếm khách hàng tiềm năng bằng điện thoại, qua kênh online.',
        'Video Marketing: Edit hình ảnh mockup sản phẩm, hỗ trợ tăng doanh thu bán hàng.'
      ],
      icon: <PenTool size={20} />
    },
    {
      date: '09/2023 - 11/2023',
      title: 'Sales Logistics',
      company: 'CÔNG TY TNHH META',
      description: [
        'Tìm kiếm và tư vấn khách hàng về dịch vụ logistics phù hợp; giới thiệu giải pháp vận chuyển tối ưu qua Zalo, email, Facebook.',
        'Seeding dịch vụ.'
      ],
      icon: <Truck size={20} />
    },
    {
      date: '02/2023 - 08/2023',
      title: 'Thực Tập Sinh Chứng Từ',
      company: 'DAHNAY LOGISTICS VIET NAM',
      description: [
        'Hỗ trợ team trong việc soạn chứng từ, theo dõi đơn hàng, nhập dữ liệu.',
        'Tham gia thực hành và xử lý các yêu cầu khác của cấp trên.',
        'Thực hành tạo booking trên hệ thống Wisecloud.'
      ],
      icon: <Layout size={20} />
    }
  ];

  const skills = [
    { name: 'Video Editing', sub: 'Thành thạo CapCut, cắt ghép mượt mà', icon: <Video size={32} /> },
    { name: 'Design / Mockup', sub: 'Sử dụng Canva Pro linh hoạt', icon: <Layout size={32} /> },
    { name: 'Social Media', sub: 'Seeding, xây dựng kịch bản Viral', icon: <PenTool size={32} /> },
    { name: 'Logistics Basic', sub: 'Tư vấn chứng từ, booking xuất nhập khẩu', icon: <Truck size={32} /> },
  ];

  const hobbies = [
    { name: 'Xem phim', icon: <Film size={24} /> },
    { name: 'Nghe nhạc', icon: <Music size={24} /> },
    { name: 'Pha cà phê thủ công', icon: <Coffee size={24} /> },
    { name: 'Sưu tầm Sound Design', icon: <Video size={24} /> }
  ];

  return (
    <main ref={containerRef}>
      {/* Dynamic Parallax Sky Background Clouds */}
      <motion.div 
        style={{ 
          y: backgroundY, 
          x: backgroundX,
          position: 'fixed', 
          top: 0, 
          left: 0, 
          width: '100vw', 
          height: '150vh', 
          zIndex: -1,
          pointerEvents: 'none'
        }}
      >
        <div style={{ position: 'absolute', top: '10%', left: '5%' }}><Cloud width={200} opacity={0.6} /></div>
        <div style={{ position: 'absolute', top: '25%', right: '10%' }}><Cloud width={300} opacity={0.6} /></div>
        <div style={{ position: 'absolute', top: '45%', left: '-5%' }}><Cloud width={250} opacity={0.4} /></div>
        <div style={{ position: 'absolute', top: '65%', right: '5%' }}><Cloud width={180} opacity={0.5} /></div>
        <div style={{ position: 'absolute', top: '85%', left: '15%' }}><Cloud width={350} opacity={0.6} /></div>
        <div style={{ position: 'absolute', top: '110%', right: '20%' }}><Cloud width={280} opacity={0.7} /></div>
      </motion.div>

      <section className="container hero-section" style={{ minHeight: '100vh', paddingTop: '80px', paddingBottom: '80px' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="glass"
          style={{ padding: '60px 40px', maxWidth: '800px', width: '100%', margin: '0 auto', position: 'relative' }}
        >
          {/* Logo & Headline */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '24px' }}
          >
            <div className="floating-icon" style={{ marginBottom: '20px' }}>
              <Image 
                src="/img-logo/logo-nt-creative.png" 
                alt="Logo NT Creative" 
                width={150} 
                height={150} 
                priority
              />
            </div>
            <h1 className="hero-title" style={{ fontSize: '3rem', margin: 0 }}>Thảo cute Creative</h1>
            <h2 className="hero-subtitle" style={{ marginTop: '8px' }}>Trần Thị Như Thảo • Content Creator</h2>
          </motion.div>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{ color: 'var(--text-light)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}
          >
            Với nền tảng giao tiếp tốt và kinh nghiệm tư vấn khách hàng, tôi mong
            muốn phát triển trong lĩnh vực Social Media. Tôi yêu thích sáng tạo nội
            dung, quan tâm xu hướng mạng xã hội và luôn học hỏi để nâng cao kỹ
            năng truyền thông số.
          </motion.p>

          {/* Character Image & Floating Icons */}
          <motion.div 
            style={{ y: characterY, position: 'relative', marginTop: '60px', height: '600px', display: 'flex', justifyContent: 'center' }}
          >
            <div style={{ position: 'relative', width: '100%', maxWidth: '500px', height: '100%' }}>
              <Image 
                src="/img-logo/nhu-thao-character.png" 
                alt="Như Thảo Character" 
                fill 
                style={{ objectFit: 'contain', zIndex: 10 }} 
              />
              {/* Floating creative icons around the character */}
              <div className="floating-icon delay-1" style={{ position: 'absolute', top: '10%', left: '-15%', color: 'var(--primary-hover)', zIndex: 11 }}>
                <Sparkles size={40} />
              </div>
              <div className="floating-icon delay-2" style={{ position: 'absolute', top: '60%', right: '-10%', color: '#ffb3c1', zIndex: 11 }}>
                <Video size={48} />
              </div>
              <div className="floating-icon delay-3" style={{ position: 'absolute', bottom: '-5%', left: '10%', color: 'var(--primary-hover)', zIndex: 11 }}>
                <Star size={32} />
              </div>
              <div className="floating-icon" style={{ position: 'absolute', top: '-5%', right: '10%', color: '#ff8da1', zIndex: 11 }}>
                <Camera size={36} />
              </div>
              
              {/* Glow Effect behind Character */}
              <div style={{
                position: 'absolute', 
                top: '50%', left: '50%', 
                transform: 'translate(-50%, -50%)', 
                width: '200px', height: '200px', 
                background: 'rgba(255, 196, 203, 0.4)', 
                filter: 'blur(50px)', 
                borderRadius: '50%', 
                zIndex: 0
              }}></div>
            </div>
          </motion.div>

        </motion.div>
      </section>

      <section className="container" style={{ padding: '80px 24px 40px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '20px' }}>Kỹ năng Chuyên Môn</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="skill-card glass"
            >
              <div className="skill-icon">{skill.icon}</div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>{skill.name}</h3>
              <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>{skill.sub}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container timeline-section">
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '60px' }}>Kinh Nghiệm Làm Việc</h2>
        
        <div style={{ position: 'relative' }}>
          {/* Scroll Progress Line */}
          <div className="timeline-line"></div>
          <motion.div className="timeline-line-active" style={{ scaleY, transformOrigin: 'top' }}></motion.div>

          {timelineData.map((item, index) => (
            <div className="timeline-item" key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, type: 'spring' }}
                className="timeline-dot"
              ></motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="timeline-content glass"
              >
                <div className="timeline-date">{item.date}</div>
                <h3 className="timeline-title">{item.title}</h3>
                <div className="timeline-company">
                  <span style={{ color: 'var(--primary-hover)' }}>{item.icon}</span>
                  {item.company}
                </div>
                <div className="timeline-desc">
                  <ul>
                    {item.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      <section className="container footer-section glass" style={{ margin: '60px auto', maxWidth: '800px', borderRadius: '40px' }}>
        <h2 style={{ marginBottom: '30px' }}>Sở Thích Cá Nhân</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', marginBottom: '40px' }}>
          {hobbies.map((hobby, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px', background: 'rgba(255,196,203,0.15)', borderRadius: '30px' }}
            >
              <span style={{ color: 'var(--primary-hover)' }}>{hobby.icon}</span>
              <span style={{ fontWeight: 500 }}>{hobby.name}</span>
            </motion.div>
          ))}
        </div>

        <h2 style={{ marginBottom: '20px' }}>Kết Nối Với Thảo</h2>
        <div className="social-links">
          <a href="mailto:work@thaocute.io.vn" className="social-link" title="Email">
            <Mail size={24} />
          </a>
          <a href="https://thaocute.io.vn/" target="_blank" rel="noreferrer" className="social-link" title="Website">
            <Layout size={24} />
          </a>
          <a href="https://www.facebook.com/NhuThao.1108" target="_blank" rel="noreferrer" className="social-link" title="Facebook">
            <Facebook size={24} />
          </a>
        </div>
        <p style={{ color: 'var(--text-light)' }}>0978 282 548 • Chung cư Sunview, Thủ Đức</p>
      </section>
    </main>
  );
}
