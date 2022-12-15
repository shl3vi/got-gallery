export const fetchCharacters = async () => {
  const response = await fetch("https://thronesapi.com/api/v2/Characters");
  const data = await response.json();
  return data;
};
