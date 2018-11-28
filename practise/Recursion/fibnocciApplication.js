const maxSteps = 3;

const recursiveCount = (currentCount, totalSteps) => {
    if (currentCount === totalSteps) {       
        currentCount = 0;       
        return;
    } else if (currentCount > totalSteps) {
        return;
    }

    for (let it = 1; it <= maxSteps; it++) {
        recursiveCount(currentCount + it, totalSteps);
    }
}



console.log(recursiveCount(0, 5))

// count  = 1,2,

// let dp = [0,1,2,4];
// const incrementApproach = (totalSteps) => {
//     if (dp[totalSteps] !== undefined) {
//         return dp[totalSteps];
//     }
//     let oneStepAtTime = incrementApproach(totalSteps - 1);
//     let twoStepsAtTime = incrementApproach(totalSteps - 2);
//     let threeStepsAtTime = incrementApproach(totalSteps - 3);
//     return dp[totalSteps] = oneStepAtTime + twoStepsAtTime + threeStepsAtTime;
// }

// incrementApproach()