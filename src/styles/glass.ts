/* ─────────────────────────────────────────────
   GLASS SYSTEM — linguagem única de vidro/acrylic
   Usada em navbar, hero, cards, painéis e seções.
   Base translúcida off-white + blur moderado +
   borda specular + inner highlight no topo + sombra suave.
   ───────────────────────────────────────────── */
export const glassStyles = {
  // Camada mais sutil — badges, chips, elementos pequenos
  light: {
    background: 'rgba(255,255,255,0.26)',
    backdropFilter: 'blur(18px) saturate(1.25)',
    WebkitBackdropFilter: 'blur(18px) saturate(1.25)',
    border: '1px solid rgba(255,255,255,0.50)',
    boxShadow:
      'inset 0 1px 0 rgba(255,255,255,0.70), 0 16px 48px rgba(15,23,42,0.07)',
  },
  // Camada padrão — cards e painéis de conteúdo
  medium: {
    background: 'rgba(255,255,255,0.30)',
    backdropFilter: 'blur(20px) saturate(1.25)',
    WebkitBackdropFilter: 'blur(20px) saturate(1.25)',
    border: '1px solid rgba(255,255,255,0.55)',
    boxShadow:
      'inset 0 1px 0 rgba(255,255,255,0.72), 0 20px 56px rgba(15,23,42,0.08)',
  },
  // Camada mais densa — containers grandes e seções
  heavy: {
    background: 'rgba(255,255,255,0.34)',
    backdropFilter: 'blur(24px) saturate(1.3)',
    WebkitBackdropFilter: 'blur(24px) saturate(1.3)',
    border: '1px solid rgba(255,255,255,0.58)',
    boxShadow:
      'inset 0 1px 0 rgba(255,255,255,0.74), 0 24px 64px rgba(15,23,42,0.09)',
  },
  // Para hover state de qualquer card
  hoverTransition: {
    transition: 'all 0.30s cubic-bezier(0.16, 1, 0.3, 1)',
  },
};
