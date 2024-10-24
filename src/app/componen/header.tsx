import Menu from "@/components/ui/navbar";

export default function Navbar() {
  const menuItems = [
    { label: "Home", href: "#" },
    { label: "Feature", href: "#feature" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];
    return (
      <nav className="w-full bg-white fixed z-50 shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-purple-600">
            Luxora
          </a>
          <Menu items={menuItems} />
        </div>
      </nav>
    );
  }
  