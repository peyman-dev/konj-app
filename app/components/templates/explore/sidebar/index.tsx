import ByCategory from "./filters/by-category";
import ByContentCategory from "./filters/by-content";
import ByPublications from "./filters/by-publications";
import FindAuthors from "./filters/find-authors";

const Sidebar = () => {
  return (
    <aside className="min-w-[309px] *:p-4 space-y-4 *:border *:rounded-[4px] *:border-gray-20 *:bg-white *:grow">
        <ByCategory />
        <ByContentCategory />
        <FindAuthors />
        <ByPublications />
    </aside>
  );
};

export default Sidebar;
