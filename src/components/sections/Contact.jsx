import { motion, AnimatePresence } from 'framer-motion';
import { Send, MessageSquare, ShieldCheck, Clock } from 'lucide-react';
import Lottie from 'lottie-react';
import contactAnimation from '../../assets/animations/Contact Us.json';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    let errorMsg = '';

    // REAL-TIME VALIDATION LOGIC
    if (name === 'name') {
      const nameRegex = /^[a-zA-Z\s]*$/; // Allows empty for typing, but strictly no numbers
      if (!nameRegex.test(value)) {
        errorMsg = "Name should not contain numbers";
      }
    }

    if (name === 'phone') {
      const phoneRegex = /^[6-9]?\d{0,9}$/; // Validates prefix and length as they type
      if (value.length > 0 && !/^[6-9]/.test(value)) {
        errorMsg = "Must start with 6, 7, 8, or 9";
      } else if (value.length > 10) {
        return; // Block entry beyond 10 digits
      } else if (value.length === 10 && !/^[6-9]\d{9}$/.test(value)) {
        errorMsg = "Enter a valid 10-digit Indian number";
      }
    }

    setErrors(prev => ({ ...prev, [name]: errorMsg }));
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppRedirect = (e) => {
    e.preventDefault();
    
    // Final check before redirecting
    const isPhoneValid = /^[6-9]\d{9}$/.test(formData.phone);
    const isNameValid = formData.name.trim().length > 0 && !/\d/.test(formData.name);

    if (!isPhoneValid || !isNameValid) {
      setErrors({
        name: isNameValid ? '' : 'Please provide a valid name',
        phone: isPhoneValid ? '' : 'Please enter a valid 10-digit Indian number'
      });
      return;
    }

    // REDIRECT TO COMPANY NUMBER (9351044351)
    const baseMessage = `*New Inquiry from Ion Pure Website*%0A%0A`;
    const namePart = `*Name:* ${formData.name}%0A`;
    const phonePart = `*Contact:* ${formData.phone}%0A`;
    const msgPart = formData.message ? `*Message:* ${formData.message}` : `_User requested a callback_`;

    const finalMessage = `${baseMessage}${namePart}${phonePart}${msgPart}`;
    window.open(`https://wa.me/8130134145?text=${finalMessage}`, '_blank');
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28 overflow-hidden bg-white">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-[-10%] w-[40%] h-[40%] bg-[#7CB35B]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-[-10%] w-[40%] h-[40%] bg-[#2C5DA7]/5 blur-[120px] rounded-full" />
      </div>

      <div className="section-container relative z-10 px-6">
        <div className="text-center mb-16 lg:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-2xl bg-[#2C5DA7]/5 border border-[#2C5DA7]/10 mb-8"
          >
            <MessageSquare size={14} className="text-[#2C5DA7]" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#2C5DA7]">Wellness Advisory</span>
          </motion.div>

          <h2 className="text-4xl lg:text-7xl font-black leading-[0.9] tracking-tighter mb-8 text-[#1A365D]">
            Start Your <br />
            <span className="animate-gradient-text bg-gradient-to-r from-[#7CB35B] via-[#2C5DA7] to-[#7CB35B] bg-[length:200%_auto] bg-clip-text text-transparent italic px-2">
              Purity Journey.
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 flex flex-col items-center justify-center"
          >
            <div className="w-full max-w-[450px]">
              <Lottie 
                animationData={contactAnimation} 
                loop={true} 
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
            <div className="flex gap-4 mt-8">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#F1F8E1] text-[#7CB35B] text-[9px] font-black uppercase tracking-widest border border-[#7CB35B]/10">
                <ShieldCheck size={14} /> Medical Grade
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#E2EBF5] text-[#2C5DA7] text-[9px] font-black uppercase tracking-widest border border-[#2C5DA7]/10">
                <Clock size={14} /> 24/7 Support
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-7"
          >
            <form 
              className="relative p-8 md:p-12 rounded-[3.5rem] bg-white border border-gray-100 shadow-[0_40px_100px_rgba(26,54,93,0.08)] overflow-hidden"
              onSubmit={handleWhatsAppRedirect}
              noValidate
            >
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#7CB35B]/5 rounded-full blur-3xl pointer-events-none" />
              
              <div className="grid md:grid-cols-2 gap-6 mb-6 relative z-10">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1A365D]/40 ml-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 transition-all font-bold text-[#1A365D] placeholder:text-gray-300 outline-none ${
                      errors.name ? 'border-red-200' : 'border-transparent focus:ring-2 focus:ring-[#7CB35B]/30'
                    }`}
                    placeholder="Enter Name"
                    required
                  />
                  <AnimatePresence>
                    {errors.name && (
                      <motion.p 
                        initial={{ opacity: 0, y: -5 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        exit={{ opacity: 0 }}
                        className="text-[9px] font-bold text-red-500 ml-2 uppercase tracking-widest"
                      >
                        {errors.name}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1A365D]/40 ml-2">WhatsApp / Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 transition-all font-bold text-[#1A365D] placeholder:text-gray-300 outline-none ${
                      errors.phone ? 'border-red-200' : 'border-transparent focus:ring-2 focus:ring-[#2C5DA7]/30'
                    }`}
                    placeholder="Number"
                    required
                  />
                  <AnimatePresence>
                    {errors.phone && (
                      <motion.p 
                        initial={{ opacity: 0, y: -5 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        exit={{ opacity: 0 }}
                        className="text-[9px] font-bold text-red-500 ml-2 uppercase tracking-widest"
                      >
                        {errors.phone}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <div className="space-y-2 mb-8 relative z-10">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1A365D]/40 ml-2">How can we help?</label>
                <textarea
                  rows={3}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-[#2C5DA7]/30 outline-none transition-all font-bold text-[#1A365D] placeholder:text-gray-300 resize-none"
                  placeholder="Message (Optional)"
                />
              </div>

              <button 
                type="submit" 
                className="group relative w-full py-5 overflow-hidden rounded-[1.5rem] transition-all active:scale-95 shadow-2xl shadow-[#2C5DA7]/20"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#2C5DA7] via-[#1A365D] to-[#2C5DA7] bg-[length:200%_auto] animate-gradient-text" />
                <span className="relative z-10 flex items-center justify-center gap-3 text-white text-[12px] font-black uppercase tracking-[0.3em]">
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  Launch Consultation
                </span>
                <div className="absolute top-0 -inset-full h-full w-1/2 z-20 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-[shimmer_2s_infinite]" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
