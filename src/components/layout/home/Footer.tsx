export default function Footer() {
  return (
    <div className="mx-[100px]">
      <div className="w-full h-px bg-[#f4f4f4] mb-[22px]" />
      <div className="flex justify-between items-center pb-[60px]">
        <div className="text-[14px] leading-[30px] [&_span]:font-semibold [&_span]:text-[#111] flex flex-col gap-y-5">
          <span>what happened</span>
          <ul className="[&_li]:text-[#333]">
            <li>[공지] 개인 정보 처리 방침 변경 사전 안내</li>
            <li>[공지] 29CM 강남 스토어 영업 종료</li>
            <li>[공지] 개인 정보 처리 방침 변경 사전 안내</li>
            <li>[공지] iOS 10 이하 버전 지원 중단 안내</li>
            <li>[공지] 개인 정보 처리 방침 변경 사전 안내</li>
          </ul>
        </div>
        <div className="flex gap-[100px]">
          <div className="flex gap-y-5 flex-col">
            <span className="font-semibold">about us</span>
            <ul className="[&_li]:text-[#333]">
              <li>회사 소개</li>
              <li>인재 채용</li>
              <li>상시 할인 혜택</li>
            </ul>
          </div>
          <div className="flex gap-y-5 flex-col">
            <span className="font-semibold">my order</span>
            <ul className="[&_li]:text-[#333]">
              <li>내 주문</li>
              <li>주문 배송</li>
              <li>취소 / 교환 / 반품 내역</li>
              <li>상품 리뷰 내역</li>
              <li>증빙 서류 발급</li>
            </ul>
          </div>
          <div className="flex gap-y-5 flex-col">
            <span className="font-semibold">my account</span>
            <ul className="[&_li]:text-[#333]">
              <li>회원 정보 수정</li>
              <li>회원 등급</li>
              <li>마일리지 현황</li>
              <li>쿠폰</li>
            </ul>
          </div>
          <div className="flex gap-y-5 flex-col">
            <span className="font-semibold">help</span>
            <ul className="[&_li]:text-[#333]">
              <li>1:1 문의</li>
              <li>상품 제안</li>
              <li>자주하는 질문</li>
              <li>고객의 소리</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full h-px bg-[#f4f4f4] mb-[22px]" />
      <div className="flex justify-between pb-[113px]">
        <div className="flex-1 text-[14px] text-[#a9a9a9]">
          <div>
            © 2020-2021 what happened corp l (주) 왓헤픈 ｜ 대표자 : 홍길동 ｜
            사업자 등록번호 : 356-00-00000 ㅣ test0101@what happened.co.kr
          </div>
          <div>
            서울특별시 강남구 도산대로 8길 17 ｜ FAX : 070-0000-0000 l 서비스
            이용약관 l 개인정보처리방침
          </div>
        </div>
        <div className="flex-1 flex justify-end items-center gap-x-6">
          <img src="/icon/snsicon-01.png" alt="" />
          <img src="/icon/snsicon-02.png" alt="" />
          <img src="/icon/snsicon-03.png" alt="" />
        </div>
      </div>
    </div>
  );
}
