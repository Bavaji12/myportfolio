import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Send, Check, AlertCircle } from 'lucide-react'
import { PERSONAL_INFO } from '../lib/constants'
import { ContactCard } from '../components/ContactCard'
import { SectionHeading } from '../components/SectionHeading'
import { Button } from '../components/Button'
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons'

interface FormState {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validate = (): boolean => {
    const errs: FormErrors = {}
    if (!formData.name.trim()) errs.name = 'Please provide your full name.'
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email format.'
    }
    if (!formData.subject.trim()) errs.subject = 'Please enter a subject.'
    if (!formData.message.trim()) {
      errs.message = 'Please enter your message.'
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.'
    }

    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)

    // Simulate submission preparation and dispatch via mailto fallback
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Open user's email client with pre-filled content
      const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
        `[Portfolio Contact] ${formData.subject}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`
      window.location.href = mailtoUrl

      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({ name: '', email: '', subject: '', message: '' })
      }, 5000)
    }, 800)
  }

  return (
    <section id="contact" className="relative py-20 md:py-28 bg-[#070910]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Initiate Transmission"
          title="Get In Touch"
          subtitle="Available for QA / Software Testing & Full-Stack Developer internship opportunities. Reach out directly or dispatch a message below."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <ContactCard
              icon={<Mail className="w-5 h-5" />}
              title="Direct Email"
              value={PERSONAL_INFO.email}
              copyable
              actionHref={`mailto:${PERSONAL_INFO.email}`}
              actionText="Send email"
            />

            <ContactCard
              icon={<GithubIcon className="w-5 h-5" />}
              title="GitHub Profile"
              value="github.com/Bavaji12"
              actionHref={PERSONAL_INFO.github}
              actionText="Open GitHub"
            />

            <ContactCard
              icon={<LinkedinIcon className="w-5 h-5" />}
              title="LinkedIn Profile"
              value="linkedin.com/in/shaik-bavaji-216121359"
              actionHref={PERSONAL_INFO.linkedin}
              actionText="Open LinkedIn"
            />

            <ContactCard
              icon={<MapPin className="w-5 h-5" />}
              title="Location"
              value={PERSONAL_INFO.location}
            />

            {/* Quick Note Card */}
            <div className="p-5 rounded-2xl bg-[#0D1220]/60 border border-slate-800 text-xs text-slate-400 font-mono leading-relaxed">
              <span className="text-cyan-400 font-bold block mb-1">Response Time Guarantee:</span>
              Messages received are typically acknowledged within 24 hours. For urgent opportunities, connecting via LinkedIn or direct email is recommended.
            </div>
          </div>

          {/* Right Column: Validated Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <motion.form
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              noValidate
              className="p-6 md:p-8 rounded-2xl bg-[#0D1220]/90 border border-slate-800 shadow-2xl space-y-5"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-300">
                  Direct Dispatch Terminal
                </span>
                <span className="text-[10px] font-mono text-cyan-400">
                  Client-side Validated
                </span>
              </div>

              {/* Name & Email Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Your Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-900 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                      errors.name ? 'border-rose-500' : 'border-slate-800 focus:border-cyan-400'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-rose-400 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Your Email <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@example.com"
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-900 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                      errors.email ? 'border-rose-500' : 'border-slate-800 focus:border-cyan-400'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-rose-400 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Subject Input */}
              <div>
                <label htmlFor="subject" className="block text-xs font-mono text-slate-300 mb-1.5">
                  Subject <span className="text-cyan-400">*</span>
                </label>
                <input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="QA Internship Inquiry / Full-Stack Project Collaboration"
                  className={`w-full px-4 py-2.5 rounded-xl bg-slate-900 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                    errors.subject ? 'border-rose-500' : 'border-slate-800 focus:border-cyan-400'
                  }`}
                />
                {errors.subject && (
                  <p className="mt-1 text-xs text-rose-400 flex items-center gap-1 font-mono">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.subject}</span>
                  </p>
                )}
              </div>

              {/* Message Textarea */}
              <div>
                <label htmlFor="message" className="block text-xs font-mono text-slate-300 mb-1.5">
                  Message <span className="text-cyan-400">*</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hello Shaik, I reviewed your CodeMaster platform and Quality Lab tests..."
                  className={`w-full px-4 py-2.5 rounded-xl bg-slate-900 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors resize-none ${
                    errors.message ? 'border-rose-500' : 'border-slate-800 focus:border-cyan-400'
                  }`}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-rose-400 flex items-center gap-1 font-mono">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Submit Button & Feedback */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  variant="primary"
                  size="md"
                  icon={
                    isSubmitted ? (
                      <Check className="w-4 h-4 text-emerald-300" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )
                  }
                >
                  {isSubmitting
                    ? 'Validating & Preparing...'
                    : isSubmitted
                    ? 'Draft Dispatched via Mail Client!'
                    : 'Dispatch Message'}
                </Button>

                {isSubmitted && (
                  <span className="text-xs text-emerald-400 font-mono">
                    ✓ Mail client prompted with message details.
                  </span>
                )}
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  )
}
