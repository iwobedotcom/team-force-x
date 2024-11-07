import { useEffect } from 'react';

const ManageNotifications = ({
  emailStatus,
  onDismiss
}: {
  emailStatus: string | undefined;
  onDismiss: () => void;
}) => {
  useEffect(() => {
    const dismissButton = document.getElementById('dismiss-button');
    const notificationContainer = document.getElementById('notification-container');

    if (dismissButton && notificationContainer) {
      dismissButton.addEventListener('click', () => {
        notificationContainer.style.display = 'none';
        onDismiss();
      });
    }

    return () => {
      if (dismissButton) {
        dismissButton.removeEventListener('click', () => {});
      }
    };
  }, [onDismiss]);
  return (
    <>
      <div
        id="notification-container"
        className="fixed bottom-0 start-0 z-[60] mx-auto w-full p-6 sm:max-w-sm"
        data-aos="fade-right"
      >
        <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
          <div className="flex items-center gap-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mt-1 h-auto w-8 shrink-0 "
              width="72"
              height="72"
              viewBox="0 0 50 50"
            >
              <g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                <path stroke="rgba(121, 59, 221, 1)" d="M31.25 37.5h-12.5a6.25 6.25 0 0 0 12.5 0" />
                <path
                  stroke="rgba(102, 36, 209, 1)"
                  d="M37.5 18.75v8.333l2.875 2.875A4.417 4.417 0 0 1 37.25 37.5h-24.5a4.416 4.416 0 0 1-3.125-7.542l2.875-2.875V18.75A12.5 12.5 0 0 1 25 6.25a12.5 12.5 0 0 1 6 1.52"
                />
                <path
                  stroke="rgba(121, 59, 221, 1)"
                  d="M29.167 12.5a6.25 6.25 0 1 0 12.5 0a6.25 6.25 0 0 0-12.5 0"
                />
              </g>
            </svg>
            <div className="grow">
              <p className="mt-1 text-sm font-semibold text-gray-700 font-neue">{emailStatus}</p>
            </div>
            <div className="flex-shrink-0">
              <button
                id="dismiss-button"
                type="button"
                className="inline-flex items-center gap-x-2 rounded-full border border-transparent p-2 text-sm font-semibold text-gray-500 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              >
                <span className="sr-only">Dismiss</span>
                <svg
                  className="size-4 shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageNotifications;
