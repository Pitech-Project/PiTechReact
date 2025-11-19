"use client";

import { Typography } from "@mui/material";
import {
  ArrowDesign,
  BannerBox,
  BannerText,
  RightTopArrow,
  StyledCareersBanner,
} from "@/styles/MUI/common.styled";
import Link from "next/link";
import Image from "next/image";
import arrowRight from "@/public/assets/img/newRightArrow.svg";
import { motion } from "framer-motion";

export const JobOpportunity = () => {
  return (
    <StyledCareersBanner
      className="bg-fixedImg"
      bgcolor={"custom.black"}
      flexDirection={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <BannerBox>
          <Typography variant="body_6" color={"custom.white5"}>
            Connect with us
          </Typography>
          <BannerText variant="body_3_400" color={"custom.white5"}>
            If you are passionate about innovating the future, we’d <br></br>
            love to hear from you!
          </BannerText>
          {/* <OutlineWhiteBtn onClick={() => router.push("/contact")}>
            contact us <ArrowRightWhite />
          </OutlineWhiteBtn> */}
          <Link href="/contact">
            <RightTopArrow disableRipple>
              <Typography variant="font_21" color="custom.white2">
                Contact Us
              </Typography>
              <ArrowDesign>
                <Image src={arrowRight} alt="Right Arrow" />
              </ArrowDesign>
            </RightTopArrow>
          </Link>
        </BannerBox>
      </motion.div>
    </StyledCareersBanner>
  );
};
