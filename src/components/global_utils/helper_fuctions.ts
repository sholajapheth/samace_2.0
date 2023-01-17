// function to check date format and return in normal date format
export function detectDateFormat(input: string): string {
  // Check if the input string is in the required date format (YYYY-MM-DDTHH:mm:ss.sssZ)
  const dateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;
  if (!dateRegex.test(input)) {
    // If the input string is not in the required date format, return an empty string
    return "";
  }

  // If the input string is in the required date format, return it in the normal date format (YYYY-MM-DD)
  const date = new Date(input);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
}

// reuseable function camelize to convert string to camelcase
export function camelize(str: string) {
  return str
    .toLowerCase()
    .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
      if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
      return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
}

// one time component here for table data
