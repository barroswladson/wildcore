import { useRouter } from "next/navigation";

export default function CardModal (props){
    const router = useRouter();
    return(
        <div className="w-screen h-screen bg-black/65 absolute flex items-center justify-end content-center justify-center p-2" onClick={
            (event)=>{
                console.log(event.target);
                console.log(event.currentTarget);

                if(event.target == event.currentTarget){
                    router.push("/");
                }
            }
        }>
            <div className="h-full w-[50vh] bg-white text-black rounded-md">
            <form className="" 
                onSubmit={async (e)=>{
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
                <label>Imagem da Carta</label>
                <div>
                    <label className="">Carta</label>
                    <input className="" type="file" name="imagem"/>
                    <input type="submit"/>
                </div>
                {status && <h1>{status}</h1>}
            </form>
            </div>
        </div>
    );    
}