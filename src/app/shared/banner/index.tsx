'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay, EffectCreative } from 'swiper/modules';
import { memo } from 'react';
import React from 'react';
import Link from 'next/link';

// Creative Effect

interface SwiperProps {
  data: React.ReactNode[];
}

const Banner = () => {
  const style= "transform translate-x-0 translate-y-0 flex items-center justify-center text-center mx-auto w-screen overflow-hidden h-8 bg-gradient-to-r from-orange-500 to-blue-500";
  
  const first = <a className="text-white" href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER}`}>대전 본오설비 010-4092-8204</a>;
  const second = <div className="text-white">전후사진 확인하러 가기</div>;

  return (
    <div className={style}>
      <SwiperComponent data={[first, second]} />
    </div>
  );
};

const SwiperComponent = ({ data }: SwiperProps) => {
  return (
    <div className="overflow-hidden">
      <Swiper
        spaceBetween={50}
        effect="creative"
        slidesPerView={1} // 한 번에 하나의 슬라이드 표시
        autoplay={{ delay: 2000 }} // 자동 재생 간격 설정
        modules={[Autoplay, EffectCreative]}
        creativeEffect={{
          prev: {
            // 이전 슬라이드에 적용될 변환
            translate: [0, '-60px', 0],
          },
          next: {
            // 다음 슬라이드에 적용될 변환
            translate: [0, '-60px', 0],
          },
        }}
      >
        {data.map((v: React.ReactNode, i) => {
          return <SwiperSlide key={i}>{v}</SwiperSlide>;
        })}
      </Swiper>
    </div>
  );
};

export default memo(Banner);