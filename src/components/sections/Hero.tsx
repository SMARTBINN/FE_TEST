'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Wifi, Zap, Cpu, Monitor } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { FadeIn } from '@/components/ui/FadeIn'

const organicItems = [
  { emoji: '🍎', delay: 0,   x: 10  },
  { emoji: '🍃', delay: 1.2, x: -15 },
  { emoji: '🍌', delay: 2.4, x: 5   },
  { emoji: '🥦', delay: 0.8, x: -8  },
  { emoji: '🥕', delay: 1.8, x: 12  },
  { emoji: '🍂', delay: 3.0, x: -5  },
]

function OrganicBin3D() {
  return (
    <div className="relative flex flex-col items-center" style={{ perspective: '600px' }}>

      {/* Falling organic items */}
      {organicItems.map((item, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl pointer-events-none z-30"
          style={{ top: -80, left: '50%', marginLeft: item.x * 3 }}
          animate={{ y: [0, 160, 200], rotate: [0, item.x * 10, item.x * 20], opacity: [1, 1, 0], scale: [1, 0.9, 0.6] }}
          transition={{ duration: 2.2, repeat: Infinity, delay: item.delay, ease: 'easeIn' }}
        >
          {item.emoji}
        </motion.div>
      ))}

      {/* Bin Lid */}
      <motion.div
        className="relative z-20"
        style={{ width: 140, transformStyle: 'preserve-3d', transform: 'rotateX(-20deg) rotateY(-15deg)' }}
        animate={{ rotateX: [-20, -35, -20] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div
          className="w-full rounded-t-lg"
          style={{
            height: 18,
            background: 'linear-gradient(135deg, #4ade80, #16a34a)',
            boxShadow: '0 4px 15px rgba(22,163,74,0.4)',
            borderRadius: '8px 8px 0 0',
          }}
        />
        <div
          className="absolute left-1/2 -translate-x-1/2 -top-3 rounded-full"
          style={{ width: 28, height: 10, background: '#15803d' }}
        />
      </motion.div>

      {/* Bin Body */}
      <div
        className="relative"
        style={{ width: 140, transformStyle: 'preserve-3d', transform: 'rotateX(-5deg) rotateY(-15deg)' }}
      >
        <div
          className="relative overflow-hidden"
          style={{
            width: 140,
            height: 180,
            background: 'linear-gradient(160deg, #bbf7d0 0%, #4ade80 40%, #16a34a 100%)',
            borderRadius: '0 0 16px 16px',
            boxShadow: '6px 12px 40px rgba(22,163,74,0.35), inset -4px 0 12px rgba(0,0,0,0.1)',
          }}
        >
          {/* Fill level */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 rounded-b-2xl"
            style={{
              background: 'linear-gradient(180deg, rgba(101,163,13,0.6) 0%, rgba(34,197,94,0.8) 100%)',
              borderTop: '2px solid rgba(74,222,128,0.8)',
            }}
            animate={{ height: ['55%', '65%', '58%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Label */}
          <div className="absolute top-4 left-0 right-0 flex justify-center">
            <div
              className="px-3 py-1 rounded-full text-xs font-bold text-white"
              style={{ background: 'rgba(0,0,0,0.25)', backdropFilter: 'blur(4px)' }}
            >
              🌿 Organiques
            </div>
          </div>

          {/* Fill badge */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center">
            <div
              className="px-3 py-1 rounded-full text-sm font-bold text-white"
              style={{ background: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(4px)' }}
            >
              63% plein
            </div>
          </div>

          {/* Sensor LED */}
          <motion.div
            className="absolute top-4 right-4 w-2.5 h-2.5 rounded-full"
            style={{ background: '#4ade80', boxShadow: '0 0 8px #4ade80' }}
            animate={{ opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />

          {/* Ribs */}
          {[30, 70, 110].map((x) => (
            <div
              key={x}
              className="absolute top-0 bottom-0"
              style={{ left: x, width: 2, background: 'rgba(0,0,0,0.08)' }}
            />
          ))}

          {/* Shine */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(120deg, rgba(255,255,255,0.25) 0%, transparent 50%)', borderRadius: 'inherit' }}
          />
        </div>

        {/* Right face (3D depth) */}
        <div
          className="absolute top-0 right-0"
          style={{
            width: 24,
            height: 180,
            background: 'linear-gradient(180deg, #15803d 0%, #166534 100%)',
            transform: 'rotateY(90deg) translateZ(-12px)',
            transformOrigin: 'right center',
            borderRadius: '0 0 8px 0',
          }}
        />

        {/* Shadow */}
        <div
          className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full"
          style={{ width: 120, height: 16, background: 'rgba(22,163,74,0.2)', filter: 'blur(8px)' }}
        />
      </div>

      {/* WiFi rings */}
      <div className="absolute -top-16 left-1/2 -translate-x-1/2">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border-2"
            style={{
              width: 24 + i * 22,
              height: 24 + i * 22,
              borderColor: 'rgba(34,197,94,0.6)',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            animate={{ scale: [0.6, 1.6], opacity: [0.8, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.5, ease: 'easeOut' }}
          />
        ))}
        <Wifi className="relative z-10 h-5 w-5 text-green-500" />
      </div>
    </div>
  )
}

function Laptop3D() {
  return (
    <div className="relative" style={{ perspective: '800px' }}>

      {/* Screen */}
      <motion.div
        className="relative"
        style={{ width: 220, transformStyle: 'preserve-3d', transform: 'rotateX(5deg) rotateY(15deg)' }}
      >
        <div
          className="relative overflow-hidden"
          style={{
            width: 220,
            height: 150,
            background: '#1e293b',
            borderRadius: '12px 12px 0 0',
            boxShadow: '8px 12px 40px rgba(0,0,0,0.2), -2px 0 8px rgba(0,0,0,0.1)',
            border: '3px solid #334155',
          }}
        >
          <div className="absolute inset-2 bg-slate-900 rounded-lg overflow-hidden">
            {/* Top bar */}
            <div className="h-5 bg-slate-800 flex items-center px-2 gap-1.5">
              <div className="w-2 h-2 rounded-full bg-red-400" />
              <div className="w-2 h-2 rounded-full bg-yellow-400" />
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <div className="ml-2 flex-1 bg-slate-700 rounded h-2.5 text-[6px] text-slate-400 flex items-center justify-center">
                bioloop.app
              </div>
            </div>

            {/* Dashboard */}
            <div className="p-2 grid grid-cols-2 gap-1.5 h-[calc(100%-20px)]">
              {/* Bar chart */}
              <div className="bg-slate-800 rounded p-1.5 flex flex-col gap-1">
                <div className="text-[6px] text-slate-400 font-medium">Collectes</div>
                <div className="flex-1 flex items-end gap-1 pb-0.5">
                  {[40, 70, 55, 85, 60].map((h, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 rounded-t"
                      style={{ background: `rgba(34,197,94,${0.4 + i * 0.12})` }}
                      animate={{ height: [`${h * 0.6}%`, `${h}%`, `${h * 0.7}%`] }}
                      transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  ))}
                </div>
              </div>

              {/* Metrics */}
              <div className="flex flex-col gap-1.5">
                <div className="bg-slate-800 rounded p-1.5 flex-1">
                  <div className="text-[6px] text-slate-400">Poids Total</div>
                  <div className="text-[10px] font-bold text-green-400">1,240 kg</div>
                </div>
                <div className="bg-slate-800 rounded p-1.5 flex-1">
                  <div className="text-[6px] text-slate-400">Bennes</div>
                  <div className="text-[10px] font-bold text-blue-400">24/24</div>
                </div>
                <div className="bg-slate-800 rounded p-1.5 flex-1">
                  <div className="text-[6px] text-slate-400">CO₂ évité</div>
                  <div className="text-[10px] font-bold text-emerald-400">-18%</div>
                </div>
              </div>

              {/* Line chart */}
              <div className="col-span-2 bg-slate-800 rounded p-1.5">
                <div className="text-[6px] text-slate-400 mb-1">Tendance hebdomadaire</div>
                <svg viewBox="0 0 100 20" className="w-full h-8">
                  <motion.polyline
                    points="0,18 15,14 30,16 45,8 60,10 75,5 90,7 100,4"
                    fill="none"
                    stroke="#4ade80"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: 'easeInOut' }}
                  />
                  <defs>
                    <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#4ade80" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#4ade80" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Right side 3D */}
        <div
          className="absolute top-0 right-0"
          style={{
            width: 16,
            height: 150,
            background: '#0f172a',
            transform: 'rotateY(90deg) translateZ(-8px)',
            transformOrigin: 'right center',
          }}
        />
      </motion.div>

      {/* Keyboard base */}
      <div
        style={{
          width: 240,
          marginLeft: -10,
          height: 16,
          background: 'linear-gradient(180deg, #e2e8f0 0%, #cbd5e1 100%)',
          borderRadius: '0 0 10px 10px',
          boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
          transform: 'rotateX(5deg) rotateY(15deg)',
          transformOrigin: 'top center',
        }}
      >
        <div
          className="mx-auto mt-1 rounded-sm"
          style={{ width: 60, height: 6, background: '#94a3b8' }}
        />
      </div>

      {/* Base shadow */}
      <div
        className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full"
        style={{ width: 180, height: 12, background: 'rgba(0,0,0,0.1)', filter: 'blur(6px)' }}
      />
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-green-50 rounded-full blur-3xl -z-10 opacity-60" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-3xl -z-10 opacity-40" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Text */}
          <div className="max-w-2xl relative z-10">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-800 text-xs font-semibold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                Solution Intelligente
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] mb-6">
                Optimisez vos ressources et{' '}
                <span className="text-green-600">réduisez vos déchets.</span>{' '}
                découvrez nos solutions intelligentes.
              </h1>

              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                Redirige vers un calendrier pour prendre rdv et invite
                l&apos;intéressé à laisser un mail+contact pour une démonstration personnalisée.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group">
                  Essayez Bioloop
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="lg">
                  Voir la démo
                </Button>
              </div>
            </FadeIn>
          </div>

          {/* Illustration */}
          <FadeIn direction="left" delay={0.2} className="relative w-full h-[520px] lg:h-[620px]">
            <div className="absolute inset-0 bg-white rounded-3xl overflow-hidden">

              {/* Grid background */}
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage: 'linear-gradient(#16a34a 1px, transparent 1px), linear-gradient(90deg, #16a34a 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
              />

              {/* Center glow */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{
                  width: 500,
                  height: 500,
                  background: 'radial-gradient(circle, rgba(220,252,231,0.8) 0%, transparent 70%)',
                }}
              />

              <div className="relative w-full h-full flex items-center justify-center">

                {/* Connection SVG */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none z-10"
                  viewBox="0 0 600 600"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="connGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%"   stopColor="#22c55e" stopOpacity="0.2" />
                      <stop offset="50%"  stopColor="#22c55e" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#22c55e" stopOpacity="0.2" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  <motion.path
                    d="M 155 370 C 200 260, 400 260, 445 370"
                    fill="none"
                    stroke="url(#connGrad)"
                    strokeWidth="2.5"
                    strokeDasharray="10 6"
                    filter="url(#glow)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2.5, ease: 'easeInOut' }}
                  />

                  {[0, 1, 2].map((i) => (
                    <motion.circle
                      key={i}
                      r="5"
                      fill="#4ade80"
                      filter="url(#glow)"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 1, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: i * 1, ease: 'linear' }}
                    >
                      <animateMotion
                        dur="3s"
                        repeatCount="indefinite"
                        path="M 155 370 C 200 260, 400 260, 445 370"
                        begin={`${i * 1}s`}
                      />
                    </motion.circle>
                  ))}
                </svg>

                {/* Smart Bin */}
                <div className="absolute left-8 lg:left-16 z-20" style={{ bottom: 80 }}>
                  <OrganicBin3D />
                </div>

                {/* Laptop */}
                <div className="absolute right-4 lg:right-12 z-20" style={{ bottom: 90 }}>
                  <Laptop3D />
                </div>

                {/* Badge: IoT */}
                <motion.div
                  className="absolute top-20 left-10 bg-white border border-green-200 shadow-lg p-3 rounded-2xl flex items-center gap-3 z-30"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="bg-blue-50 p-2 rounded-xl">
                    <Wifi className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-400 font-medium">Connexion</div>
                    <div className="text-sm font-bold text-gray-800">IoT Connecté</div>
                  </div>
                </motion.div>

                {/* Badge: IA */}
                <motion.div
                  className="absolute bottom-28 right-6 bg-white border border-purple-200 shadow-lg p-3 rounded-2xl flex items-center gap-3 z-30"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                >
                  <div className="bg-purple-50 p-2 rounded-xl">
                    <Cpu className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-400 font-medium">Intelligence</div>
                    <div className="text-sm font-bold text-gray-800">IA Activée</div>
                  </div>
                </motion.div>

                {/* Badge: Temps Réel */}
                <motion.div
                  className="absolute top-14 right-1/3 bg-white border border-green-200 shadow-lg p-3 rounded-2xl flex items-center gap-3 z-30"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                >
                  <div className="bg-green-50 p-2 rounded-xl">
                    <Zap className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-400 font-medium">Monitoring</div>
                    <div className="text-sm font-bold text-gray-800">Temps Réel</div>
                  </div>
                </motion.div>

                {/* Badge: Dashboard */}
                <motion.div
                  className="absolute top-28 right-8 bg-white border border-blue-200 shadow-lg p-3 rounded-2xl flex items-center gap-3 z-30"
                  animate={{ y: [0, -7, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 2.5 }}
                >
                  <div className="bg-blue-50 p-2 rounded-xl">
                    <Monitor className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-400 font-medium">Tableau de bord</div>
                    <div className="text-sm font-bold text-gray-800">Dashboard Live</div>
                  </div>
                </motion.div>

              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}