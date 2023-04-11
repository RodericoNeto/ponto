import React from 'react'
import MenuIcon from "@mui/icons-material/Menu";


export default function Header(props) {


  return (
    <>
        <div className='header-container'>
            <div className='header-logo'>Logo</div>
            <button className='header-menu-icon' onClick={props.changeModalStatus}>
              <MenuIcon/>
            </button>
            {/* <nav className='header-nav'>
                <ul>
                    <li><a href="#quemsomos">Quem somos</a></li>
                    <li><a href="#projetos">Projetos</a></li>
                    <li><a href="#contato">Contato</a></li>
                    <li><a href="#depoimentos">Depoimentos</a></li>
                </ul>
            </nav> */}
        </div>
    </>
  )
}
