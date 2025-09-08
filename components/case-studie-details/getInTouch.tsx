import { GetBox, NavBox, OutlineWhiteBtn } from "@/styles/MUI/common.styled";
import { Box, Typography, Link } from "@mui/material";
import ArrowRightWhite from "../common/SVGIcons/arrowRightWhite";
import ArrowLeftWhite from "../common/SVGIcons/arrowLeftWhite";
import { useRouter } from "next/navigation";

export default function GetInTouch({ project }: any) {
  const router = useRouter();
  const preLink = project.previous.link;
  const nextLink = project.next.link;
  return (
    <GetBox>
      <Box textAlign="center">
        <Typography variant="body_4_600" color="custom.grey_700">
          get in touch
        </Typography>
        <Typography variant="mediumFont" color="custom.white2" display="block">
          Let’s talk about building the right digital transformation <br /> for
          your business.
        </Typography>
        <OutlineWhiteBtn className="smallResWhiteBtn">
          Contact Us <ArrowRightWhite />
        </OutlineWhiteBtn>{" "}
      </Box>
      <NavBox>
        <Link onClick={() => router.push(preLink)}>
          <ArrowLeftWhite />
          <Typography variant="font_14">
            Previous <br style={{ display: "block !important" }} />
            case study
          </Typography>
        </Link>
        <Link onClick={() => router.push(nextLink)}>
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
