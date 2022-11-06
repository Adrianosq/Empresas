import { menuResponsivo } from "./menuResponsivo.js";
import { cadastrarPage, loginPage } from "./redirecionar.js";
import { homePageAllEmpresas, homePageFilter } from "./render.js";
import { getAllEmpresas } from "./request.js";


menuResponsivo()
loginPage()
cadastrarPage()
const data = await getAllEmpresas()
homePageAllEmpresas(data)
homePageFilter()