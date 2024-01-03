const ProjectStatus = ({ statuses }) => {
  const statusColors = {
    Online: "bg-green-500",
    Offline: "bg-gray-500",
    "In Progress": "bg-green-500",
    "On Hold": "bg-gray-500",
    Completed: "bg-green-500",
    Archived: "bg-red-500",
  };
  return (
    <div className="flex flex-row space-x-between m-2">
      {statuses.map((status) => (
        <div
          key={status}
          className={`text-white text-sm font-general-medium px-2 py-1 rounded-full ${statusColors[status]} mx-1`}
        >
          {status}
        </div>
      ))}
    </div>
  );
};

export default ProjectStatus;
