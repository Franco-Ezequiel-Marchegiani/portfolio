import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './ProyectDetail.css';
import ProyectDetailContent from './ProyectDetailContent';
import DavidBowieHome from '../../images/proyectos/davidBowie/davidBowieHome.png';
import DavidBowieDiscos from '../../images/proyectos/davidBowie/davidBowieDiscos.png';
import DavidBowieDarkMode from '../../images/proyectos/davidBowie/davidBowieDarkmode.png';
import QueenHome from '../../images/proyectos/Queen/queenHome.png';
import QueenDiscografia from '../../images/proyectos/Queen/queenDiscografia.png';
import QueenCart from '../../images/proyectos/Queen/queenCart.png';
import AyoHome from '../../images/proyectos/ayo/ayoHome.png';
import AyoNoticias from '../../images/proyectos/ayo/ayoNoticias.png';
import AyoResponsive from '../../images/proyectos/ayo/ayoResponsive.png';

import WeatherHome from '../../images/proyectos/weatherReport/portadaAppClima.png';
import WeatherSecond from '../../images/proyectos/weatherReport/appClima1.png';
import WeatherThird from '../../images/proyectos/weatherReport/appClima2.png';

import GithubJobsHome from '../../images/proyectos/githubJobs/portadaGithubJobs.png';
import GithubJobsSecond from '../../images/proyectos/githubJobs/githubJobs1.png';
import GithubJobsThird from '../../images/proyectos/githubJobs/githubJobs2.png';

import AOS from 'aos'
function ProyectDetail(props) {
  const infoProyectos = [
    {
      id: 1,
      claseLink: "davidBowiePage",
      tituloProyecto: "David Bowie Page",
      subTitle:"Proyecto realizado durante mi cursada en CoderHouse en el curso de Desarrollo Web. Esta fue mi primera pagina realizada de manera profesionalmente. Los aspectos que mas rescato de este proyecto son:",
      linkProyecto:"//franco-ezequiel-marchegiani.github.io/David-Bowie-ProyectoFinal/home/index.html",
      imagen1: DavidBowieHome,
      parrafo1: "Proyecto completamente responsive y adaptable a cualquier dispositivo",
      imagen2: DavidBowieDarkMode,
      parrafo2: "Se implemento el modo oscuro el cual tambien afecta y modifica el logo de la pagina",
      imagen3: DavidBowieDiscos,
      parrafo3: "Los productos fueron iterados de un array de productos. Haciendo que sea mas escalable la forma de subir productos. Y optimizar el tamaño de la pagina"
    },
    {
      id: 2,
      claseLink: "queenPage",
      tituloProyecto: "Queen E-commerce",
      subTitle:"Proyecto realizado durante mi transcurso en CoderHouse en el curso de Javascript. Algunas caracteristicas a resaltar de este proyecto son:",
      linkProyecto:"//franco-ezequiel-marchegiani.github.io/proyectoFinalJS/",
      imagen1: QueenHome,
      parrafo1: "Implementacion funcional del carrito de compras",
      imagen2: QueenCart,
      parrafo2: "Al igual que el proyecto de desarrollo Web, Incluye un modo oscuro, el cual tambien afecta a las imagenes y logos en la pagina",
      imagen3: QueenDiscografia,
      parrafo3: "Al igual que en el proyecto de Desarrollo Web, Los productos fueron iterados de un array de productos. Haciendo que sea mas escalable la forma de subir productos. Y optimizar el tamaño de la pagina, ya que es una practica y herramienta muy util y que se aprecia si una pagina fue creada de esa manera o no"
    },
    {
      id: 3,
      claseLink: "ayoPage",
      tituloProyecto: "Proyecto AYO",
      subTitle:"Pagina realizada para la Fundacion AYO a principios del 2020",
      linkProyecto:"//franco-ezequiel-marchegiani.github.io/proyecto-AYO/",
      imagen1: AyoHome,
      parrafo1: "Este fue el primer proyecto en el cual trabaje en equipo, y para una empresa. Si bien puede que a simple vista sea un simple, es un proyecto en el cual trabaje muy duro y el cual me llevo excelentes experiencias del tiempo en el cual cree esta pagina :)",
      imagen2: AyoResponsive,
      parrafo2: "La pagina cuenta con un diseño y estructura la cual le permite ser 100% responsive",
      imagen3: AyoNoticias,
      parrafo3: "Cuenta con mas de 5 ventanas en las cuales se visualiza informacion de la Fundacion :) Y tambien cuenta con acceso a las noticias en la pagina principal, las cuales son noticias verdaderas y cuentan con una pestaña especial para cada una"
    },
    {
      id: 4,
      claseLink: "weatherApp",
      tituloProyecto: "Weather App",
      subTitle:"Página Web para visualizar el clima, Desafío hecho de manera autodidacta de la mano de Dev Challenges",
      linkProyecto:"//github.com/Franco-Ezequiel-Marchegiani/challenge-weatherReport",
      imagen1: WeatherHome,
      parrafo1: "Esta aplicación fue hecha 100% Utilizando React, el diseño y herramientas fueron brindadas por parte de Dev-Challenges. Consiste en hacer un llamado a una API, la cual brinda el clima de diversas localidades en los próximos 5 días.",
      imagen2: WeatherSecond,
      parrafo2: "La misma cuenta con una barra de búsqueda completamente funcional, y según la localidad seleccionada, la información del clima se actualizará en cuestión de segundos :)",
      imagen3: WeatherThird,
      parrafo3: "Por otro lado, como un pequeño detalle, la misma también cuenta con traducción al Inglés, los idiomas que cuenta la página son Español (Default/defecto) e Inglés, el usuario puede preferír el idioma que desee y la página se adaptará al mismo"
    },
    {
      id: 5,
      claseLink: "githubJobs",
      tituloProyecto: "Github Jobs",
      subTitle:"Página Web para búsqueda de trabajo online, Desafío hecho de manera autodidacta de la mano de Dev Challenges",
      linkProyecto:"//github-jobs-proyect.firebaseapp.com",
      imagen1: GithubJobsHome,
      parrafo1: "Esta página se creó utilizando React Js en su funcionamiento, y se utilizó Firebase para subirlo a un servidor, el sketch del diseño fue brindado por Dev-Challenges, el cual me encargué de plasmarlo al código en detalle. La página también realiza un llamado hacia una API para recolectar la información de cada puesto de trabajo.",
      imagen2: GithubJobsSecond,
      parrafo2: "La página consiste en mostrar trabajos disponibles, cuenta con dos barras de búsquedas completamente funcionales, y también un filtro para aquellos trabajos que son Full-Time o de tiempo completo",
      imagen3: GithubJobsThird,
      parrafo3: "También, cuenta con la vista del detalle del puesto de trabajo el cual cuenta en detalle información del puesto, qué requisitos se necesita, los beneficios que incluye, etc. En esta sección es información 100% recolectada de la API la cual utilicé para dicho proyecto"
    },
    {
      id: 6,
      subTitle:"Página Web para búsqueda de trabajo online, Desafío hecho de manera autodidacta de la mano de Dev Challenges",
      linkProyecto:"//github-jobs-proyect.firebaseapp.com",
      imagen1: GithubJobsHome,
      parrafo1: "Esta página se creó utilizando React Js en su funcionamiento, y se utilizó Firebase para subirlo a un servidor, el sketch del diseño fue brindado por Dev-Challenges, el cual me encargué de plasmarlo al código en detalle. La página también realiza un llamado hacia una API para recolectar la información de cada puesto de trabajo.",
      imagen2: GithubJobsSecond,
      parrafo2: "La página consiste en mostrar trabajos disponibles, cuenta con dos barras de búsquedas completamente funcionales, y también un filtro para aquellos trabajos que son Full-Time o de tiempo completo",
      imagen3: GithubJobsThird,
      parrafo3: "También, cuenta con la vista del detalle del puesto de trabajo el cual cuenta en detalle información del puesto, qué requisitos se necesita, los beneficios que incluye, etc. En esta sección es información 100% recolectada de la API la cual utilicé para dicho proyecto"
    }
  ]
  AOS.init()
    //Permite extraer id de la URL
    const params = useParams();
    const id = Number(params.id);

    //Colocar acá Array completo de los Proyectos
    let proyectoSeleccionado = infoProyectos.find(proyecto => proyecto.id === id)
  return (
    <section className='proyectDetailContainer'>
      <div className='contenedorTitulosProyectDetail' data-aos="zoom-in" data-aos-duration="1500">
      <h1>{proyectoSeleccionado.tituloProyecto}</h1>
      <h2>{proyectoSeleccionado.subTitle}</h2>
      </div>
      <ProyectDetailContent claseContenedora="bloquePrincipalProyectDetail bloqueProyectDetail" claseParrafo="parrafoPrincipalProyectDetail parrafoProyectDetail" claseImage="imagenPrincipalProyectDetail imagenProyectDetail" imagen={proyectoSeleccionado.imagen1} texto={proyectoSeleccionado.parrafo1} animation="fade-up" duracionAnimacion="1500"/>
      <ProyectDetailContent claseContenedora="segundoBloqueProyectDetail bloqueProyectDetail" claseParrafo="segundoParrafoProyectDetail parrafoProyectDetail" claseImage="segundaImagenProyectDetail imagenProyectDetail" imagen={proyectoSeleccionado.imagen2} texto={proyectoSeleccionado.parrafo2} animation="fade-right" duracionAnimacion="2000"/>
      <ProyectDetailContent claseContenedora="tercerBloqueProyectDetail bloqueProyectDetail" claseParrafo="tercerParrafoProyectDetail parrafoProyectDetail" claseImage="terceraImagenProyectDetail imagenProyectDetail" imagen={proyectoSeleccionado.imagen3} texto={proyectoSeleccionado.parrafo3} animation="fade-left" duracionAnimacion="2000"/>
      <Link target="_blank" to={proyectoSeleccionado.linkProyecto} className='linkProyectDetail'>Ver página completa</Link>
    </section>
  );
}

export default ProyectDetail;