const data = [
  {id: 1, name: 'one'},
  {id: 2, name: 'two'},
  {id: 3, name: 'three'},
]

const resolvers = {
  Query: {
    items() {
      return data;
    }
  },
};

export default resolvers;
