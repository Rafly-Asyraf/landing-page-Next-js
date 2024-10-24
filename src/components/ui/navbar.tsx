import Link from "next/link";

interface MenuItem {
  label: string;
  href: string;
}

interface MenuProps {
  items: MenuItem[]; // Daftar item menu
}

const Menu: React.FC<MenuProps> = ({ items }) => {
  return (
    <ul className="flex space-x-4">
      {items.map((item, index) => (
        <li key={index}>
          <Link href={item.href} className="hover:text-purple-600">
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Menu;