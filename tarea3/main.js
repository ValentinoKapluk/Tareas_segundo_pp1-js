const usuarios = [{"id":1,"first_name":"Edna","last_name":"Connal","email":"econnal0@aol.com","gender":"Female","ip_address":"249.117.125.55"},
{"id":2,"first_name":"Valina","last_name":"Munehay","email":"vmunehay1@wunderground.com","gender":"Female","ip_address":"241.182.234.92"},
{"id":3,"first_name":"Maurise","last_name":"Holdron","email":"mholdron2@tiny.cc","gender":"Female","ip_address":"61.191.178.207"},
{"id":4,"first_name":"Foss","last_name":"Rubartelli","email":"frubartelli3@globo.com","gender":"Male","ip_address":"74.110.172.10"},
{"id":5,"first_name":"Tamar","last_name":"Guerreiro","email":"tguerreiro4@usa.gov","gender":"Female","ip_address":"85.15.85.37"},
{"id":6,"first_name":"Dulci","last_name":"Oldcote","email":"doldcote5@feedburner.com","gender":"Female","ip_address":"94.74.69.0"},
{"id":7,"first_name":"Angele","last_name":"Padden","email":"apadden6@facebook.com","gender":"Female","ip_address":"168.203.121.147"},
{"id":8,"first_name":"Christye","last_name":"Kemm","email":"ckemm7@biglobe.ne.jp","gender":"Female","ip_address":"109.231.213.119"},
{"id":9,"first_name":"Dorree","last_name":"Leaf","email":"dleaf8@walmart.com","gender":"Female","ip_address":"26.141.110.99"},
{"id":10,"first_name":"Horst","last_name":"Asken","email":"hasken9@reddit.com","gender":"Male","ip_address":"52.198.216.136"},
{"id":11,"first_name":"Gearard","last_name":"Tampen","email":"gtampena@cdc.gov","gender":"Male","ip_address":"223.108.46.12"},
{"id":12,"first_name":"Nefen","last_name":"Mouton","email":"nmoutonb@jugem.jp","gender":"Male","ip_address":"100.153.26.7"},
{"id":13,"first_name":"Raye","last_name":"Feldberger","email":"rfeldbergerc@tripod.com","gender":"Female","ip_address":"105.7.128.98"},
{"id":14,"first_name":"Patricio","last_name":"Hallgath","email":"phallgathd@google.com.br","gender":"Male","ip_address":"215.47.204.164"},
{"id":15,"first_name":"Elonore","last_name":"Giblett","email":"egiblette@yale.edu","gender":"Female","ip_address":"65.223.123.107"},
{"id":16,"first_name":"Dylan","last_name":"Brundell","email":"dbrundellf@bloglovin.com","gender":"Male","ip_address":"27.51.208.15"},
{"id":17,"first_name":"Doy","last_name":"Feronet","email":"dferonetg@moonfruit.com","gender":"Male","ip_address":"196.118.174.4"},
{"id":18,"first_name":"Bonnibelle","last_name":"Crombie","email":"bcrombieh@cmu.edu","gender":"Female","ip_address":"47.32.122.56"},
{"id":19,"first_name":"Lanette","last_name":"Fillingham","email":"lfillinghami@ycombinator.com","gender":"Female","ip_address":"36.91.59.55"},
{"id":20,"first_name":"Leonerd","last_name":"Caws","email":"lcawsj@t-online.de","gender":"Male","ip_address":"35.186.43.213"},
{"id":21,"first_name":"Gabi","last_name":"Normandale","email":"gnormandalek@ameblo.jp","gender":"Male","ip_address":"240.188.123.241"},
{"id":22,"first_name":"Talbot","last_name":"Klimuk","email":"tklimukl@hao123.com","gender":"Male","ip_address":"174.225.236.156"},
{"id":23,"first_name":"Ignatius","last_name":"Lamping","email":"ilampingm@cdbaby.com","gender":"Male","ip_address":"118.242.26.37"},
{"id":24,"first_name":"Pamela","last_name":"Benedit","email":"pbeneditn@rediff.com","gender":"Female","ip_address":"103.95.40.234"},
{"id":25,"first_name":"Tallia","last_name":"Ropartz","email":"tropartzo@gnu.org","gender":"Bigender","ip_address":"153.178.20.118"},
{"id":26,"first_name":"Rutter","last_name":"Dunderdale","email":"rdunderdalep@addthis.com","gender":"Male","ip_address":"7.49.100.99"},
{"id":27,"first_name":"Shermie","last_name":"Stokes","email":"sstokesq@buzzfeed.com","gender":"Male","ip_address":"70.2.12.238"},
{"id":28,"first_name":"Merle","last_name":"Elden","email":"meldenr@wufoo.com","gender":"Male","ip_address":"155.41.245.186"},
{"id":29,"first_name":"Jobyna","last_name":"Betjeman","email":"jbetjemans@salon.com","gender":"Female","ip_address":"41.245.107.247"},
{"id":30,"first_name":"Dom","last_name":"Denyagin","email":"ddenyagint@indiatimes.com","gender":"Male","ip_address":"55.215.180.242"},
{"id":31,"first_name":"Merell","last_name":"Vicarey","email":"mvicareyu@smugmug.com","gender":"Male","ip_address":"251.9.119.157"},
{"id":32,"first_name":"Charmaine","last_name":"Dunan","email":"cdunanv@omniture.com","gender":"Female","ip_address":"217.70.169.119"},
{"id":33,"first_name":"Brenda","last_name":"Senescall","email":"bsenescallw@msu.edu","gender":"Female","ip_address":"124.35.21.132"},
{"id":34,"first_name":"Delmor","last_name":"Cunnah","email":"dcunnahx@bbc.co.uk","gender":"Male","ip_address":"21.255.192.93"},
{"id":35,"first_name":"Lila","last_name":"Doohey","email":"ldooheyy@thetimes.co.uk","gender":"Female","ip_address":"187.196.118.98"},
{"id":36,"first_name":"Fancy","last_name":"Etherson","email":"fethersonz@virginia.edu","gender":"Female","ip_address":"125.208.255.234"},
{"id":37,"first_name":"Cherise","last_name":"Fulham","email":"cfulham10@icq.com","gender":"Female","ip_address":"107.84.2.136"},
{"id":38,"first_name":"Shaughn","last_name":"MacGillicuddy","email":"smacgillicuddy11@home.pl","gender":"Agender","ip_address":"94.4.44.216"},
{"id":39,"first_name":"Harcourt","last_name":"Yitzovitz","email":"hyitzovitz12@sphinn.com","gender":"Male","ip_address":"248.38.161.176"},
{"id":40,"first_name":"Carla","last_name":"Gorwood","email":"cgorwood13@furl.net","gender":"Female","ip_address":"220.222.144.127"},
{"id":41,"first_name":"Delmer","last_name":"Pepperrall","email":"dpepperrall14@fotki.com","gender":"Male","ip_address":"233.194.246.191"},
{"id":42,"first_name":"Ernest","last_name":"Prantl","email":"eprantl15@people.com.cn","gender":"Bigender","ip_address":"132.31.93.190"},
{"id":43,"first_name":"Upton","last_name":"Lavallie","email":"ulavallie16@google.es","gender":"Male","ip_address":"83.40.87.30"},
{"id":44,"first_name":"Stan","last_name":"Hammonds","email":"shammonds17@edublogs.org","gender":"Male","ip_address":"4.84.22.188"},
{"id":45,"first_name":"Karry","last_name":"Kettles","email":"kkettles18@dailymail.co.uk","gender":"Female","ip_address":"57.83.117.3"},
{"id":46,"first_name":"Walton","last_name":"Bremmell","email":"wbremmell19@geocities.jp","gender":"Non-binary","ip_address":"141.180.10.194"},
{"id":47,"first_name":"Boonie","last_name":"Gostall","email":"bgostall1a@rakuten.co.jp","gender":"Male","ip_address":"200.76.87.68"},
{"id":48,"first_name":"Bailey","last_name":"Rush","email":"brush1b@github.io","gender":"Male","ip_address":"63.87.117.25"},
{"id":49,"first_name":"Maiga","last_name":"Rennebach","email":"mrennebach1c@wikipedia.org","gender":"Female","ip_address":"100.50.61.99"},
{"id":50,"first_name":"Bentley","last_name":"Lembcke","email":"blembcke1d@whitehouse.gov","gender":"Male","ip_address":"145.83.91.50"}];

const id_buscado = parseInt(prompt("Ingrese el ID del Usuario"));
let contador = 0;
const usuario_entontrado = usuarios.find((usuario) => {
    if (usuario.id === id_buscado) {
        console.log(usuario.id, usuario.first_name, usuario.last_name, usuario.email, usuario.gender, usuario.ip_address)
    } else {
        contador++
    }
});

if (contador == usuarios.length) {
    console.log("Usuario no encontrado")
};

const conteoGeneros = usuarios.reduce((acc,usuario) => {
    if (acc[usuario.gender]) {
        acc[usuario.gender]++
    }  else {
        acc[usuario.gender] = 1;
    }
    return acc;
    }, {})
    console.log("Cantidad de Generos: ", conteoGeneros);