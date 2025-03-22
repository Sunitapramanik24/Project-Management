import { useState } from "react";
// import { Menu, X, Home, Settings, User } from "lucide-react";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import CancelIcon from "@mui/icons-material/Cancel";
import logo from "../../public/logo.png";
import SideBarListItem from "./SideBarListItem";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FolderIcon from "@mui/icons-material/Folder";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TaskIcon from "@mui/icons-material/Task";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import BusinessIcon from "@mui/icons-material/Business";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import DescriptionIcon from "@mui/icons-material/Description";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import GroupsIcon from "@mui/icons-material/Groups";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import CampaignIcon from "@mui/icons-material/Campaign";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import ChatIcon from "@mui/icons-material/Chat";
import EventNoteIcon from "@mui/icons-material/EventNote";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Sidebar({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  const [isListOpen, setIsListOpen] = useState(false);

  return (
    <div className=" w-full ">
      {/* Header */}
      <div className="flex justify-between items-center px-8 py-2 h-[5rem] bg-white w-full border-b border-gray-400 shadow-[10px_10px_50px_5px] shadow-gray-300">
        <div className="flex gap-x-8">
          {/* Menu Button */}
          <button
            className=" cursor-pointer  text-gray-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            <MenuOpenIcon />
          </button>
          <div className="w-[7rem]">
            <img
              className="w-full object-contain "
              src={logo}
              loading="true"
              alt="Logo"
            />
          </div>
        </div>
        <div className="">User</div>
      </div>
      {/* Sidebar */}
      <div className="flex flex-auto h-screen w-full relative ">
        <div
          className={`absolute left-0 lg:static z-10 h-full   transition-transform transform  ${isOpen ? "translate-x-0 w-full lg:w-[16rem]" : "-translate-x-[20rem]"} w-0`}
        >
          <div
            className={` overflow-y-scroll no-scrollbar h-full  w-full sm:w-[16rem]  bg-[var(--primary1)] text-white p-5 translate-[visibility]   
       `}
          >
            {/* <h2 className="text-2xl font-bold mb-5">Sidebar</h2> */}
            <ul className="space-y-4">
              <SideBarListItem to={"/"}>
                <DashboardIcon /> Dashboard
              </SideBarListItem>

              <SideBarListItem to={"/projects"}>
                <FolderIcon /> Project
              </SideBarListItem>

              <SideBarListItem to={"/tasks"}>
                <TaskIcon /> Tasks
              </SideBarListItem>

              <SideBarListItem to={"/clients"}>
                <AssignmentIndIcon /> Clients
              </SideBarListItem>

              <SideBarListItem to={"/company"}>
                <BusinessIcon /> Company
              </SideBarListItem>

              <SideBarListItem to={"/leads"}>
                <PeopleAltIcon /> Leads
              </SideBarListItem>

              <SideBarListItem to={"/deals"}>
                <DescriptionIcon /> Deals
              </SideBarListItem>

              <div>
                <div onClick={() => setIsListOpen(!isListOpen)}>
                  <SideBarListItem>
                    <div className="flex justify-between items-center gap-2 w-full">
                      <div className="flex gap-x-4">
                        <MonetizationOnIcon /> Sales
                      </div>
                      <div><ExpandMoreIcon /></div>
                    </div>
                  </SideBarListItem>
                </div>
                <div
                  className={`ps-2 ${isListOpen ? "h-full  visible" : "h-0 invisible"} `}
                >
                  <div className="">
                    <SideBarListItem to={"/invoices"}>
                      <MonetizationOnIcon /> Invoices
                    </SideBarListItem>
                  </div>
                  <div className="">
                    <SideBarListItem to={"/estimate"}>
                      <MonetizationOnIcon /> Estimate
                    </SideBarListItem>
                  </div>
                  <div className="">
                    <SideBarListItem to={"/expenses"}>
                      <MonetizationOnIcon /> Expenses
                    </SideBarListItem>
                  </div>
                  <div className="">
                    <SideBarListItem>
                      <MonetizationOnIcon /> Bank Account
                    </SideBarListItem>
                  </div>
                </div>
              </div>

              <SideBarListItem to={"/teams"}>
                <GroupsIcon /> Teams
              </SideBarListItem>

              <SideBarListItem to={"/reports"}>
                <AssessmentIcon /> Reports
              </SideBarListItem>

              <SideBarListItem to={"/tickets"}>
                <SupportAgentIcon /> Tickets
              </SideBarListItem>

              <SideBarListItem to={"/announcements"}>
                <CampaignIcon /> Announcements
              </SideBarListItem>

              <SideBarListItem to={"/notifications"}>
                <CircleNotificationsIcon /> Notifications
              </SideBarListItem>

              <SideBarListItem to={"/charts"}>
                <ChatIcon /> Chats
              </SideBarListItem>

              <SideBarListItem to={"/timesheet"}>
                <EventNoteIcon /> Timesheet
              </SideBarListItem>

              <SideBarListItem to={"profit"}>
                <AccountCircleIcon /> Profile
              </SideBarListItem>
            </ul>
          </div>
        </div>

        <div className="h-screen md:h-full w-screen  lg:w-full  ">
          {children}
        </div>
      </div>
    </div>
  );
}