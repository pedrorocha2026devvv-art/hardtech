import React from "react";
import { motion, useTransform, useMotionValue, useSpring, AnimatePresence } from "motion/react";
import { NoiseLayer } from "../components/NoiseLayer";
import { ArrowRight, Menu, X, Globe, TrendingUp, MonitorSmartphone, Settings2, Bot, ChevronRight, BarChart2, Search, PenTool, Cpu, BadgeCheck, ShieldCheck, LineChart, Tags } from "lucide-react";
import { useState, useEffect, useRef } from "react";
// React namespace used for RefObject typings in section components
import { useReveal } from "./hooks/useReveal";
import { CustomCursor } from "../components/CustomCursor";
import { MaskRevealText } from "../components/MaskRevealText";
import { Reveal } from "../components/RevealOnScroll";
import { glassStyles } from "../styles/glass";
import { MagneticButton } from "../components/MagneticButton";

const WA_LINK =
  "https://wa.me/5514999999999?text=Ol%C3%A1%2C%20vi%20o%20site%20da%20HardTech%20e%20quero%20um%20diagn%C3%B3stico%20gratuito%20para%20minha%20empresa.";

const WA_LINK_BASE = "https://wa.me/5514999999999?text=";


function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(m.matches);
    const h = () => setReduced(m.matches);
    m.addEventListener("change", h);
    return () => m.removeEventListener("change", h);
  }, []);
  return reduced;
}
import glassObject from "../imports/glass-object.webp";
import logoHardtech from "../imports/horizonta-nobg.png";
import googleAdsLogo from "../imports/google-ads-96dp.png";
import googleAnalyticsLogo from "../imports/google-analytics-96dp.png";
import googleTagManagerLogo from "../imports/google-tag-manager-96dp.png";
import googleSearchAdsLogo from "../imports/google-search-ads-360-96dp.png";
import googleDisplayVideoLogo from "../imports/google-display-and-video-360-96dp.png";
import googlePartnerBadge from "../imports/google-partner-badge.png";

function NavLink({ label, href }: { label: string; href: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300"
      style={{
        color: hovered ? '#0A0A0A' : 'rgba(12, 12, 12, 0.66)',
        background: hovered ? 'rgba(255, 255, 255, 0.55)' : 'transparent',
        boxShadow: hovered 
          ? '0 2px 8px rgba(0,0,0,0.03), inset 0 1px 0 rgba(255,255,255,0.80), inset 0 -1px 2px rgba(0,0,0,0.02)' 
          : 'none',
        border: hovered ? '1px solid rgba(255,255,255,0.45)' : '1px solid transparent',
        transform: hovered ? 'translateY(-1px)' : 'none',
        textDecoration: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        cursor: 'pointer',
        fontWeight: hovered ? 550 : 500,
        letterSpacing: '-0.01em'
      }}
    >
      {label}
    </a>
  );
}

function GlassNavbar({
  navLinks
}: {
  navLinks: { label: string; href: string }[];
}) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navCtaHover, setNavCtaHover] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Body scroll lock quando o drawer estiver aberto
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-[100] px-4 md:px-6 transition-all duration-500 ${
        scrolled ? 'py-2 md:py-2.5' : 'py-3 md:py-4'
      }`}
      style={{
        background: scrolled ? "rgba(247, 248, 242, 0.62)" : "rgba(247, 248, 242, 0.18)",
        backdropFilter: scrolled ? "blur(24px) saturate(1.3)" : "blur(16px) saturate(1.12)",
        WebkitBackdropFilter: scrolled ? "blur(24px) saturate(1.3)" : "blur(16px) saturate(1.12)",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.35)" : "1px solid rgba(255,255,255,0.16)",
        boxShadow: scrolled 
          ? "0 8px 32px rgba(15,23,42,0.04), 0 1px 2px rgba(0,0,0,0.02), inset 0 1px 0 rgba(255,255,255,0.65), inset 0 -1px 0 rgba(0,0,0,0.02)" 
          : "inset 0 1px 0 rgba(255,255,255,0.40)",
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        /* Safe area para iPhones com notch/Dynamic Island */
        paddingTop: "max(12px, env(safe-area-inset-top))",
        paddingLeft: "max(16px, env(safe-area-inset-left))",
        paddingRight: "max(16px, env(safe-area-inset-right))",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <img
          src={logoHardtech}
          alt="HardTech — Tecnologia e Crescimento Digital"
          className={`object-contain transition-all duration-300 ${
            scrolled 
              ? 'h-[22px] md:h-[27px] opacity-92' 
              : 'h-[26px] md:h-[30px] opacity-100'
          }`}
          style={{ width: "auto" }}
        />
        
        {/* Pill central (Desktop) - Premium Glass Acrylic */}
        <nav 
          className="hidden md:flex items-center gap-0.5 rounded-full px-1.5 py-1"
          style={{
            background: scrolled 
              ? 'rgba(255,255,255,0.55)' 
              : 'rgba(255,255,255,0.28)',
            backdropFilter: 'blur(28px) saturate(1.35)',
            WebkitBackdropFilter: 'blur(28px) saturate(1.35)',
            border: scrolled 
              ? '1px solid rgba(255,255,255,0.70)' 
              : '1px solid rgba(255,255,255,0.40)',
            boxShadow: scrolled
              ? '0 6px 28px rgba(0,0,0,0.05), 0 1px 4px rgba(0,0,0,0.02), inset 0 1px 0 rgba(255,255,255,0.85), inset 0 -1px 2px rgba(0,0,0,0.015)'
              : '0 4px 20px rgba(0,0,0,0.025), inset 0 1px 0 rgba(255,255,255,0.65), inset 0 -1px 2px rgba(0,0,0,0.01)',
            transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {navLinks.map(link => (
            <NavLink key={link.href} label={link.label} href={link.href} />
          ))}
        </nav>
        
        {/* CTA (Desktop) - Premium Black Button */}
        <div className="hidden md:block">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setNavCtaHover(true)}
            onMouseLeave={() => setNavCtaHover(false)}
            className="rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300"
            style={{
              background: navCtaHover ? '#A4F729' : '#0C0C0C',
              color: navCtaHover ? '#0a1800' : '#ffffff',
              transform: navCtaHover ? 'translateY(-2px) scale(1.02)' : 'none',
              border: navCtaHover 
                ? '1px solid rgba(164,247,41,0.50)' 
                : '1px solid rgba(255,255,255,0.08)',
              boxShadow: navCtaHover 
                ? '0 12px 32px rgba(164,247,41,0.40), 0 4px 12px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.30)' 
                : '0 6px 20px rgba(12,12,12,0.15), 0 2px 4px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.06)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              letterSpacing: '-0.01em',
            }}
          >
            Diagnóstico gratuito
          </a>
        </div>

        {/* Mobile Menu Button (Mobile) */}
        <div className="block md:hidden">
          <button
            onClick={() => setDrawerOpen((v) => !v)}
            className="flex items-center justify-center"
            style={{
              width: "36px", height: "36px",
              borderRadius: "10px",
              background: drawerOpen ? "rgba(0,0,0,0.06)" : "transparent",
              transition: "background 0.15s ease",
              border: "none",
              cursor: "pointer",
              touchAction: "manipulation"
            }}
            aria-label={drawerOpen ? "Fechar menu" : "Abrir menu"}
          >
            {drawerOpen
              ? <X style={{ width: "17px", height: "17px", color: "#0A0A0A" }} />
              : <Menu style={{ width: "17px", height: "17px", color: "#0A0A0A" }} />
            }
          </button>
        </div>
        
      </div>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 200,
              background: "rgba(20, 25, 20, 0.90)",
              backdropFilter: "blur(40px)",
              WebkitBackdropFilter: "blur(40px)",
              display: "flex",
              flexDirection: "column",
              /* Safe area: respeita notch no topo e home indicator na base */
              padding: "max(24px, env(safe-area-inset-top)) 24px max(40px, env(safe-area-inset-bottom))",
              overflow: "hidden"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} className="flex justify-between items-center w-full">
              <img src={logoHardtech} alt="HardTech — Tecnologia e Crescimento Digital" style={{ height: "26px", filter: "invert(1) brightness(2)" }} />
              <button
                onClick={() => setDrawerOpen(false)}
                style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFF", cursor: "pointer" }}
              >
                <X style={{ width: "20px", height: "20px" }} />
              </button>
            </div>
            
            {/* Massive links with Stagger Reveal */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: "2vh", marginTop: "20px" }}>
              {navLinks.map((link, i) => (
                <div key={link.label} style={{ overflow: "hidden" }}>
                  <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    exit={{ y: "100%" }}
                    transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setDrawerOpen(false)}
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "12vw",
                        fontWeight: 800,
                        color: "#FFFFFF",
                        textDecoration: "none",
                        lineHeight: 1.1,
                        letterSpacing: "-0.04em",
                        display: "block",
                        touchAction: "manipulation",
                        WebkitTapHighlightColor: "transparent",
                      }}
                    >
                      {link.label}
                    </a>
                  </motion.div>
                </div>
              ))}
              
              {/* CTA Link */}
              <div style={{ overflow: "hidden", marginTop: "2vh" }}>
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  exit={{ y: "100%" }}
                  transition={{ duration: 0.6, delay: 0.1 + navLinks.length * 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                  <a
                    href={WA_LINK}
                    onClick={() => setDrawerOpen(false)}
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "12vw",
                      fontWeight: 800,
                      color: "#A4F729",
                      textDecoration: "none",
                      lineHeight: 1.1,
                      letterSpacing: "-0.04em",
                      display: "block",
                      touchAction: "manipulation",
                      WebkitTapHighlightColor: "transparent",
                    }}
                  >
                    Diagnóstico Gratuito
                  </a>
                </motion.div>
              </div>
            </div>

            {/* Editorial Footer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{ marginTop: "auto", paddingTop: "32px", borderTop: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.5)" }}
            >
              <div style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "12px", color: "#A4F729", fontWeight: 600 }}>Contato</div>
              <a href={WA_LINK} style={{ color: "#FFF", textDecoration: "none", fontSize: "18px", fontWeight: 500, display: "block", marginBottom: "6px" }}>+55 14 9999-9999</a>
              <a href="mailto:contato@hardtech.com.br" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: "15px" }}>contato@hardtech.com.br</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

type Service = {
  title: string;
  description: string;
  Icon: typeof Globe;
  className?: string;
  scale?: number;
  cardOpacity?: number;
  depthZ?: number;
  strongShadow?: boolean;
  };

function FloatingServiceCard({
  title,
  description,
  Icon,
  className = "",
  index = 0,
  variant = "absolute",
  scale = 1,
  cardOpacity = 1,
  depthZ = 20,
  strongShadow = false,
  suppressIdleMotion = false
}: Service & { index?: number; variant?: "absolute" | "static"; suppressIdleMotion?: boolean }) {
  const reduced = useReducedMotion();
  const [hover, setHover] = useState(false);
  const positioning = variant === "absolute" ? "absolute hidden md:block" : "relative w-full";
  const restOpacity = variant === "absolute" ? cardOpacity : 1;
  // Cards mais ao fundo recebem blur mais forte e brilho menor (sensação de camadas)
  const isBack = cardOpacity < 0.9;

  const targetScale = scale;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale }}
      animate={
        variant === "absolute" && !reduced && !suppressIdleMotion
          ? hover
            ? { opacity: restOpacity, y: -4, scale: targetScale }
            : { opacity: restOpacity, y: [0, -5, 0], scale: targetScale }
          : { opacity: restOpacity, y: hover ? -4 : 0, scale: targetScale }
      }
      transition={
        variant === "absolute" && !reduced && !suppressIdleMotion && !hover
          ? {
              opacity: { duration: 0.6, delay: 0.35 + index * 0.10, ease: [0.16, 1, 0.3, 1] },
              y: {
                duration: 3.5 + index * 0.4,
                repeat: Infinity,
                ease: "easeInOut"
              },
              scale: { duration: 0.35, ease: [0.16, 1, 0.3, 1] }
            }
          : { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
      }
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      className={`glass-card glass-card-shimmer service-card-hover ${positioning} ${className}`}
      style={{
        borderRadius: "16px",
        padding: "13px 17px",
        minWidth: variant === "absolute" ? "168px" : "0px",
        maxWidth: variant === "absolute" ? "204px" : "none",
        transformOrigin: "center",
        zIndex: hover ? 40 : depthZ,
        background: hover 
          ? "rgba(255,255,255,0.52)" 
          : isBack ? "rgba(255,255,255,0.22)" : "rgba(255,255,255,0.30)",
        backdropFilter: isBack ? "blur(22px) saturate(1.15)" : "blur(16px) saturate(1.2)",
        WebkitBackdropFilter: isBack ? "blur(22px) saturate(1.15)" : "blur(16px) saturate(1.2)",
        border: hover 
          ? "1px solid rgba(255,255,255,0.68)" 
          : isBack ? "1px solid rgba(255,255,255,0.30)" : "1px solid rgba(255,255,255,0.40)",
        boxShadow: hover 
          ? "0 24px 56px rgba(12,12,12,0.14), 0 4px 12px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.72), inset 0 -1px 2px rgba(0,0,0,0.02)" 
          : isBack
            ? "0 6px 18px rgba(12,12,12,0.04), inset 0 1px 0 rgba(255,255,255,0.45)"
            : strongShadow
              ? "0 22px 50px rgba(12,12,12,0.13), 0 6px 16px rgba(12,12,12,0.07), inset 0 1px 0 rgba(255,255,255,0.62), inset 0 -1px 2px rgba(0,0,0,0.02)"
              : "0 14px 36px rgba(12,12,12,0.09), 0 2px 6px rgba(0,0,0,0.03), inset 0 1px 0 rgba(255,255,255,0.60), inset 0 -1px 2px rgba(0,0,0,0.01)",
        transition: "background 0.35s cubic-bezier(0.16, 1, 0.3, 1), border 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
        color: "#111111",
        position: "relative" as const,
        overflow: "hidden"
      }}
    >
      {/* Top gloss highlight */}
      <div
        className="pointer-events-none absolute"
        style={{
          top: 0, left: "10%", right: "10%", height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.70), transparent)"
        }}
      />
      {/* Inner gradient highlight */}
      <div
        className="pointer-events-none absolute"
        style={{
          inset: 0,
          background: "linear-gradient(180deg, rgba(255,255,255,0.26) 0%, transparent 48%)",
          borderRadius: "inherit",
          pointerEvents: "none"
        }}
      />

      <div className="relative flex items-center gap-2.5">
        <div
          className="service-icon-wrap flex items-center justify-center flex-shrink-0"
          style={{
            width: "28px",
            height: "28px",
            borderRadius: "8px",
            background: "rgba(255,255,255,0.75)",
            border: "1px solid rgba(255,255,255,0.9)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,1), 0 1px 3px rgba(0,0,0,0.05)"
          }}
        >
          <Icon style={{ width: "13px", height: "13px", color: "#1A1A1A" }} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 mb-0.5">
            <span
              style={{
                width: "7px", height: "7px", borderRadius: "50%",
                background: "#A4F729",
                boxShadow: "0 0 6px rgba(164,247,41,0.7), 0 0 0 3px rgba(164,247,41,0.20)",
                flexShrink: 0,
                animation: "pulse-green 2s ease-in-out infinite"
              }}
            />
            <span style={{
              fontSize: "13px",
              fontWeight: 600,
              color: "#09090B",
              letterSpacing: "-0.015em",
              lineHeight: 1.2
            }}>
              {title}
            </span>
          </div>
          <p style={{ fontSize: "11.5px", lineHeight: 1.3, color: "rgba(10,10,10,0.64)", margin: 0 }}>
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Features Strip ────────────────────────────────────────────
function FeaturesStrip({ benefits }: { benefits: { title: string; desc: string; icon: typeof Globe }[] }) {
  const ref = useReveal(80) as React.RefObject<HTMLDivElement>;
  return (
    <div ref={ref} className="hidden lg:block" style={{ padding: "0 40px 32px", maxWidth: "1280px", margin: "0 auto" }}>
      <div style={{ borderTop: "1px solid rgba(12,12,12,0.06)", marginBottom: "24px" }} />
      <div
        className="glass-features"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          ...glassStyles.heavy,
          borderRadius: "20px",
          padding: "24px 32px",
          position: "relative" as const,
          overflow: "hidden"
        }}
      >
        {/* top gloss */}
        <div className="pointer-events-none absolute" style={{ top: 0, left: "8%", right: "8%", height: "1px", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.95), transparent)" }} />
        {benefits.map((b, idx) => (
          <React.Fragment key={b.title}>
            {idx > 0 && (
              <div style={{ width: '1px', background: 'rgba(12,12,12,0.06)', alignSelf: 'stretch' }} />
            )}
            <div
              className="reveal"
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "14px",
                padding: "0 20px",
                flex: 1
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, borderRadius: "10px", background: "rgba(164,247,41,0.10)", padding: "8px" }}>
                <b.icon style={{ width: "15px", height: "15px", color: "#2D4A0E" }} />
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: "13.5px", letterSpacing: "-0.02em", color: "#0C0C0C", marginBottom: "3px" }}>{b.title}</div>
                <div style={{ fontSize: "12.5px", color: "rgba(0,0,0,0.50)", lineHeight: 1.55 }}>{b.desc}</div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

type PartnershipItem = {
  id: string;
  name: string;
  subtitle: string;
  Icon: typeof BadgeCheck;
  logoSrc?: string;
  logoAlt?: string;
};

const PARTNERSHIP_ITEMS: PartnershipItem[] = [
  { id: "google-partner", name: "Google Partner", subtitle: "Parceiro oficial", Icon: BadgeCheck, logoSrc: googlePartnerBadge, logoAlt: "Badge Google Partner" },
  { id: "google-ads", name: "Google Ads", subtitle: "Certificado", Icon: LineChart, logoSrc: googleAdsLogo, logoAlt: "Logo oficial Google Ads" },
  { id: "ga4", name: "Google Analytics 4", subtitle: "Certificado", Icon: BarChart2, logoSrc: googleAnalyticsLogo, logoAlt: "Logo oficial Google Analytics" },
  { id: "gtm", name: "Google Tag Manager", subtitle: "Especialista", Icon: Tags, logoSrc: googleTagManagerLogo, logoAlt: "Logo oficial Google Tag Manager" },
  { id: "google-search-ads", name: "Google Search Ads", subtitle: "Certificação ativa", Icon: Search, logoSrc: googleSearchAdsLogo, logoAlt: "Logo oficial Search Ads" },
  { id: "google-display-video", name: "Google Display & Video", subtitle: "Certificação ativa", Icon: ShieldCheck, logoSrc: googleDisplayVideoLogo, logoAlt: "Logo oficial Display & Video 360" },
];

function PartnershipTrustStrip({ isMobile }: { isMobile: boolean }) {
  const itemsLoop = [...PARTNERSHIP_ITEMS, ...PARTNERSHIP_ITEMS];

  return (
    <motion.div
      className="hardtech-trust-wrap"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      style={{ marginTop: "20px" }}
    >
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "7px",
          marginBottom: "10px",
          padding: "4px 11px",
          borderRadius: "9999px",
          background: "rgba(255,255,255,0.58)",
          border: "1px solid rgba(255,255,255,0.78)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.90), 0 2px 10px rgba(12,12,12,0.03)",
          fontSize: "10px",
          fontWeight: 600,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "rgba(12,12,12,0.56)",
        }}
      >
        <span className="status-dot-pulse" style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#A4F729", boxShadow: "0 0 7px rgba(164,247,41,0.52)" }} />
        Parcerias e certificações
      </div>

      {!isMobile ? (
        <div className="hardtech-trust-marquee" aria-label="Parcerias e certificações">
          <div className="hardtech-trust-track">
            {itemsLoop.map((item, index) => (
              <article key={`${item.id}-${index}`} className="hardtech-trust-card">
                <div className="hardtech-trust-icon" aria-hidden="true">
                  {item.logoSrc ? (
                    // Troca recomendada de asset oficial:
                    // 1) importe o logo real em src/imports e atribua em logoSrc
                    // 2) mantenha logoAlt com o nome oficial da certificação
                    <img src={item.logoSrc} alt={item.logoAlt || item.name} loading="lazy" decoding="async" />
                  ) : (
                    <item.Icon />
                  )}
                </div>
                <div className="hardtech-trust-copy">
                  <strong>{item.name}</strong>
                  <span>{item.subtitle}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      ) : (
        <div className="hardtech-trust-mobile hardtech-hide-scrollbar" aria-label="Parcerias e certificações">
          {PARTNERSHIP_ITEMS.map((item) => (
            <article key={item.id} className="hardtech-trust-card">
              <div className="hardtech-trust-icon" aria-hidden="true">
                {item.logoSrc ? (
                  // Troca recomendada de asset oficial:
                  // 1) importe o logo real em src/imports e atribua em logoSrc
                  // 2) mantenha logoAlt com o nome oficial da certificação
                  <img src={item.logoSrc} alt={item.logoAlt || item.name} loading="lazy" decoding="async" />
                ) : (
                  <item.Icon />
                )}
              </div>
              <div className="hardtech-trust-copy">
                <strong>{item.name}</strong>
                <span>{item.subtitle}</span>
              </div>
            </article>
          ))}
        </div>
      )}
    </motion.div>
  );
}

// ─── Segmentos ─────────────────────────────────────────────────
function SegmentosSection() {
  const ref = useReveal(60) as React.RefObject<HTMLElement>;
  return (
    <section
      ref={ref}
      className="deferred-section py-4 px-4 md:py-6 md:px-14"
      style={{
        margin: "0 16px",
        background: "transparent",
        position: "relative" as const,
        overflow: "hidden"
      }}
    >
      <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6" style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <span className="reveal" style={{ fontSize: "10.5px", letterSpacing: "0.12em", color: "rgba(12,12,12,0.40)", textTransform: "uppercase", whiteSpace: "nowrap" as const }}>Segmentos atendidos</span>
        <div className="reveal hidden md:block" style={{ width: "1px", height: "16px", background: "rgba(12,12,12,0.06)", flexShrink: 0 }} />
        <div className="flex flex-wrap gap-2 md:gap-2.5">
          {["Varejo", "Saúde", "Imóveis", "Serviços", "Indústria", "Alimentação", "Educação"].map((seg) => (
            <motion.span 
              className="reveal" 
              key={seg}
              whileHover={{
                background: 'rgba(255,255,255,0.40)',
                color: '#0C0C0C',
                fontWeight: 500
              }}
              style={{ 
                background: 'rgba(255,255,255,0.24)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.38)',
                borderRadius: '9999px',
                padding: '5px 13px',
                color: 'rgba(12,12,12,0.68)',
                fontSize: '12.5px',
                cursor: 'pointer',
                transition: 'background 0.2s ease, color 0.2s ease, font-weight 0.2s ease',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {seg}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProblemaSolucaoSection() {
  const ref = useReveal(0) as React.RefObject<HTMLElement>;
  return (
    <section
      ref={ref}
      className="deferred-section pt-12 pb-10 px-0 md:pt-24 md:pb-16 md:px-14 scroll-mt-[96px] md:scroll-mt-[130px]"
      style={{
        margin: "0 16px",
        background: "transparent",
        position: "relative" as const,
        overflow: "hidden"
      }}
    >
      <div 
        className="grid grid-cols-1 md:grid-cols-[1fr_1px_1fr] gap-7 md:gap-16 p-6 md:p-14"
        style={{ 
          maxWidth: "1280px", 
          margin: "0 auto", 
          alignItems: "center",
          ...glassStyles.medium,
          borderRadius: "28px",
        }}
      >
        {/* Problema */}
        <div className="reveal" style={{ transitionDelay: "0ms" }}>
          <div style={{ display: "inline-flex", alignItems: "center", background: "rgba(10,10,10,0.03)", border: "1px solid rgba(10,10,10,0.06)", borderRadius: "6px", padding: "4px 10px", fontSize: "10px", fontWeight: 600, letterSpacing: "0.10em", color: "rgba(10,10,10,0.50)", textTransform: "uppercase" as const, marginBottom: "18px" }}>
            O problema
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 6vw, 34px)", fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.08, color: "#0A0A0A", marginBottom: "16px" }}>
            Empresa boa com presença digital fraca não vende o que merece.
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.65, color: "rgba(12,12,12,0.74)", fontWeight: 400, maxWidth: "440px", marginBottom: "22px" }}>
            Site amador, tráfego sem estratégia, campanhas soltas e baixa percepção de valor. O mercado não enxerga o tamanho real do seu negócio.
          </p>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: "14px" }}>
            {[
              "Site que não converte e prejudica autoridade",
              "Campanhas sem estrutura que desperdiçam verba",
              "Operação desorganizada e processos manuais",
              "Presença digital que não reflete o valor real da empresa"
            ].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <div style={{ width: "18px", height: "18px", borderRadius: "50%", background: "rgba(10,10,10,0.03)", border: "1px solid rgba(10,10,10,0.06)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                  <X style={{ width: "9px", height: "9px", color: "rgba(0,0,0,0.35)" }} />
                </div>
                <span style={{ fontSize: "14px", color: "rgba(0,0,0,0.62)", lineHeight: 1.5 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Separador central (Desktop only) */}
        <div className="hidden md:block w-px bg-current opacity-[0.06] self-stretch" />
        {/* Separador central (Mobile only) */}
        <div className="block md:hidden h-px bg-current opacity-[0.06] w-full my-4" />

        {/* Solução */}
        <div className="reveal" style={{ transitionDelay: "160ms" }}>
          <div style={{ display: "inline-flex", alignItems: "center", background: "rgba(164,247,41,0.08)", border: "1px solid rgba(164,247,41,0.18)", borderRadius: "6px", padding: "4px 10px", fontSize: "10px", fontWeight: 600, letterSpacing: "0.10em", color: "#3a6b00", textTransform: "uppercase" as const, marginBottom: "18px" }}>
            A solução
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 6vw, 34px)", fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.08, color: "#0A0A0A", marginBottom: "16px" }}>
            Construímos a estrutura digital que sua empresa precisa para crescer.
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.65, color: "rgba(12,12,12,0.74)", fontWeight: 400, maxWidth: "440px", marginBottom: "22px" }}>
            Não entregamos peças soltas. Criamos sistemas de presença digital, aquisição e operação que trabalham juntos para gerar mais autoridade, contatos e vendas.
          </p>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: "14px" }}>
            {[
              "Site premium que transmite autoridade e converte",
              "Campanhas estruturadas para atrair clientes certos",
              "Sistemas e automações que organizam a operação",
              "Estratégia contínua de crescimento e posicionamento"
            ].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <div style={{ width: "18px", height: "18px", borderRadius: "50%", background: "rgba(164,247,41,0.08)", border: "1px solid rgba(164,247,41,0.16)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#A4F729", display: "block" }} />
                </div>
                <span style={{ fontSize: "14px", color: "#0C0C0C", lineHeight: 1.5, fontWeight: 500 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Stats Strip — Autoridade de Agência ──────────────────────────
const STATS_DATA = [
  { number: "150+",   label: "Sites entregues" },
  { number: "R$2M+",  label: "Em tráfego gerenciado" },
  { number: "50+",    label: "Empresas atendidas" },
  { number: "98%",    label: "Clientes satisfeitos" },
  { number: "3×",     label: "ROI médio" },
  { number: "Google", label: "Partner oficial" },
];

function StatsStrip({ reducedMotion }: { reducedMotion: boolean }) {
  const items = [...STATS_DATA, ...STATS_DATA, ...STATS_DATA];
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(12,12,12,0.05)",
        borderBottom: "1px solid rgba(12,12,12,0.05)",
        background: "rgba(255,255,255,0.14)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
      aria-hidden="true"
    >
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(247,248,242,0.95) 0%, transparent 8%, transparent 92%, rgba(247,248,242,0.95) 100%)", pointerEvents: "none", zIndex: 2 }} />
      <div style={{ position: "absolute", top: 0, left: "10%", right: "10%", height: "1px", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.70) 40%, rgba(255,255,255,0.70) 60%, transparent)", pointerEvents: "none" }} />
      <div
        className="hardtech-stats-track"
        style={{
          display: "flex",
          alignItems: "center",
          width: "max-content",
          animation: reducedMotion ? "none" : "hardtech-stats-scroll 40s linear infinite",
          willChange: "transform",
          padding: "20px 0",
        }}
      >
        {items.map((s, i) => (
          <div key={i} style={{ display: "inline-flex", alignItems: "center", flexShrink: 0 }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "0 40px", gap: "2px", textAlign: "center" }}>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(18px, 2vw, 26px)", letterSpacing: "-0.04em", color: "#0A0A0A", lineHeight: 1 }}>{s.number}</span>
              <span style={{ fontSize: "9.5px", fontWeight: 600, letterSpacing: "0.10em", textTransform: "uppercase" as const, color: "rgba(12,12,12,0.40)", whiteSpace: "nowrap" as const, marginTop: "4px" }}>{s.label}</span>
            </div>
            <div style={{ width: "1px", height: "26px", background: "rgba(12,12,12,0.07)", flexShrink: 0 }} />
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Serviços ──────────────────────────────────────────────────
  const SERVICOS_LIST = [

    { icon: Globe, label: "Sites e Landing Pages", desc: "Sites premium, rápidos e focados em conversão. Do institucional à landing page de alto ticket.", accent: true, tags: ["Performance", "Conversão"], gridClasses: "col-span-2 md:col-span-2 md:row-span-1 min-h-[160px] md:min-h-[220px]" },
    { icon: BarChart2, label: "Tráfego Pago", desc: "Google Ads, Meta Ads e estratégias de aquisição para atrair clientes no momento certo.", accent: false, tags: ["Google Ads", "Meta Ads", "Aquisição"], gridClasses: "col-span-2 md:col-span-2 md:row-span-2 min-h-[160px] md:min-h-[456px]" },
    { icon: Search, label: "SEO Local", desc: "Posicionamento no Google para aparecer quando sua cidade está procurando o que você oferece.", accent: false, tags: ["Ranking"], gridClasses: "col-span-2 md:col-span-1 md:row-span-1 min-h-[160px] md:min-h-[220px]" },
    { icon: Settings2, label: "Sistemas e CRM", desc: "Ferramentas digitais que organizam a operação, centralizam leads e automatizam follow-ups.", accent: false, tags: ["CRM"], gridClasses: "col-span-2 md:col-span-1 md:row-span-1 min-h-[160px] md:min-h-[220px]" },
    { icon: Cpu, label: "Automações", desc: "Fluxos inteligentes que reduzem trabalho manual e garantem que nenhuma oportunidade seja perdida.", accent: false, tags: ["Workflows", "Eficiência"], gridClasses: "col-span-2 md:col-span-2 md:row-span-1 min-h-[160px] md:min-h-[220px]" },
    { icon: PenTool, label: "Identidade e Design", desc: "Marca, materiais e conteúdo visual que transmitem autoridade e diferenciam sua empresa.", accent: false, tags: ["Branding", "Conteúdo"], gridClasses: "col-span-2 md:col-span-2 md:row-span-1 min-h-[160px] md:min-h-[220px]" },
];

function ServicosSection() {
  const reduced = useReducedMotion();
  const headerRef = useReveal(0) as React.RefObject<HTMLDivElement>;
  const gridRef = useReveal(80) as React.RefObject<HTMLDivElement>;
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  return (
    <section
      id="servicos"
      className="deferred-section px-4 pt-16 pb-12 md:px-14 md:pt-24 md:pb-16 scroll-mt-[96px] md:scroll-mt-[130px]"
      style={{
        margin: "0 16px",
        ...glassStyles.medium,
        borderRadius: "0",
        borderLeft: "1px solid rgba(255,255,255,0.30)",
        borderRight: "1px solid rgba(255,255,255,0.30)",
        position: "relative" as const,
        overflow: "hidden"
      }}
    >
      {/* top gloss */}
      <div className="pointer-events-none absolute" style={{ top: 0, left: "5%", right: "5%", height: "1px", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.60), transparent)" }} />
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div ref={headerRef} style={{ marginBottom: "64px", maxWidth: "560px" }}>
          <div className="reveal" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.50)", border: "1px solid rgba(255,255,255,0.70)", borderRadius: "6px", padding: "4px 10px", fontSize: "10px", fontWeight: 600, letterSpacing: "0.10em", color: "rgba(10,10,10,0.50)", textTransform: "uppercase" as const, marginBottom: "18px" }}>
            O que fazemos
          </div>
          <h2 className="reveal" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 2.8vw, 44px)", fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.08, color: "#0A0A0A", marginBottom: "18px" }}>
            Soluções que trabalham juntas para crescimento real.
          </h2>
          <p className="reveal" style={{ fontSize: "16px", lineHeight: 1.7, color: "rgba(12,12,12,0.74)", fontWeight: 400 }}>
            Cada entrega é parte de uma estratégia maior. Combinamos design, tecnologia e marketing para criar uma presença digital que vende.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {SERVICOS_LIST.map((s, idx) => {
            const isHover = hoveredCard === s.label;
            const isTall = (s.gridClasses || '').includes('md:row-span-2');
            return (
            <motion.div
              key={s.label}
              className={`reveal glass-card-shimmer service-card-hover ${s.gridClasses || ''} p-4 md:p-6`}
              onHoverStart={() => setHoveredCard(s.label)}
              onHoverEnd={() => setHoveredCard(null)}
              whileHover={reduced ? {} : { y: -3, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 300, damping: 26, mass: 0.8 }}
              style={{
                ...glassStyles.light,
                borderRadius: "18px",
                cursor: "default",
                position: "relative" as const,
                overflow: "hidden",
                background: glassStyles.light.background,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                zIndex: isHover ? 30 : 20,
                boxShadow: isHover
                  ? "0 22px 54px rgba(12,12,12,0.12), 0 4px 12px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.78), inset 0 -1px 2px rgba(0,0,0,0.02)"
                  : "0 10px 30px rgba(12,12,12,0.05), inset 0 1px 0 rgba(255,255,255,0.62), inset 0 -1px 2px rgba(0,0,0,0.015)",
                borderColor: isHover ? "rgba(164, 247, 41, 0.45)" : "rgba(255,255,255,0.60)",
                transition: "background 0.4s cubic-bezier(0.16,1,0.3,1), border-color 0.4s ease, box-shadow 0.4s cubic-bezier(0.16,1,0.3,1)",
              }}
            >
              {/* specular border highlight no topo */}
              <div className="pointer-events-none absolute" style={{ top: 0, left: "12%", right: "12%", height: "1px", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.85), transparent)", zIndex: 2 }} />
              {/* card inner gloss */}
              <div className="pointer-events-none absolute" style={{ inset: 0, background: "linear-gradient(160deg, rgba(255,255,255,0.30) 0%, transparent 50%)", borderRadius: "inherit", zIndex: 0 }} />
              {/* sheen diagonal discreto no hover */}
              <motion.div
                className="pointer-events-none absolute"
                initial={false}
                animate={{ opacity: isHover && !reduced ? 1 : 0, x: isHover && !reduced ? "120%" : "-60%" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                style={{ top: 0, bottom: 0, left: 0, width: "55%", background: "linear-gradient(105deg, transparent 0%, rgba(255,255,255,0.28) 50%, transparent 100%)", borderRadius: "inherit", zIndex: 1 }}
              />
              {/* glow verde muito suave no canto — só no hover */}
              <motion.div
                className="pointer-events-none absolute"
                initial={false}
                animate={{ opacity: isHover ? 1 : 0 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                style={{ top: "-40px", right: "-40px", width: "150px", height: "150px", borderRadius: "50%", background: "radial-gradient(circle, rgba(164,247,41,0.14) 0%, transparent 68%)", filter: "blur(8px)", zIndex: 0 }}
              />
              {/* índice editorial no canto superior direito */}
              <span className="pointer-events-none absolute" style={{ top: "18px", right: "20px", fontFamily: "var(--font-display)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.06em", color: isHover ? "#84e01b" : "rgba(12,12,12,0.22)", zIndex: 2, transition: "color 0.4s ease" }}>
                {String(idx + 1).padStart(2, "0")}
              </span>
              
              {s.label === "Tráfego Pago" && (
                <div className="absolute bottom-0 left-0 right-0 h-[48%] pointer-events-none overflow-hidden" style={{ zIndex: 0, opacity: 0.35 }}>
                   <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                     {/* Subtle grid lines */}
                     <line x1="0" y1="25" x2="100" y2="25" stroke="rgba(164,247,41,0.14)" strokeWidth="0.5" strokeDasharray="2,2" />
                     <line x1="0" y1="50" x2="100" y2="50" stroke="rgba(164,247,41,0.14)" strokeWidth="0.5" strokeDasharray="2,2" />
                     <line x1="0" y1="75" x2="100" y2="75" stroke="rgba(164,247,41,0.14)" strokeWidth="0.5" strokeDasharray="2,2" />
                     <line x1="25" y1="0" x2="25" y2="100" stroke="rgba(164,247,41,0.10)" strokeWidth="0.5" strokeDasharray="2,2" />
                     <line x1="50" y1="0" x2="50" y2="100" stroke="rgba(164,247,41,0.10)" strokeWidth="0.5" strokeDasharray="2,2" />
                     <line x1="75" y1="0" x2="75" y2="100" stroke="rgba(164,247,41,0.10)" strokeWidth="0.5" strokeDasharray="2,2" />

                     {/* The curves */}
                     <path d="M0,100 L0,65 Q30,55 55,60 T100,25 L100,100 Z" fill="url(#grad-trafego)" />
                     <path d="M0,65 Q30,55 55,60 T100,25" fill="none" stroke="#A4F729" strokeWidth="1.5" />

                     {/* Elegant glowing dots */}
                     <circle cx="100" cy="25" r="2.5" fill="#A4F729" />
                     <circle cx="100" cy="25" r="5.5" fill="#A4F729" opacity="0.3" />

                     <defs>
                       <linearGradient id="grad-trafego" x1="0" y1="0" x2="0" y2="1">
                         <stop offset="0%" stopColor="#A4F729" stopOpacity="0.18" />
                         <stop offset="100%" stopColor="#A4F729" stopOpacity="0" />
                       </linearGradient>
                     </defs>
                   </svg>
                </div>
              )}

              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ 
                  display: "inline-flex", 
                  alignItems: "center", 
                  justifyContent: "center", 
                  borderRadius: "10px", 
                  background: s.accent ? "#0C0C0C" : "rgba(255,255,255,0.80)",
                  border: s.accent ? "1px solid rgba(164,247,41,0.30)" : "1px solid rgba(12,12,12,0.07)",
                  padding: "10px", 
                  marginBottom: "18px",
                  boxShadow: s.accent ? "0 4px 12px rgba(164,247,41,0.08)" : "inset 0 1px 0 rgba(255,255,255,0.95), 0 2px 6px rgba(0,0,0,0.05)"
                }}>
                  <s.icon style={{ width: "18px", height: "18px", color: s.accent ? "#A4F729" : "#1A1A1A" }} />
                </div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "20px", letterSpacing: "-0.025em", color: "#0A0A0A", marginBottom: "8px" }}>{s.label}</div>
                <div style={{ fontSize: "14px", color: "rgba(12,12,12,0.72)", lineHeight: 1.6, maxWidth: s.label === "Tráfego Pago" ? "80%" : "none" }}>{s.desc}</div>
                {s.tags && (
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "16px" }}>
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontSize: "10.5px",
                          fontWeight: 600,
                          letterSpacing: "0.02em",
                          color: s.accent ? "#0C0C0C" : "rgba(12,12,12,0.52)",
                          background: s.accent ? "rgba(164,247,41,0.15)" : "rgba(255,255,255,0.70)",
                          border: s.accent ? "1px solid rgba(164,247,41,0.30)" : "1px solid rgba(12,12,12,0.07)",
                          borderRadius: "6px",
                          padding: "3px 8px",
                          whiteSpace: "nowrap" as const,
                          boxShadow: s.accent ? "none" : "inset 0 1px 0 rgba(255,255,255,0.90)",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Rodapé editorial — linha fina + mini indicador + link */}
              <div style={{ position: "relative", zIndex: 1, marginTop: isTall ? "auto" : "24px", paddingTop: isTall ? "24px" : "0" }}>
                {/* linha fina divisória com brilho de vidro */}
                <div style={{ height: "1px", width: "100%", background: "linear-gradient(90deg, rgba(12,12,12,0.07) 0%, rgba(12,12,12,0.03) 60%, transparent 100%)", marginBottom: "14px" }} />
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px" }}>
                  {/* mini indicador de status */}
                  <div style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                    <span className="status-dot-pulse" style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#A4F729", boxShadow: "0 0 6px rgba(164,247,41,0.65)", flexShrink: 0 }} />
                    <span style={{ fontSize: "10.5px", fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase" as const, color: "rgba(12,12,12,0.42)" }}>Disponível</span>
                  </div>
                  <a 
                    href={`${WA_LINK_BASE}${encodeURIComponent("Olá, vi o site da HardTech e quero saber mais sobre o serviço: " + s.label)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ 
                      display: "inline-flex", 
                      alignItems: "center", 
                      gap: "6px", 
                      fontSize: "13.5px", 
                      fontWeight: 600, 
                      color: s.accent ? "#0C0C0C" : "rgba(10,10,10,0.55)", 
                      letterSpacing: "-0.01em",
                      textDecoration: "none",
                      transition: "color 0.2s ease"
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = '#84e01b'}
                    onMouseLeave={e => e.currentTarget.style.color = s.accent ? "#0C0C0C" : "rgba(10,10,10,0.55)"}
                  >
                    <span>Saiba mais</span>
                    <ChevronRight 
                      style={{ 
                        width: "14px", 
                        height: "14px",
                        transform: hoveredCard === s.label ? "translateX(3px)" : "translateX(0px)",
                        transition: "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)"
                      }} 
                    />
                  </a>
                </div>
              </div>
            </motion.div>
          );})}
        </div>
      </div>
    </section>
  );
}

// ─── Método ────────────────────────────────────────────────────
const METODO_STEPS = [
  { n: "01", label: "Diagnóstico", desc: "Análise da presença digital atual, concorrência e oportunidades." },
  { n: "02", label: "Estratégia", desc: "Plano claro com objetivos, canais, entregas e métricas." },
  { n: "03", label: "Construção", desc: "Desenvolvimento de site, campanhas, sistemas e materiais." },
  { n: "04", label: "Validação", desc: "Testes, ajustes e garantia de performance antes do lançamento." },
  { n: "05", label: "Crescimento", desc: "Acompanhamento contínuo, otimização e evolução constante." },
];

// Progresso de scroll da seção, robusto ao container de scroll real (body).
// Mapeia: progress 0 quando o topo da seção está a 75% da viewport;
// progress 1 quando a base da seção está a 45% da viewport.
function useSectionScrollProgress(
  ref: React.RefObject<HTMLDivElement | null>,
  reducedMotion: boolean
) {
  const mv = useMotionValue(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reducedMotion) {
      mv.set(1);
      return;
    }
    let raf = 0;
    const update = () => {
      const vh = window.innerHeight || 1;
      const rect = el.getBoundingClientRect();
      const denom = 0.3 * vh + rect.height;
      const p = denom > 0 ? (0.75 * vh - rect.top) / denom : 0;
      mv.set(Math.min(1, Math.max(0, p)));
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    // capture:true garante captar o scroll de qualquer container (inclusive body)
    window.addEventListener("scroll", onScroll, { passive: true, capture: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll, { capture: true } as EventListenerOptions);
      window.removeEventListener("resize", onScroll);
    };
  }, [ref, mv, reducedMotion]);
  return mv;
}

function MetodoStep({
  step,
  index,
  total,
  progress,
  reducedMotion,
  isMobile = false,
}: {
  step: (typeof METODO_STEPS)[number];
  index: number;
  total: number;
  progress: ReturnType<typeof useSpring>;
  reducedMotion: boolean;
  isMobile?: boolean;
}) {
  // Posição fracionária do dot ao longo da linha (0, 0.25, 0.5, 0.75, 1)
  const at = total > 1 ? index / (total - 1) : 0;
  const start = Math.max(0, at - 0.08);
  const end = Math.min(1, at + 0.02);
  const litOpacity = useTransform(progress, [start, end], [0.22, 1]);
  const litScale = useTransform(progress, [start, end], [0.55, 1]);
  const litShadow = useTransform(
    progress,
    [start, end],
    ["0 0 0px rgba(164,247,41,0)", "0 0 9px rgba(164,247,41,0.9)"]
  );
  return (
    <motion.div
      className="reveal p-3 md:p-5"
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      style={{
        position: "relative" as const,
        zIndex: 1,
        borderRadius: "18px",
        textAlign: isMobile ? "left" as const : "center" as const,
        border: "1px solid transparent",
        transition: "background 0.35s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.35s ease, box-shadow 0.35s ease"
      }}
      onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.30)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.55)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(12,12,12,0.05), inset 0 1px 0 rgba(255,255,255,0.70)'; }}
      onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.boxShadow = 'none'; }}
    >
      <div style={{ 
        width: "48px", 
        height: "48px", 
        borderRadius: "50%", 
        background: "linear-gradient(160deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.55) 100%)", 
        backdropFilter: "blur(12px) saturate(1.3)", 
        WebkitBackdropFilter: "blur(12px) saturate(1.3)", 
        border: "1px solid rgba(255,255,255,0.90)", 
        boxShadow: "0 10px 28px rgba(12,12,12,0.06), inset 0 1px 0 rgba(255,255,255,0.95), inset 0 -1px 2px rgba(12,12,12,0.03)", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        margin: isMobile ? "0 0 20px" : "0 auto 20px",
        position: "relative" as const
      }}>
        <span style={{ fontFamily: "var(--font-display)", fontSize: "15px", fontWeight: 800, color: "#0A0A0A", letterSpacing: "-0.01em" }}>{step.n}</span>
        {/* Dot que acende em sequência conforme o scroll */}
        <motion.div
          style={{
            position: "absolute",
            bottom: "-3px",
            width: "7px",
            height: "7px",
            borderRadius: "50%",
            background: "#A4F729",
            opacity: reducedMotion ? 1 : litOpacity,
            scale: reducedMotion ? 1 : litScale,
            boxShadow: reducedMotion ? "0 0 9px rgba(164,247,41,0.9)" : litShadow,
          }}
        />
      </div>
      <div style={{ fontWeight: 700, fontSize: "15.5px", letterSpacing: "-0.02em", color: "#0A0A0A", marginBottom: "8px" }}>{step.label}</div>
      <div style={{ fontSize: "13px", color: "rgba(12,12,12,0.72)", lineHeight: 1.6, maxWidth: "210px", marginInline: isMobile ? "0" : "auto" }}>{step.desc}</div>
    </motion.div>
  );
}

function MetodoSection({ isMobile = false }: { isMobile?: boolean }) {
  const reducedMotion = useReducedMotion();
  const headerRef = useReveal(0) as React.RefObject<HTMLDivElement>;
  const stepsRef = useReveal(100) as React.RefObject<HTMLDivElement>;
  const progressRef = useRef<HTMLDivElement>(null);
  const scrollProgress = useSectionScrollProgress(progressRef, reducedMotion);
  const lineScaleX = useSpring(scrollProgress, { stiffness: 80, damping: 24, mass: 0.4 });
  return (
    <section
      className="deferred-section pt-16 pb-12 px-4 md:pt-24 md:pb-16 md:px-14 scroll-mt-[96px] md:scroll-mt-[130px]"
      style={{
        margin: "0 16px",
        background: "radial-gradient(ellipse 80% 50% at 50% 20%, rgba(255,255,255,0.22) 0%, transparent 60%)",
        position: "relative" as const,
        overflow: "hidden"
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div ref={headerRef} style={{ marginBottom: "56px", maxWidth: "520px" }}>
          <div className="reveal" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.50)", border: "1px solid rgba(255,255,255,0.70)", borderRadius: "6px", padding: "4px 10px", fontSize: "10px", fontWeight: 600, letterSpacing: "0.10em", color: "rgba(10,10,10,0.50)", textTransform: "uppercase" as const, marginBottom: "18px" }}>
            Como trabalhamos
          </div>
          <h2 className="reveal" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(30px, 2.6vw, 40px)", fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.08, color: "#0A0A0A" }}>
            Método claro, execução precisa, resultado mensurável.
          </h2>
        </div>

        <div ref={progressRef}>
        <div ref={stepsRef} className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4" style={{ position: "relative" as const }}>
          {/* Base line (desktop) */}
          <div className="hidden md:block absolute top-[22px] left-[8%] right-[8%] h-px z-0" style={{ background: "linear-gradient(90deg, transparent, rgba(12,12,12,0.06) 20%, rgba(12,12,12,0.08) 50%, rgba(12,12,12,0.06) 80%, transparent)" }} />
          {/* Animated progress line (desktop) */}
          <motion.div
            className="hidden md:block absolute top-[22px] left-[8%] right-[8%] h-px z-0"
            style={{
              background: "linear-gradient(90deg, rgba(164,247,41,0.55), #A4F729 50%, rgba(164,247,41,0.55))",
              boxShadow: "0 0 8px rgba(164,247,41,0.45)",
              scaleX: lineScaleX,
              transformOrigin: "left"
            }}
          />
          {/* Base line (mobile) */}
          <div className="block md:hidden absolute top-[22px] bottom-[22px] left-1/2 w-px z-0 transform -translate-x-1/2" style={{ background: "linear-gradient(180deg, transparent, rgba(12,12,12,0.06) 20%, rgba(12,12,12,0.08) 50%, rgba(12,12,12,0.06) 80%, transparent)" }} />
          {/* Animated progress line (mobile) */}
          <motion.div
            className="block md:hidden absolute top-[22px] bottom-[22px] left-1/2 w-px z-0 transform -translate-x-1/2"
            style={{
              background: "linear-gradient(180deg, rgba(164,247,41,0.55), #A4F729 50%, rgba(164,247,41,0.55))",
              boxShadow: "0 0 8px rgba(164,247,41,0.45)",
              scaleY: lineScaleX,
              transformOrigin: "top"
            }}
          />
          {METODO_STEPS.map((step, i) => (
            <MetodoStep
              key={step.n}
              step={step}
              index={i}
              total={METODO_STEPS.length}
              progress={lineScaleX}
              reducedMotion={reducedMotion}
              isMobile={isMobile}
            />
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}

// ─── CTA Final ─────────────────────────────────────────────────
function CtaFinalSection() {
  const ref = useReveal(0) as React.RefObject<HTMLElement>;
  return (
    <section
      ref={ref}
      className="deferred-section py-14 px-6 md:py-20 md:px-14 scroll-mt-[96px] md:scroll-mt-[130px]"
      style={{ margin: "0 16px 16px", borderRadius: "28px", border: "1px solid rgba(255, 255, 255, 0.08)", boxShadow: "0 28px 72px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255, 255, 255, 0.14)", position: "relative" as const, overflow: "hidden" }}
    >
      {/* Painel escuro real — section global é forçado a transparent via CSS, então usamos uma camada interna */}
      <div style={{ position: "absolute", inset: 0, background: "rgba(8, 10, 6, 0.94)", backdropFilter: "blur(32px)", WebkitBackdropFilter: "blur(32px)", borderRadius: "inherit", pointerEvents: "none", zIndex: 0 }} />
      <div className="cta-blur-orb" style={{ position: "absolute", top: "-30%", right: "-10%", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(164,247,41,0.08) 0%, transparent 60%)", filter: "blur(90px)", pointerEvents: "none" }} />
      <div className="cta-blur-orb" style={{ position: "absolute", bottom: "-20%", left: "-5%", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(164,247,41,0.05) 0%, transparent 60%)", filter: "blur(70px)", pointerEvents: "none" }} />
      <div
        className="reveal grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-14"
        style={{ maxWidth: "1280px", margin: "0 auto", alignItems: "center", position: "relative" as const, zIndex: 1 }}
      >
        <div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(164,247,41,0.08)", border: "1px solid rgba(164,247,41,0.18)", borderRadius: "6px", padding: "4px 10px", fontSize: "10px", fontWeight: 600, letterSpacing: "0.10em", color: "#A4F729", textTransform: "uppercase" as const, marginBottom: "28px" }}>
            Próximo passo
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 3vw, 46px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.06, color: "#FFFFFF", marginBottom: "18px", maxWidth: "620px" }}>
            Pronto para construir uma presença digital que realmente vende?
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.7, color: "rgba(255,255,255,0.82)", fontWeight: 400, maxWidth: "500px" }}>
            Converse com a Hardtech. Em 30 minutos entendemos seu negócio e mostramos o que é possível construir juntos.
          </p>
        </div>
        <div className="flex flex-col gap-3 items-start lg:items-end flex-shrink-0">
          <MagneticButton
            href={WA_LINK}
            className="cta-group"
            whileHover={{ scale: 1.02, boxShadow: "0 8px 30px rgba(164,247,41,0.35)" }}
            whileTap={{ scale: 0.98 }}
            style={{ display: "inline-flex", alignItems: "center", gap: "10px", height: "56px", padding: "0 30px", borderRadius: "9999px", background: "#A4F729", color: "#0a1800", fontWeight: 600, fontSize: "15px", letterSpacing: "-0.01em", textDecoration: "none", whiteSpace: "nowrap" as const, boxShadow: "0 0 60px rgba(164,247,41,0.18)" }}
          >
            <span>Solicitar diagnóstico gratuito</span>
            <ArrowRight className="cta-arrow" style={{ width: "16px", height: "16px" }} />
          </MagneticButton>
          <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.55)", letterSpacing: "-0.01em" }}>Sem compromisso · Resposta em até 24h</span>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const navLinks = [
    { label: "Serviços", href: "#servicos" },
    { label: "Cases", href: "#" },
    { label: "Sobre", href: "#" },
    { label: "Contato", href: "#" }
  ];

  const [isMobile, setIsMobile] = useState(false);
  const [isCompactDesktop, setIsCompactDesktop] = useState(false);
  const reducedMotion = useReducedMotion();
  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth < 768);
      setIsCompactDesktop(window.innerWidth < 1280);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  const reduceHeavyMotion = reducedMotion || isMobile || isCompactDesktop;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile || reducedMotion) return;
    const { clientX, clientY } = e;
    const targetX = clientX - window.innerWidth / 2;
    const targetY = clientY - window.innerHeight / 2;
    mouseX.set(targetX);
    mouseY.set(targetY);
  };

  // Spring mais suave: movimento fluido e elegante em vez de seco/mecânico
  const springConfig = { damping: 24, stiffness: 130, mass: 0.7 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Translate contido + tilt 3D um pouco mais expressivo para dar profundidade real
  const objectX = useTransform(springX, [-1000, 1000], [-28, 28]);
  const objectY = useTransform(springY, [-500, 500], [-14, 14]);
  const objectRotateX = useTransform(springY, [-500, 500], [7, -7]);
  const objectRotateY = useTransform(springX, [-1000, 1000], [-8, 8]);

  // Brilho especular que desliza pela superfície conforme o cursor (sensação premium)
  const glareX = useTransform(springX, [-1000, 1000], [70, 30]);
  const glareY = useTransform(springY, [-500, 500], [70, 30]);
  const glareBg = useTransform(
    [glareX, glareY],
    ([gx, gy]: number[]) =>
      `radial-gradient(circle at ${gx}% ${gy}%, rgba(255,255,255,0.30) 0%, rgba(255,255,255,0.08) 28%, transparent 55%)`
  );

  const cardsX = useTransform(springX, [-1000, 1000], [22, -22]);
  const cardsY = useTransform(springY, [-500, 500], [11, -11]);

  const services: Service[] = [
 // Sistemas — camada mais ao fundo
 { title: "Sistemas", description: "Operação organizada", Icon: Settings2, className: "top-[5%] left-[38%]", scale: 0.88, cardOpacity: 0.82, depthZ: 12 },
 // Sites — lado esquerdo superior do objeto
 { title: "Sites", description: "Mais autoridade", Icon: Globe, className: "top-[19%] left-[-3%]", scale: 0.95, cardOpacity: 0.92, depthZ: 24 },
 // Automações — central, levemente sobreposto ao objeto
 { title: "Automações", description: "Menos retrabalho", Icon: Bot, className: "top-[47%] left-[34%]", scale: 1, cardOpacity: 0.96, depthZ: 30 },
 // Tráfego — inferior esquerdo, primeiro plano com sombra mais forte
 { title: "Tráfego", description: "Mais oportunidades", Icon: TrendingUp, className: "bottom-[13%] left-[8%]", scale: 1.08, cardOpacity: 1, depthZ: 34, strongShadow: true }
  ];

  const badgeTags = ["Estratégia", "Tecnologia", "Crescimento"];

  const benefits = [
    {
      icon: Globe,
      title: "Presença digital",
      desc: "Sites rápidos, modernos e focados em conversão."
    },
    {
      icon: MonitorSmartphone,
      title: "Performance",
      desc: "Estratégias para atrair clientes no momento certo."
    },
    {
      icon: Settings2,
      title: "Sistemas e automações",
      desc: "Soluções que organizam processos e reduzem retrabalho."
    },
    {
      icon: TrendingUp,
      title: "Crescimento real",
      desc: "Tecnologia e dados para evoluir continuamente."
    }
  ];

  return (
    <div className={`page ${isMobile ? "page-mobile-optimized" : ""}`}>
      <NoiseLayer />
      <div className="acrylic-panel-bg-1" />
      <div className="acrylic-panel-bg-2" />
      {/* <CustomCursor /> */}
      <GlassNavbar navLinks={navLinks} />
      <div
        className="content min-h-screen"
        onMouseMove={handleMouseMove}
        style={{ overflowX: "hidden", color: "#0A0A0A" }}
      >

        {/* HERO SECTION */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="glass-hero relative"
          style={{
            margin: "0 16px",
            background: "transparent",
            paddingTop: isMobile ? "72px" : "120px",
            overflow: "hidden",
          }}
        >
          {/* Top gloss */}
          <div className="pointer-events-none absolute" style={{ top: 0, left: "6%", right: "6%", height: "1px", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.70), transparent)" }} />
          {/* Inner gradient overlay — profundidade de vidro e reflexo cinematográfico */}
          <div className="pointer-events-none absolute" style={{ inset: 0, background: "linear-gradient(135deg, rgba(255,255,255,0.18) 0%, transparent 40%, rgba(255,255,255,0.06) 60%, transparent 100%)", borderRadius: "inherit" }} />
          {/* Right green ambient — sutil luz refletida */}
          <div className="pointer-events-none absolute" style={{ right: 0, top: 0, bottom: 0, width: "55%", background: "radial-gradient(ellipse at 80% 40%, rgba(164,247,41,0.04) 0%, transparent 65%)", borderRadius: "inherit" }} />

          {/* Main hero grid */}
          <div style={{ padding: "0 24px 40px", maxWidth: "1320px", margin: "0 auto" }} className="px-4 md:px-14">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6 lg:gap-10 items-center">

              {/* Left column (Text & CTAs) */}
              <div className="relative z-10">
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.10, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    background: "rgba(255,255,255,0.55)",
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                    border: "1px solid rgba(255,255,255,0.70)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.80)",
                    borderRadius: "6px",
                    padding: "5px 14px",
                    fontSize: "10px",
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    color: "rgba(12,12,12,0.50)",
                    textTransform: "uppercase" as const,
                    marginBottom: isMobile ? "18px" : "28px"
                  }}
                >
                  {badgeTags.map((tag, idx) => (
                    <span key={tag} style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                      <span>{tag}</span>
                      {idx < badgeTags.length - 1 && (
                        <span style={{ width: "3px", height: "3px", borderRadius: "999px", background: "rgba(10,10,10,0.22)", flexShrink: 0 }} />
                      )}
                    </span>
                  ))}
                </motion.div>

                {/* Headline - Editorial Premium */}
                <h1
                  className="font-display font-extrabold tracking-tight text-[#0A0A0A] mb-4 md:mb-6 text-balance"
                  style={{
                    fontSize: isMobile ? "clamp(34px, 9vw, 48px)" : "clamp(40px, 5.2vw, 68px)",
                    lineHeight: isMobile ? 1.0 : 1.06,
                    letterSpacing: "-0.04em",
                    maxWidth: "680px"
                  }}
                >
                  <MaskRevealText text="Sites, tráfego e" delayStart={0.16} />
                  <br className="hidden lg:inline" />
                  <MaskRevealText text="tecnologia para" delayStart={0.28} />
                  <br className="hidden lg:inline" />
                  <MaskRevealText text="empresas que" delayStart={0.40} />
                  <br className="hidden lg:inline" />
                  <MaskRevealText text="querem vender" delayStart={0.52} />
                  <br className="hidden lg:inline" />
                  <span style={{ whiteSpace: "nowrap" }}>
                    <MaskRevealText text="mais" delayStart={0.64} />
                    <motion.span 
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: [0, 1.4, 1], opacity: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 16, delay: 0.78 }}
                      style={{ 
                        color: "#A4F729", 
                        textShadow: "0 0 24px rgba(164,247,41,0.55), 0 0 48px rgba(164,247,41,0.30)", 
                        position: "relative", 
                        display: "inline-block",
                        marginLeft: "0.02em"
                      }}
                    >
                      .
                    </motion.span>
                  </span>
                </h1>

                {/* Subheadline - Refined */}
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.30, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    fontSize: isMobile ? "15.5px" : "17px",
                    lineHeight: 1.6,
                    color: "rgba(12,12,12,0.78)",
                    maxWidth: "460px",
                    marginBottom: isMobile ? "22px" : "36px",
                    letterSpacing: "-0.01em",
                    fontWeight: 400
                  }}
                >
                  Criamos sites, landing pages, campanhas, sistemas e automações para empresas de Marília, Ourinhos e região gerarem mais autoridade, contatos e oportunidades comerciais.
                </motion.p>

                {/* CTAs - Premium Refined */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.36, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col sm:flex-row gap-3 mb-5 md:mb-8"
                >
                  <MagneticButton
                    href={WA_LINK}
                    className="cta-group"
                    whileHover={{ scale: 1.015, boxShadow: '0 12px 36px rgba(164,247,41,0.38), 0 4px 12px rgba(0,0,0,0.08)' }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      padding: "14px 30px",
                      borderRadius: "9999px",
                      background: "#A4F729",
                      color: "#0a1800",
                      fontWeight: 600,
                      fontSize: "15px",
                      letterSpacing: "-0.01em",
                      textDecoration: "none",
                      whiteSpace: "nowrap" as const,
                      border: "1px solid rgba(164,247,41,0.30)",
                      boxShadow: "0 4px 16px rgba(164,247,41,0.25), inset 0 1px 0 rgba(255,255,255,0.25)",
                      transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
                    }}
                  >
                    <span>Solicitar diagnóstico gratuito</span>
                    <ArrowRight className="cta-arrow" style={{ width: "16px", height: "16px", flexShrink: 0 }} />
                  </MagneticButton>
                  <motion.a
                    href="#servicos"
                    className="cta-group"
                    whileHover={{ y: -1, background: "rgba(255,255,255,0.28)" }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.18 }}
                    style={{
                      ...glassStyles.medium,
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      padding: "14px 28px",
                      borderRadius: "9999px",
                      color: "#0C0C0C",
                      fontWeight: 500,
                      fontSize: "15px",
                      letterSpacing: "-0.01em",
                      textDecoration: "none",
                      whiteSpace: "nowrap" as const,
                    }}
                  >
                    <span>Ver projetos</span>
                    <ArrowRight className="cta-arrow" style={{ width: "16px", height: "16px", flexShrink: 0 }} />
                  </motion.a>
                </motion.div>

                <PartnershipTrustStrip isMobile={isMobile} />
              </div>

              {/* Right column - 3D image + floating cards (Desktop only) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.94, x: 30 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
                className="hidden lg:block relative h-[600px] z-0"
              >
                {/* Glass orbs sutis atrás do objeto — profundidade atmosférica (desktop) */}
                <div className="absolute inset-0 pointer-events-none z-[1]" aria-hidden="true">
                  {[
                    { top: "8%", left: "18%", size: 200, bg: "radial-gradient(circle at 35% 30%, rgba(255,255,255,0.30) 0%, rgba(255,255,255,0.05) 55%, transparent 72%)", blur: 28, amp: 14, dur: 11, delay: 0 },
                    { top: "52%", left: "60%", size: 160, bg: "radial-gradient(circle at 35% 30%, rgba(164,247,41,0.12) 0%, rgba(164,247,41,0.03) 55%, transparent 72%)", blur: 26, amp: 11, dur: 13, delay: 1.4 },
                    { top: "30%", left: "70%", size: 120, bg: "radial-gradient(circle at 35% 30%, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.04) 55%, transparent 72%)", blur: 22, amp: 9, dur: 9.5, delay: 0.7 },
                  ].map((o, i) => (
                    <motion.div
                      key={i}
                      animate={reduceHeavyMotion ? {} : { y: [0, -o.amp, 0], opacity: [0.75, 1, 0.75] }}
                      transition={reduceHeavyMotion ? undefined : { duration: o.dur, repeat: Infinity, ease: "easeInOut", delay: o.delay }}
                      style={{
                        position: "absolute",
                        top: o.top,
                        left: o.left,
                        width: `${o.size}px`,
                        height: `${o.size}px`,
                        borderRadius: "50%",
                        background: o.bg,
                        filter: `blur(${o.blur}px)`,
                        willChange: "transform",
                      }}
                    />
                  ))}
                </div>

                {/* Linhas técnicas sutis conectando os cards ao objeto (não-literais) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-[3]" aria-hidden="true" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="connLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                      <stop offset="50%" stopColor="rgba(255,255,255,0.55)" />
                      <stop offset="100%" stopColor="rgba(164,247,41,0.45)" />
                    </linearGradient>
                  </defs>
                  <motion.g
                    animate={reduceHeavyMotion ? {} : { opacity: [0.45, 0.75, 0.45] }}
                    transition={reduceHeavyMotion ? undefined : { duration: 7, repeat: Infinity, ease: "easeInOut" }}
                    style={{ opacity: 0.55 }}
                  >
                    {[
                      { x1: "6%", y1: "26%" },   // Sites
                      { x1: "47%", y1: "11%" },  // Sistemas
                      { x1: "45%", y1: "54%" },  // Automações
                      { x1: "18%", y1: "80%" },  // Tráfego
                    ].map((l, i) => (
                      <motion.line
                        key={i}
                        x1={l.x1}
                        y1={l.y1}
                        x2="57%"
                        y2="49%"
                        stroke="url(#connLineGrad)"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeDasharray="2 9"
                        animate={reduceHeavyMotion ? {} : { strokeDashoffset: [0, -22] }}
                        transition={reduceHeavyMotion ? undefined : { duration: 9 + i, repeat: Infinity, ease: "linear" }}
                      />
                    ))}
                  </motion.g>
                </svg>

                {/* Luz embaixo — chão luminoso premium */}
                <div 
                  style={{
                    position: "absolute",
                    bottom: "-20px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "60%",
                    height: "60px",
                    background: "rgba(164,247,41,0.14)",
                    filter: "blur(40px)",
                    borderRadius: "50%",
                    pointerEvents: "none",
                    zIndex: -1
                  }}
                />

                {/* Abstract green glow behind cards (não-literal, atmosférico) */}
                <div className="absolute inset-0 pointer-events-none z-[4]" aria-hidden="true">
                  {/* Glow pools atrás de cada card */}
                  <div className="absolute" style={{ top: "12%", left: "2%", width: "180px", height: "120px", background: "radial-gradient(ellipse, rgba(164,247,41,0.12) 0%, transparent 70%)", filter: "blur(28px)" }} />
                  <div className="absolute" style={{ bottom: "10%", left: "6%", width: "220px", height: "140px", background: "radial-gradient(ellipse, rgba(164,247,41,0.16) 0%, transparent 70%)", filter: "blur(30px)" }} />
                  <div className="absolute" style={{ top: "44%", left: "32%", width: "200px", height: "130px", background: "radial-gradient(ellipse, rgba(164,247,41,0.10) 0%, transparent 70%)", filter: "blur(32px)" }} />
                  {/* Curva orgânica de luz, fortemente borrada (sugere conexão sem fio literal) */}
                  <svg className="absolute inset-0 w-full h-full" style={{ filter: "blur(6px)", opacity: 0.5 }}>
                    <defs>
                      <linearGradient id="cardGlowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(164,247,41,0)" />
                        <stop offset="45%" stopColor="rgba(164,247,41,0.45)" />
                        <stop offset="100%" stopColor="rgba(164,247,41,0)" />
                      </linearGradient>
                    </defs>
                    <path d="M 8% 22% C 28% 38%, 30% 60%, 16% 82%" fill="none" stroke="url(#cardGlowGrad)" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>

                {/* 3D object centered - Premium depth and presence */}
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }} className="flex justify-center items-center">
                  <motion.div style={{ position: "relative", transform: "translateX(6%)", x: objectX, y: objectY, rotateX: objectRotateX, rotateY: objectRotateY, transformPerspective: 1400 }}>
                    {/* Outer ambient glow */}
                    <div className="pointer-events-none absolute" style={{ inset: "-100px", background: "radial-gradient(circle, rgba(164,247,41,0.06) 0%, transparent 55%)", borderRadius: "50%", filter: "blur(60px)", zIndex: -2 }} />
                    {/* Green subtle glow */}
                    <div className="pointer-events-none absolute" style={{ inset: "-60px", background: "radial-gradient(circle, rgba(164,247,41,0.10) 0%, transparent 50%)", borderRadius: "50%", filter: "blur(40px)", zIndex: -1 }} />
                    {/* White reflection glow — reativo ao cursor (luz desliza pela superfície) */}
                    <motion.div className="pointer-events-none absolute" style={{ inset: "-30px", background: reduceHeavyMotion ? "radial-gradient(circle, rgba(255,255,255,0.22) 0%, transparent 55%)" : glareBg, borderRadius: "50%", zIndex: -1 }} />
                    <motion.div
                      animate={reduceHeavyMotion ? {} : { y: [0, -10, 0] }}
                      transition={reduceHeavyMotion ? undefined : { duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
                      style={{ position: "relative" }}
                    >
                      <img
                        src={glassObject}
                        alt="HardTech — Objeto 3D tecnológico"
                        loading="eager"
                        fetchPriority="high"
                        decoding="async"
                        width={540}
                        height={540}
                        style={{ 
                          width: "540px", 
                          height: "540px", 
                          objectFit: "contain", 
                          filter: "drop-shadow(0 30px 70px rgba(0,0,0,0.12)) drop-shadow(0 10px 25px rgba(0,0,0,0.08))" 
                        }}
                      />
                      {/* Refined floor reflection */}
                      <div className="pointer-events-none absolute" style={{ bottom: "-18px", left: "50%", transform: "translateX(-50%)", width: "60%", height: "18px", background: "radial-gradient(ellipse, rgba(0,0,0,0.12) 0%, transparent 70%)", filter: "blur(10px)" }} />
                      {/* Sombra de contato mais definida — aterra o objeto */}
                      <div className="pointer-events-none absolute" style={{ bottom: "-10px", left: "50%", transform: "translateX(-50%)", width: "34%", height: "10px", background: "radial-gradient(ellipse, rgba(0,0,0,0.16) 0%, transparent 72%)", filter: "blur(5px)" }} />
                      {/* Halo verde discreto — reflexo de contato no chão */}
                      <div className="pointer-events-none absolute" style={{ bottom: "-14px", left: "50%", transform: "translateX(-50%)", width: "46%", height: "14px", background: "radial-gradient(ellipse, rgba(164,247,41,0.18) 0%, transparent 70%)", filter: "blur(9px)" }} />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Floating service cards */}
                <motion.div style={{ position: "absolute", inset: 0, x: cardsX, y: cardsY, zIndex: 20 }}>
                  {services.map((s, i) => (
                    <FloatingServiceCard
                      key={s.title}
                      title={s.title}
                      description={s.description}
                      Icon={s.Icon}
                      className={s.className}
                      scale={s.scale}
                      cardOpacity={s.cardOpacity}
                      depthZ={s.depthZ}
                      index={i}
                      suppressIdleMotion={reduceHeavyMotion}
                    />
                  ))}
                </motion.div>
              </motion.div>

              {/* Mobile visual block — 3D object with orbiting service cards (Mobile only) */}
              <div className="block lg:hidden mt-2">
                <div className="relative mx-auto" style={{ height: "320px", maxWidth: "440px" }}>
                  {/* Ambient green glow */}
                  <div className="absolute pointer-events-none" style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "80%", height: "80%", background: "radial-gradient(circle, rgba(164,247,41,0.09) 0%, transparent 60%)", borderRadius: "50%", filter: "blur(36px)" }} />
                  {/* Inner white glow */}
                  <div className="absolute pointer-events-none" style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "52%", height: "52%", background: "radial-gradient(circle, rgba(255,255,255,0.22) 0%, transparent 55%)", borderRadius: "50%" }} />

                  {/* Glass orbs sutis (mobile — reduzidos: apenas 2, leves) */}
                  <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 2 }} aria-hidden="true">
                    {[
                      { top: "14%", left: "16%", size: 110, bg: "radial-gradient(circle at 35% 30%, rgba(255,255,255,0.26) 0%, transparent 68%)", blur: 18, amp: 9, dur: 10, delay: 0 },
                      { top: "58%", left: "64%", size: 90, bg: "radial-gradient(circle at 35% 30%, rgba(164,247,41,0.10) 0%, transparent 68%)", blur: 16, amp: 7, dur: 12, delay: 1.2 },
                    ].map((o, i) => (
                      <motion.div
                        key={i}
                        animate={reducedMotion ? {} : { y: [0, -o.amp, 0], opacity: [0.7, 1, 0.7] }}
                        transition={reducedMotion ? undefined : { duration: o.dur, repeat: Infinity, ease: "easeInOut", delay: o.delay }}
                        style={{ position: "absolute", top: o.top, left: o.left, width: `${o.size}px`, height: `${o.size}px`, borderRadius: "50%", background: o.bg, filter: `blur(${o.blur}px)`, willChange: "transform" }}
                      />
                    ))}
                  </div>

                  {/* 3D object — visual center */}
                  <div
                    className="absolute flex items-center justify-center"
                    style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "250px", maxWidth: "64vw", zIndex: 10 }}
                  >
                    <motion.img
                      src={glassObject}
                      alt="HardTech — Objeto 3D tecnológico"
                      animate={reducedMotion ? {} : { y: [0, -9, 0] }}
                      transition={reducedMotion ? undefined : { duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                      style={{
                        width: "100%", height: "auto", objectFit: "contain",
                        filter: "drop-shadow(0 24px 50px rgba(0,0,0,0.10)) drop-shadow(0 8px 20px rgba(0,0,0,0.06))"
                      }}
                    />
                  </div>
                  {/* floor shadow */}
                  <div className="absolute pointer-events-none" style={{ bottom: "18%", left: "50%", transform: "translateX(-50%)", width: "44%", height: "14px", background: "radial-gradient(ellipse, rgba(0,0,0,0.12) 0%, transparent 70%)", filter: "blur(8px)", zIndex: 5 }} />

                  {/* Orbiting compact cards */}
                  {[
                    { title: "Sites", description: "Mais autoridade", Icon: Globe, pos: { top: "0", left: "0" }, amp: 6, dur: 5.0, fdelay: 0 },
                    { title: "Tráfego", description: "Mais oportunidades", Icon: TrendingUp, pos: { top: "0", right: "0" }, amp: 5, dur: 4.4, fdelay: 0.7 },
                    { title: "Sistemas", description: "Operação organizada", Icon: Settings2, pos: { bottom: "4%", left: "0" }, amp: 7, dur: 5.6, fdelay: 0.3 },
                    { title: "Automações", description: "Menos retrabalho", Icon: Bot, pos: { bottom: "4%", right: "0" }, amp: 4, dur: 4.8, fdelay: 1.0 },
                  ].map((c, i) => (
                    <motion.div
                      key={c.title}
                      initial={{ opacity: 0, y: 14, scale: 0.9 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      whileHover={{ scale: 1.02, y: -3 }}
                      whileTap={{ scale: 0.98 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.5, delay: 0.15 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                      style={{
                        position: "absolute" as const,
                        ...c.pos,
                        width: "140px",
                        maxWidth: "44vw",
                        zIndex: 20,
                      }}
                    >
                      {/* Inner glass card — float contínuo independente */}
                      <motion.div
                        animate={reducedMotion ? {} : { y: [0, -c.amp, 0] }}
                        transition={reducedMotion ? undefined : { duration: c.dur, repeat: Infinity, ease: "easeInOut", delay: c.fdelay }}
                        className="glass-card glass-card-shimmer"
                        style={{
                          position: "relative" as const,
                          borderRadius: "14px",
                          padding: "9px 10px",
                          background: "rgba(255,255,255,0.42)",
                          backdropFilter: "blur(18px) saturate(1.25)",
                          WebkitBackdropFilter: "blur(18px) saturate(1.25)",
                          border: "1px solid rgba(255,255,255,0.58)",
                          boxShadow: "0 12px 30px rgba(12,12,12,0.08), inset 0 1px 0 rgba(255,255,255,0.72)",
                          overflow: "hidden",
                        }}
                      >
                        {/* top gloss */}
                        <div className="pointer-events-none absolute" style={{ top: 0, left: "12%", right: "12%", height: "1px", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.80), transparent)" }} />
                        <div className="relative flex items-center gap-1.5">
                          <div className="flex items-center justify-center flex-shrink-0" style={{ width: "24px", height: "24px", borderRadius: "7px", background: "rgba(255,255,255,0.78)", border: "1px solid rgba(255,255,255,0.9)", boxShadow: "inset 0 1px 0 rgba(255,255,255,1), 0 1px 3px rgba(0,0,0,0.05)" }}>
                            <c.Icon style={{ width: "12px", height: "12px", color: "#1A1A1A" }} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1 mb-0.5 min-w-0">
                              <span className="status-dot-pulse" style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#A4F729", boxShadow: "0 0 6px rgba(164,247,41,0.7)", flexShrink: 0 }} />
                              <span style={{ fontSize: "12px", fontWeight: 600, color: "#09090B", letterSpacing: "-0.02em", lineHeight: 1.2 }}>{c.title}</span>
                            </div>
                            <p style={{ fontSize: "10.5px", lineHeight: 1.3, color: "rgba(10,10,10,0.62)", margin: 0 }}>{c.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom benefit cards grid */}
                <div className="grid grid-cols-2 gap-3 mt-4">
                  {benefits.map((b, idx) => (
                    <motion.div
                      key={b.title}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: 0.38 + idx * 0.07, ease: [0.16, 1, 0.3, 1] }}
                      style={{
                        background: "rgba(255,255,255,0.30)",
                        backdropFilter: "blur(14px) saturate(1.25)",
                        WebkitBackdropFilter: "blur(14px) saturate(1.25)",
                        border: "1px solid rgba(255,255,255,0.45)",
                        borderRadius: "16px",
                        padding: "12px 12px",
                        minHeight: "88px",
                        boxShadow: "0 4px 16px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.65)",
                        position: "relative" as const,
                        overflow: "hidden"
                      }}
                    >
                      <div className="pointer-events-none absolute" style={{ inset: 0, background: "linear-gradient(160deg, rgba(255,255,255,0.18) 0%, transparent 50%)", borderRadius: "inherit" }} />
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "28px", height: "28px", borderRadius: "8px", background: "rgba(164,247,41,0.10)", border: "1px solid rgba(164,247,41,0.18)", marginBottom: "8px", position: "relative" as const }} className="flex justify-center items-center">
                        <b.icon style={{ width: "13px", height: "13px", color: "#2D4A0E" }} />
                      </div>
                      <div style={{ fontWeight: 700, fontSize: "12.5px", letterSpacing: "-0.02em", color: "#0A0A0A", marginBottom: "3px", position: "relative" as const }}>{b.title}</div>
                      <div style={{ fontSize: "12px", color: "rgba(10,10,10,0.55)", lineHeight: 1.45, position: "relative" as const }}>{b.desc}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Features strip — pillar bar */}
          <FeaturesStrip benefits={benefits} />

        </motion.section>

        <div className="section-hairline" aria-hidden="true" />

        {/* ── SEGMENTOS ── */}
        <SegmentosSection />

        <div className="section-hairline" aria-hidden="true" />

        {/* ── PROBLEMA / SOLUÇÃO ── */}
        <ProblemaSolucaoSection />

        <div className="section-hairline" aria-hidden="true" />

        {/* ── SERVIÇOS ── */}
        <StatsStrip reducedMotion={reducedMotion} />

        <ServicosSection />

        <div className="section-hairline" aria-hidden="true" />

        {/* ── MÉTODO ── */}
        <MetodoSection isMobile={isMobile} />

        <div className="section-hairline" aria-hidden="true" />

        {/* ─�� CTA FINAL ── */}
        <CtaFinalSection />

      </div>
    </div>
  );
}
