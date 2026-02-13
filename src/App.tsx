import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Heart, Sparkles, Mail, Calendar, Clock, Gift, Music, Flower2, X } from 'lucide-react'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

// Sparkling Background Component
const SparklingBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const sparkles: HTMLDivElement[] = []

    for (let i = 0; i < 40; i++) {
      const sparkle = document.createElement('div')
      sparkle.className = 'sparkle'

      const size = Math.random() * 12 + 4
      sparkle.style.width = `${size}px`
      sparkle.style.height = `${size}px`
      sparkle.style.left = `${Math.random() * 100}%`
      sparkle.style.top = `${Math.random() * 100}%`
      sparkle.style.background = `radial-gradient(circle, ${Math.random() > 0.5 ? '#ffd700' : '#f4c430'} 0%, transparent 70%)`
      sparkle.style.boxShadow = `0 0 ${size * 2}px ${Math.random() > 0.5 ? '#ffd700' : '#f4c430'}`
      sparkle.style.animation = `twinkle ${Math.random() * 2 + 2}s ease-in-out infinite`
      sparkle.style.animationDelay = `${Math.random() * 3}s`

      container.appendChild(sparkle)
      sparkles.push(sparkle)
    }

    return () => {
      sparkles.forEach(s => s.remove())
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      style={{ background: 'linear-gradient(135deg, rgba(252,249,240,0.3) 0%, rgba(249,243,227,0.3) 100%)' }}
    />
  )
}

// Hero Section
const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLButtonElement>(null)
  const tulipRef = useRef<HTMLImageElement>(null)
  const singleTulipRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.4, delay: 0.3, ease: 'power3.out' }
      )

      gsap.fromTo(
        subtitleRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.7, ease: 'power3.out' }
      )

      gsap.fromTo(
        ctaRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 1.1, ease: 'power2.out' }
      )

      gsap.fromTo(
        [tulipRef.current, singleTulipRef.current],
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2, delay: 0.5, ease: 'power3.out', stagger: 0.2 }
      )

      gsap.to(tulipRef.current, {
        y: -12,
        rotation: 3,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })

      gsap.to(singleTulipRef.current, {
        y: -10,
        rotation: -2,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 0.5
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const handleSendLove = () => {
    for (let i = 0; i < 20; i++) {
      const sparkle = document.createElement('div')
      sparkle.innerHTML = '✨'
      sparkle.className = 'fixed text-2xl z-50 pointer-events-none'
      sparkle.style.left = '50%'
      sparkle.style.top = '50%'
      sparkle.style.filter = 'drop-shadow(0 0 10px #ffd700)'
      document.body.appendChild(sparkle)

      gsap.to(sparkle, {
        x: (Math.random() - 0.5) * 500,
        y: (Math.random() - 0.5) * 500,
        opacity: 0,
        scale: Math.random() * 2 + 0.5,
        rotation: Math.random() * 360,
        duration: 1.5,
        ease: 'power2.out',
        onComplete: () => sparkle.remove()
      })
    }
  }

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/images/hero-bg-new.jpg" alt="" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#fcf9f0]" />
      </div>

      <img
        ref={tulipRef}
        src="/images/hero-tulip.png"
        alt=""
        className="absolute left-[5%] top-[15%] w-36 md:w-56 z-10 opacity-90"
      />
      <img
        ref={singleTulipRef}
        src="/images/tulip-single.png"
        alt=""
        className="absolute right-[8%] bottom-[20%] w-24 md:w-36 z-10 opacity-90"
      />

      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Sparkles className="w-5 h-5 text-[#d4a017] animate-pulse-gentle" />
          <span className="font-body text-[#8b6914] font-medium tracking-[0.2em] uppercase text-xs">February 14th</span>
          <Sparkles className="w-5 h-5 text-[#d4a017] animate-pulse-gentle" />
        </div>

        <h1 ref={titleRef} className="font-display text-6xl md:text-8xl lg:text-9xl text-gradient-dark mb-4 italic-elegant">
          Happy Valentine's Day
        </h1>

        <div className="section-divider" />

        <p ref={subtitleRef} className="font-body text-lg md:text-xl text-[#8b6914] mb-3 font-light italic">
          To the one who makes my heart bloom
        </p>

        <p className="font-body text-sm md:text-base text-[#a08030] mb-12 max-w-lg mx-auto leading-relaxed">
          Like a tulip in spring, our love grows more beautiful with each passing day.
        </p>

        <button ref={ctaRef} onClick={handleSendLove} className="magnetic-button btn-elegant flex items-center gap-3 mx-auto">
          Send Love
        </button>
      </div>
    </section>
  )
}

// Love Timeline Section (UPDATED: Travel / Food / Clingy / Us)
const TimelineSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<SVGLineElement>(null)

  const events = [
    {
      date: 'Travel',
      description: 'Yung mga lakad natin, kahit simple, sobrang saya basta ikaw kasama ko.',
      image: '/images/timeline-new-1.jpg',
      icon: Calendar
    },
    {
      date: 'Food',
      description: 'Kain trip tayo palagi. Ikaw yung favorite ko kasama mag-food crawl.',
      image: '/images/timeline-new-2.jpg',
      icon: Gift
    },
    {
      date: 'Clingy',
      description: 'Yung moments na ayaw bitawan, kahit saglit lang. Ikaw yung peace ko.',
      image: '/images/timeline-new-3.jpg',
      icon: Heart
    },
    {
      date: 'Us',
      description: 'Kahit ano mangyari, tayo. We fight, we fix, and we stay.',
      image: '/images/timeline-new-4.jpg',
      icon: Music
    }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (lineRef.current) {
        const length = lineRef.current.getTotalLength()
        gsap.set(lineRef.current, { strokeDasharray: length, strokeDashoffset: length })

        gsap.to(lineRef.current, {
          strokeDashoffset: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: 1
          }
        })
      }

      gsap.utils.toArray<HTMLElement>('.timeline-card').forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: { trigger: card, start: 'top 85%', toggleActions: 'play none none reverse' },
            delay: i * 0.1
          }
        )
      })

      gsap.utils.toArray<HTMLElement>('.timeline-icon').forEach((icon, i) => {
        gsap.fromTo(
          icon,
          { scale: 0 },
          {
            scale: 1,
            duration: 0.6,
            ease: 'elastic.out(1, 0.5)',
            scrollTrigger: { trigger: icon, start: 'top 85%', toggleActions: 'play none none reverse' },
            delay: i * 0.15
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 md:py-36 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="font-body text-[#d4a017] text-xs tracking-[0.3em] uppercase mb-4 block">Our Moments</span>
          <h2 className="font-display text-5xl md:text-6xl text-gradient-dark italic-elegant mb-4">The Four Things I Love</h2>
          <div className="section-divider" />
          <p className="font-body text-[#8b6914] text-base italic max-w-md mx-auto">
            Travel, food, clingy moments, and us. Yan yung mga bagay na gusto kong balikan lagi.
          </p>
        </div>

        <div className="relative">
          <svg className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 hidden md:block" style={{ top: 0 }}>
            <line
              ref={lineRef}
              x1="2"
              y1="0"
              x2="2"
              y2="100%"
              stroke="#d4a017"
              strokeWidth="2"
              strokeLinecap="round"
              className="timeline-line"
            />
          </svg>

          <div className="space-y-16 md:space-y-28">
            {events.map((event, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`timeline-card flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="modern-card rounded-2xl overflow-hidden group cursor-pointer shine-effect">
                    <div className="overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.date}
                        className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-2xl md:text-3xl text-[#8b6914] mb-2 italic-elegant">{event.date}</h3>
                      <p className="font-body text-[#a08030] text-sm italic">{event.description}</p>
                    </div>
                  </div>
                </div>

                <div className="timeline-icon relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#f4c430] to-[#d4a017] rounded-full flex items-center justify-center shadow-lg">
                    <event.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Modern Love Letter Section (Valentine version of your message)
const LoveLetterSection = () => {
  const [isOpen, setIsOpen] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const letterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        letterRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none reverse' }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 md:py-36 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-body text-[#d4a017] text-xs tracking-[0.3em] uppercase mb-4 block">A Special Message</span>
          <h2 className="font-display text-5xl md:text-6xl text-gradient-dark italic-elegant mb-4">A Letter to You</h2>
          <div className="section-divider" />
        </div>

        <div ref={letterRef} className="love-letter-container">
          {!isOpen ? (
            <div
              onClick={() => setIsOpen(true)}
              className="modern-card rounded-2xl p-10 md:p-16 cursor-pointer group text-center hover:shadow-2xl transition-all duration-500"
            >
              <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-[#f4c430] to-[#d4a017] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                <Mail className="w-12 h-12 text-white" />
              </div>
              <h3 className="font-display text-3xl text-[#8b6914] mb-4 italic-elegant">Open My Letter</h3>
              <p className="font-body text-[#a08030] text-sm italic">Click to read what's in my heart</p>
              <div className="mt-8 flex justify-center gap-2">
                <Sparkles className="w-4 h-4 text-[#d4a017] animate-pulse" />
                <Sparkles className="w-4 h-4 text-[#d4a017] animate-pulse delay-100" />
                <Sparkles className="w-4 h-4 text-[#d4a017] animate-pulse delay-200" />
              </div>
            </div>
          ) : (
            <div className="modern-card rounded-2xl p-8 md:p-12 relative animate-fade-in">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#f9f3e3] flex items-center justify-center hover:bg-[#f4c430] hover:text-white transition-colors duration-300"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center mb-8">
                <Flower2 className="w-10 h-10 text-[#d4a017] mx-auto mb-4" />
                <h3 className="font-display text-3xl text-[#8b6914] italic-elegant">My Dearest Ali</h3>
              </div>

              <div className="space-y-6 text-center">
                <p className="font-body text-[#8b6914] leading-[2] text-sm md:text-base italic">
                  Happy Valentine's Day sa atin mi. Naalala ko pa yung night na sinabi mo sa’kin na wag na mag-court, boyfriend na kita.
                  Sobrang special nun for me. Imagine kung hindi ako nag-risk sayo, baka wala akong Ella Benico sa buhay ko ngayon.
                </p>

                <p className="font-body text-[#8b6914] leading-[2] text-sm md:text-base italic">
                  Yung time pa na wala akong tulong sa ibang tao kung paano mag moves para maakit kita, pero I still succeeded.
                  Proud na proud ako dun. Ang sarap lang isipin na ang dami na nating napagdaanan, and look at us ngayon.
                </p>

                <p className="font-body text-[#8b6914] leading-[2] text-sm md:text-base italic">
                  We had ups and downs, and yes, may mga arguments tayo. Pero hindi natin hinayaan na sirain tayo nun.
                  We fight, we fix, and we stay. Yun yung gusto ko sa atin, mi.
                </p>

                <p className="font-body text-[#8b6914] leading-[2] text-sm md:text-base italic">
                  And mi, I’m sorry for everything. Sorry kung minsan nagiging harsh ako, sorry kung nagagalit ako agad without knowing muna yung whole scenario,
                  sorry kung napapaiyak kita before. I feel bad kasi dapat iniintindi kita, kaso hindi ko nagagawa minsan.
                  Pero this time, hindi lang sa salita. I’ll do it in actions. Marami akong babaguhin sa sarili ko, I promise.
                </p>

                <p className="font-body text-[#8b6914] leading-[2] text-sm md:text-base italic">
                  Kung hindi ka dumating sa buhay ko, I know I’d still be stuck in a dark place. You came at the right time, mi.
                  Ikaw yung dahilan bakit bumalik yung ilaw. Ikaw yung saver ko, yung angel ko.
                  And oo, maldita ka minsan, parang uusok na ulo mo sa’kin, pero ikaw din yung dahilan bakit mas gusto kong maging better araw-araw.
                </p>

                <p className="font-body text-[#8b6914] leading-[2] text-sm md:text-base italic">
                  I love you, and you were the reason na natutunan kong mahalin yung sarili ko, and to love you more.
                  Pero mas love ikaw kaysa sa sarili ko. Na-spoil kita kasi love kita, and because you deserve to be loved and treated well.
                  Perfect timing talaga. God really made us meet.
                </p>

                <p className="font-body text-[#8b6914] leading-[2] text-sm md:text-base italic">
                  Kaya this Valentine’s, gusto ko lang sabihin: more travels, more kain, more memories, more everything.
                  Wait mo ako mi, kasi this 2026 will be my year. I’ll spoil you more and more, and I’ll take care of you hanggang sa pagtanda.
                </p>

                <div className="pt-6 border-t border-[#f4c430]/20">
                  <p className="font-display text-xl md:text-2xl text-[#d4a017] italic-elegant">
                    Happy Valentine's Day, misis ko, asawa ko, mahal, pretty dragon, commander, master, and Ali.
                  </p>
                  <p className="font-body text-[#a08030] text-sm mt-3 italic">
                    I love you more than anything. I’ll be at your side no matter what.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

// Professional Photo Gallery Section (UPDATED: 5 photos, same theme)
const GallerySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const photos = [
    { src: '/images/gallery-new-1.jpg', caption: 'Travel', subtitle: 'Places feel softer when you are beside me' },
    { src: '/images/gallery-new-2.jpg', caption: 'Food', subtitle: 'Kain, kwento, tawa. Repeat' },
    { src: '/images/gallery-new-3.jpg', caption: 'Clingy', subtitle: 'The kind of close that feels like home' },
    { src: '/images/gallery-new-4.jpg', caption: 'Us', subtitle: 'Two hearts choosing each other everyday' },
    { src: '/images/gallery-new-5.jpg', caption: 'Simple Days', subtitle: 'Even the ordinary becomes special with you' }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.gallery-item').forEach((item, i) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: { trigger: item, start: 'top 90%', toggleActions: 'play none none reverse' },
            delay: i * 0.1
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 md:py-36 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-body text-[#d4a017] text-xs tracking-[0.3em] uppercase mb-4 block">Memories</span>
          <h2 className="font-display text-5xl md:text-6xl text-gradient-dark italic-elegant mb-4">Photos I Want To Keep</h2>
          <div className="section-divider" />
          <p className="font-body text-[#8b6914] text-base italic max-w-md mx-auto">
            Travel, food, clingy moments, and us. Plus the small days that made everything feel right.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div
              key={index}
              className={`gallery-item ${index === 0 || index === 3 ? 'md:row-span-2' : ''}`}
              onClick={() => setSelectedImage(photo.src)}
            >
              <div className="photo-card h-full cursor-pointer shine-effect">
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-full object-cover"
                  style={{ minHeight: index === 0 || index === 3 ? '500px' : '280px' }}
                />
                <div className="photo-card-caption">
                  <h3 className="font-display text-2xl text-white italic-elegant mb-1">{photo.caption}</h3>
                  <p className="font-body text-white/80 text-sm">{photo.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <img
            src={selectedImage}
            alt=""
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}

// Countdown Timer Section (real-time countdown to Feb 14)
const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const now = new Date()
    let year = now.getFullYear()
    let targetDate = new Date(year, 1, 14, 0, 0, 0, 0)

    if (now.getTime() > targetDate.getTime()) {
      year += 1
      targetDate = new Date(year, 1, 14, 0, 0, 0, 0)
    }

    const calculateTimeLeft = () => {
      const current = new Date()
      const diff = targetDate.getTime() - current.getTime()

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((diff / (1000 * 60)) % 60)
      const seconds = Math.floor((diff / 1000) % 60)

      setTimeLeft({ days, hours, minutes, seconds })
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.countdown-item',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none reverse' }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const timeBlocks = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hours' },
    { value: timeLeft.minutes, label: 'Minutes' },
    { value: timeLeft.seconds, label: 'Seconds' }
  ]

  return (
    <section ref={sectionRef} className="relative py-24 md:py-36 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="modern-card rounded-3xl p-10 md:p-16">
          <div className="text-center mb-12">
            <Clock className="w-10 h-10 text-[#d4a017] mx-auto mb-5 animate-pulse-gentle" />
            <h2 className="font-display text-3xl md:text-4xl text-[#8b6914] mb-3 italic-elegant">
              Counting Down to Our Special Day
            </h2>
            <p className="font-body text-[#a08030] text-sm italic">Until we celebrate our love again</p>
          </div>

          <div className="grid grid-cols-4 gap-3 md:gap-8">
            {timeBlocks.map((block, index) => (
              <div key={index} className="countdown-item text-center">
                <div className="bg-gradient-to-br from-[#f9f3e3] to-[#fcf9f0] rounded-xl p-4 md:p-6 mb-2 border border-[#f4c430]/20">
                  <span className="font-display text-3xl md:text-5xl text-[#d4a017] italic-elegant">
                    {String(block.value).padStart(2, '0')}
                  </span>
                </div>
                <span className="font-body text-[#8b6914]/70 text-[10px] md:text-xs tracking-wider uppercase">{block.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Footer Section
const FooterSection = () => {
  const [showKiss, setShowKiss] = useState(false)
  const footerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        footerRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          scrollTrigger: { trigger: footerRef.current, start: 'top 90%', toggleActions: 'play none none reverse' }
        }
      )
    }, footerRef)

    return () => ctx.revert()
  }, [])

  const handleSendKiss = () => {
    setShowKiss(true)
    setTimeout(() => setShowKiss(false), 2000)

    for (let i = 0; i < 20; i++) {
      const item = document.createElement('div')
      item.innerHTML = '✨'
      item.className = 'fixed text-2xl z-50 pointer-events-none'
      item.style.left = '50%'
      item.style.top = '85%'
      item.style.filter = 'drop-shadow(0 0 8px #ffd700)'
      document.body.appendChild(item)

      gsap.to(item, {
        x: (Math.random() - 0.5) * 400,
        y: -Math.random() * 250 - 80,
        opacity: 0,
        rotation: Math.random() * 360,
        duration: 1.5,
        ease: 'power2.out',
        onComplete: () => item.remove()
      })
    }
  }

  return (
    <footer ref={footerRef} className="relative py-24 md:py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 aurora-bg opacity-40" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <span className="font-body text-[#d4a017] text-xs tracking-[0.3em] uppercase mb-6 block">With All My Love</span>
        <h2 className="font-display text-5xl md:text-7xl text-gradient-dark italic-elegant mb-8">
          Happy Valentine's Day
        </h2>

        <div className="flex items-center justify-center gap-4 mb-10">
          <p className="font-body text-base text-[#8b6914] italic">Made with love for you</p>
        </div>

        <button onClick={handleSendKiss} className="magnetic-button btn-elegant flex items-center gap-3 mx-auto">
          Send a Kiss
        </button>

        {showKiss && (
          <div className="mt-8 animate-fade-in">
            <p className="font-display text-2xl text-[#d4a017] italic-elegant">Muah!</p>
          </div>
        )}

        <div className="mt-16 pt-8 border-t border-[#f4c430]/20">
          <p className="font-body text-xs text-[#8b6914]/60 tracking-wider">
            © 2025 With All My Love Forever and Always
          </p>
        </div>
      </div>
    </footer>
  )
}

// Main App Component
function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <SparklingBackground />

      <main className="relative z-10">
        <HeroSection />
        <TimelineSection />
        <LoveLetterSection />
        <GallerySection />
        <CountdownSection />
        <FooterSection />
      </main>
    </div>
  )
}

export default App
