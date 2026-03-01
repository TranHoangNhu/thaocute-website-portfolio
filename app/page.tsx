'use client';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Video, PenTool, Layout, Truck, Mail, Facebook, Music, Film, Coffee } from 'lucide-react';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

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
    <main>
      <section className="container hero-section">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="glass"
          style={{ padding: '40px', maxWidth: '800px', width: '100%', margin: '0 auto' }}
        >
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="hero-title">Trần Thị Như Thảo</h1>
            <h2 className="hero-subtitle">Content Creator / Video Editor</h2>
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
        </motion.div>
      </section>

      <section className="container" style={{ padding: '40px 24px' }}>
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
          <a href="mailto:Nhuthao0501@gmail.com" className="social-link" title="Email">
            <Mail size={24} />
          </a>
          <a href="https://thaocute.io.vn/" target="_blank" rel="noreferrer" className="social-link" title="Website">
            <Layout size={24} />
          </a>
          <a href="#" className="social-link" title="Facebook">
            <Facebook size={24} />
          </a>
        </div>
        <p style={{ color: 'var(--text-light)' }}>0978 282 548 • Chung cư Sunview, Thủ Đức</p>
      </section>
    </main>
  );
}
