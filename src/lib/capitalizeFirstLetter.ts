const capitalizeFirstLetter = (str: string) => {
  return str.replace(/^\w/, (c) => c.toUpperCase());
}

export {capitalizeFirstLetter}