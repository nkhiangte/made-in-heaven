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

// FIX: Add generateKundliMatch function to resolve import error in KundliMatcher.tsx.
export const generateKundliMatch = async (details1: KundliDetails, details2: KundliDetails): Promise<string> => {
  try {
    const prompt = `
      Nupa tuak ni thei turte tan nupui/pasal zawnna website-a hman tur Kundli inmilna (arsi lam inmilna) report awlsam tak siam rawh.
      A aw ki chu a tha zawng leh fuihna lam hawi ni se, an thatna laite sawi lang bawk ang che.
      Arsi lem ziak buai lovin, an pian hun leh hmun atanga a tlangpui chauh pe chhuak rawh.

      Vedic astrology atanga an inmilna zirchiang la, Guna Milan (Ashtakoot) ang chi te ngaihtuah tel ang che.
      36-a engzat nge an hmuh tarlang la, heng Koota-te hi a tawi tein hrilhfiah bawk ang che:
      1. Varna/Jati
      2. Vashya
      3. Tara/Dina
      4. Yoni
      5. Graha Maitri
      6. Gana
      7. Bhakoot/Rasi
      8. Nadi

      An inmilna tlangpui leh harsatna an tawh theih laka fuihna thu dimte nen khar ang che.
      A chhuah tur chu markdown format-in siam rawh.

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
    return "A pawi khawp mai, Kundli inmilna report ka siam thei lo. Khawngaihin a kimchang i en nawn a, i bei leh dawn nia.";
  }
};