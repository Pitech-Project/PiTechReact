import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { Link } from "@mui/material";

const mainListItems = [
  {
    text: "Career's",
    icon: <WorkOutlineOutlinedIcon />,
    url: "add-career",
  },
  {
    text: "Career enquiry",
    icon: <WorkOutlineOutlinedIcon />,
    url: "career-form-enquiry",
  },
  {
    text: "Contact enquiry",
    icon: <EmailOutlinedIcon />,
    url: "contact-form-enquiry",
  },
];

export default function MenuContent() {
  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: "space-between" }}>
      <List dense>
        {mainListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: "block" }}>
            <ListItemButton selected={index === 0}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>
                <Link href={item.url} underline="none">
                  {item.text}
                </Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
