"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

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

function Icon({ name }: { name: "arrow" | "code" | "layers" | "terminal" | "mail" | "pin" }) {
  const paths = {
    arrow: <><path d="M5 12h13" /><path d="m13 6 6 6-6 6" /></>,
    code: <><path d="m8 9-3 3 3 3" /><path d="m16 9 3 3-3 3" /><path d="m14 5-4 14" /></>,
    layers: <><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5" /><path d="m3 16 9 5 9-5" /></>,
    terminal: <><path d="m4 5 6 7-6 7" /><path d="M12 19h8" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
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
  return <div ref={ref} className={"reveal " + (visible ? "is-visible " : "") + className}>{children}</div>;
}

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
      <div className="scroll-progress" style={{ width: scroll + "%" }} />
      <nav className="site-nav">
        <a className="brand" href="#inicio"><span>AA</span> andriw.dev</a>
        <div className="nav-links"><a href="#sobre">sobre</a><a href="#experiencia">experiência</a><a href="#contato">contato</a></div>
        <a className="nav-availability" href="mailto:andriwamorimsan@gmail.com"><i /> disponível</a>
      </nav>
      <main>
        <section className="hero section-wrap" id="inicio">
          <div className="hero-copy">
            <p className="kicker"><span className="pulse-dot" /> analista de sistemas · manaus, am</p>
            <h1>Construindo<br /><em>soluções</em> que<br />fazem sentido.</h1>
            <p className="hero-lead">Desenvolvedor apaixonado por transformar problemas complexos em experiências digitais simples, úteis e bem construídas.</p>
            <div className="hero-actions"><a className="button button-dark" href="#experiencia">Conheça meu trabalho <Icon name="arrow" /></a><a className="text-link" href="mailto:andriwamorimsan@gmail.com">Vamos conversar <Icon name="arrow" /></a></div>
          </div>
          <div className="hero-art" aria-label="Ilustração vetorial abstrata">
            <div className="art-ring ring-one" /><div className="art-ring ring-two" /><div className="art-core"><Icon name="code" /><span>01</span></div>
            <div className="art-node node-one">API</div><div className="art-node node-two">UI</div><div className="art-node node-three">DB</div>
            <svg className="art-lines" viewBox="0 0 500 500" aria-hidden="true"><path d="M250 250 90 100M250 250 420 145M250 250 410 385M250 250 100 390" /><circle cx="90" cy="100" r="4" /><circle cx="420" cy="145" r="4" /><circle cx="410" cy="385" r="4" /><circle cx="100" cy="390" r="4" /></svg>
            <p className="art-caption">design · código · impacto</p>
          </div>
          <a className="scroll-cue" href="#sobre"><span>scroll para explorar</span><i /></a>
        </section>
        <section className="intro section-wrap" id="sobre">
          <Reveal className="section-label">01 / sobre mim</Reveal>
          <div className="intro-grid">
            <Reveal><h2>Entre o código<br />e as pessoas.</h2></Reveal>
            <Reveal className="intro-text">
              <p>Meu nome é <strong>Andriw Amorim Santarém</strong>. Sou Analista de Sistemas Júnior, com experiência em desenvolvimento web e mobile, suporte técnico, atendimento ao cliente e infraestrutura de TI.</p>
              <p>Minha trajetória combina a criação e manutenção de sistemas com a resolução prática de problemas. Já atuei com manutenção de computadores, instalação e configuração de softwares, abertura e acompanhamento de chamados, geração de relatórios e suporte presencial a usuários.</p>
              <p>Também possuo conhecimento em redes, incluindo auxílio na instalação e crimpagem de cabos, além de experiência administrativa, boa comunicação, organização e relacionamento interpessoal.</p>
              <p>No desenvolvimento, trabalho com Laravel, PHP, JavaScript, Node.js, Spring Boot, Flutter e Dart. Tenho experiência com APIs REST, arquitetura MVC e DDD, MySQL e DB2, Docker, Git/GitLab, CI/CD, atualização de sistemas, diagnóstico de problemas e trabalho em equipe.</p>
              <div className="quick-facts"><span><Icon name="pin" /> Manaus, AM</span><span><Icon name="layers" /> Full-stack & mobile</span><span><Icon name="terminal" /> Suporte & desenvolvimento</span></div>
            </Reveal>
          </div>
        </section>
        <section className="skills section-wrap">
          <Reveal className="section-label">02 / repertório</Reveal>
          <Reveal><div className="section-heading"><h2>Ferramentas para<br /><em>tirar ideias do papel.</em></h2><p>Um repertório construído em projetos reais, do primeiro chamado ao deploy.</p></div></Reveal>
          <div className="skill-grid">{skills.map(([title, text], index) => <Reveal className="skill-card" key={title}><span className="skill-number">0{index + 1}</span><Icon name={index % 2 ? "terminal" : "code"} /><h3>{title}</h3><p>{text}</p></Reveal>)}</div>
        </section>
        <section className="experience section-wrap" id="experiencia">
          <Reveal className="section-label">03 / trajetória</Reveal>
          <Reveal><div className="section-heading"><h2>Experiência que<br /><em>deixa rastro.</em></h2><p>Alguns capítulos da minha jornada profissional em tecnologia.</p></div></Reveal>
          <div className="timeline-site">{experiences.map((experience, index) => <Reveal className="experience-row" key={experience.company}><div className="experience-year">{experience.year}</div><div className="experience-marker"><span>{String(index + 1).padStart(2, "0")}</span></div><article className="experience-card"><p className="company">{experience.company}</p><h3>{experience.role}</h3><p>{experience.text}</p><div className="tag-list">{experience.tags.map(tag => <span key={tag}>{tag}</span>)}</div></article></Reveal>)}</div>
        </section>
        <section className="education section-wrap">
          <Reveal className="section-label">04 / formação</Reveal>
          <div className="education-layout"><Reveal><h2>Aprender é um<br /><em>processo contínuo.</em></h2><p>Conhecimento técnico, curiosidade e prática constante para acompanhar o movimento da tecnologia.</p></Reveal><Reveal className="education-cards"><div><span>2026 — atual</span><h3>Web ACADEMY</h3><p>Extensão · UFAM</p></div><div><span>2022 — 2023</span><h3>Banco de Dados</h3><p>Pós-Graduação · FAMETRO</p></div><div><span>2018 — 2022</span><h3>Análise de Sistemas</h3><p>Bacharelado · FAMETRO</p></div></Reveal></div>
        </section>
        <section className="contact section-wrap" id="contato"><Reveal className="contact-art"><Icon name="mail" /><span>05</span></Reveal><Reveal><p className="section-label">05 / próximo capítulo</p><h2>Tem um desafio<br /><em>em mente?</em></h2><p className="contact-lead">Estou aberto a novas oportunidades e conversas sobre tecnologia, produtos e boas ideias.</p><a className="button button-light" href="mailto:andriwamorimsan@gmail.com">andriwamorimsan@gmail.com <Icon name="arrow" /></a></Reveal></section>
      </main>
      <footer className="site-footer"><span>© 2026 Andriw Amorim Santarém</span><span>feito com Next.js · TypeScript · cuidado</span><a href="#inicio">voltar ao topo ↑</a></footer>
    </>
  );
}
