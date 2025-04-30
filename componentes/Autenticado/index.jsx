export default function Hello({autenticado}) {
  return (
    <>
      {autenticado && <h1>Olá, Canalha autenticado!</h1>}
    </>
  )
}