import React, { useState, useEffect } from "react";

import myRequests from "../../api";
import pluginId from "../../pluginId";

import ChartCircle from "@strapi/icons/ChartCircle";
import CheckCircle from "@strapi/icons/CheckCircle";
import Clock from "@strapi/icons/Clock";

import {
  BaseHeaderLayout,
  HeaderLayout,
  Box,
  Button,
  Typography,
} from "@strapi/design-system";
import ModalButton from "./modal";
import Column from "./column";

const newIssue = {
  title: "Voici un test n°569",
  description: "Super, ça marche toujours au poil",
  priority: 2,
  status: 0,
  type: "Bug",
  assigned_to_id: "0",
};

function getGetItemsByStatus(items, status) {
  const filteredItems = items.filter((item) => item.status === status);
  return filteredItems;
}

const HomePage = ({ issues, fetchIssues }) => {
  const handlePostIssue = async () => {
    const myNewIssue = await myRequests.createIssue(newIssue);
    console.log("myNewIssue", myNewIssue);
  };
  const inProgress = getGetItemsByStatus(issues, 2);
  const completed = getGetItemsByStatus(issues, 1);
  const opened = getGetItemsByStatus(issues, 0);
  console.log(
    "opened",
    opened,
    "inProgress",
    inProgress,
    "completed",
    completed
  );
  // Type: "Bug", "Cosmetics", "Exception", "Feature", "Task", "Usability", "Performance", "Auto-Reported"
  const columnNames = [
    {
      name: "Ouverts",
      items: opened,
      icon: ChartCircle,
    },
    {
      name: "En cours",
      items: inProgress,
      icon: Clock,
    },
    {
      name: "Terminés",
      items: completed,
      icon: CheckCircle,
    },
  ];
  return (
    <div>
      <Box background="neutral100">
        <BaseHeaderLayout
          primaryAction={<ModalButton />}
          secondaryAction={null}
          title="Tickets"
          subtitle={`${
            issues && issues.length ? issues.length : 0
          } tickets trouvés`}
          as="h2"
        />
      </Box>
      <div
        style={{
          marginLeft: 30,
          marginRight: 25,
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
        }}
      >
        {columnNames.map((item) => (
          <div key={item.name} style={{ padding: 4 }}>
            <Column items={item.items} name={item.name} icon={item.icon} />
          </div>
        ))}
      </div>
      {/* <button onClick={handlePostIssue}>Post issue</button> */}
    </div>
  );
};

export default function HomepageWithData() {
  const [issues, setIssues] = useState([]);
  const [isError, setIsError] = useState(false);
  useEffect(async () => {
    fetchIssues();
  }, []);
  async function fetchIssues() {
    try {
      await myRequests
        .getIssues()
        .then((response) => setIssues(response.data.issues));
    } catch (error) {
      setIsError(true);
      console.log("error", error);
    }
  }
  return <HomePage issues={issues} fetchIssues={fetchIssues} />;
}
