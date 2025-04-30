export default function Nota({nota}) {
  return (
    <>
    
      {nota > 89 ? <h1>Aprovado com louvor!</h1> : nota > 69 ? <h1>Aprovado!</h1> : <h1>Reprovado!</h1>} 
    </>
  )
}