/* 
    cas: je doba v sekundách, po kterou trouba
    odebírala uvedený příkon
    spotreba: je kolik energie by bylo spotřebováno,
    pokud by takto trouba pekla celou hodinu
    (jsou to watthodiny [Wh])

    pro cas: 600s a spotreba: 3500 Wh je skutečné
    odebrané množství "energie":
    3500 * (600 / 3600) === 3500 * (1/6) === 583,333W
*/
type Odber = {
    cas: number, //čas je v sekundách
    spotreba: number //spotřeba ve watech za hodinu
}
const cena: number = 6.70; // Kč / kWh
let data: Array<Odber> = [
    { cas: 600, spotreba: 3500 },
    { cas: 120, spotreba: 0 },
    { cas: 300, spotreba: 1700 }, // data[2].cas
    { cas: 60, spotreba: 0 },
    { cas: 800, spotreba: 1500 },
]
let cas:number = 0
let stalo:number = 0
let prumernaspotreba:number = 0
let pocetmereni:number = 0


for (const peceme of data){
    cas += peceme.cas
    prumernaspotreba += peceme.spotreba/1000
    pocetmereni += 1
}

prumernaspotreba = prumernaspotreba / pocetmereni * cas / 3600
stalo = prumernaspotreba * cena * cas / 3600
cas = Math.roundWithPrecision(cas/60, 2)

console.log("Průměrná spotřeba je "+Math.roundWithPrecision(prumernaspotreba, 2)+" kWh")
console.log("Pečení stálo " + Math.roundWithPrecision(stalo, 2)+" Kč")
console.log("Pekli jsme "+cas+" minut")