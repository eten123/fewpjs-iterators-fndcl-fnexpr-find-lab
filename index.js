const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"},
    {year: "2015", result: "L"},
]


function superbowlWin(objectArray){
    const winYear = objectArray.find(obj => {
      return obj.result === "W"
    })
  
    return (!!winYear) ? winYear.year : undefined
  }