import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { useMuiTheme } from "src/hooks/themes";

import type { FC, PropsWithChildren } from "react";

const BulletText: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { md: "28px 1fr", lg: "32px 1fr" },
      }}
    >
      <Typography
        color="primary.main"
        sx={{ fontSize: { md: "40px", lg: "48px" }, lineHeight: 0.6, userSelect: "none" }}
      >
        ●
      </Typography>
      <Typography sx={{ typography: { md: "h6", lg: "h5" } }} textTransform="uppercase">
        {children}
      </Typography>
    </Box>
  );
};

export const RoadMapTimelineDesktop = () => {
  const theme = useMuiTheme();
  return (
    <Box position="relative">
      <Timeline position="right" sx={{ mt: 0 }}>
        <TimelineItem>
          <TimelineOppositeContent>
            <Stack spacing={2} alignItems="flex-end">
              <img src="static/images/roadmap-1.png" />
            </Stack>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot
              sx={{
                my: 0,
                width: 15,
                height: 15,
                backgroundColor: " #8888FF",
              }}
            />
            <TimelineConnector sx={{ backgroundColor: "#8888FF", height: 300, width: "1px", mb: 3 }} />
          </TimelineSeparator>
          <TimelineContent>
            <Stack spacing={2}>
              <Typography variant="h4">
                Salary Management
              </Typography>
              <Typography marginTop="18px" marginBottom="18px">
                Recurring payment sytem: set your <br/>
                preferences. Whether monthly, bi-weekly <br/>
                or weekly
              </Typography>
              <img src="static/images/footer-2.png" width="275px" height="4px" />
            </Stack>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            <Stack spacing={2} alignItems="flex-end">
              <img src="static/images/roadmap-2.png" />
            </Stack>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot
                sx={{
                  my: 0,
                  width: 15,
                  height: 15,
                  backgroundColor: " #8888FF",
                }}
              />
            <TimelineConnector sx={{ backgroundColor: "#8888FF", height: 300, width: "1px" }} />
          </TimelineSeparator>
          <TimelineContent>
            <Stack spacing={2}>
              <Typography variant="h4">
                Company P/L
              </Typography>
              <Typography marginTop="18px" marginBottom="18px">
                Tagged payments:  analyze overall performace<br/>
                using our comprehensive dashboard
              </Typography>
              <img src="static/images/footer-2.png" width="275px" height="4px" />
            </Stack>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            <Stack spacing={2} alignItems="flex-end">
              <img src="static/images/roadmap-3.png" />
            </Stack>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot
              sx={{
                my: 0,
                width: 15,
                height: 15,
                backgroundColor: " #8888FF",
              }}
              />
            <TimelineConnector sx={{ backgroundColor: "#8888FF", height: 300, width: "1px" }} />
          </TimelineSeparator>
          <TimelineContent>
            <Stack spacing={2}>
              <Typography variant="h4">
                Security
              </Typography>
              <Typography marginTop="18px" marginBottom="18px">
                Verify payments, Lvl. of authorization, and <br/>
                budget limits. Helping you to control<br/>
                company assets conveniently and securely.
              </Typography>
              <img src="static/images/footer-2.png" width="275px" height="4px" />
            </Stack>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            <Stack spacing={2} alignItems="flex-end">
              <img src="static/images/roadmap-4.png" />
            </Stack>
          </TimelineOppositeContent>
          <TimelineSeparator>
          <TimelineDot
              sx={{
                my: 0,
                width: 15,
                height: 15,
                backgroundColor: " #8888FF",
              }}
              />
          </TimelineSeparator>
          <TimelineContent>
            <Stack spacing={2}>
              <Typography variant="h4">
                Everyday use
              </Typography>
              <Typography marginTop="18px" marginBottom="18px">
                A mobile app you can rely on daily, <br/>
                made for web3 BUILD-ers!
              </Typography>
              <img src="static/images/footer-2.png" width="275px" height="4px" />
            </Stack>
          </TimelineContent>
        </TimelineItem>
        
      </Timeline>
      <Box
        position="absolute"
        top="-100px"
        right="-160px"
      >
        <img src="static/images/circle-1.png" />
      </Box>
      <Box
        position="absolute"
        top="200px"
        left="-160px"
      >
        <img src="static/images/circle-2.png" />
      </Box>
    </Box>
  );
};
