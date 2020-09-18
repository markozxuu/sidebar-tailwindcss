// Packages
import { useRouter } from 'next/router';
import Link from 'next/link';

const ActiveLink = ({ children, href }) => {
  const { pathname } = useRouter();
  return (
    <Link href={href}>
      <a
        className={`${
          href === pathname ? 'text-white' : 'text-gray-vercel'
        } block px-4 py-2 mt-2 text-lg font-semibold  hover:text-white`}
      >
        {children}
      </a>
    </Link>
  );
};

export default ActiveLink;
