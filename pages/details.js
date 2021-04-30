import Layout from '../components/Layout.js';
import fetch from 'isomorphic-unfetch';

// display details for the country that the user clicked
// props come from getInitialProps below
const Details = (props) => (
  < Layout >
    <div id='country-div'>
      <h1>{props.country[0].name}</h1>
      <hr />
      <h3>Flag</h3>
      <img
        src={props.country[0].flag}
        alt={props.country[0].name}
      />
      <div id='details-div'>
        <label className='h-label'>Region:</label>
        <label>{props.country[0].region}</label>
        <br />
        <label className='h-label'>Native Name:</label>
        <label>{props.country[0].nativeName}</label>
        <br />
        <label className='h-label'>Demonym:</label>
        <label>{props.country[0].demonym}</label>
        <br />
        <label className='h-label'>Capital:</label>
        <label>{props.country[0].capital}</label>
        <br />
        <label className='h-label'>Currency:</label>
        <label>{props.country[0].currencies[0].name}</label>
        <br />
        <label className='h-label'>Currency Symbol:</label>
        <label>{props.country[0].currencies[0].symbol}</label>
        <br />
        <label className='h-label'>Population:</label>
        <label>{props.country[0].population}</label>
        <br />
      </div>
    </div>

    <style jsx>
      {`
        #country-div {
          display: block;
          min-height: 65vh;
        }
        img {
          width: 40%;
          margin: auto;
          float: left;
          background-color: white;
          padding: 0.5%;
          border: 1px solid #DDD;
        }
        #details-div {
          margin-left: 42%;
          background-color: aliceblue;
        }
        h3 {
          margin-left: 17.5%;
        }
        .h-label {
          font-weight: bold;
        }
        label {
          font-size: large;
          margin: 1%;
        }
      `}
    </style>
  </Layout >
);

// fetch data of country the user selected in index.js
// context is passed through from index.js when user clicks a link there
Details.getInitialProps = async function (context) {
  const { name } = context.query;
  const res = await fetch(`https://restcountries.eu/rest/v2/name/${name}`);
  const country = await res.json();

  console.log(`Fetched country: ${country[0].name}`);

  return { country };
};

export default Details;