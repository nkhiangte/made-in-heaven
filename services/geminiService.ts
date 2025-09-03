import { GoogleGenAI, Type } from "@google/genai";
// FIX: Import KundliDetails type to be used in generateKundliMatch function.
import { KundliDetails } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export const generateBio = async (keywords: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Heng thumal hmang hian nupui/pasal zawnna profile bio duhawm, ngaihnobei, leh tha tak, tawngkam 80-100 velin siam rawh: "${keywords}". A aw ki chu a tak, mi hip thei tur, nupui/pasal zawnna site-a mi te duh zawng tur a ni.`,
    });
    return response.text;
  } catch (error) {
    console.error("Error generating bio:", error);
    return "A pawi khawp mai, tunah rih chuan bio ka siam thei lo. Khawngaihin a hnuah i rawn bei leh dawn nia.";
  }
};

export const generateCompatibilityReport = async (desc1: string, desc2: string): Promise<string> => {
  try {
    const prompt = `
      Mi pahnih inlaichinna inmil dan tur anmahni insawifiahna atanga zirchiang rawh. Inlaichinna psychology thil zirchianna atanga report chiang tak siam rawh. Khawvelnunge, arsi, a nih loh leh thil mak dang lam reng reng sawi lang suh.

      Heng laite hi ngaihtuah bik ang che:
      1. **Nungchang Inmilna:** An mizia inang lohna te khaikhin rawh (entirnan, mi kawm nuam/kawm nuam lo, mi kom/mi fiamthu duh).
      2. **Thil Pawimawh & Tum Inang:** Nuna an thil ngaihhlut zawng inangte zawn chhuah (entirnan, chhungkua, hna, khualzin).
      3. **Tui Zawng Inang:** An tuizawng inang, inzawmna siam theitu turte sawi lang rawh.
      4. **Harsatna Awm Thei:** An inan lohna avanga inbiakremna leh in-hnuk tawnna mamawh theihna laite dimtein sawi lang ang che.
      5. **A Tlangpui:** A tawp berah, nupa an nih theihna tura thil tha leh fuihna thu nen khar ang che.

      **Mi 1-na Insawifiahna:**
      "${desc1}"

      **Mi 2-na Insawifiahna:**
      "${desc2}"

      A chhuah tur chu a remchang leh chhiar nuam turin siam ang che. Luhai leh a aia te turin markdown hmang ang che.
    `;
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Error generating compatibility report:", error);
    return "A pawi khawp mai, inmilna report ka siam thei lo. Khawngaihin a kimchang i en nawn a, i bei leh dawn nia.";
  }
};

export const generateKundliMatch = async (details1: KundliDetails, details2: KundliDetails): Promise<string> => {
  try {
    const prompt = `
      Nupa tuak ni thei turte tan nupui/pasal zawnna website-a hman tur "Cosmic Compatibility" (Arsi atanga Inmilna) report siam rawh. A aw ki chu a tha zawng, tunlai mil, leh fuihna lam hawi ni se.
      An pian hun atanga an arsi lam inmilna zirchiang rawh. Tawngkam hriat har lutuk emaw sakhaw lam hawi a tam loh nan, an nungchang inmil theih dan lam hawia hrilhfiahna pe zawk ang che.

      Report hetiang hian duang ang che:
      1. **Inmilna Tlangpui (100-ah):** 100-ah engzat nge an inmil tih ziak la, a tawi tein sawifiah bawk ang che.
      2. **Nungchang Inmilna:** An mizia inmil theih dan tur sawifiah rawh. Inremna leh inpumkhatna awm theihna laite leh an thanlenpui theihna tur laite sawi lang ang che.
      3. **Inbiakpawhna Dan:** An arsi dinhmun atanga an inbiakpawh theih dan tur zirchiang rawh.
      4. **Thil Pawimawh & Nun Kawng Inang:** An tum leh nunah an thil ngaih pawimawh zawngte inmil theihna laite sawi rawh.
      5. **Inlaichinna Thatna Turte:** An inlaichinna-a thatna tur langsar 3-5 vel sawi lang rawh.
      6. **Hriat Tur Pawimawhte:** Fimkhur taka an ngaihtuah dun theih tur harsatna awm thei 2-3 vel sawi lang ang che.

      A tawp berah, a tlangkawmna tha tak leh fuihna thu nen khar ang che. A chhuah tur chu markdown format-in siam rawh.

      **Mi 1-na (Mipa):**
      - Hming: ${details1.name}
      - Pianni: ${details1.dob}
      - Pian hun: ${details1.tob}
      - Pianna hmun: ${details1.pob}

      **Mi 2-na (Hmeichhia):**
      - Hming: ${details2.name}
      - Pianni: ${details2.dob}
      - Pian hun: ${details2.tob}
      - Pianna hmun: ${details2.pob}
    `;
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Error generating Kundli match report:", error);
    return "A pawi khawp mai, inremna report ka siam thei lo. Khawngaihin a kimchang i en nawn a, i bei leh dawn nia.";
  }
};
