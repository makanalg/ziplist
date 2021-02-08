const list1 = ['a', 'b', 'c'];
const list2 = [1, 2, 3];

function zipList(firstList, secondList) {
  const resultList = [];
  for (let i = 0; i < firstList.length; i++) {
    resultList.push(firstList[i], secondList[i]);
  }
  return resultList;
}

console.log(zipList(list1, list2));

function zipListTheSimplyWay(firstList, secondList) {
  return _.flatten(_.zip(firstList, secondList));
}

console.log(zipListTheSimplyWay(list1, list2));
