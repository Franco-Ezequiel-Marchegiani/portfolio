import React from 'react';
import './proyects.css';
import { Link } from 'react-router-dom';

//Importacion imagenes
import DavidBowieHome from '../../images/proyectos/davidBowie/davidBowieHome.png';
import QueenHome from '../../images/proyectos/Queen/queenHome.png';
import AyoHome from '../../images/proyectos/ayo/ayoHome.png';

import GifBowie from '../../images/proyectos/davidBowie/dbGifPresentation.gif';
import GifQueen from '../../images/proyectos/Queen/queenGifPresentation.gif';
import GifAyo from '../../images/proyectos/ayo/gifHome.gif';
const infoProyectos = [
  {
    id: 1,
    claseLink: "davidBowiePage",
    tituloProyecto: "David Bowie Page",
    subTitle:"Proyecto realizado durante mi cursada en CoderHouse en el curso de Desarrollo Web. Esta fue mi primera pagina realizada de manera profesionalmente. Los aspectos que mas rescato de este proyecto son:",
    linkProyecto:"//franco-ezequiel-marchegiani.github.io/David-Bowie-ProyectoFinal/home/index.html",
    imagen: DavidBowieHome,
    description: "",
    gif: GifBowie,
    gifClase: "gifLinkProyect",
    individualClase:"bowieGif"
  },
  {
    id: 2,
    claseLink: "queenPage",
    tituloProyecto: "Queen E-commerce",
    description: "",
    linkProyecto:"//franco-ezequiel-marchegiani.github.io/proyectoFinalJS/",
    imagen: QueenHome,
    gif: GifQueen,
    gifClase: "gifLinkProyect",
    individualClase:"queenGif"
  },
  {
    id: 3,
    claseLink: "ayoPage",
    tituloProyecto: "Proyecto AYO",
    description: "",
    linkProyecto:"//franco-ezequiel-marchegiani.github.io/proyecto-AYO/",
    imagen: AyoHome,
    gif: GifAyo,
    gifClase: "gifLinkProyect",
    individualClase:"ayoGif"
  }
]
function Proyect() {
  const rutaParametrizada = "/ProyectDetail/"
  //Y acá colocar el array de SOLO los títulos de los proyectos y su imagen

  return (
    <section className="">
    <div className='proyectsLinks'>
    <h1 className='titleProyectos'>Proyectos</h1>
      <nav className='proyectLinksContainer'>
          {infoProyectos.map((proyecto, i) =>{
            return(
                <Link className={proyecto.claseLink} key={proyecto + i} to={rutaParametrizada + proyecto.id}>{proyecto.tituloProyecto}</Link>
            )
          })}
        </nav>
    </div>
    <div className='proyectsImageContainer'>
    {infoProyectos.map((proyecto, i) =>{
      return(
        <div key={proyecto + i} className='imageProyect'>
          <Link className='imageLinkProyect' key={proyecto.gifClase + i} to={rutaParametrizada + proyecto.id}>
            <img src={proyecto.imagen} alt="" />
          </Link>
          <Link className={proyecto.gifClase + ' ' + proyecto.individualClase} key={proyecto.individualClase + i} to={rutaParametrizada + proyecto.id}>
            <img src={proyecto.gif} alt="" />
          </Link>
        </div>
      )
    })}
    </div>
        <h1>Proyectos</h1>
    </section>
  );
}

export default Proyect;