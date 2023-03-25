import dynamic from 'next/dynamic'
import Hero from './Hero'
import Docs from './Docs'
const DocsFrontEnd = dynamic(() => import('./DocsFrontEnd'))
const DocsBackEnd = dynamic(() => import('./DocsBackEnd'))
const DocsLinux = dynamic(() => import('./DocsLinux'))
const DocsDesign = dynamic(() => import('./DocsDesign'))

export default function Home() {
  return (
    <>
      <Hero />
      <Docs />
      <DocsFrontEnd />
      <DocsBackEnd />
      <DocsLinux />
      <DocsDesign />
    </>
  )
}
