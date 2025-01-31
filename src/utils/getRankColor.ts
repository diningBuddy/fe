const getRankColor = (index: number) => {
  if (index === 0) return "#D61E3A";
  if (index === 1) return "#B0102D";
  if (index === 2) return "#8A0622";

  return "#000000CC";
};

export default getRankColor;
