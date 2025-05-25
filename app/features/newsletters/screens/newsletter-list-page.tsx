/**
 * 하나의 뉴스레터 채널을 보여주는 곳(유튜브 채널을 생각하면 쉬움)
 * 유튜브 채널 = 뉴스레터 리스트 페이지
 * 유튜브 채널 내의 비디오 = 뉴스레터 페이지
 * url 형태: /newsletters/:newsLetterId
 * newsLetterId는 채널 id라고 생각하면 됨.
 * 리뷰 조회(별점이 높은 4~6개) => 악성리뷰를 높은 별점으로 작성할 수도 있음 작성자가 원하는 리뷰를 넣을 수 있는 공간이 필요할지도
 * 리뷰가 없거나 작성자가 리스트에 렌더링하기 위해 등록한 리뷰가 없다면 리뷰리스트 렌더링 X
 */
import { Link } from "react-router";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/core/components/ui/avatar";
import { Button } from "~/core/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/core/components/ui/card";
import { Separator } from "~/core/components/ui/separator";

const cardData = [
  {
    title: "원격근무의 미래: 2025년 트렌드 분석",
    date: "2025년 5월 26일",
    description:
      "AI와 메타버스가 바꾸는 원격근무 환경, 글로벌 기업들의 새로운 근무 정책, 그리고 이에 따른 디지털 노마드들의 적응 전략을 심층 분석합니다.",
  },
  {
    title: "노마드를 위한 완벽한 도시 가이드 2025",
    date: "2025년 5월 19일",
    description:
      "인터넷 속도, 생활비, 커뮤니티, 안전성을 고려한 최적의 디지털 노마드 도시 TOP 10과 각 도시별 상세 정보를 소개합니다.",
  },
  {
    title: "효율적인 원격 협업 도구 모음",
    date: "2025년 5월 12일",
    description:
      "시차가 있는 팀과의 협업을 위한 최신 툴과 베스트 프랙티스, 실제 사용 사례와 함께 소개합니다.",
  },
  {
    title: "디지털 노마드의 재정 관리 전략",
    date: "2025년 5월 5일",
    description:
      "다중 통화 관리, 국제 세금 신고, 연금 및 보험 등 노마드 생활에서 꼭 알아야 할 재정 관리 팁을 공유합니다.",
  },
  {
    title: "건강한 노마드 생활을 위한 루틴",
    date: "2025년 4월 28일",
    description:
      "시차 적응, 운동 습관, 멘탈 케어 등 장기적인 노마드 생활을 위한 건강 관리 방법을 소개합니다.",
  },
  {
    title: "노마드를 위한 필수 앱 컬렉션",
    date: "2025년 4월 21일",
    description:
      "숙소 예약부터 현지 교통, 언어 학습까지 노마드 생활에 필수적인 모바일 앱을 추천합니다.",
  },
  {
    title: "원격근무자를 위한 사이버 보안 가이드",
    date: "2025년 4월 14일",
    description:
      "공공 Wi-Fi 사용시 주의사항, VPN 선택법, 중요 데이터 보호 등 필수 보안 수칙을 설명합니다.",
  },
  {
    title: "디지털 노마드의 네트워킹 전략",
    date: "2025년 4월 7일",
    description:
      "전 세계 코워킹 스페이스 활용법, 현지 커뮤니티 참여 방법, 온라인 네트워킹 플랫폼 소개합니다.",
  },
  {
    title: "시간 관리의 기술: 노마드 편",
    date: "2025년 3월 31일",
    description:
      "다른 시간대 사이에서 일과 삶의 균형을 찾는 방법, 효율적인 시간 관리 전략을 공유합니다.",
  },
  {
    title: "노마드를 위한 미니멀 라이프 가이드",
    date: "2025년 3월 24일",
    description:
      "이동이 잦은 생활에 맞는 미니멀 라이프스타일 팁, 필수품 목록, 정리 방법을 소개합니다.",
  },
  {
    title: "디지털 노마드의 비자 가이드 2025",
    date: "2025년 3월 17일",
    description:
      "각국의 디지털 노마드 비자 정책, 신청 절차, 필요 서류 등을 상세히 안내합니다.",
  },
  {
    title: "원격근무와 생산성 향상 전략",
    date: "2025년 3월 10일",
    description:
      "장소에 구애받지 않고 최상의 성과를 내기 위한 워크플로우 최적화 방법을 설명합니다.",
  },
  {
    title: "노마드를 위한 주거 솔루션",
    date: "2025년 3월 3일",
    description:
      "단기 렌탈부터 코리빙까지, 다양한 주거 옵션의 장단점과 선택 기준을 분석합니다.",
  },
  {
    title: "디지털 디톡스와 노마드 생활",
    date: "2025년 2월 24일",
    description:
      "지속 가능한 노마드 생활을 위한 디지털 디톡스 방법과 오프라인 활동의 중요성을 다룹니다.",
  },
  {
    title: "프리랜서 노마드의 수입 관리",
    date: "2025년 2월 17일",
    description:
      "다양한 수입원 관리, 글로벌 결제 시스템 활용, 환율 변동 대비 전략 등을 소개합니다.",
  },
];

const NewsletterListPage = () => {
  return (
    <div className="grid min-h-screen w-full grid-cols-3 gap-4 px-32 py-20">
      <div className="col-span-1 flex h-fit flex-col items-center justify-start gap-6 rounded-md px-8 py-6">
        <Avatar className="size-44 bg-cover bg-center">
          <AvatarImage src="https://images.unsplash.com/photo-1747607174999-0ca07c1ef75a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNjB8fHxlbnwwfHx8fHw%3D" />
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
        <div className="text-muted-foreground mt-5 flex w-full flex-col gap-1">
          <div className="flex flex-col gap-3">
            <h1 className="text-lg font-semibold text-white">디지털노마드</h1>
            <Separator className="my-1" />
            <p>
              디지털 노마드 라이프스타일에 대한 정보와 팁을 공유하는
              뉴스레터입니다. 새로운 워크스타일을 찾는 분들을 위한 가이드입니다.
            </p>
          </div>
          <Separator className="my-1" />
          <div className="flex items-center gap-2">
            <span>구독자:</span>
            <span>14.5K</span>
          </div>
          <div className="flex items-center gap-2">
            <span>최근 발행일:</span>
            <span>2025년 5월 26일</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="whitespace-nowrap">번역 언어:</span>
            <div className="flex flex-wrap gap-1.5">
              {["한국어", "인도어", "스페인어", "영어", "일본어", "중국어"].map(
                (lang, index, arr) => (
                  <>
                    <span key={index}>{lang}</span>
                    {index < arr.length - 1 && <span> | </span>}
                  </>
                ),
              )}
            </div>
          </div>
        </div>
        <Button className="button-secondary h-12 w-full" asChild>
          <Link to="/newsletters/123/subscribe">구독하기</Link>
        </Button>
      </div>
      <div className="col-span-2 flex flex-col gap-4">
        <div className="flex w-full justify-end">
          <Button asChild variant="link">
            <Link to="/newsletters/123/review">리뷰 둘러보기 &rarr;</Link>
          </Button>
        </div>
        {cardData.map((item, index) => (
          <div key={index} className="card-style h-32 w-full p-4">
            <div className="flex flex-col gap-2">
              <div className="flex w-full items-center justify-between gap-2.5">
                <div>{item.title}</div>
                <span className="text-muted-foreground text-sm">
                  {item.date}
                </span>
              </div>
              <div className="text-muted-foreground line-clamp-3">
                {item.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsletterListPage;
