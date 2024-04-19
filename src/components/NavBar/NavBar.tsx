import Logo from "./components/Logo";

export default function NavBar({ children }: { children: React.ReactNode }) {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
}
