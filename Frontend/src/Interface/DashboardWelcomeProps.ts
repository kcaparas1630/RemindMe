import GeneralProps from "./General/GeneralProps";

export default interface DashboardWelcomeProps extends GeneralProps {
    firstName: string | undefined;
    token: string | null;
    userName: string;
}
