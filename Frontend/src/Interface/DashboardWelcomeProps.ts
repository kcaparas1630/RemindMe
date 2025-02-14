import GeneralProps from "./General/GeneralProps";
import UserInterface from "./UserInterface";

export default interface DashboardWelcomeProps extends GeneralProps {
    user: UserInterface | undefined;
}
