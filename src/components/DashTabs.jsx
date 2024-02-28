import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
 
export function DashTabs() {
  const [activeTab, setActiveTab] = React.useState("research work");
  const data = [
    {
      label: "Find Research Work",
      value: "research work",
      title: 'Find Research Work',
      desc: `We would to help you find research opportunities you are passionate about.
      Search for an opportunity using either the name of the diseases you are interested in, and or location to narrow down to countries you are passionate about. `,
      button: "/projects",
    },
    {
      label: "Datasets",
      value: "datasets",
        title: 'Find Datasets',
      desc: `We care about the research you are doing and want you to use curated data sets. These are datasets that have been collected, used by other scientists and been placed on our platform as open source for you to find new insights. `,
        button: "/datasets",
    }, 
    {
        label: "Create a Project",
        value: "create project",
        title: 'Create a Project',
        desc: `We would to help you find research opportunities you are passionate about but if we can not, we would like to help you create one.
        You can create a project and have other scientists join you in your research. `,
        button: "/create-project",
    }
  ];
  return (
    <Tabs value={activeTab}>
      <TabsHeader
        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
        indicatorProps={{
          className:
            "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={activeTab === value ? "text-gray-900" : ""}
          >
            <p className="font-body-plex ">
            {label}
            </p>
            
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc, title, button }) => (
          <TabPanel key={value} value={value}>
            <p className="font-semibold font-body-plex text-blue-gray-700 my-2">
                {title}
            </p>
            <p className="font-light font-body-plex">
            {desc}
            </p>
            <Link to={button}>
                <p className="text-white font-body-plex rounded-md my-4 w-max px-2 py-2 bg-blue-gray-900">
                    {title}
                </p>
            </Link>
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}