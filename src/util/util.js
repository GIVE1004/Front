export const AddComma = (number) => {
    return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  };

export const Scaleing = (number) =>{
  const uk = 1e8;
  const man = 1e4;

  if (number >= uk) {
    return (number / uk).toFixed(1) + '억';
  } else if (number >= man) {
    return (number / man).toFixed(1) + '만';
  } else {
    return number.toString();
  }
}

function truncateString(str, maxLength) {
  if (str.length > maxLength) {
    return str.substring(0, maxLength - 3) + '...';
  } else {
    return str;
  }
}