import * as React from 'react';
import { motion } from 'motion/react';
import { Terminal, Code, Brain, BarChart3, Layout, Monitor, Table, GitBranch } from 'lucide-react';

export function Skills() {
  return (
    <div className="relative py-32 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(255,193,115,0.05)_0%,transparent_70%)] -z-10 translate-x-1/3 -translate-y-1/3" />
      
      <section className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="mb-24">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-on-surface leading-[0.9]">Skill Set</h1>
        </div>

        {/* Bento Grid Skills Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Programming Category */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 bg-[#151515] p-10 rounded-3xl border border-white/5 shadow-inner relative overflow-hidden group"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <Code className="text-primary" />
                <h3 className="text-xl font-bold tracking-tight text-primary">Programming</h3>
              </div>
              <div className="flex flex-wrap gap-4">
                {['Python', 'SQL', 'Java', 'R'].map(skill => (
                  <div key={skill} className="bg-surface-container-highest px-6 py-3 rounded-full border border-outline-variant/15 flex items-center gap-3 hover:bg-secondary-container/30 transition-colors cursor-default">
                    <span className="text-on-surface font-medium">{skill}</span>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-on-surface-variant text-sm max-w-sm">
                Crafting efficient, scalable code to solve complex algorithmic challenges and manage heavy data pipelines.
              </p>
            </div>
          </motion.div>

          {/* Machine Learning */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-5 bg-[#151515] p-10 rounded-3xl border border-white/5 shadow-inner flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Brain className="text-primary" />
                <h3 className="text-xl font-bold tracking-tight text-primary">Machine Learning</h3>
              </div>
              <ul className="space-y-6">
                <SkillListItem number="01" title="Scikit-Learn" subtitle="Industrial-strength ML implementation." />
                <SkillListItem number="02" title="Predictive Modeling" subtitle="Forecasting future trends through data." />
                <SkillListItem number="03" title="Supervised Learning" subtitle="Classification and regression expertise." />
              </ul>
            </div>
          </motion.div>

          {/* Data & Analytics */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-8 bg-[#151515] p-10 rounded-3xl border border-white/5 shadow-inner group transition-all duration-500"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <BarChart3 className="text-primary" />
                <h3 className="text-xl font-bold tracking-tight text-primary">Data & Analytics</h3>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <AnalyticsItem title="Exploratory Data Analysis" description="Uncovering hidden patterns and anomalies." />
              <AnalyticsItem title="Statistical Analysis" description="Validating insights through rigorous math." />
              <AnalyticsItem title="Data Cleaning" description="Transforming raw noise into signal." />
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="md:col-span-4 bg-[#151515] p-10 rounded-3xl border border-white/5 shadow-inner relative overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-6">
              <Layout className="text-primary" />
              <h3 className="text-xl font-bold tracking-tight text-primary">Tools</h3>
            </div>
            <div className="flex flex-col gap-3">
              <ToolItem icon={<Monitor size={16} />} name="Power BI / Tableau" />
              <div className="h-[1px] w-full bg-outline-variant/10" />
              <ToolItem icon={<Table size={16} />} name="Excel" />
              <div className="h-[1px] w-full bg-outline-variant/10" />
              <ToolItem icon={<GitBranch size={16} />} name="Git & GitHub" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Decorative Background */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-primary/5 rounded-full blur-[150px] -z-20 pointer-events-none" />
    </div>
  );
}

function SkillListItem({ number, title, subtitle }: { number: string, title: string, subtitle: string }) {
  return (
    <li className="flex items-start gap-4">
      <span className="text-primary-container font-mono text-xs mt-1">{number}</span>
      <div>
        <h4 className="text-on-surface font-bold">{title}</h4>
        <p className="text-on-surface-variant text-xs mt-1">{subtitle}</p>
      </div>
    </li>
  );
}

function AnalyticsItem({ title, description }: { title: string, description: string }) {
  return (
    <div className="space-y-2">
      <h4 className="text-on-surface font-semibold">{title}</h4>
      <div className="h-1 w-12 bg-primary-container rounded-full" />
      <p className="text-xs text-on-surface-variant">{description}</p>
    </div>
  );
}

function ToolItem({ icon, name }: { icon: React.ReactNode, name: string }) {
  return (
    <div className="flex items-center justify-between group cursor-default">
      <span className="text-on-surface font-medium">{name}</span>
      <div className="text-on-surface-variant group-hover:text-primary transition-colors">
        {icon}
      </div>
    </div>
  );
}
