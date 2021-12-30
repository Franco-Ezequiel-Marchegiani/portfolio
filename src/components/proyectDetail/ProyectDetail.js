import React from 'react';
import { useParams } from 'react-router-dom';
import './ProyectDetail.css';
import DavidBowieHome from '../../images/proyectos/davidBowie/davidBowieHome.png'
import DavidBowieDiscos from '../../images/proyectos/davidBowie/davidBowieDiscos.png'
import DavidBowieDarkMode from '../../images/proyectos/davidBowie/davidBowieDarkmode.png'
import QueenHome from '../../images/proyectos/Queen/queenHome.png'
import QueenDiscografia from '../../images/proyectos/Queen/queenDiscografia.png'
import QueenCart from '../../images/proyectos/Queen/queenCart.png'
import AyoHome from '../../images/proyectos/ayo/ayoHome.png'
import AyoNoticias from '../../images/proyectos/ayo/ayoNoticias.png'
import AyoResponsive from '../../images/proyectos/ayo/ayoResponsive.png'
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
    /* {
      id: 4,
      ituloProyecto: "AYO",
      subTitle:"",
      linkProyecto:"",
      imagen1: "",
      parrafo1: "",
      imagen2: "",
      parrafo2: "",
      imagen3: "",
      parrafo3: ""
    }, */
  ]
    //Permite extraer id de la URL
    const params = useParams();
    const id = Number(params.id);

    //Colocar acá Array completo de los productos

    let proyectoSeleccionado = infoProyectos.find(proyecto => proyecto.id === id)
    console.log(proyectoSeleccionado);
  return (
    <section className="">
    <h1>Hola</h1>
    <h2>{proyectoSeleccionado.tituloProyecto}</h2>
    </section>
  );
}

export default ProyectDetail;