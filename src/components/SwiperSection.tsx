import type { ReactNode } from "react";
import { Children } from "react";
import type { Breakpoints, SxProps } from "@mui/material";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SwiperSlide } from "swiper/react";
import { CustomSwiper } from "./CustomSwiper";
import Link from "next/link";

type CarouselSectionProps = {
  children: ReactNode | ReactNode[];
  title?: string;
  slidesPerViewOnEachBreakpoints?: Breakpoints["values"];
  linkText?: string;
  linkHref?: string;
  sx?: SxProps;
};

export const SwiperSection = (props: CarouselSectionProps) => {
  const { title, children, slidesPerViewOnEachBreakpoints, linkText, linkHref, sx = {} } = props;
  const theme = useTheme();
  const arrayChildren = Children.toArray(children);
  return (
    <Box sx={{ pt: { xs: 0, lg: 4 }, ...sx }}>
      <Stack>
        <Box sx={{ py: 2 }}>
          <CustomSwiper
            grabCursor
            slidesPerView={1}
            spaceBetween={16}
            modules={[Navigation]}
            navigation
            style={{ paddingBottom: 0 }}
          >
            {Children.map(arrayChildren, (child, index) => {
              return <SwiperSlide key={index}>{child}</SwiperSlide>;
            })}
          </CustomSwiper>
        </Box>
      </Stack>
    </Box>
  );
};
