import type { Translation } from "./types";

const en: Translation = {
  home: {
    title: "PolyMail",
    subtitle: "AI-powered multilingual newsletter platform",
    hero: {
      title:
        "Connect with global subscribers through AI-powered multilingual newsletters",
      subtitle:
        "Write once, send in every language. Experience borderless newsletter operations with PolyMail.",
      cta: "Get Started",
      email_placeholder: "Enter your email",
      sample: "Get Sample Newsletter",
    },
    feature: {
      1: {
        title: "AI Translation & Delivery",
        desc: "Natural translation powered by GPT/DeepL, auto-detect and send by subscriber language",
      },
      2: {
        title: "Language Analytics Dashboard",
        desc: "See open/click rates and performance by language at a glance",
      },
      3: {
        title: "Super Easy Start",
        desc: "Import subscribers, write in the editor, send your first newsletter in 5 minutes",
      },
    },
    testimonial: {
      title: "What Our Customers Say",
    },
    pricing: {
      title: "Pricing Plans",
      free: {
        title: "Free Plan",
        desc: "English + 1 language, basic features included",
      },
      pro: {
        title: "Pro Plan",
        desc: "5 languages, advanced translation/analytics, $12/mo",
      },
      enterprise: {
        title: "Enterprise",
        desc: "Unlimited languages, API integration, custom support",
      },
    },
    faq: {
      title: "Frequently Asked Questions",
      q1: "How is PolyMail different from other newsletter services?",
      a1: "Other services lack multilingual support or require manual translation. PolyMail uniquely offers AI translation, subscriber language detection, and language analytics all in one.",
      q2: "Is there a free trial?",
      a2: "Yes, you can try all features free for 14 days. After that, continue with the free plan or upgrade to Pro.",
      q3: "Can I use it without technical knowledge?",
      a3: "Absolutely! The intuitive interface is easy for anyone to use.",
      q4: "How good is the translation quality?",
      a4: "We use the latest GPT and DeepL engines for natural translations. You can also manually adjust if needed.",
    },
  },
  navigation: {
    en: "English",
    kr: "Korean",
    es: "Spanish",
  },
};

export default en;
