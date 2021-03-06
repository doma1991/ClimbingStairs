
// You are climbing a staircase that has n steps. You can take the steps either 1 or 2 at a time. Calculate how many distinct ways you can climb to the top of the staircase.

function climbingStairs(n) {

//This is based on fibonacci sequence but it's shifted by one place 
// (
// 1 = 1 way
// 2 = 2 ways
// 3 = 3 ways
// 4 = 5 ways
// 5 = 8 ways
// )

  const climb = (stairs) => {
    if (stairs <= 1) { return 1; }
    return climb(stairs - 1) + climb(stairs - 2);
  }
  let result = climb(n);
  return result;
}


const num = 26;
console.log(climbingStairs(num));