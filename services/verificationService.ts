/**
 * Simulates a call to a backend service that would, in turn, call a real
 * third-party ID verification provider (e.g., Onfido, Veriff, HyperVerge).
 *
 * @param idType The type of ID being submitted (e.g., 'Aadhaar').
 * @param file The file object of the ID image.
 * @returns A promise that resolves with the verification result.
 */
export const submitForRealVerification = async (
  idType: string,
  file: File
): Promise<{ verified: boolean; reason: string }> => {
  console.log(`Simulating verification for ${idType} with file: ${file.name}`);

  // This function simulates the multi-step process:
  // 1. Frontend securely uploads the file to your backend.
  // 2. Your backend securely sends the file/data to the third-party service.
  // 3. The third-party service processes the document (this takes time).
  // 4. The third-party service sends a result back to your backend.
  // 5. Your backend sends the final result back to the frontend.

  // We'll use a Promise and setTimeout to simulate this network/processing delay.
  return new Promise((resolve) => {
    setTimeout(() => {
      // In a real scenario, the 'reason' would come from the verification provider.
      // We are simulating a successful verification here for demonstration purposes.
      resolve({
        verified: true,
        reason: "Finfiahna a hlawhtling. Kan thawhpui rin tlak takin i ID a nemnghet e.",
      });
    }, 4500); // Simulate a 4.5-second delay for the whole process
  });
};
