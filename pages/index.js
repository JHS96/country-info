import Layout from '../components/Layout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

// list all availabe countries as links that the user can click for more information
const Index = (props) => (
  <Layout>
    <div id='headings'>
      <h1>Countries of the World</h1>
      <h2>Listed below in aplpabetical order are {props.countries.length} countries.</h2>
      <h4>Click on any country's name for more information.</h4>
    </div>

    <hr />
    <ul>
      {props.countries.map((country) => (
        <li key={country.numericCode}>
          <Link
            as={`/d/${country.name}`}
            href={`/details?name=${country.name}`}
          >
            <a>{country.name}</a>
          </Link>
        </li>
      ))}
    </ul>

    <style jsx>
      {`
        #headings {
          background-color: aliceblue;
          padding: 1%;
        }
        ul {
          max-height: 50vh;
          overflow-y: scroll;
          width: 40%;
          margin: auto;
          background-color: aliceblue;
        }
         /* width */
        ::-webkit-scrollbar {
          width: 10px;
        }

        /* Track */
        ::-webkit-scrollbar-track {
          box-shadow: inset 0 0 5px grey;
          border-radius: 10px;
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
          background: blue;
          border-radius: 10px;
        } 
      `}
    </style>
  </Layout>
);

// fetch all the available countries to be listed
Index.getInitialProps = async function () {
  const res = await fetch('https://restcountries.eu/rest/v2/all');
  const data = await res.json();

  console.log(`Country data fetched. Count: ${data.length}`);

  return {
    countries: data
  };
};

export default Index;