const getNeighborhoodsList = () => {
    const self = this;

    this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

    this.addNeighborhood = (newNeighborhood) => {
	this.sanFranciscoNeighborhoods.push(newNeighborhood);
	return this.sanFranciscoNeighborhoods;
    };
};

export default getNeighborhoodsList;
