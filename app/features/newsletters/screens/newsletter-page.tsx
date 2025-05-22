import React from "react";

/**
 * 하나의 뉴스레터 페이지를 보여주는 곳
 * url 형태: /newsletters/:newsLetterId/:postId
 * newsLetterId는 채널 id, postId는 뉴스레터 id
 * 여기서는 실제로 작성한 뉴스레터 내용이 보이는 페이지
 * 해당 뉴스레터의 번역본이 존재하지 않을경우 작성자의 언어로만 확인 가능
 * 구독을 하고나면 그 다음부터 해당 언어의 뉴스레터가 자동으로 생성될거임.
 * 다음에 방문하는 동일 언어 유저는 첫번째 구독자가 받은 번역본 뉴스레터부터만 본인의 언어로 확인 가능
 */

const NewsletterPage = () => {
  return <div>NewsletterPage</div>;
};

export default NewsletterPage;
