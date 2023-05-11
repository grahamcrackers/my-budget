import { CalendarDaysIcon, CreditCardIcon, ExclamationTriangleIcon, UserCircleIcon } from "@heroicons/react/20/solid";
import { ProgressBar } from "../ProgressBar";
import { classNames } from "@my-budget/common";

export const CategoryTargetDetails = () => {
    return (
        <div className="lg:col-start-3 lg:row-end-1">
            <h2 className="sr-only">Details</h2>
            <div className="rounded-lg shadow-sm bg-gray-50 ring-1 ring-gray-900/5">
                <dl className="flex flex-wrap">
                    <div className="flex-auto pt-6 pl-6">
                        <dt className="text-sm font-semibold leading-6 text-gray-900">Target</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-500">Monthly</dd>
                    </div>
                    <div className="self-end flex-none px-6 pt-4">
                        <dt className="sr-only">Status</dt>
                        <dd className="inline-flex items-center px-2 py-1 text-xs font-medium text-green-700 rounded-md bg-green-50 ring-1 ring-inset ring-green-600/20">
                            Paid
                        </dd>
                    </div>

                    <div className="flex flex-none w-full px-6 pt-6 mt-6 border-t gap-x-4 border-gray-900/5">
                        <dt className="flex-none">
                            <span className="sr-only">Client</span>
                            <UserCircleIcon className="w-5 h-6 text-gray-400" aria-hidden="true" />
                        </dt>
                        <dd className="text-sm font-medium leading-6 text-gray-900">Alex Curren</dd>
                        <dd className="flex"></dd>
                    </div>
                    <div className="flex w-full px-6 mt-4 gap-x-4">
                        <ProgressBar />
                    </div>
                    <div className="flex w-full px-6 mt-4 gap-x-4">
                        <div className="w-full p-4 border-l-4 border-yellow-400 bg-yellow-50">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <ExclamationTriangleIcon className="w-5 h-5 text-yellow-400" aria-hidden="true" />
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm text-yellow-700">
                                        You have no credits left.{" "}
                                        <a
                                            href="#"
                                            className="font-medium text-yellow-700 underline hover:text-yellow-600"
                                        >
                                            Upgrade your account to add more credits.
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </dl>

                <dl className="px-6 py-4 -my-3 text-sm leading-6 divide-y divide-gray-100">
                    <div className="flex justify-between py-3 gap-x-4">
                        <dt className="text-gray-500">Total Needed</dt>
                        <dd>
                            <div className="font-medium text-gray-900">$50.00</div>
                        </dd>
                    </div>
                    <div className="flex justify-between py-3 gap-x-4">
                        <dt className="text-gray-500">Funded</dt>
                        <dd>
                            <div className="font-medium text-gray-900">$50.00</div>
                        </dd>
                    </div>
                    <div className="flex justify-between py-3 gap-x-4">
                        <dt className="text-gray-500">Amount</dt>
                        <dd className="flex items-start gap-x-2">
                            <div className="font-medium text-gray-900">$50.00</div>
                            <div
                                className={classNames(
                                    false,
                                    "rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset",
                                )}
                            >
                                {"Paid"}
                            </div>
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    );
};
