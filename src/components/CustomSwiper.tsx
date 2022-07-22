import { Box, styled } from '@mui/material'
import { Swiper as DefaultSwiper } from 'swiper/react'
import type { SwiperProps } from 'swiper/react'
import type { FC, PropsWithChildren } from 'react'

const StyledSwiper = styled(DefaultSwiper)`
  position: static;
  padding-top: 16px;
  padding-bottom: 40px;

  .swiper-pagination-bullet {
    width: 34px;
    height: 4px;
    border-radius: 4px;
    background: #b2b2b233;
    opacity: 1;
    margin: 0 1px !important;
  }

  .swiper-pagination-bullet.swiper-pagination-bullet-active {
    background: #3401ff;
  }

  .swiper-button-prev {
    left: -180px;
  }

  .swiper-button-next {
    right: -180px;
  }

  .swiper-button-prev,
  .swiper-button-next {
    background-color: #D8D8FD;
    height: 74px;
    width: 74px;
    border: 1px solid;
    border-color: white;
    border-radius: 50%;
  }

  .swiper-button-disabled {
    // capture mouse events to prevent accidental click on swiper's element
    // set to 'none' if there're issues
    pointer-events: auto;
  }

  .swiper-button-prev:after,
  .swiper-button-next:after {
    font-size: 36px;
    font-weight: 900;
    color: #8383FF;
  }
`

export const CustomSwiper: FC<PropsWithChildren<SwiperProps>> = ({ children, ...props }) => (
  <Box width={'100%'} position={'relative'}>
    <StyledSwiper {...props}>{children}</StyledSwiper>
  </Box>
)
