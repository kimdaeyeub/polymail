import React from "react";
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

/**
 * Explore Dashboard
 * - 이메일 구독을 돕기 위해 이메일 뉴스레터를 작성하는 사람들을 렌더링
 * - 이메일 뉴스레터 서비스에 대한 짧은 홍보글
 * - 뉴스레터 저자의 이름과 프로플 사진이 든 카드
 * - 이메일 카테고리 분류
 * - 이메일 뉴스레터 구독 버튼
 */

/**
 * Explore Dashboard Component
 *
 * This component serves as the main entry point for the explore section of the application.
 * It provides a layout for displaying email newsletter authors along with their promotional content.
 * Users can view the author's profile picture and name, categorize email types, and subscribe to newsletters.
 */

// 이름, imageUrl, description으로 구성된 객체 배열
const cardData = [
  {
    name: "테크인사이트",
    imageUrl: "https://github.com/shadcn.png",
    description:
      "최신 테크 트렌드와 IT 업계 동향을 깊이 있게 분석하는 주간 뉴스레터입니다. AI, 클라우드, 모바일 등 다양한 기술 분야를 다룹니다.",
  },
  {
    name: "스타트업 위클리",
    imageUrl:
      "https://tailwindcss.com/_next/static/media/avatar-4.61762eae.png",
    description:
      "국내외 유망 스타트업 소식과 투자 동향, 성공 사례를 공유하는 뉴스레터입니다. 창업과 투자에 관심 있는 분들을 위한 필독서입니다.",
  },
  {
    name: "디자인 인스피레이션",
    imageUrl:
      "https://tailwindcss.com/_next/static/media/avatar-5.80ec4bd6.png",
    description:
      "UI/UX 디자인 트렌드와 영감을 주는 작품들을 소개하는 뉴스레터입니다. 디자이너들의 작업 프로세스와 인사이트를 공유합니다.",
  },
  {
    name: "금융마스터",
    imageUrl:
      "https://tailwindcss.com/_next/static/media/avatar-6.4477a8c2.png",
    description:
      "주식, 부동산, 암호화폐 등 투자 정보와 재테크 팁을 제공하는 뉴스레터입니다. 실용적인 자산관리 방법을 알려드립니다.",
  },
  {
    name: "웰니스데일리",
    imageUrl:
      "https://tailwindcss.com/_next/static/media/avatar-7.7aeec531.png",
    description:
      "건강, 운동, 명상 등 웰빙 라이프스타일을 위한 정보를 제공하는 뉴스레터입니다. 일상 속 작은 습관의 변화를 도와드립니다.",
  },
  {
    name: "푸드스토리",
    imageUrl:
      "https://tailwindcss.com/_next/static/media/avatar-1.4512b883.png",
    description:
      "맛집 추천부터 요리 레시피, 음식 문화까지 먹거리에 관한 모든 것을 다루는 뉴스레터입니다. 미식가들을 위한 맛있는 이야기를 전합니다.",
  },
  {
    name: "북러버스",
    imageUrl:
      "https://tailwindcss.com/_next/static/media/avatar-2.74328963.png",
    description:
      "매주 엄선된 도서 추천과 서평, 작가 인터뷰를 제공하는 독서 뉴스레터입니다. 좋은 책과 함께하는 지적 여정을 시작하세요.",
  },
  {
    name: "여행인사이더",
    imageUrl:
      "https://tailwindcss.com/_next/static/media/avatar-3.905e2d38.png",
    description:
      "숨은 여행지 추천과 현지 정보, 여행 팁을 공유하는 뉴스레터입니다. 특별한 여행을 계획하는 분들을 위한 가이드입니다.",
  },
  {
    name: "커리어점프",
    imageUrl:
      "https://tailwindcss.com/_next/static/media/avatar-4.61762eae.png",
    description:
      "취업, 이직, 커리어 개발에 관한 실질적인 조언과 업계 동향을 전하는 뉴스레터입니다. 프로페셔널한 성장을 돕습니다.",
  },
  {
    name: "그린라이프",
    imageUrl:
      "https://tailwindcss.com/_next/static/media/avatar-5.80ec4bd6.png",
    description:
      "환경 보호와 지속 가능한 라이프스타일에 대한 정보를 공유하는 뉴스레터입니다. 작은 실천으로 시작하는 친환경 생활을 제안합니다.",
  },
  {
    name: "아트위클리",
    imageUrl:
      "https://tailwindcss.com/_next/static/media/avatar-6.4477a8c2.png",
    description:
      "미술, 음악, 공연 등 문화예술 소식과 전시 정보를 전하는 뉴스레터입니다. 예술을 사랑하는 분들을 위한 문화 가이드입니다.",
  },
  {
    name: "패션트렌드",
    imageUrl:
      "https://tailwindcss.com/_next/static/media/avatar-7.7aeec531.png",
    description:
      "최신 패션 트렌드와 스타일 팁, 쇼핑 정보를 제공하는 뉴스레터입니다. 패션 피플들의 필수 구독 콘텐츠입니다.",
  },
  {
    name: "디지털노마드",
    imageUrl:
      "https://tailwindcss.com/_next/static/media/avatar-8.4477a8c2.png",
    description:
      "원격근무와 디지털 노마드 라이프스타일에 대한 정보와 팁을 공유하는 뉴스레터입니다. 새로운 워크스타일을 찾는 분들을 위한 가이드입니다.",
  },
  {
    name: "펫케어",
    imageUrl:
      "https://tailwindcss.com/_next/static/media/avatar-9.4477a8c2.png",
    description:
      "반려동물 건강관리와 교육, 제품 추천 등 펫팸족을 위한 유용한 정보를 제공하는 뉴스레터입니다. 행복한 반려생활을 도와드립니다.",
  },
  {
    name: "영화덕후",
    imageUrl: "https://github.com/shadcn.png",
    description:
      "최신 영화 리뷰와 추천, 영화계 소식을 전하는 뉴스레터입니다. 시네필들을 위한 심층적인 영화 이야기를 전합니다.",
  },
  {
    name: "생산성해커",
    imageUrl: "https://github.com/shadcn.png",
    description:
      "업무 효율과 시간관리, 생산성 향상을 위한 팁과 도구를 소개하는 뉴스레터입니다. 일잘러가 되기 위한 방법을 공유합니다.",
  },
  {
    name: "크립토인사이트",
    imageUrl: "https://github.com/shadcn.png",
    description:
      "블록체인과 암호화폐 시장 분석, 투자 정보를 제공하는 뉴스레터입니다. 디지털 자산 투자자들을 위한 전문 정보를 전합니다.",
  },
  {
    name: "언어마스터",
    imageUrl: "https://github.com/shadcn.png",
    description:
      "외국어 학습 팁과 효과적인 학습 방법, 문화 이야기를 공유하는 뉴스레터입니다. 글로벌 시대의 언어 능력 향상을 돕습니다.",
  },
  {
    name: "DIY프로젝트",
    imageUrl: "https://github.com/shadcn.png",
    description:
      "손쉽게 따라할 수 있는 DIY 프로젝트와 취미 활동 아이디어를 제공하는 뉴스레터입니다. 창의적인 취미생활을 시작해보세요.",
  },
  {
    name: "브랜드스토리",
    imageUrl: "https://github.com/shadcn.png",
    description:
      "성공적인 브랜드들의 마케팅 전략과 스토리를 분석하는 뉴스레터입니다. 브랜딩과 마케팅에 관심 있는 분들을 위한 인사이트를 제공합니다.",
  },
  {
    name: "미니멀라이프",
    imageUrl: "https://github.com/shadcn.png",
    description:
      "심플하고 의미 있는 삶을 위한 미니멀 라이프스타일 팁과 정보를 공유하는 뉴스레터입니다. 물건을 줄이고 본질에 집중하는 삶을 제안합니다.",
  },
];
const ExploreDashboard = () => {
  return (
    <div className="flex flex-col items-center gap-4 py-20">
      <h1 className="text-5xl font-bold">Explore</h1>
      <div className="mt-5 flex items-center gap-2">
        {["인기", "최신", "추천"].map((item, index) => (
          <Button className="rounded-full" key={index}>
            {item}
          </Button>
        ))}
      </div>
      <div className="grid w-full grid-cols-3 grid-rows-6 gap-4 px-32 py-8">
        {cardData.map((item, index) => (
          <Link to={`/newsletters/3`}>
            <Card key={index} className="card-style h-full w-full">
              <CardHeader>
                <div className="flex items-center gap-2.5">
                  <Avatar>
                    <AvatarImage src={item.imageUrl} />
                    <AvatarFallback>A</AvatarFallback>
                  </Avatar>
                  <CardTitle>{item.name}</CardTitle>
                </div>
                <CardDescription className="text-muted-foreground line-clamp-3">
                  {item.description}
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ExploreDashboard;
