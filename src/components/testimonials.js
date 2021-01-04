import * as React from "react";
// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Avatar from "./avatar";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import styled from "styled-components";

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default () => {
  return (
    <Slider>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <SlideContainer>
            <Avatar name="testimonial_1" />
            <SlideInfo>
              <AvatarName>
                <span>Ximena López</span>
                <span>Facebook</span>
              </AvatarName>
              <Description>
                Todo el proceso fue super agil y sin complicaciones, además
                contaban con muchas opciones de vivienda entre las que encontré
                mi acual casa de vacasional en Colombia en la que me reuno cada
                año con mi familia para las fiestas!, gracias Colraices
              </Description>
            </SlideInfo>
          </SlideContainer>
        </SwiperSlide>
        <SwiperSlide>
          <SlideContainer>
            <Avatar name="testimonial_1" />
            <SlideInfo>
              <AvatarName>
                <span>Ximena López</span>
                <span>Facebook</span>
              </AvatarName>
              <Description>
                Todo el proceso fue super agil y sin complicaciones, además
                contaban con muchas opciones de vivienda entre las que encontré
                mi acual casa de vacasional en Colombia en la que me reuno cada
                año con mi familia para las fiestas!, gracias Colraices
              </Description>
            </SlideInfo>
          </SlideContainer>
        </SwiperSlide>
        <SwiperSlide>
          <SlideContainer>
            <Avatar name="testimonial_1" />
            <SlideInfo>
              <AvatarName>
                <span>Ximena López</span>
                <span>Facebook</span>
              </AvatarName>
              <Description>
                Todo el proceso fue super agil y sin complicaciones, además
                contaban con muchas opciones de vivienda entre las que encontré
                mi acual casa de vacasional en Colombia en la que me reuno cada
                año con mi familia para las fiestas!, gracias Colraices
              </Description>
            </SlideInfo>
          </SlideContainer>
        </SwiperSlide>
      </Swiper>
    </Slider>
  );
};

const Slider = styled.div`
  width: 1394px;
  margin: 2rem auto 5rem;
`;

const SlideContainer = styled.div`
  padding: 0 5rem;
  display: flex;
`;

const SlideInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
`;

const AvatarName = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-end;
  color: #3e4691;
  font-weight: 600;
  margin-top: 1rem;
  margin-bottom: 2rem;

  & span:first-of-type {
    font-size: 40px;
  }

  & span:last-of-type {
    font-size: 15px;
  }
`;

const Description = styled.p`
  text-align: center;
  font-size: 25px;
  line-height: 1.3;
  color: #8a8a8a;
`;
