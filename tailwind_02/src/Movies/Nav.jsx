export const Nav = ({ children }) => (
  <nav className="py-4 px-6 text-sm font-medium">
    <ul className="flex space-x-3">{children}</ul>
  </nav>
);

export const NavItem = ({ href, isActive, children }) => (
  <li>
    <a
      href={href}
      className={`block px-3 py-2 rounded-md ${
        isActive ? "bg-sky-500 text-white" : "bg-slate-50"
      }`}
    >
      {children}
    </a>
  </li>
);
