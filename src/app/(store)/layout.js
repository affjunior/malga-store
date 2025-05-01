import Header from '@/components/Header'

export default function LayoutStore({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
