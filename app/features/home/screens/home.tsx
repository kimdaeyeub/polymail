/**
 * Home Page Component
 *
 * This file implements the main landing page of the application with internationalization support.
 * It demonstrates the use of i18next for multi-language content, React Router's data API for
 * server-side rendering, and responsive design with Tailwind CSS.
 *
 * Key features:
 * - Server-side translation with i18next
 * - Client-side translation with useTranslation hook
 * - SEO-friendly metadata using React Router's meta export
 * - Responsive typography with Tailwind CSS
 */
import type { Route } from "./+types/home";

import { useState } from "react";
import { useTranslation } from "react-i18next";

import Footer from "~/core/components/footer";
import LangSwitcher from "~/core/components/lang-switcher";
import { Button } from "~/core/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/core/components/ui/card";
import { Collapsible } from "~/core/components/ui/collapsible";
import i18next from "~/core/lib/i18next.server";

/**
 * Meta function for setting page metadata
 *
 * This function generates SEO-friendly metadata for the home page using data from the loader.
 * It sets:
 * - Page title from translated "home.title" key
 * - Meta description from translated "home.subtitle" key
 *
 * The metadata is language-specific based on the user's locale preference.
 *
 * @param data - Data returned from the loader function containing translated title and subtitle
 * @returns Array of metadata objects for the page
 */
export const meta: Route.MetaFunction = ({ data }) => {
  return [
    { title: data?.title },
    { name: "description", content: data?.subtitle },
  ];
};

/**
 * Loader function for server-side data fetching
 *
 * This function is executed on the server before rendering the component.
 * It:
 * 1. Extracts the user's locale from the request (via cookies or Accept-Language header)
 * 2. Creates a translation function for that specific locale
 * 3. Returns translated strings for the page title and subtitle
 *
 * This approach ensures that even on first load, users see content in their preferred language,
 * which improves both user experience and SEO (search engines see localized content).
 *
 * @param request - The incoming HTTP request containing locale information
 * @returns Object with translated title and subtitle strings
 */
export async function loader({ request }: Route.LoaderArgs) {
  // Get a translation function for the user's locale from the request
  const t = await i18next.getFixedT(request);

  // Return translated strings for use in both the component and meta function
  return {
    title: t("home.title"),
    subtitle: t("home.subtitle"),
  };
}

/**
 * Home page component
 *
 * This is the main landing page component of the application. It displays a simple,
 * centered layout with a headline and subtitle, both internationalized using i18next.
 *
 * Features:
 * - Uses the useTranslation hook for client-side translation
 * - Implements responsive design with Tailwind CSS
 * - Maintains consistent translations between server and client
 *
 * The component is intentionally simple to serve as a starting point for customization.
 * It demonstrates the core patterns used throughout the application:
 * - Internationalization
 * - Responsive design
 * - Clean, semantic HTML structure
 *
 * @returns JSX element representing the home page
 */
export default function Home() {
  const { t } = useTranslation();
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  return (
    <div className="flex min-h-screen w-full flex-col">
      {/* 상단 Hero 섹션 */}
      <header className="relative flex flex-col items-center justify-center gap-6 px-4 py-16 text-center">
        <div className="absolute top-4 right-4">
          <LangSwitcher />
        </div>
        <h1 className="text-primary mb-2 text-3xl font-bold tracking-tight md:text-5xl">
          {t(
            "home.hero.title",
            "AI 기반 다국어 뉴스레터로 글로벌 구독자와 소통하세요",
          )}
        </h1>
        <p className="text-muted-foreground mb-6 text-lg md:text-2xl">
          {t(
            "home.hero.subtitle",
            "한 번의 작성, 모든 언어로 자동 발송. 언어 장벽 없는 뉴스레터 운영을 PolyMail에서 경험하세요.",
          )}
        </p>
        <div className="mx-auto flex w-full max-w-md flex-col items-center justify-center gap-3 md:flex-row">
          <Button size="lg" className="w-full md:w-auto">
            {t("home.hero.cta", "지금 시작하기")}
          </Button>
          <form className="flex w-full gap-2 md:w-auto">
            <input
              type="email"
              placeholder={t(
                "home.hero.email_placeholder",
                "이메일을 입력하세요",
              )}
              className="focus:ring-primary flex-1 rounded-md border px-3 py-2 text-base shadow-sm focus:ring-2 focus:outline-none"
            />
            <Button type="submit" variant="outline" size="lg">
              {t("home.hero.sample", "샘플 뉴스레터 받아보기")}
            </Button>
          </form>
        </div>
      </header>

      {/* 주요 가치/기능 카드 섹션 */}
      <section className="mx-auto flex max-w-5xl flex-col items-stretch justify-center gap-6 px-4 py-12 md:flex-row">
        <Card className="card-style min-w-[260px] flex-1">
          <CardHeader>
            <CardTitle>
              {t("home.feature.1.title", "AI 자동 번역 & 발송")}
            </CardTitle>
            <CardDescription>
              {t(
                "home.feature.1.desc",
                "GPT/DeepL 기반 자연스러운 번역, 구독자별 언어 자동 감지 및 발송",
              )}
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="card-style min-w-[260px] flex-1">
          <CardHeader>
            <CardTitle>
              {t("home.feature.2.title", "언어별 통계 대시보드")}
            </CardTitle>
            <CardDescription>
              {t(
                "home.feature.2.desc",
                "오픈율, 클릭률 등 언어별 성과를 한눈에",
              )}
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="card-style min-w-[260px] flex-1">
          <CardHeader>
            <CardTitle>{t("home.feature.3.title", "초간단 시작")}</CardTitle>
            <CardDescription>
              {t(
                "home.feature.3.desc",
                "구독자 목록 임포트, 에디터로 작성, 5분 내 첫 발송",
              )}
            </CardDescription>
          </CardHeader>
        </Card>
      </section>

      {/* 고객 인용문/신뢰 섹션 */}
      <section className="flex flex-col items-center gap-6 px-4 py-10">
        <h2 className="text-primary mb-2 text-xl font-semibold">
          {t("home.testimonial.title", "실제 고객의 목소리")}
        </h2>
        <div className="flex w-full max-w-4xl flex-col gap-6 md:flex-row">
          <div className="rounded-xl bg-gradient-to-tr from-indigo-800 to-purple-700 p-px">
            <Card className="flex-1">
              <CardContent>
                <blockquote className="mb-2 text-lg italic">
                  "PolyMail 덕분에 우리 뉴스레터의 글로벌 구독자 참여도가 3배나
                  증가했어요. 특히 한국, 일본, 독일 구독자들의 반응이
                  놀랍습니다."
                </blockquote>
                <div className="text-muted-foreground text-sm">
                  - 마이크 존슨, 글로벌 테크 뉴스레터 운영자
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="rounded-xl bg-gradient-to-tr from-indigo-800 to-purple-700 p-px">
            <Card className="flex-1">
              <CardContent>
                <blockquote className="mb-2 text-lg italic">
                  "다국어 뉴스레터 발송이 이렇게 쉬울 줄 몰랐어요. 번역부터
                  발송까지 모든 것이 자동화되어 있어 시간이 정말 많이
                  절약됩니다."
                </blockquote>
                <div className="text-muted-foreground text-sm">
                  - 사라 김, 글로벌 스타트업 마케팅 매니저
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 요금제/무료 체험 안내 */}
      <section className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-4 py-12">
        <h2 className="text-primary mb-4 text-xl font-semibold">
          {t("home.pricing.title", "요금제 안내")}
        </h2>
        <div className="flex w-full flex-col gap-6 md:flex-row">
          <Card className="border-primary flex-1 border-2">
            <CardHeader>
              <CardTitle>
                {t("home.pricing.free.title", "무료 요금제")}
              </CardTitle>
              <CardDescription>
                {t("home.pricing.free.desc", "영어 + 1개 언어, 기본 기능 제공")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-muted-foreground list-disc pl-5 text-sm">
                <li>AI 자동 번역/발송</li>
                <li>기본 통계</li>
                <li>2개 언어 지원</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="flex-1">
            <CardHeader>
              <CardTitle>
                {t("home.pricing.pro.title", "프로 요금제")}
              </CardTitle>
              <CardDescription>
                {t("home.pricing.pro.desc", "5개 언어, 고급 번역/통계, $12/월")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-muted-foreground list-disc pl-5 text-sm">
                <li>최대 5개 언어</li>
                <li>고급 번역 톤 조정</li>
                <li>상세 통계/리포트</li>
                <li>우선 지원</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="flex-1">
            <CardHeader>
              <CardTitle>
                {t("home.pricing.enterprise.title", "엔터프라이즈")}
              </CardTitle>
              <CardDescription>
                {t(
                  "home.pricing.enterprise.desc",
                  "무제한 언어, API 연동, 맞춤형 지원",
                )}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-muted-foreground list-disc pl-5 text-sm">
                <li>무제한 언어 지원</li>
                <li>API/맞춤형 통합</li>
                <li>전담 지원</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ 섹션 */}
      <section className="mx-auto w-full px-36 py-12">
        <h2 className="text-primary mb-6 text-xl font-semibold">
          {t("home.faq.title", "자주 묻는 질문")}
        </h2>
        <div className="flex w-full flex-col gap-4">
          {[1, 2, 3, 4].map((idx) => (
            <Collapsible
              key={idx}
              open={faqOpen === idx}
              onOpenChange={() => setFaqOpen(faqOpen === idx ? null : idx)}
            >
              <button
                className="bg-muted hover:bg-accent w-full rounded-md px-4 py-3 text-left font-medium transition"
                onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                type="button"
              >
                {t(`home.faq.q${idx}`)}
              </button>
              {faqOpen === idx && (
                <div className="text-muted-foreground border-primary mt-3 border-l-2 px-4 pb-4 text-sm">
                  {t(`home.faq.a${idx}`)}
                </div>
              )}
            </Collapsible>
          ))}
        </div>
      </section>
    </div>
  );
}
