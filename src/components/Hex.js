import React from "react";
import { Tree, TreeNode } from "react-organizational-chart";
import _ from "lodash";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import BusinessIcon from "@material-ui/icons/Business";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
// import MoreVertIcon from "@material-ui/icons/MoreVert";
// import Avatar from "@material-ui/core/Avatar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Badge from "@material-ui/core/Badge";
import Tooltip from "@material-ui/core/Tooltip";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useDrag, useDrop } from "react-dnd";
import organization from "./org.json";
import hos from "./hos.json";
import phar from "./phar.json";
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "white",
    display: "inline-block",
    borderRadius: 16,
  },
  expand: {
    transform: "rotate(0deg)",
    marginTop: -10,
    marginLeft: -10,
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.short,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: "#eae5eb",
  },
}));

function Organization({ org, onCollapse, collapsed }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: "account",
    drop: () => ({ name: org.tradingName }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });
  const isActive = canDrop && isOver;
  let backgroundColor = "white";
  if (isActive) {
    backgroundColor = "#ddffd2";
  } else if (canDrop) {
    backgroundColor = "#ffeedc";
  }
  return (
    <Card
      variant="outlined"
      className={classes.root}
      ref={drop}
      style={{ backgroundColor }}
    >
      <CardHeader
        avatar={
          <Tooltip
            title={`${_.size(
              org.organizationChildRelationship
            )} Sub Profile, ${_.size(org.account)} Sub Account`}
            arrow
          >
            <Badge
              style={{ cursor: "pointer" }}
              color="secondary"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              showZero
              invisible={!collapsed}
              overlap="circle"
              badgeContent={_.size(org.organizationChildRelationship)}
              onClick={onCollapse}
            ></Badge>
          </Tooltip>
        }
        title={org.tradingName}
      />

      <Menu open={Boolean(anchorEl)} anchorEl={anchorEl} onClose={handleClose}>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <BusinessIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Add Sub Profile" />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <AccountBalanceIcon color="secondary" />
          </ListItemIcon>
          <ListItemText primary="Add Sub Account" />
        </MenuItem>
      </Menu>
      <IconButton
        size="small"
        onClick={onCollapse}
        className={clsx(classes.expand, {
          [classes.expandOpen]: !collapsed,
        })}
      >
        <ExpandMoreIcon />
      </IconButton>
    </Card>
  );
}
function Account({ a }) {
  return <></>;
}
function Product({ p }) {
  const classes = useStyles();
  return (
    <Card variant="outlined" className={classes.root}>
      <CardContent>
        <Typography variant="subtitle2">{p.name}</Typography>
      </CardContent>
    </Card>
  );
}
function Node({ o, parent }) {
  const [collapsed, setCollapsed] = React.useState(o.collapsed);
  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };
  React.useEffect(() => {
    o.collapsed = collapsed;
  });
  const T = parent
    ? TreeNode
    : (props) => (
        <Tree
          {...props}
          lineWidth={"1px"}
          lineColor={"#bbc"}
          lineBorderRadius={"10px"}
        >
          {props.children}
        </Tree>
      );
  return collapsed ? (
    <T
      label={
        <Organization
          org={o}
          onCollapse={handleCollapse}
          collapsed={collapsed}
        />
      }
    />
  ) : (
    <T
      label={
        <Organization
          org={o}
          onCollapse={handleCollapse}
          collapsed={collapsed}
        />
      }
    >
      {_.map(o.account, (a) => (
        <TreeNode label={<Account a={a} />}>
          <TreeNode label={<Product p={a.product} />} />
        </TreeNode>
      ))}
      {_.map(o.organizationChildRelationship, (c) => (
        <Node o={c} parent={o} />
      ))}
    </T>
  );
}
const theme = createTheme({
  palette: {
    background: "#ECECF4",
  },
  fontFamily: "Roboto, sans-serif",
});

export default function Hex() {
  return (
    // <>
    // <Box bgcolor="background" padding={4} height="80vh">
    //     <DndProvider backend={HTML5Backend}>
    //       <Node o={organization} />
    //     </DndProvider>
    //   </Box>
    // </>
    <>
      <Box marginX={5}>
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-black ss:leading-[100.8px] leading-[75px]" >Management and prophylaxis of VTE in cancer patients </h1>
      </Box>

      <ThemeProvider theme={theme}>
        <Box bgcolor="background" padding={2} marginX={5} height="fitContent">
          <DndProvider backend={HTML5Backend}>
            <Node o={organization} />
          </DndProvider>
        </Box>
        <Box bgcolor="background" padding={2} marginX={5} height="fitContent">
          <DndProvider backend={HTML5Backend}>
            <Node
              o={{
                tradingName:
                  "Hospitalized patients without VTE ",
                account: [
                  {
                    name: "Accou",
                    product: {
                      name: "thromboprophylaxis, LMWH over UFH Discontinuing   thromboprophylaxis at the time of hospital discharge ",
                    },
                  },
                ],
              }}
            />
          </DndProvider>
        </Box>
        <Box marginX={5}>
          LMWH or fondaparinux for thromboprophylaxis rather than UFH
          postoperative thromboprophylaxis over preoperative thromboprophylaxis
        </Box>

        <Box bgcolor="background" padding={2} marginX={5} height="fitContent">
          <DndProvider backend={HTML5Backend}>
            <Node o={hos} />
          </DndProvider>
        </Box>
        <Box marginX={5}>
          For multiple myeloma patients receiving lenalidomide, thalidomide, or
          pomalidomide-based regimens, low-dose acetylsalicylic acid (ASA) or
          fixed low-dose VKA or LMWH is recommended{" "}
        </Box>
        <Box marginX={5}>
          For patients with cancer and a central venous catheter (CVC), no
          thromboprophylaxis is indicated
        </Box>
        <Box bgcolor="background"padding={2} marginX={5} height="fitContent">
          <DndProvider backend={HTML5Backend}>
            <Node o={phar} />
          </DndProvider>
        </Box>

      {/* nnnnnn */}
      <Box bgcolor="background" padding={2} marginX={5} height="fitContent">
          <DndProvider backend={HTML5Backend}>
            <Node
              o={{
                tradingName:
                  "Patients with platelets <25,000/μL.",
                account: [
                  {
                    name: "Accou",
                    product: {
                      name: "Recommend against pharmacologic thromboprophylaxis",
                    },
                  },
                ],
              }}
            />
          </DndProvider>

          <DndProvider backend={HTML5Backend}>
            <Node
              o={{
                tradingName:
                  "Patients with platelets 25,000–49,000/μL. ",
                account: [
                  {
                    name: "Accou",
                    product: {
                      name: "Suggest individualized approach ",
                    },
                  },
                ],
              }}
            />
          </DndProvider>

          <DndProvider backend={HTML5Backend}>
            <Node
              o={{
                tradingName:
                  "Patients admitted for the sole purpose of minor procedures or chemotherapy infusion as well as patients undergoing stem cell/bone marrow transplantation.",
                account: [
                  {
                    name: "Accou",
                    product: {
                      name: "Routine pharmacologic thromboprophylaxis should not be offered ",
                    },
                  },
                ],
              }}
            />
          </DndProvider>

        </Box>
        <Box bgcolor="background" padding={2} marginX={5} height="fitContent">
          <DndProvider backend={HTML5Backend}>
            <Node
              o={{
                tradingName:
                  "Patients with platelets <25,000/μL.",
                account: [
                  {
                    name: "Accou",
                    product: {
                      name: "Recommend against pharmacologic thromboprophylaxis",
                    },
                  },
                ],
              }}
            />
          </DndProvider>

          <DndProvider backend={HTML5Backend}>
            <Node
              o={{
                tradingName:
                  "Patients with platelets 25,000–49,000/μL. ",
                account: [
                  {
                    name: "Accou",
                    product: {
                      name: "Suggest individualized approach ",
                    },
                  },
                ],
              }}
            />
          </DndProvider>

          <DndProvider backend={HTML5Backend}>
            <Node
              o={{
                tradingName:
                  "Patients admitted for the sole purpose of minor procedures or chemotherapy infusion as well as patients undergoing stem cell/bone marrow transplantation.",
                account: [
                  {
                    name: "Accou",
                    product: {
                      name: "Routine pharmacologic thromboprophylaxis should not be offered ",
                    },
                  },
                ],
              }}
            />
          </DndProvider>

        </Box>
      </ThemeProvider>
    </>
  );
}

// {
//     "tradingName": "Primary prophylaxis for patients with cancer undergoing surgery",
//     "account": [
//       {
//         "name": "Accou",
//         "product": { "name": "* lower bleeding risk:pharmacological thromboprophylaxis is recommended" }
//       }
//     ],
//     "organizationChildRelationship": [
//       {
//         "tradingName": "*high bleeding risk:mechanical thromboprophylaxis is recommended ",
//         "account": [
//           {
//             "name": "",
//             "product": { "name": "" }
//           },
//           {
//             "name": "",
//             "product": { "name": "" }
//           }
//         ]
//       },
//       {
//         "tradingName": "*high risk for thrombosis, except in those at high risk of bleeding:a combination of mechanical and pharmacologic thromboprophylaxis",
//         "account": [
//           {
//             "name": "Account 4",
//             "product": { "name": "150 Plans" }
//           }
//         ],
//         "organizationChildRelationship": [
//           {
//             "tradingName": "Coca-Colgalore",
//             "account": [
//               {
//                 "name": "Accot 5",
//                 "product": { "name": "32s" }
//               }
//             ]
//           }
//         ]
//       }
//     ]
//   }
