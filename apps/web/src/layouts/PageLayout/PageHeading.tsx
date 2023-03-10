import { Button } from "../../components";
import { useAuth } from "../../contexts/AuthContext";

export interface PageHeadingProps {
    title?: string;
}

export const PageHeading: React.FC<PageHeadingProps> = ({ title }: PageHeadingProps) => {
    const { logout } = useAuth();

    return (
        <div className="md:flex md:items-center md:justify-between">
            <div className="flex-1 min-w-0">
                {title && (
                    <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                        {title}
                    </h2>
                )}
            </div>
            <div className="flex mt-4 md:mt-0 md:ml-4">
                <Button onClick={() => logout()}>Logout</Button>
            </div>
        </div>
    );
};
