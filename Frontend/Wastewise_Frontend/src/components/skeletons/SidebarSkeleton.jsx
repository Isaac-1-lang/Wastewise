import { Users } from "lucide-react";

const SidebarSkeleton = () => {
  const skeletonContacts = Array(8).fill(null);

  return (
    <aside className="h-full w-20 lg:w-72 border-r border-base-300 flex flex-col transition-all duration-200 ease-in-out">
      {/* Header */}
      <div className="border-b border-base-300 p-4 lg:p-5">
        <div className="flex items-center justify-center lg:justify-start gap-3">
          <Users className="w-5 h-5 lg:w-6 lg:h-6" />
          <span className="font-medium hidden lg:block text-lg">Contacts</span>
        </div>
      </div>

      {/* Skeleton Contacts */}
      <div className="flex-1 overflow-y-auto py-2">
        {skeletonContacts.map((_, idx) => (
          <div 
            key={idx} 
            className="w-full px-2 py-3 lg:px-4 flex items-center gap-3 hover:bg-base-200 transition-colors duration-150"
          >
            {/* Avatar skeleton */}
            <div className="flex-shrink-0">
              <div className="skeleton size-10 lg:size-12 rounded-full" />
            </div>

            {/* User info skeleton - only visible on larger screens */}
            <div className="hidden lg:flex flex-col gap-2 flex-1 min-w-0">
              <div className="skeleton h-4 w-3/4 max-w-[180px]" />
              <div className="skeleton h-3 w-1/2 max-w-[120px]" />
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default SidebarSkeleton;