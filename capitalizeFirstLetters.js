function capitalizeFirst(input) {
    if (input.length > 0) {
      return input
        .split(" ")
        .map((word) => {
          return word[0].toUpperCase() + word.slice(1);
        })
        .join(" ");
    } else {
      return "";
    }
  }

module.exports = capitalizeFirst;

