import Image from "next/image";
import { Box, Typography, useMediaQuery } from "@mui/material";
import {
  SmallFullStop,
  OutlineBtn,
  OuterSection,
  SubTitlemarginBottom1,
} from "@/styles/MUI/common.styled";
import CallMadeIcon from "@mui/icons-material/CallMade";
import BusinessOffice from "../../../public/assets/img/img1.jpg";
import AboutUs from "../../../public/assets/img/about-us/ourstory.svg";
import TotalYears from "../../../public/assets/img/water-mark.png";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

type WhoWeAreType = {
  title: string;
  buttondisplay: boolean;
  aboutus: boolean;
  transformup?: boolean;
};

const WhoWeAre = ({
  title,
  buttondisplay,
  aboutus,
  transformup,
}: WhoWeAreType) => {
  const router = useRouter();
  const isTabletView = useMediaQuery("(max-width:991px)");

  const storyContent = (
    <>
      <SubTitlemarginBottom1
        color="custom.black"
        variant="body_6"
        display="block"
      >
        Our Story
      </SubTitlemarginBottom1>
      <Typography
        color="custom.black"
        marginTop={2}
        display="block"
        variant="body_3"
      >
        Pi Techniques is a company established in 1992 that began as a small
        support services firm catering to individuals and home offices.
        <br />
        <br />
        Over time, we have expanded to encompass multiple divisions specializing
        in software and web development, as well as IT infrastructure and
        support services.
        <br />
        <br />
        We are characterized by our passion for technology, simplicity in
        approach, and commitment to providing customized solutions to our
        clients.
      </Typography>
    </>
  );

  const introContent = (
    <Typography
      color="custom.black"
      margin="16px 0 40px"
      display="block"
      variant="body_3"
    >
      Since our establishment in 1992, we have been dedicated to empowering
      businesses with the transformative power of technology. Our commitment to
      excellence, passion for innovation and unwavering client focus have made
      us a leader in the industry.
      <br />
      <br />
      At Pi Techniques it&apos;s{" "}
      <Typography
        color="custom.orange_600"
        variant="body_3"
        component="span"
      >
        always keep it simple
      </Typography>
      {" — "}
      that&apos;s how we manage to keep our large client base delighted. We are
      a strong team with a deep-rooted passion for technology.
    </Typography>
  );

  const imageSection = aboutus ? AboutUs : BusinessOffice;

  return (
    <>
      <OuterSection
        flexDirection={isTabletView ? "column" : "row"}
        justifyContent="space-between"
        alignItems={
          isTabletView ? "flex-start" : aboutus ? "end" : "flex-start"
        }
        paddingBottom={aboutus ? undefined : "0 !important"}
      >
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Box marginBottom={isTabletView ? "60px" : 0}>
            <Typography
              color="custom.black3"
              variant="body_4_600"
              display="block"
              letterSpacing="2.4px"
              textTransform="uppercase"
              marginBottom={2}
            >
              {title}
              <SmallFullStop />
            </Typography>

            {aboutus ? storyContent : introContent}

            {buttondisplay && (
              <OutlineBtn
                onClick={() => router.push("/about")}
                transformup={transformup}
              >
                ABOUT US <CallMadeIcon sx={{ marginLeft: "8px", height: 16 }} />
              </OutlineBtn>
            )}
          </Box>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          
          <Image
            src={imageSection}
            alt={aboutus ? "About Us" : "Team Business Office"}
            style={{
              borderRadius: aboutus ? "8px" : undefined,
              width: isTabletView ? "100%" : "auto",
              height: "auto",
            }}
          />
        </motion.div>
      </OuterSection>

      {/* Watermark Image */}
      {!aboutus && (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="100%"
        >
          <Image
            src={TotalYears}
            alt="Company Watermark"
            className="img-fluid"
            style={{
              margin: "0 60px",
              width: isTabletView ? "100%" : "auto",
              height: isTabletView ? "auto" : "auto",
            }}
          />
        </Box>
      )}
    </>
  );
};

export default WhoWeAre;
