import { QueryClient } from "@tanstack/react-query";
import GeneralProps from "./General/GeneralProps";
import TaskInterface from "./TaskInterface";

interface DashboardProps extends GeneralProps {
    userName: string;
    queryClient: QueryClient;
    isEditing?: boolean;
    onCancel?: () => void;
    task?: TaskInterface;
};

export default DashboardProps;
