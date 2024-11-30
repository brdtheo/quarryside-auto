import { IconPhoto } from "@tabler/icons-react";

export default function CarMediaListSkeleton() {
  return (
    <div className="flex flex-col gap-2">
      <div
        className="bg-gray-200 animate-pulse rounded flex items-center justify-center"
        style={{ width: 785, height: 442 }}
      >
        <IconPhoto className="text-gray-400" size={48} stroke={1} />
      </div>
      <ul className="flex flex-wrap gap-1">
        <li
          className="bg-gray-200 animate-pulse rounded flex items-center justify-center"
          style={{ width: 115, height: 65 }}
        >
          <IconPhoto className="text-gray-400" size={24} stroke={1} />
        </li>
        <li
          className="bg-gray-200 animate-pulse rounded flex items-center justify-center"
          style={{ width: 115, height: 65 }}
        >
          <IconPhoto className="text-gray-400" size={24} stroke={1} />
        </li>
        <li
          className="bg-gray-200 animate-pulse rounded flex items-center justify-center"
          style={{ width: 115, height: 65 }}
        >
          <IconPhoto className="text-gray-400" size={24} stroke={1} />
        </li>
        <li
          className="bg-gray-200 animate-pulse rounded flex items-center justify-center"
          style={{ width: 115, height: 65 }}
        >
          <IconPhoto className="text-gray-400" size={24} stroke={1} />
        </li>
        <li
          className="bg-gray-200 animate-pulse rounded flex items-center justify-center"
          style={{ width: 115, height: 65 }}
        >
          <IconPhoto className="text-gray-400" size={24} stroke={1} />
        </li>
      </ul>
    </div>
  );
}
