import google from '../assets/partners/google.svg'
import adobe from '../assets/partners/adobe.svg'
import stripe from '../assets/partners/stripe.svg'
import coinbase from '../assets/partners/coinbase.svg'
import github from '../assets/partners/github.svg'
import uber from '../assets/partners/uber.svg'

// Width/height are the Figma clip boxes (desktop, 80px tall). mobileOrder copies the
// different sequence used in 02-hero-mobile.svg.
export const partners = [
  { name: 'Google', src: google, width: 188.3, mobileOrder: 'order-5' },
  { name: 'Adobe', src: adobe, width: 221.667, mobileOrder: 'order-6' },
  { name: 'Stripe', src: stripe, width: 133.333, mobileOrder: 'order-3' },
  { name: 'Coinbase', src: coinbase, width: 225, mobileOrder: 'order-2' },
  { name: 'GitHub', src: github, width: 225, mobileOrder: 'order-4' },
  { name: 'Uber', src: uber, width: 120, mobileOrder: 'order-1' },
]
