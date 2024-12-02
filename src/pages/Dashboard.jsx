import Home from '../components/Home';
import Artwork from '../components/Artwork';
import ArtistList from '../components/ArtistList';
import QnA from '../components/Q&A';
import About from '../components/About';
import Navbar from '../components/Navbar'; 
import Layout from '../components/Layout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 



const Dashboard = () => {
    return (
      <Layout>
        <Navbar />
        <div className="pt-28">
          <section id="home">
            <Home />
          </section>
          <About />
          <section id="artworks">
            <Artwork />
          </section>
          <ArtistList />
          <QnA />
        </div>
      </Layout>
    );
};
  
  
  

export default Dashboard;