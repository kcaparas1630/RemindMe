import { QueryClient } from "@tanstack/react-query";
import GeneralProps from "./General/GeneralProps";

interface DashboardProps extends GeneralProps {
    userName: string;
    queryClient: QueryClient;
};

export default DashboardProps;
