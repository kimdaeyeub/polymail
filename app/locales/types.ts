export type Translation = {
  home: {
    title: string;
    subtitle: string;
    hero: {
      title: string;
      subtitle: string;
      cta: string;
      email_placeholder: string;
      sample: string;
    };
    feature: {
      1: { title: string; desc: string };
      2: { title: string; desc: string };
      3: { title: string; desc: string };
    };
    testimonial: {
      title: string;
    };
    pricing: {
      title: string;
      free: { title: string; desc: string };
      pro: { title: string; desc: string };
      enterprise: { title: string; desc: string };
    };
    faq: {
      title: string;
      q1: string;
      a1: string;
      q2: string;
      a2: string;
      q3: string;
      a3: string;
      q4: string;
      a4: string;
    };
  };
  navigation: {
    en: string;
    kr: string;
    es: string;
  };
};
