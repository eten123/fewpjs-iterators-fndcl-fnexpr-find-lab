


function superbowlWin(objectArray){ //objectArray is a placeholder for a random array we may choose to input
    const winYear = objectArray.find(obj => {
      return obj.result === "W" //grabs the first object that has a w in the year for the result tab
    })
  
    return (!!winYear) ? winYear.year : undefined  //ternary expression, if the the win years equal eachother then return win year else return undefined
  }