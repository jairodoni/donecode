import { useProfile } from '../../hooks/useProfile'
import { Perfil } from './Perfil'
import styles from './styles.module.scss'

export function AboutMe() {
  const { user } = useProfile()

  return (
    <section id="about_me" className={styles.container}>
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
          <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&&logo=typescript&logoColor=white" alt="typescript" />
          <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="javascript" />
          <img src="https://img.shields.io/badge/-HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="html5" />
          <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="css3" />
          
        </div>

        <label>Frameworks e recursos:</label>
        <div className={styles.skills}>
          <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&&logo=react&logoColor=61DAFB" alt="react" />
          <img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="react native" />
          <img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="next.js" />
          <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="sass" />
          <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" alt="styled component" />
          <img src="https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white" alt="material" />
          <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" alt="bootstrap" />
          <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="node" />
        </div>

        {/* <label>Bancos de Dados:</label>
        <div className={styles.skills}>
        <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="mongodb" />
        <img src="https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white" alt="sqlite" />
        <img src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white" alt="mysql" />
      </div> */}

        <label>Ferramentas:</label>
        <div className={styles.skills}>
          <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="git" />
          <img src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white" alt="visual studio code" />
          <img src="https://img.shields.io/badge/App_Center-DC2D68?style=for-the-badge&logoColor=white" alt="appcenter" />
          <img src="https://img.shields.io/badge/jira-%230A0FFF.svg?style=for-the-badge&logo=jira&logoColor=white" alt="jira" />
          
          {/* <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" alt="bootstrap" /> */}
          {/* <img src="https://img.shields.io/badge/Adobe%20XD-470137?style=for-the-badge&logo=Adobe%20XD&logoColor=#FF61F6" alt="bootstrap" /> */}
          {/* <img src="https://img.shields.io/badge/Adobe%20Photoshop-31A8FF?style=for-the-badge&logo=Adobe%20Photoshop&logoColor=black" alt="bootstrap" /> */}

        </div>
        <a
          className={styles.button}
          href={user.resume}
          target="_blank"
        >
          Ver Curriculo Completo
        </a>
      </div>
    </section>
  )
}