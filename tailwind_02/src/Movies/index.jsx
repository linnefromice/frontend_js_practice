import { Nav, NavItem } from "./Nav";

export const Movies = () => {
  return (
    <div className="divide-y divide-slate-100">
      <Nav>
        <NavItem href="" isActive>{`New Releases`}</NavItem>
        <NavItem href="">{`Top Rated`}</NavItem>
        <NavItem href="">{`Vincent's Picks`}</NavItem>
      </Nav>
    </div>
  );
};
