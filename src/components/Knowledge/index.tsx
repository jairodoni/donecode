'use client'
import { FaCss3Alt, FaHtml5, FaReact } from 'react-icons/fa6'
import { IoLogoJavascript } from 'react-icons/io5'
import { Stack } from './Stack/Stack'
import styles from './styles.module.scss'
import { useState } from 'react'
import {
  SiNextdotjs,
  SiReact,
  SiStyledcomponents,
  SiTypescript,
} from 'react-icons/si'
import { BiLogoSass } from 'react-icons/bi'

interface StackDescription {
  title: string | null
  description: string
}

export function Knowledge() {
  const [currentStack, setCurrentStack] = useState<string>('')
  const [stackDescription, setStackDescription] = useState<StackDescription>({
    title: null,
    description: '*passe o cursor do mouse no card para ler*',
  })

  function onCurrentStack(stack: string) {
    if (stack !== currentStack) {
      switch (stack) {
        case 'React':
          setCurrentStack(stack)
          setStackDescription({
            title: 'React',
            description:
              'React é uma biblioteca para web e interfaces de usuário nativas. O React permite que você crie interfaces de usuário a partir de peças individuais chamadas de componentes.',
          })
          break
        case 'React Native':
          setCurrentStack(stack)
          setStackDescription({
            title: 'React Native',
            description:
              'React Native é um framework baseado em React para desenvolvimento de aplicativos para Android e IOS. React Native combina as melhores partes do desenvolvimento nativo com React, a melhor biblioteca JavaScript da categoria para construção de interfaces de usuário.',
          })
          break
        case 'Next.js':
          setCurrentStack(stack)
          setStackDescription({
            title: 'Next.js',
            description:
              'Next.js é um framework baseado em React para construir aplicativos web full-stack. Você usa React Components para construir interfaces de usuário e Next.js para recursos e otimizações adicionais.',
          })
          break
        case 'HTML5':
          setCurrentStack(stack)
          setStackDescription({
            title: 'HTML5',
            description:
              'HTML5 (Hypertext Markup Language, versão 5) é uma linguagem de marcação para a World Wide Web e é uma tecnologia chave da Internet, originalmente proposto por Opera Software.',
          })
          break
        case 'Typescript':
          setCurrentStack(stack)
          setStackDescription({
            title: 'Typescript',
            description:
              'TypeScript é uma linguagem de programação fortemente tipada que se baseia em JavaScript, oferecendo melhores ferramentas em qualquer escala.',
          })
          break
        case 'Javascript':
          setCurrentStack(stack)
          setStackDescription({
            title: 'Javascript',
            description:
              'JavaScript® (às vezes abreviado para JS) é uma linguagem leve, multi-paradigma e dinâmica, suportando estilos de orientação a objetos, imperativos e declarativos.',
          })
          break
        case 'CSS3':
          setCurrentStack(stack)
          setStackDescription({
            title: 'CSS3',
            description:
              'CSS (Cascading Style Sheets ou Folhas de Estilo em Cascata) é uma linguagem de estilo, é uma das principais linguagens da open web e é padronizada em navegadores web de acordo com as especificação da W3C.',
          })
          break
        case 'SASS':
          setCurrentStack(stack)
          setStackDescription({
            title: 'SASS',
            description:
              'O SASS é uma linguagem de extensão do CSS, a sigla significa “Syntactically Awesome Style Sheets” traduzindo ao pé da letra, folhas de estilo com uma sintaxe incrível. Ele permite que você use recursos especiais como variáveis, mixins, funções e operações e muito mais, tudo com uma sintaxe totalmente compatível com CSS.',
          })
          break
        case 'Styled Components':
          setCurrentStack(stack)
          setStackDescription({
            title: 'Styled Components',
            description:
              'O Styled Components é uma biblioteca poderosa para estilização de componentes em aplicações React. De modo geral, trata-se de uma biblioteca para escrever códigos CSS dentro do JavaScript (CSS-in-JS).',
          })
          break
        default:
          setStackDescription({
            title: null,
            description: '*passe o cursor do mouse no card para ler*',
          })
      }
    }
  }

  return (
    <section id="stacks" className={styles.container}>
      <h3>Conhecimentos</h3>
      <div>
        <div className={styles.descriptionStack}>
          {stackDescription.title && <h4>{stackDescription.title}</h4>}
          <p>{stackDescription.description}</p>
        </div>
        <div className={styles.stacks}>
          <Stack onCurrentStack={onCurrentStack} stack="React">
            <FaReact size={80} />
          </Stack>
          <Stack onCurrentStack={onCurrentStack} stack="React Native">
            <SiReact size={80} />
          </Stack>
          <Stack onCurrentStack={onCurrentStack} stack="Next.js">
            <SiNextdotjs size={80} />
          </Stack>
          <Stack onCurrentStack={onCurrentStack} stack="HTML5">
            <FaHtml5 size={80} />
          </Stack>
          <Stack onCurrentStack={onCurrentStack} stack="Typescript">
            <SiTypescript size={70} />
          </Stack>
          <Stack onCurrentStack={onCurrentStack} stack="Javascript">
            <IoLogoJavascript size={80} />
          </Stack>
          <Stack onCurrentStack={onCurrentStack} stack="CSS3">
            <FaCss3Alt size={80} />
          </Stack>
          <Stack onCurrentStack={onCurrentStack} stack="SASS">
            <BiLogoSass size={80} />
          </Stack>
          <Stack onCurrentStack={onCurrentStack} stack="Styled Components">
            <SiStyledcomponents size={80} />
          </Stack>
        </div>
      </div>
    </section>
  )
}
