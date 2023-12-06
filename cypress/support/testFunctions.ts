export const generateRandomEmail = () => {
  let randomString = "";
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";

  let counter = 0;

  while (counter < 8) {
    randomString += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
    counter += 1;
  }
  return randomString + "@cypresstest.com";
};
