import { useState } from 'react'
import { useProfile } from '../../hooks/useProfile'
import data from '../../services/data.json'
import { Perfil } from './Perfil'
import styles from './styles.module.scss'

interface User {
  name: string;
  avatar: string;
  office: string;
  description: string;
}

export function Resume() {
  const { user } = useProfile()

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <Perfil
          name={user.name}
          office={user.office}
          avatar={user.avatar}
        />
        <hr />
        <h3>Sobre Mim</h3>
        <p>{user.description}</p>
        <h3>Experiencia com:</h3>
        <label>Linguagens:</label>

        <div className={styles.skills}>
          <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="javascript" />
          <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&&logo=typescript&logoColor=white" alt="typescript" />
          <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&&logo=react&logoColor=61DAFB" alt="react" />
          <img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="react native" />
          <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="node" />
          <img src="https://img.shields.io/badge/-HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="html5" />
          <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="css3" />
          <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="sass" />
          <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" alt="styled component" />
        </div>


        <label>Bancos de Dados:</label>
        <div className={styles.skills}>
          <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="mongodb" />
          <img src="https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white" alt="sqlite" />
          <img src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white" alt="mysql" />
        </div>

        <label>Ferramentas:</label>
        <div className={styles.skills}>
          <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="git" />
          <img src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white" alt="visual studio code" />
          <img src="https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white" alt="bootstrap" />
          <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" alt="bootstrap" />
          <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" alt="bootstrap" />
          <img src="https://img.shields.io/badge/Adobe%20XD-470137?style=for-the-badge&logo=Adobe%20XD&logoColor=#FF61F6" alt="bootstrap" />
          <img src="https://img.shields.io/badge/Adobe%20Photoshop-31A8FF?style=for-the-badge&logo=Adobe%20Photoshop&logoColor=black" alt="bootstrap" />

        </div>
        <a className={styles.button} href="#">Ver Curriculo Completo</a>
      </div>
    </div>
  )
}