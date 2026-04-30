export default function CardModal (props){
    return(
        <div className="w-screen h-screen bg-black/65 absolute flex items-center content-center justify-center ">
            <div className="h-auto w-[50vh] bg-white text-black">
            <form onSubmit={async (e)=>{
                e.preventDefault();
                const formulario =  new FormData(e.target);
                const imagem = formulario.get("imagem");
                if(!imagem || imagem.size === 0){
                    props.setStatus("Arquivo não encontrado");
                }
                else{
                    props.setStatus("Iniciando")
                }
                try{
                const res = await fetch("http://localhost:3333/api/assets/upload",{
                    method:"POST",
                    body:formulario
                });
                if(res.ok){
                    props.setStatus("Enviado");
                }
                else{
                    props.setStatus("ERRO!");
                };
                }
                catch(e){
                    props.setStatus("ERRO!!");
                }
            }}>
                <label>card</label>
                <input type="file" name="imagem"/>
                <input type="submit"/>
                {status && <h1>{status}</h1>}
            </form>
            </div>
        </div>
    );    
}