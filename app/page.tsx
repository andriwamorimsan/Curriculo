"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

const phone = "(92) 9 98583-2288";
const phoneHref = "tel:+55929985832288";
const whatsappHref = "https://wa.me/55929985832288?text=Ol%C3%A1%20Andriw%2C%20vim%20pelo%20seu%20portf%C3%B3lio.";

const experiences = [
  { year: "2025", company: "Gao TECH", role: "Analista de Sistemas Júnior", text: "Colaborei no ciclo completo de desenvolvimento de uma solução móvel. Implementei a aplicação em Flutter seguindo uma arquitetura baseada em DDD, organizando o código nas camadas domain, application e infrastructure. No back-end, desenvolvi uma API REST em Laravel.", tags: ["Flutter", "DDD", "Laravel", "API REST"] },
  { year: "2021 — 2024", company: "INTECAM", role: "Analista de Sistemas Júnior", text: "Atuei no ciclo completo de criação e manutenção de sites, sistemas web e aplicativos móveis. Trabalhei com PHP, JavaScript, Node.js, Spring Boot, Dart, Flutter, bancos relacionais e práticas de DevOps.", tags: ["PHP", "Node.js", "MySQL", "Docker", "GitLab"] },
  { year: "2020 — 2021", company: "Secretaria de Estado de Saúde do Amazonas", role: "Estágio", text: "Iniciei o desenvolvimento do sistema PAE utilizando Laravel, MySQL e Docker. Também prestei suporte técnico, realizei atendimento de chamados, geração de relatórios e acompanhamento de demandas de infraestrutura.", tags: ["Laravel", "MySQL", "Docker", "Suporte"] },
  { year: "2019 — 2020", company: "UNIP Ramos Ferreira", role: "Estágio", text: "Responsável pela manutenção da infraestrutura de TI, suporte técnico presencial, instalação e configuração de computadores e softwares, manutenção de equipamentos e organização do laboratório.", tags: ["Infraestrutura", "Hardware", "Atendimento"] },
];

const skills = [
  ["Desenvolvimento", "Laravel · PHP · JavaScript · Node.js · Spring Boot"],
  ["Mobile", "Flutter · Dart · arquitetura DDD"],
  ["Dados & APIs", "MySQL · DB2 · API REST · MVC"],
  ["DevOps", "Docker · Git · GitLab · CI/CD"],
];

const focusAreas = [
  ["01", "Produtos digitais", "Interfaces claras, fluxos consistentes e soluções que fazem sentido para quem usa."],
  ["02", "Sistemas confiáveis", "Código organizado, APIs bem definidas e atenção aos detalhes que sustentam o produto."],
  ["03", "Pessoas & suporte", "Escuta ativa para diagnosticar problemas, comunicar soluções e gerar confiança."],
];

function Icon({ name }: { name: "arrow" | "code" | "layers" | "terminal" | "mail" | "pin" | "phone" | "whatsapp" | "external" }) {
  const paths = {
    arrow: <><path d="M5 12h13" /><path d="m13 6 6 6-6 6" /></>,
    code: <><path d="m8 9-3 3 3 3" /><path d="m16 9 3 3-3 3" /><path d="m14 5-4 14" /></>,
    layers: <><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5" /><path d="m3 16 9 5 9-5" /></>,
    terminal: <><path d="m4 5 6 7-6 7" /><path d="M12 19h8" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    phone: <><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" /></>,
    whatsapp: <><path d="M20 4.5A9.7 9.7 0 0 0 12.08 1C6.7 1 2.32 5.36 2.32 10.75c0 1.72.45 3.4 1.3 4.88L2 21l5.52-1.58a9.77 9.77 0 0 0 4.56 1.13h.01c5.38 0 9.76-4.38 9.76-9.76A9.7 9.7 0 0 0 20 4.5Z" /><path d="M8.2 6.8c.2-.45.42-.46.77-.47h.66c.22 0 .46.08.57.39l.78 1.9c.1.26.06.47-.08.68l-.56.72c-.14.18-.3.37-.13.67.17.3.75 1.23 1.62 1.98 1.12.97 2.06 1.27 2.36 1.41.3.15.47.13.64-.07l.84-.99c.18-.22.37-.18.62-.1l1.84.87c.26.13.43.19.49.3.06.11.06.62-.15 1.2-.21.58-1.22 1.12-1.68 1.16-.43.04-.98.2-3.2-.67-2.68-1.05-4.4-3.76-4.53-3.93-.13-.18-1.08-1.44-1.08-2.74s.68-1.94.83-2.21Z" /></>,
    external: <><path d="M14 3h7v7" /><path d="m10 14 11-11" /><path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" /></>,
  };
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
    }, { threshold: 0.12 });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${visible ? "is-visible" : ""} ${className}`}>{children}</div>;
}

function WindowDots() { return <div className="window-dots" aria-hidden="true"><i /><i /><i /></div>; }

export default function Home() {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScroll(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    update(); window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <>
      <div className="scroll-progress" style={{ width: `${scroll}%` }} />
      <nav className="site-nav">
        <a className="brand" href="#inicio"><span>AA</span><b>andriw</b><small>.dev</small></a>
        <div className="nav-links"><a href="#sobre">sobre</a><a href="#habilidades">stack</a><a href="#experiencia">experiência</a><a href="#contato">contato</a></div>
        <a className="nav-availability" href={whatsappHref} target="_blank" rel="noreferrer"><i /> disponível</a>
      </nav>

      <main>
        <section className="hero section-wrap" id="inicio">
          <div className="hero-copy"><p className="kicker"><span className="pulse-dot" /> analista de sistemas · manaus, am</p><h1>Construindo<br /><em>soluções</em> que<br />fazem sentido.</h1><p className="hero-lead">Desenvolvedor apaixonado por transformar problemas complexos em experiências digitais simples, úteis e bem construídas.</p><div className="hero-actions"><a className="button button-primary" href="#experiencia">Conheça meu trabalho <Icon name="arrow" /></a><a className="text-link" href={whatsappHref} target="_blank" rel="noreferrer">Vamos conversar <Icon name="arrow" /></a></div></div>
          <div className="hero-art" aria-label="Painel visual inspirado em um editor de código"><div className="editor-window"><div className="editor-bar"><WindowDots /><span>andriw.tsx</span><span className="editor-status">● main</span></div><div className="editor-code"><span className="line-number">01</span><code><b className="syntax-purple">const</b> <b className="syntax-blue">developer</b> = &#123;</code><span className="line-number">02</span><code>&nbsp;&nbsp;name: <b className="syntax-green">&quot;Andriw&quot;</b>,</code><span className="line-number">03</span><code>&nbsp;&nbsp;role: <b className="syntax-green">&quot;systems_analyst&quot;</b>,</code><span className="line-number">04</span><code>&nbsp;&nbsp;focus: [<b className="syntax-green">&quot;web&quot;</b>, <b className="syntax-green">&quot;mobile&quot;</b>],</code><span className="line-number">05</span><code>&nbsp;&nbsp;available: <b className="syntax-orange">true</b></code><span className="line-number">06</span><code>&#125;;</code><span className="line-number">07</span><code><b className="syntax-purple">export default</b> developer;</code></div><div className="editor-footer"><span>Ln 7, Col 26</span><span>UTF-8</span><span>TypeScript React</span></div></div><div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" /> </div>
          <a className="scroll-cue" href="#sobre"><span>scroll para explorar</span><i /></a>
        </section>

        <section className="intro section-wrap" id="sobre"><Reveal className="section-label"><span>01</span> / sobre mim</Reveal><div className="intro-grid"><Reveal><h2>Entre o código<br />e as pessoas.</h2></Reveal><Reveal className="intro-text"><p>Meu nome é <strong>Andriw Amorim Santarém</strong>. Sou Analista de Sistemas Júnior, com experiência em desenvolvimento web e mobile, suporte técnico, atendimento ao cliente e infraestrutura de TI.</p><p>Minha trajetória combina a criação e manutenção de sistemas com a resolução prática de problemas. Já atuei com manutenção de computadores, instalação e configuração de softwares, chamados, relatórios e suporte presencial.</p><p>No desenvolvimento, trabalho com Laravel, PHP, JavaScript, Node.js, Spring Boot, Flutter e Dart. Tenho experiência com APIs REST, arquitetura MVC e DDD, MySQL e DB2, Docker, Git/GitLab, CI/CD e trabalho em equipe.</p><div className="quick-facts"><span><Icon name="pin" /> Manaus, AM</span><span><Icon name="layers" /> full-stack & mobile</span><span><Icon name="terminal" /> suporte & desenvolvimento</span></div></Reveal></div></section>

        <section className="focus section-wrap"><Reveal className="section-label"><span>02</span> / como eu trabalho</Reveal><div className="focus-grid">{focusAreas.map(([number, title, text]) => <Reveal className="focus-card" key={number}><span className="focus-number">{number}</span><h3>{title}</h3><p>{text}</p><span className="focus-line" /></Reveal>)}</div></section>

        <section className="skills section-wrap" id="habilidades"><Reveal className="section-label"><span>03</span> / repertório</Reveal><Reveal><div className="section-heading"><h2>Ferramentas para<br /><em>tirar ideias do papel.</em></h2><p>Um repertório construído em projetos reais, do primeiro chamado ao deploy.</p></div></Reveal><div className="skill-grid">{skills.map(([title, text], index) => <Reveal className="skill-card" key={title}><span className="skill-number">0{index + 1}</span><Icon name={index % 2 ? "terminal" : "code"} /><h3>{title}</h3><p>{text}</p></Reveal>)}</div></section>

        <section className="experience section-wrap" id="experiencia"><Reveal className="section-label"><span>04</span> / trajetória</Reveal><Reveal><div className="section-heading"><h2>Experiência que<br /><em>deixa rastro.</em></h2><p>Alguns capítulos da minha jornada profissional em tecnologia.</p></div></Reveal><div className="timeline-site">{experiences.map((experience, index) => <Reveal className="experience-row" key={experience.company}><div className="experience-year">{experience.year}</div><div className="experience-marker"><span>{String(index + 1).padStart(2, "0")}</span></div><article className="experience-card"><p className="company">{experience.company}</p><h3>{experience.role}</h3><p>{experience.text}</p><div className="tag-list">{experience.tags.map(tag => <span key={tag}>{tag}</span>)}</div></article></Reveal>)}</div></section>

        <section className="education section-wrap"><Reveal className="section-label"><span>05</span> / formação</Reveal><div className="education-layout"><Reveal><h2>Aprender é um<br /><em>processo contínuo.</em></h2><p>Conhecimento técnico, curiosidade e prática constante para acompanhar o movimento da tecnologia.</p></Reveal><Reveal className="education-cards"><div><span>2026 — atual</span><h3>Web ACADEMY</h3><p>Extensão · UFAM</p></div><div><span>2022 — 2023</span><h3>Banco de Dados</h3><p>Pós-Graduação · FAMETRO</p></div><div><span>2018 — 2022</span><h3>Análise de Sistemas</h3><p>Bacharelado · FAMETRO</p></div></Reveal></div></section>

        <section className="contact section-wrap" id="contato"><Reveal className="contact-art"><Icon name="terminal" /><span>06</span></Reveal><Reveal className="contact-content"><p className="section-label">06 / próximo capítulo</p><h2>Tem um desafio<br /><em>em mente?</em></h2><p className="contact-lead">Estou aberto a novas oportunidades e conversas sobre tecnologia, produtos e boas ideias.</p><div className="contact-links"><a href="mailto:andriwamorimsan@gmail.com"><Icon name="mail" /><span><small>e-mail</small>andriwamorimsan@gmail.com</span><Icon name="external" /></a><a href={phoneHref}><Icon name="phone" /><span><small>celular</small>{phone}</span><Icon name="external" /></a><a href={whatsappHref} target="_blank" rel="noreferrer"><Icon name="whatsapp" /><span><small>whatsapp</small>falar comigo agora</span><Icon name="external" /></a></div></Reveal></section>
      </main>

      <footer className="site-footer"><span>© 2026 Andriw Amorim Santarém</span><span>feito com Next.js · TypeScript · cuidado</span><a href="#inicio">voltar ao topo ↑</a></footer>
    </>
  );
}
