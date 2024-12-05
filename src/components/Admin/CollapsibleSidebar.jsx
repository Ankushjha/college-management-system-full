import {
  Menu,
  X,
  Home,
  Settings,
  Users,
  MessageSquare,
  HelpCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const CollapsibleSidebar = ({ isOpen, handleMenu }) => {
  const menuItems = [
    { icon: Home, label: "Dashboard", href: "dashboard" },
    { icon: Users, label: "Users", href: "user" },
    { icon: MessageSquare, label: "Messages", href: "message" },
    { icon: Settings, label: "Settings", href: "#" },
    { icon: HelpCircle, label: "Help", href: "#" },
  ];

  return (
    <>
      {/* Toggle Button */}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg transition-all duration-300 ease-in-out ${
          isOpen ? "w-64" : "w-16"
        }`}
      >
        {/* Logo Area */}

        <div className="h-16 flex items-center justify-between border-b p-3">
          <button
            onClick={handleMenu}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300 ease-in-out w-10 h-10 flex items-center justify-center"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          <span
            className={`mr-24 font-bold text-xl transition-opacity duration-300 ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            Logo
          </span>
        </div>

        {/* Navigation Items */}
        <nav className="p-3">
          <ul className="space-y-2">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <li key={index}>
                  <Link
                    to={`/admin/${item.href}`}
                    className="flex items-center p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300 ease-in-out group min-h-[40px]"
                  >
                    <div className="flex-shrink-0">
                      <Icon className="w-6 h-6 text-gray-500 group-hover:text-gray-900 transition-colors duration-300" />
                    </div>
                    <div
                      className={`transition-all duration-300 overflow-hidden ${
                        isOpen ? "w-auto ml-3 opacity-100" : "w-0 opacity-0"
                      }`}
                    >
                      <span className="text-gray-700 group-hover:text-gray-900 whitespace-nowrap">
                        {item.label}
                      </span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default CollapsibleSidebar;
