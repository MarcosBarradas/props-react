export default function VerificaEstudante({ estuda }) {
  return (
    <>
      {estuda > true ? 
        <h1>Você é estudante</h1>
       : 
        <h1>Você não é estudante</h1>
      }
    </>
  )
}