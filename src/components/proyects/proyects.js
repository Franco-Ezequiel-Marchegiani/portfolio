import React from 'react';
import './proyects.css';
import { Link } from 'react-router-dom';

//Importacion imagenes
import DavidBowieHome from '../../images/proyectos/davidBowie/davidBowieHome.png';
import QueenHome from '../../images/proyectos/Queen/queenHome.png';
import AyoHome from '../../images/proyectos/ayo/ayoHome.png';
import WeaterHome from '../../images/proyectos/weatherReport/portadaAppClima.png';
import GitHubJobsHome from '../../images/proyectos/githubJobs/portadaGithubJobs.png';
import QuizApp from '../../images/proyectos/quizApp/home.png';

import GifBowie from '../../images/proyectos/davidBowie/dbGifPresentation.gif';
import GifQueen from '../../images/proyectos/Queen/queenGifPresentation.gif';
import GifAyo from '../../images/proyectos/ayo/gifHome.gif';
import GifWeatherReport from '../../images/proyectos/weatherReport/gifMuestraClima.gif';
import GifGitHubJobs from '../../images/proyectos/githubJobs/githubjobsMuestra.gif';
import GifQuizApp from '../../images/proyectos/quizApp/gifHome.gif';

import AOS from 'aos';
const infoProyectos = [
  {
    id: 1,
    claseLink: "davidBowiePage",
    tituloProyecto: "David BoWeb",
    subTitle:"Proyecto realizado durante mi cursada en CoderHouse en el curso de Desarrollo Web. Esta fue mi primera pagina realizada de manera profesionalmente. Los aspectos que mas rescato de este proyecto son:",
    linkProyecto:"//franco-ezequiel-marchegiani.github.io/David-Bowie-ProyectoFinal/home/index.html",
    imagen: DavidBowieHome,
    description: "Pagina Web con historia del artista David Bowie, discografia completa, historia completa, y imagenes de todas sus vestimentas a lo largo de su carrera",
    gif: GifBowie,
    gifClase: "gifLinkProyect",
    individualClase:"bowieGif"
  },
  {
    id: 2,
    claseLink: "queenPage",
    tituloProyecto: "Queen E-commerce",
    description: "Pagina Web con informacion de la Banda, incluye tienda para comprar sus discos, historia de cada integrante, y un modo oscuro que tambien afecta a las imagenes",
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
    description: "Pagina con diseño profesional, brinda informacion detallada acerca de la Fundacion AYO, con un diseño sumamente responsivo, agradable en cuanto a interfaz y experiencia de usuario",
    linkProyecto:"//franco-ezequiel-marchegiani.github.io/proyecto-AYO/",
    imagen: AyoHome,
    gif: GifAyo,
    gifClase: "gifLinkProyect",
    individualClase:"ayoGif"
  },
  {
    id: 4,
    claseLink: "weatherApp",
    tituloProyecto: "Weather App",
    description: "Página Web con información del clima en los próximos 5 días, creada con herramientas modernas y actualizadas, 100% funcional y práctica para el día a día",
    linkProyecto:"//github.com/Franco-Ezequiel-Marchegiani/challenge-weatherReport",
    imagen: WeaterHome,
    gif: GifWeatherReport,
    gifClase: "gifLinkProyect",
    individualClase:"weatherGif"
  },
  {
    id: 5,
    claseLink: "githubJobs",
    tituloProyecto: "Github Jobs",
    description: "Página Web para conseguir trabajo con funcionalidad, herramientas actualizadas y con un excelente diseño de UX/UI",
    linkProyecto:"//github-jobs-proyect.firebaseapp.com/",
    imagen: GitHubJobsHome,
    gif: GifGitHubJobs,
    gifClase: "gifLinkProyect",
    individualClase:"githubJobsGif"
  },
  {
    id: 6
  }
]
function Proyect() {
  AOS.init()
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
        <div key={proyecto + i} className='imageProyect' data-aos="fade-up" data-aos-duration="1500">
          <Link className='imageLinkProyect' key={proyecto.gifClase + i} to={rutaParametrizada + proyecto.id}>
            <img src={proyecto.imagen} alt="" />
          </Link>
          <Link className={proyecto.gifClase + ' ' + proyecto.individualClase} key={proyecto.individualClase + i} to={rutaParametrizada + proyecto.id}>
            <img src={proyecto.gif} alt="" />
          </Link>
          <div>
          <Link className='titlePresentationProyect' key={proyecto.gifClase + i} to={rutaParametrizada + proyecto.id}>
          <h1>{proyecto.tituloProyecto}</h1>
          </Link>
            <p className='textBodyPresentationProyect'>{proyecto.description}</p>
          </div>
        </div>
      )
    })}
    </div>
    </section>
  );
}

export default Proyect;