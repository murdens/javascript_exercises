const removeFromArray = function(...args) {
    const newArray = [];
    const array = args[0];
        array.forEach((item) => {
            if (!args.includes(item)){
            newArray.push(item);
            }
    });
    return newArray;
}

module.exports = removeFromArray
