// code your solution here
function superbowlWin(record) {
    const win = record.find(entry => entry.result === "W");
    if (win) {
      return win.year;
    }
    // If no win object was found, return undefined
    return undefined;
  }
  