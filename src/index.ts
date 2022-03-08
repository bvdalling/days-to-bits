const CONVERT_TO_DECIMAL = (decimal:Number):string => {
  return ("00000000"+Number(decimal).toString(2)).slice(-8)
}

export const FULL = 0
export const SHORT = 1
export const NUMBERS = 2

const BIT_DAYS:Record<number, string> = {
    6 : '00000001', // Monday    =>  1
    5 : '00000010', // Tuesday   =>  2
    4 : '00000100', // Wednesday =>  4
    3 : '00001000', // Thursday  =>  8
    2 : '00010000', // Friday    => 16
    1 : '00100000', // Saturday  => 32
    0 : '01000000', // Sunday    => 64
};

const DAYS_TO_BITS:Record<number, number> = {
  6 : 1, // Monday
  5 : 2, // Tuesday
  4 : 4, // Wednesday
  3 : 8, // Thursday
  2 : 16, // Friday
  1 : 32, // Saturday
  0 : 64, // Sunday
}

const STRING_DAYS:Record<number, string> = {
    1 : 'Monday', // Monday    =>  1
    2 : 'Tuesday', // Tuesday   =>  2
    3 : 'Wednesday', // Wednesday =>  4
    4 : 'Thursday', // Thursday  =>  8
    5 : 'Friday', // Friday    => 16
    6 : 'Saturday', // Saturday  => 32
    0 : 'Sunday', // Sunday    => 64
}

const STRING_SHORT_DAYS:Record<number, string> = {
    1 : 'Mon', // Monday    =>  1
    2 : 'Tue', // Tuesday   =>  2
    3 : 'Wed', // Wednesday =>  4
    4 : 'Thu', // Thursday  =>  8
    5 : 'Fri', // Friday    => 16
    6 : 'Sat', // Saturday  => 32
    0 : 'Sun', // Sunday    => 64
}

const Bit = {
  // Package an array of day values (0-based) into a decimal
  packDays (days:Number[]) {
    let packed = 0
    
    days.forEach((day:any) => {
      packed += DAYS_TO_BITS[day]
    })
    
    return packed
  },
  // Extract the Day Values from the 
  unpackDays (decimal:number, type:number = NUMBERS) {
    const binary:string = CONVERT_TO_DECIMAL(decimal)
    let days:any[] = []

    Object.keys(BIT_DAYS).forEach((key:any) => {
      const day:string = CONVERT_TO_DECIMAL(key)

      if (parseInt(BIT_DAYS[key], 2) & parseInt(binary, 2))
        days.push(type === FULL ? STRING_DAYS[parseInt(day, 2)] : type === SHORT ? STRING_SHORT_DAYS[parseInt(day, 2)] : parseInt(day, 2))
    })
    
    return days
  }
}

export default Bit