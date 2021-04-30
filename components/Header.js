import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

// header component to be used on all pages
const Header = () => (
  <div id='header'>
    <Link href='/'>
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href='/about'>
      <a style={linkStyle}>About</a>
    </Link>
    <hr />

    <style jsx>
      {`
        #header {
          text-align: center;
          font-size: x-large;
          background-color: aliceblue;
        }
      `}
    </style>
  </div>
);

export default Header;