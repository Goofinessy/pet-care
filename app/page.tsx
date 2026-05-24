import type { ReactNode } from "react";

type Service = {
  title: string;
  description: string;
  icon: ReactNode;
};

type Step = {
  title: string;
  description: string;
  icon: ReactNode;
};

type Package = {
  title: string;
  description: string;
  items: string[];
  price: string;
  image: string;
  alt: string;
  buttonClass?: string;
};

type EnvironmentPhoto = {
  image: string;
  alt: string;
};

const icons = {
  bath: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" aria-hidden="true">
      <path d="M11 24h26l-3 14H14l-3-14Z" />
      <path d="M16 24c0-6 4-10 8-10s8 4 8 10" />
      <path d="M14 18c-2-1-3-3-2-5s4-2 5 0M31 13c2-2 5-2 6 0s0 4-2 5" />
      <path d="M18 31h12" />
    </svg>
  ),
  scissors: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" aria-hidden="true">
      <path d="M15 9l22 30M33 9L11 39" />
      <circle cx="13" cy="11" r="5" />
      <circle cx="35" cy="11" r="5" />
    </svg>
  ),
  leaf: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" aria-hidden="true">
      <path d="M13 31c9-2 15-8 19-18 4 11 1 20-8 23-5 2-9 0-11-5Z" />
      <path d="M18 31c5-4 9-8 12-14" />
      <path d="M33 30l4 4M37 25v5h5" />
    </svg>
  ),
  care: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" aria-hidden="true">
      <path d="M19 34c-5-3-7-8-7-13 0-7 5-12 12-12s12 5 12 12c0 5-3 9-7 13" />
      <path d="M18 21c3 2 9 2 12 0" />
      <path d="M36 31l6 3M36 24h7M35 17l5-4" />
    </svg>
  ),
  car: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" aria-hidden="true">
      <path d="M8 30h32l-3-10H15l-7 10Z" />
      <path d="M16 30a5 5 0 1 0 0 10 5 5 0 0 0 0-10ZM34 30a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z" />
      <path d="M17 20v-6h10l6 6" />
    </svg>
  ),
  heart: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" aria-hidden="true">
      <path d="M24 39s-14-8-14-19c0-5 4-9 9-9 3 0 5 1 5 4 0-3 2-4 5-4 5 0 9 4 9 9 0 11-14 19-14 19Z" />
      <path d="M14 25h7l3-6 5 11 3-5h6" />
    </svg>
  ),
  calendar: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" aria-hidden="true">
      <path d="M12 10h24v30H12z" />
      <path d="M17 6v8M31 6v8M12 18h24" />
      <circle cx="32" cy="34" r="8" />
      <path d="M32 30v5l4 2" />
    </svg>
  ),
  dryer: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" aria-hidden="true">
      <path d="M8 27h20l10-8v18l-10-8H8v-2Z" />
      <path d="M30 22v12" />
      <path d="M13 29c1 6 6 9 12 8" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.1 5.18 2 2 0 0 1 5.1 3h3a2 2 0 0 1 2 1.72c.12.9.32 1.78.59 2.63a2 2 0 0 1-.45 2.11L9 10.7a16 16 0 0 0 4.3 4.3l1.24-1.24a2 2 0 0 1 2.11-.45c.85.27 1.73.47 2.63.59A2 2 0 0 1 22 16.92Z" />
    </svg>
  ),
  mapPin: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  ),
  lock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <path d="M7 10V8a5 5 0 0 1 10 0v2" />
      <rect x="5" y="10" width="14" height="11" rx="2" />
      <path d="M12 15v2" />
    </svg>
  ),
};

const services: Service[] = [
  { title: "温柔洗浴", description: "舒缓清洁，呵护敏感肌肤", icon: icons.bath },
  { title: "造型修剪", description: "专业修剪，展现个性魅力", icon: icons.scissors },
  { title: "皮毛护理", description: "深层滋养，柔顺亮泽", icon: icons.leaf },
  { title: "细致护理", description: "耳道清洁，指甲修剪", icon: icons.care },
  { title: "安心接送", description: "专车接送，安全省心", icon: icons.car },
  { title: "健康关注", description: "皮肤检查，健康建议", icon: icons.heart },
];

const steps: Step[] = [
  { title: "预约沟通", description: "了解需求，确认服务时间", icon: icons.calendar },
  { title: "安心接送", description: "专车接送，全程安心", icon: icons.car },
  { title: "温柔洗浴", description: "舒缓清洁，呵护皮肤", icon: icons.bath },
  { title: "吹干梳理", description: "吹干蓬松，梳理打结", icon: icons.dryer },
  { title: "造型修剪", description: "按需修剪，精致造型", icon: icons.scissors },
  { title: "检查反馈", description: "健康检查，服务反馈", icon: icons.heart },
];

const packages: Package[] = [
  {
    title: "日光基础洗护",
    description: "日常清洁，呵护皮肤",
    items: ["温柔洗浴", "基础吹干", "耳道清洁", "指甲修剪", "肛周清洁"],
    price: "￥198",
    image: "https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?auto=format&fit=crop&w=500&q=84",
    alt: "白色小型犬",
    buttonClass: "btn-green",
  },
  {
    title: "日光精致造型",
    description: "洗护造型，全面焕新",
    items: ["强韧洗浴", "造型修剪", "耳道清洁", "指甲修剪", "皮毛护理"],
    price: "￥358",
    image: "https://images.unsplash.com/photo-1601979031925-424e53b6caaa?auto=format&fit=crop&w=500&q=84",
    alt: "灰色卷毛犬",
  },
  {
    title: "日光奢宠护理",
    description: "深层护理，尊宠体验",
    items: ["深层洗浴", "皮毛护理", "造型修剪", "耳道清洁", "安心接送"],
    price: "￥598",
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=500&q=84",
    alt: "金毛犬",
    buttonClass: "btn-blue",
  },
];

const environmentPhotos: EnvironmentPhoto[] = [
  {
    image: "https://images.unsplash.com/photo-1604176354204-9268737828e4?auto=format&fit=crop&w=760&q=84",
    alt: "明亮整洁的门店前台",
  },
  {
    image: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&w=600&q=84",
    alt: "宠物洗护工作台",
  },
  {
    image: "https://images.unsplash.com/photo-1616627561839-074385245ff6?auto=format&fit=crop&w=600&q=84",
    alt: "玻璃门和绿植装饰的门店入口",
  },
  {
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=600&q=84",
    alt: "舒适等待区",
  },
  {
    image: "https://images.unsplash.com/photo-1628519592419-bf288f08cef5?auto=format&fit=crop&w=600&q=84",
    alt: "整洁护理用品架",
  },
];

function BrandMark() {
  return (
    <svg className="brand-mark" viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <path
        d="M12 37c0-13 8-23 18-23 7 0 11 4 12 11 2-2 5-3 8-3 7 0 12 6 12 14 0 10-8 18-18 18H19c-4 0-7-3-7-7V37Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30 25c-5 5-7 11-8 18M42 25c2 4 2 9 0 13"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path d="M47 38h.1M55 38h.1" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M49 46c2 2 5 2 7 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M18 16l-4-6M24 12l2-7M33 13l5-5" stroke="#f5a623" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="page">
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#top" aria-label="毛绒日光 Pet Spa">
            <BrandMark />
            <span>
              <strong>毛绒日光</strong>
              <span>Pet Spa</span>
            </span>
          </a>
          <nav className="nav" aria-label="主导航">
            <a href="#services">服务</a>
            <a href="#process">流程</a>
            <a href="#packages">套餐</a>
            <a href="#booking">预约</a>
          </nav>
          <a className="btn btn-primary" href="#booking">
            立即预约
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero" aria-label="宠物洗护店介绍">
          <div className="hero-copy">
            <h1>
              让每一次洗护，
              <br />
              都像<span>晒过太阳</span>.
            </h1>
            <p>温柔洗浴、造型修剪、皮毛护理和安心接送，为猫狗准备的一站式洗护体验。</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#booking">
                预约洗护
              </a>
              <a className="btn btn-ghost" href="#packages">
                查看套餐
              </a>
            </div>
          </div>
          <div className="hero-media">
            <img
              src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1500&q=86"
              alt="干净的宠物狗在明亮洗护室内被温柔擦干"
            />
            <div className="hero-card">
              <strong>开放式洗护间</strong>
              <span>全程可沟通，按宠物性格调整节奏。</span>
            </div>
          </div>
        </section>

        <section className="section" id="services">
          <div className="container">
            <div className="section-title">
              <h2>我们的服务</h2>
              <p>从基础清洁到皮毛养护，每一步都使用适合宠物皮肤的温和产品。</p>
            </div>
            <div className="service-grid">
              {services.map((service) => (
                <article className="service" key={service.title}>
                  <div className="icon-shell">{service.icon}</div>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section process" id="process">
          <div className="container">
            <div className="section-title">
              <h2>洗护流程</h2>
              <p>把每次到店拆成清楚的小步骤，让你和宠物都更放心。</p>
            </div>
            <div className="steps">
              {steps.map((step, index) => (
                <article className="step" key={step.title}>
                  <span className="step-num">{index + 1}</span>
                  {step.icon}
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="packages">
          <div className="container">
            <div className="section-title">
              <h2>精选套餐</h2>
              <p>按宠物体型、毛量和护理需求灵活调整，到店前会先确认明细。</p>
            </div>
            <div className="packages">
              {packages.map((item) => (
                <article className="package-card" key={item.title}>
                  <div className="package-copy">
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      <ul>
                        {item.items.map((feature) => (
                          <li key={feature}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="price">
                      {item.price} <small>起</small>
                    </div>
                    <a className={`btn btn-primary ${item.buttonClass ?? ""}`.trim()} href="#booking">
                      选择套餐
                    </a>
                  </div>
                  <div className="package-image">
                    <img src={item.image} alt={item.alt} />
                  </div>
                </article>
              ))}
            </div>
            <p className="package-note">以上价格为小型犬参考价，猫咪及不同体型犬只价格可能有所不同，详情请咨询门店。</p>
          </div>
        </section>

        <section className="section environment" aria-label="精品环境">
          <div className="container">
            <div className="section-title">
              <h2>精品环境</h2>
              <p>明亮、通透、分区清晰，让宠物在更轻松的空间里完成洗护。</p>
            </div>
            <div className="photo-strip">
              {environmentPhotos.map((photo) => (
                <figure key={photo.image}>
                  <img src={photo.image} alt={photo.alt} />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section booking" id="booking">
          <div className="container">
            <div className="booking-panel">
              <div>
                <h2>立即预约</h2>
                <p>给毛孩子一个温暖的日光时刻，我们会在营业时间内尽快联系你确认安排。</p>
                <div className="contact-list">
                  <span>{icons.phone}021-1234 5678</span>
                  <span>{icons.mapPin}上海市徐汇区温润北路（示例）</span>
                  <span>{icons.clock}10:00 - 20:00（周一至周日）</span>
                </div>
              </div>
              <form className="booking-form" action="#" method="get">
                <input className="field" name="petName" placeholder="宠物名字" aria-label="宠物名字" />
                <select className="field" name="petType" aria-label="宠物种类">
                  <option>宠物种类</option>
                  <option>猫咪</option>
                  <option>小型犬</option>
                  <option>中大型犬</option>
                </select>
                <input className="field" name="phone" placeholder="联系电话" aria-label="联系电话" />
                <input className="field" name="date" type="date" aria-label="预约日期" />
                <select className="field" name="service" aria-label="服务需求">
                  <option>服务需求</option>
                  <option>基础洗护</option>
                  <option>精致造型</option>
                  <option>奢宠护理</option>
                </select>
                <input className="field" name="note" placeholder="备注（选填）" aria-label="备注" />
                <button className="btn btn-primary" type="submit">
                  提交预约
                </button>
                <div className="privacy">{icons.lock}我们将妥善保护你的信息，仅用于预约与服务沟通。</div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <span>© 2026 毛绒日光 Pet Spa. 保留所有权利。</span>
          <div className="footer-links">
            <a href="#">隐私政策</a>
            <a href="#">服务条款</a>
            <a href="#booking">关注我们</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
