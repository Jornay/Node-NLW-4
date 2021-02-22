
//UUID = Universally Unique Identifier


//EM JS
//-----
//function enviarEmail(para, id, assunto, texto){
//    //Biblioteca de envio de email
//
//    console.log(para, id, assunto, texto);
//}
//
//class EnviarEmailUsuario{
//    send(){
//        enviarEmail("jorgeHenrique@gmail.com", 9899, "O LENDÁRIO TESTE", "Testado");
//    }
//}
//---------
//EM TS
//-----

interface DadosDeEnvioEmail{
    para: String,
    id: String,
    assunto:String,
    texto: String,
}


//------------------------------Function--------------------------------
//Estruturado-----------------------------
    //function enviarEmail(dados: DadosDeEnvioEmail){
    //    console.log(dados.para, dados.id, dados.assunto, dados.texto);
    //}
//Estruturado-----------------------------

//Desestruturado-----------------------------
    function enviarEmail({para, id, assunto, texto}: DadosDeEnvioEmail){
        console.log(para, id, assunto, texto);
    }
//Desestruturado-----------------------------
//------------------------------Function--------------------------------

class EnviarEmailUsuario{
    send(){
        enviarEmail({
            para: "jorgeHenrique@gmail.com", 
            id:"9899", 
            assunto: "O LENDÁRIO TESTE", 
            texto: "Testado"
        });
    }
}


//
//A grande diferença é a facilidade que o TypeScript oferece sendo Tipada.