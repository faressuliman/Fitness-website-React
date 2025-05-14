import { useLocation } from "react-router-dom";
import { LogOut } from "lucide-react";

type IProfileMenuModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ProfileMenuModal = ({ isOpen, onClose }: IProfileMenuModalProps) => {
  const { pathname } = useLocation();
  const storageKey = "loggedInUser";
  const userDataString = localStorage.getItem(storageKey);
  const userData = userDataString ? JSON.parse(userDataString) : null;

  const onlogout = () => {
    localStorage.removeItem(storageKey);
    setTimeout(() => {
      location.replace(pathname);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="relative inline-block text-left">
      <div
        className="fixed inset-0 z-40"
        onClick={onClose}
        aria-hidden="true"
      ></div>
      {/* Modal Dropdown */}
      <div className="absolute right-0 w-48 rounded-lg shadow-lg bg-neutral-800 ring-1 ring-black ring-opacity-5 z-50 overflow-hidden">
        {/* User Info */}
        <div className="px-3 py-2 border-b border-neutral-700">
          <p className="text-xs text-neutral-400">Signed in as</p>
          <p className="text-sm font-medium text-white truncate">{userData?.user?.email}</p>
        </div>
        
        {/* Actions */}
        <div>
          <button
            className="flex w-full items-center gap-2 px-3 py-2 text-sm text-white hover:bg-red-600 transition-colors"
            onClick={onlogout}
          >
            <LogOut size={16} />
            <span>Sign out</span>
          </button>
        </div>
        
        <div className="text-center text-[10px] text-neutral-500 py-1 border-t border-neutral-700">
          © Fitness Exercise
        </div>
      </div>
    </div>
  );
};

export default ProfileMenuModal;