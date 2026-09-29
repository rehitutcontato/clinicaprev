'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldCheck,
  Activity,
  Zap,
  ArrowUpRight,
  CheckCircle2,
  TrendingUp,
  Lock,
  Sparkles,
  AlertCircle,
  ChevronDown,
  Stethoscope,
  Gauge,
  Layers,
  Scan,
  Compass,
  Eye,
  Sliders,
  Phone,
  Clock,
  Award,
  ChevronRight,
  Check,
  Building2,
  MapPin,
  ExternalLink,
  Cpu,
  BarChart3,
  Server
} from 'lucide-react';

const WHATSAPP_BASE_URL = "https://wa.me/5519994656845?text=Ol%C3%A1%2C%20Pablo.%20Gostaria%20de%20solicitar%20uma%20anamnese%20digital%20da%20minha%20cl%C3%ADnica%20com%20a%20Parvus%20Space.";

interface ProcedureConfig {
  id: string;
  name: string;
  category: string;
  ticket: number;
  ticketFormatted: string;
  lostMonthlyDefault: number;
  description: string;
}

const PROCEDURES_DATA: ProcedureConfig[] = [
  {
    id: 'lipo-hd',
    name: 'Lipoaspiração HD & Contorno',
    category: 'Cirurgia Plástica',
    ticket: 35000,
    ticketFormatted: 'R$ 35.000',
    lostMonthlyDefault: 2,
    description: 'Pacientes de alta renda pesquisam discrição e definição cirúrgica impecável no mobile antes de visitar a clínica.'
  },
  {
    id: 'lentes',
    name: 'Lentes em Porcelana Premium',
    category: 'Odontologia Estética',
    ticket: 18000,
    ticketFormatted: 'R$ 18.000',
    lostMonthlyDefault: 2,
    description: 'Casos estéticos de 10 a 20 elementos exigem percepção visual de joalheria para neutralizar comparações de preço.'
  },
  {
    id: 'all-on-4',
    name: 'Protocolo All-on-4 Carga Imediata',
    category: 'Implantodontia Avançada',
    ticket: 25000,
    ticketFormatted: 'R$ 25.000',
    lostMonthlyDefault: 2,
    description: 'Tratamentos de reabilitação oral completa demandam transmissão de segurança e autoridade médica absoluta.'
  },
  {
    id: 'harmonizacao',
    name: 'Harmonização Facial Full Face',
    category: 'Dermatologia & Estética',
    ticket: 16000,
    ticketFormatted: 'R$ 16.000',
    lostMonthlyDefault: 3,
    description: 'Protocolos de sustentação e bioestimulação perdem tração quando a landing page parece um panfleto estético vulgar.'
  }
];

export default function MasterExperiencePage() {
  // Simulator State
  const [simulatorMode, setSimulatorMode] = useState<'facial' | 'smile'>('facial');
  const [scannerActive, setScannerActive] = useState(true);
  const [goldenRatioGuide, setGoldenRatioGuide] = useState(true);
  const [retentionRate, setRetentionRate] = useState(94.8);
  const [latencyTime, setLatencyTime] = useState(0.38);

  // Financial Terminal State
  const [selectedProcedure, setSelectedProcedure] = useState<ProcedureConfig>(PROCEDURES_DATA[0]);
  const [lostPatientsPerMonth, setLostPatientsPerMonth] = useState<number>(2);
  const [financialDashboardTab, setFinancialDashboardTab] = useState<'trimestral' | 'procedimentos' | 'kpis'>('trimestral');

  // FAQ State
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Quick Diagnostic Modal
  const [isDiagnosticModalOpen, setIsDiagnosticModalOpen] = useState(false);
  const [modalForm, setModalForm] = useState({
    clinicName: '',
    specialty: 'Cirurgia Plástica',
    region: 'Jardins (São Paulo)',
    averageTicket: 'R$ 20.000 - R$ 40.000',
    doctorName: ''
  });

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const calculatedLossYear = selectedProcedure.ticket * lostPatientsPerMonth * 12;
  const calculatedLossMonth = selectedProcedure.ticket * lostPatientsPerMonth;

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const customMessage = `Olá, Pablo. Gostaria de solicitar a Anamnese Digital da minha clínica com a Parvus Space.%0A%0A• Clínica: ${encodeURIComponent(modalForm.clinicName || 'Não informada')}%0A• Responsável: ${encodeURIComponent(modalForm.doctorName || 'Doutor(a)')}%0A• Especialidade: ${encodeURIComponent(modalForm.specialty)}%0A• Polo / Região: ${encodeURIComponent(modalForm.region)}%0A• Ticket Médio: ${encodeURIComponent(modalForm.averageTicket)}`;
    window.location.href = `https://wa.me/5519994656845?text=${customMessage}`;
  };

  return (
    <main className="min-h-screen bg-[#030303] text-zinc-100 selection:bg-amber-500/20 selection:text-amber-200 relative overflow-hidden font-sans">
      
      {/* BACKGROUND SURGICAL GRID & AMBIENT ATMOSPHERE */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 surgical-grid opacity-70" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[650px] bg-gradient-to-b from-amber-500/10 via-amber-700/5 to-transparent blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute top-[40%] -left-[200px] w-[600px] h-[600px] bg-amber-600/5 blur-[160px] rounded-full pointer-events-none" />
        <div className="absolute top-[70%] -right-[200px] w-[700px] h-[700px] bg-amber-500/5 blur-[180px] rounded-full pointer-events-none" />
        
        {/* Subtle vertical hairline metric lines */}
        <div className="hidden lg:block absolute left-[8%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-amber-400/10 to-transparent" />
        <div className="hidden lg:block absolute right-[8%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-amber-400/10 to-transparent" />
      </div>

      {/* 1. TOPBAR FLUTUANTE EM VIDRO ("SURGICAL DYNAMIC ISLAND") */}
      <header className="fixed top-5 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
        <motion.div 
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-auto w-full max-w-5xl backdrop-blur-2xl bg-zinc-950/80 border-[0.5px] border-amber-400/25 rounded-full px-4 sm:px-6 py-2.5 sm:py-3 shadow-[0_15px_40px_rgba(0,0,0,0.85)] flex items-center justify-between gap-3 sm:gap-6 transition-all duration-300 hover:border-amber-400/40"
        >
          {/* Brand & Diagnostic Badge */}
          <div className="flex items-center gap-3">
            <a href="/" className="flex items-center gap-2 group">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-amber-200/20 via-amber-500/20 to-black border-[0.5px] border-amber-400/40 flex items-center justify-center text-amber-300 font-serif text-sm font-semibold tracking-wider group-hover:border-amber-300 transition-colors">
                PS
              </div>
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-zinc-100 uppercase group-hover:text-amber-200 transition-colors">
                  PARVUS SPACE
                </span>
                <span className="text-[9px] font-medium tracking-[0.15em] text-amber-400/70 hidden sm:block uppercase">
                  DIAGNÓSTICO DIGITAL DE ALTA PRECISÃO
                </span>
              </div>
            </a>
          </div>

          {/* Operational Status Dot */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/30 border-[0.5px] border-emerald-500/25">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[11px] font-medium text-emerald-400/90 whitespace-nowrap">
              Centro Cirúrgico Digital Ativo · RMC & SP
            </span>
          </div>

          {/* Action Trigger */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsDiagnosticModalOpen(true)}
              className="text-[11px] sm:text-xs font-medium text-zinc-400 hover:text-amber-200 px-2.5 py-1.5 transition-colors hidden lg:block whitespace-nowrap"
            >
              Simulação de Perdas
            </button>
            <a
              href={WHATSAPP_BASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-semibold tracking-wider text-amber-100 rounded-full bg-gradient-to-r from-amber-500/20 to-amber-700/20 border-[0.5px] border-amber-400/50 hover:border-amber-300 hover:bg-amber-500/30 transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.15)] whitespace-nowrap"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400 group-hover:rotate-12 transition-transform" />
              <span>Anamnese Imediata</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </motion.div>
      </header>

      {/* 2. HERO SECTION CINEMATOGRÁFICA (A FUSÃO ENTRE ARTE, OURO E CIRURGIA) */}
      <section className="relative pt-36 sm:pt-44 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
        
        {/* Floating Ambient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-amber-400/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="text-center max-w-4xl mx-auto space-y-7">
          
          {/* Hairline Lapidated Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-950/20 border-[0.5px] border-amber-400/30 backdrop-blur-md shadow-[0_0_25px_rgba(212,175,55,0.08)]"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] text-amber-200/90 uppercase">
              PARVUS SPACE · ARQUITETURA DIGITAL PRIVADA PARA CLÍNICAS DE ELITE
            </span>
          </motion.div>

          {/* Hero Editorial Headline in Liquid Gold */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-serif tracking-tight leading-[1.12] text-balance font-medium"
          >
            <span className="text-zinc-100">O Paradoxo da Clínica de Luxo:</span>
            <br />
            <span className="text-zinc-400 italic font-light">Sua estrutura física é impecável.</span>
            <br />
            <span className="gold-gradient-text font-serif italic">
              Por que sua presença digital afasta pacientes particulares?
            </span>
          </motion.h1>

          {/* Subheadline in Cold, Precise Sans-Serif */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed max-w-3xl mx-auto text-balance"
          >
            O paciente disposto a investir entre <strong className="text-zinc-200 font-medium">R$ 15.000 e R$ 40.000</strong> em Lipo HD, Lentes em Porcelana ou Protocolo exige segurança no primeiro toque. Quando sua página mobile demora para carregar ou parece um template reciclado de agência, ele fecha a tela e agenda com o concorrente antes mesmo de conhecer seu corpo clínico.
          </motion.p>

          {/* Monumental Action Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href={WHATSAPP_BASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto relative group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#AA771C] to-[#8C5E13] text-black font-semibold text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_0_35px_rgba(212,175,55,0.35)] hover:shadow-[0_0_50px_rgba(212,175,55,0.6)] hover:scale-[1.02] active:scale-[0.98] border-[0.5px] border-amber-200/60"
            >
              <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Stethoscope className="w-4 h-4 text-black group-hover:rotate-12 transition-transform" />
              <span>Solicitar Anamnese Digital da Clínica</span>
              <ArrowUpRight className="w-4 h-4 text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>

            <button
              onClick={() => {
                const element = document.getElementById('terminal-financeiro');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-zinc-950/60 border-[0.5px] border-zinc-800 text-zinc-300 hover:text-amber-200 hover:border-amber-400/40 text-sm font-medium tracking-wide transition-all duration-300 backdrop-blur-xl"
            >
              <Gauge className="w-4 h-4 text-amber-400/80" />
              <span>Calcular Hemorragia Financeira</span>
            </button>
          </motion.div>

          {/* Clinical Metrics Ruler */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
          >
            <div className="p-4 rounded-2xl bg-zinc-950/50 border-[0.5px] border-amber-400/20 backdrop-blur-xl text-center group hover:border-amber-400/40 transition-colors">
              <span className="block text-2xl sm:text-3xl font-serif font-bold gold-gradient-text tracking-tight tabular-nums">
                0.38s
              </span>
              <span className="text-xs font-semibold text-zinc-200 block mt-1">
                Intervenção Anti-Fricção
              </span>
              <span className="text-[11px] text-zinc-500 font-light block">
                Carregamento instantâneo no 4G
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-950/50 border-[0.5px] border-amber-400/20 backdrop-blur-xl text-center group hover:border-amber-400/40 transition-colors">
              <span className="block text-2xl sm:text-3xl font-serif font-bold gold-gradient-text tracking-tight tabular-nums">
                0% Templates
              </span>
              <span className="text-xs font-semibold text-zinc-200 block mt-1">
                Código Proprietário
              </span>
              <span className="text-[11px] text-zinc-500 font-light block">
                Compilado do zero em Next.js
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-950/50 border-[0.5px] border-amber-400/20 backdrop-blur-xl text-center group hover:border-amber-400/40 transition-colors">
              <span className="block text-2xl sm:text-3xl font-serif font-bold gold-gradient-text tracking-tight tabular-nums">
                100% Ético
              </span>
              <span className="text-xs font-semibold text-zinc-200 block mt-1">
                Blindagem Regulatória
              </span>
              <span className="text-[11px] text-zinc-500 font-light block">
                Conformidade com CFM e CROSP
              </span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 3. SHOWCASE INTERATIVO: O SIMULADOR DE ESCANEAMENTO FACIAL & SMILE DESIGN */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 border-t-[0.5px] border-amber-400/15">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-amber-400 uppercase">
            <Scan className="w-4 h-4" />
            <span>ENGENHARIA VISUAL APLICADA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-zinc-100">
            O Simulador de Precisão Digital: <br />
            <span className="gold-gradient-text italic font-serif">Escaneamento Facial & Smile Design</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-light">
            Experimente o nível de calibração que seu paciente experimenta ao abrir um projeto desenvolvido pela Parvus Space no smartphone.
          </p>

          {/* Procedure Switcher Tabs */}
          <div className="pt-2 flex items-center justify-center gap-2 p-1.5 bg-zinc-950/80 border-[0.5px] border-amber-400/30 rounded-xl max-w-md mx-auto">
            <button
              onClick={() => setSimulatorMode('facial')}
              className={`flex-1 py-2 px-3 text-xs font-medium rounded-lg transition-all ${
                simulatorMode === 'facial'
                  ? 'bg-gradient-to-r from-amber-500/20 to-amber-700/20 border-[0.5px] border-amber-400/50 text-amber-200 shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Perfil Facial & Harmonização
            </button>
            <button
              onClick={() => setSimulatorMode('smile')}
              className={`flex-1 py-2 px-3 text-xs font-medium rounded-lg transition-all ${
                simulatorMode === 'smile'
                  ? 'bg-gradient-to-r from-amber-500/20 to-amber-700/20 border-[0.5px] border-amber-400/50 text-amber-200 shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Smile Design & Lentes
            </button>
          </div>
        </div>

        {/* The Surgical Mockup Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Ambient Sheen Behind Mockup */}
          <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 via-transparent to-amber-900/10 rounded-3xl blur-2xl" />

          {/* Interactive Titanium Device Frame */}
          <div className="relative rounded-3xl bg-zinc-950/90 border-[0.5px] border-amber-400/40 p-4 sm:p-8 backdrop-blur-3xl shadow-[0_25px_60px_rgba(0,0,0,0.9)]">
            
            {/* Top Toolbar of Device */}
            <div className="flex items-center justify-between pb-6 border-b-[0.5px] border-zinc-800">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
                </div>
                <span className="text-xs font-mono text-zinc-400 tracking-wider">
                  PARVUS_SURGICAL_OS // v4.2 PRO
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setGoldenRatioGuide(!goldenRatioGuide)}
                  className={`text-[11px] font-mono px-2.5 py-1 rounded border transition-colors flex items-center gap-1.5 ${
                    goldenRatioGuide
                      ? 'border-amber-400/50 bg-amber-400/10 text-amber-200'
                      : 'border-zinc-800 text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  <Compass className="w-3 h-3 text-amber-400" />
                  <span>Proporção Áurea 1:1.618</span>
                </button>
                <button
                  onClick={() => setScannerActive(!scannerActive)}
                  className={`text-[11px] font-mono px-2.5 py-1 rounded border transition-colors flex items-center gap-1.5 ${
                    scannerActive
                      ? 'border-emerald-500/50 bg-emerald-500/10 text-emerald-300'
                      : 'border-zinc-800 text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  <Activity className="w-3 h-3 text-emerald-400" />
                  <span>Laser Ativo</span>
                </button>
              </div>
            </div>

            {/* Mockup Canvas Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-center">
              
              {/* Left Column: The Interactive Smartphone Screen */}
              <div className="lg:col-span-7 flex justify-center">
                <div className="relative w-full max-w-[340px] aspect-[9/18] rounded-[42px] bg-[#070708] border-[2px] border-amber-400/35 p-3.5 shadow-[0_0_50px_rgba(212,175,55,0.15)] overflow-hidden">
                  
                  {/* Dynamic Island of Phone */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-30 flex items-center justify-between px-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-900 border border-zinc-700" />
                  </div>

                  {/* Inner Phone Screen Content */}
                  <div className="relative w-full h-full rounded-[32px] bg-gradient-to-b from-[#0a0a0c] via-[#050507] to-[#0a0805] overflow-hidden p-4 pt-10 flex flex-col justify-between surgical-grid-dense">
                    
                    {/* Live Laser Scanning Line with Dynamic Speed */}
                    {scannerActive && (
                      <div 
                        className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-amber-300 to-transparent shadow-[0_0_15px_#D4AF37] z-20 animate-scan-vertical pointer-events-none"
                        style={{ animationDuration: `${Math.max(1.2, latencyTime * 3.2)}s` }}
                      />
                    )}

                    {/* Ergonomic Thumb Zone Heatmap Arc on Phone Screen */}
                    <div 
                      className="absolute -bottom-10 -right-10 w-44 h-44 rounded-full border border-dashed transition-all duration-500 pointer-events-none z-10 flex items-center justify-center"
                      style={{
                        borderColor: latencyTime <= 0.45 ? 'rgba(212, 175, 55, 0.4)' : latencyTime <= 0.8 ? 'rgba(245, 158, 11, 0.3)' : 'rgba(239, 68, 68, 0.4)',
                        backgroundColor: latencyTime <= 0.45 ? 'rgba(212, 175, 55, 0.05)' : 'rgba(239, 68, 68, 0.05)',
                        transform: `scale(${0.9 + (retentionRate / 100) * 0.25})`,
                      }}
                    >
                      <span className="text-[8px] font-mono text-amber-400/80 -translate-x-3 -translate-y-3">
                        Thumb Reach
                      </span>
                    </div>

                    {/* Golden Ratio Blueprint Vector Graphic */}
                    <div className="relative flex-1 flex flex-col items-center justify-center my-4">
                      
                      {/* Golden Ratio Circles & Grid Guides */}
                      {goldenRatioGuide && (
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
                          <div className="w-52 h-52 rounded-full border-[0.5px] border-dashed border-amber-400/60" />
                          <div className="absolute w-32 h-32 rounded-full border-[0.5px] border-amber-400/50" />
                          <div className="absolute w-20 h-20 rounded-full border-[0.5px] border-amber-400/40" />
                          <div className="absolute w-full h-[1px] bg-amber-400/25" />
                          <div className="absolute h-full w-[1px] bg-amber-400/25" />
                          <span className="absolute top-2 right-2 text-[9px] font-mono text-amber-300/80">
                            Φ = 1.61803
                          </span>
                        </div>
                      )}

                      {/* Vector Anatomy Drawing (Facial Profile vs Smile Design) */}
                      {simulatorMode === 'facial' ? (
                        <div className="relative w-44 h-56 flex items-center justify-center">
                          {/* Aesthetic Cephalometric Profile Vector */}
                          <svg viewBox="0 0 200 260" className="w-full h-full stroke-amber-300/80 fill-none" strokeWidth="1.2">
                            {/* Craniofacial Outline */}
                            <path d="M 60 40 C 90 25, 140 30, 150 70 C 155 90, 150 110, 145 125 C 158 135, 162 145, 145 152 C 155 165, 145 180, 130 185 C 135 200, 115 220, 90 230 C 75 235, 60 235, 50 230" strokeDasharray="3 2" opacity="0.6" />
                            {/* Precise Profile Line */}
                            <path d="M 80 40 Q 120 50 120 85 Q 120 110 115 120 Q 130 130 138 138 Q 115 142 120 152 Q 135 158 128 172 Q 110 178 122 195 Q 110 215 85 225" stroke="#F5D061" strokeWidth="1.8" />
                            {/* Key Cephalometric Target Points */}
                            <circle cx="120" cy="85" r="3" fill="#D4AF37" />
                            <circle cx="138" cy="138" r="3" fill="#D4AF37" />
                            <circle cx="128" cy="172" r="3" fill="#D4AF37" />
                            <circle cx="122" cy="195" r="3" fill="#D4AF37" />
                          </svg>

                          {/* Surgical Vector Markers */}
                          <div className="absolute top-8 right-2 text-[9px] font-mono text-zinc-400 bg-black/70 px-1.5 py-0.5 rounded border border-amber-400/30">
                            Glabella: 104°
                          </div>
                          <div className="absolute bottom-16 right-0 text-[9px] font-mono text-zinc-400 bg-black/70 px-1.5 py-0.5 rounded border border-amber-400/30">
                            Ângulo Mandibular: 120°
                          </div>
                          <div className="absolute bottom-6 left-2 text-[9px] font-mono text-amber-300 bg-amber-950/80 px-1.5 py-0.5 rounded border border-amber-400/50">
                            Lipo HD Cervical: 100% Simétrico
                          </div>
                        </div>
                      ) : (
                        <div className="relative w-48 h-56 flex flex-col items-center justify-center">
                          {/* Smile Design & Golden Proportion Tooth Caliper Vector */}
                          <svg viewBox="0 0 240 180" className="w-full h-full stroke-amber-300 fill-none" strokeWidth="1.2">
                            {/* Upper Dental Arch Archwire */}
                            <path d="M 20 120 Q 120 40 220 120" stroke="#D4AF37" strokeWidth="1" strokeDasharray="4 2" />
                            
                            {/* Central Incisor Left (11) - Golden Ratio Width */}
                            <rect x="95" y="70" width="22" height="35" rx="3" stroke="#F5D061" strokeWidth="1.6" fill="rgba(212,175,55,0.15)" />
                            {/* Central Incisor Right (21) */}
                            <rect x="123" y="70" width="22" height="35" rx="3" stroke="#F5D061" strokeWidth="1.6" fill="rgba(212,175,55,0.15)" />
                            {/* Lateral Incisor (12) - 61.8% of Central */}
                            <rect x="70" y="73" width="20" height="30" rx="3" stroke="#F5D061" strokeWidth="1.4" fill="rgba(212,175,55,0.1)" />
                            {/* Lateral Incisor (22) */}
                            <rect x="150" y="73" width="20" height="30" rx="3" stroke="#F5D061" strokeWidth="1.4" fill="rgba(212,175,55,0.1)" />
                            {/* Canine (13) */}
                            <rect x="47" y="77" width="18" height="28" rx="3" stroke="#AA771C" strokeWidth="1.2" fill="rgba(212,175,55,0.05)" />
                            {/* Canine (23) */}
                            <rect x="175" y="77" width="18" height="28" rx="3" stroke="#AA771C" strokeWidth="1.2" fill="rgba(212,175,55,0.05)" />
                          </svg>

                          <div className="absolute top-4 text-[9px] font-mono text-amber-200 bg-black/80 px-2 py-0.5 rounded border border-amber-400/40">
                            Proporção Incisal: 1 : 1.618
                          </div>
                          <div className="absolute bottom-8 text-[9px] font-mono text-zinc-300 bg-black/80 px-2 py-0.5 rounded border border-zinc-700">
                            Zenith Gengival: Alinhado a 0.2mm
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Bottom Status Readout inside Phone */}
                    <div className="pt-2 border-t-[0.5px] border-zinc-800/80 flex items-center justify-between text-[10px] font-mono">
                      <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                        <CheckCircle2 className="w-3 h-3" />
                        Next.js 14 Core
                      </span>
                      <span className={`tabular-nums font-bold ${
                        latencyTime <= 0.45 ? 'text-amber-300' : latencyTime <= 0.8 ? 'text-amber-400' : 'text-red-400'
                      }`}>
                        {latencyTime}s · {retentionRate}%
                      </span>
                    </div>

                  </div>
                </div>
              </div>

              {/* Right Column: Dynamic Parameters & Conversion Metrics with Interactive 3D Hologram */}
              <div className="lg:col-span-5 space-y-6">
                
                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-amber-400">
                    CALIBRAÇÃO DE CONVERSÃO
                  </span>
                  <h3 className="text-2xl font-serif font-medium text-zinc-100">
                    A Ergonomia que Faz o Paciente Permanecer
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
                    Cada elemento visual é posicionado segundo as zonas táteis de alcance do polegar (Thumb Zone Ergonomics). Ao eliminar a rolagem pesada e os scripts lentos de agências, a atenção do lead é capturada instantaneamente.
                  </p>
                </div>

                {/* Precision Sliders */}
                <div className="space-y-4 p-5 rounded-2xl bg-zinc-950/60 border-[0.5px] border-amber-400/20 backdrop-blur-md">
                  
                  {/* Slider 1: Retenção Mobile */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs">
                      <span className="text-zinc-300 font-medium">Retenção de Pacientes no Mobile</span>
                      <span className="text-amber-300 font-mono font-bold tabular-nums">{retentionRate}%</span>
                    </div>
                    <input
                      type="range"
                      min="70"
                      max="99"
                      step="0.1"
                      value={retentionRate}
                      onChange={(e) => setRetentionRate(parseFloat(e.target.value))}
                      className="w-full accent-amber-400 cursor-pointer h-1.5 bg-zinc-800 rounded-lg"
                    />
                    <span className="text-[10px] text-zinc-500 block">
                      vs. 32% de retenção média em páginas comuns de agências
                    </span>
                  </div>

                  {/* Slider 2: Latência */}
                  <div className="space-y-1.5 pt-2 border-t-[0.5px] border-zinc-800">
                    <div className="flex justify-between text-xs">
                      <span className="text-zinc-300 font-medium">Latência de Renderização</span>
                      <span className="text-amber-300 font-mono font-bold tabular-nums">{latencyTime}s</span>
                    </div>
                    <input
                      type="range"
                      min="0.2"
                      max="1.5"
                      step="0.05"
                      value={latencyTime}
                      onChange={(e) => setLatencyTime(parseFloat(e.target.value))}
                      className="w-full accent-amber-400 cursor-pointer h-1.5 bg-zinc-800 rounded-lg"
                    />
                    <span className="text-[10px] text-zinc-500 block">
                      Cada 0.5s de atraso adicional reduz 23% dos agendamentos
                    </span>
                  </div>

                </div>

                {/* NOVO: MOTOR VISUAL INTERATIVO 3D DE CONVERSÃO & ERGONOMIA */}
                <div className="rounded-2xl bg-gradient-to-b from-zinc-950 to-zinc-900/80 border-[0.5px] border-amber-400/30 p-4 sm:p-5 shadow-[0_15px_35px_rgba(0,0,0,0.8)] space-y-4">
                  
                  {/* Top Bar of the 3D Stage */}
                  <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                      <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-amber-300">
                        HOLOGRAMA 3D · RESPOSTA ERGONÔMICA
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                      PERSPECTIVE 3D
                    </span>
                  </div>

                  {/* 3D Isometric Viewport */}
                  <div 
                    className="relative h-48 w-full rounded-xl bg-gradient-to-b from-[#060608] to-[#0d0a06] border border-amber-400/20 overflow-hidden flex items-center justify-center"
                    style={{ perspective: '800px' }}
                  >
                    
                    {/* Isometric Grid Floor */}
                    <div 
                      className="absolute inset-x-0 bottom-0 h-40 origin-bottom surgical-grid-dense opacity-40 pointer-events-none"
                      style={{
                        transform: 'rotateX(62deg) rotateZ(-18deg) scale(1.6)',
                        transformStyle: 'preserve-3d',
                      }}
                    />

                    {/* 3D Pillar Stage */}
                    <div 
                      className="relative z-10 flex items-end justify-center gap-6 sm:gap-9 pb-3"
                      style={{
                        transform: 'rotateX(18deg) rotateY(-14deg)',
                        transformStyle: 'preserve-3d',
                      }}
                    >
                      
                      {/* PILLAR 1: AGÊNCIA CONVENCIONAL (Fixo Baixo / Fricção Alta) */}
                      <div className="flex flex-col items-center group">
                        <span className="text-[9px] font-mono text-red-400/90 mb-1 font-semibold">
                          32%
                        </span>
                        
                        {/* 3D Column Body */}
                        <div 
                          className="relative w-12 sm:w-14 rounded-t-md transition-all duration-500 bg-gradient-to-t from-red-950/80 via-zinc-900 to-red-900/60 border-t-2 border-x border-red-500/40 shadow-[0_10px_20px_rgba(239,68,68,0.2)]"
                          style={{
                            height: '46px',
                            transform: 'translateZ(10px)',
                          }}
                        >
                          {/* 3D Top Cap */}
                          <div 
                            className="absolute -top-3 inset-x-0 h-3 bg-red-800/80 rounded-t border-t border-red-400/60"
                            style={{ transform: 'rotateX(60deg) translateY(-2px)' }}
                          />
                          {/* Inner Label */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-[8px] font-mono text-red-300 font-bold -rotate-90 whitespace-nowrap">
                              LEGACY
                            </span>
                          </div>
                        </div>

                        <span className="text-[9px] font-mono text-zinc-500 mt-2 text-center leading-tight">
                          Agência Comum<br />(WP/Plugins)
                        </span>
                      </div>

                      {/* PILLAR 2: PARVUS SPACE (Pilar Dinâmico de Ouro Líquido) */}
                      <div className="flex flex-col items-center group">
                        <motion.span 
                          key={retentionRate}
                          initial={{ scale: 0.9 }}
                          animate={{ scale: 1 }}
                          className="text-[10px] font-mono text-amber-300 font-bold mb-1 shadow-sm tabular-nums"
                        >
                          {retentionRate}%
                        </motion.span>
                        
                        {/* 3D Dynamic Column Body */}
                        <motion.div 
                          className="relative w-14 sm:w-16 rounded-t-md bg-gradient-to-t from-[#59400f] via-[#b88c28] to-[#F5D061] border-t-2 border-x border-amber-200 shadow-[0_0_30px_rgba(212,175,55,0.45)] transition-all duration-300"
                          style={{
                            height: `${Math.max(50, ((retentionRate - 65) / 35) * 115)}px`,
                            transform: 'translateZ(30px)',
                          }}
                        >
                          {/* 3D Top Cap with Golden Reflection */}
                          <div 
                            className="absolute -top-3.5 inset-x-0 h-3.5 bg-[#FFF2B2] rounded-t border-t border-white shadow-[0_0_12px_#FFF2B2]"
                            style={{ transform: 'rotateX(60deg) translateY(-2px)' }}
                          />
                          
                          {/* Vertical Golden Beam Effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent animate-pulse" />

                          {/* Inner Label */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-[9px] font-mono text-zinc-950 font-extrabold -rotate-90 tracking-wider">
                              PARVUS NEXT
                            </span>
                          </div>
                        </motion.div>

                        <span className="text-[9px] font-mono text-amber-300 font-medium mt-2 text-center leading-tight">
                          Parvus Space<br />(Motor Edge)
                        </span>
                      </div>

                      {/* PILLAR 3: VELOCIDADE TÁTIL (Inversamente proporcional à latência) */}
                      <div className="flex flex-col items-center group">
                        <motion.span 
                          key={latencyTime}
                          className={`text-[9px] font-mono mb-1 font-semibold tabular-nums ${
                            latencyTime <= 0.45 ? 'text-emerald-400' : latencyTime <= 0.8 ? 'text-amber-400' : 'text-red-400'
                          }`}
                        >
                          {latencyTime}s
                        </motion.span>
                        
                        {/* 3D Column Height responsive to speed */}
                        <motion.div 
                          className={`relative w-12 sm:w-14 rounded-t-md transition-all duration-300 border-t-2 border-x shadow-lg ${
                            latencyTime <= 0.45 
                              ? 'bg-gradient-to-t from-emerald-950 via-emerald-800 to-emerald-400 border-emerald-300 shadow-emerald-500/20'
                              : latencyTime <= 0.8
                              ? 'bg-gradient-to-t from-amber-950 via-amber-700 to-amber-400 border-amber-300 shadow-amber-500/20'
                              : 'bg-gradient-to-t from-red-950 via-red-800 to-red-500 border-red-300 shadow-red-500/20'
                          }`}
                          style={{
                            height: `${Math.max(25, Math.min(110, (1.6 - latencyTime) * 75))}px`,
                            transform: 'translateZ(18px)',
                          }}
                        >
                          {/* 3D Top Cap */}
                          <div 
                            className={`absolute -top-3 inset-x-0 h-3 rounded-t border-t ${
                              latencyTime <= 0.45 ? 'bg-emerald-300 border-white' : latencyTime <= 0.8 ? 'bg-amber-300 border-white' : 'bg-red-400 border-white'
                            }`}
                            style={{ transform: 'rotateX(60deg) translateY(-2px)' }}
                          />

                          {/* Inner Label */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-[8px] font-mono text-zinc-950 font-bold -rotate-90">
                              VELOCIDADE
                            </span>
                          </div>
                        </motion.div>

                        <span className="text-[9px] font-mono text-zinc-400 mt-2 text-center leading-tight">
                          Fluidez Tátil<br />(Thumb Zone)
                        </span>
                      </div>

                    </div>

                    {/* Dynamic Status Badge Overlay inside 3D Box */}
                    <div className="absolute top-2.5 right-2.5 z-20">
                      <span className={`text-[9px] font-mono px-2 py-0.5 rounded border ${
                        latencyTime <= 0.45
                          ? 'border-emerald-500/50 bg-emerald-950/80 text-emerald-300'
                          : latencyTime <= 0.8
                          ? 'border-amber-400/50 bg-amber-950/80 text-amber-200'
                          : 'border-red-500/50 bg-red-950/80 text-red-300'
                      }`}>
                        {latencyTime <= 0.45 
                          ? '✦ ZERO-FRICÇÃO CLASSE A' 
                          : latencyTime <= 0.8 
                          ? '⚠️ ATRASO MODERADO (-18%)' 
                          : '🚨 ZONA DE ABANDONO (-42%)'}
                      </span>
                    </div>

                  </div>

                  {/* 3D Engine Computed Metrics Footer */}
                  <div className="grid grid-cols-2 gap-2 text-center text-xs font-mono">
                    <div className="p-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800">
                      <span className="text-[10px] text-zinc-400 block uppercase">
                        Ganhos de Conversão:
                      </span>
                      <span className="text-amber-300 font-bold text-sm tabular-nums">
                        +{(retentionRate - 32).toFixed(1)}% Retenção
                      </span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800">
                      <span className="text-[10px] text-zinc-400 block uppercase">
                        Impacto Estimado:
                      </span>
                      <span className="text-emerald-400 font-bold text-sm tabular-nums">
                        +{Math.round((retentionRate - 32) * 0.14)} Leads Classe A/mês
                      </span>
                    </div>
                  </div>

                </div>

                {/* Floating Badges */}
                <div className="flex flex-wrap gap-2.5">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/90 border-[0.5px] border-amber-400/30 text-xs text-amber-200">
                    <Check className="w-3.5 h-3.5 text-amber-400" />
                    <span>Retenção Mobile: {retentionRate}%</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/90 border-[0.5px] border-amber-400/30 text-xs text-amber-200">
                    <Cpu className="w-3.5 h-3.5 text-amber-400" />
                    <span>Arquitetura Própria</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/90 border-[0.5px] border-amber-400/30 text-xs text-amber-200">
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    <span>{latencyTime <= 0.45 ? 'Fricção Zero' : 'Fricção Moderada'}</span>
                  </div>
                </div>

                {/* Direct Action */}
                <div className="pt-2">
                  <a
                    href={WHATSAPP_BASE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-300 hover:text-amber-200 group"
                  >
                    <span>Aplicar Esta Tecnologia na Minha Clínica</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* 4. ANAMNESE COMPARATIVA: "PATOLOGIA DIGITAL VS. INTERVENÇÃO PARVUS" */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 border-t-[0.5px] border-amber-400/15">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-amber-400 uppercase">
            <Activity className="w-4 h-4" />
            <span>DIAGNÓSTICO CLÍNICO COMPARATIVO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-zinc-100">
            Quadro Clínico: <br />
            <span className="gold-gradient-text italic font-serif">A Anatomia do Vazamento de Pacientes</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-light max-w-2xl mx-auto">
            A maioria das clínicas sofre de patologias digitais graves causadas por agências convencionais. Veja o contraste entre o amadorismo e a alta engenharia.
          </p>
        </div>

        {/* Comparative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch relative">
          
          {/* Central Golden Divider on Large Screens */}
          <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-[1px] bg-gradient-to-b from-transparent via-amber-400/30 to-transparent -translate-x-1/2" />

          {/* CARD 1: A PATOLOGIA (Agências Tradicionais) */}
          <div className="rounded-3xl p-6 sm:p-8 bg-zinc-950/70 border-[0.5px] border-red-500/20 shadow-[0_15px_40px_rgba(0,0,0,0.6)] backdrop-blur-2xl flex flex-col justify-between space-y-6 group hover:border-red-500/30 transition-colors">
            
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
                    <AlertCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-serif font-semibold text-zinc-200">
                      O Quadro Clínico das Agências Tradicionais
                    </h3>
                    <span className="text-[11px] font-mono text-red-400 tracking-wider uppercase">
                      (A Patologia do Modelo Convencional)
                    </span>
                  </div>
                </div>
              </div>

              {/* Symptoms List */}
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-red-950/10 border border-red-500/10">
                  <span className="text-xs font-mono font-bold text-red-400 shrink-0 mt-0.5">SINTOMA 1</span>
                  <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                    <strong className="text-zinc-100 font-medium">Lentidão Estrutural:</strong> Páginas em WordPress e Elementor entupidas de plugins pesados que demoram de 4 a 7 segundos para abrir no 4G.
                  </p>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-red-950/10 border border-red-500/10">
                  <span className="text-xs font-mono font-bold text-red-400 shrink-0 mt-0.5">SINTOMA 2</span>
                  <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                    <strong className="text-zinc-100 font-medium">Dispersão do Lead:</strong> Árvores confusas de links (Linktree) que dispersam o paciente com botões irrelevantes antes do agendamento.
                  </p>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-red-950/10 border border-red-500/10">
                  <span className="text-xs font-mono font-bold text-red-400 shrink-0 mt-0.5">SINTOMA 3</span>
                  <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                    <strong className="text-zinc-100 font-medium">Canibalização de Valor:</strong> Mistura amadora de convênios populares e procedimentos baratos na mesma tela de tratamentos premium.
                  </p>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-red-950/10 border border-red-500/10">
                  <span className="text-xs font-mono font-bold text-red-400 shrink-0 mt-0.5">SINTOMA 4</span>
                  <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                    <strong className="text-zinc-100 font-medium">Erosão de Status:</strong> Ausência de autoridade visual, fazendo uma cirurgia de R$ 30.000 parecer uma compra comum de internet.
                  </p>
                </div>
              </div>
            </div>

            {/* Diagnostic Conclusion Box */}
            <div className="p-4 rounded-xl bg-red-950/30 border border-red-500/30 mt-auto">
              <span className="text-[11px] font-mono uppercase tracking-wider text-red-400 font-semibold block mb-1">
                DIAGNÓSTICO
              </span>
              <p className="text-xs sm:text-sm text-red-200 font-medium leading-relaxed">
                Hemorragia silenciosa de pacientes qualificados para concorrentes com melhor posicionamento.
              </p>
            </div>

          </div>

          {/* CARD 2: O TRATAMENTO (Protocolo de Intervenção Parvus Space) */}
          <div className="rounded-3xl p-6 sm:p-8 bg-zinc-950/80 border-[0.5px] border-amber-400/40 shadow-[0_20px_50px_rgba(212,175,55,0.1)] backdrop-blur-2xl flex flex-col justify-between space-y-6 group hover:border-amber-400/70 transition-colors">
            
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-400/40 flex items-center justify-center text-amber-400">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-serif font-semibold text-zinc-100">
                      O Protocolo de Intervenção Parvus Space
                    </h3>
                    <span className="text-[11px] font-mono text-amber-300 tracking-wider uppercase">
                      (O Tratamento de Alta Engenharia)
                    </span>
                  </div>
                </div>
              </div>

              {/* Treatments List */}
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-amber-950/15 border border-amber-400/20">
                  <span className="text-xs font-mono font-bold text-amber-300 shrink-0 mt-0.5">TRATAMENTO 1</span>
                  <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                    <strong className="text-zinc-100 font-medium">Motor Sub-Segundo:</strong> Código puro em Next.js compilado do zero, abrindo instantaneamente no primeiro segundo no smartphone.
                  </p>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-amber-950/15 border border-amber-400/20">
                  <span className="text-xs font-mono font-bold text-amber-300 shrink-0 mt-0.5">TRATAMENTO 2</span>
                  <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                    <strong className="text-zinc-100 font-medium">Design Editorial de Luxo:</strong> Apresentação editorial com estética de alta costura que valida o ticket elevado antes do contato.
                  </p>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-amber-950/15 border border-amber-400/20">
                  <span className="text-xs font-mono font-bold text-amber-300 shrink-0 mt-0.5">TRATAMENTO 3</span>
                  <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                    <strong className="text-zinc-100 font-medium">Roteamento Concierge:</strong> Roteamento inteligente que conduz o paciente particular direto para a conversa reservada com a recepção.
                  </p>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-amber-950/15 border border-amber-400/20">
                  <span className="text-xs font-mono font-bold text-amber-300 shrink-0 mt-0.5">TRATAMENTO 4</span>
                  <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                    <strong className="text-zinc-100 font-medium">Blindagem Regulatória:</strong> Blindagem total contra normas do CFM e CROSP, eliminando sensacionalismo e elevando a autoridade médica.
                  </p>
                </div>
              </div>
            </div>

            {/* Prognostic Box */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-amber-500/20 via-amber-600/10 to-transparent border-[0.5px] border-amber-400/40 mt-auto">
              <span className="text-[11px] font-mono uppercase tracking-wider text-amber-300 font-semibold block mb-1">
                PROGNÓSTICO
              </span>
              <p className="text-xs sm:text-sm text-amber-100 font-medium leading-relaxed">
                Retenção máxima da demanda qualificada e valorização imediata do corpo clínico.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* 5. TERMINAL FINANCEIRO DE LUXO: "O CUSTO DA HEMORRAGIA DIGITAL" */}
      <section id="terminal-financeiro" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 border-t-[0.5px] border-amber-400/15">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-amber-400 uppercase">
            <BarChart3 className="w-4 h-4" />
            <span>TERMINAL PRIVADO DE FINANÇAS CLÍNICAS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-zinc-100">
            Análise de Impacto Financeiro: <br />
            <span className="gold-gradient-text italic font-serif">O Custo da Hemorragia Digital</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-light max-w-2xl mx-auto">
            A lentidão mobile não é um detalhe estético — é um dreno contínuo de faturamento no seu consultório.
          </p>
        </div>

        {/* Private Financial Terminal Card */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-zinc-950/95 border-[0.5px] border-amber-400/40 p-5 sm:p-8 lg:p-10 shadow-[0_30px_80px_rgba(0,0,0,0.95)] backdrop-blur-3xl relative overflow-hidden space-y-8">
          
          {/* Subtle Ambient Gold Glow in Terminal */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 blur-[130px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-700/5 blur-[140px] pointer-events-none" />

          {/* Procedure Tabs Selector */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-mono uppercase tracking-wider text-zinc-300 block">
                Selecione o Procedimento de Maior Margem da Sua Clínica:
              </label>
              <span className="text-[10px] font-mono text-amber-400/80 hidden sm:block">
                POLOS: JARDINS · CAMBUÍ · TAQUARAL · INDAIATUBA
              </span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {PROCEDURES_DATA.map((proc) => {
                const isSelected = selectedProcedure.id === proc.id;
                return (
                  <button
                    key={proc.id}
                    onClick={() => setSelectedProcedure(proc)}
                    className={`p-4 rounded-2xl border text-left transition-all relative overflow-hidden group ${
                      isSelected
                        ? 'bg-amber-950/40 border-amber-400/80 shadow-[0_0_25px_rgba(212,175,55,0.2)] text-zinc-100 scale-[1.01]'
                        : 'bg-zinc-900/40 border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700'
                    }`}
                  >
                    {isSelected && (
                      <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-amber-400/30 to-transparent rounded-bl-2xl pointer-events-none" />
                    )}
                    <span className="text-[10px] font-mono text-amber-400/90 block uppercase tracking-wider">
                      {proc.category}
                    </span>
                    <span className="text-xs font-semibold text-zinc-100 block mt-1 truncate">
                      {proc.name}
                    </span>
                    <span className="text-sm font-serif font-bold text-amber-300 block mt-1.5 tabular-nums">
                      {proc.ticketFormatted}
                    </span>
                    <span className="text-[10px] text-zinc-500 font-light block mt-1 line-clamp-1">
                      {proc.description}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Lost Patients Per Month Slider */}
          <div className="pt-2 pb-4 space-y-3 border-b border-zinc-800/80">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-xs">
              <span className="text-zinc-300 font-medium">
                Estimativa conservadora de pacientes perdidos por mês devido à lentidão ou página amadora:
              </span>
              <span className="text-amber-300 font-mono font-bold text-base tabular-nums shrink-0">
                {lostPatientsPerMonth} paciente{lostPatientsPerMonth > 1 ? 's' : ''}/mês
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="5"
              step="1"
              value={lostPatientsPerMonth}
              onChange={(e) => setLostPatientsPerMonth(parseInt(e.target.value))}
              className="w-full accent-amber-400 cursor-pointer h-2 bg-zinc-800 rounded-lg"
            />
            <div className="flex justify-between text-[10px] font-mono text-zinc-500">
              <span>1 paciente</span>
              <span>2 pacientes (Média Cambuí/Jardins)</span>
              <span>3 pacientes</span>
              <span>4 pacientes</span>
              <span>5 pacientes</span>
            </div>
          </div>

          {/* Big Number Loss Display */}
          <div className="py-4 text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-500/30">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-red-300 font-semibold">
                VALOR ANUAL ESTIMADO DA HEMORRAGIA
              </span>
            </div>

            <motion.div 
              key={`${selectedProcedure.id}-${lostPatientsPerMonth}`}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-red-300 via-amber-200 to-amber-500 tabular-nums py-1"
            >
              - R$ {calculatedLossYear.toLocaleString('pt-BR')} / ano
            </motion.div>

            <p className="text-xs sm:text-sm text-zinc-400 font-light max-w-xl mx-auto">
              Cálculo baseado na perda de apenas <strong className="text-zinc-200 font-medium">{lostPatientsPerMonth} paciente{lostPatientsPerMonth > 1 ? 's' : ''}</strong> de <strong className="text-zinc-200 font-medium">{selectedProcedure.name} ({selectedProcedure.ticketFormatted})</strong> por mês devido ao abandono da página no celular.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-zinc-400 pt-2">
              <span className="px-3.5 py-1.5 rounded-xl bg-zinc-900/80 border border-zinc-800">
                Perda Mensal: <strong className="text-red-400 font-bold tabular-nums">R$ {calculatedLossMonth.toLocaleString('pt-BR')}</strong>
              </span>
              <span className="px-3.5 py-1.5 rounded-xl bg-zinc-900/80 border border-zinc-800">
                Pacientes Anuais Desperdiçados: <strong className="text-amber-400 font-bold tabular-nums">{lostPatientsPerMonth * 12}</strong>
              </span>
              <span className="px-3.5 py-1.5 rounded-xl bg-zinc-900/80 border border-zinc-800">
                Ticket Médio: <strong className="text-zinc-200 font-bold tabular-nums">{selectedProcedure.ticketFormatted}</strong>
              </span>
            </div>
          </div>

          {/* ======================================================== */}
          {/* MASTER DASHBOARD 3D ULTRA PREMIUM - FINANÇAS & RESGATE */}
          {/* ======================================================== */}
          <div className="rounded-3xl bg-gradient-to-b from-[#08080a] via-[#050507] to-[#0a0805] border-[0.5px] border-amber-400/35 p-5 sm:p-7 shadow-[0_25px_60px_rgba(0,0,0,0.9)] space-y-6">
            
            {/* 3D Dashboard Top Controls & View Switcher */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-4 border-b border-zinc-800/80">
              <div className="flex items-center gap-2.5">
                <div className="w-3 h-3 rounded-full bg-amber-400 shadow-[0_0_10px_#D4AF37] animate-pulse" />
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold tracking-wider text-zinc-100 uppercase font-mono">
                    DASHBOARD 3D · MATRIZ DE CAPITAL CLÍNICO
                  </h4>
                  <span className="text-[10px] text-zinc-500 font-mono block">
                    MODELAGEM EM TEMPO REAL · PROJEÇÃO ISOMÉTRICA
                  </span>
                </div>
              </div>

              {/* View Switcher Tabs */}
              <div className="flex items-center gap-1 p-1 bg-zinc-900/90 rounded-xl border border-zinc-800 text-[11px] font-mono">
                <button
                  onClick={() => setFinancialDashboardTab('trimestral')}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    financialDashboardTab === 'trimestral'
                      ? 'bg-amber-400/15 border border-amber-400/50 text-amber-200 shadow-sm'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  Projeção Trimestral (Q1-Q4)
                </button>
                <button
                  onClick={() => setFinancialDashboardTab('procedimentos')}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    financialDashboardTab === 'procedimentos'
                      ? 'bg-amber-400/15 border border-amber-400/50 text-amber-200 shadow-sm'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  Matriz Comparativa 3D
                </button>
                <button
                  onClick={() => setFinancialDashboardTab('kpis')}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    financialDashboardTab === 'kpis'
                      ? 'bg-amber-400/15 border border-amber-400/50 text-amber-200 shadow-sm'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  KPIs de Retorno
                </button>
              </div>
            </div>

            {/* TAB 1: PROJEÇÃO TRIMESTRAL 3D ISOMÉTRICA */}
            {financialDashboardTab === 'trimestral' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-zinc-400 font-mono">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-sm bg-red-600/80 shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
                      Hemorragia sem Parvus
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-sm bg-amber-400 shadow-[0_0_8px_rgba(212,175,55,0.5)]" />
                      Capital Preservado Parvus
                    </span>
                  </div>
                  <span className="text-[10px] text-amber-400/80 hidden sm:block">
                    CÁLCULO TRIMESTRAL ACUMULADO
                  </span>
                </div>

                {/* 3D Isometric Viewport */}
                <div 
                  className="relative h-64 sm:h-72 w-full rounded-2xl bg-gradient-to-b from-[#040405] via-[#08080a] to-[#0f0c07] border border-amber-400/20 overflow-hidden flex items-center justify-center p-4"
                  style={{ perspective: '900px' }}
                >
                  {/* Isometric Floor Grid */}
                  <div 
                    className="absolute inset-x-0 bottom-0 h-44 origin-bottom surgical-grid-dense opacity-45 pointer-events-none"
                    style={{
                      transform: 'rotateX(64deg) rotateZ(-16deg) scale(1.7)',
                      transformStyle: 'preserve-3d',
                    }}
                  />

                  {/* 3D Columns Stage */}
                  <div 
                    className="relative z-10 flex items-end justify-center gap-5 sm:gap-10 pb-4 w-full max-w-2xl"
                    style={{
                      transform: 'rotateX(18deg) rotateY(-12deg)',
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    {[
                      { quarter: 'Q1', multiplier: 3, label: '3 Meses' },
                      { quarter: 'Q2', multiplier: 6, label: '6 Meses' },
                      { quarter: 'Q3', multiplier: 9, label: '9 Meses' },
                      { quarter: 'Q4', multiplier: 12, label: '12 Meses' },
                    ].map((item) => {
                      const lossQuarter = calculatedLossMonth * item.multiplier;
                      const recoveredQuarter = Math.round(lossQuarter * 0.94);
                      const baseHeight = (item.multiplier / 12) * 110;

                      return (
                        <div key={item.quarter} className="flex flex-col items-center group">
                          
                          {/* Column Pair Floating Values */}
                          <div className="flex gap-2 text-[9px] font-mono mb-1 font-bold">
                            <span className="text-red-400 tabular-nums">
                              -R${Math.round(lossQuarter / 1000)}k
                            </span>
                            <span className="text-amber-300 tabular-nums">
                              +R${Math.round(recoveredQuarter / 1000)}k
                            </span>
                          </div>

                          {/* Dual Columns (Red vs Gold) */}
                          <div className="flex items-end gap-1.5">
                            
                            {/* Red Column: Loss */}
                            <motion.div 
                              className="relative w-7 sm:w-9 rounded-t-sm bg-gradient-to-t from-red-950 via-red-900 to-red-600/90 border-t-2 border-x border-red-500 shadow-[0_5px_15px_rgba(239,68,68,0.3)] transition-all duration-500"
                              style={{
                                height: `${Math.max(25, baseHeight * 1.1)}px`,
                                transform: 'translateZ(10px)',
                              }}
                            >
                              <div 
                                className="absolute -top-2 inset-x-0 h-2 bg-red-500 rounded-t border-t border-red-300"
                                style={{ transform: 'rotateX(60deg) translateY(-2px)' }}
                              />
                            </motion.div>

                            {/* Gold Column: Preserved by Parvus */}
                            <motion.div 
                              className="relative w-8 sm:w-10 rounded-t-sm bg-gradient-to-t from-[#59400f] via-[#b88c28] to-[#F5D061] border-t-2 border-x border-amber-200 shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all duration-500"
                              style={{
                                height: `${Math.max(28, baseHeight * 1.25)}px`,
                                transform: 'translateZ(25px)',
                              }}
                            >
                              <div 
                                className="absolute -top-2.5 inset-x-0 h-2.5 bg-[#FFF4B8] rounded-t border-t border-white shadow-[0_0_10px_#FFF4B8]"
                                style={{ transform: 'rotateX(60deg) translateY(-2px)' }}
                              />
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                            </motion.div>

                          </div>

                          {/* Quarter Label */}
                          <span className="text-[10px] font-mono text-zinc-300 font-bold mt-2">
                            {item.quarter}
                          </span>
                          <span className="text-[8px] font-mono text-zinc-500">
                            {item.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Corner Watermark Telemetry */}
                  <div className="absolute top-3 right-3 text-[9px] font-mono text-amber-300/80 bg-zinc-950/80 px-2.5 py-1 rounded-lg border border-amber-400/30">
                    STATUS: RESGATE ANUAL DE R$ {Math.round(calculatedLossYear * 0.94).toLocaleString('pt-BR')}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: MATRIZ COMPARATIVA DE PROCEDIMENTOS 3D */}
            {financialDashboardTab === 'procedimentos' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-zinc-400 font-mono">
                  <span>Impacto Anual Comparativo por Especialidade ({lostPatientsPerMonth} pacientes perdidos/mês):</span>
                  <span className="text-amber-400 text-[10px]">CLIQUE NO PROCEDIMENTO PARA ATIVAR</span>
                </div>

                {/* 3D Procedural Columns Stage */}
                <div 
                  className="relative h-64 sm:h-72 w-full rounded-2xl bg-gradient-to-b from-[#040405] via-[#08080a] to-[#0f0c07] border border-amber-400/20 overflow-hidden flex items-center justify-center p-4"
                  style={{ perspective: '900px' }}
                >
                  <div 
                    className="absolute inset-x-0 bottom-0 h-44 origin-bottom surgical-grid-dense opacity-45 pointer-events-none"
                    style={{
                      transform: 'rotateX(64deg) rotateZ(-16deg) scale(1.7)',
                      transformStyle: 'preserve-3d',
                    }}
                  />

                  <div 
                    className="relative z-10 flex items-end justify-center gap-4 sm:gap-8 pb-4 w-full max-w-2xl"
                    style={{
                      transform: 'rotateX(18deg) rotateY(-12deg)',
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    {PROCEDURES_DATA.map((proc) => {
                      const procLossYear = proc.ticket * lostPatientsPerMonth * 12;
                      const isCurrent = selectedProcedure.id === proc.id;
                      const columnHeight = (procLossYear / (35000 * 5 * 12)) * 140;

                      return (
                        <button
                          key={proc.id}
                          onClick={() => setSelectedProcedure(proc)}
                          className="flex flex-col items-center group cursor-pointer text-left focus:outline-none"
                        >
                          <span className={`text-[9px] font-mono font-bold mb-1 tabular-nums ${
                            isCurrent ? 'text-amber-300' : 'text-zinc-400'
                          }`}>
                            -R${Math.round(procLossYear / 1000)}k
                          </span>

                          {/* 3D Extruded Column */}
                          <motion.div 
                            className={`relative w-12 sm:w-16 rounded-t-md transition-all duration-300 border-t-2 border-x ${
                              isCurrent
                                ? 'bg-gradient-to-t from-[#59400f] via-[#b88c28] to-[#F5D061] border-amber-200 shadow-[0_0_30px_rgba(212,175,55,0.5)]'
                                : 'bg-gradient-to-t from-zinc-900 via-zinc-800 to-zinc-700 border-zinc-600 shadow-md group-hover:border-amber-400/60'
                            }`}
                            style={{
                              height: `${Math.max(40, columnHeight)}px`,
                              transform: isCurrent ? 'translateZ(30px) scale(1.05)' : 'translateZ(10px)',
                            }}
                          >
                            <div 
                              className={`absolute -top-3 inset-x-0 h-3 rounded-t border-t ${
                                isCurrent ? 'bg-[#FFF4B8] border-white shadow-[0_0_10px_#FFF4B8]' : 'bg-zinc-600 border-zinc-400'
                              }`}
                              style={{ transform: 'rotateX(60deg) translateY(-2px)' }}
                            />
                            {isCurrent && (
                              <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-[8px] font-mono text-black font-extrabold -rotate-90 tracking-wider">
                                  ATIVO
                                </span>
                              </div>
                            )}
                          </motion.div>

                          <span className={`text-[9px] font-mono font-medium mt-2 text-center max-w-[80px] truncate ${
                            isCurrent ? 'text-amber-300' : 'text-zinc-400'
                          }`}>
                            {proc.name.split(' ')[0]}
                          </span>
                          <span className="text-[8px] font-mono text-zinc-500">
                            {proc.ticketFormatted}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: KPIS DE RETORNO (3D BENTO GLASS CARDS) */}
            {financialDashboardTab === 'kpis' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                
                {/* KPI Card 1 */}
                <div className="p-4 rounded-2xl bg-zinc-900/60 border-[0.5px] border-amber-400/30 shadow-lg space-y-1.5 relative overflow-hidden group hover:border-amber-400/60 transition-colors">
                  <span className="text-[10px] font-mono uppercase text-amber-400/90 block">
                    PAYBACK ESTIMADO
                  </span>
                  <div className="text-xl font-serif font-bold text-zinc-100">
                    1º Agendamento
                  </div>
                  <p className="text-[11px] text-zinc-400 font-light leading-relaxed">
                    A implantação se paga integralmente na primeira consulta particular convertida.
                  </p>
                </div>

                {/* KPI Card 2 */}
                <div className="p-4 rounded-2xl bg-zinc-900/60 border-[0.5px] border-amber-400/30 shadow-lg space-y-1.5 relative overflow-hidden group hover:border-amber-400/60 transition-colors">
                  <span className="text-[10px] font-mono uppercase text-amber-400/90 block">
                    PATRIMÔNIO SALVO (3 ANOS)
                  </span>
                  <div className="text-xl font-serif font-bold text-amber-300 tabular-nums">
                    + R$ {(calculatedLossYear * 3).toLocaleString('pt-BR')}
                  </div>
                  <p className="text-[11px] text-zinc-400 font-light leading-relaxed">
                    Capital privado protegido acumulado ao estancar a lentidão no mobile.
                  </p>
                </div>

                {/* KPI Card 3 */}
                <div className="p-4 rounded-2xl bg-zinc-900/60 border-[0.5px] border-amber-400/30 shadow-lg space-y-1.5 relative overflow-hidden group hover:border-amber-400/60 transition-colors">
                  <span className="text-[10px] font-mono uppercase text-amber-400/90 block">
                    RETENÇÃO CLASSE A
                  </span>
                  <div className="text-xl font-serif font-bold text-emerald-400">
                    94.8% Retenção
                  </div>
                  <p className="text-[11px] text-zinc-400 font-light leading-relaxed">
                    Contra apenas 32% de retenção média das páginas em WordPress/Elementor.
                  </p>
                </div>

                {/* KPI Card 4 */}
                <div className="p-4 rounded-2xl bg-zinc-900/60 border-[0.5px] border-amber-400/30 shadow-lg space-y-1.5 relative overflow-hidden group hover:border-amber-400/60 transition-colors">
                  <span className="text-[10px] font-mono uppercase text-amber-400/90 block">
                    BLINDAGEM CFM / CROSP
                  </span>
                  <div className="text-xl font-serif font-bold text-zinc-100">
                    100% Ética
                  </div>
                  <p className="text-[11px] text-zinc-400 font-light leading-relaxed">
                    Código sem gatilhos apelativos, com linguagem cirúrgica de alta autoridade.
                  </p>
                </div>

              </div>
            )}

            {/* Bottom 3D Ticker Status Strip */}
            <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-zinc-300">
                  Impacto Mensal: <strong className="text-emerald-400">+ R$ {Math.round(calculatedLossMonth * 0.94).toLocaleString('pt-BR')}</strong> recuperáveis em consultas particulares
                </span>
              </div>
              <div className="flex items-center gap-2 text-zinc-400">
                <span>Deploy em Edge Cloud</span>
                <span>·</span>
                <span className="text-amber-300">Tempo de Ativação: 48h a 72h</span>
              </div>
            </div>

          </div>

          {/* Thesis of Parvus Space Box */}
          <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-amber-950/30 via-zinc-950 to-zinc-900/60 border-[0.5px] border-amber-400/50 space-y-2">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-amber-300 font-semibold">
                A TESE DA PARVUS SPACE
              </span>
            </div>
            <p className="text-sm sm:text-base text-zinc-200 font-serif leading-relaxed italic">
              "A implantação da nossa arquitetura proprietária não representa um custo de marketing, mas um ativo de engenharia que se paga integralmente no primeiro agendamento recuperado."
            </p>
          </div>

          {/* CTA inside Terminal */}
          <div className="pt-2 text-center">
            <a
              href={`https://wa.me/5519994656845?text=Ol%C3%A1%2C%20Pablo.%20Fiz%20a%20simula%C3%A7%C3%A3o%20financeira%20na%20Parvus%20Space%20e%20gostaria%20de%20estancar%20a%20hemorragia%20digital%20da%20minha%20cl%C3%ADnica%20(${encodeURIComponent(selectedProcedure.name)}).`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA771C] text-black font-semibold text-xs tracking-wider uppercase transition-all duration-300 shadow-[0_0_35px_rgba(212,175,55,0.3)] hover:shadow-[0_0_50px_rgba(212,175,55,0.6)] hover:scale-[1.02]"
            >
              <span>Estancar Hemorragia da Minha Clínica</span>
              <ArrowUpRight className="w-4 h-4 text-black" />
            </a>
          </div>

        </div>

      </section>

      {/* 6. CORPO TÉCNICO: "ENGENHARIA DEDICADA, ZERO INTERMEDIÁRIOS" */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 border-t-[0.5px] border-amber-400/15">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-amber-400 uppercase">
            <Cpu className="w-4 h-4" />
            <span>ENGENHARIA DEDICADA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-zinc-100">
            Corpo Técnico: <br />
            <span className="gold-gradient-text italic font-serif">Engenharia sem Intermediários</span>
          </h2>
        </div>

        {/* Institutional Card in Brushed Titanium Styling */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-zinc-950/80 border-[0.5px] border-amber-400/30 p-6 sm:p-10 backdrop-blur-3xl shadow-[0_20px_50px_rgba(0,0,0,0.85)] relative overflow-hidden">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Engineer Identity & Avatar Monogram */}
            <div className="md:col-span-4 flex flex-col items-center text-center space-y-3 p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-400/20 via-zinc-900 to-black border-2 border-amber-400/40 flex items-center justify-center text-2xl font-serif text-amber-300 font-bold shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                P
              </div>
              <div>
                <h4 className="text-base font-semibold text-zinc-100">
                  Pablo
                </h4>
                <span className="text-xs font-mono text-amber-400/90 block">
                  Engenheiro de Software & Founder
                </span>
                <span className="text-[11px] text-zinc-500 block mt-0.5">
                  Parvus Space · RMC & São Paulo
                </span>
              </div>
              <div className="pt-2">
                <a
                  href="https://wa.me/5519994656845"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-amber-300 hover:text-amber-200 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>+55 (19) 99465-6845</span>
                </a>
              </div>
            </div>

            {/* Institutional Manifesto Prose */}
            <div className="md:col-span-8 space-y-4">
              <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
                A <strong className="text-zinc-100 font-medium">Parvus Space</strong> foi fundada por Pablo, Engenheiro de Software, a partir da recusa expressa ao modelo ineficiente das agências de marketing que terceirizam projetos para estagiários e entregam temas prontos de internet.
              </p>
              <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
                Aqui, sua clínica é tratada como um ativo exclusivo de software. Você conversa e alinha estratégias diretamente com quem projeta a arquitetura, escreve o código e calibra a psicologia de conversão. Construímos sistemas proprietários em Next.js e Tailwind que a sua clínica realmente possui, sem depender de plataformas lentas de terceiros.
              </p>

              {/* Shielding Badges */}
              <div className="pt-3 flex flex-wrap gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-amber-400/30 text-xs font-mono text-amber-200">
                  <Server className="w-3.5 h-3.5 text-amber-400" />
                  Código Proprietário Compilado
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-amber-400/30 text-xs font-mono text-amber-200">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  Deploy Global em Borda (Edge)
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-amber-400/30 text-xs font-mono text-amber-200">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  Acesso Direto ao Engenheiro
                </span>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* 7. PROTOCOLO DE IMPLANTAÇÃO (O QUE ESTÁ INCLUSO) */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 border-t-[0.5px] border-amber-400/15">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-amber-400 uppercase">
            <Layers className="w-4 h-4" />
            <span>ESCOPO DA INTERVENÇÃO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-zinc-100">
            Protocolo de Implantação: <br />
            <span className="gold-gradient-text italic font-serif">Os Três Pilares da Engenharia Parvus</span>
          </h2>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          {/* Pilar 1 */}
          <div className="p-7 rounded-3xl bg-zinc-950/70 border-[0.5px] border-amber-400/25 backdrop-blur-2xl shadow-[0_15px_40px_rgba(0,0,0,0.8)] space-y-4 group hover:border-amber-400/50 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-400/30 flex items-center justify-center text-amber-400 font-mono text-sm font-bold">
              01
            </div>
            <h3 className="text-xl font-serif font-semibold text-zinc-100">
              Design Editorial de Luxo
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
              Interface sob medida desenhada para espelhar a sofisticação da sua estrutura física. Tipografia de alta costura, proporção áurea visual e atmosfera que transmite autoridade inquestionável para o público classe A.
            </p>
          </div>

          {/* Pilar 2 */}
          <div className="p-7 rounded-3xl bg-zinc-950/70 border-[0.5px] border-amber-400/25 backdrop-blur-2xl shadow-[0_15px_40px_rgba(0,0,0,0.8)] space-y-4 group hover:border-amber-400/50 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-400/30 flex items-center justify-center text-amber-400 font-mono text-sm font-bold">
              02
            </div>
            <h3 className="text-xl font-serif font-semibold text-zinc-100">
              Motor Mobile Sub-Segundos
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
              Código ultra-otimizado para carregar fotos em alta definição sem consumir dados ou travar no 4G. Renderização no primeiro segundo, eliminando a frustração do paciente antes do contato inicial.
            </p>
          </div>

          {/* Pilar 3 */}
          <div className="p-7 rounded-3xl bg-zinc-950/70 border-[0.5px] border-amber-400/25 backdrop-blur-2xl shadow-[0_15px_40px_rgba(0,0,0,0.8)] space-y-4 group hover:border-amber-400/50 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-400/30 flex items-center justify-center text-amber-400 font-mono text-sm font-bold">
              03
            </div>
            <h3 className="text-xl font-serif font-semibold text-zinc-100">
              Atendimento Concierge
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
              Conexão direta com o WhatsApp da recepção com mensagens pré-formatadas por procedimento. O paciente já inicia o diálogo com o ticket calibrado, filtrando curiosos e poupando tempo da equipe.
            </p>
          </div>

        </div>

      </section>

      {/* 8. FAQ ESTRATÉGICO PARA GESTORES E CIRURGIÕES */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 border-t-[0.5px] border-amber-400/15">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-amber-400 uppercase">
            <Lock className="w-4 h-4" />
            <span>ESCLARECIMENTOS TÉCNICOS & JURÍDICOS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-zinc-100">
            FAQ Estratégico para Gestores e Cirurgiões
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-light">
            Perguntas frequentes sobre a implantação, ética médica e convivência com sistemas existentes.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="max-w-3xl mx-auto space-y-4">
          
          {/* FAQ 1 */}
          <div className="rounded-2xl bg-zinc-950/70 border-[0.5px] border-amber-400/25 overflow-hidden transition-all duration-300">
            <button
              onClick={() => toggleFaq(1)}
              className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-zinc-900/40 transition-colors"
            >
              <span className="text-sm sm:text-base font-serif font-medium text-zinc-100">
                Minha clínica já possui um site institucional no ar. Preciso desativá-lo?
              </span>
              <ChevronDown className={`w-4 h-4 text-amber-400 shrink-0 transition-transform duration-300 ${openFaq === 1 ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {openFaq === 1 && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-zinc-400 leading-relaxed font-light border-t-[0.5px] border-zinc-800">
                    Não. A infraestrutura da Parvus é implantada como uma camada ultra-rápida de conversão focada especificamente nos anúncios e links dos seus procedimentos de maior valor, mantendo seu portal institucional intacto.
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* FAQ 2 */}
          <div className="rounded-2xl bg-zinc-950/70 border-[0.5px] border-amber-400/25 overflow-hidden transition-all duration-300">
            <button
              onClick={() => toggleFaq(2)}
              className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-zinc-900/40 transition-colors"
            >
              <span className="text-sm sm:text-base font-serif font-medium text-zinc-100">
                Como vocês garantem a conformidade com as exigências do CFM e CROSP?
              </span>
              <ChevronDown className={`w-4 h-4 text-amber-400 shrink-0 transition-transform duration-300 ${openFaq === 2 ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {openFaq === 2 && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-zinc-400 leading-relaxed font-light border-t-[0.5px] border-zinc-800">
                    Toda a narrativa visual e textual é estruturada em conformidade estrita com as resoluções éticas vigentes, eliminando sensacionalismo, fotos apelativas e promessas de resultado, focando exclusivamente na sobriedade e na autoridade técnica.
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* FAQ 3 */}
          <div className="rounded-2xl bg-zinc-950/70 border-[0.5px] border-amber-400/25 overflow-hidden transition-all duration-300">
            <button
              onClick={() => toggleFaq(3)}
              className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-zinc-900/40 transition-colors"
            >
              <span className="text-sm sm:text-base font-serif font-medium text-zinc-100">
                Qual é o tempo de entrega e colocação no ar?
              </span>
              <ChevronDown className={`w-4 h-4 text-amber-400 shrink-0 transition-transform duration-300 ${openFaq === 3 ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {openFaq === 3 && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-zinc-400 leading-relaxed font-light border-t-[0.5px] border-zinc-800">
                    Como trabalhamos com engenharia ágil e código proprietário sem burocracias de agências tradicionais, a arquitetura completa é validada, testada e publicada em poucos dias.
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* FAQ 4 */}
          <div className="rounded-2xl bg-zinc-950/70 border-[0.5px] border-amber-400/25 overflow-hidden transition-all duration-300">
            <button
              onClick={() => toggleFaq(4)}
              className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-zinc-900/40 transition-colors"
            >
              <span className="text-sm sm:text-base font-serif font-medium text-zinc-100">
                Por que uma solução personalizada é superior a uma agência de tráfego comum?
              </span>
              <ChevronDown className={`w-4 h-4 text-amber-400 shrink-0 transition-transform duration-300 ${openFaq === 4 ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {openFaq === 4 && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-zinc-400 leading-relaxed font-light border-t-[0.5px] border-zinc-800">
                    Agências comuns vendem gestão de tráfego e templates pré-fabricados. A Parvus Space constrói a máquina de conversão onde esse tráfego aterrissa, garantindo que o dinheiro investido em anúncios não seja jogado fora por lentidão técnica.
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </section>

      {/* 9. RODAPÉ INSTITUCIONAL E TERMO DE BLINDAGEM REGIONAL */}
      <footer className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 border-t-[0.5px] border-amber-400/20 text-xs text-zinc-400 space-y-12">
        
        {/* Regional Shielding Term Box */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl bg-zinc-950/80 border-[0.5px] border-amber-400/30 backdrop-blur-2xl space-y-3">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-amber-300 font-semibold">
              POLÍTICA DE BLINDAGEM REGIONAL
            </span>
          </div>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
            A Parvus Space atende um número estritamente restrito de clínicas por polo geográfico (<strong className="text-zinc-100 font-medium">Cambuí, Taquaral, Indaiatuba, Jardins</strong>) para garantir exclusividade e evitar concorrência direta de presença digital entre nossos parceiros.
          </p>
        </div>

        {/* Blueprint Coordinates & Software Architectural Line */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t-[0.5px] border-zinc-900 font-mono text-[10px] text-zinc-500">
          <div className="flex items-center gap-4">
            <span>COORD: 23°34'05"S 46°40'12"W</span>
            <span>POLO: JARDINS · CAMBUÍ · TAQUARAL</span>
            <span>STATUS: EDGE_COMPILED</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://parvuspace.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition-colors">
              parvuspace.com.br
            </a>
            <span>·</span>
            <a href="https://wa.me/5519994656845" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition-colors">
              WhatsApp: +55 (19) 99465-6845
            </a>
          </div>
        </div>

        {/* Brand Copyright */}
        <div className="text-center pt-4 text-zinc-500 text-[11px] font-light">
          Digital Architecture & Private Systems by Parvus Space © 2026. Todos os direitos reservados.
        </div>

      </footer>

      {/* QUICK CONCIERGE MODAL */}
      <AnimatePresence>
        {isDiagnosticModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-lg rounded-3xl bg-zinc-950 border-[0.5px] border-amber-400/50 p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.9)] relative"
            >
              <button
                onClick={() => setIsDiagnosticModalOpen(false)}
                className="absolute top-5 right-5 text-zinc-400 hover:text-white p-1 rounded-lg"
              >
                ✕
              </button>

              <div className="space-y-2 mb-6">
                <span className="text-[10px] font-mono tracking-[0.2em] text-amber-400 uppercase">
                  ANAMNESE PRELIMINAR RESERVADA
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-medium text-zinc-100">
                  Diagnóstico da Sua Clínica com o Engenheiro
                </h3>
                <p className="text-xs text-zinc-400 font-light">
                  Preencha os dados abaixo para receber uma análise técnica sob medida via WhatsApp diretamente com Pablo.
                </p>
              </div>

              <form onSubmit={handleModalSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block text-zinc-300 mb-1 font-medium">Nome da Clínica ou Instituto:</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Instituto Jardins de Cirurgia Plástica"
                    value={modalForm.clinicName}
                    onChange={(e) => setModalForm({ ...modalForm, clinicName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-100 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-zinc-300 mb-1 font-medium">Seu Nome / Doutor(a) Responsável:</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Dr. Roberto / Dra. Helena"
                    value={modalForm.doctorName}
                    onChange={(e) => setModalForm({ ...modalForm, doctorName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-100 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-zinc-300 mb-1 font-medium">Especialidade Principal:</label>
                    <select
                      value={modalForm.specialty}
                      onChange={(e) => setModalForm({ ...modalForm, specialty: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-100 focus:outline-none focus:border-amber-400"
                    >
                      <option value="Cirurgia Plástica">Cirurgia Plástica</option>
                      <option value="Lipo HD & Contorno">Lipo HD & Contorno</option>
                      <option value="Lentes de Contato Dental">Lentes de Contato Dental</option>
                      <option value="Protocolo All-on-4">Protocolo All-on-4</option>
                      <option value="Harmonização Facial Avançada">Harmonização Facial Avançada</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-zinc-300 mb-1 font-medium">Polo / Região:</label>
                    <select
                      value={modalForm.region}
                      onChange={(e) => setModalForm({ ...modalForm, region: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-100 focus:outline-none focus:border-amber-400"
                    >
                      <option value="Jardins (São Paulo)">Jardins (São Paulo)</option>
                      <option value="Cambuí (Campinas)">Cambuí (Campinas)</option>
                      <option value="Taquaral (Campinas)">Taquaral (Campinas)</option>
                      <option value="Indaiatuba">Indaiatuba</option>
                      <option value="Outro Polo Nobre">Outro Polo Nobre</option>
                    </select>
                  </div>
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA771C] text-black font-semibold tracking-wider uppercase flex items-center justify-center gap-2 hover:scale-[1.01] transition-transform shadow-[0_0_25px_rgba(212,175,55,0.3)]"
                  >
                    <span>Enviar para Anamnese Direta no WhatsApp</span>
                    <ArrowUpRight className="w-4 h-4 text-black" />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </main>
  );
}
