require('datejs');

function combineUsers(...args) {
  const combinedObject = {
    users: [],
  };

  args.forEach(array => {
    combinedObject.users = [...combinedObject.users, ...array];
  });

  combinedObject.merge_date = new Date().toString('M/d/yyyy');

  return combinedObject;
}

// Example usage:
const result = combineUsers(['user1', 'user2'], ['user3', 'user4']);
console.log(result);
// Output: { users: ['user1', 'user2', 'user3', 'user4'], merge_date: '10/1/2023' }