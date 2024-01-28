class DescriptiveStatistics {
    constructor(data) {
      this.data = data;
    }
  
    // Measures of Central Tendency
  
    mean() {
      const sum = this.data.reduce((acc, val) => acc + val, 0);
      return sum / this.data.length;
    }
  
    median() {
      const sortedData = this.data.sort((a, b) => a - b);
      const middleIndex = Math.floor(this.data.length / 2);
      if (this.data.length % 2 === 0) {
        return (sortedData[middleIndex - 1] + sortedData[middleIndex]) / 2;
      } else {
        return sortedData[middleIndex];
      }
    }
  
    mode() {
      const frequencyMap = new Map();
      this.data.forEach((value) => {
        frequencyMap.set(value, (frequencyMap.get(value) || 0) + 1);
      });
      let mode = [];
      let maxFrequency = 0;
      frequencyMap.forEach((frequency, value) => {
        if (frequency > maxFrequency) {
          mode = [value];
          maxFrequency = frequency;
        } else if (frequency === maxFrequency) {
          mode.push(value);
        }
      });
      return mode;
    }
  
    // Measures of Dispersion
  
    range() {
      const sortedData = this.data.sort((a, b) => a - b);
      return sortedData[sortedData.length - 1] - sortedData[0];
    }
  
    variance() {
      const mean = this.mean();
      const squaredDifferences = this.data.map((value) => Math.pow(value - mean, 2));
      const sumSquaredDifferences = squaredDifferences.reduce((acc, val) => acc + val, 0);
      return sumSquaredDifferences / this.data.length;
    }
  
    standardDeviation() {
      return Math.sqrt(this.variance());
    }
  
    quartiles() {
      const sortedData = this.data.sort((a, b) => a - b);
      const q1Index = Math.floor(this.data.length / 4);
      const q2Index = Math.floor(this.data.length / 2);
      const q3Index = Math.floor((3 * this.data.length) / 4);
      return [sortedData[q1Index], sortedData[q2Index], sortedData[q3Index]];
    }
  
    interquartileRange() {
      const quartiles = this.quartiles();
      return quartiles[2] - quartiles[0];
    }
  }
  
  // Example usage
  const data = [10, 20, 60, 4, 52, 52, 65, 78, 18, 90, 100];
  const stats = new DescriptiveStatistics(data);
  
  console.log("Mean:", stats.mean());
  console.log("Median:", stats.median());
  console.log("Mode:", stats.mode());
  console.log("Range:", stats.range());
  console.log("Variance:", stats.variance());
  console.log("Standard Deviation:", stats.standardDeviation());
  console.log("Quartiles:", stats.quartiles());
  console.log("Interquartile Range:", stats.interquartileRange());
  