const process = require('node:process');



class Bruch {
    constructor(zaehler, nenner) 
    {
        if (nenner === 0) throw new Error("Nenner darf nicht 0 sein!");
        this.zaehler = zaehler;
        this.nenner = nenner;
        this.kuerzen();
    }

    // Addiert einen anderen Bruch und gibt einen neuen Bruch zurück
    addiere(andere) 
    {
        const neuerZaehler = this.zaehler * andere.nenner + andere.zaehler * this.nenner;
        const neuerNenner = this.nenner * andere.nenner;
        return new Bruch(neuerZaehler, neuerNenner);
    }

    // Kürzt den Bruch
    kuerzen() 
    {
        const ggt = (a, b) => b === 0 ? Math.abs(a) : ggt(b, a % b);
        const teiler = ggt(this.zaehler, this.nenner);
        this.zaehler /= teiler;
        this.nenner /= teiler;
        
    }

    // Gibt den Bruch als String zurück
    toString() 
    {
        if (Math.abs(this.zaehler) >= this.nenner) 
        {
            const ganz = Math.trunc(this.zaehler / this.nenner);
            const rest = Math.abs(this.zaehler % this.nenner);
            if (rest === 0) return `${ganz}`;
            return `${ganz} ${rest}/${this.nenner}`;
        }
        return `${this.zaehler}/${this.nenner}`;
    }

    // Parst einen String wie "3 3/4" oder "1/2" zu einem Bruch-Objekt
    static parse(b) 
    {
        let splitter;
        let bruchsplitter;

    if(b.includes(" ")) 
    {
        splitter = b.split(" ");
        bruchsplitter =splitter[1].split("/");
    }
    else
    {
        bruchsplitter =b.split("/");
        splitter =["0", b];
    }
    
    let ganz=Number(splitter[0]);
    let zaehler=Number(bruchsplitter[0]);
    let nenner=Number(bruchsplitter[1]);
    
    zaehler=zaehler+ganz*nenner;
    if(nenner==0 || isNaN(Number(ganz)) || isNaN(Number(zaehler)) || isNaN(Number(nenner)))
    {

        throw ("Diese Eingabe ist leider nicht gültig");

    }

    return new Bruch (zaehler,nenner)
    }
}



// Beispiel
const b1 = Bruch.parse(process.argv[2]);
const b2 = Bruch.parse(process.argv[3]);
const summe = b1.addiere(b2);
console.log(`${b1.toString()} + ${b2.toString()} = ${summe.toString()}`);
