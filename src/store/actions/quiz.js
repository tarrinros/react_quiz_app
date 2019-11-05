export function fetchQuizes() {
  return async (dispatch) => {
    try {
      const response = await axios.get('/quizes.json');
      const quizes = [];

      Object.keys(response.data).forEach((key, index) => {
        quizes.push({
          id: key,
          name: `Test #${index + 1}`
        });
      });

      this.setState({
        quizes,
        loading: false
      })
    } catch (e) {
      console.log(e)
    }
  }
}