// data.ts
export const menuData = [
  {
    key: 'intro',
    title: '대전 본오설비 소개',
    items: [
      { label: '인사말', href: '/intro' },
      { label: '누수', href: '/intro/leaks' },
      { label: '난방', href: '/intro/heating' },
      { label: '배관', href: '/intro/plumbing' },
      { label: '수도', href: '/intro/water-supply' },
      { label: '기타 설비', href: '/intro/others' },
    ],
  },
  {
    key: 'service',
    title: '이용정보',
    items: [
      { label: '공지사항', href: '/service/notice' },
      { label: '비용안내', href: '/service/cost' },
      { label: 'A/S', href: '/service/after-service' },
      { label: '자주 묻는 질문', href: '/service/faq' },
    ],
  },
  {
    key: 'review',
    title: '공사후기/전후사진',
    items: [
      { label: '아파트', href: '/review/apartment' },
      { label: '빌라', href: '/review/villa' },
      { label: '주택', href: '/review/house' },
      { label: '공장 배관공사', href: '/review/factory' },
      { label: '기타', href: '/review/others' },
    ],
  },
];
