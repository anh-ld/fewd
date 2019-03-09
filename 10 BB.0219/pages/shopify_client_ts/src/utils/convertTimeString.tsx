const convertTimeString = (givenTime: string): string=> {
  let date = givenTime.slice(0, 10);
  let time = givenTime.slice(11, 19);
  return `${date} at ${time}`;
}

export default convertTimeString;