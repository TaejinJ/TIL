/**for문과 switch문 */
function DNAStrand(dna) {
    //your code here
    // 1. T > A 
    //    A < T
    //    G > C
    //    C > G
    let empty = "";

    for (let i = 0; i < dna.length; i++) {
        const char = dna[i];
        switch (char) {
            case "A":
                empty += "T";
                break;
            case "T":
                empty += "A";
                break;
            case "C":
                empty += "G";
                break;
            case "G":
                empty += "C";
                break;
        }
    }
    return empty;
}

function DNAStrand2(dna) {
    const complementaryMap = {
        A: "T",
        T: "A",
        C: "G",
        G: "C",
    };

    const complementary = [...dna].map((nucleotide) => complementaryMap[nucleotide]);

    return complementary.join("");
}
