import {
  ArrowDesign,
  GetBox,
  NavBox,
  RightTopArrow,
  SmallFullStop,
} from "@/styles/MUI/common.styled";
import { Box, Typography, Link } from "@mui/material";
import ArrowRightWhite from "../common/SVGIcons/arrowRightWhite";
import ArrowLeftWhite from "../common/SVGIcons/arrowLeftWhite";
import Image from "next/image";
import arrowRight from "@/public/assets/img/newRightArrow.svg";

export default function GetInTouch({ project }: any) {
  const preLink = project.previous.link;
  const nextLink = project.next.link;
  return (
    <GetBox>
      <Box textAlign="center">
        <Typography variant="body_4_600" color="custom.grey_700">
          Connect with us
          <SmallFullStop />
        </Typography>
        <Typography
          variant="mediumFont"
          color="custom.white2"
          display="block"
          fontWeight={400}
        >
          Let’s talk about building the right digital transformation <br /> for
          your business.
        </Typography>
        {/* <OutlineWhiteBtn className="smallResWhiteBtn">
          Contact Us <ArrowRightWhite />
        </OutlineWhiteBtn>{" "} */}

        <Link href="/contact">
          <RightTopArrow disableRipple>
            Connect with us
            <ArrowDesign>
              <Image src={arrowRight} alt="Right Arrow" />
            </ArrowDesign>
          </RightTopArrow>
        </Link>
      </Box>
      <NavBox>
        <Link href={preLink}>
          <ArrowLeftWhite />
          <Typography variant="font_14">
            Previous <br style={{ display: "block !important" }} />
            case study
          </Typography>
        </Link>
        <Link href={nextLink}>
          <Typography variant="font_14" textAlign="right">
            Next <br style={{ display: "block !important" }} />
            case study
          </Typography>
          <ArrowRightWhite />
        </Link>
      </NavBox>
    </GetBox>
  );
}
