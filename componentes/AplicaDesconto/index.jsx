export default function AplicaDesconto({desconto}) {
  return (
    <>
      {desconto ? <h1>tem desconto</h1> : <h1>não tem desconto</h1>} 
    </>
  )
}