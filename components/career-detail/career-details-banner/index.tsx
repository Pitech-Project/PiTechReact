"use client";

import { Box, Stack, Typography } from "@mui/material";
import {
  OutlineWhiteBtn,
  StyledCareerDetailsBanner,
} from "@/styles/MUI/common.styled";
import ArrowRightWhite from "../../common/SVGIcons/arrowRightWhite";
import { useRouter, useSearchParams } from "next/navigation";

export const CareerDetailsBanner = () => {
  const searchParams = useSearchParams();
  const title = searchParams?.get("title");
  const router = useRouter();

  return (
    <StyledCareerDetailsBanner
      bgcolor={"custom.black"}
      flexDirection={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Stack flexDirection={"row"} className="content">
        <Box width={"100%"} textAlign={"center"}>
          <Typography
            variant="count"
            fontWeight={500}
            color={"custom.white5"}
            className="careerTitle"
          >
            {title}
          </Typography>
          <Typography
            display={"block"}
            margin={"16px 0 40px"}
            variant="body_3_400"
            color={"custom.white5"}
          >
            JOB CODE: PI020
          </Typography>
          <Stack flexDirection={"row"} justifyContent={"center"}>
            <OutlineWhiteBtn
              onClick={() =>
                router.push(`/career-details?title=${title}#careerForm`)
              }
            >
              Apply <ArrowRightWhite />
            </OutlineWhiteBtn>
          </Stack>
        </Box>
      </Stack>
    </StyledCareerDetailsBanner>
  );
};
