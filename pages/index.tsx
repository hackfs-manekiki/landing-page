import { Box, Typography } from "@mui/material";
import type { NextPage } from "next";
import { PrimaryGradientButton } from "src/components/Button";
import { RoadMapTimelineDesktop } from "src/components/Roadmap";
import { SwiperSection } from "src/components/SwiperSection";

const Home: NextPage = () => {
  return (
    <Box minHeight="50vh">
      <Box margin="0 160px">
        <Box display="flex" justifyContent="space-between">
          <Box paddingTop="85px">
            <Typography variant="h1" marginBottom="32px">
              Web 3 Asset Management <br />
              REIMAGINED.
            </Typography>
            <PrimaryGradientButton>Join Now</PrimaryGradientButton>
          </Box>
          <Box>
            <img src="static/images/banner.png" />
          </Box>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <img src="static/images/manekiki-body1.png" />
          <Box width="518px" paddingTop="156px">
            <Typography variant="h2">Efficient. Secure. Fast.</Typography>
            <Box marginTop="16px">
              <Typography variant="subtitle1">
                manage multiple wallets with manekiki. We streamline accounting, daily ops, and
                payments - allowing teams to Focus on BUILD-ing!
              </Typography>
            </Box>
            <Box marginTop="47px">
              <img src="static/images/footer.png" />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        textAlign="center"
        padding="64px"
        sx={{
          position: "relative",
          background: "linear-gradient(126.03deg, #E9E9FF -6.19%, #FFECEA 178.03%)",
        }}
      >
        <Typography variant="h2">Why Us?</Typography>
        <Box display="flex" justifyContent="center" marginTop="100px">
          <Box>
            <img src="static/images/whyus-1.png" />
            <Typography variant="h4">Authorization</Typography>
            <Box marginTop="8px">
              Set up authorization and
              <br /> budgeting for
              <br /> approvers to save time.
            </Box>
          </Box>
          <Box>
            <img src="static/images/whyus-2.png" />
            <Typography variant="h4">Automated transaction</Typography>
            <Box marginTop="8px">
              Automate manual processes by
              <br /> making the most of Manekiki
            </Box>
          </Box>
          <Box>
            <img src="static/images/whyus-3.png" />
            <Typography variant="h4">Verify payment</Typography>
            <Box marginTop="8px">
              Easily track how funds are used.
              <br />
              Attach bills to keep <br />
              track of all transactions.
            </Box>
          </Box>
        </Box>
        <Box position="absolute">
          <img src="static/images/coin-1.png" />
        </Box>
      </Box>
      <Box textAlign="center" padding="64px">
        <Typography variant="h2">4 Steps to Get Started</Typography>
        <Box position="relative" marginTop="48px">
          <img src="static/images/progress.png" />
          <Box position="absolute" top="-20%" right="10%">
            <img src="static/images/coin-2.png" />
          </Box>
        </Box>
        <Box display="flex" justifyContent="center">
          <Box width="930px">
            <SwiperSection>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box>
                  <img src="static/images/get-started-1.png" />
                </Box>
                <Box textAlign="left">
                  <Typography variant="h3">
                    Set up Company <br />
                    Create Vaults
                  </Typography>
                  <Typography marginTop="16px" variant="subtitle1">
                    Create your company and set up vaults <br />
                    for each department/team
                  </Typography>
                  <Box marginTop="48px">
                    <img src="static/images/footer.png" />
                  </Box>
                </Box>
              </Box>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box>
                  <img src="static/images/get-started-2.png" />
                </Box>
                <Box textAlign="left">
                  <Typography variant="h3">
                    Add members <br />
                    to your company
                  </Typography>
                  <Typography marginTop="16px" variant="subtitle1">
                    Add a team member to your company <br />
                    using public key, and set up their role
                  </Typography>
                  <Box marginTop="48px">
                    <img src="static/images/footer.png" />
                  </Box>
                </Box>
              </Box>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box>
                  <img src="static/images/get-started-3.png" />
                </Box>
                <Box textAlign="left">
                  <Typography variant="h3">
                    Set Roles <br />& Authorization
                  </Typography>
                  <Typography marginTop="16px" variant="subtitle1">
                    Set authorization for your team members <br />
                    in each vault: admin, approver, requester
                  </Typography>
                  <Box marginTop="48px">
                    <img src="static/images/footer.png" />
                  </Box>
                </Box>
              </Box>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box>
                  <img src="static/images/get-started-4.png" />
                </Box>
                <Box textAlign="left">
                  <Typography variant="h3">
                    All Done! <br />
                    You're good to go
                  </Typography>
                  <Typography variant="subtitle1">
                    That’s all! You can now manage with confidence using <br />
                    your new, automated flow system designed for Web3
                  </Typography>
                  <Box marginTop="48px">
                    <img src="static/images/footer.png" />
                  </Box>
                </Box>
              </Box>
            </SwiperSection>
          </Box>
        </Box>
      </Box>

      <Box textAlign="center" padding="64px">
        <Typography variant="h2" marginBottom="18px">
          Roadmap
        </Typography>
        <RoadMapTimelineDesktop />
      </Box>
      <Box textAlign="center" padding="64px">
        <Typography variant="h2" marginBottom="18px">
          Why Manekiki?
        </Typography>
        <Box marginTop="24px">
          Maneki, or the Lucky Cat is a symbol that originated from Japan. In Japanese, maneki-neko
          <br />
          means beckoning cat, the idea is that the cat is welcoming you to good fortune. This lucky
          cat <br />
          symbolizes wealth and prosperity and is considered good luck when placed in your home,
          office, or business.
        </Box>
        <Box marginTop="70px">
          <PrimaryGradientButton>Join Now</PrimaryGradientButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
