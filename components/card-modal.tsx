import { useRouter } from "next/navigation";
import Card from "./card";
import { useState } from "react";

export default function CardModal (props){
    const [status,setStatus]=useState("");
    const [name,setName]=useState("");
    const [atk,setAtk]=useState(0);
    const [life,setLife]=useState(0);
    const [descricao,setDescricao]=useState("");
    const [tipo,setTipo]=useState("");
    const [imagem, setImagem]= useState("");

    const router = useRouter();

    const submitHandler = async (e)=>{
        e.preventDefault();
        const formulario =  new FormData(e.target);
        const formImagem = formulario.get("imagem");

        if(!formImagem || formImagem.size === 0){
            setStatus("Arquivo não encontrado");
            return;
        }
        else{
            setStatus("Iniciando");
        }

        try{
            const res = await fetch("http://localhost:3333/card/criar",{
                method:"POST",
                body: formulario
            });

            if(res.ok){
                setStatus("Enviado");
            }
            else{
                setStatus("ERRO!");
            };
        }
        catch(e){
            setStatus("ERRO: " + e);
        }
    };

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
            <div className="h-full w-[50vh] bg-white text-zinc-900 rounded-md">
                <form className="h-full" onSubmit={submitHandler}>
                    <div className="flex flex-col gap-4 p-4 h-full overflow-auto">
                        <div className="text-center w-full font-bold">
                            <h1>Criar sua Carta</h1>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-zinc-500" >Nome</label>

                            <input name="nome" type="text" placeholder="Insira um Nome" 
                            className="border border-zinc-300 rounded-xl p-2 placeholder-black" value={name} onChange={(e)=>{
                                setName(e.target.value)
                            }}/>
                        </div>
                
                        <div className="flex gap-3 justify-between">
                            
                            <div>
                                <label className="text-zinc-500">ATK</label>
                                <input name="atk" type="number" className="border border-zinc-300 rounded-xl p-2 placeholder-black w-full"
                                    value={atk} onChange={(e)=>{
                                        setAtk(e.target.value)}} 
                                />
                            </div>

                            <div>
                                <label className="text-zinc-500">Life</label>
                                <input name="life" type="number" className="border border-zinc-300 rounded-xl p-2 placeholder-black w-full"
                                    value={life} onChange={(e)=>{
                                        setLife(e.target.value)}}
                                />
                            </div>
                        </div>
                        <div  className="flex justify-between flex-col">
                            <label className="text-zinc-500">Tipo</label>
                            <input name="tipo" type="text" className=" border border-zinc-300 rounded-xl p-2" value={tipo}
                                onChange={(e)=>{
                                    setTipo(e.target.value)}}
                            />
                        </div>
                        
                        <div  className="flex justify-between flex-col">
                            <label className="text-zinc-500">Descrição</label>
                            <textarea name="descricao" className="border border-zinc-300 rounded-xl p-2" value={descricao}
                                onChange={(e)=>{
                                    setDescricao(e.target.value)}}
                            />
                                
                        </div>
                        <div>
                            <label className="text-zinc-500">Arte da carta</label>
                            <input  className="w-full border border-zinc-300 rounded-xl px-4 py-2" type="file" name="imagem"
                            onChange={(e)=>{
                                const arquivo = e.target.files[0];
                                if(arquivo){
                                    const url = URL.createObjectURL(arquivo);
                                    setImagem(url);
                                }
                            }}/>
                        </div>

                        <Card  nome={name} life={life} atk={atk} descricao={descricao} tipo={tipo} imagem={imagem}></Card>
                        <div>
                            <p>{status}</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <input name="submit" type="submit" className="bg-lime-500 rounded-full w-3/10"/>
                        </div>
                    </div>
                    {status && <h1>{status}</h1>}
                </form>
            </div>
        </div>
    );    
}