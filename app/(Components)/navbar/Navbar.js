import Link from 'next/link'
// import 'globals.css'

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
      <img
          src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSNWtyQukK40RICRReyi1pfsV3ZLxYrRC79sSdSeiYY8AFMYGzL"
          alt="Logo"
          width={100}
          height={50}
        />
        </div>
      <div className="nav-links">
        <Link href="/">
        <h3>Home</h3 >
        </Link>
        <Link href="/about">
          <h3 >About</h3 >
        </Link>
        <Link href="/services">
          <h3 >Services</h3 >
        </Link>
        <Link href="/contact">
          <h3 >Contact</h3 >
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
