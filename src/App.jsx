import React, { useEffect, useState } from 'react';
import './App.css';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header'

export default () => {

  const [movieList, setMovielist] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      
      // Pegando a lista total
      let list = await Tmdb.getHomeList();
      setMovielist(list);

      // Pegando o featured movie
      let originals = list.filter(i => i.slug === 'originals');  // Lista apenas de 'originals'
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];

      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv') ;
      setFeaturedData(chosenInfo);
    }

    loadAll();
  }, []);

  return(
    <div className="page">

      <Header />

      {featuredData && 
        <FeaturedMovie item={featuredData} />
      }

      <section className="lists">
        {movieList.map((item, key) => (
          <div>
            <MovieRow key={key} title={item.title} items={item.items} />
          </div>
        ))}
      </section>

    </div>
  )
}