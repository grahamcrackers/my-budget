import { PropsWithChildren } from "react";

export type PageLayoutProps = PropsWithChildren;

export const PageLayout: React.FC<PageLayoutProps> = ({ children }: PageLayoutProps) => {
    return (
        <main className="flex-1">
            <div className="py-6">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-4">{children}</div>
            </div>
        </main>
    );
};
