import * as React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Mail, Linkedin, Github, CheckCircle2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export function Contact() {
  const formRef = React.useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = React.useState(false);
  const [status, setStatus] = React.useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);
    setStatus('idle');

    try {
      await emailjs.sendForm(
        'service_nkmud9h', 
        'template_qt87gsw', 
        formRef.current,
        'HJp5w6X-nDcMf_TJU'
      );
      setStatus('success');
      formRef.current.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
    } finally {
      setIsSending(false);
      // Reset status after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="py-32 px-8 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="mb-32">
        <div className="grid md:grid-cols-[1.5fr_1fr] gap-16 lg:gap-24 items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary text-[10px] tracking-[0.4em] uppercase font-bold mb-6 block">Get in Touch</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] mb-8">
              Let's build <br /> something <span className="text-primary italic">extraordinary.</span>
            </h1>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="pb-4"
          >
            <p className="text-on-surface-variant text-lg md:text-xl max-w-sm leading-relaxed">
              Currently open to collaborative projects and high-impact opportunities in AI and Data Science. Reach out to discuss how we can work together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content Grid */}
      <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
        {/* Left Column: Form */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:col-span-7"
        >
          <div className="bg-surface-container-low p-8 md:p-12 rounded-3xl border border-outline-variant/10 shadow-2xl shadow-black/20">
            <form ref={formRef} className="space-y-10" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-on-surface-variant font-bold block ml-1">Full Name</label>
                  <input 
                    required
                    name="user_name"
                    type="text" 
                    className="w-full bg-transparent border-b border-outline-variant/30 px-1 py-3 text-on-surface placeholder:text-on-surface-variant/20 focus:border-primary focus:border-b-2 transition-all rounded-none outline-none"
                    placeholder="Your Name"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-on-surface-variant font-bold block ml-1">Email Address</label>
                  <input 
                    required
                    name="user_email"
                    type="email" 
                    className="w-full bg-transparent border-b border-outline-variant/30 px-1 py-3 text-on-surface placeholder:text-on-surface-variant/20 focus:border-primary focus:border-b-2 transition-all rounded-none outline-none"
                    placeholder="hello@example.com"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.3em] text-on-surface-variant font-bold block ml-1">Your Message</label>
                <textarea 
                  required
                  name="message"
                  className="w-full bg-transparent border-b border-outline-variant/30 px-1 py-3 text-on-surface placeholder:text-on-surface-variant/20 focus:border-primary focus:border-b-2 transition-all resize-none rounded-none outline-none"
                  placeholder="Tell me about your project or inquiry..."
                  rows={5}
                />
              </div>
              <div className="pt-4 flex flex-col gap-4">
                <button 
                  type="submit"
                  disabled={isSending}
                  className="group flex items-center justify-center gap-4 bg-primary text-on-primary px-12 py-5 rounded-full font-bold text-xs tracking-[0.1em] hover:bg-primary-container hover:scale-[1.02] active:scale-95 transition-all duration-300 w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSending ? 'SENDING...' : 'SEND MESSAGE'}
                  {!isSending && <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />}
                </button>

                <AnimatePresence>
                  {status === 'success' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 text-green-500 font-medium text-sm"
                    >
                      <CheckCircle2 size={16} />
                      Message sent successfully! I'll get back to you soon.
                    </motion.div>
                  )}
                  {status === 'error' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 text-red-500 font-medium text-sm"
                    >
                      <AlertCircle size={16} />
                      Failed to send message. Please try again or email directly.
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </div>
        </motion.div>

        {/* Right Column: Details & Socials */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="lg:col-span-5 flex flex-col justify-between py-2"
        >
          <div className="space-y-16">
            <div>
              <h3 className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold mb-4">Direct Communication</h3>
              <a 
                href="mailto:chethanakeshavaofficial@gmail.com" 
                className="block font-medium text-on-surface hover:text-primary transition-colors tracking-tight text-2xl md:text-3xl"
              >
                chethanakeshavaofficial@gmail.com
              </a>
            </div>

            <div>
              <h3 className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold mb-8">Connect Digitally</h3>
              <div className="grid grid-cols-2 gap-4">
                <SocialCard icon={<Linkedin size={20} />} label="LinkedIn" href="https://www.linkedin.com/in/chethana-keshava-48355b29b/" />
                <SocialCard icon={<Github size={20} />} label="GitHub" href="https://github.com/chethanakeshava" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function SocialCard({ icon, label, href }: { icon: React.ReactNode, label: string, href: string }) {
  return (
    <a 
      href={href} 
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 p-4 bg-surface-container-low/50 border border-outline-variant/10 rounded-xl hover:bg-surface-container-high transition-all group"
    >
      <div className="text-on-surface-variant group-hover:text-primary transition-colors">
        {icon}
      </div>
      <span className="text-xs font-bold tracking-widest uppercase">{label}</span>
    </a>
  );
}
