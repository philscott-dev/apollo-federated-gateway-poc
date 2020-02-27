const resolvers = {
  Item: {
    propTwo(ref: any) {
      return 'service two'
    }
  }
};

export default resolvers;
