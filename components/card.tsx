import Image from "next/image";

export default function Card() {
    return(
        <div className=" aspect-9/12 h-full bg-emerald-600/80  flex flex-col items-center">

            <div className=" w-9/10 h-1/10 bg-white/50">
                <h1>Nome</h1>
            </div>

            <div className=" w-9/10 h-5/10 bg-red-400/50">
                <img src="http://localhost:3333/api/assets/download/cyberpunk-poster-illustration.webp" alt="Imagem da carta"
                className="h-full w-full object-cover"/>
            </div>
            
            <div className=" w-9/10 h-1/10 bg-white/50">
                <h1>descrição</h1>
            </div>

            <div className=" w-9/10 h-3/10 bg-red-400/50">
            </div>
            
        </div>
    );
}