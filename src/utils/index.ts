//function for formatDate from string timestamp to DD MMMM YYYY format
export const formatDate = (dateString: string): string => {
  const months = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
  ];

  const [year, month, day] = dateString.split(" ")[0].split("-");
  const monthName = months[parseInt(month, 10) - 1];
  return `${parseInt(day, 10)} ${monthName} ${year}`;
};

//function for uppercase bank name with condition if more than 4 only uppercase the first letter and if below than 4 uppercase all the name
export const formatBankName = (input: string): string => {
  if (input.length > 4) {
    return input.charAt(0).toUpperCase() + input.slice(1);
  } else {
    return input.toUpperCase();
  }
};

//function for formating number to Indonesia curreny Rpxxx.xxx
export const formatRupiah = (amount: number): string => {
  const formattedNumber = amount
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `Rp${formattedNumber}`;
};
