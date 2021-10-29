import styles from './styles.module.scss'

export function Curriculum() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h1>
          Jairo Doni
        </h1>
        <h2>Desenvolvedor Frontend</h2>
        <hr />
        <h3>Sobre Mim</h3>
        <p>
          Sou Programador Frontend e estou determinado a aprender cada vez mais para me tornar um
          profissional exemplar. Ganhei muito conhecimento durante meu tempo na faculdade onde
          me Graduei em Engenharia de Software, aprendi a trabalhar em equipe no
          Labsoft (hoje conhecido como SoftJr), fiz muitas amizades que mantenho até hoje.
          Procuro trabalhar no desenvolvimento de softwares a fim de me aprimorar profissionalmente
          e procurar desenvolver soluções inovadoras.
        </p>
        <h3>Experiencia com:</h3>
        {/* <div>
          <label>Linguagens:</label>
          <p>HTML, Javascript (Typescript, ReactJS, Next.js, React Native, Node.js), CSS (SASS, Styled Component), Jest.</p>
        </div> */}
        <div >
          <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
          <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&&logo=typescript&logoColor=white" />
          <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&&logo=react&logoColor=61DAFB" />
          <img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
          <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" />
          <img src="https://img.shields.io/badge/-HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
          <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
          <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" />
          <img src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white" />
        </div>

        <div>
          <label>Banco de Dados:</label>
          <p>MySQL, SQLite, MongoDB.</p>
        </div>
        <div>
          <label>Ferramentas:</label>
          <p>Git, Axios, Visual Studio Code, Bootstrap, Material UI, Chakra UI, Figma, Adobe XD, Photoshop.</p>
        </div>
        <a className={styles.button} href="#">Ver Curriculo Completo</a>
      </div>

      {/* <div className={styles.photo}>
        <img src="https://images.unsplash.com/photo-1611530437165-1a02c8d44532?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=627&q=80" alt="Photo" />
      </div> */}
    </div>
  )
}