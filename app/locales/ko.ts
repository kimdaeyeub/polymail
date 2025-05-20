import type { Translation } from "./types";

const ko: Translation = {
  home: {
    title: "PolyMail",
    subtitle: "AI 기반 다국어 뉴스레터 플랫폼",
    hero: {
      title: "AI 기반 다국어 뉴스레터로 글로벌 구독자와 소통하세요",
      subtitle:
        "한 번의 작성, 모든 언어로 자동 발송. 언어 장벽 없는 뉴스레터 운영을 PolyMail에서 경험하세요.",
      cta: "지금 시작하기",
      email_placeholder: "이메일을 입력하세요",
      sample: "샘플 뉴스레터 받아보기",
    },
    feature: {
      1: {
        title: "AI 자동 번역 & 발송",
        desc: "GPT/DeepL 기반 자연스러운 번역, 구독자별 언어 자동 감지 및 발송",
      },
      2: {
        title: "언어별 통계 대시보드",
        desc: "오픈율, 클릭률 등 언어별 성과를 한눈에",
      },
      3: {
        title: "초간단 시작",
        desc: "구독자 목록 임포트, 에디터로 작성, 5분 내 첫 발송",
      },
    },
    testimonial: {
      title: "실제 고객의 목소리",
    },
    pricing: {
      title: "요금제 안내",
      free: {
        title: "무료 요금제",
        desc: "영어 + 1개 언어, 기본 기능 제공",
      },
      pro: {
        title: "프로 요금제",
        desc: "5개 언어, 고급 번역/통계, $12/월",
      },
      enterprise: {
        title: "엔터프라이즈",
        desc: "무제한 언어, API 연동, 맞춤형 지원",
      },
    },
    faq: {
      title: "자주 묻는 질문",
      q1: "기존 뉴스레터 서비스와 어떻게 다른가요?",
      a1: "기존 서비스들은 다국어 지원이 없거나 수동 번역이 필요합니다. PolyMail은 AI 자동 번역, 구독자 언어 감지, 언어별 통계까지 통합 제공하는 유일한 서비스입니다.",
      q2: "무료 체험이 가능한가요?",
      a2: "네, 모든 기능을 14일간 무료로 체험할 수 있습니다. 이후 무료 요금제 또는 프로 요금제로 전환 가능합니다.",
      q3: "기술 지식이 없어도 사용할 수 있나요?",
      a3: "네, 직관적인 인터페이스로 누구나 쉽게 사용할 수 있습니다.",
      q4: "번역 품질은 어떤가요?",
      a4: "GPT와 DeepL의 최신 엔진을 활용해 자연스러운 번역을 제공합니다. 필요시 수동 조정도 가능합니다.",
    },
  },
  navigation: {
    kr: "한국어",
    es: "스페인어",
    en: "영어",
  },
};

export default ko;
