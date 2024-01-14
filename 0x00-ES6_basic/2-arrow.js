export default function getNeighborhoodsList = () => {
    const self = this;

    this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

    this.addNeighborhood = (newNeighborhood) => {
	this.sanFranciscoNeighborhoods.push(newNeighborhood);
	return this.sanFranciscoNeighborhoods;
    };
};
