"use client";

import { Typography } from "@mui/material";
import {
  BannerBox,
  BannerText,
  OutlineWhiteBtn,
  StyledCareersBanner,
} from "@/styles/MUI/common.styled";
import { useRouter } from "next/navigation";
import ArrowRightWhite from "../../common/SVGIcons/arrowRightWhite";

export const JobOpportunity = () => {
  const router = useRouter();

  return (
    <StyledCareersBanner
      className="bg-fixedImg"
      bgcolor={"custom.black"}
      flexDirection={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <BannerBox>
        <Typography variant="body_6" color={"custom.white5"}>
          Get in touch with us
        </Typography>
        <BannerText variant="body_3_400" color={"custom.white5"}>
          If you are passionate about innovating the future, we’d <br></br>love
          to hear from you!
        </BannerText>
        <OutlineWhiteBtn onClick={() => router.push("/contact")}>
          contact us <ArrowRightWhite />
        </OutlineWhiteBtn>
      </BannerBox>
    </StyledCareersBanner>
  );
};
