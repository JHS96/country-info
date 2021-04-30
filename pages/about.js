import Layout from '../components/Layout';

// simple about page component
const About = () => {
  return (
    <Layout>
      <h1>About This App</h1>
      <p>
        This is a simple app that displays information on the country that the user has selected on the "Home" page.
      </p>
      <p>
        This app has been created in <b>Next.js</b>, with an <b>Express.js</b> custom server, so the fetching of information, as well as the renedering of pages therefore happnens on the server-side.
      </p>
    </Layout>
  );
};

export default About;