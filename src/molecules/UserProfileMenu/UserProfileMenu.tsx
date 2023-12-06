import React, { useState, useRef } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { destroyCookie } from "nookies";
import { revokeToken } from "src/pages/api/user";
import classnames from "classnames";
import { useOnClickOutside } from "usehooks-ts";
import ProfileImage from "@/atoms/ProfileImage";
import { UserProfileMenuProps } from "./UserProfileMenu.types";

import styles from "./UserProfileMenu.module.css";

function UserProfileMenu(props: UserProfileMenuProps) {
  const { data: session } = useSession();
  const { name, jobRole, profileImage } = props;
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const signUserOut = () => {
    revokeToken(session?.user.user.token.token.email);

    signOut({ redirect: false, callbackUrl: "/logout" });
    destroyCookie(null, "csrftoken");
    destroyCookie(null, "__Secure-next-auth.callback-url");
    destroyCookie(null, "consentPolicy");
    destroyCookie(null, "__Host-next-auth.csrf-token");
    destroyCookie(null, "next-auth.session-token");
  };

  useOnClickOutside(dropdownRef, () => setShowMenu(false));

  const renderProfileDropdownMenu = () => (
    <div
      className={classnames({
        [styles.userProfileDropdownMenu]: true,
        [styles.userProfileDropdownMenuOpen]: showMenu,
      })}
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabIndex={-1}
    >
      <div className="py-1" role="none">
        <Link href="/profile">
          <a
            className="text-gray-700 block px-4 py-2 text-sm border-b hover:bg-slate-50"
            role="menuitem"
            tabIndex={-1}
            id="menu-item-0"
          >
            Profile
          </a>
        </Link>
        <div
          className="text-gray-700 block px-4 py-2 text-sm hover:bg-slate-50 cursor-pointer"
          role="menuitem"
          tabIndex={-1}
          id="menu-item-0"
          onClick={() => {
            if (session) {
              revokeToken(session?.user.user.token.token.email);
              signOut({ redirect: false, callbackUrl: "/logout" });
            }
          }}
          onKeyDown={() => {
            if (session) {
              revokeToken(session?.user.user.token.token.email);
              signUserOut();
            }
          }}
        >
          Logout
        </div>
      </div>
    </div>
  );

  return (
    <div
      ref={dropdownRef}
      className={styles.userProfileMenuContainer}
      role="button"
      tabIndex={0}
      onKeyDown={() => {}}
      onClick={() => setShowMenu(!showMenu)}
    >
      <ProfileImage imageUrl={profileImage} />
      <div className="flex flex-col pl-3 justify-center">
        <span className="" id={`utility${name}`}>
          {name}
        </span>
        <span className="text-xs text-crest-sub-text" id={`utility${jobRole}`}>
          {jobRole}
        </span>
      </div>
      <div className={styles.userProfileMenuToggle}>
        <button
          type="button"
          className={styles.userProfileMenuToggleButton}
          data-dropdown-toggle="dropdown"
        >
          <svg
            className={classnames({
              [styles.userProfileMenuToggleButtonIcon]: true,
              [styles.userProfileMenuToggleButtonIconOpen]: showMenu,
            })}
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {renderProfileDropdownMenu()}
      </div>
    </div>
  );
}

export default UserProfileMenu;
