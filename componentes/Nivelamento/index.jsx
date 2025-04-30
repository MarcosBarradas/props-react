export default function Nivelamento({children}) {
  const nivelamento = children.toUpperCase();
  return (
    <>
      {nivelamento === 'INICIANTE' ? <h1>Bem-vindo ao nivelamento iniciante</h1> : nivelamento === 'INTERMEDIÁRIO' ? <h1>Bem-vindo ao nivelamento intermediário</h1> : nivelamento === 'AVANÇADO' ? <h1>Bem-vindo ao nivelamento avançado</h1> : <h1>Nivelamento não encontrado</h1>}
    </>
  )
}