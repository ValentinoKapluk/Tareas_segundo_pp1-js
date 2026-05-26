/* ARRAY */
const usuarios = [{"id":1,"first_name":"Jolynn","last_name":"Geeraert","bank":"Teachers' Union Of Ireland Credit Union Limited","city":"Presidencia Roque Sáenz Peña","country":"Argentina","salary":4762,"expenses":2535},
{"id":2,"first_name":"Erminia","last_name":"BURWIN","bank":"RENASANT BANK","city":"Elliot","country":"South Africa","salary":7849,"expenses":8860},
{"id":3,"first_name":"Sadie","last_name":"Medina","bank":"TBI BANK EAD SOFIA - SUCURSALA BUCURESTI","city":"Serhetabat","country":"Turkmenistan","salary":9744,"expenses":8051},
{"id":4,"first_name":"Gayle","last_name":"Botterill","bank":"BANK OF INDIA","city":"Presidencia Roque Sáenz Peña","country":"Argentina","salary":4719,"expenses":6195},
{"id":5,"first_name":"Angele","last_name":"Cray","bank":"Stellantis Financial Services Europe","city":"Cesson","country":"France","salary":6296,"expenses":3565},
{"id":6,"first_name":"Wain","last_name":"Dowsey","bank":"REGIONS BANK","city":"Hallstavik","country":"Sweden","salary":5977,"expenses":6041},
{"id":7,"first_name":"Cathie","last_name":"Breddy","bank":"BANK OF AMERICA","city":"Chunyang","country":"China","salary":8600,"expenses":4476},
{"id":8,"first_name":"Celeste","last_name":"Rolinson","bank":"BANK OF AMERICA","city":"København","country":"Denmark","salary":4059,"expenses":9047},
{"id":9,"first_name":"Alethea","last_name":"Zannolli","bank":"Cooperative Bank of Karditsa Coop. L.L.","city":"Pag","country":"Croatia","salary":7393,"expenses":5722},
{"id":10,"first_name":"Moishe","last_name":"Rollett","bank":"LBS Landesbausparkasse Süd","city":"Nasavrky","country":"Czech Republic","salary":9669,"expenses":2454},
{"id":11,"first_name":"Nathalia","last_name":"Torbett","bank":"Société Générale Capital Market Finance S.A.","city":"Karangsono","country":"Indonesia","salary":6800,"expenses":2791},
{"id":12,"first_name":"Beau","last_name":"Doldon","bank":"REGIONS BANK","city":"Oubei","country":"China","salary":9908,"expenses":3588},
{"id":13,"first_name":"Jenica","last_name":"Baxstar","bank":"PROSPERITY BANK","city":"Gongpo","country":"China","salary":5749,"expenses":6843},
{"id":14,"first_name":"Grover","last_name":"Seamer","bank":"WELLS FARGO BANK","city":"Pueblo Viejo","country":"Panama","salary":3570,"expenses":7727},
{"id":15,"first_name":"Lottie","last_name":"Clemont","bank":"Volksbank Geest eG","city":"Atlanta","country":"United States","salary":4951,"expenses":8572},
{"id":16,"first_name":"Sig","last_name":"Whelpton","bank":"Caja Rural de Casas Ibáñez, S. Coop. de Crédito de Castilla-La Mancha","city":"Yumbe","country":"Uganda","salary":5656,"expenses":7180},
{"id":17,"first_name":"Hestia","last_name":"Portail","bank":"PEOPLES BANK","city":"Urachiche","country":"Venezuela","salary":4164,"expenses":8449},
{"id":18,"first_name":"Erma","last_name":"Woolsey","bank":"BANCA NAZIONALE DEL LAVORO S.P.A. (IN FORMA CONTRATTA BNL S.P.A.)","city":"Kudanding","country":"Philippines","salary":4893,"expenses":5879},
{"id":19,"first_name":"Mayer","last_name":"Stendall","bank":"Caisse régionale de crédit agricole mutuel du Centre Ouest","city":"Amphoe Sikhiu","country":"Thailand","salary":3209,"expenses":6381},
{"id":20,"first_name":"Jaime","last_name":"Proudlock","bank":"COMMUNITY FIRST BANK","city":"Hugang","country":"China","salary":8283,"expenses":5890},
{"id":21,"first_name":"Irina","last_name":"Wrankling","bank":"BANK OF AMERICA","city":"Abua","country":"Nigeria","salary":5609,"expenses":3113},
{"id":22,"first_name":"Lita","last_name":"Trassler","bank":"KEYBANK","city":"Sindanghayu","country":"Indonesia","salary":3879,"expenses":8324},
{"id":23,"first_name":"Alphonso","last_name":"Bracchi","bank":"First South Credit Union Limited","city":"Bundoc","country":"Philippines","salary":7535,"expenses":4890},
{"id":24,"first_name":"Sheeree","last_name":"Abraham","bank":"Bezirkssparkasse Reichenau","city":"El Calvario","country":"Mexico","salary":9130,"expenses":4389},
{"id":25,"first_name":"Hanan","last_name":"Hoyles","bank":"BMO HARRIS BANK","city":"Situ","country":"China","salary":8422,"expenses":5887},
{"id":26,"first_name":"Adrien","last_name":"Goodlad","bank":"BANCO BPM SOCIETA' PER AZIONI","city":"Bác Ái","country":"Vietnam","salary":5779,"expenses":3948},
{"id":27,"first_name":"Arleen","last_name":"Gerdts","bank":"USALLIANCE FEDERAL CREDIT UNION","city":"Trang","country":"Thailand","salary":5543,"expenses":8217},
{"id":28,"first_name":"Ransom","last_name":"Shaughnessy","bank":"FIRST STATE BANK","city":"Nakajah","country":"Indonesia","salary":9643,"expenses":7726},
{"id":29,"first_name":"Wesley","last_name":"Henken","bank":"MUFG UNION BANK","city":"Kosino","country":"Russia","salary":6136,"expenses":8613},
{"id":30,"first_name":"Donnell","last_name":"McKinnon","bank":"de Volksbank N.V.","city":"Pidvynohradiv","country":"Ukraine","salary":9959,"expenses":3524},
{"id":31,"first_name":"Guthry","last_name":"Kensington","bank":"Sparda-Bank Hannover eingetragene Genossenschaft","city":"Rancho Nuevo","country":"Mexico","salary":7934,"expenses":2879},
{"id":32,"first_name":"Camala","last_name":"MacAloren","bank":"PIONEER BANK, SSB","city":"Montecarlo","country":"Argentina","salary":8500,"expenses":2338},
{"id":33,"first_name":"Odo","last_name":"Clinkard","bank":"Salzburger Sparkasse Bank Aktiengesellschaft","city":"Lagarto","country":"Brazil","salary":8513,"expenses":3949},
{"id":34,"first_name":"Joline","last_name":"Vernau","bank":"GREAT WESTERN BANK","city":"Suhong","country":"China","salary":6256,"expenses":9797},
{"id":35,"first_name":"Elli","last_name":"Levinge","bank":"VR PLUS Altmark-Wendland eG","city":"Mayma","country":"Russia","salary":8833,"expenses":3973},
{"id":36,"first_name":"Roy","last_name":"Suche","bank":"BMO HARRIS BANK","city":"Knežica","country":"Bosnia and Herzegovina","salary":3577,"expenses":8535},
{"id":37,"first_name":"Rozanna","last_name":"Godin","bank":"FIRST STATE BANK","city":"Potongan","country":"Indonesia","salary":9380,"expenses":6786},
{"id":38,"first_name":"Elisha","last_name":"Walak","bank":"CITIBANK WEST","city":"Eha Amufu","country":"Nigeria","salary":8682,"expenses":2254},
{"id":39,"first_name":"Torrie","last_name":"Pybus","bank":"Volksbank Raiffeisenbank Meißen Großenhain eG","city":"Washington","country":"United States","salary":5635,"expenses":9539},
{"id":40,"first_name":"Kellyann","last_name":"Koppke","bank":"Volksbank in Schaumburg und Nienburg eG","city":"El Playón","country":"Colombia","salary":8575,"expenses":5883},
{"id":41,"first_name":"Son","last_name":"Stephen","bank":"MLP Banking AG","city":"Kertahayu","country":"Indonesia","salary":8596,"expenses":7416},
{"id":42,"first_name":"Lesly","last_name":"Prodrick","bank":"BANCA DI FILOTTRANO - CREDITO COOPERATIVO DI FILOTTRANO E CAMERANO - SOCIETA' COOPERATIVA","city":"Centenary","country":"Zimbabwe","salary":5117,"expenses":8978},
{"id":43,"first_name":"Angelina","last_name":"Euesden","bank":"CAPITAL ONE","city":"Pavlovka","country":"Russia","salary":9024,"expenses":7712},
{"id":44,"first_name":"Tobin","last_name":"Snoddin","bank":"Volksbank Lüneburger Heide eG","city":"Pedro Leopoldo","country":"Brazil","salary":3719,"expenses":9151},
{"id":45,"first_name":"Milka","last_name":"Lawlings","bank":"BANCA VALSABBINA SOCIETA' COOPERATIVA PER AZIONI (IN BREVE LA VALSABBINA)","city":"Mamuša","country":"Kosovo","salary":9850,"expenses":2509},
{"id":46,"first_name":"Ewen","last_name":"O'Dempsey","bank":"SECURITY STATE BANK","city":"Aix-en-Provence","country":"France","salary":9650,"expenses":4968},
{"id":47,"first_name":"Ulrike","last_name":"Gravatt","bank":"ABN AMRO Bank N.V.","city":"Changgang","country":"China","salary":5241,"expenses":5832},
{"id":48,"first_name":"Lise","last_name":"Innman","bank":"SIMMONS FIRST NATL BK","city":"Yitang","country":"China","salary":3021,"expenses":9679},
{"id":49,"first_name":"Bax","last_name":"Hourstan","bank":"Raiffeisenbank Wels eGen","city":"Tournai","country":"Belgium","salary":3858,"expenses":8349},
{"id":50,"first_name":"Brandie","last_name":"Maciaszek","bank":"Raiffeisen Bank International AG","city":"Bejucal","country":"Cuba","salary":9859,"expenses":8531}]


/* FUNCIONES */
function calcularAhorro(salary, expenses) {
    let ahorro = salary - expenses;
    if (ahorro < 0) {
        ahorro = 0
    }
    return ahorro
};

function balanceMensual(id_usuario) {/* Aca no sabia si era por id o por nombre, asi que lo hice por id */
    let contador = 0;
    let usuario_encontrado
    let usuario_buscado = usuarios.find((usuario) => {
    if (usuario.id == id_usuario) {
        usuario_encontrado = usuario
    } else {
        contador = contador + 1
    }
   });
   if (contador < usuarios.length) {
        const nombre_completo = usuario_encontrado.first_name + usuario_encontrado.last_name;
        const banco = usuario_encontrado.bank;
        const ahorro = calcularAhorro(usuario_encontrado.salary, usuario_encontrado.expenses);
        resultado = {
            "nombre":nombre_completo,
            "banco":banco,
            "ahorro":ahorro
        }
        return resultado;
   } else {
    return "Error, no hay usuarios con ese id"
   }
};


function clasificacion_financiera(lista_usuarios) {
    const resultado_final = []
    lista_usuarios.forEach(usuario => {
        let ahorro_usuario = calcularAhorro(usuario.salary, usuario.expenses)
        let clasificacion
        ahorro_usuario < 500 ?
            clasificacion = "Ahorro bajo" : ahorro_usuario >= 500 && ahorro_usuario < 1500 ?
            clasificacion = "Ahorro medio": ahorro_usuario >= 1500 ?
            clasificacion = "Ahorro alto": "error";
        let resultado_usuario = {
            "nombre":usuario.first_name,
            "clasificacion_financiera":clasificacion
        }
        resultado_final.push(resultado_usuario);
    });
    return resultado_final
}


function calcularAhorro_by_clave(clave, lista) {
    let ahorro_total = 0
    for (const usuario of lista) {
        const ahorro_usuario = calcularAhorro(usuario.salary, usuario.expenses)
        ahorro_total = ahorro_total + ahorro_usuario
    };
    return ahorro_total
}

function agrupar_by_clave(lista_usuarios, clave) {
    const agruparClaves = lista_usuarios.reduce((acc,usuario) => {

       if (acc[usuario[clave]]) {
        acc[usuario[clave]].push(usuario)
       } else {
        acc[usuario[clave]] = [usuario]
       }
       return acc
    }, {})
    return agruparClaves

}

function mostrar_clave_cantidad_ahorro(lista) {
    for (clave1 in lista) {
    const valor = lista[clave1]
    const clave2 = {"clave":clave1}
    const cantidad = {"cantidad":valor.length}
    const ahorro_total ={"ahorro_total":calcularAhorro_by_clave(clave1, valor)}
    const resultado = [clave2, cantidad, ahorro_total]
    console.log(resultado)
    }

}
/* CODIGO PRINCIPAL */
/* 1_ */
const id_buscado = parseInt(prompt("Escribe el id del usuario: "));
console.log(balanceMensual(id_buscado));

/* 2_ */
console.log(clasificacion_financiera(usuarios));

/* 3_ */
const lista_bancos_usuarios = agrupar_by_clave(usuarios, "bank")
mostrar_clave_cantidad_ahorro(lista_bancos_usuarios)

console.log("")
console.log("")
console.log("")

/* 4_ */
const lista_pais_usuarios = agrupar_by_clave(usuarios, "country")
mostrar_clave_cantidad_ahorro(lista_pais_usuarios)