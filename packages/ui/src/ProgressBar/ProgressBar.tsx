export const ProgressBar = () => {
    return (
        <div className="w-full">
            <h4 className="sr-only">Status</h4>
            <p className="text-sm font-medium text-gray-900">$100.00 By the 15th</p>
            <div className="mt-6" aria-hidden="true">
                <div className="overflow-hidden bg-gray-200 rounded-full">
                    <div className="h-2 bg-indigo-600 rounded-full" style={{ width: "37.5%" }} />
                </div>
                <div className="hidden grid-cols-4 mt-6 text-sm font-medium text-gray-600 sm:grid">
                    <div className="text-indigo-600">50% Funded</div>
                    {/* <div className="text-center text-indigo-600">Migrating database</div>
                    <div className="text-center">Compiling assets</div>
                    <div className="text-right">Deployed</div> */}
                </div>
            </div>
        </div>
    );
};
