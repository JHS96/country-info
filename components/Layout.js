import Header from './Header';

// styling for Lyaout
const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

// Layout component to be used on all pages
const Layout = (props) => (
  <div id='page-content' style={layoutStyle}>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossOrigin="anonymous"
    />
    <Header />
    {props.children}

    <style global jsx>
      {`
        h1,
        h2,
        h4 {
          text-align: center;
        }
        #__next {
          width: 80%;
          margin: auto;
        }
        #page-content {
          background-color: #a0e6e0;
        }
      `}
    </style>
  </div>
);

export default Layout;